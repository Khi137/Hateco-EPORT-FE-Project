import React, { Component } from "react";
import "./SystemManageGroup.scss";
import { Msearch, Mtable } from "../../../components/BasicUI";
import {
  CloseCircleOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
export class SystemManageGroup extends Component {
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
  render() {
    return (
      <div className="system-group-container">
        <header>Danh sách nhóm người dùng</header>
        <div className="system-group-actions">
          <div className="action-search">
            {" "}
            <Msearch />
          </div>
          <div className="action-list">
            <button className="btn green">
              <PlusCircleOutlined className="icon" />
              Thêm dòng
            </button>
            <button className="btn red">
              <CloseCircleOutlined className="icon" />
              Xóa dòng
            </button>
            <button className="btn blue">
              <SaveOutlined className="icon" />
              Lưu
            </button>
          </div>
        </div>
        <div className="table-data-user">
          <Mtable columns={this.columns} dataSource={this.state.tableData} />
        </div>
      </div>
    );
  }
}

export default SystemManageGroup;
