import { openmrsFetch } from '@openmrs/esm-framework';
import { useMemo } from 'react';
import useSWR from 'swr';
import { CervicalCancerScreening } from '../types';

interface CervicalCancerScreeningReturnType {
  startIndex: number;
  size: number;
  result: Array<Partial<CervicalCancerScreening>>;
}
/**
 * This React hook takes `PatientUuid` and returns cervicalCancerScreening summary for that patient
 * @param patientUuid patientUuid, unique patient identifier
 * @returns Object containing `loading` status and `cervicalCancerScreeningSummary` data
 */
export const useCervicalCancerSummary = (patientUuid: string) => {
  const { data, error } = useSWR<{ data: CervicalCancerScreeningReturnType }>(
    `/etl-latest/etl/patient-cervical-cancer-screening-summary?uuid=${patientUuid}`,
    openmrsFetch,
  );

  const cervicalCancerScreeningSummary = useMemo(() => data?.data?.result ?? [], [data]);

  return {
    loading: !data && !error,
    cervicalCancerScreeningSummary: cervicalCancerScreeningSummary,
  };
};
