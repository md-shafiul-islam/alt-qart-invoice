import { Badge, Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { contactCols } from "../../utils/cols/contactCols";
import useContactUs from "../../hooks/useContact";
import {
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../../utils/helper";
import EsModal from "../Utils/EsModal";
import ContactMessageCard from "./ContactMessageCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CountMessage from "./CountMessage";

const DashBoardCards = () => {
  const [contactsResp, refreshContact, isContactLoading] = useContactUs();

  const axiosSecure = useAxiosSecure();

  const [contacts, setContacts] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [openMessage, setOpenMessage] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/contact-us/count?read=false`).then((resp) => {
      if (resp.data.status) {
        setUnreadCount(resp.data.response);
      }
    });
  }, []);

  useEffect(() => {
    if (!isEmptyOrNull(contactsResp)) {
      if (contactsResp.status) {
        setContacts(contactsResp.response);
      }
    }
  }, [contactsResp]);

  const onMessageRead = (message) => {
    onNotify("Contact message mark as read");
    axiosSecure
      .put(`contact-us`, message)
      .then((resp) => {
        if (!isEmptyOrNull(resp)) {
          if (resp.data.status) {
            onNotifySuccess(resp.data.message);
            refreshContact();
          } else {
            onNotifyError(resp.data.message);
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };

  const onOpenMessageAction = (message) => {
    setOpenMessage(message);
    setIsOpen(true);
  };

  console.log("Category ", contacts);
  return (
    <Row gutter={[24, 24]}>
      {/* <Col span={24}>
        <Card title="Work Sheet">
          <Row gutter={[20, 20]}>
            <Col span={4}>
              <Card></Card>
            </Col>
          </Row>
        </Card>
      </Col> */}

      <EsModal isOpen={isOpen} onCancel={setIsOpen} width="50%">
        <ContactMessageCard contact={openMessage} />
      </EsModal>

      <Col md={24}>
        <Card title="Messages" extra={<CountMessage count={unreadCount} />}>
          <Table
            dataSource={contacts}
            columns={contactCols({
              onReadAction: onMessageRead,
              onOpenMessage: onOpenMessageAction,
            })}
            pagination={{ pageSizeOptions: [5, 10, 15, 30, 50] }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default DashBoardCards;
