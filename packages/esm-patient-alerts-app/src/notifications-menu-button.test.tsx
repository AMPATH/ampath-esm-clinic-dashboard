import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationsMenuButton from './notifications-menu-button.component';
import { useStore } from '@openmrs/esm-framework';

const testProps = {
  isActivePanel: jest.fn(),
  togglePanel: jest.fn(),
};

const mockUseStore = useStore as jest.Mock;

jest.mock('@openmrs/esm-framework', () => {
  const originalModule = jest.requireActual('@openmrs/esm-framework');

  return {
    ...originalModule,
    openmrsObservableFetch: jest.fn(),
    useCurrentPatient: jest.fn(),
    useStore: jest.fn(),
  };
});

describe('NotificationsMenuButtonComponent', () => {
  const mockAlerts = [
    {
      message: 'No contact tracing has been done for this index, please fill the  contact tracing form',
      title: 'Contact Tracing Reminder',
      type: 'warning',
      display: {
        banner: true,
        toast: true,
      },
      action: true,
      addContacts: true,
    },
  ];

  test('renders an icon button in the navbar with an unread notifications indicator when unread notifications are present', () => {
    mockUseStore.mockImplementationOnce(() => ({
      alerts: mockAlerts,
      hasUnreadAlerts: true,
      hasViewedAlerts: false,
    }));

    renderNotificationsMenuButtonComponent();

    expect(screen.getByRole('button', { name: /notifications/i })).toBeInTheDocument();
    expect(screen.getByTitle(/Unread alerts/i)).toBeInTheDocument();
  });

  test('renders an icon button in the navbar without an unread notifications indicator when there are no notifications (or no unread notifications) to display', () => {
    mockUseStore.mockImplementationOnce(() => ({
      alerts: [],
      hasUnreadAlerts: false,
      hasViewedAlerts: false,
    }));

    renderNotificationsMenuButtonComponent();

    expect(screen.getByRole('button', { name: /notifications/i })).toBeInTheDocument();
    expect(screen.queryByTitle(/Unread alerts/i)).not.toBeInTheDocument();
  });
});

function renderNotificationsMenuButtonComponent() {
  render(<NotificationsMenuButton {...testProps} />);
}
