import React from 'react';
import { useTranslation } from 'react-i18next';
import InlineLoading from 'carbon-components-react/es/components/InlineLoading';
import { ToastNotification } from 'carbon-components-react/lib/components/Notification/Notification';
import { showNotification, useCurrentPatient, useStore } from '@openmrs/esm-framework';
import { patientAlertsStore, setAlerts, setHasUnreadAlerts } from './store';
import { fetchAlerts } from './patient-alerts.resource';
import styles from './patient-alerts.scss';

enum ActionTypes {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

interface Loading {
  type: ActionTypes.loading;
}

interface Resolved {
  type: ActionTypes.resolved;
}

interface Rejected {
  type: ActionTypes.rejected;
}

interface ViewState {
  status: string;
}

type Action = Loading | Resolved | Rejected;

function viewStateReducer(state: ViewState, action: Action): ViewState {
  switch (action.type) {
    case ActionTypes.loading:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.resolved:
      return {
        ...state,
        status: 'resolved',
      };
    case ActionTypes.rejected:
      return {
        ...state,
        status: 'rejected',
      };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

interface PatientAlertsComponentProps {
  expanded: boolean;
}

export default function PatientAlertsComponent({ expanded }: PatientAlertsComponentProps) {
  const { t } = useTranslation();
  const [, patient] = useCurrentPatient();
  const { alerts, patientId } = useStore(patientAlertsStore);
  const state = React.useMemo(() => ({ patient }), [patient]);
  const [patientChanged, setPatientChanged] = React.useState(false);

  const initialViewState: ViewState = {
    status: alerts ? 'resolved' : 'loading',
  };
  const [viewState, dispatch] = React.useReducer(viewStateReducer, initialViewState);

  React.useEffect(() => {
    if (state.patient && state.patient.id !== patientId) {
      setPatientChanged(true);
    }
  }, [state.patient, patientId]);

  React.useEffect(() => {
    const { patient } = state;

    if (expanded && alerts) {
      setHasUnreadAlerts(false);
    }
    if (patientChanged) {
      setAlerts(null, patient.id);
    }
    if (patient) {
      if (!alerts) {
        dispatch({
          type: ActionTypes.loading,
        });
        const sub = fetchAlerts(patient.id).subscribe(
          (fetchedAlerts) => {
            dispatch({
              type: ActionTypes.resolved,
            });

            setAlerts(fetchedAlerts, patient.id);
            setHasUnreadAlerts(true);
          },
          (err) => {
            showNotification({
              kind: 'error',
              title: t('alertsErrorCopy', 'Sorry, there was a problem loading alerts'),
              description: err?.message,
            });

            dispatch({
              type: ActionTypes.rejected,
            });
          },
        );
        return () => {
          sub.unsubscribe();
          setPatientChanged(false);
        };
      }
    }
  }, [alerts, expanded, patientId, patientChanged, state, t]);

  return (
    <>
      {expanded && (
        <div className={styles.notificationsPanel}>
          {viewState.status === 'loading' ? (
            <InlineLoading
              role="progressbar"
              className={styles.loading}
              description={`${t('fetchingAlerts', 'Fetching alerts')} ...`}
            />
          ) : null}
          {viewState.status === 'resolved' ? (
            <>
              {alerts?.length ? (
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
              ) : (
                <div>
                  <p className={styles.emptyState}>{t('noNotifications', 'You currently have no notifications.')}</p>
                </div>
              )}
            </>
          ) : null}
          {viewState.status === 'rejected' ? (
            <p className={styles.emptyState}>
              <span>{t('errorCopy', 'Sorry, there was a problem loading alerts.')}</span>
            </p>
          ) : null}
        </div>
      )}
    </>
  );
}
