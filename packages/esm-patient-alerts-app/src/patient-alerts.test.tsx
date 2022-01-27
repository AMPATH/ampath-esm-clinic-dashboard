import React from 'react';
import { screen } from '@testing-library/react';
import { openmrsFetch } from '@openmrs/esm-framework';
import { mockPatient } from '../../../__mocks__/mock-patient';
import { swrRender, waitForLoadingToFinish } from '../../../tools/test-helpers';
import PatientAlertsComponent from './patient-alerts.component';

const testProps = {
  expanded: true,
};

const mockOpenmrsFetch = openmrsFetch as jest.Mock;

const testReminders = [
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

jest.mock('@openmrs/esm-framework', () => {
  const originalModule = jest.requireActual('@openmrs/esm-framework');

  return {
    ...originalModule,
    openmrsFetch: jest.fn(),
    showNotification: jest.fn(),
    usePatient: jest.fn(() => ({
      error: null,
      isLoading: false,
      patient: mockPatient,
      patientUuid: mockPatient.id,
    })),
  };
});

describe('PatientAlertsComponent: ', () => {
  test("renders a patient's alerts as toast notifications when available", async () => {
    mockOpenmrsFetch.mockReturnValueOnce({ data: { result: { reminders: testReminders } } });

    renderPatientAlertsComponent();

    await waitForLoadingToFinish();

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByTitle(/warning icon/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact tracing reminder/i })).toBeInTheDocument();
    expect(screen.getByText(/No contact tracing has been done for this index/i)).toBeInTheDocument();
  });

  test('renders a message if a patient does not have alerts', async () => {
    mockOpenmrsFetch.mockReturnValueOnce({ data: { result: { reminders: [] } } });

    renderPatientAlertsComponent();

    await waitForLoadingToFinish();

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByText(/There are no notifications to display for this patient/i)).toBeInTheDocument();
  });
});

function renderPatientAlertsComponent() {
  swrRender(<PatientAlertsComponent {...testProps} />);
}
