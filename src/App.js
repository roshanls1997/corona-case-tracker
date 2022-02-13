import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React, { useEffect, useState } from "react";
import { columnDefinations } from "./ColumnDefinations";
export default function App() {
  const [data, setData] = useState([]);
  const [pinnedTopRowData, setPinnedTopRowData] = useState([]);
  const filteredStateData = (data) => data.filter((state) => state.state_code);
  const indiaData = (data) =>
    data
      .filter((state) => !state.state_code)
      .map((state) => ({ ...state, state_name: "India" }));
  useEffect(function getStateWiseData() {
    fetch("https://www.mohfw.gov.in/data/datanew.json")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(filteredStateData(resp));
        setPinnedTopRowData(indiaData(resp));
      });
  }, []);
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
          pinnedTopRowData={pinnedTopRowData}
        />
      </div>
    </div>
  );
}
