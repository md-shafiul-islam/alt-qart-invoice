import React, { useContext, useEffect, useState } from "react";
import {
  FileUnknownOutlined,
  FileAddOutlined,
  ReconciliationOutlined,
  FileDoneOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { Outlet, NavLink } from "react-router-dom";

import { Button, Menu } from "antd";
import { AuthContext } from "../../Context/AuthProvider";
import localStore from "../../utils/localStore";
import { isEmptyOrNull } from "../../utils/helper";
import useAuth from "../../hooks/useAuth";

const items = [
  {
    key: "work-sheet",
    icon: <FileDoneOutlined />,
    label: <span>Work</span>,
    children: [
      {
        key: "list-add",

        icon: <i className="fa-solid fa-list-check"></i>,
        label: <NavLink to="/administrator/work-sheet">Work Sheet</NavLink>,
      },
      {
        key: "progress",
        icon: <FileUnknownOutlined />,
        label: <NavLink to="/administrator/progress">Progress</NavLink>,
      },
      {
        key: "work-sheets",
        icon: <FileDoneOutlined />,
        label: <NavLink to="/administrator/work-sheets">Complete</NavLink>,
      },
    ],
  },

  {
    key: "payment",
    label: "Payment",
    icon: <i className="fa-solid fa-file-invoice-dollar"></i>,
    children: [
      {
        key: "payment-history",

        icon: <i className="fa-solid fa-list-check"></i>,
        label: (
          <NavLink to="/administrator/payment-history">Payment History</NavLink>
        ),
      },
    ],
  },

  {
    key: "user",
    icon: <i className="fa-solid fa-user-tie"></i>,
    label: "Employee",
    children: [
      {
        key: "employees",
        icon: <i className="fa-solid fa-users"></i>,
        label: <NavLink to="/administrator/employee-list">Employees</NavLink>,
      },
    ],
  },
  {
    key: "Task",
    icon: <i className="fa-solid fa-cubes-stacked"></i>,
    label: <span>Task</span>,
    children: [
      {
        key: "task-add",

        icon: <i className="fa-solid fa-file-pen"></i>,
        label: <NavLink to="/administrator/tasks-add">Add</NavLink>,
      },

      {
        key: "tasks",
        icon: <i className="fa-solid fa-list"></i>,
        label: <NavLink to="/administrator/tasks">All Task</NavLink>,
      },
    ],
  },
];

const DashboardMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [menuItems, setMenuItems] = useState(items);
  const { user, role } = useAuth();

  useEffect(() => {
    console.log("User Aut Role, ", role);
    let userItems = [];
    if (items) {
      if ("Admin") {
        userItems = [
          {
            key: "employees",
            icon: <i className="fa-solid fa-users"></i>,
            label: (
              <NavLink to="/administrator/employee-list">Employees</NavLink>
            ),
          },
          {
            key: "all-employee",
            icon: <i className="fa-solid fa-users"></i>,
            label: (
              <NavLink to="/administrator/all-employee-list">
                All Employee
              </NavLink>
            ),
          },
        ];
      } else {
        userItems = [
          {
            key: "employees",
            icon: <i className="fa-solid fa-users"></i>,
            label: (
              <NavLink to="/administrator/employee-list">Employees</NavLink>
            ),
          },
        ];
      }

      for (let index = 0; index < items.length; index++) {
        if (!isEmptyOrNull(items[index])) {
          if (items[index].key === "user") {
            items[index].children = userItems;
          }
        }
      }

      setMenuItems(items);
    }
  }, [role]);

  return (
    <div className="py-6 px-2 text-2xl font-semibold w-full">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["users"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={menuItems}
      />
    </div>
  );
};

export default DashboardMenu;
