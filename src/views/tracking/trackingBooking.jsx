import React, { Component, createRef } from "react";
import { Col, Row } from "antd";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";
import { Mbutton, Mcard, Mtable, Winput } from "../../components/BasicUI/BasicUI";
import { formatDateTime } from "../../utils/util";
import { Content } from "antd/es/layout/layout";

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
    ContainerNo: "TCNU8698362",
    ClassCode: "3",
    OperationCode: "HLC",
    FE: "F",
    ContainerStatusCode: "D",
    CargoTypeCode: "GP",
    Commodity: null,
    LocalSizetype: "4500",
    IsoSizetype: "45G0",
    IsLocalForeign: "F",
    JobModeCodeIn: "HBAI",
    MethodCodeIn: "T",
    DateIn: "2021-04-10T19:44:22.000Z",
    DateOut: "2021-04-14T12:54:30.000Z",
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
    ClassName: "Export",
    CargoTypeName: "General",
    ContainerStatusName: "Delivered",
    BookingType: true,
    BookingDate: "2021-04-06T10:35:25.000Z",
    ExpDate: null,
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

for (let index = 0; index < 20; index++) {
  const duplicatedData = { ...rowData[0] };
  duplicatedData.ContainerNo = generateRandomContainerNo();
  rowData.push(duplicatedData);
}

class TrackingBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        bookingNumber: "",
        searchData: "",
        bookingNumberError: true,
      },
      generalInformation: {},
      tableData: [],
    };
    this.submitButtonRef = createRef();
    this.bookingNumberRef = createRef();
  }

  handleInputChange = (e, dataForm) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [dataForm]: {
        ...prevState[dataForm],
        [name]: value,
      },
    }));
    return value;
  };

  handleLoadData = () => {
    const bookingNumberError = this.state.formData.bookingNumberError;
    if (bookingNumberError) {
      this.bookingNumberRef.current.handleCheckError();
      return;
    }
    this.setState({ isLoading: true });
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      if (this.submitButtonRef.current) {
        this.submitButtonRef.current.reset();
        this.setState((prevState) => ({
          generalInformation: rowData[0] ? rowData[0] : {},
          tableData: rowData,
          formData: {
            ...prevState.formData,
            bookingNumberError: false,
          },
          isLoading: false,
        }));
      }
    }, 1000);
  };

  handleExportExel = () => {
    console.log(this.state.formData);
  };

  render() {
    const { formData, generalInformation } = this.state;

    const generalInformationList = [
      {
        title: "Loại booking",
        value: generalInformation.OperationCode ? "Booking chỉ định" : "",
      },
      {
        title: "Hãng khai thác",
        value: generalInformation.OperationCode,
      },
      {
        title: "Kích cỡ ISO",
        value: generalInformation.IsoSizetype,
      },
      {
        title: "Số lượng cấp",
        value: generalInformation.BookingAmount,
      },
      {
        title: "Đã cấp",
        value: generalInformation.StackingAmount,
      },
    ];

    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      { columnId: "ContainerNo", width: 150, resizable: true, reorderable: true, header: "Số Container" },
      { columnId: "OperationCode", width: 150, resizable: true, reorderable: true, header: "Hãng Tàu" },
      { columnId: "IsoSizetype", width: 150, resizable: true, reorderable: true, header: "Kích cỡ" },
      { columnId: "CargoTypeName", width: 150, resizable: true, reorderable: true, header: "Full/Empty" },
      { columnId: "ClassName", width: 150, resizable: true, reorderable: true, header: "Hướng" },
      { columnId: "ExpDate", width: 150, resizable: true, reorderable: true, header: "Hạn Booking" },
      { columnId: "Position", width: 150, resizable: true, reorderable: true, header: "Vị trí bãi" },
      { columnId: "DateIn", width: 150, resizable: true, reorderable: true, header: "Ngày vào bãi" },
      { columnId: "DateOut", width: 150, resizable: true, reorderable: true, header: "Ngày ra bãi" },
      { columnId: "ContainerStatusName", width: 150, resizable: true, reorderable: true, header: "Tình trạng cont" }
    ]

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        { type: "text", nonEditable: false, text: container?.ContainerNo || "" },
        { type: "text", nonEditable: false, text: container?.OperationCode || "" },
        { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
        { type: "text", nonEditable: false, text: container?.CargoTypeName || "" },
        { type: "text", nonEditable: false, text: container?.ClassName || "" },
        { type: "text", nonEditable: false, text: container?.ExpDate ? formatDateTime(container?.ExpDate) : "" },
        { type: "text", nonEditable: false, text: (container?.Block || "") + "-" + (container?.Bay || "") + "-" + (container?.Row || "") + "-" + (container?.Tier || "") },
        { type: "text", nonEditable: false, text: container?.DateIn ? formatDateTime(container?.DateIn) : "" },
        { type: "text", nonEditable: false, text: container?.DateOut ? formatDateTime(container?.DateOut) : "" },
        { type: "text", nonEditable: false, text: container?.ContainerStatusName || "" }
      ]
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Số Container" },
      { type: "header", text: "Hãng Tàu" },
      { type: "header", text: "Kích cỡ" },
      { type: "header", text: "Full/Empty" },
      { type: "header", text: "Hướng" },
      { type: "header", text: "Hạn Booking" },
      { type: "header", text: "Vị trí bãi" },
      { type: "header", text: "Ngày vào bãi" },
      { type: "header", text: "Ngày ra bãi" },
      { type: "header", text: "Tình trạng cont" },
    ];

    return (
      <Content className="flex_layout-8-16_container tracking_layout">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Mcard
              title={<span style={{ color: 'white' }}>Truy vấn thông tin hóa đơn</span>}
              className="flex_card"
            >
              <Col className="input_layout">
                <Col>
                  <Winput
                    title={"Số booking"}
                    value={formData.bookingNumber}
                    tooltip={"Nhập số booking"}
                    onChange={(e) => this.handleInputChange(e)}
                    checkError={(error) =>
                      this.setState((prevState) => ({
                        formData: {
                          ...prevState.formData,
                          bookingNumberError: error,
                        },
                      }))
                    }
                    require={true}
                    name={"bookingNumber"}
                    className={`form_input_field`}
                    // prefix={item?.inputIcon}
                    placeholder={"Nhập số booking"}
                    errorText={formData?.bookingNumberError || true}
                    ref={this.bookingNumberRef}
                  />
                  <Mbutton
                    color=""
                    className="m_button third"
                    type="primary"
                    htmlType="submit"
                    block
                    onClick={this.handleLoadData}
                    ref={this.submitButtonRef}
                    size={"12"}
                    dataSource={{
                      textbutton: `Nạp dữ liệu`,
                      icon: "CloudDownloadOutlined",
                    }}
                  />
                </Col>
                <Row className="information_header">
                  <Col className="information_header_text"><p>Thông tin chung</p></Col>
                  <Col className="header_dash_line"></Col>
                </Row>
                <Col className="general_information_content">
                  {generalInformationList.map((item, index) => {
                    return (
                      <Row className="information_content_item" key={index}>
                        <Col className="item_title">{item.title}:</Col>
                        <Col className="item_value">{item.value}</Col>
                      </Row>
                    );
                  })}
                </Col>
              </Col>
            </Mcard>

          </Col>
          <Col className="layout_col" lg={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Mcard
              title={<span style={{ color: 'white' }}>Danh sách container</span>}
              className="container_list"
            >
              {!this.state.isLoading ? (
                !this.state.tableData[0] ? (
                  <Col className="no_data">
                    <Row justify={"center"}>
                      <DatabaseOutlined className="no_data_icon" />
                    </Row>
                    <Row justify={"center"}>Nhập số booking để nạp dữ liệu container...</Row>
                  </Col>
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
                      // addcolumn: true,
                      // deleteColumn: true,
                      exportExel: true,
                      // saveData: () => { this.saveData() },
                      searchField: [
                        "ContainerNo",
                        "OperationCode",
                        "IsoSizetype",
                      ],
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
        </Row >
      </Content >
    );
  }
}

export default TrackingBooking;
