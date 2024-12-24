import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import React from "react";
import CstUploadFile from "../Utils/CstUploadFile";

const { Option } = Select;
export const UpdateUserForm = ({
  btnText = "Update",
  onSubmit,
  initForm,
  initValues,
  ...props
}) => {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 17,
      offset: 1,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const imageChangeAction = (url, values) => {
    values.picture = url;
    initForm.setFieldsValue(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onSubmit}
      validateMessages={validateMessages}
      form={initForm}
      initialValues={initValues}
    >
      {(values) => {
        return (
          <>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="salary"
              label="Salary"
              rules={[
                {
                  type: "number",
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name="bank_account_no" label="Bank Account No.">
              <Input />
            </Form.Item>

            <Form.Item
              className="w-full"
              label="Role"
              name="role"
              rules={[
                {
                  required: true,
                  message: "Province is required",
                },
              ]}
            >
              <Select placeholder="Select One" className="w-full">
                <Option value="Employee">Employee</Option>
                <Option value="HR">HR</Option>
                <Option value="Admin">Admin</Option>
              </Select>
            </Form.Item>

            <Form.Item
              className="w-full"
              label="Designation"
              name="designation"
              rules={[
                {
                  required: true,
                  message: "Province is required",
                },
              ]}
            >
              <Select placeholder="Select One" className="w-full">
                <Option value="Sales">Sales</Option>
                <Option value="Assistant">Assistant</Option>
                <Option value="Social Media executive">
                  Social Media executive
                </Option>
                <Option value="Digital Marketer">Digital Marketer</Option>
              </Select>
            </Form.Item>
            <Form.Item name="picture" label="Profile Picture">
              <CstUploadFile
                onChangeAction={(url) => {
                  imageChangeAction(url, values);
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-40">
                {btnText}
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form>
  );
};
