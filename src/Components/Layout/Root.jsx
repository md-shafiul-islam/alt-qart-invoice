import React from "react";
import { Outlet } from "react-router-dom";

import { Breadcrumb, Layout } from "antd";
import HRFooter from "./HRFooter";

import HRHeader from "./HRHeader";
const { Header, Content, Footer } = Layout;
const Root = () => {
  return (
    <Layout>
      <Header className="w-full shadow-lg text-gray-700 bg-white dark:bg-gray-900">
        <HRHeader />
      </Header>

      <Content className="min-h-screen w-full">
        <Outlet></Outlet>
      </Content>
      <Footer>
        <HRFooter />
      </Footer>
    </Layout>
  );
};

export default Root;
