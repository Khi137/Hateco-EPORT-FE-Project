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
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { formatDateTime } from "../../utils/util";

const rowData = [
  {
    Rowguid: "20383CFB-35E4-454E-BA7E-C112ADE17335",
    TerminalCode: null,
    VesselKey: "TBA",
    VesselImVoy: null,
    VesselExVoy: null,
    ETB: null,
    ETD: null,
    BargeKey: null,
    BargeImVoy: null,
    BargeExVoy: null,
    DeliveryOrder: null,
    BLNo: null,
    BookingNo: "50940502",
    HousebillNo: null,
    TariffCode: "TCNU8698362",
    ClassCode: "3",
    Description: "HLC",
    FE: "F",
    ContainerStatusCode: "D",
    CargoTypeCode: "GP",
    Commodity: null,
    LocalSizetype: "4500",
    Direction: "North",
    IsLocalForeign: "F",
    JobModeCodeIn: "HBAI",
    MethodCodeIn: "T",
    EffectiveDate: "2021-04-10T19:44:22.000Z",
    ExpirationDate: "2021-04-14T12:54:30.000Z",
    RoundHours: "Nửa giờ",
    AdditionalHours: "10.5",
    PaymentType: "M: Mua ngay",
    JobModeCodeOut: "LAYN",
    MethodCodeOut: "V",
    EirInNo: null,
    EirOutNo: null,
    StuffNo: null,
    UnstuffNo: null,
    ServiceNo: null,
    DraftNo: null,
    InvoiceNo: null,
    Block: "A6",
    Bay: "06",
    Row: "02",
    Tier: "4",
    Area: null,
    VGM: true,
    MCWeight: null,
    TareWeight: null,
    Sealno: null,
    Sealno1: null,
    Sealno2: "8256247",
    POL: "VNHPH",
    POD: "VNHPH",
    FPOD: null,
    TransitCode: null,
    TransitPort: null,
    Temperature: null,
    Vent: null,
    VentUnit: null,
    Class: null,
    Unno: null,
    OogTop: null,
    OogLeft: null,
    OogRight: null,
    OogBack: null,
    OogFront: null,
    CusHold: false,
    TerHold: false,
    TerHoldReason: null,
    IsReturnBack: false,
    IsSpecialWarning: false,
    SpecialWarning: null,
    ContainerCondition: null,
    IsTruckBarge: "T",
    TruckNo: null,
    RemoocNo: null,
    Note: null,
    ID_TOS: "0000000671104",
    CreatedBy: "catos_ndv",
    CreatedTime: "2021-04-06T10:36:05.000Z",
    ModifiedBy: "catos_ndv",
    ModifiedTime: "2021-04-06T10:37:01.000Z",
    MaxGrossWeight: null,
    XuatNeo: null,
    XuatPhao: null,
    CVType: "B",
    CargoType: "A",
    Type: "Container",
    DomesticInternational: "Domestic",
    MoneyType: "USD",
    Full20: "Y",
    Full40: "Y",
    Full45: "Y",
    Empty20: "Y",
    Empty40: "Y",
    Empty45: "Y",
    NonCont: "1000",
    IncludeTax: "1000",
    VAT: "10%",
    Unit: "Thousand",
    BookingType: true,
    BookingDate: "2021-04-06T10:35:25.000Z",
    Plan: "Complete",
    BookingAmount: 1,
    StackingAmount: 0,
    ShipperName: "shipperName",
    BookingStatus: 0,
    VesselName: "To Be Assign",
    Humidity: null,
    O2: null,
    CO2: null,
    BookingReleaseDate: null,
    UserGroupRank: null,
    OperationName: "CÔNG TY TNHH HAPAG- LLOYD  (VIET NAM)",
    CallSign: null,
    VETB: "2017-02-01T00:00:00.000Z",
    VETD: "2017-02-01T00:00:00.000Z",
    VImVoy: null,
    VExVoy: null,
    FullEmpty: "F:Full",
    ProductType: "*",
    StartTime: "2021-04-10T19:44:22.000Z",
    EndTime: "2021-04-14T12:54:30.000Z",
    NumberFreeDay: "28",
  },
];

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

