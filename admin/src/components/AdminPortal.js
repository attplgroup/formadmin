import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Table, Space, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FormOutlined,
  DownOutlined,
} from "@ant-design/icons";
import axios from "axios";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

const { Header, Sider, Content } = Layout;

const AdminPortal = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    fetchData("Personal Loan");
  }, []);

  const fetchData = async (formType) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8081/getFormData/${formType}`
      );
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // Reset data state to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSubMenuClick = (formType) => {
    console.log(formType);
    fetchData(formType); // Fetch data when submenu item is clicked
  };

  const handleUpdate = (record) => {
    setSelectedRecord(record);
    setUpdateModalVisible(true);
  };

  const handleDelete = (record) => {
    setSelectedRecord(record);
    setDeleteModalVisible(true);
  };

  const handleUpdateModalCancel = () => {
    setUpdateModalVisible(false);
  };

  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
  };

  const handleUpdateSubmit = async (values) => {
    try {
      console.log("Updating record with values:", values);
      const response = await axios.put(
        `http://localhost:8081/updateFormData/${selectedRecord.id}`,
        values
      );
      console.log("Update response:", response.data);
      setUpdateModalVisible(false);
      fetchData(selectedRecord.formType);
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      console.log("Deleting record:", selectedRecord);
      const response = await axios.delete(
        `http://localhost:8081/deleteFormData/${selectedRecord.id}`
      );
      console.log("Delete response:", response.data);
      setDeleteModalVisible(false);
      fetchData(selectedRecord.formType);
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      key: "3",
      icon: <FormOutlined />,
      label: "FormData",
      submenu: [
        {
          key: "3.1",
          icon: <UploadOutlined />,
          label: "Personal Loan",
          formType: "Personal Loan",
        },
        {
          key: "3.2",
          icon: <VideoCameraOutlined />,
          label: "Business Loan",
          formType: "Business Loan",
        },
      ],
    },
  ];

  const columns = [
    ...Object.keys(data[0] || {}).map((key) => ({
      title: key,
      dataIndex: key,
      key: key,
    })),
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="edit" onClick={() => handleUpdate(record)}>
                  Edit
                </Menu.Item>
                <Menu.Item key="delete" onClick={() => handleDelete(record)}>
                  Delete
                </Menu.Item>
              </Menu>
            }
          >
            <Button>
              More <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map((item) => (
            <React.Fragment key={item.key}>
              {item.submenu ? (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                  style={{ marginTop: "20px" }}
                >
                  {item.submenu.map((subItem) => (
                    <Menu.Item
                      key={subItem.key}
                      icon={subItem.icon}
                      onClick={() => handleSubMenuClick(subItem.formType)}
                    >
                      {subItem.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.key} icon={item.icon}>
                  <a href={item.href}>{item.label}</a>
                </Menu.Item>
              )}
            </React.Fragment>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button
            type="text"
            onClick={toggleCollapsed}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            scroll={{ y: 400 }}
          />
          <UpdateModal
            visible={updateModalVisible}
            onCancel={handleUpdateModalCancel}
            onUpdate={handleUpdateSubmit}
            record={selectedRecord} // Pass the selected record data
          />
          <DeleteModal
            visible={deleteModalVisible}
            onCancel={handleDeleteModalCancel}
            onDelete={handleDeleteConfirm}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPortal;
