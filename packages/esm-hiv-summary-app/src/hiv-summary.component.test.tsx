import React from 'react';
import { screen, render } from '@testing-library/react';
import HivSummary from './hiv-summary.component';
import { mockPatient } from '../../../__mocks__/mock-patient';

describe('<HIVSummary/>', () => {
  const renderHIVSummary = () => {
    render(<HivSummary patient={mockPatient} patientUuid={mockPatient.id} />);
  };

  it('should render hiv-summary without dying', () => {
    renderHIVSummary();
    expect(screen.getByRole('heading', { name: /HIV Summary/ })).toBeInTheDocument();
  });
});
