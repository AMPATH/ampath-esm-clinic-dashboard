import React from 'react';
import * as useHivSummaryContext from '../../hooks/useHivSummary';
import HivSummaryHistorical from './hiv-summary-historical.component';
import { mockHIVSummary } from '../../../../../__mocks__/mock-hiv-summary';
import { render, screen, within } from '@testing-library/react';

describe('<HivSummaryHistorical/>', () => {
  beforeEach(() => {
    spyOn(useHivSummaryContext, 'useHivSummaryContext').and.returnValue(mockHIVSummary);
    render(<HivSummaryHistorical />);
  });

  xit('should render hiv-summary historical table correctly', async () => {
    const table = await screen.findByRole('table');
    const [columnNames, ...rows] = within(table).getAllByRole('rowgroup');
    expect(within(columnNames).getByText('Encounter Date')).toBeInTheDocument();
    expect(within(columnNames).getByText('Encounter Type')).toBeInTheDocument();
    expect(within(columnNames).getByText('RTC Date')).toBeInTheDocument();
    expect(within(columnNames).getByText('Med Pick up Date')).toBeInTheDocument();
    expect(within(columnNames).getByText('TB TREA Start Date')).toBeInTheDocument();
    expect(within(columnNames).getByText('TB TREA End Date')).toBeInTheDocument();
    expect(within(columnNames).getByText('ARV Meds')).toBeInTheDocument();
    expect(within(columnNames).getByText('CD4 Count')).toBeInTheDocument();
    expect(within(columnNames).getByText('Viral Load')).toBeInTheDocument();
    expect(within(columnNames).getByText('WHO Stage')).toBeInTheDocument();
    expect(within(columnNames).getByText('EAC')).toBeInTheDocument();

    const cells = within(rows[0]).getAllByRole('cell');
    within(rows[0]).getByText(/14-Jul-2021/i);
    within(rows[0]).getByText(/ADULTRETURN/i);
    within(rows[0]).getByText(/15-Dec-2021/i);
    within(rows[0]).getByText(/LAMIVUDINE, TENOFOVIR, DOLUTEGRAVIR/i);
    within(rows[0]).getByText(/1086/i);
    within(rows[0]).getByText(/40/i);
    within(rows[0]).getByText(/3/i);
  });
});
