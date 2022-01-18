import React from 'react';
import styles from './empty-state.scss';
import { Link, Tile } from 'carbon-components-react';
import { Trans, useTranslation } from 'react-i18next';
import { EmptyDataIllustration } from './empty-data-illustration.component';

export interface EmptyStateProps {
  headerTitle: string;
  displayText: string;
  launchForm?(): void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ headerTitle, displayText, launchForm }) => {
  const { t } = useTranslation();

  return (
    <Tile light className={styles.tile}>
      <EmptyDataIllustration />
      <p className={styles.content}>There is no {displayText} to display for this patient</p>
      <p className={styles.action}>
        {launchForm && (
          <span>
            {' '}
            <Link onClick={() => launchForm()}>
              {t('record', 'Record')} {displayText.toLowerCase()}
            </Link>
          </span>
        )}
      </p>
    </Tile>
  );
};
