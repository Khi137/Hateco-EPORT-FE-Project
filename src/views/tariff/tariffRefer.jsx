import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import { Mcard, Mtable } from "../../components/BasicUI/BasicUI";
import { Col, Row } from "antd";
import { formatDateTime } from "../../utils/util";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";

const rowData = [
  {
    EffectiveDate: "2021-04-10T19:44:22.000Z",
    ExpirationDate: "2021-04-14T12:54:30.000Z",
    RoundHours: 'Nửa giờ',
    AdditionalHours: '10.5',
    PaymentType: 'M: Mua ngay',
    Carrier: "TCNU8698362",
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
