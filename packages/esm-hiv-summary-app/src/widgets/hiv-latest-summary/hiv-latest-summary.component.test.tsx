import React from 'react';
import HivLatestSummary from './hiv-latest-summary.component';
import { render, RenderResult, screen } from '@testing-library/react';
import { mockPatient } from '../../../../../__mocks__/mock-patient';
import { mockHIVSummary } from '../../../../../__mocks__/mock-hiv-summary';
import * as useHivSummary from '../../hooks/useHIVSummary';
import * as useCervicalCancerScreening from '../../hooks/useCervicalScreeningSummary';

const cervicalCancerSummary = [
  {
    person_id: 26600,
    test_date: '14-09-2016',
    via_or_via_vili: 1115,
    pap_smear: null,
    hpv: null,
    uuid: 'dcab351d-afa8-4dad-862f-f01905ea6b87',
    test: 'VIA or VIA/VILI',
    via_test_result: 'NORMAL',
  },
];

describe('<HivLatestSummary/>', () => {
  let result: RenderResult;
  const renderHIVSummary = () => {
    spyOn(useHivSummary, 'useHIVSummary').and.returnValue({ hivSummary: mockHIVSummary, error: null });
    spyOn(useCervicalCancerScreening, 'useCervicalCancerSummary').and.returnValue({
      cervicalCancerScreeningSummary: cervicalCancerSummary,
      loading: false,
    });
    result = render(<HivLatestSummary patient={mockPatient} />);
  };

  beforeEach(() => {
    renderHIVSummary();
  });

  it('should render hiv-summary correctly', async () => {
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
    expect(screen.getByText('(Not eligible) Male Patient')).toBeInTheDocument();
    expect(screen.getByText(/Enrollment Date/i)).toBeInTheDocument();
    expect(screen.getByText(/INH Prophylaxis Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/INH Prophylaxis End Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Current WHO Stage/i)).toBeInTheDocument();
  });

  it('should display cervical cancer summary', () => {
    expect(screen.getByText(/Cervical cancer screening/)).toBeInTheDocument();
    expect(screen.getByText(/^Date$/i)).toBeInTheDocument();
    expect(screen.getByText(/^14-09-2016$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Result$/i)).toBeInTheDocument();
    expect(screen.getByText(/^NORMAL$/i)).toBeInTheDocument();
  });
});
