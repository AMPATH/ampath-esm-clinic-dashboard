import { age } from '@openmrs/esm-framework';
import dayjs from 'dayjs';
import find from 'lodash-es/find';
import isNil from 'lodash-es/isNil';
import { HIVSummary, PatientContraceptionEligibility } from '../types';

export const formatDate = (date: string | Date) => {
  return date === null ? '' : dayjs(date).format('DD - MMM - YYYY');
};

export const zeroVl = (vl: number | string) => {
  if (!vl) return '';
  return vl === 0 || vl === '0' ? 'LDL' : vl;
};

export function determineIfVlIsPending(hivSummary: HIVSummary) {
  const overDueDays = isNil(hivSummary?.vl_order_date)
    ? dayjs(new Date(hivSummary?.cd4_order_date)).diff(new Date(), 'days')
    : 0;
  if (overDueDays > 0) {
    if (isNil(hivSummary?.vl_1_date)) {
      if (isNil(hivSummary?.vl_order_date)) {
        return {
          // @ts-ignore: Object is possibly 'null'.
          status: hivSummary?.vl_order_date > hivSummary?.vl_1_date,
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

export function determineIfCD4IsPending(hivSummary: HIVSummary) {
  const overDueDays = isNil(hivSummary?.cd4_order_date)
    ? dayjs(new Date(hivSummary?.cd4_order_date)).diff(new Date(), 'days')
    : 0;
  if (overDueDays > 0) {
    if (isNil(hivSummary?.cd4_1_date)) {
      if (isNil(hivSummary?.cd4_order_date)) {
        return {
          // @ts-ignore: Object is possibly 'null'.
          status: hivSummary.cd4_order_date > hivSummary?.cd4_1_date,
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
  const lastVlDate = getLatestVlDate(data);
  if (endDateIsBeforeStartDate(hivSummary.vl_1_date, lastVlDate)) {
    const filtered = find(data, (summaryObj: HIVSummary) => {
      const vlDateDayJS = formatDate(summaryObj['vl_1_date']);
      const lastVlDateDayJS = formatDate(lastVlDate);
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

const getLatestVlDate = (summary: Array<HIVSummary>) =>
  new Date(
    Math.max.apply(
      null,
      summary.map((dataItem) => {
        return new Date(dataItem.vl_1_date);
      }),
    ),
  );

const endDateIsBeforeStartDate = (startDate: Date | string, endDate: Date) => {
  return dayjs(startDate).isBefore(endDate, 'date');
};

export const determineEligibilityForContraception = (
  hivSummary: HIVSummary,
  patient: fhir.Patient,
): PatientContraceptionEligibility => {
  const patientAge = Number.parseInt(age(patient.birthDate));
  if (patient.gender?.toUpperCase() === 'MALE')
    return { ineligibilityReason: '(Not eligible) Male Patient', eligiblePatient: false };
  if (patientAge < 14 || patientAge > 49)
    return { ineligibilityReason: '(Not eligible) Not in reproductive age', eligiblePatient: false };
  if (
    patientAge >= 14 &&
    patientAge <= 49 &&
    patient.gender?.toUpperCase() === 'FEMALE' &&
    isPostmenopausal(hivSummary?.menstruation_status)
  )
    return { ineligibilityReason: '(Not eligible) POSTMENOPAUSAL', eligiblePatient: false };
  return { eligiblePatient: true, ineligibilityReason: 'None' };
};

const isPostmenopausal = (menstruationStatus: number) => {
  //concept 6496 == post-menopausal
  return menstruationStatus === 6496 ? true : false;
};
