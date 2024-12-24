import React from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Row,
  Col,
} from "antd";

const WorkSheetForm = ({
  onSubmit,
  initValues,
  initForm,
  onFailed,
  tasks = [],
  name = "Add",
  ...props
}) => {
  return (
    <Card className="w-full shadow-md" title="Work Sheet">
      <Form
        form={initForm}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={initValues}
        onFinish={onSubmit}
        onFinishFailed={onFailed}
      >
        <Row>
          <Col span={7}>
            <Form.Item label="Task" name={"task"} className="w-full">
              <Select>
                {tasks?.map((task) => {
                  return (
                    <Select.Option value={task?.title}>
                      {task?.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Hours" name={"hours"} className="w-full">
              <InputNumber className="w-full" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Date" name="date">
              <DatePicker />
            </Form.Item>
          </Col>

          <Col span={4}>
            <button
              htmlFor="submit"
              className="h-8 py-1 w-full font-semibold bg-green-500 dark:bg-green-700 dark:shadow-lg dark:hover:border-green-400 rounded"
            >
              {name}
            </button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default WorkSheetForm;
