import React, { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
import { AuthContext } from "../Context/AuthProvider";
import { isEmptyOrNull } from "../utils/helper";
import { Button, Form, Input } from "antd";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("Login Location ", location);
  const { loginUserPass, loginWithGoogle, loginWithGitHub } =
    useContext(AuthContext);

  const onSubmit = (data) => {
    loginUserPass(data, () => {
      if (!isEmptyOrNull(location.state)) {
        navigate(location.state?.from);
      } else {
        navigate("/");
      }
    });
  };

  const onLoginWithGoogle = () => {
    loginWithGoogle(() => {
      if (!isEmptyOrNull(location.state)) {
        navigate(location.state?.from);
      } else {
        navigate("/");
      }
    });
  };

  const onLoginWithGitHub = () => {
    loginWithGitHub(() => {
      if (!isEmptyOrNull(location.state)) {
        navigate(location.state?.from);
      } else {
        navigate("/");
      }
    });
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>HR | Login</title>
      </Helmet>
      <div className="w-full min-h-screen !my-0">
        <div className="container mx-auto ">
          <div className="flex flex-row justify-center items-center w-full">
            <div className="w-7/12 md:w-12/12 lg:w-8/12 xs:w-full sm:w-full min-h-[400px] box-border py-10 my-10">
              <div className="w-full grid grid-cols-5 md:grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 border-2 border-teal-800 shadow-2xl">
                <div className="col-span-3 flex flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold py-6">Welcome back</h2>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onSubmit}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button
                        className="w-full"
                        type="primary"
                        htmlType="submit"
                      >
                        Login
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
                <div className="col-span-2 grid grid-cols-1 justify-center items-center text-white bg-teal-800 p-6 min-h-[350px] xs:min-h-[200px] sm:min-h-[200px]">
                  <div className="flex flex-col w-full justify-center items-center gap-7 h-8 font-bold md:font-semibold md:text-base text-xl">
                    <div
                      onClick={onLoginWithGoogle}
                      className="w-full pl-4 py-1 transition-all duration-200 hover:border-gray-50 bg-slate-100 border border-gray-600 text-gray-600 dark:text-white dark:bg-gray-700 cursor-pointer flex flex-row  items-center gap-4 md:gap-2"
                    >
                      <i className="text-xl fa-brands fa-google text-red-600"></i>
                      <span>Sign in with Google</span>
                    </div>

                    <div
                      onClick={onLoginWithGitHub}
                      className="w-full py-1 pl-4 transition-all duration-200 hover:border-gray-50 bg-slate-100 border text-gray-600 dark:text-white dark:bg-gray-700 border-gray-600 cursor-pointer flex flex-row items-center gap-4 md:gap-2"
                    >
                      <i className="text-2xl fa-brands fa-github"></i>
                      <span>Sign in with GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
