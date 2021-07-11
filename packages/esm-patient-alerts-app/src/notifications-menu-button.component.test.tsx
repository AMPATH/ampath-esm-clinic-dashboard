import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationsMenuButton from './notifications-menu-button.component';
import { useStore } from '@openmrs/esm-framework';

const mockUseStore = useStore as jest.Mock;

jest.mock('@openmrs/esm-framework', () => ({
  ...(jest.requireActual('@openmrs/esm-framework') as any),
  openmrsObservableFetch: jest.fn(),
  useCurrentPatient: jest.fn(),
  useStore: jest.fn(),
}));

describe('NotificationsMenuButtonComponent', () => {
  test('renders a notification icon in the navbar', () => {
    mockUseStore.mockReturnValueOnce({
      alerts: [
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
      ],
    });

    renderNotificationsMenuButtonComponent();

    expect(screen.getByRole('button', { name: /notifications/i })).toBeInTheDocument();
  });
});

function renderNotificationsMenuButtonComponent() {
  render(<NotificationsMenuButton isActivePanel={() => {}} togglePanel={() => {}} />);
}
