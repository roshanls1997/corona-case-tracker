import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  columnDefinations,
  defaultColumnDefinations,
} from "./columDefinations/ColumnDefinations";
import {
  headerStyles,
  mainContaninerStyles,
  tableStyles,
} from "./utils/styles/styles";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const { data, pinnedTopRowData } = useFetchData();
  return (
    <div style={mainContaninerStyles}>
      <h1 style={headerStyles}>Corona Case Tracker</h1>
      <div style={tableStyles} className="ag-theme-alpine">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefinations}
          animateRows
          defaultColDef={defaultColumnDefinations}
          pinnedTopRowData={pinnedTopRowData}
        />
      </div>
    </div>
  );
}
