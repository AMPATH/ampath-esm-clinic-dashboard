import React from "react";
import PatientList from "../../patient-list/patient-list.component";
import { fetchOVCPatientList } from "./ovc-report.resource";
import { colDef } from "../../types";
import { useHistory } from "react-router-dom";
import PatientListDownload from "../../ui-components/patient-list-download/patient-list-download.component";

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
  React.useEffect(() => {
    const ac = new AbortController();
    fetchOVCPatientList(locationUuids, endDate, indicators, ac).then(
      ({ data }) => setOvcReportData(data.result),
      (erro) => {
        console.error(erro);
      }
    );
  }, [indicators, endDate]);

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
      {ovcReportData && (
        <>
          <PatientList
            columnsDef={columnsDef}
            rowData={ovcReportData}
            indicator={indicators}
            indicatorName={indicatorName}
          />
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
    headerName: "#",
    field: "#",
    cellRender: (value) => <span>{value.rowNumber}</span>,
  },
  {
    headerName: "Identifiers",
    field: "identifiers",
    cellRender: (value) => (
      <a href="#" title="providercount">
        {value.value}
      </a>
    ),
  },
  {
    headerName: "Name",
    field: "person_name",
  },
  {
    headerName: "Enrollment date",
    field: "enrollment_date",
  },
  {
    headerName: "Age",
    field: "age",
  },
  {
    headerName: "OVC ID",
    field: "ovc_identifier",
  },
  {
    headerName: "Latest VL",
    field: "vl_1",
  },
  {
    headerName: "Latest vl date",
    field: "vl_1_date",
  },
  {
    headerName: "County",
    field: "county",
  },
  {
    headerName: "Sub County",
    field: "sub_county",
  },
  {
    headerName: "Location",
    field: "location",
  },
  {
    headerName: "Ward",
    field: "ward",
  },
  {
    headerName: "last clinic date",
    field: "last_appointment",
  },
  {
    headerName: "Latest RTC",
    field: "latest_rtc_date",
  },
  {
    headerName: "Current regimen",
    field: "cur_arv_meds",
  },
  {
    headerName: "Disclosure",
    field: "disclosure_status",
  },
  {
    headerName: "Due for Vl",
    field: "due_for_vl_this_month",
  },
  {
    headerName: "Status",
    field: "status",
  },
];
