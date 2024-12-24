import { FileDoneOutlined, FilePdfOutlined } from "@ant-design/icons";

import dateFormat, { masks } from "dateformat";
import { NavLink } from "react-router-dom";

export const invoiceCols = [
  {
    title: "Inv.ID",
    dataIndex: "id",
    key: "id",
    with: `8%`,
  },
  {
    title: "ID",
    dataIndex: "serial",
    key: "serial",
    with: `8%`,
  },
  {
    title: "Date",
    dataIndex: "created_at",
    key: "created_at",
    render: (date) => {
      return <div>{dateFormat(date, "ddd mmm dd/yyyy HH:MM")}</div>;
    },
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    with: `8%`,
    render: (status) => {
      return (
        <span className="px-2 bg-teal-700 font-semibold text-white py-1 shadow-md text-nowrap">
          {status}
        </span>
      );
    },
  },
  {
    title: "Name",
    dataIndex: "customer_name",
    key: "customer_name",
    with: `15%`,
  },
  {
    title: "Address",
    dataIndex: "customer_address",
    key: "customer_address",
  },
  {
    title: "Phone No",
    dataIndex: "customer_phone",
    key: "customer_phone",
  },
  {
    title: "Note",
    dataIndex: "notes",
    key: "notes",
  },

  {
    title: "Fraud",
    dataIndex: "is_fraud",
    key: "is_fraud",
    render: (isFraud) => {
      return (
        <span
          className={`${
            isFraud ? "bg-red-500" : "bg-green-600"
          } px-1 font-bold text-white shadow-lg py-1`}
        >
          {isFraud ? "Yes" : "No"}
        </span>
      );
    },
  },

  {
    title: "Action",
    dataIndex: "id",
    key: "id",
    render: (id, item) => {
      return (
        <div className="flex flex-row gap-4 text-xl">
          <NavLink className="cursor-pointer" to={`/invoices/${id}`}>
            <FileDoneOutlined />
          </NavLink>
          <NavLink
            className="cursor-pointer"
            to={item?.download_link}
            target="_blank"
          >
            <FilePdfOutlined />
          </NavLink>
        </div>
      );
    },
  },
];
