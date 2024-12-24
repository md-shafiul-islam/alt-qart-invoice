import { Modal } from "antd";
import React from "react";

const EsModal = ({
  width = `90%`,
  title,
  isOpen,
  onCancel,
  children,
  ...props
}) => {
  return (
    <>
      <Modal
        title={title}
        centered
        open={isOpen}
        onCancel={() => onCancel(false)}
        width={width}
        footer={""}
      >
        {children}
      </Modal>
    </>
  );
};

export default EsModal;
