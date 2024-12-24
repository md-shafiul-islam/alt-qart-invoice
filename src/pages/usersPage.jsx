import { Card, Table } from "antd";
import React, { useState, useEffect } from "react";
import { employeeCols } from "../utils/cols/employeeCols";
import { isEmptyOrNull } from "../utils/helper";
import useUser from "../hooks/useUser";
import LoadingContent from "../Components/Utils/LoadingContent";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [respUser, refetch, isLoading] = useUser();
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(respUser)) {
      if (respUser.status) {
        setEmployees(respUser.response);
      }
    }
  }, [respUser]);

  const onPaidAction = (item) => {
    navigate(`/administrator/payments/${item?._id}`);
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
              columns={employeeCols(onPaidAction)}
            />
          )}
        </Card>
      </div>
    </>
  );
};

export default UsersPage;
