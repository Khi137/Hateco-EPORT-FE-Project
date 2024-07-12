import React, { Component, createRef } from "react";
import {
  Mbutton,
  Mcard,
  Mradio,
  Mselect,
  Mtable,
  Winput,
} from "../../components/BasicUI.jsx";
import Empty from "./Empty.jsx";
import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout.js";
import { LoadingOutlined } from "@ant-design/icons";
const rowData = [
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

for (let index = 0; index < 30; index++) {
  const duplicatedData = { ...rowData[0] };
  duplicatedData.ContainerNo = generateRandomContainerNo();
  rowData.push(duplicatedData);
}

const valueSelect = [
  {
    label: "Quản lý người dùng",
    option: [
      { label: "QUANTRI: Quản trị hệ thống", value: "QTHT" },
      { label: "Dev: Developer", value: "DEV" },
      { label: "BOD: BOD Tập đoàn", value: "BOD" },
    ],
  },
  {
    label: "Chọn cảng",
    option: [
      { label: "NDV", value: "NDV" },
      { label: "Cát lái", value: "Catlai" },
      { label: "Hải phòng", value: "HP" },
    ],
  },
];

export class SystemManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        pinCode: "",
        pinCodeError: true,

        taxCode: "",
        billForm: "",
        billSymbol: "",
        billNumber: "",

        searchData: "",
      },
      radioValue: "pincode",
      tableData: [],
      isLoading: false,
    };
    this.submitButtonRef = createRef();
    this.pinCodeRef = createRef();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
    return value;
  };

  handleRadioChange = (returnValue) => {
    this.setState({
      radioValue: returnValue,
    });
  };

  handleLoadData = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState((prevState) => ({
        tableData: rowData,
        isLoading: false,
      }));
    }, 1000);
  };

  renderInputField = (item, key) => {
    return (
      <Row key={key + item?.name}>
        <Winput
          title={item?.title}
          value={item.value}
          tooltip={item.tooltip}
          onChange={(e) => this.handleInputChange(e)}
          checkError={(error) =>
            this.setState((prevState) => ({
              formData: {
                ...prevState.formData,
                [item?.name + "Error"]: error,
              },
            }))
          }
          require={item.require}
          inputRegex={item.regex}
          minLength={item.minLength}
          name={item?.name}
          type={item?.type}
          className={`form_input_field ${item?.error ? "error_item" : ""}`}
          prefix={item?.inputIcon}
          placeholder={item?.placeholder}
          defaultValue={item?.value}
          error={typeof item?.error === "string" ? item?.error : false}
          ref={item.ref}
        />
      </Row>
    );
  };

  renderSelect = (value, index) => {
    return (
      <Row style={{ margin: "12px 0 " }}>
        <Mselect
          dataSource={{
            id: `select${index + 1}`,
            label: value.label,
            options: value.option,
          }}
        />
      </Row>
    );
  };

  renderButton = (value) => {
    return (
      <Mbutton
        className={value.className}
        block
        htmlType="submit"
        type="primary"
        onClick={this.handleFormSubmit}
        ref={this.mButtonRef}
        dataSource={{
          textbutton: `${value.text}`,
          color: "",
          size: "12",
          icon: `${value.icon}`,
        }}
      />
    );
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
      <Content className="flex_layout-8-16_container">
        <Row gutter={[12, 12]}>
          <Col span={8}>
            <Mcard
              title={
                <>
                  <span style={{ color: "white" }}>Quản lý người dùng</span>
                </>
              }
            >
              {valueSelect.map((value, index) => {
                return this.renderSelect(value, index);
              })}
              <Mbutton
                color=""
                className="m_button third"
                type="primary"
                htmlType="submit"
                onClick={this.handleLoadData}
                block
                size={"12"}
                dataSource={{
                  textbutton: `Nạp dữ liệu`,
                  icon: "CloudDownloadOutlined",
                }}
              />

              <Mradio
                dataSource={{
                  label: "Select an option",
                  options: [
                    { label: "Tất cả", value: "option1" },
                    { label: "Đã kích hoạt", value: "option2" },
                    { label: "Chưa kích hoạt", value: "option3" },
                  ],
                  radioStyle: { margin: "12px 0" },
                }}
              />
            </Mcard>
          </Col>
          <Col span={16}>
            {" "}
            <Mcard>
              {!this.state.isLoading ? (
                !this.state.tableData[0] ? (
                  <Empty text="Nhập thông tin để nạp dữ liệu người dùng..." />
                ) : (
                  <Mtable
                    config={{
                      defaultData: this.state.tableData,
                      columnsFormat: columnsFormat,
                      rowsFormat: rowsFormat,
                      rowsHeader: rowsHeader,
                      reorderRow: true,
                    }}
                    functionRequire={{
                      addcolumn: true,
                      deleteColumn: true,
                      exportExel: true,
                      saveData: (data) => {
                        console.log(data);
                      },
                      searchField: ["Group", "Address", "FullName"],
                    }}
                  />
                )
              ) : (
                <Row className="no_data" justify={"center"} align={"middle"}>
                  <LoadingOutlined className="no_data_icon" />
                </Row>
              )}
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default SystemManageUser;
