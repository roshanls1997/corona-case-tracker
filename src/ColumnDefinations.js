export const columnDefinations = [
  {
    headerName: "State / UT",
    field: "state",
    filter: "agTextColumnFilter",
    minWidth: 150,
  },
  {
    headerName: "Active Cases",
    children: [
      {
        headerName: "Total",
        field: "activeCases.total",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        field: "activeCases.dayChange",
        minWidth: 210,
      },
    ],
  },
  {
    headerName: "Cured / Discharged / Migrated",
    children: [
      {
        headerName: "Total",
        field: "cured.total",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        field: "cured.dayChange",
        minWidth: 210,
      },
    ],
  },
  {
    headerName: "Deaths",
    children: [
      {
        headerName: "Total",
        field: "deaths.total",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        children: [
          {
            headerName: "Death during day (a)",
            field: "deaths.duringDay",
            filter: "agNumberColumnFilter",
            minWidth: 210,
          },
          {
            headerName: "Death Reconciled (b)",
            field: "deaths.reconciled",
            minWidth: 210,
          },
          {
            headerName: "Total (a+b)",
            field: "deaths.secondaryTotal",
            minWidth: 130,
          },
        ],
      },
    ],
  },
];
