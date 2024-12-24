import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { paymentCols } from "../utils/cols/paymentCols";
import usePaymentHistory from "../hooks/usePaymentHistory";
import { onNotifyError, onNotifySuccess } from "../utils/helper";

const PaymentHistoryPage = () => {
  const [paymentResp, refetch, isLoading] = usePaymentHistory();

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    
    setPayments(paymentResp?.response);

    if (paymentResp.status) {
      setPayments(paymentResp?.response);

      onNotifySuccess(paymentResp?.message);
    } else {
      onNotifyError(paymentResp?.message);
    }
  }, [paymentResp]);

  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Payment History">
              <Table dataSource={payments} columns={paymentCols} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaymentHistoryPage;
