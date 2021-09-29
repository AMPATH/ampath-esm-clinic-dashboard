import { StructuredListSkeleton } from 'carbon-components-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { fetchHivSummary } from '../hiv-summary.resource';
import { HIVSummary } from '../types';
import { ErrorState } from '../widgets/error/error-state.component';

enum StateTypes {
  PENDING = 'pending',
  RESOLVED = 'resolved',
  ERROR = 'error',
}

type ViewState = StateTypes.PENDING | StateTypes.RESOLVED | StateTypes.ERROR;

interface HIVSummaryContextShape {
  hivSummary: Array<HIVSummary>;
}

interface HivSummaryProviderProps {
  patient: fhir.Patient;
  patientUuid: string;
}

const HivSummaryContext = React.createContext<HIVSummaryContextShape>({ hivSummary: [] });

export function useHivSummaryContext() {
  const value = React.useContext(HivSummaryContext);
  return value.hivSummary;
}

export const HivSummaryProvider: React.FC<HivSummaryProviderProps> = ({ children, patient, patientUuid }) => {
  const { t } = useTranslation();
  const [status, setStatus] = React.useState<ViewState>(StateTypes.PENDING);
  const [error, setError] = React.useState<Error>(null);
  const [hivSummaryData, setHivSummaryData] = React.useState<Array<HIVSummary>>([]);
  React.useEffect(() => {
    const sub = fetchHivSummary(patientUuid).subscribe(
      (hivSummary) => {
        setHivSummaryData((prevState) => [...prevState, ...hivSummary]);
        setStatus(StateTypes.RESOLVED);
      },
      (error) => {
        setError(error);
        setStatus(StateTypes.ERROR);
      },
    );
    return () => sub.unsubscribe();
  }, [patientUuid]);

  const memorizedHivSummary = React.useMemo(() => {
    return { hivSummary: hivSummaryData };
  }, [hivSummaryData]);

  return (
    <HivSummaryContext.Provider value={memorizedHivSummary}>
      {status === StateTypes.PENDING && <StructuredListSkeleton />}
      {status === StateTypes.RESOLVED && children}
      {status === StateTypes.ERROR && <ErrorState headerTitle={t('hivSummary', 'HIV Summary')} error={error} />}
    </HivSummaryContext.Provider>
  );
};
