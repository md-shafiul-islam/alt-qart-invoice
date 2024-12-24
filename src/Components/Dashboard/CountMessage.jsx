import { Badge } from "antd";
import React from "react";

const CountMessage = ({ count, ...props }) => {
  return (
    <Badge count={count}>
      <span className="p-1 text-lg font-semibold ">
        <i className="fa-regular fa-message"></i>
      </span>
    </Badge>
  );
};

export default CountMessage;
