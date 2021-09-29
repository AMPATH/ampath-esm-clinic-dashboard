import React from 'react';
import HivSummary from '../../hiv-summary.component';

interface HIVSummaryOverviewProps {
  patient: fhir.Patient;
  patientUuid: string;
}

const HIVSummaryOverview: React.FC<HIVSummaryOverviewProps> = ({ patient, patientUuid }) => {
  return (
    <div style={{ width: '100' }}>
      <HivSummary patient={patient} patientUuid={patientUuid} />
    </div>
  );
};

export default HIVSummaryOverview;
