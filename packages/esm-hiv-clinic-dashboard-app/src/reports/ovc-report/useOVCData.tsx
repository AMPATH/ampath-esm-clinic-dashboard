import { useEffect, useMemo, useState } from 'react';
import { EtlReportData } from '../../types/types';
import { fetchOVCReport } from './ovc-report.resource';

const useOVCData = (endDate: Date, locationUuid: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [ovcReportData, setOvcReportData] = useState<EtlReportData>(null);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const ac = new AbortController();
    if (endDate) {
      setLoading(true);
      setOvcReportData(null);
      fetchOVCReport(ac, locationUuid, endDate).then(
        ({ data }) => {
          setOvcReportData(data);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          setError(true);
        },
      );
    }
  }, [endDate, locationUuid]);

  const memorizedReportData = useMemo(() => {
    return { loading, ovcReportData, error };
  }, [error, loading, ovcReportData]);

  return memorizedReportData;
};

export default useOVCData;
