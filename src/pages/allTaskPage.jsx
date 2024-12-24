import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { taskCols } from "../utils/cols/taskCols";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";
import useTask from "../hooks/useTask";
import LoadingContent from "../Components/Utils/LoadingContent";

const AllTaskPage = () => {
  const [taskResp, refetch, isLoading] = useTask();
  useEffect(() => {
    if (!isEmptyOrNull(taskResp)) {
      if (taskResp.status) {
        setTasks(taskResp.response);
      }
    }
  }, [taskResp]);

  const [tasks, setTasks] = useState([]);

  const onUpdateAction = (item) => {
    console.log("onUpdateAction, ", item);
  };

  const onRemoveAction = (item) => {
    console.log("onRemoveAction, ", item);
  };
  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Complete Task/Work">
              {isLoading ? (
                <LoadingContent />
              ) : (
                <Table
                  dataSource={tasks}
                  columns={taskCols({ onUpdateAction, onRemoveAction })}
                />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllTaskPage;
