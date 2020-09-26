import React from "react";
import styles from "./patient-list-download.component.css";

interface PatientListDownloadProps {
  results: Array<any>;
  loadAllRecords: Function;
  totalRecords: number;
}

const PatientListDownload: React.FC<PatientListDownloadProps> = ({
  results,
  loadAllRecords,
  totalRecords,
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
        <button
          className={`${styles["download-button"]} omrs-btn omrs-outlined-action omrs-rounded`}
        >
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default PatientListDownload;
