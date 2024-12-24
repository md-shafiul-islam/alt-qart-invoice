import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import WorkSearch from "../Components/Dashboard/WorkSearch";
import {
  workSheetColumns,
  workSheetStatusColumns,
} from "../utils/cols/workSheetColumn";
import SelectLayout from "../Components/Dashboard/SelectLayout";

import WorkSheetItems from "../Components/WorkSheet/WorkSheetItems";

import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import { getWorkSheetByQuery } from "../utils/apiAction";
import useWorkSheet from "../hooks/useWorkSheet";
import useAxiosSecure from "../hooks/useAxiosSecure";

const WorkProgressPage = () => {
  const [workSheetResp, reloadWorkSheet, isLoading] = useWorkSheet();

  const [layoutKey, setLayoutKey] = useState("table");
  const [workSheets, setWorkSheets] = useState([]);

  const axiosSecure = useAxiosSecure();
  const onSearchAction = (query) => {
    getWorkSheetByQuery(query)
      .then((resp) => {
        if (!isEmptyOrNull(resp)) {
          if (resp.status) {
            setWorkSheets(resp.response);
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };

  useEffect(() => {
    if (!isEmptyOrNull(workSheetResp)) {
      if (workSheetResp.status) {
        setWorkSheets(workSheetResp.response);
      }
    }
  }, [workSheetResp]);

  const onMarkItemAction = (item) => {
    axiosSecure
      .patch(`/work-sheets`, { id: item._id, cheked: true })
      .then((resp) => {
        if (resp.data.status) {
          onNotifySuccess("work-sheet 'Cheked' successfully");
          reloadWorkSheet();
        } else {
          onNotifyError("work-sheet 'Cheked' Failed");
        }
      })
      .catch((error) => {
        console.log("Mark Error ", error);
        onNotifyError("Work-sheet 'Cheked' Failed!!");
      });
  };

  return (
    <div className="w-full">
      <Row>
        <Col span={24}>
          <Card
            className="shadow-xl"
            title="Progress Work Sheet"
            extra={<WorkSearch onSearch={onSearchAction} />}
          >
            <div className="flex flex-row-reverse">
              <div className="flex flex-row">
                <SelectLayout
                  onChangeLayout={setLayoutKey}
                  type={layoutKey}
                  reLoad={reloadWorkSheet}
                />
              </div>
            </div>
            {layoutKey === "table" ? (
              <Table
                dataSource={workSheets}
                columns={workSheetStatusColumns(onMarkItemAction)}
                pagination={{ pageSize: 5 }}
              />
            ) : (
              <WorkSheetItems
                items={workSheets}
                isAction={true}
                onMarkItem={onMarkItemAction}
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WorkProgressPage;
