import React from 'react';
import HivLabel from './hiv-summary-label.component';
import { render, screen } from '@testing-library/react';

describe('<HivSummaryLabel/>', () => {
  const renderHivSummaryLabel = () => {
    render(<HivLabel title="ARV Start Date" value="02 - May - 2021" />);
  };

  it('should display title and label', () => {
    renderHivSummaryLabel();
    expect(screen.getByText(/ARV Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/02 - May - 2021/i)).toBeInTheDocument();
  });
});
