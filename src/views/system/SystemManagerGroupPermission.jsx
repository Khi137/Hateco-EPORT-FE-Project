import React, { Component, createRef } from "react";
import {
  Mbutton,
  Mcard,
  Mselect,
  Mtable,
  Winput,
} from "../../components/BasicUI/BasicUI";
import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import Empty from "./Empty";
import { LoadingOutlined } from "@ant-design/icons";
const rowData = [
  {
    key: "1",
    category: "Lệnh đóng hàng container",
    parentCode: "Task",
    view: false,
    add: true,
    edit: true,
    delete: false,
  },
  {
    key: "2",
    category: "Cập nhật thông tin lệnh",
    parentCode: "Task",
    view: true,
    add: false,
    edit: true,
    delete: true,
  },
  {
    key: "3",
    category: "	Lệnh rút hàng Container",
    parentCode: "Task",
    view: true,
    add: false,
    edit: false,
    delete: true,
  },
  {
    key: "4",
    category: "Duyệt lệnh",
    parentCode: "Task",
    view: false,
    add: false,
    edit: false,
    delete: true,
  },
];

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
export class SystemManagerGroupPermission extends Component {
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

  render() {
    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "Category",
        width: 400,
        resizable: true,
        reorderable: true,
        header: "Tên danh mục",
      },
      {
        columnId: "parentCode",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Parent Code",
      },
      {
        columnId: "view",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Xem",
      },
      {
        columnId: "add",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Thêm",
      },
      {
        columnId: "edit",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Sửa",
      },
      {
        columnId: "delete",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "xóa",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        { type: "text", nonEditable: true, text: container?.category || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.parentCode || "",
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.view) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.add) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.edit) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.delete) || false,
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Tên danh mục" },
      { type: "header", text: "Parent Code" },
      { type: "header", text: "Xem" },
      { type: "header", text: "Thêm" },
      { type: "header", text: "Sửa" },
      { type: "header", text: "Xóa" },
    ];
    return (
      <Content className="flex_layout-8-16_container">
        <Row gutter={[12, 12]}>
          <Col span={8}>
            <Mcard
              title={
                <>
                  <span style={{ color: "white" }}>Quản lý phân quyền</span>
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
            </Mcard>
          </Col>
          <Col span={16}>
            <Mcard>
              {!this.state.isLoading ? (
                !this.state.tableData[0] ? (
                  <Empty
                    text="Nhập thông tin để nạp dữ liệu phân quyền..."
                    icon="TeamOutlined"
                  />
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
                      saveData: (data) => {
                        console.log(data);
                      },
                      searchField: ["Category"],
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

export default SystemManagerGroupPermission;
