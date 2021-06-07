import React from 'react';
import { screen, render } from '@testing-library/react';
import Hivsummary from './hiv-summary.component';
import { mockPatient } from '../../../__mocks__/mock-patient';

describe('<HIVSummary/>', () => {
  const renderHIVSummary = () => {
    render(<Hivsummary patient={mockPatient} patientUuid={mockPatient.id} />);
  };

  it('should render hiv-summary without dying', () => {
    renderHIVSummary();
    expect(screen.getByRole('heading', { name: /HIV Summary/ })).toBeInTheDocument();
  });
});
