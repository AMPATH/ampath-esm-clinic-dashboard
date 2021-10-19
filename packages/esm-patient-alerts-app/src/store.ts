import { Store } from 'unistore';
import { createGlobalStore } from '@openmrs/esm-framework';

export interface PatientAlertsStore {
  hasUnreadAlerts: boolean;
  hasViewedAlerts: boolean;
  patientId: string | null;
}

export const patientAlertsStore: Store<PatientAlertsStore> = createGlobalStore('patient-alerts', {
  hasUnreadAlerts: false,
  hasViewedAlerts: false,
  patientId: null,
});

export const setHasUnreadAlerts = patientAlertsStore.action((state, value: boolean) => ({
  ...state,
  hasUnreadAlerts: value,
}));

export const setHasViewedAlerts = patientAlertsStore.action((state, value: boolean) => ({
  ...state,
  hasViewedAlerts: value,
}));
