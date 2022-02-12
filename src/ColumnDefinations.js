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
        field: "totalActive",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        field: "dayChangeActive",
        minWidth: 210,
      },
    ],
  },
  {
    headerName: "Cured / Discharged / Migrated",
    children: [
      {
        headerName: "Total",
        field: "totalCured",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        field: "dayChangeCured",
        minWidth: 210,
      },
    ],
  },
  {
    headerName: "Deaths",
    children: [
      {
        headerName: "Total",
        field: "totalDeaths",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        children: [
          {
            headerName: "Death during day (a)",
            field: "duringDayDeaths",
            filter: "agNumberColumnFilter",
            minWidth: 210,
          },
          {
            headerName: "Death Reconciled (b)",
            field: "reconciledDeaths",
            minWidth: 210,
          },
          {
            headerName: "Total (a+b)",
            field: "secondaryTotalDeaths",
            minWidth: 130,
          },
        ],
      },
    ],
  },
];
