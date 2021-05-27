import React from 'react';
import styles from './hiv-summary.component.scss';
import { useTranslation } from 'react-i18next';
import ContentSwitcher from 'carbon-components-react/es/components/ContentSwitcher';
import Switch from 'carbon-components-react/es/components/Switch';

const HivSummary: React.FC = () => {
  const { t } = useTranslation();
  const headerTitle = t('hivSummary', 'HIV Summary');
  return (
    <div className={styles.hivSummaryContainer}>
      <div className={styles.hivSummaryHeader}>
        <h4 className={`${styles.productiveHeading03} ${styles.text02}`}>{headerTitle}</h4>
      </div>
      <div className={styles.contentSwitcherContainer}>
        <ContentSwitcher onChange={() => {}} size="lg">
          <Switch name={'overview'} text="Overview" />
          <Switch name={'ComprehensiveCD4'} text="Comprehensive CD4" />
          <Switch name={'lab'} text="Lab" />
        </ContentSwitcher>
      </div>
    </div>
  );
};

export default HivSummary;
