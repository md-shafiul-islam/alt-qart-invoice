import { Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import { employeeAdminCols } from "../utils/cols/employeeCols";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import useUser from "../hooks/useUser";
import LoadingContent from "../Components/Utils/LoadingContent";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AdminUsersPage = () => {
  const [respUser, refetch, isLoading] = useUser("?status=all");
  const [employees, setEmployees] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (!isEmptyOrNull(respUser)) {
      if (respUser.status) {
        setEmployees(respUser.response);
      }
    }
  }, [respUser]);

  const onEmployeeHROrFire = (item, isFire = false) => {
    const { _id } = item;
    const user = { id: _id };
    let msg = "";
    if (isFire) {
      user.isFired = true;
      msg = "Fired ";
    } else {
      user.isHR = true;
      user.role = "HR";
      msg = "HR ";
    }

    axiosSecure
      .patch(`/users`, user)
      .then((resp) => {
        if (resp.data.status) {
          onNotifySuccess(`${msg} Employee successfully`);
          refetch();
        } else {
          onNotifyError(`${msg} Employee failed`);
        }
      })
      .catch((error) => {
        onNotifyError(`${msg} Employee failed`);
      });
  };

  return (
    <>
      <div className="w-full">
        <Card title="Employee">
          {isLoading ? (
            <LoadingContent />
          ) : (
            <Table
              dataSource={employees}
              columns={employeeAdminCols(onEmployeeHROrFire)}
            />
          )}
        </Card>
      </div>
    </>
  );
};

export default AdminUsersPage;
