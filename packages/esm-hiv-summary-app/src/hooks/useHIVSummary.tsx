import { useEffect, useState } from 'react';
import { openmrsFetch } from '@openmrs/esm-framework';
import useSWR from 'swr';
import { HIVSummary, MedicationChangeHistory } from '../types';
import { determineIfCD4IsPending, determineIfVlIsPending } from '../widgets/helper';

interface HivSummaryFetchResponse {
  result: Array<HIVSummary>;
  size: number;
  sql: string;
  startIndex: number;
  sqlParams: Array<any>;
}

interface HIVMedicationChangeHistoryFetchResponse {
  result: Array<MedicationChangeHistory>;
  size: number;
  sql: string;
  startIndex: number;
  sqlParams: Array<any>;
}

/**
 * Hook returns an array of HIV Summary for a patient
 * @param patientUuid patientUuid string
 * @param startIndex start index number
 * @param limit the limit indicating how many records at return, defaults to 20
 * @returns Array of `HIVSummary` and an error of `openMrsFetchError`
 */

export const useHIVSummary = (patientUuid: string, startIndex: number = 0, limit: number = 20) => {
  const [summary, setSummary] = useState<Array<HIVSummary>>([]);
  const url = `/etl-latest/etl/patient/${patientUuid}/hiv-summary?startIndex=${startIndex}&limit=${limit}&includeNonClinicalEncounter=${false}`;
  const {
    data: hivSummaryResponse,
    error,
    isValidating,
  } = useSWR<{ data: HivSummaryFetchResponse }>(patientUuid ? url : null, openmrsFetch);

  useEffect(() => {
    if (hivSummaryResponse) {
      const { data } = hivSummaryResponse;
      const hivSummary = data.result.map((hivsummary) => {
        hivsummary.isPendingCD4 = determineIfCD4IsPending(hivsummary);
        hivsummary.isPendingViralLoad = determineIfVlIsPending(hivsummary);
        return hivsummary;
      });
      setSummary(hivSummary);
    }
  }, [hivSummaryResponse]);

  return { hivSummary: summary, error, isLoading: !hivSummaryResponse && !error, isValidating };
};

/**
 * Hook to fetch medication change history
 * @param patientUuid patientUuid `string`
 * @returns Array of `MedicationChangeHistory` and an error of `openMrsFetchError`
 */

export const useHIVMedicationChangeHistory = (patientUuid: string) => {
  const [medicationChange, setMedicationChange] = useState<Array<MedicationChangeHistory>>([]);
  const url = `/etl-latest/etl/patient/${patientUuid}/medical-history-report`;
  const { data, error, isValidating } = useSWR<{ data: HIVMedicationChangeHistoryFetchResponse }>(
    patientUuid ? url : null,
    openmrsFetch,
  );

  useEffect(() => {
    if (data) {
      setMedicationChange(data.data.result);
    }
  }, [data]);

  return { medicationChangeHistory: medicationChange, fetchError: error, isLoading: !data && !error, isValidating };
};
