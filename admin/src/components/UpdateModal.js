// UpdateModal.js

import React from "react";
import { Modal, Form, Input, Button } from "antd";

const UpdateModal = ({ visible, onCancel, onUpdate, record }) => {
  const [form] = Form.useForm();

  // Set initial form values with the record data
  form.setFieldsValue(record);

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      onUpdate(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Update Record"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="update" type="primary" onClick={handleUpdate}>
          Update
        </Button>,
      ]}
    >
      <Form form={form}>
        {Object.keys(record).map((key) => (
          <Form.Item
            key={key}
            name={key}
            label={key.toUpperCase()} // You can customize the label as needed
            rules={[{ required: true, message: `Please enter the ${key}` }]}
          >
            <Input />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default UpdateModal;
