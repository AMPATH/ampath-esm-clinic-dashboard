import dayjs from 'dayjs';
import { NotificationKind } from 'carbon-components-react';
import { openmrsFetch } from '@openmrs/esm-framework';
import useSWRImmutable from 'swr/immutable';
import useSWR from 'swr';

export interface Reminder {
  display: {
    toast: boolean;
    banner: boolean;
  };
  message: string;
  title: string;
  type: NotificationKind | 'danger';
  action?: boolean;
  addContacts?: boolean;
  updateContacts?: boolean;
  auto_register?: boolean;
}

interface EtlRemindersResponse {
  result: {
    person_id: number;
    person_uuid: string;
    reminders: Array<Reminder>;
  };
}

export function useAlerts(patientUuid: string) {
  const referenceDate = dayjs().format('YYYY-MM-DD');
  const apiUrl = `/etl-latest/etl/patient/${patientUuid}/hiv-clinical-reminder/${referenceDate}`;

  const { data, error } = useSWR<{ data: EtlRemindersResponse }, Error>(patientUuid ? apiUrl : null, openmrsFetch);

  return {
    alerts: data ? data?.data?.result?.reminders : [],
    isError: error,
    isLoadingAlerts: patientUuid && !data && !error,
  };
}
