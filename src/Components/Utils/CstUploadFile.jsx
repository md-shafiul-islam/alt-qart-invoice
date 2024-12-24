import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { uploadFileToImgBB } from "../../utils/apiAction";
import axios from "axios";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return resolve(reader.result);
    };

    reader.onerror = (error) => {
      return reject(error);
    };
  });

const CstUploadFile = ({ onChangeAction, ...props }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [upFile, setUpFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleCancel = () => setPreviewVisible(false);

  const handleChange = (fileProps) => {
    console.log("handleChange fileProps, ", fileProps);
    if (fileProps?.file) {
      if (fileProps.file.status === "done") {
        if (fileProps.file.response?.success) {
          setUpFile(fileProps.file);
          setImageUrl(fileProps.file.response?.data?.url);
          onChangeAction(fileProps.file.response?.data?.url);
        }
      }
    }
  };

  const handlePreview = async (file, e) => {
    console.log("handlePreview file, ", file, " Event  ", e);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        // customRequest={onCustomRequestAction}
        name="image"
        action={`${import.meta.env.VITE_IMAGE_HOST_API_URL}?key=${
          import.meta.env.VITE_IMAGE_HOST_API_KEY
        }`}
        listType="picture-card"
        file={upFile}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {upFile !== null ? null : uploadButton}
      </Upload>
      <Modal
        open={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default CstUploadFile;
