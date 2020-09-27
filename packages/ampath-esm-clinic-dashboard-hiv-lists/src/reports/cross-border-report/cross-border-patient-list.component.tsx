import React from "react";
import { match, useHistory } from "react-router-dom";
import PatientList from "../../patient-list/patient-list.component";
import { colDef } from "../../types";
import { fetchCrossBorderPatientList } from "./cross-border.resource";
import dayjs from "dayjs";
import styles from "./cross-border-patient-list.component.css";
import PatientListDownload from "../../ui-components/patient-list-download/patient-list-download.component";

interface CrossBorderPatientListProps {
  month: string;
  indicators: string;
  locationUuids: string;
  indicatorName: string;
  totalRecords?: string;
}

function CrossBorderPatientList(props: {
  match: match<CrossBorderPatientListProps>;
}) {
  const [crossBorderPatientList, setCrossBorderPatientList] = React.useState<
    Array<any>
  >();
  const {
    month,
    indicators,
    locationUuids,
    indicatorName,
    totalRecords,
  } = props.match.params;
  const [limit, setLimit] = React.useState<number>(300);
  let history = useHistory();
  React.useEffect(() => {
    setCrossBorderPatientList(null);
    const ac = new AbortController();
    fetchCrossBorderPatientList(
      locationUuids,
      dayjs(month).startOf("month").format("YYYY-MM-DD"),
      dayjs(month).endOf("month").format("YYYY-MM-DD"),
      indicators,
      ac,
      limit
    ).then(({ data }) => setCrossBorderPatientList(data.result));
    return () => ac.abort();
  }, [month, locationUuids, limit]);

  React.useEffect(() => {
    window.frames.parent.scrollTo(0,0);
  },[])

  return (
    <div>
      <div>
        {crossBorderPatientList && (
          <button
            style={{
              marginLeft: "0.625rem",
              cursor: "pointer",
              backgroundColor: "#428bca",
            }}
            className="omrs-btn omrs-filled-action"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        )}
      </div>
      {crossBorderPatientList ? (
        <>
          <PatientList
            columnsDef={columnsDef}
            rowData={crossBorderPatientList}
            indicator={indicators}
            indicatorName={indicatorName}
          />
          <PatientListDownload
            results={crossBorderPatientList}
            loadAllRecords={setLimit}
            totalRecords={Number(totalRecords)}
            indicatorName={indicatorName}
          />
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default CrossBorderPatientList;

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
    headerName: "Enrollment Date",
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
    headerName: "Last Appointment",
    field: "last_appointment",
  },
  {
    headerName: "Latest RTC",
    field: "latest_rtc_date",
  },
  {
    headerName: "Current Regimen",
    field: "cur_arv_meds",
  },
  {
    headerName: "Disclosure",
    field: "disclosure_status",
  },
  {
    headerName: "Due for VL",
    field: "due_for_vl_this_month",
  },
  {
    headerName: "Status",
    field: "status",
  },
];
