import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import { Col, Row, Tooltip } from "antd";
import {
  Mcard,
  Mdatepicker,
  Mselect,
  Mtable,
  Winput,
} from "../../components/BasicUI/BasicUI";
import { DatabaseOutlined, InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import moment from "moment";

const rowData = [
  {
    TariffCode: "TCNU8698362",
    Description: "HLC",
    Direction: "North",
    DateIn: "2021-04-10T19:44:22.000Z",
    DateOut: "2021-04-14T12:54:30.000Z",
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
    Plan: 'A'
  },
];

const tariffOptions = [
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
]

function generateRandomTariffCode() {
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
  duplicatedData.TariffCode = generateRandomTariffCode();
  rowData.push(duplicatedData);
}
export default class TariffStandard extends Component {
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
      referenceNumber: "",
    };
    this.submitButtonRef = createRef();
    this.referenceNumberRef = createRef();
  }

  handleLoadData = (value) => {
    const referenceNumbers = Object.values(value)[0].split("-").slice(2).join("-");
    
    this.setState({ isLoading: true });
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      this.setState((prevState) => ({
        generalInformation: rowData[0] ? rowData[0] : {},
        tableData: rowData,
        referenceNumber: referenceNumbers,
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
          type: "text",
          nonEditable: false,
          text: tariff?.IncludeTax || "",
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
      <Content className="flex_layout-8-16_container tariff_layout">
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
                      ref: this.submitButtonRef,
                      options: tariffOptions
                    }}
                    onChangeValue={(value) => {
                      this.handleLoadData(value)
                    }}
                  />
                </Row>
                <Row justify={"space-between"}>
                  <Col>
                    <Row>Từ ngày</Row>
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
                    <Row>Đến ngày</Row>
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
                <Winput
                  key={this.state.referenceNumber}
                  title={"Số tham chiếu"}
                  value={this.state.referenceNumber}
                  tooltip={"Số tham chiếu"}
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
                  name={"referenceNumber"}
                  className={`form_input_field`}
                  placeholder={"Số tham chiếu"}
                  ref={this.referenceNumberRef}
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
                      saveData: () => { this.saveData() },
                      searchField: ["TariffCode", "Direction", "CargoType"],
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
        </Row>
      </Content>
    );
  }
}
