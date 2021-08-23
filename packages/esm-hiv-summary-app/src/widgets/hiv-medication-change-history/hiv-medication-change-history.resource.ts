import { openmrsFetch } from '@openmrs/esm-framework';
import { MedicationChangeHistory } from '../../types';

interface HIVMedicationChangeHistoryFetchResponse {
  result: Array<MedicationChangeHistory>;
  size: number;
  sql: string;
  startIndex: number;
  sqlParams: Array<any>;
}

export const fetchHIVMedicationChangeHistory = (patientUuid: string, ac: AbortController) => {
  const url = `/etl-latest/etl/patient/${patientUuid}/medical-history-report`;
  return openmrsFetch<HIVMedicationChangeHistoryFetchResponse>(url, { signal: ac.signal });
};
