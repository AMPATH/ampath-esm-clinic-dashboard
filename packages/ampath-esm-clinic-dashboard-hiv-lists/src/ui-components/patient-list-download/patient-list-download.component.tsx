import React from "react";
import styles from "./patient-list-download.component.css";
import CsvDownloader from "react-csv-downloader";
import Button from "carbon-components-react/es/components/Button";
import  Download32  from "@carbon/icons-react/lib/download/32";

interface PatientListDownloadProps {
  results: Array<any>;
  loadAllRecords: Function;
  totalRecords: number;
  indicatorName: string;
}
const columnDefs = [
  {
    id: "identifiers",
    displayName: "Identifiers",
  },
  { id: "person_name", displayName: "Name" },
  { id: "enrollment_date", displayName: "Enrollment date" },
  { id: "age", displayName: "Age" },
  { id: "ovc_identifier", displayName: "OVC ID" },
  { id: "vl_1", displayName: "Latest VL" },
  { id: "vl_1_date", displayName: "Latest vl date" },
  { id: "county", displayName: "County" },
  { id: "sub_county", displayName: "Sub County" },
  { id: "ward", displayName: "Ward" },
  { id: "last_appointment", displayName: "Last clinic date" },
  { id: "latest_rtc_date", displayName: "Latest RTC" },
  { id: "cur_arv_meds", displayName: "Current regimen" },
  { id: "disclosure_status", displayName: "Disclosure" },
  { id: "due_for_vl_this_month", displayName: "Due for Vl" },
  { id: "status", displayName: "Status" },
];
const PatientListDownload: React.FC<PatientListDownloadProps> = ({
  results,
  loadAllRecords,
  totalRecords,
  indicatorName,
}) => {
  return (
    <div className={styles["container"]}>
      <div>
        {results.length >= totalRecords && (
          <div className={styles["container-records"]}>
            <svg className="omrs-icon">
              <use xlinkHref="#omrs-icon-check-circle"></use>
            </svg>
            <span> All records loaded [ {results.length} ]</span>
          </div>
        )}
        {results.length < totalRecords && (
          <div className={styles["container-records"]}>
            <span> [ {results.length} ] records loaded</span>
            <button
              className={`${styles["load-all-records"]}`}
              onClick={(evnt) => loadAllRecords(totalRecords)}
            >
              <span>Load All</span>
            </button>
          </div>
        )}
      </div>
      <div>
        <CsvDownloader
          datas={results}
          columns={columnDefs}
          separator=";"
          filename={`Patient List ${indicatorName} ${new Date().toDateString()}`}
        >
          <Button kind="primary" renderIcon={Download32}>Download</Button>
        </CsvDownloader>
      </div>
    </div>
  );
};

export default PatientListDownload;
