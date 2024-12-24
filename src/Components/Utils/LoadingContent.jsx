import { Skeleton } from "antd";
import React from "react";

const LoadingContent = ({ ...props }) => {
  return (
    <div className="w-full">
      <Skeleton active />
    </div>
  );
};

export default LoadingContent;
