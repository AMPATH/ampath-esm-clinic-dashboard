import React from 'react';
import styles from './hiv-clinical-summary.component.scss';

interface HIVClinicalSummaryProps {
  patientUuid: string;
}

const HIVClinicalSummary: React.FC<HIVClinicalSummaryProps> = ({ patientUuid }) => {
  return (
    <div>
      <h2>HIV Clinical Summary</h2>
    </div>
  );
};

export default HIVClinicalSummary;
