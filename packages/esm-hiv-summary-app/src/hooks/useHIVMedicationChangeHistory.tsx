import { OpenmrsFetchError } from '@openmrs/esm-api';
import React, { useEffect, useMemo, useState } from 'react';
import { MedicationChangeHistory } from '../types';
import { fetchHIVMedicationChangeHistory } from '../widgets/hiv-medication-change-history/hiv-medication-change-history.resource';

export const useHIVMedicationChangeHistory = (patientUuid: string) => {
  const [fetchError, setFetchError] = useState<Error>(null);
  const [medicationChangeHistory, setMedicationChangeHistory] = useState<Array<MedicationChangeHistory>>([]);

  useEffect(() => {
    if (patientUuid) {
      const ac = new AbortController();
      fetchHIVMedicationChangeHistory(patientUuid, ac).then(
        ({ data }) => {
          setMedicationChangeHistory(data.result);
        },
        (error: OpenmrsFetchError) => setFetchError(error),
      );
    }
  }, [patientUuid]);

  const value = useMemo(() => {
    return { medicationChangeHistory, fetchError };
  }, [fetchError, medicationChangeHistory]);
  return value;
};
