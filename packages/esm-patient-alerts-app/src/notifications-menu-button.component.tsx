import React from 'react';
import Close20 from '@carbon/icons-react/lib/close/20';
import Notification20 from '@carbon/icons-react/es/notification/20';
import { HeaderGlobalAction } from 'carbon-components-react';
import styles from './notifications-menu-button.scss';

interface NotificationsMenuButtonProps {
  isActivePanel: (string) => boolean;
  togglePanel: (string) => void;
}

const NotificationsMenuButton: React.FC<NotificationsMenuButtonProps> = ({ isActivePanel, togglePanel }) => {
  const isActive = isActivePanel('notificationsMenu');
  return (
    <HeaderGlobalAction
      className={isActive ? styles.activeMenuButton : styles.menuButton}
      aria-label="Notifications"
      aria-labelledby="Notifications Icon"
      name="Notifications"
      isActive={isActivePanel('notificationsMenu')}
      onClick={() => togglePanel('notificationsMenu')}>
      {isActive ? <Close20 /> : <Notification20 />}
    </HeaderGlobalAction>
  );
};

export default NotificationsMenuButton;
