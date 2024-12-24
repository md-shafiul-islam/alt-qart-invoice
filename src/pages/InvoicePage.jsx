import { Card, Col, Image, Row, Space, Table } from "antd";
import React, { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import LoadingContent from "../Components/Utils/LoadingContent";

import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import useOrders from "../hooks/useOrders";
import dateFormat, { masks } from "dateformat";
import { FileDoneOutlined } from "@ant-design/icons";

const InvoicePage = () => {
  const params = useParams();

  const [ordersResp, refetch, isLoading] = useOrders();

  const [order, setOrder] = useState({});

  useEffect(() => {
    if (!isEmptyOrNull(ordersResp)) {
      const item = ordersResp?.orders.find((item) => {
        return item.id == params.id;
      });

      if (!isEmptyOrNull(item)) {
        setOrder(item);
        onNotifySuccess(`Order Found By ID`);
      } else {
        onNotifyError(`!Oops  Order not Found`);
      }
    }
  }, [ordersResp]);

  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  if (isLoading) {
    return <LoadingContent />;
  }

  return (
    <>
      <div className="w-full">
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Card
              className="h-full"
              title="Order"
              extra={
                <div className="flex flex-row gap-3">
                  <NavLink
                    to={order?.download_link}
                    target="_blank"
                    className="px-3 py-1 bg-green-500 text-white font-semibold text-lg"
                  >
                    <FileDoneOutlined />
                  </NavLink>
                  <span className="px-3 py-1 border border-teal-400 font-bold">
                    {dateFormat(order?.created_at, "ddd mmm dd/yyyy HH:MM")}
                  </span>
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <Card title="Product Details">
                    <div className="flex flex-col gap-4">
                      {order?.receipt_items?.map((item) => {
                        return (
                          <div className="grid grid-cols-1 gap-5 text-sm font-semibold">
                            <div className="">
                              <Image
                                width={200}
                                height={200}
                                src={item?.image_url}
                                fallback="data:image/png;base64,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"
                              />
                            </div>
                            <div>Name: {item?.name}</div>
                            <div className="flex flex-row gap-4">
                              <div>
                                <span>Price: &nbsp;</span>
                                <span>{item?.price}</span>
                              </div>

                              <div>
                                <span>Qty:&nbsp;</span>
                                <span>{item?.qty}</span>
                              </div>
                            </div>

                            <div className="flex flex-row gap-3">
                              {item?.variants?.map((vItem) => {
                                return (
                                  <span className="px-2 py-1 border border-teal-600">
                                    {vItem?.variant_type?.title}{" "}
                                    {vItem?.variant?.name}, Price:{" "}
                                    {vItem?.variant?.price}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex flex-row gap-5 text-lg font-bold border-t border-teal-700">
                        <div>Delivery Charge:</div>
                        <div>{order?.delivery_charge}</div>
                      </div>

                      <div className="flex flex-row gap-5 text-lg font-bold border-t border-b border-double border-teal-700">
                        <div>Total Price:</div>
                        <div>{order?.total_amount}</div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card title="customer">
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex flex-row gap-5 border-b border-teal-500">
                        <div>নামঃ</div>
                        <div>{order?.customer?.name}</div>
                      </div>

                      <div className="flex flex-row gap-5 border-b border-teal-500">
                        <div>ফোনঃ</div>
                        <div>{order?.customer?.phone}</div>
                      </div>

                      <div className="flex flex-row gap-5 border-b border-teal-500">
                        <div>জেলাঃ</div>
                        <div>{order?.customer?.district}</div>
                      </div>

                      <div className="flex flex-row gap-5 border-b border-teal-500">
                        <div>পূর্ণ ঠিকানাঃ</div>
                        <div>{order?.customer?.address}</div>
                      </div>

                      <div className="flex flex-row gap-5 border-b border-teal-500">
                        <div>ইমেইলঃ</div>
                        <div>{order?.customer?.email}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default InvoicePage;
