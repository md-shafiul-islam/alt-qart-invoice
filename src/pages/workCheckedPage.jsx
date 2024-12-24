import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import WorkSearch from "../Components/Dashboard/WorkSearch";
import { workSheetStatusColumns } from "../utils/cols/workSheetColumn";
import useWorkSheet from "../hooks/useWorkSheet";

const WorkCheckedPage = () => {
  const [workSheetResp, reloadWorkSheet, isLoading] = useWorkSheet();

  const [workSheets, setWorkSheets] = useState([]);

  useEffect(() => {
    if (workSheetResp) {
      const items = workSheetResp.response?.filter((item) => item.cheked);
      setWorkSheets(items);
    }
  }, [workSheetResp]);

  const onSearchAction = (text) => {
    console.log("Search Text ", text);
  };

  return (
    <div className="w-full">
      <Row>
        <Col span={24}>
          <Card
            className="shadow-2xl"
            title="Cheked Work Sheet"
            extra={<WorkSearch onSearch={onSearchAction} />}
          >
            <Table
              dataSource={workSheets}
              columns={workSheetStatusColumns()}
              pagination={{
                pageSizeOptions: [5, 10, 15, 20, 30],
                showSizeChanger: true,
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WorkCheckedPage;
