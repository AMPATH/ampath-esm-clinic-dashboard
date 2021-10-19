import React from 'react';
import Close20 from '@carbon/icons-react/lib/close/20';
import Notification20 from '@carbon/icons-react/es/notification/20';
import NotificationNew20 from '@carbon/icons-react/es/notification--new/20';
import { HeaderGlobalAction } from 'carbon-components-react';
import { useStore } from '@openmrs/esm-framework';
import { patientAlertsStore } from './store';
import styles from './notifications-menu-button.scss';

interface NotificationsMenuButtonProps {
  isActivePanel: (string) => boolean;
  togglePanel: (string) => void;
}

const NotificationsMenuButton: React.FC<NotificationsMenuButtonProps> = ({ isActivePanel, togglePanel }) => {
  const { hasUnreadAlerts, hasViewedAlerts } = useStore(patientAlertsStore);

  return (
    <HeaderGlobalAction
      aria-label="Notifications"
      aria-labelledby="Notifications Icon"
      name="Notifications"
      isActive={isActivePanel('notificationsMenu')}
      onClick={() => togglePanel('notificationsMenu')}>
      {isActivePanel('notificationsMenu') ? (
        <Close20 />
      ) : hasUnreadAlerts && !hasViewedAlerts ? (
        <NotificationNew20 className={styles.unreadNotificationsIndicator} title="Unread alerts" />
      ) : (
        <Notification20 />
      )}
    </HeaderGlobalAction>
  );
};

export default NotificationsMenuButton;
