import React from 'react';
import ReportTitle from '../../ui-components/header-ui/report-title.component';
import ReportFilter from '../../ui-components/report-filter.component';
import ReportView from '../../ui-components/report-view.component';
import styles from './cross-border-report.component.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useCurrentLocation } from '../../custom-hooks/useCurrentLocation';
import dayjs from 'dayjs';
import useCrossBoarder from './useCrossBorder';

const CrossBorderReport: React.FC = () => {
  const currentLocation = useCurrentLocation();
  const history = useHistory();
  const [month, setMonth] = React.useState<Date>();
  const [locationUuid, setLocationUuid] = React.useState(currentLocation);
  const { loading, crossBoarderReportData, error } = useCrossBoarder(month, locationUuid);

  const handleLocationChange = (event: MessageEvent) => {
    event.data?.location_uuid && setLocationUuid(event.data.location_uuid);
  };

  React.useEffect(() => {
    window.addEventListener('message', handleLocationChange);
    return () => window.removeEventListener('message', handleLocationChange);
  }, []);

  const generateReport = (): void => {
    month ?? setMonth(new Date());
    storeInURL();
  };

  const storeInURL = (): void => {
    const params = {
      month: month ?? new Date(),
      locationUuid: locationUuid,
    };
    history.push(`/hiv-clinic-dashboard/cross-border-report`, params);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.valueAsDate);
  };

  return (
    <>
      {!loading ? (
        <div>
          {error && (
            <div className={styles.error}>
              <div>
                <svg className="omrs-icon" fill="var(--omrs-color-danger)">
                  <use xlinkHref="#omrs-icon-important-notification"></use>
                </svg>
                <h3>An error occurred while loading the report</h3>
              </div>
              <svg className="omrs-icon" fill="var(--omrs-color-danger)" onClick={() => {}} data-testid="close">
                <use xlinkHref="#omrs-icon-close"></use>
              </svg>
            </div>
          )}
          <ReportTitle title="Cross Border Report" />
          <ReportFilter>
            <div className={styles['report-filters']}>
              <div className={styles.inputContainer}>
                <label htmlFor="month">Month</label>
                <input
                  type="month"
                  name="month"
                  id="month"
                  onChange={handleChange}
                  value={dayjs(month).format('YYYY-MM')}
                />
              </div>
            </div>
          </ReportFilter>
          <div className={styles.reportButton}>
            <button className="omrs-btn omrs-filled-action" onClick={generateReport}>
              Generate Report
            </button>
          </div>
          {crossBoarderReportData && (
            <ReportView
              indicatorDefinitions={crossBoarderReportData.indicatorDefinitions}
              sectionDefinitions={crossBoarderReportData.sectionDefinitions}
              result={crossBoarderReportData.result}
              queriesAndSchemas={crossBoarderReportData.queriesAndSchemas}
              params={{
                patientListUrl: `/hiv-clinic-dashboard/cross-border-patient-list/${locationUuid}/${
                  month ?? new Date()
                }`,
              }}
            />
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CrossBorderReport;
