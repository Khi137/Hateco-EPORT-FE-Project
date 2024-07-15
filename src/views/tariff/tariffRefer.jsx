import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import { Mcard, Mtable } from "../../components/BasicUI/BasicUI";
import { Col, Row } from "antd";
import { formatDateTime } from "../../utils/util";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";

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
    RoundHours: 'Nửa giờ',
    AdditionalHours: '10.5',
    PaymentType: 'M: Mua ngay',
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

export default class TariffRefer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        tariffNumber: "",
        tariffNumberError: true,
      },
      generalInformation: {},
      tableData: [],
    };
    this.submitButtonRef = createRef();
  }

  componentDidMount() {
    this.handleLoadData()
  }

  handleLoadData = () => {
    // const tariffNumberError = this.state.formData.tariffNumberError;
    // if (tariffNumberError) {
    //   this.referenceNumberRef.current.handleCheckError();
    //   return;
    // }
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
        isLoading: false,
      }));
    }, 1000);
  };
  render() {
    const columnsFormat = [
      { columnId: "STT", width: 100, resizable: true, header: "STT" },
      {
        columnId: "Carrier",
        width: 460,
        resizable: true,
        reorderable: true,
        header: "Hãng khai thác",
      },
      {
        columnId: " EffectiveDate",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Ngày hiệu lực",
      },
      {
        columnId: "ExpirationDate",
        width: 300, 
        resizable: true,
        reorderable: true,
        header: "Ngày hết hạn",
      },
      {
        columnId: "RoundHours",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Làm tròn giờ",
      },
      {
        columnId: "AdditionalHours",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Giờ cộng thêm",
      },
      {
        columnId: "PaymentType",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Loại thanh toán",
      },
    ];

    const rowsFormat = (tariff, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.Carrier || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.EffectiveDate ? formatDateTime(tariff?.EffectiveDate) : "" 
        },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.ExpirationDate ? formatDateTime(tariff?.ExpirationDate) : "" ,
        },
        {
            type: "text",
            nonEditable: false,
            text: tariff?.RoundHours || "",
        },
        { type: "text", nonEditable: false, text: tariff?.AdditionalHours || "" },
        {
          type: "text",
          nonEditable: false,
          text: tariff?.PaymentType || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Hãng khai thác" },
      { type: "header", text: "Ngày hiệu lực" },
      { type: "header", text: "Ngày hết hạn" },
      { type: "header", text: "Làm tròn giờ" },
      { type: "header", text: "Giờ cộng thêm" },
      { type: "header", text: "Loại thanh toán" },
    ];
    return (
      <Content className="flex_layout-8-16_container tariff_layout">
        <Row gutter={[12, 12]}>
          <Col span={24}>
            <Mcard
              title={<span style={{ color: "white" }}>Cấu hình sử dụng điện</span>}
            >
              {!this.state.isLoading ? (
                !this.state.tableData[0] ? (
                  <Col className="no_data">
                    <Row justify={"center"}>
                      <DatabaseOutlined className="no_data_icon" />
                    </Row>
                    <Row justify={"center"}>
                      Nhập số container để nạp dữ liệu container...
                    </Row>
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
                      addcolumn: true,
                      deleteColumn: true,
                      exportExel: true,
                      saveData: () => {
                        this.saveData();
                      },
                      searchField: [
                        "Carrier",
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
        </Row>
      </Content>
    );
  }
}
