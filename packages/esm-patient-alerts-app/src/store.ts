import { Store } from 'unistore';
import { createGlobalStore } from '@openmrs/esm-framework';
import { Reminder } from './patient-alerts.resource';

export interface PatientAlertsStore {
  alerts: Array<Reminder>;
  hasUnreadAlerts: boolean;
  patientId: string | null;
}

export const patientAlertsStore: Store<PatientAlertsStore> = createGlobalStore('patient-alerts', {
  alerts: null,
  hasUnreadAlerts: false,
  patientId: null,
});

export const setAlerts = patientAlertsStore.action((state, alerts: Array<Reminder>, patientId: string) => ({
  ...state,
  alerts: alerts,
  patientId: patientId,
}));

export const setHasUnreadAlerts = patientAlertsStore.action((state, value: boolean) => ({
  ...state,
  hasUnreadAlerts: value,
}));
