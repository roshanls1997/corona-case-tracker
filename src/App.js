import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React from "react";
import { data } from "./mockData";
import { columnDefinations } from "./ColumnDefinations";
export default function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <h1>Corona Case Tracker</h1>
      <div
        style={{
          width: "100%",
          height: "600px",
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          rowData={data}
          columnDefs={columnDefinations}
          animateRows
          defaultColDef={{
            sortable: true,
            filter: "agNumberColumnFilter",
            resizable: true,
            flex: 1,
          }}
        />
      </div>
    </div>
  );
}
