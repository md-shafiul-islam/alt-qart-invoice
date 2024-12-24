import React, { useState } from "react";


import { Outlet, NavLink } from "react-router-dom";

import { Button, Menu, Layout } from "antd";
import DashboardMenu from "../Components/Dashboard/DashboardMenu";
const { Sider } = Layout;
const DashboardPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-8 ">
      <div className="col-span-1 md:col-span-3 lg:col-span-3 min-h-screen shadow-2xl dark:bg-gray-900 my-1">
        <DashboardMenu />
      </div>
      <div className="min-h-screen col-span-1 md:col-span-9 bg-gray-200 dark:bg-gradient-to-r from-stone-700 from-5% via-sky-800 via-40% to-slate-700 to-90%">
        <div className="w-full flex flex-col justify-center items-center py-6 p-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
