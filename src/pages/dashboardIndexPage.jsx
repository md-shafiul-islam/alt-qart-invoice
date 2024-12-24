import React from "react";

import DashBoardCards from "../Components/Dashboard/DashBoardCards";
import { Col, Row } from "antd";

const DashboardIndexPage = () => {
  return (
    <div className="w-full">
      <Row>
        <Col span={24}>
          <DashBoardCards />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardIndexPage;
