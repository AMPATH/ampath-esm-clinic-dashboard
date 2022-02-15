import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationsMenuButton from './notifications-menu-button.component';

const testProps = {
  isActivePanel: jest.fn(),
  togglePanel: jest.fn(),
};

describe('NotificationsMenuButtonComponent', () => {
  test('renders an icon button in the navbar', () => {
    renderNotificationsMenuButtonComponent();

    expect(screen.getByRole('button', { name: /notifications/i })).toBeInTheDocument();
  });
});

function renderNotificationsMenuButtonComponent() {
  render(<NotificationsMenuButton {...testProps} />);
}
