import React from "react";
import { Modal, Button } from "antd";

const DeleteModal = ({ visible, onCancel, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Modal
      title="Delete Record"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="delete" type="danger" onClick={handleDelete}>
          Delete
        </Button>,
      ]}
    >
      <p>Are you sure you want to delete this record?</p>
    </Modal>
  );
};

export default DeleteModal;
