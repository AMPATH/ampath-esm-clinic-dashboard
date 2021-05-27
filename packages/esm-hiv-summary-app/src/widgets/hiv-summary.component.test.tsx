import React from 'react';
import { screen, render } from '@testing-library/react';
import Hivsummary from './hiv-summary.component';

describe('<HIVSummary/>', () => {
  const renderHIVSummary = () => {
    render(<Hivsummary />);
  };

  it('should render hiv-summary without dying', () => {
    renderHIVSummary();
    expect(screen.getByText(/Lab/i)).toBeInTheDocument();
  });
});
