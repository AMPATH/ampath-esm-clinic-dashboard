import React from 'react';
import { screen, render } from '@testing-library/react';
import HIVMedicationChangeHistory from './hiv-medication-change-history.component';
import { mockMedicationChangeHistory } from '../../../../../__mocks__/mock-hiv-summary';
import { useHIVMedicationChangeHistory } from '../../hooks/useHIVSummary';

const mockUseHIVMedicationChangeHistory = useHIVMedicationChangeHistory as jest.Mock;

jest.mock('../../hooks/useHIVSummary', () => ({
  useHIVMedicationChangeHistory: jest.fn(),
}));

describe('<HIVMedicationChangeHistory/>', () => {
  const renderMedicationChangeHistory = () => {
    mockUseHIVMedicationChangeHistory.mockReturnValue({
      medicationChangeHistory: mockMedicationChangeHistory,
      fetchError: null,
    });
    render(<HIVMedicationChangeHistory patientUuid={'mock-uuid'} />);
  };

  it('should render medication change history', () => {
    renderMedicationChangeHistory();
    expect(screen.getByText(/Medication Change History/i)).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Encounter Date change/ })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Previous VL/ })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Previous Vl Date/ })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Current Regimen/ })).toBeInTheDocument();
    const tableRows = screen.getAllByRole('row');
    expect(tableRows.length).toBe(7);
  });
});
