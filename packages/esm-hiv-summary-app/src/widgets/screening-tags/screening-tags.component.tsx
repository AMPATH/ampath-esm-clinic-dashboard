import React, { useMemo } from 'react';
import { age } from '@openmrs/esm-framework';
import { Tag } from 'carbon-components-react';
import { useTranslation } from 'react-i18next';
import { useHIVSummary } from '../../hooks/useHIVSummary';
import { loadHivSummary } from '../helper';

interface ScreeningTags {
  patientUuid: string;
  patient: fhir.Patient;
}

const ScreeningTags: React.FC<ScreeningTags> = ({ patientUuid, patient }) => {
  const { t } = useTranslation();
  const { hivSummary: hivSummaryData, error, isValidating } = useHIVSummary(patientUuid);
  const patientAge: number = parseInt(age(patient?.birthDate));
  const gbvScreeningLabel = patientAge > 19 ? t('gbvScreening', 'GBV Screening') : t('vacScreening', 'VAC Screening');

  const screeningResult = useMemo(
    () => (hivSummaryData.length ? loadHivSummary(hivSummaryData).gbv_screening_result : null),
    [hivSummaryData],
  );

  return (
    <>
      {screeningResult === 1 ? (
        <Tag type="red" title="Clear Filter" style={{ marginLeft: '1rem' }}>
          <b style={{ fontWeight: 'bold' }}>{gbvScreeningLabel}</b> : {t('positive', 'POSITIVE')}
        </Tag>
      ) : null}
    </>
  );
};

export default ScreeningTags;
