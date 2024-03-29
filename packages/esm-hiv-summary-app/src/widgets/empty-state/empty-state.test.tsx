import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { attach } from '@openmrs/esm-framework';
import { EmptyState } from '.';

const mockAttach = attach as jest.Mock;

jest.mock('@openmrs/esm-framework', () => ({
  ...(jest.requireActual('@openmrs/esm-framework') as any),
  attach: jest.fn(),
}));

describe('EmptyState: ', () => {
  it('renders an empty state widget card', () => {
    render(<EmptyState headerTitle="appointments" displayText="appointments" />);

    expect(screen.getByTitle(/empty data illustration/i)).toBeInTheDocument();
    expect(screen.getByText(/There is no appointments to display for this patient/i)).toBeInTheDocument();
  });

  it('renders a link that launches a form in the workspace when the launchForm prop is provided', () => {
    render(<EmptyState headerTitle="appointments" displayText="appointments" launchForm={launchAppointmentsForm} />);

    const recordAppointmentsLink = screen.getByText(/record appointments/i);
    expect(recordAppointmentsLink).toBeInTheDocument();
    userEvent.click(recordAppointmentsLink);

    expect(mockAttach).toHaveBeenCalledTimes(1);
    expect(mockAttach).toHaveBeenCalledWith('patient-chart-workspace-slot', 'sample-form-workspace');
  });
});

function launchAppointmentsForm() {
  attach('patient-chart-workspace-slot', 'sample-form-workspace');
}
