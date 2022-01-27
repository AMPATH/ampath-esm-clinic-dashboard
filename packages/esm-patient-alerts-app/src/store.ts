import { Store } from 'unistore';
import { createGlobalStore } from '@openmrs/esm-framework';
import { Reminder } from './patient-alerts.resource';

export interface PatientAlertsStore {
  alerts: Array<Reminder>;
  hasUnreadAlerts: boolean;
  hasViewedAlerts: boolean;
  patientId: string | null;
}

export const patientAlertsStore: Store<PatientAlertsStore> = createGlobalStore('patient-alerts', {
  alerts: [],
  hasUnreadAlerts: false,
  hasViewedAlerts: false,
  patientId: null,
});

export const setAlerts = patientAlertsStore.action((state, value: Array<Reminder>) => ({
  ...state,
  alerts: value,
}));

export const setHasUnreadAlerts = patientAlertsStore.action((state, value: boolean) => ({
  ...state,
  hasUnreadAlerts: value,
}));

export const setHasViewedAlerts = patientAlertsStore.action((state, value: boolean) => ({
  ...state,
  hasViewedAlerts: value,
}));
