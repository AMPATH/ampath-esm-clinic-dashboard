import React, { useMemo } from 'react';
import styles from './hiv-summary.component.scss';
import { useTranslation } from 'react-i18next';
import ContentSwitcher from 'carbon-components-react/es/components/ContentSwitcher';
import Switch from 'carbon-components-react/es/components/Switch';
import HivLastestSummary from './widgets/hiv-lastest-summary/hiv-latest-summary.component';

interface HivSummaryProps {
  patientUuid: string;
  patient: fhir.Patient;
}

const HivSummary: React.FC<HivSummaryProps> = ({ patient, patientUuid }) => {
  const { t } = useTranslation();
  const headerTitle = t('hivSummary', 'HIV Summary');

  const hivSummaryTabs = useMemo(
    () => [
      { label: t('hivSummary', 'HIV Summary') },
      { label: t('historicalHIVSummary', 'Historical HIV Summary') },
      { label: t('medicationChangeHistory', 'Medication Change History') },
      { label: t('hivClinicalSummary', 'HIV Clinical Summary') },
      { label: t('previousVisitSummary', 'Previous Visit Summary') },
    ],
    [t],
  );

  return (
    <div className={styles.hivSummaryContainer}>
      <div className={styles.hivSummaryHeader}>
        <h4 className={`${styles.productiveHeading03} ${styles.text02}`}>{headerTitle}</h4>
      </div>
      <div className={styles.contentSwitcherContainer}>
        <ContentSwitcher onChange={() => {}} size="lg">
          {hivSummaryTabs.map((hivSummaryTab, index) => (
            <Switch key={index} name={hivSummaryTab.label} text={hivSummaryTab.label} />
          ))}
        </ContentSwitcher>
        <div>
          <HivLastestSummary patientUuid={patientUuid} patient={patient} />
        </div>
      </div>
    </div>
  );
};

export default HivSummary;
