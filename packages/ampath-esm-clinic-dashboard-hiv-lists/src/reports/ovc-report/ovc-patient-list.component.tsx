import React from "react";
import PatientList from "../../patient-list/patient-list.component";
import { fetchOVCPatientList } from "./ovc-report.resource";
import { colDef } from "../../types";
import { useHistory } from "react-router-dom";
import PatientListDownload from "../../ui-components/patient-list-download/patient-list-download.component";
import DataTable, {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "carbon-components-react/es/components/DataTable";
import dayjs from "dayjs";
import {
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from "carbon-components-react";
import styles from "./ovc-report.component.css";
function OVCPatientList(props) {
  const [limit, setLimit] = React.useState<number>(300);
  const [ovcReportData, setOvcReportData] = React.useState<Array<any>>();
  const {
    endDate,
    locationUuids,
    indicators,
    indicatorName,
    totalRecords,
  } = props.match.params;

  let history = useHistory();
  let patientListTitle = "";
  React.useEffect(() => {
    const ac = new AbortController();
    patientListTitle += indicatorName + "Patient List";
    fetchOVCPatientList(locationUuids, endDate, indicators, ac).then(
      ({ data }) => setOvcReportData(data.result),
      (erro) => {
        console.error(erro);
      }
    );
  }, [indicators, endDate]);
  const tableRows = ovcReportData?.map((report, index) => {
   

    return {
      id: `${index}`,
      identifiers: report.identifiers,
      person_name: report.person_name,
      enrollment_date: dayjs(report.enrollment_date).format(`DD - MMM - YYYY`),
      age:report.age,
      ovc_identifier:report.ovc_identifier,
      vl_1_date:report.vl_1_date,
      vl_1:report.vl_1,
      county:report.county,
      sub_county: report.sub_county,
      location:report.location,
      ward:report.ward,
      last_appointment:report.last_appointment,
      latest_rtc:report.latest_rtc,
      current_regiment:report.cur_arv_meds,
      disclosure:report.disclosure_status,
      due_for_vl_this_month:report.due_for_vl_this_month,
      status:report.status

    };
  });
  React.useEffect(() => {
    window.frames.parent.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        {ovcReportData && (
          <button
            style={{ marginLeft: "0.625rem", cursor: "pointer" }}
            className="omrs-btn omrs-filled-action"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        )}
      </div>
      {tableRows &&  (
        <>
        
        <div className={styles.inputContainer}>
        <TableContainer
               title={`${indicatorName} Patient List`}

               description="OVC">
          <DataTable
            rows={tableRows}
            headers={columnsDef}
            isSortable={true}
            size="short"
            onInputChange
          >
            {({
              rows,
              headers,
              getHeaderProps,
              getTableProps,
              onInputChange,
              getTableContainerProps,
              getToolbarProps
            }) => (
              <>
                
                  <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
                    <TableToolbarContent>
                      <TableToolbarSearch onChange={onInputChange} />
                    </TableToolbarContent>
                  </TableToolbar>

                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader
                            {...getHeaderProps({
                              header,
                              isSortable: header.isSortable,
                            })}
                          >
                            {header.header?.content ?? header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, i) => (
                        <TableRow key={i}>
                          

                          {row.cells.map((cell) => (
                            <TableCell key={cell.id} id={i}>
                              {cell.value?.content ?? cell.value}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                
              </>
            )}
          </DataTable>
          </TableContainer>
          </div>
          <PatientListDownload
            results={ovcReportData}
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
    header: "Identifiers",
    key: "identifiers",
  },
  {
    header: "Name",
    key: "person_name",
  },
  {
    header: "Enrollment date",
    key: "enrollment_date",
  },
  {
    header: "Age",
    key: "age",
  },
  {
    header: "OVC ID",
    key: "ovc_identifier",
  },
  {
    header: "Latest VL",
    key: "vl_1",
  },
  {
    header: "Latest vl date",
    key: "vl_1_date",
  },
  {
    header: "County",
    key: "county",
  },
  {
    header: "Sub County",
    key: "sub_county",
  },
  {
    header: "Location",
    key: "location",
  },
  {
    header: "Ward",
    key: "ward",
  },
  {
    header: "last clinic date",
    key: "last_appointment",
  },
  {
    header: "Latest RTC",
    key: "latest_rtc_date",
  },
  {
    header: "Current regimen",
    key: "cur_arv_meds",
  },
  {
    header: "Disclosure",
    key: "disclosure_status",
  },
  {
    header: "Due for Vl",
    key: "due_for_vl_this_month",
  },
  {
    header: "Status",
    key: "status",
  },
];
