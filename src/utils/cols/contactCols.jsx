import { message, Space } from "antd";
import { NavLink } from "react-router-dom";
import ShortText from "../../Components/Utils/ShortText";

export const contactCols = ({ onReadAction, onOpenMessage, ...props }) => {
  return [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (firstName, item) => {
        return (
          <span>
            {firstName} &nbsp; {item?.lastName}
          </span>
        );
      },
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      render: (message) => {
        return <ShortText text={message} size={30} />;
      },
    },

    {
      title: "Read",
      dataIndex: "isRead",
      key: "isRead",
      render: (isRead, item) => {
        return (
          <Space size="large" className="">
            {!item.isRead ? (
              <span
                className="cursor-pointer hover:bg-teal-700 bg-teal-500 px-2 py-1 text-white"
                onClick={() => {
                  onReadAction(item);
                }}
              >
                <i className="fa-regular fa-envelope"></i> Mark Read
              </span>
            ) : (
              <span className="text-green-700 cursor-pointer">
                <i className="fa-solid fa-envelope-open-text"></i>
              </span>
            )}
          </Space>
        );
      },
    },

    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id, item) => {
        return (
          <Space size="large" className="">
            <button
              title="Open Message"
              className="cursor-pointer bg-green-600 hover:bg-green-700 px-2 py-1"
              onClick={() => {
                onOpenMessage(item);
              }}
            >
              <i className="fa-solid fa-envelope-open"></i> Open
            </button>
          </Space>
        );
      },
    },
  ];
};
