import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const Columns = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
    // Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    // Filter: ColumnFilter,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    //  Filter: ColumnFilter
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    // Filter: ColumnFilter,
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    // Filter: ColumnFilter
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    // Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    //  Filter: ColumnFilter
  },
];

export const Grouped_Columns = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      { Header: "First Name", accessor: "first_name", Footer: "First Name" },
      { Header: "Last Name", Footer: "Last Name", accessor: "last_name" },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      { Header: "Country", Footer: "Country", accessor: "country" },
      { Header: "Phone", Footer: "Phone", accessor: "phone" },
    ],
  },
];
