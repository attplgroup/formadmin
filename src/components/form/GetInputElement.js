import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Input,
  Menu,
  Radio,
  Space,
  Tooltip,
  message,
} from "antd";
import {
  CloseCircleOutlined,
  DownOutlined,
  InboxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";

const GetInputElement = ({ field, formData, handleInputChange }) => {
  const [selectedValue, setSelectedValue] = useState(
    formData[field.label] || ""
  );

  const handleClearInput = () => {
    handleInputChange({
      name: field.name,
      value: "",
    });
  };

  const handleTextChange = (e) => {
    handleInputChange({
      name: field.name,
      value: e.target.value,
    });
  };

  const handleSelectClick = (e) => {
    setSelectedValue(e.key);
    handleInputChange({
      name: field.name,
      value: e.key || field.defaultValue,
    });
  };

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
    handleInputChange({
      name: field.name,

      value: e.target.value,
    });
  };

  let inputElement = null;

  switch (field.type) {
    case "text":
    case "password":
    case "email":
    case "number":
    case "date":
    case "textarea":
      inputElement = (
        <Input
          name={field.label}
          placeholder={field.placeholder}
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Clear input">
              <CloseCircleOutlined
                onClick={handleClearInput}
                style={{
                  color: "rgba(0, 0, 0, 0.45)",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          }
          value={formData[field.name] || ""}
          onChange={handleTextChange}
          style={{
            width: "20rem",
            borderLeft: "none",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.25)", // Bottom border only
          }}
          required
        />
      );
      break;
    case "select":
      const optionsMenu = (
        <Menu>
          {field.options.map((option) => (
            <Menu.Item
              key={option.value || field.defaultValue}
              onClick={handleSelectClick}
              name={field.label}
            >
              {option.label}
            </Menu.Item>
          ))}
        </Menu>
      );

      inputElement = (
        <Dropdown.Button overlay={optionsMenu} icon={<DownOutlined />}>
          {selectedValue || field.defaultValue}
        </Dropdown.Button>
      );
      break;
    case "checkbox":
    case "radio":
      inputElement = (
        <Radio.Group
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
          onChange={handleRadioChange}
          // defaultValue={formData.primary_bank_account}
        >
          <Space direction="vertical">
            {field.options.map((option) => (
              <Radio
                key={option.value}
                value={option.value}
                className="custom-radio"
                onChange={handleRadioChange}
              >
                {option.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      );
      break;
    case "file":
      const props = {
        name: "file",
        multiple: true,
        action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
        onChange(info) {
          console.log(info);
          const { status } = info.file;
          if (status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log("Dropped files", e.dataTransfer.files);
        },
      };
      inputElement = (
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      );
      break;
    default:
      inputElement = (
        <div className={field.inputOptionClassName}>
          <input
            type="text"
            id={field.label}
            name={field.label}
            value={formData[field.label] || ""}
            onChange={handleTextChange}
            style={field.style}
            required
          />
        </div>
      );
  }

  return <div>{inputElement}</div>;
};

export default GetInputElement;
