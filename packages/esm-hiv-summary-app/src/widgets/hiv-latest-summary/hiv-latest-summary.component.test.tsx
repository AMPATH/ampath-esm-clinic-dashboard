import React from 'react';
import HivLatestSummary from './hiv-latest-summary.component';
import { render, screen } from '@testing-library/react';
import { mockPatient } from '../../../../../__mocks__/mock-patient';

describe('<HivLatestSummary/>', () => {
  const renderHIVSummary = () => {
    render(<HivLatestSummary patient={mockPatient} patientUuid={mockPatient.id} />);
  };

  it('should render hiv-summary without dying', () => {
    renderHIVSummary();
    // To Do
    pending();
  });
});
