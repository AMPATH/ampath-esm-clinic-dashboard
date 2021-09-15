import dayjs from 'dayjs';
import React, { useEffect, useState, useMemo } from 'react';
import { EtlReportData } from '../../types/types';
import { fetchCrossBorderReportData } from './cross-border.resource';

const useCrossBoarder = (month: Date, locationUuid: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [crossBoarderReportData, setCrossBoarderReportData] = useState<EtlReportData>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    if (month) {
      setLoading(true);
      const ac = new AbortController();
      const startDate = dayjs(month).startOf('month').format('YYYY-MM-DD');
      const endDate = dayjs(month).endOf('month').format('YYYY-MM-DD');
      fetchCrossBorderReportData(ac, locationUuid, endDate, startDate).then(
        ({ data }) => {
          setCrossBoarderReportData(data);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
        },
      );
      return () => ac.abort();
    }
  }, [month, locationUuid]);

  const memorizedReportData = useMemo(() => {
    return { error, crossBoarderReportData, loading };
  }, [crossBoarderReportData, error, loading]);
  return memorizedReportData;
};
export default useCrossBoarder;
