import React from 'react';
import { EtlReportData } from '../types/types';
import styles from './report-view.component.css';
import { useHistory } from 'react-router-dom';
import { useColumns } from './useColumns';

const ReportView: React.FC<EtlReportData> = ({ result, sectionDefinitions, params }) => {
  const history = useHistory();
  const columnDefs = useColumns(sectionDefinitions, result);

  const navigateToPatientList = (indicators) => {
    const { patientListUrl } = params;
    indicators?.value !== 0 &&
      indicators?.value !== undefined &&
      indicators?.value !== '-' &&
      indicators?.field !== 'location' &&
      history.push(`${patientListUrl}/${indicators.field}/${indicators.indicatorName}/${indicators.value}`);
  };

  return (
    <div className={styles.reportViewContainer}>
      <table>
        {columnDefs &&
          columnDefs.map((data, index) => (
            <tbody key={index}>
              <tr>
                <td className={styles.reportTableHeader} colSpan={2}>
                  {data.headerName}
                </td>
              </tr>
              {data.children.map((child, index) => {
                return (
                  <tr
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      navigateToPatientList({
                        field: child.field,
                        value: child?.value[0]?.value,
                        indicatorName: child.headerName,
                      })
                    }
                    key={index}
                    className={styles.indicator}>
                    <td>{child.headerName}</td>
                    <td>{child?.value[0]?.value ?? ' - '}</td>
                  </tr>
                );
              })}
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default ReportView;
