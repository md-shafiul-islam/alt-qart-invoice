import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import useOrders from "../hooks/useOrders";
import { invoiceCols } from "../utils/cols/orderCols";

const InvoicesPage = () => {
  const [ordersResp, refetch, isLoading] = useOrders();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersResp?.orders);

    if (!isEmptyOrNull(ordersResp)) {
      onNotifySuccess(`${ordersResp?.orders.length} Orders Found`);
    } else {
      onNotifyError(`!Oops  Orders not Found`);
    }
  }, [ordersResp]);

  console.log("Orders ", orders);

  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Orders ">
              <Table
                dataSource={orders}
                columns={invoiceCols}
                bordered
                pagination={{
                  pageSizeOptions: [10, 15, 20, 30, 50],
                  showSizeChanger: true,
                }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default InvoicesPage;
