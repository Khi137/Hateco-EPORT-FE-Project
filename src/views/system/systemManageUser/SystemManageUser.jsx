import React, { Component } from "react";
import "./SystemManageUser.scss";
import {
  Mbutton,
  Mradio,
  Msearch,
  Mselect,
  Mtable,
  Winput,
} from "../../../components/BasicUI";
import {
  CloseCircleOutlined,
  CloudDownloadOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
  SaveOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  formatDateTime,
  handleColumnsReorder,
  handleRowsReorder,
  handleRowsSearch,
} from "../../../utils/util.js";
import Empty from "../Empty.jsx";
const tableData = [
  {
    selected: false,
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
    status: null,
  },
  {
    selected: false,
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
    status: null,
  },
  {
    selected: false,
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
    status: null,
  },
  {
    selected: false,
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
    status: null,
  },
  {
    selected: true,
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
    status: null,
  },
];

function generateRandomContainerNo() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (let index = 0; index < 10; index++) {
  const duplicatedData = { ...tableData[0] };
  duplicatedData.ContainerNo = generateRandomContainerNo();
  tableData.push(duplicatedData);
}

export class SystemManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: tableData,
      loadData: false,
      selectedRowKeys: [],
    };
  }

  handleLoadData = () => {
    this.setState((prev) => ({
      loadData: !prev.loadData,
    }));
  };

  render() {
    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "Group",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Nhóm",
      },
      {
        columnId: "Code",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Mã cảng",
      },
      {
        columnId: "Username",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tên đăng nhập",
      },
      {
        columnId: "Password",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Mật khẩu",
      },
      {
        columnId: "FullName",
        width: 500,
        resizable: true,
        reorderable: true,
        header: "Họ và tên",
      },
      {
        columnId: "CardId",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "CCCD",
      },
      {
        columnId: "Address",
        width: 1000,
        resizable: true,
        reorderable: true,
        header: "Địa chỉ",
      },
      {
        columnId: "Phone",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số điện thoại",
      },
      {
        columnId: "Email",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Email",
      },
      {
        columnId: "Support",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Hổ trợ",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        { type: "text", nonEditable: true, text: container?.group || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.portCode || "",
        },
        { type: "text", nonEditable: true, text: container?.username || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.password || "",
        },
        { type: "text", nonEditable: true, text: container?.name || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.cardId || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.address || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.phone || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.email || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.support || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Nhóm" },
      { type: "header", text: "Mã cảng" },
      { type: "header", text: "Tên đăng nhập" },
      { type: "header", text: "Mật khẩu" },
      { type: "header", text: "Họ và tên" },
      { type: "header", text: "CCCD" },
      { type: "header", text: "Địa chỉ" },
      { type: "header", text: "Số điện thoại" },
      { type: "header", text: "Email" },
      { type: "header", text: "Hổ trợ" },
    ];

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
          <div style={{ padding: "0 12px" }}>
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
                <Winput
                  name={"searchData"}
                  className={`form_input_field`}
                  prefix={<SearchOutlined />}
                  placeholder={"Tìm kiếm..."}
                />
              </div>
              <div className="lists-action">
                <Mbutton
                  className="m_button green drop-button-shadow"
                  block
                  htmlType="submit"
                  type="primary"
                  onClick={this.handleFormSubmit}
                  ref={this.mButtonRef}
                  dataSource={{
                    textbutton: "Thêm dòng",
                    color: "",
                    size: "12",
                    icon: "PlusCircleOutlined",
                  }}
                />
                <Mbutton
                  className="m_button orange drop-button-shadow"
                  block
                  htmlType="submit"
                  type="primary"
                  onClick={this.handleFormSubmit}
                  ref={this.mButtonRef}
                  dataSource={{
                    textbutton: "Xóa dòng",
                    color: "",
                    size: "12",
                    icon: "MinusCircleOutlined",
                  }}
                />
                <Mbutton
                  className="m_button red drop-button-shadow"
                  block
                  htmlType="submit"
                  type="primary"
                  onClick={this.handleFormSubmit}
                  ref={this.mButtonRef}
                  dataSource={{
                    textbutton: "Lưu",
                    color: "",
                    size: "12",
                    icon: "SaveOutlined",
                  }}
                />
                <Mbutton
                  className="m_button third_border drop-button-shadow"
                  block
                  htmlType="submit"
                  type="primary"
                  onClick={this.handleFormSubmit}
                  ref={this.mButtonRef}
                  dataSource={{
                    textbutton: "Xuất file excel",
                    color: "",
                    size: "12",
                    icon: "FileExcelOutlined",
                  }}
                />
              </div>
            </div>

            <div className="line">Danh sách người dùng</div>
            <div className="table-data-user">
              {this.state.loadData ? (
                <Mtable
                  tableData={this.state.tableData}
                  columnsFormat={columnsFormat}
                  rowsFormat={rowsFormat}
                  rowsHeader={rowsHeader}
                  reoderRow={true}
                />
              ) : (
                <Empty
                  text={
                    "Dữ liệu đang trống vui lòng chọn thông tin và nạp dữ liệu..."
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SystemManageUser;
