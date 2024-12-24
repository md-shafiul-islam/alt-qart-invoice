import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  getStrDate,
  isEmptyOrNull,
  onNotifyError,
  onNotifySuccess,
} from "../utils/helper";
import {
  CheckSquareOutlined,
  CloseSquareOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Card, Form } from "antd";
import EsModal from "../Components/Utils/EsModal";
import { UpdateUserForm } from "../Components/Dashboard/UpdateUserForm";

import useAxiosSecure from "../hooks/useAxiosSecure";
import SalaryChart from "../Components/Chart/SalaryChart";
import dateFormat from "dateformat";

const AdminUserPage = ({ ...props }) => {
  const params = useParams();

  const axiosSecure = useAxiosSecure();

  const [user, setUser] = useState({});
  const [payments, setPayments] = useState([]);
  const [isUpdateModal, setIsUpdateModal] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    loadUser();
    loadUserSalary();
  }, [params]);

  const loadUser = () => {
    axiosSecure
      .get(`/users/${params?.id}`)
      .then((resp) => {
        if (!isEmptyOrNull(resp.data)) {
          setUser(resp.data.response);
        }
      })
      .catch((error) => {
        console.log("User ID Error ", error);
      });
  };

  const loadUserSalary = () => {
    axiosSecure
      .get(`/users/${params?.id}/payments`)
      .then((resp) => {
        if (!isEmptyOrNull(resp.data)) {
          preparedSalaryChart(resp.data.response);
        }
      })
      .catch((error) => {
        console.log("loadUserSalary  Error ", error);
      });
  };

  const preparedSalaryChart = (paids) => {
    if (!isEmptyOrNull(paids)) {
      const items = [];
      for (const paid of paids) {
        const [month, year] = paid?.monthYear.split("-");
        const date = dateFormat(new Date(year, month), "mmm-dd");

        items.push({
          name: date,
          salary: paid?.amount,
        });
      }
      setPayments(items);
    }
  };
  const onEditUser = () => {
    setIsUpdateModal(true);
  };

  const onEmpolyeeUpdateAction = (values) => {
    console.log("onEmpolyeeUpdateAction ", values);

    values._id = _id;

    axiosSecure
      .put(`/users`, values)
      .then((resp) => {
        if (!isEmptyOrNull(resp)) {
          if (resp.status) {
            onNotifySuccess(resp.message);
            setIsUpdateModal(false);
            loadUser();
          } else {
            onNotifyError(resp.message);
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };
  const {
    _id,
    name,
    email,
    verifiedEmail,
    autId,
    role,
    salary,
    picture,
    verified,
    designation,
    create,
  } = user;

  return (
    <>
      <EsModal
        isOpen={isUpdateModal}
        title="User Update"
        onCancel={setIsUpdateModal}
      >
        <UpdateUserForm
          onSubmit={onEmpolyeeUpdateAction}
          initForm={form}
          initValues={user}
        />
      </EsModal>
      <div className="w-full grid grid-cols-1 gap-4">
        <Card title="Empolyee Details" className="box-border">
          <div className="grid grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-12">
            <div className="col-span-8 xs:col-span-1 sm:col-span-1 md:col-span-8 grid grid-cols-1 gap-5">
              <h2>Name: {name}</h2>
              <h2>Role: {role}</h2>
              <h2>Designation: {designation}</h2>
              <h2>Salary: {salary > 0 ? salary : 0}</h2>

              <h2>
                Email: {email} | Verified{" "}
                {verifiedEmail ? (
                  <span className="text-green-700">
                    <CheckSquareOutlined />
                  </span>
                ) : (
                  <span className="text-red-600">
                    {" "}
                    <CloseSquareOutlined />
                  </span>
                )}
              </h2>
              <div className="text-xl">
                Verified{" "}
                <span className={verified ? "text-green-700" : "text-red-600"}>
                  <SafetyCertificateOutlined />
                </span>
              </div>
              <div>Create In: {getStrDate(create)}</div>
              <div className="">
                <button
                  className="bg-green-600 px-6 py-1 text-xl text-white dark:bg-green-900 rounded-md"
                  onClick={onEditUser}
                >
                  <i className="fa-regular fa-pen-to-square"></i>&nbsp;Edit
                </button>
              </div>
            </div>
            <div className="col-span-4 md:col-span-4 xs:col-span-1 sm:col-span-1 xs:order-first sm:order-first md:order-none">
              <div className="w-40 h-40 shadow border flex flex-col justify-center items-center">
                <img
                  src={!isEmptyOrNull(picture) ? picture : "/images/user.png"}
                  alt={name}
                  title={name}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card title="Salary">
          <SalaryChart chartData={payments} />
        </Card>
      </div>
    </>
  );
};

export default AdminUserPage;
