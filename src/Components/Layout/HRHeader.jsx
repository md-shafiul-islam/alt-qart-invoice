import React, { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeProvider";
import { AuthContext } from "../../Context/AuthProvider";
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { Menu, Col, Row, Layout } from "antd";
const { Header } = Layout;

const HRHeader = () => {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([]);
  const { user, isLoading, logOut } = useContext(AuthContext);

  const { isDark, onThemeChange } = useContext(ThemeContext);

  const [current, setCurrent] = useState("home");

  const onLogOutAction = (e) => {
    logOut();
  };
  const onMenuClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <NavLink to="/" className="active:text-white ">
          Home
        </NavLink>
      ),
      key: "home",
    },
    {
      label: <NavLink to="/invoices">Invoices</NavLink>,
      key: "invoices",
    },
    {
      label: <NavLink to="/administrator">Dashboard</NavLink>,
      key: "administrator",
    },

    {
      label: <NavLink to="/contact-us">Contact Us</NavLink>,
      key: "contact-us",
    },
    {
      key: "Register",
      label: <NavLink to="/register">Register</NavLink>,
    },
    {
      key: "Login",
      label: (
        <>
          {!user ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <span onClick={onLogOutAction}>Logout</span>
          )}
        </>
      ),
    },
  ];

  return (
    <Col span={24}>
      <Row>
        <Col span={2}>
          <div>
            {" "}
            <AppstoreAddOutlined />
          </div>
        </Col>
        <Col span={20}>
          <Menu
            className="w-full font-bold dark:bg-gray-900"
            onClick={onMenuClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            theme={isDark ? "dark" : "light"}
          />
        </Col>
        <Col span={2}>
          <div className="w-full flex h-full items-center">
            <div
              className="text-xl h-8 w-8 rounded-full bg-gray-800 text-white flex flex-col justify-center items-center cursor-pointer "
              onClick={onThemeChange}
            >
              {isDark ? <SunOutlined className="" /> : <MoonOutlined />}
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default HRHeader;
