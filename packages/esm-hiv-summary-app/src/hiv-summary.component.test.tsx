import React from 'react';
import { screen, render } from '@testing-library/react';
import HivSummary from './hiv-summary.component';
import { mockPatient } from '../../../__mocks__/mock-patient';
import * as mockHivSummaryResource from './hiv-summary.resource';
import { of } from 'rxjs';
import { mockHIVSummary } from '../../../__mocks__/mock-hiv-summary';

describe('<HIVSummary/>', () => {
  beforeEach(() => {
    spyOn(mockHivSummaryResource, 'fetchHivSummary').and.returnValue(of(mockHIVSummary));
  });

  const renderHIVSummary = () => {
    render(<HivSummary patient={mockPatient} patientUuid={mockPatient.id} />);
  };

  it('should render hiv-summary without dying', () => {
    renderHIVSummary();
    expect(screen.getByRole('heading', { name: /HIV Summary/ })).toBeInTheDocument();
  });
});
