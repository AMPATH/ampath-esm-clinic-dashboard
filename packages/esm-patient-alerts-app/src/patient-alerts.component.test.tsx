import React from 'react';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { openmrsObservableFetch, showNotification } from '@openmrs/esm-framework';
import PatientAlertsComponent from './patient-alerts.component';
import { mockPatient } from '../../../__mocks__/mock-patient';
import { setAlerts } from './store';

const mockOpenmrsObservableFetch = openmrsObservableFetch as jest.Mock;
const mockShowNotification = showNotification as jest.Mock;

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

jest.mock('@openmrs/esm-framework', () => ({
  ...(jest.requireActual('@openmrs/esm-framework') as any),
  openmrsObservableFetch: jest.fn(),
  showNotification: jest.fn(),
  useCurrentPatient: jest.fn(() => [false, mockPatient, null, null]),
}));

describe('PatientAlertsComponent: ', () => {
  test('renders an error state if there was a problem fetching alerts', async () => {
    const error = {
      message: 'You are not logged in',
      response: {
        status: 401,
        statusText: 'Unauthorized',
      },
    };
    mockOpenmrsObservableFetch.mockReturnValue(throwError(error));

    renderPatientAlertsComponent();

    expect(mockShowNotification).toHaveBeenCalled();
    expect(mockShowNotification).toHaveBeenCalledWith({
      kind: 'error',
      title: expect.stringMatching(/Sorry, there was a problem loading alerts/i),
      description: error.message,
    });
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByText(/Sorry, there was a problem loading alerts/i)).toBeInTheDocument();
  });

  test('renders a message if a patient does not have alerts', async () => {
    mockOpenmrsObservableFetch.mockReturnValueOnce(of({ data: { result: { reminders: [] } } }).pipe(delay(10)));

    renderPatientAlertsComponent();

    await waitForLoadingToFinish();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByText(/you currently have no notifications/i)).toBeInTheDocument();
  });

  test("renders a patient's alerts if available", async () => {
    mockOpenmrsObservableFetch.mockReturnValue(of({ data: { result: { reminders: testReminders } } }).pipe(delay(10)));
    setAlerts(testReminders, mockPatient.id);

    renderPatientAlertsComponent();

    await screen.findByRole('alert');
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByTitle(/warning icon/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact tracing reminder/i })).toBeInTheDocument();
    expect(screen.getByText(/No contact tracing has been done for this index/i)).toBeInTheDocument();
  });
});

function renderPatientAlertsComponent() {
  render(<PatientAlertsComponent expanded />);
}

function waitForLoadingToFinish() {
  return waitForElementToBeRemoved(() => [...screen.queryAllByRole(/progressbar/i)], {
    timeout: 4000,
  });
}
