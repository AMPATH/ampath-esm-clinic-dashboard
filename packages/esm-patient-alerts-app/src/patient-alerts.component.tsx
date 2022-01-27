import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePatient } from '@openmrs/esm-framework';
import { SearchSkeleton, ToastNotification } from 'carbon-components-react';
import { useAlerts } from './patient-alerts.resource';
import { setHasUnreadAlerts, setHasViewedAlerts } from './store';
import styles from './patient-alerts.scss';

interface PatientAlertsComponentProps {
  expanded: boolean;
}

export default function PatientAlertsComponent({ expanded }: PatientAlertsComponentProps) {
  const { t } = useTranslation();
  const { patient } = usePatient();
  const { alerts, isLoading } = useAlerts(patient?.id);

  React.useEffect(() => {
    if (!expanded && alerts.length) {
      setHasUnreadAlerts(true);
    }
  }, [expanded, alerts]);

  if (expanded) {
    setHasViewedAlerts(true);
    return (
      <div className={styles.notificationsPanel}>
        {isLoading && patient?.id ? <SearchSkeleton role="progressbar" className={styles.loading} /> : null}
        {patient?.id && alerts?.length ? (
          <div>
            {alerts.map((alert, index) => (
              <ToastNotification
                key={index}
                kind={alert.type === 'danger' ? 'warning' : alert.type}
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
