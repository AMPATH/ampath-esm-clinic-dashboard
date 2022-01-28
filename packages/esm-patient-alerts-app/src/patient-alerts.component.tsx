import React from 'react';
import { useTranslation } from 'react-i18next';
import { showToast, usePatient, useStore } from '@openmrs/esm-framework';
import { SearchSkeleton, ToastNotification } from 'carbon-components-react';
import { useAlerts } from './patient-alerts.resource';
import { patientAlertsStore, setHasUnreadAlerts, setHasViewedAlerts, setAlerts } from './store';
import styles from './patient-alerts.scss';

interface PatientAlertsComponentProps {
  expanded: boolean;
}

export default function PatientAlertsComponent({ expanded }: PatientAlertsComponentProps) {
  const { t } = useTranslation();
  const { patient } = usePatient();
  const { alerts, isLoading } = useAlerts(patient?.id);
  const { hasViewedAlerts } = useStore(patientAlertsStore);

  React.useEffect(() => {
    if (!expanded && alerts.length && !hasViewedAlerts) {
      setHasUnreadAlerts(true);
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
      setHasViewedAlerts(true);
    }
  }, [expanded, alerts, hasViewedAlerts]);

  if (expanded) {
    return (
      <div className={styles.notificationsPanel}>
        {isLoading && patient?.id ? <SearchSkeleton role="progressbar" className={styles.loading} /> : null}
        {patient?.id && alerts?.length ? (
          <div>
            {alerts.map((alert, index) => (
              <ToastNotification
                lowContrast
                key={index}
                kind={alert.type === 'danger' ? 'error' : alert.type}
                subtitle={<span>{alert.message}</span>}
                title={alert.title}
              />
            ))}
          </div>
        ) : null}
        {!isLoading && patient?.id && !alerts?.length ? (
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
