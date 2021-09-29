import React from 'react';
import HIVClinicalSummary from './hiv-clinical-summary.component';
import { render, screen } from '@testing-library/react';
const mockPatientUuid = 'some-patient-uuid';
describe('HIVClinicalSummary', () => {
  it('renders without dying', () => {
    render(<HIVClinicalSummary patientUuid={mockPatientUuid} />);
    expect(screen.getByText(/HIV Clinical Summary/i)).toBeInTheDocument();
  });
});
