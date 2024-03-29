import React from 'react';
import { fetchOVCPatientList } from './ovc-report.resource';
import { colDef } from '../../types';
import { useHistory, useLocation } from 'react-router-dom';
import PatientListDownload from '../../ui-components/patient-list-download/patient-list-download.component';
import DataTable, {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from 'carbon-components-react/es/components/DataTable';
import Button from 'carbon-components-react/es/components/Button';
import styles from './ovc-report.component.css';
import { useMessageEventHandler } from '../../custom-hooks/useMessageEventHandler';
import { usePaginate } from '../../hooks/use-paginate';
import PatientChartPagination from '../../ui-components/pagination/pagination.component';
import { InlineLoading } from 'carbon-components-react';
import { createErrorHandler } from '@openmrs/esm-error-handling';

function OVCPatientList(props) {
  const location = useLocation();
  const [limit, setLimit] = React.useState<number>(300);
  const [isLoading, setIsLoading] = React.useState(true);
  const [ovcReportData, setOvcReportData] = React.useState<Array<any>>([]);
  const { endDate, locationUuids, indicators, indicatorName, totalRecords } = props.match.params;

  let history = useHistory();
  const [pageNumber, setPageNumber] = React.useState(1);
  const handlePageChange = ({ page }) => {
    setPageNumber(page);
  };

  const [page] = usePaginate(ovcReportData, pageNumber, 300);
  React.useEffect(() => {
    if (indicators && endDate) {
      const ac = new AbortController();
      fetchOVCPatientList(locationUuids, endDate, indicators, ac).then(
        ({ data }) => {
          setOvcReportData(data.result);
          setIsLoading(false);
        },
        (erro) => {
          createErrorHandler();
          setIsLoading(false);
        },
      );
      return () => ac.abort();
    }
  }, [indicators, endDate, indicatorName, locationUuids]);

  const csvData = ovcReportData.map((result) => {
    return {
      ...result,
      identifiers: result.identifiers.split(',').join(''),
      cur_arv_meds: result.cur_arv_meds.split(',').join(''),
    };
  });

  const tableRows = page?.map((report, index) => {
    return {
      id: `${index + 1}`,
      identifiers: report.identifiers,
      person_name: report.person_name,
      enrollment_date: report.enrollment_date,
      age: report.age,
      ovc_identifier: report.ovc_identifier,
      vl_1_date: report.vl_1_date,
      vl_1: report.vl_1,
      county: report.county,
      sub_county: report.sub_county,
      location: report.location,
      ward: report.ward,
      last_appointment: report.last_appointment,
      latest_rtc: report.latest_rtc,
      current_regiment: report.cur_arv_meds,
      disclosure: report.disclosure_status,
      due_for_vl_this_month: report.due_for_vl_this_month,
      status: report.status,
      patient_uuid: report.patient_uuid,
    };
  });
  React.useEffect(() => {
    window.frames.parent.scrollTo(0, 0);
  }, []);
  const { sendMessage } = useMessageEventHandler();
  const navigate = (patient_uuid) => {
    sendMessage({
      action: 'storeParamsInUrl',
      storeParamsInUrl: { returnToUrl: location.pathname },
    });

    sendMessage({
      navigate: {
        patientUuid: patient_uuid,
        returnToUrl: location.pathname,
        parentUrl: window.parent.location.href,
      },
      action: 'navigate',
    });
  };
  return (
    <div className={styles.reportContainer}>
      {isLoading ? (
        <InlineLoading description="Loading..." />
      ) : (
        <>
          <div>
            {ovcReportData && (
              <Button
                onClick={() => {
                  history.goBack();
                }}>
                Go back
              </Button>
            )}
          </div>
          {tableRows && (
            <div className={styles.dataTableContainer}>
              <DataTable rows={tableRows} headers={columnsDef}>
                {({ rows, headers, getHeaderProps, getTableProps, getToolbarProps, onInputChange }) => (
                  <TableContainer title={`${indicatorName} Patient List`} description="OVC">
                    <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
                      <TableToolbarContent>
                        <TableToolbarSearch onChange={onInputChange} />
                      </TableToolbarContent>
                    </TableToolbar>
                    <Table className={styles.dataTableStyles} {...getTableProps()} size="compact">
                      <TableHead>
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, i) => (
                          <TableRow key={row.id} onClick={() => navigate(row.cells[17].value)}>
                            {row.cells.map((cell) => {
                              return <TableCell key={cell.id}>{cell.value}</TableCell>;
                            })}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
              <PatientChartPagination
                items={ovcReportData}
                pageSize={300}
                pageNumber={pageNumber}
                onPageNumberChange={handlePageChange}
                currentPage={page}
              />
            </div>
          )}
          <PatientListDownload
            results={csvData}
            loadAllRecords={setLimit}
            totalRecords={Number(totalRecords)}
            indicatorName={indicatorName}
          />
        </>
      )}
    </div>
  );
}

export default OVCPatientList;

const columnsDef: Array<colDef> = [
  {
    header: 'No',
    key: 'id',
  },
  {
    header: 'Identifiers',
    key: 'identifiers',
  },
  {
    header: 'Name',
    key: 'person_name',
  },
  {
    header: 'Enrollment date',
    key: 'enrollment_date',
  },
  {
    header: 'Age',
    key: 'age',
  },
  {
    header: 'OVC ID',
    key: 'ovc_identifier',
  },
  {
    header: 'Latest VL',
    key: 'vl_1',
  },
  {
    header: 'Latest vl date',
    key: 'vl_1_date',
  },
  {
    header: 'County',
    key: 'county',
  },
  {
    header: 'Sub County',
    key: 'sub_county',
  },
  {
    header: 'Location',
    key: 'location',
  },
  {
    header: 'Ward',
    key: 'ward',
  },
  {
    header: 'last clinic date',
    key: 'last_appointment',
  },
  {
    header: 'Latest RTC',
    key: 'latest_rtc_date',
  },
  {
    header: 'Current regimen',
    key: 'cur_arv_meds',
  },
  {
    header: 'Disclosure',
    key: 'disclosure_status',
  },
  {
    header: 'Due for Vl',
    key: 'due_for_vl_this_month',
  },
  {
    header: 'Status',
    key: 'status',
  },
  {
    header: 'Patient Uuid',
    key: 'patient_uuid',
  },
];
