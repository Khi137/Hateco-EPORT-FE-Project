import { Button, Col, Modal, Row, Tooltip } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import {
  Mbutton,
  Mcard,
  Mcheckbox,
  Mdatepicker,
  Mdivider,
  Mselect,
  Mtable,
  Winput,
} from "../../components/BasicUI/BasicUI";
import {
  CloseOutlined,
  DatabaseOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { formatDateTime } from "../../utils/util";

const rowData = [
  {
    HolidayContent: "",
    StartTime: "2021-04-10T19:44:22.000Z",
    EndTime: "2021-04-14T12:54:30.000Z",
  },
];

const rowDataUser = [
  {
    UserName: "Trần Đăng Khoa",
    Address: "107 Bến Vân Đồn, Q4, TPHCM",
    TaxCode: "TCNU8698362",
    Email: "dangkhoa020229@gmail.com",
    PhoneNumber: "0869212854",
  },
];

const optionSampleHoliday = [
  {
    label: "Nghỉ lễ *_*",
    value: "*_*",
  },
  {
    label: "Nghỉ lễ *_*_*",
    value: "*_*_*",
  },
  {
    label: "Lịch nghỉ lễ 2024_VNL_*",
    value: "VNL",
  },
];

const carrierOptions = [
  {
    value: "AEL",
    label: "CÔNG TY CỔ PHẦN A.E.L VIỆT NAM",
  },
  { value: "ANL", label: "ANL SINGAPORE PTE LTD (ANL)" },
  {
    value: "ANLV",
    label: "ANL SINGAPORE PTE LTD C/O CMA-CGM VIET NAM JSC",
  },
  { value: "APL", label: "APL CO. PTE. LTD" },
  {
    value: "APLV",
    label: "AMERICAN PRESIDENT LINES, LLC C/O CMA-CGM VIET NAM JSC",
  },
  { value: "ASO", label: "ASO" },
  { value: "BDG", label: "BDG" },
  { value: "CMA", label: "CMA CGM" },
  {
    value: "CMAV",
    label: "CMA-CGM SA C/O CMA-CGM VIET NAM JSC",
  },
  {
    value: "CNC",
    label: "APL CO. PTE LTD - CNC, AS A BRAND OF APL CO. PTE LTD",
  },
  {
    value: "CNCV",
    label:
      "CMA CGM ASIA SHIPPING PTE. LTD (CNC AS A BRAND OF CMA CGM ASIA SHIPPING PTE. LTD) C/O CMA-CGM VIET NAM JSC",
  },
  { value: "COS", label: "COSCO" },
  { value: "CUL", label: "CUL" },
  { value: "DEL", label: "CMA CGM (DELMAS)" },
  { value: "DNA", label: "DNA" },
  { value: "ELM", label: "ELM" },
  {
    value: "EMC",
    label: "CÔNG TY TNHH ĐẠI LÝ VẬN TẢI EVERGREEN (VIỆT NAM)",
  },
  { value: "GEM", label: "GEM" },
  { value: "GLO", label: "GLO" },
  { value: "GLS", label: "GLS" },
];

const hld1 = [
  "Giải phóng miền Nam và Quốc tế Lao động 30/04 - 01/05",
  "Tết dương lịch",
  "Tết âm lịch",
];
const hld2 = ["NGÀY LỄ CÔNG TY", "Quốc Khánh"];
const hld3 = ["Tết dương lịch"];

const holidayMap = {
  "*_*": hld1,
  "*_*_*": hld2,
  VNL: hld3,
};

function generateRandomTaxCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (let index = 0; index < 20; index++) {
  const duplicatedData = { ...rowDataUser[0] };
  duplicatedData.TaxCode = generateRandomTaxCode();
  rowDataUser.push(duplicatedData);
}

export default class TariffHoliday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        tariffNumberError: true,
        fromDate: moment(new Date()).startOf("day").toDate(),
        toDate: moment(new Date()).endOf("day").toDate(),
      },
      generalInformation: {},
      tableData: [],
      tableDataUser: [],
      selectCustomer: "",
      contentCalender: "",
      carrier: "",
      modalVisible: false,
    };
    this.submitButtonRef = createRef();
  }

  showModal = () => {
    this.setState({ modalVisible: true });
    this.handleLoadDataUser();
  };
  handleOk = () => {
    this.setState({ modalVisible: false });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  handleLoadData = (value) => {
    const holidayContents = holidayMap[value] || [];
    const contentValue = value === "VNL" ? "LỊCH NGHỈ LỄ 2024" : "*";
    const carrierValue = value === "VNL" ? "VNL:VNL" : "*";

    rowData.length = 0;
    rowData.push({
      HolidayContent: "",
      StartTime: "2021-04-10T19:44:22.000Z",
      EndTime: "2021-04-14T12:54:30.000Z",
    });

    for (let index = 0; index < holidayContents.length; index++) {
      const duplicatedData = { ...rowData[0] };
      duplicatedData.HolidayContent = holidayContents[index];
      rowData.push(duplicatedData);
    }

    this.setState({ isLoading: true });
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      this.setState((prevState) => ({
        generalInformation: rowData[0] ? rowData[0] : {},
        tableData: rowData,
        tableDataUser: rowDataUser,
        formData: {
          ...prevState.formData,
          tariffNumberError: false,
        },
        selectCustomer: "*",
        contentCalender: contentValue,
        carrier: carrierValue,
        isLoading: false,
      }));
    }, 1000);
  };

  handleLoadDataUser = () => {
    this.setState((prevState) => ({
      generalInformation: rowData[0] ? rowData[0] : {},
      tableDataUser: rowDataUser,
      formData: {
        ...prevState.formData,
        tariffNumberError: false,
      },
    }));
  };

  handleCheckboxChange = (returnValue) => {
    this.setState({
      checkboxValue: returnValue.checked,
    });
  };

  render() {
    const columnsFormat = [
      { columnId: "STT", width: 100, resizable: true, header: "STT" },
      {
        columnId: "HolidayContent",
        width: 500,
        resizable: true,
        reorderable: true,
        header: "Nội dung miễn lưu bãi",
      },
      {
        columnId: "StartTime",
        width: 320,
        resizable: true,
        reorderable: true,
        header: "Thời gian bắt đầu",
      },
      {
        columnId: "EndTime",
        width: 320,
        resizable: true,
        reorderable: true,
        header: "Thời gian kết thúc",
      },
    ];

    const columnsFormatUser = [
      { columnId: "STT", width: 150, resizable: true, header: "Mã khách hàng" },
      {
        columnId: "UserName",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Tên khách hàng",
      },
      {
        columnId: "Address",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Địa chỉ",
      },
      {
        columnId: "TaxCode",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Mã số thuế",
      },
      {
        columnId: "Email",
        width: 250,
        resizable: true,
        reorderable: true,
        header: "Email",
      },
      {
        columnId: "PhoneNumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số điện thoại",
      },
    ];

    const rowsFormat = (tariff, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.HolidayContent || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.StartTime ? formatDateTime(tariff?.StartTime) : "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.EndTime ? formatDateTime(tariff?.EndTime) : "",
        },
      ];
    };

    const rowsFormatUser = (tariff, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.UserName || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Address || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.TaxCode || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Email || "",
        },
        { type: "text", nonEditable: false, text: tariff?.PhoneNumber || "" },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Nội dung miễn lưu" },
      { type: "header", text: "Thời gian bắt đầu" },
      { type: "header", text: "Thời gian kết thúc" },
    ];

    const rowsHeaderUser = [
      { type: "header", text: "Mã khách hàng" },
      { type: "header", text: "Tên khách hàng" },
      { type: "header", text: "Địa chỉ" },
      { type: "header", text: "Mã số thuế" },
      { type: "header", text: "Email" },
      { type: "header", text: "Điện thoại" },
    ];
    return (
      <Content className="flex_layout-8-16_container tariffHoliday_content">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>
                  Cấu hình miễn lưu bãi ngày lễ
                </span>
              }
            >
              <Col className="input_layout">
                <Row>
                  <Row>
                    <Col>
                      Mẫu<span>*</span>
                    </Col>
                    <Tooltip
                      placement="top"
                      title={"Mẫu"}
                      className="item_tooltip"
                    >
                      <InfoCircleOutlined />
                    </Tooltip>
                  </Row>
                  <Mselect
                    dataSource={{
                      ref: this.submitButtonRef,
                      options: optionSampleHoliday,
                    }}
                    onChangeValue={(value) => {
                      this.handleLoadData(Object.values(value)[0]);
                    }}
                  />
                  <Mdivider dataSource={{ label: "Chi tiết cấu hình" }} />
                </Row>

                <Winput
                  key={this.state.contentCalender}
                  title={"Nội dung"}
                  tooltip={"Nội dung"}
                  value={this.state.contentCalender}
                  onChange={(e) => console.log(e)}
                  checkError={(error) =>
                    this.setState((prevState) => ({
                      formData: {
                        ...prevState.formData,
                        tariffNumberError: error,
                      },
                    }))
                  }
                  require={false}
                  name={"contentHoliday"}
                  prefix={<UnorderedListOutlined />}
                  placeholder={"Nội dung"}
                />
                <Row>
                  <Row>
                    <Col>
                      Hãng khai thác<span>*</span>
                    </Col>
                    <Tooltip
                      placement="top"
                      title={"Hãng khai thác"}
                      className="item_tooltip"
                    >
                      <InfoCircleOutlined />
                    </Tooltip>
                  </Row>
                  <Mselect
                    key={this.state.carrier}
                    dataSource={{
                      label: this.state.carrier || "Hãng khai thác",
                      ref: this.submitButtonRef,
                      options: carrierOptions,
                    }}
                    onChangeValue={(value) => {}}
                  />
                </Row>
                <Row align="bottom">
                  <Col
                    xs={24}
                    sm={18}
                    md={20}
                    lg={22}
                    style={{ marginRight: "16px" }}
                  >
                    <Winput
                      key={this.state.selectCustomer}
                      title={"Chọn khách hàng"}
                      tooltip={"Chọn khách hàng"}
                      value={this.state.selectCustomer}
                      onChange={(e) => console.log(e)}
                      checkError={(error) =>
                        this.setState((prevState) => ({
                          formData: {
                            ...prevState.formData,
                            tariffNumberError: error,
                          },
                        }))
                      }
                      require={false}
                      name={"selectUser"}
                      prefix={<UserOutlined />}
                      placeholder={"Chọn khách hàng"}
                    />
                  </Col>
                  <Col
                    xs={24}
                    sm={6}
                    md={4}
                    lg={1}
                    style={{ marginBottom: "4px" }}
                  >
                    <Mbutton
                      color=""
                      className="btn-search"
                      block
                      size={"12"}
                      onClick={this.showModal}
                      dataSource={{
                        textbutton: " ",
                        icon: "SearchOutlined",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Mcard>
          </Col>
          <Col lg={{ span: 16 }} sm={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>
                  Danh sách miễn lưu bãi ngày lễ
                </span>
              }
              className="container_list"
            >
              {!this.state.isLoading ? (
                !this.state.tableData[0] ? (
                  <Col className="no_data">
                    <Row justify={"center"}>
                      <DatabaseOutlined className="no_data_icon" />
                    </Row>
                    <Row justify={"center"}>
                      Không có dữ liệu để hiển thị...
                    </Row>
                  </Col>
                ) : (
                  <Mtable
                    key={this.state.tableData}
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
                      saveData: () => {
                        this.saveData();
                      },
                      searchField: ["HolidayContent"],
                    }}
                  />
                )
              ) : (
                <Row className="no_data" justify={"center"} align={"middle"}>
                  <LoadingOutlined style={{ fontSize: "64px" }} />
                </Row>
              )}
            </Mcard>
          </Col>
          <Modal
            title="Chọn khách hàng"
            open={this.state.modalVisible}
            onCancel={this.handleCancel}
            closeIcon={<CloseOutlined />}
            footer={null}
            className="custom-wide-modal-tariff"
          >
            <Row>Tìm theo mã số thuế*</Row>
            <Mtable
              key={this.state.tableDataUser}
              config={{
                defaultData: this.state.tableDataUser,
                columnsFormat: columnsFormatUser,
                rowsFormat: rowsFormatUser,
                rowsHeader: rowsHeaderUser,
                reorderRow: true,
              }}
              functionRequire={{
                searchField: ["TaxCode"],
              }}
            />
          </Modal>
        </Row>
      </Content>
    );
  }
}
