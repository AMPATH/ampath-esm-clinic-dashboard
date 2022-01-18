import React from 'react';
import styles from './error-state.scss';
import { Tile } from 'carbon-components-react';
import { useTranslation } from 'react-i18next';
import { OpenmrsFetchError } from '@openmrs/esm-framework';
import { EmptyDataIllustration } from '../empty-state';

export interface ErrorStateProps {
  error: OpenmrsFetchError;
  headerTitle: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error, headerTitle }) => {
  const { t } = useTranslation();

  return (
    <Tile light className={styles.tile}>
      <EmptyDataIllustration />
      <p className={styles.errorMessage}>
        {t('error', 'Error')} {`${error?.response?.status}: `}
        {error?.response?.statusText}
      </p>
      <p className={styles.errorCopy}>
        {t(
          'errorCopy',
          'Sorry, there was a problem displaying this information. You can try to reload this page, or contact the site administrator and quote the error code above.',
        )}
      </p>
    </Tile>
  );
};
