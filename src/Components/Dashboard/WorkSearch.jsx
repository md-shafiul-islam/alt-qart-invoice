import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";

const WorkSearch = ({ onSearch, ...props }) => {
  const [form] = useForm();
  return (
    <div className="w-full my-4">
      <Form form={form} onFinish={onSearch}>
        <Row gutter={[12, 12]}>
          <Col span={10}>
            <Select showSearch placeholder="Select a Empolyee" options={[]} />
          </Col>
          <Col span={8}>
            <Form.Item>
              <DatePicker placeholder="Month-Year" picker="month" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <button className="bg-teal-800 w-full h-8 rounded text-white font-semibold">
              Search
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default WorkSearch;
