import React from 'react';
import HivLatestSummary from './hiv-latest-summary.component';
import { render, screen } from '@testing-library/react';
import { mockPatient } from '../../../../../__mocks__/mock-patient';
import { mockHIVSummary } from '../../../../../__mocks__/mock-hiv-summary';

describe('<HivLatestSummary/>', () => {
  const renderHIVSummary = () => {
    render(<HivLatestSummary patient={mockPatient} />);
  };

  it('should render hiv-summary without dying', () => {
    renderHIVSummary();
    // To Do
    pending();
  });
});
