import dayjs from 'dayjs';
import useSWR from 'swr';
import { NotificationKind } from 'carbon-components-react';
import { openmrsFetch } from '@openmrs/esm-framework';

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
    data: data ? data.data.result.reminders : [],
    isError: error,
    isLoading: patientUuid && !data && !error,
  };
}
