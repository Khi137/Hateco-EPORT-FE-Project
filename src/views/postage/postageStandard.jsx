import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import { Col, Row, Tooltip } from "antd";
import {
  Mcard,
  Mdatepicker,
  Mselect,
  Mtable,
  Winput,
} from "../../components/BasicUI";
import {
  InfoCircleOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

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
    PostageCode: "TCNU8698362",
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
    CVType: "B",
    CargoType: "A",
    Type: "Container",
    DomesticInternational: 'Domestic',
    MoneyType: 'USD',
    Full20: 'Y',
    Full40: 'Y',
    Full45: 'Y',
    Empty20: 'Y',
    Empty40: 'Y',
    Empty45: 'Y',
    NonCont: '1000',
    IncludeTax: '1000',
    VAT: '10%',
    Unit: 'Thousand',
    BookingType: true,
    BookingDate: "2021-04-06T10:35:25.000Z",
    Plan: 'Complete',
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

function generateRandomPostageCode() {
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
  duplicatedData.PostageCode = generateRandomPostageCode();
  rowData.push(duplicatedData);
}

export default class PostageStandard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        postageNumber: '',
        searchData: "",
        postageNumberError: true,
      },
      generalInformation: {},
      tableData: [],
      referenceNumber: '',
    };
    this.submitButtonRef = createRef();
    this.referenceNumberRef = createRef();
  }

  // handleInputChange = (e, dataForm) => {
  //   const { name, value } = e.target;
  //   this.setState((prevState) => ({
  //     [dataForm]: {
  //       ...prevState[dataForm],
  //       [name]: value,
  //     },
  //   }));
  //   return value;
  // };

  handleLoadData = () => {
    const postageNumberError = this.state.formData.postageNumberError;
    if (postageNumberError) {
      this.referenceNumberRef.current.handleCheckError();
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
            postageNumberError: false,
          },
          isLoading: false,
        }));
      }
    }, 1000);
  };

  render() {
    console.log("Current referenceNumber:", this.state.referenceNumber);

    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "PostageCode",
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
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: container?.PostageCode || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Description || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Direction || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.CargoType || "",
        },
        { type: "text", nonEditable: false, text: container?.CVType || "" },
        {
          type: "text",
          nonEditable: false,
          text: container?.Plan || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.TransportType || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Type || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.DomesticInternational || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.MoneyType || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Full20 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Full40 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Full45 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Empty20 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Empty40 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Empty45 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.NonCont || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.IncludeTax || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.VAT || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: container?.Unit || "",
        },
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
    ];

    return (
      <Content className="flex_layout-8-16_container tracking_layout">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>Cấu hình biểu cước chuẩn</span>
              }
            >
              <Col className="input_layout">
                <Row>
                  <Row>
                    <Col>
                      Mẫu biểu cước <span>*</span>
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
                      ref: 'samplePostage',
                      options: [
                        {
                          label: "01/01/2020-24/04/2021-NDV-BIEUCUOC2021",
                          value: "01/01/2020-24/04/2021-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/01/2020-27/04/2021-NDV-BIEUCUOC2021",
                          value: "01/01/2020-27/04/2021-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/01/2020-29/04/2021-NDV-BIEUCUOC2021",
                          value: "01/01/2020-29/04/2021-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/01/2020-30/04/2021-NDV-BIEUCUOC2021",
                          value: "01/01/2020-30/04/2021-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/01/2020-24/08/2024-NDV-BIEUCUOC2021",
                          value: "01/01/2020-24/08/2024-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/05/2021-31/12/2021-NDV-BIEUCUOC2021",
                          value: "01/05/2021-31/12/2021-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/05/2021-31/12/2022-NDV-BIEUCUOC2021",
                          value: "01/05/2021-31/12/2022-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/01/2023-07/12/2024-NDV-BIEUCUOC2021",
                          value: "01/01/2023-07/12/2024-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "01/05/2023-07/12/2024-NDV-BIEUCUOC2021",
                          value: "01/05/2023-07/12/2024-NDV-BIEUCUOC2021",
                        },
                        {
                          label: "30/05/2024-07/12/2024-NDV-BIEUCUOC2050",
                          value: "30/05/2024-07/12/2024-NDV-BIEUCUOC2050",
                        },
                      ],
                    }}
                    onChangeValue={(value) => {
                      console.log(value)
                      const referenceNumber = Object.values(value)
                      console.log(referenceNumber[0])
                      this.setState({ referenceNumber: referenceNumber[0].split('-').slice(2).join('-')});
                      // this.handleInputChange(value)
                    }}
                  />
                </Row>
                <Row justify={"space-between"}>
                  <Col>
                    <Row>Từ ngày</Row>
                    <Mdatepicker
                      dataSource={{
                        // value: formData.fromDate,
                        format: "YYYY-MM-DD HH:mm:ss",
                        // defaultValue: formData.fromDate,
                        id: "my-datepicker",
                        // label: 'Select Date',
                        // span: { xs: 24, sm: 12, md: 8 },
                        required: true,
                        lockbefore: true,
                        propReadonly: false,
                      }}
                    />
                  </Col>
                  <Col>
                    <Row>Đến ngày</Row>
                    <Mdatepicker
                      dataSource={{
                        // value: formData.toDate,
                        format: "YYYY-MM-DD HH:mm:ss",
                        // defaultValue: formData.toDate,
                        id: "my-datepicker",
                        // label: 'Select Date',
                        // span: { xs: 24, sm: 12, md: 8 },
                        required: true,
                        lockbefore: true,
                        propReadonly: false,
                        className: "date_input",
                      }}
                    />
                  </Col>
                </Row>
                <Winput
                    key={this.state.referenceNumber}
                    title={"Số tham chiếu"}
                    value={this.state.referenceNumber}
                    tooltip={"Số tham chiếu"}
                    onChange={(e) => console.log(e)}
                    // checkError={(error) =>
                    //   this.setState((prevState) => ({
                    //     formData: {
                    //       ...prevState.formData,
                    //       postageNumberError: error,
                    //     },
                    //   }))
                    // }
                    require={false}
                    name={"referenceNumber"}
                    className={`form_input_field`}
                    // prefix={item?.inputIcon}
                    placeholder={"Số tham chiếu"}
                    // errorText={formData?.postageNumberError || true}
                    // ref={this.referenceNumberRef}
                  />
              </Col>
            </Mcard>
          </Col>
          <Col lg={{ span: 16 }} sm={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>
                  Danh sách biểu cước chuẩn
                </span>
              }
              className="container_list"
            >
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
                  searchField: ["PostageCode", "Direction", "CargoType"],
                }}
              />
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}
