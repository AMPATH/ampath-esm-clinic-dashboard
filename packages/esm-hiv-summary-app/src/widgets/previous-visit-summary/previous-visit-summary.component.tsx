import { Tile } from 'carbon-components-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyDataIllustration } from '../empty-state';
import styles from './previous-visit-summary.scss';

const PreviousVisitSummary: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Tile className={styles.tile}>
      <EmptyDataIllustration />
      <p className={styles.displayText}>{t('underDevelopmentText', 'Coming Soon (Under Development)')}</p>
    </Tile>
  );
};

export default PreviousVisitSummary;
