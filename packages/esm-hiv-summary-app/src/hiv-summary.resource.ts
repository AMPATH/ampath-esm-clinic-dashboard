import { openmrsObservableFetch } from '@openmrs/esm-framework';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HIVSummary } from './types';
import { mockHivSummaryData } from '../../../__mocks__/mock-data';

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
  // TO DO : Hit the actual etl rest server
  const url = `/etl-latest/etl/patient/${patientUuid}/hiv-summary?startIndex=${startIndex}&limit=${limit}&includeNonClinicalEncounter=${includeNonClinicalEncounter}`;
  // return openmrsObservableFetch<HivSummaryFetchResponse>(url).pipe(
  //   map(({ data }) => data.result),
  // );
  return of(mockHivSummaryData);
}
