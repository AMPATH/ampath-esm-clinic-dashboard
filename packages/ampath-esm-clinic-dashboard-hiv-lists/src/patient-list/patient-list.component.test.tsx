import React from "react";
import { BrowserRouter } from "react-router-dom";
import PatientList from "./patient-list.component";
import { ColDef, GridOptions } from "ag-grid-community";
import { screen, fireEvent, getByText } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe("<PatientListComponent/>", () => {
  const mockColumnDefs: Array<ColDef> = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
  ];

  const mockRowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
  ];

  const mockIndicator = "Motor Vehicle";

  const gridOptions: GridOptions = {};

  beforeEach(() => {
    render(
      <BrowserRouter>
        <PatientList
          columnDefs={mockColumnDefs}
          rowData={mockRowData}
          indicator={mockIndicator}
          gridOptions={gridOptions}
        />
      </BrowserRouter>
    );
  });

  it("should display patient-list as expected", () => {
    expect(screen.getByText(/Make/i)).toBeInTheDocument();
    expect(screen.getByText(/Model/i)).toBeInTheDocument();
    expect(screen.getByText(/Toyota/i)).toBeInTheDocument();
    expect(screen.getByText(/Celica/i)).toBeInTheDocument();
    expect(screen.getByText(/Motor Vehicle/i)).toBeInTheDocument();
  });
});
