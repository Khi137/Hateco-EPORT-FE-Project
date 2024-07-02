import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import {
  Mselect,
  Minput,
  Mradio,
  Mbutton,
  Mtable,
} from "../../../components/BasicUI";
import "./Customer.scss";

export class Customer extends Component {
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
      <div className="customer-container">
        <div className="customer-panel-left">
          <header className="customer-panel-left-header title-xl-normal">
            Danh mục khách hàng
          </header>
          <div className="customer-panel-left-body">
            <div className="customer-panel-left-select">
              <div className="customer-panel-left-select_1">
                <Mselect
                  dataSource={{
                    label: "Loại khách hàng",
                    options: [
                      { value: "1", label: "Cá nhân" },
                      { value: "2", label: "Công ty" },
                    ],
                  }}
                />
              </div>
              <div className="customer-panel-left-select_2">
                <Mselect
                  dataSource={{
                    label: "Bậc khách hàng",
                    options: [
                      { value: "1", label: "Bậc 1" },
                      { value: "2", label: "Bậc 2" },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="customer-panel-left-input">
              <Minput dataSource={{ label: "Mã số thuế", inputType: "text" }} />
              <Minput
                dataSource={{ label: "Tên khách hàng", inputType: "text" }}
              />
            </div>

            <div className="customer-panel-left-radio">
              <div className="line title-xl-normal">Hình thức thanh toán</div>
              <Mradio
                dataSource={{
                  label: "Hình thức thanh toán",
                  options: [
                    { label: "Tiền mặt", value: "1" },
                    { label: "Chuyển khoản", value: "2" },
                    { label: "Khác", value: "3" },
                  ],
                }}
              />
            </div>
            <div className="customer-panel-left-radio">
              <div className="line title-xl-normal">Trạng thái hoạt động</div>
              <Mradio
                dataSource={{
                  label: "Trạng thái hoạt động",
                  options: [
                    { label: "Hoạt động", value: "1" },
                    { label: "Không hoạt động", value: "2" },
                    { label: "Tạm ngừng", value: "3" },
                  ],
                }}
              />
            </div>
            <div className="customer-panel-left-button">
              <Mbutton
                dataSource={{ textbutton: "Nạp dữ liệu" }}
                color=""
                className="m_button orange"
                type="primary"
                htmlType="submit"
                block
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                size={"12"}
              />
            </div>
          </div>
        </div>
        <div className="customer-panel-right">
          <Mtable columns={this.columns} dataSource={this.state.tableData} />
        </div>
      </div>
    );
  }
}
export default Customer;
