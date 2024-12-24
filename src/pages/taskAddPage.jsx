import { Card, Col, Row, Table } from "antd";
import React, { useState } from "react";
import { paymentCols } from "../utils/cols/paymentCols";
import TaskAddForm from "../Components/Dashboard/TaskAddForm";
import { useForm } from "antd/es/form/Form";
import { addTaskAction } from "../utils/apiAction";
import { onNotify, onNotifyError, onNotifySuccess } from "../utils/helper";

const TaskAddPage = () => {
  const [form] = useForm();

  const [payments, setPayments] = useState([]);

  const onSubmitAction = (values) => {
    onNotify("Task add request sending");

    addTaskAction(values)
      .then((resp) => {
        console.log("Task Add Response ", resp);
        onNotifySuccess("Task added Successfully");
      })
      .catch((err) => {
        console.log("Task Add Error ", err);
        onNotifyError("Task added failed");
      });
  };

  const onFailedAction = (values) => {
    console.log("TaskAddPage onFailedAction, ", values);
  };
  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Add Task/Work">
              <TaskAddForm
                initForm={form}
                name="Add"
                onAction={onSubmitAction}
                onFailedAction={onFailedAction}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TaskAddPage;
