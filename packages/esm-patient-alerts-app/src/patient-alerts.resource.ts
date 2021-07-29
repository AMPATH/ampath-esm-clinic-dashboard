import dayjs from 'dayjs';
import { map } from 'rxjs/operators';
import { NotificationKind } from 'carbon-components-react';
import { openmrsObservableFetch } from '@openmrs/esm-framework';

export interface Reminder {
  action: boolean;
  display: {
    toast: boolean;
    banner: string;
  };
  message: string;
  title: string;
  type: NotificationKind | 'danger';
  addContacts?: boolean;
  updateContacts?: boolean;
  auto_register?: boolean;
}

export function fetchAlerts(patientUuid: string) {
  const referenceDate = dayjs().format('YYYY-MM-DD');
  const apiUrl = `/etl-latest/etl/patient/${patientUuid}/hiv-clinical-reminder/${referenceDate}`;

  return openmrsObservableFetch<{ result: { reminders: Array<Reminder> } }>(apiUrl).pipe(
    map(({ data }) => {
      return data.result.reminders;
    }),
  );
}
