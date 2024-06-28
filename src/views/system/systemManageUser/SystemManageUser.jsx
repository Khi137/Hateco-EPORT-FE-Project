import React, { Component } from "react";
import "./SystemManageUser.scss";
import { Mradio, Msearch, Mselect, Mtable } from "../../../components/BasicUI";
import {
  CloseCircleOutlined,
  CloudDownloadOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { ReactGrid } from "@silevis/reactgrid";

export class SystemManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {
          key: "1",
          group: "Hãng Tàu",
          portCode: "NDV,NDP",
          username: "LCL",
          password: null,
          name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
          cardId: null,
          address:
            "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
          phone: "0936793580",
          email: "cs-hph@litcoline.com",
          support: null,
          status: true,
        },
        {
          key: "2",
          group: "Marketing - BDD",
          portCode: "NDV,NDP",
          username: "huynn",
          password: null,
          name: "Nguyễn Ngọc Huy",
          cardId: null,
          address: "Cảng Nam Đình Vũ",
          phone: "09367935888",
          email: "huy.nn@namdinhvuport.com.vn",
          support: null,
          status: true,
        },
        {
          key: "3",
          group: "Cty FWD",
          portCode: "NDV,NDP",
          username: "tnamtest",
          password: null,
          name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
          cardId: null,
          address:
            "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
          phone: "0936793580",
          email: "cs-hph@litcoline.com",
          support: null,
          status: true,
        },
        {
          key: "4",
          group: "Hãng Tàu",
          portCode: "NDV,NDP",
          username: "LCL",
          password: null,
          name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
          cardId: null,
          address:
            "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
          phone: "0936793580",
          email: "cs-hph@litcoline.com",
          support: null,
          status: true,
        },
        {
          key: "5",
          group: "Hãng Tàu",
          portCode: "NDV,NDP",
          username: "LCL",
          password: null,
          name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
          cardId: null,
          address:
            "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
          phone: "0936793580",
          email: "cs-hph@litcoline.com",
          support: null,
          status: true,
        },
      ],
      loadData: false,
      selectedRowKeys: [],
    };
    this.columns = [
      {
        title: "STT",
        dataIndex: "key",
        key: "key",
        width: 100,
      },
      {
        title: "Nhóm",
        dataIndex: "group",
        key: "group",
        width: 200,
      },
      {
        title: "Mã cảng",
        dataIndex: "portCode",
        key: "portCode",
        width: 200,
      },
      {
        title: "Tên đăng nhập",
        dataIndex: "username",
        key: "username",
        width: 150,
      },
      {
        title: "Mật khẩu",
        dataIndex: "password",
        key: "password",
        width: 100,
      },
      {
        title: "Họ tên",
        dataIndex: "name",
        key: "name",
        width: 250,
      },
      {
        title: "CCCD/CMND",
        dataIndex: "cardId",
        key: "cardId",
        width: 150,
      },
      {
        title: "Địa chỉ",
        dataIndex: "address",
        key: "address",
        width: 600,
      },
      {
        title: "Số điện thoại",
        dataIndex: "phone",
        key: "phone",
        width: 150,
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        width: 300,
      },
      {
        title: "Kinh doanh hổ trợ",
        dataIndex: "support",
        key: "support",
        width: 500,
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        width: 150,
      },
    ];
  }

  handleLoadData = () => {
    this.setState((prev) => ({
      loadData: !prev.loadData,
    }));
  };
  handleAddRow = () => {
    const newKey = (this.state.tableData.length + 1).toString();
    const newRow = {
      key: newKey,
      group: "",
      portCode: "",
      username: "",
      password: null,
      name: "",
      cardId: null,
      address: "",
      phone: "",
      email: "",
      support: null,
      status: false,
    };
    this.setState((prevState) => ({
      tableData: [...prevState.tableData, newRow],
    }));
  };

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  handleDeleteRow = () => {
    const { selectedRowKeys, tableData } = this.state;
    const newData = tableData.filter(
      (item) => !selectedRowKeys.includes(item.key)
    );
    this.setState({
      tableData: newData,
      selectedRowKeys: [],
    });
  };

  render() {
    const { loadData, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className="systemManageUser-container">
        <div className="panel-left">
          <header>Quản lý người dùng</header>
          <div className="select-group">
            <Mselect
              dataSource={{
                id: "select1",
                label: "Quản lý người dùng",
                // value: this.state.selectValue,
                options: [
                  { label: "QUANTRI: Quản trị hệ thống", value: "QTHT" },
                  { label: "Dev: Developer", value: "DEV" },
                  { label: "BOD: BOD Tập đoàn", value: "BOD" },
                ],
              }}
            />
            <Mselect
              dataSource={{
                id: "select1",
                label: "Chọn cảng",
                // value: this.state.selectValue,
                options: [
                  { label: "NDV", value: "NDV" },
                  { label: "Cát lái", value: "Catlai" },
                  { label: "Hải phòng", value: "HP" },
                ],
              }}
            />
          </div>
          <div className="button">
            <button className="button-load-data" onClick={this.handleLoadData}>
              <CloudDownloadOutlined /> Nạp dữ liệu
            </button>
          </div>
          <div>
            <Mradio
              dataSource={{
                label: "Select an option",
                options: [
                  { label: "Tất cả", value: "option1" },
                  { label: "Đã kích hoạt", value: "option2" },
                  { label: "Chưa kích hoạt", value: "option3" },
                ],
                radioStyle: { gap: "50px", padding: "12px 0" },
              }}
            />
          </div>
        </div>
        <div className="panel-right">
          <div className="action-right">
            <div className="header-action">
              <div className="search">
                <Msearch />
              </div>
              <div className="lists-action">
                <button className="btn green" onClick={this.handleAddRow}>
                  <PlusCircleOutlined className="icon" />
                  Thêm dòng
                </button>
                <button className="btn red" onClick={this.handleDeleteRow}>
                  <CloseCircleOutlined className="icon" />
                  Xóa dòng
                </button>
                <button className="btn blue">
                  <SaveOutlined className="icon" />
                  Lưu
                </button>
                <button className="btn black">
                  <FileTextOutlined className="icon" />
                  Xuất excel
                </button>
              </div>
            </div>

            <div className="line">Danh sách người dùng</div>
            <div className="table-data-user">
              {loadData ? (
                <Mtable
                  rowSelection={rowSelection}
                  columns={this.columns}
                  dataSource={this.state.tableData}
                />
              ) : (
                <Mtable rowSelection={rowSelection} columns={this.columns} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SystemManageUser;
