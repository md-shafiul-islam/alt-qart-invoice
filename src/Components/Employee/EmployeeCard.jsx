import {
  CheckSquareOutlined,
  CloseSquareOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { getStrDate, getStrMonthYearDate } from "../../utils/helper";

const EmployeeCard = ({ employee = {}, ...props }) => {
  const { name, email, designation, verified, salary, verifiedEmail, create } =
    employee;

  return (
    <div className="grid grid-cols-1 gap-4">
      <Card
        title="Empolyee"
        className="box-border"
        extra={<>Paid for: {getStrMonthYearDate()}</>}
      >
        <div className="grid grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-12">
          <div className="col-span-8 xs:col-span-1 sm:col-span-1 md:col-span-8 grid grid-cols-1 gap-5">
            <h2>Name: {name}</h2>

            <h2>Designation: {designation}</h2>
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
            <h2>Salary: {salary}</h2>
            <div>Create In: {getStrDate(create)}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmployeeCard;
