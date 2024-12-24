import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
import { isEmptyOrNull } from "../utils/helper";
import { AuthContext } from "../Context/AuthProvider";
import registrationFile from "../assets/lottie/registration.json";
import Lottie from "lottie-react";

import {
  Card,
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  InputNumber,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CstUploadFile from "../Components/Utils/CstUploadFile";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 17,
    offset: 1,
  },
};

const RegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const { createUser } = useContext(AuthContext);

  const [form] = Form.useForm();
  const onSubmit = (data) => {
    if (!isEmptyOrNull({ data })) {
      createUser(data, () => {
        navigate(location.state?.from);
      });
    }
  };

  const onChangeImage = (values, url) => {
    values.picture = url;
    form.setFieldsValue(values);
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

  return (
    <React.Fragment>
      <Helmet>
        <title>HR | Register</title>
      </Helmet>
      <div
        className="w-full min-h-screen -mt-4 "
        style={{
          backgroundImage: `url(/images/login-bg-2.svg)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto grid grid-cols-7">
          <div className="col-span-4 py-6">
            <div className="w-full min-h-screen flex flex-col items-center justify-center">
              <Card
                title=" User Register"
                className="w-8/12 box-border shadow-2xl"
              >
                <div className="py-4 w-full">
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onSubmit}
                    validateMessages={validateMessages}
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
                                required: true,
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                              {
                                type: "password",
                                required: true,
                              },
                            ]}
                          >
                            <Input.Password />
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
                          <Form.Item
                            name="bank_account_no"
                            label="Bank Account No."
                          >
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
                              <Option value="Employee">Sales</Option>
                              <Option value="HR">Assistant</Option>
                              <Option value="Admin">
                                Social Media executive
                              </Option>
                              <Option value="Admin">Digital Marketer</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item name="picture" label="Profile Picture">
                            <CstUploadFile
                              onChangeAction={(url) =>
                                onChangeImage(values, url)
                              }
                            />
                          </Form.Item>
                          <Form.Item>
                            <Button
                              type="primary"
                              htmlType="submit"
                              className="w-full"
                            >
                              Register
                            </Button>
                          </Form.Item>
                        </>
                      );
                    }}
                  </Form>
                </div>
                <div className="flex flex-row w-full justify-center items-center gap-7">
                  <NavLink
                    to="/login"
                    className="h-8 flex flex-row items-center justify-center transition-all duration-300 w-8/12 border text-gray-800 text-center px-2 py-2 bg-white font-bold rounded-md dark:text-teal-50 dark:hover:bg-[rgba(0,0,0,.6)] hover:text-lg dark:bg-[rgba(0,0,0,.3)]"
                  >
                    <i className="fa-solid fa-unlock"></i>&nbsp;Login
                  </NavLink>
                </div>
              </Card>
            </div>
          </div>
          <div className="col-span-3 h-[600px] flex flex-col items-center justify-center">
            <Lottie animationData={registrationFile} className="h-full" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;
