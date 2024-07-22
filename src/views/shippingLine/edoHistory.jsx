import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import { Col, Row, Tooltip } from "antd";
import {
  Mbutton,
  Mcard,
  Mdatepicker,
  Mradio,
  Mselect,
  Mtable,
  Winput,
} from "../../components/BasicUI/BasicUI";
import {
  DatabaseOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { formatDateTime } from "../../utils/util";

function generateRandomDONumber() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export default class EdoHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        edoNumberError: true,
        fromDate: moment(new Date()).startOf("day").toDate(),
        toDate: moment(new Date()).endOf("day").toDate(),
      },
      generalInformation: {},
      tableData: [],
      isLoading: false,
      radioValue: "option1",
    };
    this.submitButtonRef = createRef();

    this.rowData = [
      {
        DONumber: "DO123456",
        BLNumber: "BL789012",
        Carrier: "Viettel",
        Function: "Update",
        SentData: "Data1",
        ReceivedData: "Data2",
        ModifiedData: "Data3",
        Status: "Success",
        IPAddress: "192.168.1.1",
        Sender: "John Doe",
        SentDate: "2021-04-10T19:44:22.000Z",
      },
    ];

    this.carrierOptions = [
      { value: "ANL", label: "ANL SINGAPORE PTE LTD (ANL)" },
      { value: "APL", label: "APL CO. PTE. LTD" },
      {
        value: "APLV",
        label: "AMERICAN PRESIDENT LINES, LLC C/O CMA-CGM VIET NAM JSC",
      },
      { value: "CMA", label: "CMA CGM" },
      {
        value: "CNC",
        label: "APL CO. PTE LTD - CNC, AS A BRAND OF APL CO. PTE LTD",
      },
      { value: "YML", label: "YANG MING MARINE TRANSPORT CORP" },
      { value: "MSC", label: "MSC" },
      {
        value: "EMC",
        label: "CÔNG TY TNHH ĐẠI LÝ VẬN TẢI EVERGREEN (VIỆT NAM)",
      },
      { value: "OCL", label: "OOCL" },
      { value: "OOL", label: "OOCL" },
    ];

    this.function = [
      {
        label: "Insert",
        value: "Insert",
      },
      {
        label: "Update",
        value: "Update",
      },
      {
        label: "Delete",
        value: "Delete",
      },
    ];

    this.status = [
      {
        label: "Thành công",
        value: "TC",
      },
      {
        label: "Thất bại",
        value: "TB",
      },
    ];

    this.columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "DONumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số DO",
      },
      {
        columnId: "BLNumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số BL",
      },
      {
        columnId: "Carrier",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Hãng khai thác",
      },
      {
        columnId: "Function",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Chức năng",
      },
      {
        columnId: "SentData",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Dữ liệu gửi",
      },
      {
        columnId: "ReceivedData",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Dữ liệu nhận",
      },
      {
        columnId: "ModifiedData",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Dữ liệu thay đổi",
      },
      {
        columnId: "Status",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tình trạng",
      },
      {
        columnId: "IPAddress",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "IP",
      },
      {
        columnId: "Sender",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Người gửi",
      },
      {
        columnId: "SentDate",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Ngày gửi",
      },
    ];

    this.rowsFormat = (edo, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: edo?.DONumber || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.BLNumber || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Carrier || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Function || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.SentData || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.ReceivedData || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.ModifiedData || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Status || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.IPAddress || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Sender || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.SentDate ? formatDateTime(edo?.SentDate) : "",
        },
      ];
    };

    this.rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Số DO" },
      { type: "header", text: "Số BL" },
      { type: "header", text: "Hãng khai thác" },
      { type: "header", text: "Chức năng" },
      { type: "header", text: "Dữ liệu gửi" },
      { type: "header", text: "Dữ liệu nhận" },
      { type: "header", text: "Dữ liệu thay đổi" },
      { type: "header", text: "Tình trạng" },
      { type: "header", text: "IP" },
      { type: "header", text: "Người gửi" },
      { type: "header", text: "Ngày gửi" },
    ];

    for (let index = 0; index < 20; index++) {
      const duplicatedData = { ...this.rowData[0] };
      duplicatedData.DONumber = generateRandomDONumber();
      this.rowData.push(duplicatedData);
    }
  }

  handleRadioChange = (returnValue) => {
    this.setState({
      radioValue: returnValue,
    });
  };

  handleLoadData = () => {
    this.setState({ isLoading: true });
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      this.setState((prevState) => ({
        generalInformation: this.rowData[0] ? this.rowData[0] : {},
        tableData: this.rowData,
        formData: {
          ...prevState.formData,
          edoNumberError: false,
        },
        isLoading: false,
      }));
    }, 1000);
  };

  render() {
    return (
      <Content className="flex_layout-8-16_container edoHistory_layout">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }}>
            <Mcard
              title={<span style={{ color: "white" }}>Lịch sử API-EDO</span>}
            >
              <Col className="input_layout">
                <Row justify={"space-between"}>
                  <Col>
                    <Row>Từ ngày</Row>
                    <Mdatepicker
                      dataSource={{
                        value: this.state.formData.fromDate,
                        format: "YYYY-MM-DD HH:mm:ss",
                        defaultValue: this.state.formData.fromDate,
                        id: "my-datepicker",
                        span: { xs: 24, sm: 24 },
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
                        span: { xs: 24, sm: 24 },
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
                      Tìm theo hãng khai thác<span>*</span>
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
                    dataSource={{
                      label: "Hãng khai thác",
                      ref: this.submitButtonRef,
                      options: this.carrierOptions,
                    }}
                    onChangeValue={(value) => {}}
                  />
                </Row>
                <Row>
                  <Row>
                    <Col>
                      Tìm theo chức năng<span>*</span>
                    </Col>
                    <Tooltip
                      placement="top"
                      title={"Chức năng"}
                      className="item_tooltip"
                    >
                      <InfoCircleOutlined />
                    </Tooltip>
                  </Row>
                  <Mselect
                    dataSource={{
                      ref: this.submitButtonRef,
                      options: this.function,
                    }}
                    onChangeValue={(value) => {}}
                  />
                </Row>
                <Row>
                  <Row>
                    <Col>
                      Tình trạng<span>*</span>
                    </Col>
                    <Tooltip
                      placement="top"
                      title={"Tình trạng"}
                      className="item_tooltip"
                    >
                      <InfoCircleOutlined />
                    </Tooltip>
                  </Row>
                  <Mselect
                    dataSource={{
                      ref: this.submitButtonRef,
                      options: this.status,
                    }}
                    onChangeValue={(value) => {}}
                  />
                </Row>
                <Row gutter={[0, 12]}>
                  <Col span={24}>
                    <Winput
                      title={"Tìm theo DO"}
                      tooltip={"Tìm theo DO"}
                      onChange={(e) => console.log(e)}
                      checkError={(error) =>
                        this.setState((prevState) => ({
                          formData: {
                            ...prevState.formData,
                            edoNumberError: error,
                          },
                        }))
                      }
                      require={false}
                      className={`form_input_field`}
                      placeholder={"Tìm theo DO"}
                      prefix={<UnorderedListOutlined />}
                    />
                  </Col>
                  <Col span={24}>
                    <Winput
                      title={"Tìm theo BLNO"}
                      tooltip={"Tìm theo BLNO"}
                      onChange={(e) => console.log(e)}
                      checkError={(error) =>
                        this.setState((prevState) => ({
                          formData: {
                            ...prevState.formData,
                            edoNumberError: error,
                          },
                        }))
                      }
                      require={false}
                      className={`form_input_field`}
                      placeholder={"Tìm theo BLNO"}
                      prefix={<UnorderedListOutlined />}
                    />
                  </Col>
                  <Col span={24}>
                    <Winput
                      title={"Tìm trong dữ liệu gửi"}
                      tooltip={"Tìm trong dữ liệu gửi"}
                      onChange={(e) => console.log(e)}
                      checkError={(error) =>
                        this.setState((prevState) => ({
                          formData: {
                            ...prevState.formData,
                            edoNumberError: error,
                          },
                        }))
                      }
                      require={false}
                      className={`form_input_field`}
                      placeholder={"Tìm trong dữ liệu gửi"}
                      prefix={<UnorderedListOutlined />}
                    />
                  </Col>
                  <Col span={24}>
                    <Winput
                      title={"Tìm trong dữ liệu thay đổi"}
                      tooltip={"Tìm trong dữ liệu thay đổi"}
                      onChange={(e) => console.log(e)}
                      checkError={(error) =>
                        this.setState((prevState) => ({
                          formData: {
                            ...prevState.formData,
                            edoNumberError: error,
                          },
                        }))
                      }
                      require={false}
                      className={`form_input_field`}
                      placeholder={"Tìm trong dữ liệu thay đổi"}
                      prefix={<UnorderedListOutlined />}
                    />
                  </Col>
                  <Col span={24}>
                    <Mradio
                      dataSource={{
                        value: this.state.radioValue,
                        label: "Select an option",
                        options: [
                          { label: "EDI-SFTP", value: "option1" },
                          { label: "API-EDO", value: "option2" },
                        ],
                        radioStyle: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          flexWrap: "nowrap",
                        },
                      }}
                      onChangeValue={this.handleRadioChange}
                    />
                  </Col>
                  <Col span={24}>
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
                        textbutton: `Truy vấn`,
                        icon: "CloudDownloadOutlined",
                      }}
                      loading={this.state.isLoading}
                    />
                  </Col>
                </Row>
              </Col>
            </Mcard>
          </Col>
          <Col lg={{ span: 16 }} sm={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>Thông tin API - EDO</span>
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
                      Nhập thông tin để hiển thị dữ liệu...
                    </Row>
                  </Col>
                ) : (
                  <Mtable
                    key={this.state.tableData}
                    config={{
                      defaultData: this.state.tableData,
                      columnsFormat: this.columnsFormat,
                      rowsFormat: this.rowsFormat,
                      rowsHeader: this.rowsHeader,
                      reorderRow: true,
                    }}
                    functionRequire={{
                      exportExel: true,
                      searchField: [
                        "DONumber",
                        "BLNumber",
                        "Carrier",
                      ],
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
