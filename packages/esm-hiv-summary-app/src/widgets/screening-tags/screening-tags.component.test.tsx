import React from 'react';
import { screen, render } from '@testing-library/react';
import ScreeningTags from './screening-tags.component';
import { useCurrentPatient } from '@openmrs/esm-framework';
import { mockPatient } from '../../../../../__mocks__/mock-patient';
import * as useHivSummary from '../../hooks/useHIVSummary';
import { mockHIVSummary } from '../../../../../__mocks__/mock-hiv-summary';

jest.mock('@openmrs/esm-framework', () => {
  const originalModule = jest.requireActual('@openmrs/esm-framework');

  return {
    ...originalModule,
    age: jest
      .fn()
      .mockImplementation((birthDate) => new Date().getUTCFullYear() - new Date(birthDate).getUTCFullYear()),
  };
});

describe('ScreenTags', () => {
  it('should render gbv screening if patient is older than 19', () => {
    spyOn(useHivSummary, 'useHIVSummary').and.returnValue({ hivSummary: mockHIVSummary, error: null });
    render(<ScreeningTags patientUuid="some-uuid" patient={mockPatient} />);

    expect(screen.getByText(/GBV Screening/i)).toBeInTheDocument();
    expect(screen.getByText(/POSITIVE/i)).toBeInTheDocument();
  });

  it('should render vaccination screening if patient < 19 years', () => {
    const mockPatient = { gender: 'male', birthDate: '2020-04-04' };
    spyOn(useHivSummary, 'useHIVSummary').and.returnValue({ hivSummary: mockHIVSummary, error: null });
    render(<ScreeningTags patientUuid="some-uuid" patient={mockPatient} />);

    expect(screen.getByText(/VAC Screening/i)).toBeInTheDocument();
    expect(screen.getByText(/POSITIVE/i)).toBeInTheDocument();
  });
});
