import React from "react";
import { ColDef, GridOptions, RowClickedEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-blue.css";
import styles from "./patient-list.style.css";
import "./ag-grid.css";

interface PatientListProps {
  columnDefs: Array<ColDef>;
  rowData?: Array<any>;
  indicator: string;
  gridOptions?: GridOptions;
  pinnedBottomRowData?: Array<any>;
}

const PatientList: React.FC<PatientListProps> = ({
  columnDefs,
  rowData,
  gridOptions,
  indicator,
  pinnedBottomRowData,
}) => {
  const pageSize = 300;

  const handleRowSelection = (event: RowClickedEvent) => {
    console.log(event.data.country);
  };

  return (
    <div className={styles["patient-list-container"]}>
      <div className={styles.header}>
        <span>
          <b>{indicator}</b> patient list
        </span>
      </div>
      <div className={`${styles["ag-grid-report-container"]}`}>
        <div className="ag-theme-blue">
          {rowData && (
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              gridOptions={gridOptions}
              pinnedBottomRowData={pinnedBottomRowData}
              pagination={true}
              paginationPageSize={pageSize}
              onRowClicked={(evt) => handleRowSelection(evt)}
            />
          )}
        </div>
      </div>
      <div className={styles["button-container"]}>
        <button
          className="omrs-btn omrs-filled-action"
          onClick={() => {
            gridOptions.api.exportDataAsCsv();
          }}
        >
          Export
          <svg className="omrs-icon">
            <use xlinkHref="#omrs-icon-download"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PatientList;