const typeProductOptions = [
  {
    label: "Tất cả",
    value: "*",
  },
  {
    label: "Hàng nội (L)",
    value: "L",
  },
  {
    label: "Hàng ngoại (F)",
    value: "F",
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

function generateRandomCarrier() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (let index = 0; index < 20; index++) {
  const duplicatedData = { ...rowData[0] };
  duplicatedData.Carrier = generateRandomCarrier();
  rowData.push(duplicatedData);
}

export default class TariffFreeDay extends Component {
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
      operatingCarrier: "",
      typeProduct: "",
      typePayment: "",
      checkboxValue: false,
      modalVisible: false,
    };
    this.submitButtonRef = createRef();
  }

  componentDidMount() {
    this.handleLoadData();
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };
  handleOk = () => {
    this.setState({ modalVisible: false });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  handleLoadData = (code, type, payment) => {
    const selectedCarrier = carrierOptions.find((option) =>
      option.value.startsWith(code)
    );
    const updatedCarrierLabel = selectedCarrier ? selectedCarrier.label : "";

    const selectedTypeProduct = typeProductOptions.find((option) =>
      option.value.startsWith(type)
    );
    const updatedTypeProductLabel = selectedTypeProduct
      ? selectedTypeProduct.label
      : "";

    const selectedPaymentProduct = typePaymentOptions.find((option) =>
      option.value.startsWith(payment)
    );
    const updatedPaymentProductLabel = selectedPaymentProduct
      ? selectedPaymentProduct.label
      : "";

    this.setState({ isLoading: true });
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      this.setState((prevState) => ({
        generalInformation: rowData[0] ? rowData[0] : {},
        tableData: rowData,
        formData: {
          ...prevState.formData,
          tariffNumberError: false,
        },
        operatingCarrier: updatedCarrierLabel,
        typeProduct: updatedTypeProductLabel,
        typePayment: updatedPaymentProductLabel,
        isLoading: false,
      }));
    }, 1000);
  };

  handleCheckboxChange = (returnValue) => {
    this.setState({
      checkboxValue: returnValue.checked,
    });
  };

  render() {
    console.log(this.state.checkboxValue);

    const columnsFormat = [
      { columnId: "STT", width: 100, resizable: true, header: "STT" },
      {
        columnId: "FullEmpty",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Full/Empty",
      },
      {
        columnId: "ProductType",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Loại hàng",
      },
      {
        columnId: "StartTime",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Thời gian bắt đầu",
      },
      {
        columnId: "EndTime",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Thời gian kết thúc",
      },
      {
        columnId: "NumberFreeDay",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số ngày miễn phí",
      },
    ];

    const rowsFormat = (tariff, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.FullEmpty || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.ProductType || "",
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
        {
          type: "text",
          nonEditable: false,
          text: tariff?.NumberFreeDay || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Full/Empty" },
      { type: "header", text: "Loại hàng" },
      { type: "header", text: "Thời gian bắt đầu" },
      { type: "header", text: "Thời gian kết thúc" },
      { type: "header", text: "Số ngày miễn phí" },
    ];
    return (
      <Content className="flex_layout-8-16_container tariffFreeDay_content">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }}>
            <Mcard
              title={<span style={{ color: "white" }}>Cấu hình lưu bãi</span>}
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
                      label: "Mẫu...",
                      ref: this.submitButtonRef,
                      options: [
                        {
                          label: "ACC_YKH0006894_*_C_2023-08-31",
                          value: "ACC_YKH0006894_*_C_2023-08-31",
                        },
                        {
                          label: "ACL_*_*_M_2026-08-01",
                          value: "ACL_*_*_M_2026-08-01",
                        },
                        {
                          label: "AEL *_L_C_2028-06-23",
                          value: "AEL *_L_C_2028-06-23",
                        },
                        {
                          label: "ANL_F_C_2021-12-31",
                          value: "ANL_F_C_2021-12-31",
                        },
                        {
                          label: "ANP_*_M_2021-12-31",
                          value: "ANP_*_M_2021-12-31",
                        },
                        {
                          label: "APL_*_C_2021-12-31",
                          value: "APL_*_C_2021-12-31",
                        },
                        {
                          label: "ASL_F_M_2023-12-01",
                          value: "ASL_F_M_2023-12-01",
                        },
                        {
                          label: "BLP_*_C_2021-12-31",
                          value: "BLP_*_C_2021-12-31",
                        },
                        {
                          label: "CKL_*_C_2021-12-31",
                          value: "CKL_*_C_2021-12-31",
                        },
                        {
                          label: "CMA_*_C_2022-02-01",
                          value: "CMA_*_C_2022-02-01",
                        },
                        {
                          label: "CNC_*_C_2021-12-31",
                          value: "CNC_*_C_2021-12-31",
                        },
                      ],
                    }}
                    onChangeValue={(value) => {
                      const stringValue = Object.values(value)[0];
                      const code = stringValue.substring(0, 3);
                      const type = stringValue.charAt(
                        stringValue.indexOf("_") + 1
                      );
                      const payment = stringValue.charAt(
                        stringValue.indexOf("_", stringValue.indexOf("_") + 1) +
                          1
                      );
                      this.handleLoadData(code, type, payment);
                    }}
                  />
                  <Mdivider dataSource={{ label: "Chi tiết cấu hình" }} />
                </Row>
                <Row justify={"space-between"}>
                  <Col>
                    <Row>Ngày hiệu lực</Row>
                    <Mdatepicker
                      dataSource={{
                        value: this.state.formData.fromDate,
                        format: "YYYY-MM-DD HH:mm:ss",
                        defaultValue: this.state.formData.fromDate,
                        id: "my-datepicker",
                        // label: 'Select Date',
                        span: { xs: 24, sm: 12, md: 8, lg: 24 },
                        required: true,
                        lockbefore: true,
                        propReadonly: false,
                      }}
                    />
                  </Col>
                  <Col>
                    <Row>Ngày hết hạn</Row>
                    <Mdatepicker
                      dataSource={{
                        value: this.state.formData.toDate,
                        format: "YYYY-MM-DD HH:mm:ss",
                        defaultValue: this.state.formData.toDate,
                        id: "my-datepicker",
                        // label: 'Select Date',
                        span: { xs: 24, sm: 12, md: 8, lg: 24 },
                        required: true,
                        lockbefore: true,
                        propReadonly: false,
                        className: "date_input",
                      }}
                    />
                  </Col>
                </Row>
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
                    key={this.state.operatingCarrier}
                    dataSource={{
                      label: this.state.operatingCarrier || "Hãng khai thác",
                      ref: this.submitButtonRef,
                      options: carrierOptions,
                    }}
                    value={this.state.operatingCarrier}
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
                      title={"Chọn khách hàng"}
                      tooltip={"Chọn khách hàng"}
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
                      // errorText={formData?.tariffNumberError || true}
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
                      size={"12"}
                      onClick={this.showModal}
                      dataSource={{
                          textbutton: ` `,
                          icon: "SearchOutlined",
                      }}
                    />
                  </Col>
                </Row>
                <Row justify={"space-between"}>
                  <Col span={11}>
                    <Row>
                      <Col>
                        Hàng Nội/Ngoại<span>*</span>
                      </Col>
                      <Tooltip
                        placement="top"
                        title={"Hàng Nội/Ngoại"}
                        className="item_tooltip"
                      >
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Row>
                    <Mselect
                      key={this.state.typeProduct}
                      dataSource={{
                        label: this.state.typeProduct || "",
                        ref: this.submitButtonRef,
                        options: [
                          {
                            label: "Tất cả",
                            value: "All",
                          },
                          {
                            label: "Hàng nội (L)",
                            value: "domesticGoods",
                          },
                          {
                            label: "Hàng ngoại (F)",
                            value: "foreignGoods",
                          },
                        ],
                      }}
                      onChangeValue={(value) => {
                        //   this.handleLoadData(value)
                      }}
                    />
                  </Col>
                  <Col span={11}>
                    <Row>
                      <Col>
                        Loại thanh toán<span>*</span>
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
                        options: [
                          {
                            label: "Thu ngay",
                            value: "immediate",
                          },
                          {
                            label: "Thu sau",
                            value: "deferred",
                          },
                        ],
                      }}
                      onChangeValue={(value) => {
                        //   this.handleLoadData(value)
                      }}
                    />
                  </Col>
                  <Mcheckbox
                    dataSource={{
                      key: "isRFCheck",
                      label: "Tính lưu bãi container lạnh",
                      value: this.state.checkboxValue,
                    }}
                    onChangeValue={this.handleCheckboxChange}
                  />
                </Row>
              </Col>
            </Mcard>
          </Col>
          <Col lg={{ span: 16 }} sm={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>
                  Danh sách cấu hình lưu bãi
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
                      searchField: ["FullEmpty", "ProductType"],
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
            style={{width: "80%"}}
          >
            <Row>
              Tìm theo mã số thuế*
            </Row>
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
                addcolumn: false,
                deleteColumn: false,
                exportExel: false,
                // saveData: () => {
                //   this.saveData();
                // },
                searchField: ["FullEmpty", "ProductType"],
              }}
            />
          </Modal>
        </Row>
      </Content>
    );
  }
}
