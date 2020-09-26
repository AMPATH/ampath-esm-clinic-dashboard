import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./report-title.component.css";


interface ReportTitleProps {
  title: string;
}

const ReportTitle: React.FC<ReportTitleProps> = ({ title }) => {
  let history = useHistory();
  return (
    <div className={styles["title-container"]}>
      <h4 className={styles.header}>
        <span>
          <svg className="omrs-icon">
            <use xlinkHref="#omrs-icon-access-time"></use>
          </svg>
        </span>
        {title}
      </h4>
      <div>
        <button
          style={{ marginLeft: "0.625rem", cursor: "pointer" }}
          className={`omrs-btn ${styles['button']}`}
          onClick={() => history.push("/home")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ReportTitle;
