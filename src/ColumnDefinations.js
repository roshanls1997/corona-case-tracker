export const columnDefinations = [
  {
    headerName: "State / UT",
    field: "state_name",
    filter: "agTextColumnFilter",
    minWidth: 150,
  },
  {
    headerName: "Active Cases",
    children: [
      {
        headerName: "Total",
        field: "active",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        valueGetter: (props) => props.data.new_active - props.data.active,
        minWidth: 210,
      },
    ],
  },
  {
    headerName: "Cured / Discharged / Migrated",
    children: [
      {
        headerName: "Total",
        field: "cured",
        minWidth: 110,
      },
      {
        headerName: "Change Since Yesterday",
        valueGetter: (props) => props.data.new_cured - props.data.cured,
        minWidth: 210,
      },
    ],
  },
  {
    headerName: "Deaths",
    children: [
      {
        headerName: "Total",
        field: "death",
        minWidth: 100,
      },
      {
        headerName: "Change Since Yesterday",
        children: [
          {
            headerName: "Death during day (a)",
            valueGetter: (props) => props.data.new_death - props.data.death,
            filter: "agNumberColumnFilter",
            minWidth: 210,
          },
          {
            headerName: "Death Reconciled (b)",
            field: "death_reconsille",
            minWidth: 210,
          },
          {
            headerName: "Total (a+b)",
            field: "total",
            minWidth: 130,
          },
        ],
      },
    ],
  },
];
