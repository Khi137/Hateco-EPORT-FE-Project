import { Col, Modal, Row, Tooltip } from "antd";
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
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";

const rowData = [
  {
    TariffCode: "HH",
    Description: "Phí hạ hàng GP từ xe -> cont",
    Direction: "Export",
    CargoType: "General",
    CVType: "*",
    Plan: "HẠ BÃI",
    TransportType: "BÃI - XE",
    Type: "*",
    DomesticInternational: "Tất cả",
    MoneyType: "VND",
    Full20: "20",
    Full40: "361111",
    Full45: "600000",
    Empty20: "740000",
    Empty40: "0",
    Empty45: "0",
    NonCont: "0",
    IncludeTax: "0",
    VAT: "8",
    Unit: "CONT",
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

const sampleTariff = [
  {
    label: "(+) Thêm mới",
    value: "Add",
  },
  {
    label: "Hợp đồng CMA_2022-05-03_CMA_*_0100100047",
    value: "CMA",
  },
]

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

const carrierOptions = [
  {
    label: "ACC: Khách hàng lẻ - Công ty Cổ phần Cảng Nam Đình Vũ",
    value: "ACC",
  },
  { label: "ACL: ADVANCE CONTAINER LINE", value: "ACL" },
  { label: "AEL: CÔNG TY CỔ PHẦN A.E.L VIỆT NAM", value: "AEL" },
  {
    label: "ANL: ANL SINGAPORE PTE LTD C/O CMA-CGM VIET NAM JSC",
    value: "ANL",
  },
  {
    label: "ANP: AN PHONG LOGS",
    value: "ANP",
  },
  {
    label: "APL: CMA CGM ASIA SHIPPING PTE. LTD C/O CMA-CGM VIET NAM JSC",
    value: "APL",
  },
  {
    label: "ASC: ASIA LOGISTICS AND TRADING JSC",
    value: "ASC",
  },
  {
    label: "ASL: ASEAN SEAS LINE CO., LTD.",
    value: "ASL",
  },
  {
    label: "BLP: Transworld GLS VietNam Co.,LTD",
    value: "BLP",
  },
  {
    label:
      "CCL: Chi nhánh Công ty Cổ phần Vinalines Logistics Việt Nam tại Hải Phòng",
    value: "CCL",
  },
  {
    label: "CKL: CK LINE CO., LTD",
    value: "CKL",
  },
  {
    label: "CMA: CMA-CGM SA C/O CMA-CGM VIET NAM JSC",
    value: "CMA",
  },
  {
    label:
      "CNC: CMA CGM ASIA SHIPPING PTE. LTD (CNC AS A BRAND OF CMA CGM ASIA SHIPPING PTE. LTD) C/O CMA-CGM VIET NAM JSC",
    value: "CNC",
  },
];

const typePaymentOptions = [
  {
    label: "Thu ngay",
    value: "M",
  },
  {
    label: "Thu sau",
    value: "C",
  },
];

export default class TariffContract extends Component {
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
      nameContract: "",
      carrier: "",
      typePayment: "",
      customerSelect: "",
      isDataLoaded: false,
      checkboxValue: false,
      modalVisible: false,
    };
    this.submitButtonRef = createRef();
  }

  showModal = () => {
    this.setState({ modalVisible: true });
    this.handleLoadDataUser();
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  handleLoadData = (value) => {
    const nameContractValue = value === "CMA" ? "Hợp đồng CMA" : "";
    const typePaymentValue = value === "CMA" ? "Thu sau" : "";
    const customerSelectValue =
      value === "CMA" ? "TỔNG CÔNG TY THÉP VIỆT NAM -CTCP" : "";

    const carrierValue = carrierOptions.find((option) =>
      option.value.startsWith(value)
    );
    const updatedCarrierValue = carrierValue ? carrierValue.label : "";

    if (value === "Add") rowData.length = 0;

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
        nameContract: nameContractValue,
        carrier: updatedCarrierValue,
        typePayment: typePaymentValue,
        customerSelect: customerSelectValue,
        isLoading: false,
        isDataLoaded: true,
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
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "TariffCode",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Mã biểu cước",
      },
      {
        columnId: "Description",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Diễn giải",
      },
      {
        columnId: "Direction",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Hướng cont",
      },
      {
        columnId: "CargoType",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Loại hàng",
      },
      {
        columnId: "CVType",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Loại CV",
      },
      {
        columnId: "Plan",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Phương Án",
      },
      {
        columnId: "TransportType",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "PTGN",
      },
      {
        columnId: "Type",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Loại hình",
      },
      {
        columnId: "DomesticInternational",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Nội/Ngoại",
      },
      {
        columnId: "MoneyType",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Loại tiền",
      },
      {
        columnId: "Full20",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tiền 20 Full",
      },
      {
        columnId: "Full40",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tiền 40 Full",
      },
      {
        columnId: "Full45",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tiền 45 Full",
      },
      {
        columnId: "Empty20",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tiền 20 Empty",
      },
      {
        columnId: "Empty40",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tiền 40 Empty",
      },
      {
        columnId: "Empty45",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tiền 45 Empty",
      },
      {
        columnId: "NonCont",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tiền Non-Cont",
      },
      {
        columnId: "IncludeTax",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Bao gồm thuế",
        render: (text, record) => (
          <Mcheckbox
            dataSource={{
              key: "isCheck",
              value: this.state.checkboxValue,
            }}
            onChange={(e) => this.handleCheckboxChange(e)}
          />
        ),
      },
      {
        columnId: "VAT",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "VAT (%)",
      },
      {
        columnId: "Unit",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Đơn vị tính",
      },
      {
        columnId: "Reload",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tải lại",
        render: () => (
          <Mbutton onClick={() => this.handleLoadData()}>Tải lại</Mbutton>
        ),
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
          text: tariff?.TariffCode || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Description || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Direction || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.CargoType || "",
        },
        { type: "text", nonEditable: false, text: tariff?.CVType || "" },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Plan || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.TransportType || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Type || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.DomesticInternational || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.MoneyType || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Full20 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Full40 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Full45 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Empty20 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Empty40 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Empty45 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.NonCont || "",
        },
        {
          type: "checkbox",
          nonEditable: false,
          checked: tariff?.IncludeTax === this.state.checkboxValue,
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.VAT || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Unit || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: "Tải lạiiii",
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
      { type: "header", text: "Mã biểu cước" },
      { type: "header", text: "Diễn giải" },
      { type: "header", text: "Hướng cont" },
      { type: "header", text: "Loại hàng" },
      { type: "header", text: "Loại CV" },
      { type: "header", text: "Phương án" },
      { type: "header", text: "PTGN" },
      { type: "header", text: "Loại hình" },
      { type: "header", text: "Nội/Ngoại" },
      { type: "header", text: "Loại tiền" },
      { type: "header", text: "Tiền 20 Full" },
      { type: "header", text: "Tiền 40 Full" },
      { type: "header", text: "Tiền 45 Full" },
      { type: "header", text: "Tiền 20 Empty" },
      { type: "header", text: "Tiền 40 Empty" },
      { type: "header", text: "Tiền 45 Empty" },
      { type: "header", text: "Tiền Non-Cont" },
      { type: "header", text: "Bao gồm thuế" },
      { type: "header", text: "VAT (%)" },
      { type: "header", text: "Đơn vị tính" },
      { type: "header", text: "Tải lại" },
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
      <Content className="flex_layout-8-16_container tariffContract_content">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>
                  Cấu hình biểu cước giảm giá
                </span>
              }
            >
              <Col className="input_layout">
                <Row>
                  <Row>
                    <Col>
                      Mẫu biểu cước<span>*</span>
                    </Col>
                    <Tooltip
                      placement="top"
                      title={"Mẫu biểu cước"}
                      className="item_tooltip"
                    >
                      <InfoCircleOutlined />
                    </Tooltip>
                  </Row>
                  <Mselect
                    dataSource={{
                      label: "Mẫu biểu cước",
                      ref: this.submitButtonRef,
                      options: sampleTariff
                    }}
                    onChangeValue={(value) => {
                      this.handleLoadData(Object.values(value)[0]);
                    }}
                  />
                  <Mdivider dataSource={{ label: "Chi tiết cấu hình" }} />
                </Row>
                <Winput
                  key={this.state.nameContract}
                  title={"Tên hợp đồng"}
                  tooltip={"Tên hợp đồng"}
                  value={this.state.nameContract}
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
                  name={"nameContract"}
                  className={`form_input_field`}
                  prefix={<UnorderedListOutlined />}
                  placeholder={"Tên hợp đồng"}
                />
                <Row justify={"space-between"}>
                  <Col>
                    <Row>Từ ngày...</Row>
                    <Mdatepicker
                      dataSource={{
                        value: this.state.formData.fromDate,
                        format: "YYYY-MM-DD HH:mm:ss",
                        defaultValue: this.state.formData.fromDate,
                        id: "my-datepicker",
                        span: { xs: 24, sm: 12, md: 8, lg: 24 },
                        required: true,
                        lockbefore: true,
                        propReadonly: false,
                      }}
                    />
                  </Col>
                  <Col>
                    <Row>Đến ngày...</Row>
                    <Mdatepicker
                      dataSource={{
                        value: this.state.formData.toDate,
                        format: "YYYY-MM-DD HH:mm:ss",
                        defaultValue: this.state.formData.toDate,
                        id: "my-datepicker",
                        span: { xs: 24, sm: 12, md: 8, lg: 24 },
                        required: true,
                        lockbefore: true,
                        propReadonly: false,
                        className: "date_input",
                      }}
                    />
                  </Col>
                </Row>
                <Row justify={"space-between"}>
                  <Col span={11}>
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
                        label: this.state.carrier || "",
                        ref: this.submitButtonRef,
                        options: carrierOptions,
                      }}
                      onChangeValue={() => {
                      }}
                    />
                  </Col>
                  <Col span={11}>
                    <Row>
                      <Col>
                        thanh toán<span>*</span>
                      </Col>
                      <Tooltip
                        placement="top"
                        title={"Loại thanh toán"}
                        className="item_tooltip"
                      >
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Row>
                    <Mselect
                      key={this.state.typePayment}
                      dataSource={{
                        label: this.state.typePayment || "",
                        ref: this.submitButtonRef,
                        options: typePaymentOptions,
                      }}
                      onChangeValue={() => {}}
                    />
                  </Col>
                </Row>
                <Row align="bottom">
                  <Col xs={24} sm={18} md={20} lg={22} style={{ marginRight: "16px" }}>
                    <Winput
                      key={this.state.customerSelect}
                      title={"Chọn khách hàng"}
                      tooltip={"Chọn khách hàng"}
                      value={this.state.customerSelect}
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
                      className={`form_input_field`}
                      prefix={<UserOutlined />}
                      placeholder={"Chọn khách hàng"}
                      disabled={!!this.state.customerSelect}
                    />
                  </Col>
                  <Col xs={24} sm={6} md={4} lg={1} style={{ marginBottom: "4px" }}>
                    <Mbutton
                      color=""
                      block
                      className="btn-search"
                      size={"12"}
                      onClick={this.showModal}
                      dataSource={{
                        textbutton: ` `,
                        icon: "SearchOutlined",
                      }}
                      disabled={!!this.state.customerSelect}
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
                  Danh sách cấu hình hợp đồng
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
                      Chọn mẫu biểu cước để nạp dữ liệu...
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
                      searchField: ["TariffCode"],
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
