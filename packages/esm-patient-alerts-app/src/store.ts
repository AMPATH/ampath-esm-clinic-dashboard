import { Store } from 'unistore';
import { createGlobalStore } from '@openmrs/esm-framework';
import { Reminder } from './patient-alerts.resource';

export interface PatientAlertsStore {
  alerts: Array<Reminder>;
  patientUuid: string | null;
}

export const patientAlertsStore: Store<PatientAlertsStore> = createGlobalStore('patient-alerts', {
  alerts: [],
  patientUuid: null,
});

export const setAlerts = patientAlertsStore.action((state, value: Array<Reminder>) => ({
  ...state,
  alerts: value,
}));

export const setPatientUuid = patientAlertsStore.action((state, value: string) => ({
  ...state,
  patientUuid: value,
}));
