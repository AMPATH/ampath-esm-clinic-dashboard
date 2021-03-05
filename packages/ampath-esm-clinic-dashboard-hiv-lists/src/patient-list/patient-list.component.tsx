import React from "react";
import styles from "./patient-list.component.css";
import { colDef } from "../types";
import { useMessageEventHandler } from "../custom-hooks/useMessageEventHandler";

interface PatientListProps {
  columnsDef: Array<colDef>;
  rowData: Array<any>;
  indicator: string;
  indicatorName: string;
}

const PatientList: React.FC<PatientListProps> = ({
  columnsDef,
  rowData,
  indicator,
  indicatorName,
}) => {
  const { sendMessage } = useMessageEventHandler();
  const navigate = (rowData) => {
    sendMessage({
      navigate: { patientUuid: rowData.patient_uuid },
      action: "navigate",
    });
  };
  return (
    <div className={styles["patient-list-container"]}>
      <div className={styles["indicator-title"]}>
        <span>
          <b>{indicatorName}</b> patient list
        </span>
      </div>
      <hr />
      <div className={styles["table-container"]}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columnsDef.map((column) => (
                <th key={column.header}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowData.map((rowData, index) => (
              <tr key={index} onClick={() => navigate(rowData)}>
                {columnsDef.map((col) => (
                  <td key={col.key} style={col.cellStyle}>
                    {col.cellRender
                      ? col.cellRender({
                          value: rowData[col.key],
                          rowNumber: index + 1,
                        })
                      : rowData[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
