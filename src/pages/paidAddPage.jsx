import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import LoadingContent from "../Components/Utils/LoadingContent";
import PaymentCard from "../Components/Payment/PaymentCard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import EmployeeCard from "../Components/Employee/EmployeeCard";
import { getDateMonthYear, isEmptyOrNull, onNotifyError } from "../utils/helper";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const PaidAddPage = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [clientSecret, setClientSecret] = useState("");
  const [employee, setEmployee] = useState(undefined);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .post(`/payments/create-intent`, {
        id: params?.id,
        date: getDateMonthYear(new Date()),
      })
      .then((resp) => {
        if (resp.data) {
          if (resp.data.status) {
            setClientSecret(resp.data?.response?.key);
            setEmployee(resp.data?.response?.employee);
            console.log("Message,  ", resp.data?.response?.message);
            if (isEmptyOrNull(resp.data?.response?.key)) {
              onNotifyError(resp.data?.response.message);
            }
          }
        }
      })
      .catch((error) => {
        console.log("create-intent Error, ", error);
      });
  }, []);

  useEffect(() => {
    console.log("clientSecret, ", clientSecret);
    if (!clientSecret) {
      setIsLoading(false);
    }
  }, [clientSecret]);

  const appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  if (isLoading) {
    return <LoadingContent />;
  }

  console.log("User ", employee);
  console.log("Key  ", clientSecret);

  return (
    <>
      <div className="w-full">
        <Row gutter={[20, 20]}>
          <Col span={10}>
            <EmployeeCard employee={employee} />
          </Col>
          <Col span={14}>
            {clientSecret ? (
              <Elements options={{clientSecret, appearance, loader }} stripe={stripePromise}>
                <PaymentCard clientSecret={clientSecret} />
              </Elements>
            ) : (
              <Card className="h-full" title="Payment">
                <div className="w-full min-h-48 flex flex-col gap-5 items-center justify-center  ">
                  <h2 className="text-2xl">
                    This Employee already paid for this Month
                  </h2>
                  <span className="text-green-800 text-4xl font-bold">
                    <i className="fa-solid fa-circle-check fa-fw"></i>
                  </span>
                  <p className="text-amber-500">
                    If Not paid for this month. Please, contact system
                    administrator{" "}
                  </p>
                </div>
              </Card>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaidAddPage;
