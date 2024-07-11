import React, { Component, createRef } from "react";
import { Col, Row } from "antd";
import { Mbutton, Mcard, Winput } from "../../components/BasicUI";
import { DatabaseOutlined, FieldNumberOutlined } from "@ant-design/icons";
import { formatDateTime } from "../../utils/util";
import { Content } from "antd/es/layout/layout";

const defaultData = [
  {
    Area: null,
    BLNo: "HLC",
    BargeExVoy: null,
    BargeImVoy: null,
    BargeKey: null,
    Bay: "14",
    Block: "KVP",
    BookingNo: "B",
    CallSign: null,
    CargoTypeCode: "MT",
    CargoTypeName: "Empty",
    Class: null,
    ClassCode: "2",
    ClassName: "Storage Empty",
    Commodity: null,
    ContainerCondition: null,
    ContainerConditionName: null,
    ContainerNo: "TCNU6715223",
    ContainerStatusCode: "S",
    ContainerStatusName: "Stacking",
    CreatedBy: "catos_ndv",
    CreatedTime: "2021-07-26T20:21:01.000Z",
    CusHold: true,
    DateIn: "2021-07-27T00:36:50.000Z",
    DateOut: null,
    DeliveryOrder: null,
    DraftNo: "NDV/2024/060000097",
    ETB: null,
    ETD: null,
    EirInNo: null,
    EirOutNo: "240613001489",
    FE: "E",
    FPOD: null,
    HousebillNo: null,
    ID_TOS: "0000000755214",
    InvoiceNo: null,
    IsLocalForeign: "F",
    IsReturnBack: false,
    IsSpecialWarning: false,
    IsTruckBarge: null,
    IsoSizetype: "45G0",
    JobModeCodeIn: "DS",
    JobModeCodeOut: "CAPR",
    JobModeNameIn: "NHẬP TÀU",
    JobModeNameOut: "CẤP RỖNG",
    LocalSizetype: "4500",
    MCWeight: 4000,
    MaxGrossWeight: null,
    MethodCodeIn: "V",
    MethodCodeOut: "BAI-XE",
    MethodNameIn: null,
    MethodNameOut: "BÃI <-> XE",
    ModifiedBy: "catos_ndv",
    ModifiedTime: "2021-07-28T15:23:03.000Z",
    Note: "DA CAP CHO BK 42982133 NGAY 27/06/2021 THAO 0969878190 ..",
    OogBack: null,
    OogFront: null,
    OogLeft: null,
    OogRight: null,
    OogTop: null,
    OperationCode: "HLC",
    OperationName: "CÔNG TY TNHH HAPAG- LLOYD (VIET NAM)",
    POD: "VNHPH",
    POL: "MYPKG",
    RemoocNo: null,
    Row: "05",
    Rowguid: "11F15127-E569-457A-859A-33395C70B91D",
    RowguidCntrDetails: "11F15127-E569-457A-859A-33395C70B91D",
    Sealno: null,
    Sealno1: null,
    Sealno2: null,
    ServiceNo: null,
    SpecialWarning: null,
    StuffNo: null,
    TareWeight: null,
    Temperature: null,
    TerHold: false,
    TerHoldReason: null,
    TerminalCode: null,
    Tier: "2",
    TransitCode: null,
    TransitPort: null,
    TruckNo: null,
    Unno: null,
    UnstuffNo: null,
    VETB: "2017-02-01T00:00:00.000Z",
    VETD: "2017-02-01T00:00:00.000Z",
    VExVoy: null,
    VGM: true,
    VImVoy: null,
    Vent: null,
    VentUnit: null,
    VesselExVoy: null,
    VesselImVoy: null,
    VesselKey: "EMTY",
    VesselName: "Storage Empty",
    XuatNeo: null,
    XuatPhao: null,
  },
  {
    Rowguid: "B75F4063-11ED-4635-BF74-E3EED8BA2677",
    TerminalCode: null,
    VesselKey: "V.170S",
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
    Commodity: "XE MAY",
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
    MCWeight: 8684,
    TareWeight: null,
    Sealno: null,
    Sealno1: null,
    Sealno2: "8256247",
    POL: "VNHPH",
    POD: "VNCME",
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
    Note: "975156655",
    ID_TOS: "0000000671104",
    CreatedBy: "catos_ndv",
    CreatedTime: "2021-04-10T19:46:00.000Z",
    ModifiedBy: "catos_ndv",
    ModifiedTime: "2021-04-14T12:56:27.000Z",
    MaxGrossWeight: null,
    XuatNeo: null,
    XuatPhao: null,
    RowguidCntrDetails: "B75F4063-11ED-4635-BF74-E3EED8BA2677",
    CargoTypeName: "General",
    VesselName: "GREEN PACIFIC",
    CallSign: null,
    ContainerConditionName: null,
    JobModeNameIn: "HẠ BÃI",
    JobModeNameOut: "LẤY NGUYÊN",
    VETB: "2021-04-13T17:35:22.000Z",
    VETD: "2021-04-14T17:30:27.000Z",
    VImVoy: "170S",
    VExVoy: "170S",
    ClassName: "Export",
    ContainerStatusName: "Delivered",
    OperationName: "CÔNG TY TNHH HAPAG- LLOYD  (VIET NAM)",
    MethodNameIn: null,
    MethodNameOut: null,
  },
  {
    Rowguid: "78865279-FDE1-4A31-A1EC-47136C6DC451",
    TerminalCode: null,
    VesselKey: "EMTY",
    VesselImVoy: null,
    VesselExVoy: null,
    ETB: null,
    ETD: null,
    BargeKey: null,
    BargeImVoy: null,
    BargeExVoy: null,
    DeliveryOrder: null,
    BLNo: "GMD21CMEHPH0060",
    BookingNo: "B",
    HousebillNo: null,
    ContainerNo: "TCNU8698362",
    ClassCode: "2",
    OperationCode: "HLC",
    FE: "E",
    ContainerStatusCode: "S",
    CargoTypeCode: "MT",
    Commodity: "EMPTY CONTAINER",
    LocalSizetype: "4500",
    IsoSizetype: "45G0",
    IsLocalForeign: "L",
    JobModeCodeIn: "HBAI",
    MethodCodeIn: "V",
    DateIn: "2021-04-05T08:27:31.000Z",
    DateOut: null,
    JobModeCodeOut: "CAPR",
    MethodCodeOut: "BAI-XE",
    EirInNo: null,
    EirOutNo: "240613001489",
    StuffNo: null,
    UnstuffNo: null,
    ServiceNo: null,
    DraftNo: "NDV/2024/060000097",
    InvoiceNo: null,
    Block: "KT",
    Bay: "06",
    Row: "01",
    Tier: "2",
    Area: null,
    VGM: false,
    MCWeight: 4500,
    TareWeight: null,
    Sealno: null,
    Sealno1: null,
    Sealno2: null,
    POL: "VNCME",
    POD: "VNHPH",
    FPOD: null,
    TransitCode: null,
    TransitPort: "VNHPH",
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
    ContainerCondition: "B",
    IsTruckBarge: null,
    TruckNo: null,
    RemoocNo: null,
    Note: "da cap cho booking 50940502,10h/06/04/2021,het han keo vo 10/08/04/2021,da cap chi mail HLC,chuong 0975156655\r\nSÀN BẨN ĐẤT +RÁC ,VSN.",
    ID_TOS: "0000000664293",
    CreatedBy: "catos_ndv",
    CreatedTime: "2021-04-04T21:18:00.000Z",
    ModifiedBy: "catos_ndv",
    ModifiedTime: "2021-04-07T22:57:03.000Z",
    MaxGrossWeight: null,
    XuatNeo: null,
    XuatPhao: null,
    RowguidCntrDetails: "78865279-FDE1-4A31-A1EC-47136C6DC451",
    CargoTypeName: "Empty",
    VesselName: "Storage Empty",
    CallSign: null,
    ContainerConditionName: "GRADE B",
    JobModeNameIn: "HẠ BÃI",
    JobModeNameOut: "CẤP RỖNG",
    VETB: "2017-02-01T00:00:00.000Z",
    VETD: "2017-02-01T00:00:00.000Z",
    VImVoy: null,
    VExVoy: null,
    ClassName: "Storage Empty",
    ContainerStatusName: "Stacking",
    OperationName: "CÔNG TY TNHH HAPAG- LLOYD  (VIET NAM)",
    MethodNameIn: null,
    MethodNameOut: "BÃI <-> XE",
  },
];

class TrackingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        containerNumber: "",
        containerNumberError: true,
        containerIndex: 1,
        containerPrevIndex: 1,
      },
      containerList: [],
    };
    this.submitButtonRef = createRef();
    this.containerNumberRef = createRef();
  }

  checkContainerNumberError = (value) => {
    switch (true) {
      case value === "":
        return "Số container không được để trống";
      default:
        return false;
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleChangeIndex = (e, regex) => {
    const { name, value } = e.target;
    // console.log("value ", value);

    if (value === "") {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [name]: value,
        },
      }));
      return value;
    }

    if (regex && !regex.test(value)) {
      console.error(`Value does not match the regex: ${regex}`);
      return;
    } else {
      let updatedValue = Number(value);
      switch (true) {
        case updatedValue === "":
          updatedValue = "";
          break;
        case updatedValue > this.state.containerList.length:
          updatedValue = this.state.containerList.length;
          break;
        case updatedValue <= 0:
          updatedValue = 1;
          break;

        default:
          break;
      }

      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [name]: updatedValue,
        },
      }));
    }
    return value;
  };

  handleLoadData = () => {
    const containerNumberError = this.state.formData.containerNumberError;
    if (containerNumberError) {
      this.containerNumberRef.current.handleCheckError();
      return;
    }
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      if (this.submitButtonRef.current) {
        this.submitButtonRef.current.reset();
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            containerNumberError: false,
          },
          containerList: defaultData,
        }));
      }
    }, 1000);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.formData.containerIndex !== this.state.formData.containerIndex
    ) {
      if (prevState.containerList[this.state.formData.containerIndex - 1]) {
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            containerPrevIndex: this.state.formData.containerIndex,
          },
        }));
      }
    }
  }

  handleSetIndex = (type) => {
    let updatedValue = Number(
      typeof this.state.formData.containerIndex !== "string"
        ? this.state.formData.containerIndex
        : this.state.formData.containerPrevIndex
    );

    switch (type) {
      case "next":
        if (this.state.containerList[updatedValue]) {
          updatedValue += 1;
        }
        break;
      case "back":
        if (this.state.containerList[updatedValue - 1]) {
          updatedValue -= 1;
        }
        break;

      default:
        break;
    }
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        containerIndex: updatedValue,
      },
    }));
  };

  getDataForm = (container) => {
    const dataList = [
      { title: "Hãng khai thác", value: container?.OperationCode, },
      { title: "Tàu / Chuyến", value: container?.ClassName, },
      { title: "Kích cỡ ISO", value: container?.IsoSizetype, },
      { title: "ETB/ETD", value: formatDateTime(container?.VETB) + " / " + formatDateTime(container?.VETD), },
      { title: "Full/Empty", value: container?.CargoTypeName, },
      { title: "Booking No", value: container?.BookingNo, },
      { title: "Hướng", value: container?.ClassName, },
      { title: "BL No", value: container?.BLNo, },
      { title: "Trạng thái", value: container?.ContainerStatusName, },
      { title: "Ngày vào bãi", value: formatDateTime(container?.DateIn), },
      { title: "Vị trí", value: container ? container?.Block + "-" + container?.Bay + "-" + container?.Row + "-" + container?.Tier : "", className: "location", },
      { title: "Ngày ra bãi", value: formatDateTime(container?.DateOut), },
      { title: "Trọng lượng", value: container?.MCWeight, },
      { title: "Phương án vào", value: container?.JobModeNameIn, },
      { title: "Loại hàng", value: container?.CargoTypeName, },
      { title: "Phương án ra", value: container?.JobModeNameOut, },
      { title: "Số chì", value: container?.Sealno, },
      { title: "POD", value: container?.POD, },
      { title: "Nội / Ngoại", value: container?.OperationCode, },
      { title: "FPOD", value: container?.FPOD, },
      { title: "Nhiệt độ", value: "", },
      { title: "Class / Unno", value: "/", },
      { title: "Thanh lý hải quan", value: container?.VGM ? "Đã Thanh Lý" : "", className: "liquidation", },
      { title: "Quá khổ", value: "////", },
    ];
    return dataList;
  };

  renderTableColumn = ({ item, index }) => {
    return (
      <Row className="data_table_row" key={index}>
        <Col className="data_table_row_column left_column">
          {item.title}
        </Col>
        <Col className={`data_table_row_column ${item.className}`}>
          {item.value}
        </Col>
      </Row>
    )
  }

  renderDataTable = (container) => {
    const tableIndex = typeof this.state.formData.containerIndex !== "string" ? this.state.formData.containerIndex - 1 : this.state.formData.containerPrevIndex - 1
    const dataList = this.getDataForm(container[tableIndex])
    return (
      <Row className="data_table">
        <Col className="data_table_column">
          {
            dataList?.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  this.renderTableColumn({
                    item: item,
                    index: index
                  })
                )
              }
            })
          }
        </Col>
        <Col className="data_table_column">
          {
            dataList?.map((item, index) => {
              if (index % 2 === 1) {
                return (
                  this.renderTableColumn({
                    item: item,
                    index: index
                  })
                )
              }
            })
          }
        </Col>
      </Row >
    )
  }

  render() {
    const { containerList } = this.state;
    return (
      <Content className="one_page_layout_container">
        <Row gutter={[12, 12]}>
          <Col span={24} >
            <Mcard
              title={<span style={{ color: 'white' }}>Tra cứu số container</span>}
            >
              <Row className="input_container hafl">
                <Winput
                  title={"Số container"}
                  tooltip={"Nhập số container"}
                  onChange={(e) => this.handleInputChange(e)}
                  checkError={(error) =>
                    this.setState((prevState) => ({
                      formData: {
                        ...prevState.formData,
                        containerNumberError: error,
                      },
                    }))
                  }
                  require={true}
                  name={"containerNumber"}
                  className={`form_input_field`}
                  prefix={<FieldNumberOutlined />}
                  placeholder={"Nhập số container"}
                  value={this.state.formData.containerNumber}
                  // onChange={(e) => this.handleInputChange(e)}
                  errorText={this.state.formData?.containerNumberError || true}
                  ref={this.containerNumberRef}
                />
              </Row>
              <Mbutton
                color=""
                className="m_button third hafl"
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
              <Col
                className={`table_content ${containerList.length !== 0 && "table_exist_data"
                  }`}
              >
                {containerList.length === 0 ? (
                  <Col className="no_data">
                    <Row justify={"center"}>
                      <DatabaseOutlined className="no_data_icon" />
                    </Row>
                    <Row justify={"center"}>Nhập số container để nạp dữ liệu container...</Row>
                  </Col>
                ) : (
                  <Col className="have_data">

                    <Row className="table_index_container">
                      <Mbutton
                        className="back_index_button m_button outlet"
                        dataSource={{
                          textbutton: "<",
                        }}
                        onClick={() => this.handleSetIndex("back")}
                      />
                      {/* <Winput
                                            name={"containerIndex"}
                                            className={`form_input_field table_index_input`}
                                            value={this.state.formData.containerIndex}
                                            onChange={(e) => this.handleChangeIndex(e, /^[0-9\-\+]{0,3}$/)}
                                        /> */}
                      <input
                        name={"containerIndex"}
                        className={`form_input_field table_index_input`}
                        value={this.state.formData.containerIndex}
                        onChange={(e) =>
                          this.handleChangeIndex(e, /^[0-9\-\+]{0,3}$/)
                        }
                      />
                      <Col>{" / " + this.state.containerList.length}</Col>
                      <Mbutton
                        className="next_index_button m_button outlet"
                        dataSource={{
                          textbutton: ">",
                        }}
                        onClick={() => this.handleSetIndex("next")}
                      />
                    </Row>
                    {this.renderDataTable(containerList)}
                  </Col>
                )}
              </Col>
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default TrackingContainer;
