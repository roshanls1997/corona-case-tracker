import { useEffect, useState } from "react";

export default function useFetchData() {
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

  return {
    data,
    pinnedTopRowData,
  };
}
