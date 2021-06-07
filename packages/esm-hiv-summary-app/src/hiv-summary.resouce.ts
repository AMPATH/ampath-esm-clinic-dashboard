import { openmrsObservableFetch } from '@openmrs/esm-framework';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs';
import find from 'lodash-es/find';
import isNil from 'lodash-es/isNil';
import { of } from 'rxjs';
import { HIVSummary } from './types';
import { toDateFormat } from './widgets/helper';
import { mockDataHIVData } from '../../../__mocks__/mock-data';

interface HivSummaryFetchResponse {
  result: Array<HIVSummary>;
  size: number;
  sql: string;
  startIndex: number;
  sqlParams: Array<any>;
}

export function fetchHivSummary(
  patientUuid: string,
  startIndex = 0,
  limit: number = 20,
  includeNonClinicalEncounter?: boolean,
) {
  const url = `/etl-latest/etl/patient/${patientUuid}/hiv-summary?startIndex=${startIndex}&limit=${limit}&includeNonClinicalEncounter=${includeNonClinicalEncounter}`;
  // return openmrsObservableFetch<HivSummaryFetchResponse>('/ws/ws/rest/v1/session').pipe(
  //   map(({ data }) => data.result),
  // );
  return of(mockDataHIVData);
}

export function determineIfVlIsPending(hivSummary: any) {
  const overDueDays = isNil(hivSummary.vl_order_date)
    ? this.dateDiffInDays(new Date(hivSummary.vl_order_date), new Date())
    : 0;
  if (overDueDays > 0) {
    if (isNil(hivSummary.vl_1_date)) {
      if (isNil(hivSummary.vl_order_date)) {
        return {
          status: hivSummary.vl_order_date > hivSummary.vl_1_date,
          days: overDueDays,
        };
      }
    } else {
      return {
        status: true,
        days: overDueDays,
      };
    }
  } else {
    return {
      status: false,
      days: overDueDays,
    };
  }
}

export function determineIfCD4IsPending(hivSummary: any) {
  const overDueDays = isNil(hivSummary.cd4_order_date)
    ? this.dateDiffInDays(new Date(hivSummary.cd4_order_date), new Date())
    : 0;
  if (overDueDays > 0) {
    if (isNil(hivSummary.cd4_1_date)) {
      if (isNil(hivSummary.cd4_order_date)) {
        return {
          status: hivSummary.cd4_order_date > hivSummary.cd4_1_date,
          days: overDueDays,
        };
      }
    } else {
      return {
        status: true,
        days: overDueDays,
      };
    }
  } else {
    return {
      status: false,
      days: overDueDays,
    };
  }
}

export const loadHivSummary = (data: Array<HIVSummary>) => {
  let hivSummary: HIVSummary;
  for (const summary of data) {
    if (summary.is_clinical_encounter === 1) {
      hivSummary = summary;
      const artStartDate = new Date(summary.arv_first_regimen_start_date).getFullYear();
      if (isNaN(artStartDate) || artStartDate === 1899 || artStartDate === 1900)
        hivSummary.arv_first_regimen_start_date = null;
      break;
    }
  }
  const lastVlDate = getLatesVlDate(data);
  if (endDateIsBeforeStartDate(hivSummary.vl_1_date, lastVlDate)) {
    const filtered = find(data, (summaryObj: HIVSummary) => {
      const vlDateDayJS = toDateFormat(summaryObj['vl_1_date']);
      const lastVlDateDayJS = toDateFormat(lastVlDate);
      if (summaryObj['vl_1_date']) {
        return dayjs(vlDateDayJS).isSame(lastVlDateDayJS);
      }
    });
    // Replace the lab data with latest lab results that may not be clinical
    hivSummary.vl_1_date = filtered.vl_1_date;
    hivSummary.vl_1 = filtered.vl_1;
  }
  return hivSummary;
};

const getLatesVlDate = (summary: Array<HIVSummary>) =>
  new Date(
    Math.max.apply(
      null,
      summary.map((dataItem) => {
        return new Date(dataItem.vl_1_date);
      }),
    ),
  );

const endDateIsBeforeStartDate = (startDate: any, endDate: any) => {
  return dayjs(startDate).isBefore(endDate, 'date');
};
