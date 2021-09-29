import React from 'react';
import HivLatestSummary from './hiv-latest-summary.component';
import { render, screen } from '@testing-library/react';
import { mockPatient } from '../../../../../__mocks__/mock-patient';
import { mockHIVSummary } from '../../../../../__mocks__/mock-hiv-summary';
import * as useHivSummaryContext from '../../hooks/useHivSummary';

describe('<HivLatestSummary/>', () => {
  const renderHIVSummary = () => {
    spyOn(useHivSummaryContext, 'useHivSummaryContext').and.returnValue(mockHIVSummary);
    render(<HivLatestSummary patient={mockPatient} />);
  };

  beforeEach(() => {
    renderHIVSummary();
  });

  xit('should render hiv-summary correctly', async () => {
    expect(await screen.findByText(/ARV Initiation Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Current ARV Regimen Start Date/, { exact: true })).toBeInTheDocument();
    expect(screen.getByText(/LAMIVUDINE, TENOFOVIR, DOLUTEGRAVIR/i)).toBeInTheDocument();
    expect(screen.getByText(/Current ARV Regimen Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/04-May-2021/i)).toBeInTheDocument();
    expect(screen.getByText(/RTC Date/i)).toBeInTheDocument();
    expect(screen.getByText(/15-Dec-2021/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Appointment/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Appt Date/i)).toBeInTheDocument();
    expect(screen.getByText(/(ADULTRETURN)/)).toBeInTheDocument();
    expect(screen.getByText(/Lab/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Viral Load/i)).toBeInTheDocument();
    expect(screen.getByText(/40/i)).toBeInTheDocument();
    expect(screen.getByText(/Last CD4 count/i)).toBeInTheDocument();
    expect(screen.getByText(/1086/i)).toBeInTheDocument();
    expect(screen.getByText(/Other/i)).toBeInTheDocument();
    expect(screen.getByText(/Contraception Method/i)).toBeInTheDocument();
    expect(screen.getByText(/Enrollment Date/i)).toBeInTheDocument();
    expect(screen.getByText(/INH Prophylaxis Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/INH Prophylaxis End Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Current WHO Stage/i)).toBeInTheDocument();
  });
});
