import React from 'react';
import { useTranslation } from 'react-i18next';
import { showToast, usePatient, useStore } from '@openmrs/esm-framework';
import { SearchSkeleton, ToastNotification } from 'carbon-components-react';
import { patientAlertsStore, setAlerts, setPatientUuid } from './store';
import { useAlerts } from './patient-alerts.resource';
import styles from './patient-alerts.scss';

interface PatientAlertsComponentProps {
  expanded: boolean;
}

export default function PatientAlertsComponent({ expanded }: PatientAlertsComponentProps) {
  const { t } = useTranslation();
  const { patientUuid: uuid, alerts: storedAlerts } = useStore(patientAlertsStore);
  const { patientUuid } = usePatient();
  const state = React.useMemo(() => ({ patientUuid }), [patientUuid]);
  const { alerts, isLoadingAlerts } = useAlerts(state.patientUuid !== uuid ? uuid : state.patientUuid);

  React.useEffect(() => {
    if (patientUuid != uuid) {
      setPatientUuid(patientUuid);
    }
  }, [patientUuid, uuid]);

  React.useEffect(() => {
    if (!isLoadingAlerts && alerts.length && JSON.stringify(alerts) !== JSON.stringify(storedAlerts)) {
      setAlerts(alerts);
      alerts.map((alert) => {
        showToast({
          critical: true,
          description: alert.message,
          title: alert.title,
          kind: alert.type === 'danger' ? 'error' : alert.type,
          millis: 10000,
        });
      });
    }
  }, [alerts, isLoadingAlerts, storedAlerts]);

  if (expanded) {
    return (
      <div className={styles.notificationsPanel}>
        {isLoadingAlerts ? <SearchSkeleton role="progressbar" className={styles.loading} /> : null}
        {alerts?.length ? (
          <div>
            {alerts.map((alert, index) => {
              return (
                <ToastNotification
                  lowContrast
                  key={index}
                  kind={alert.type === 'danger' ? 'error' : alert.type}
                  subtitle={<span>{alert.message}</span>}
                  title={alert.title}
                  hideCloseButton
                />
              );
            })}
          </div>
        ) : null}
        {!isLoadingAlerts && !alerts?.length ? (
          <p className={styles.emptyState}>
            {t('noNotifications', 'There are no notifications to display for this patient.')}
          </p>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
}
