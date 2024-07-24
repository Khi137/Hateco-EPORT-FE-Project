import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import { Col, Row, Tooltip } from "antd";
import {
  Mbutton,
  Mcard,
  Mdatepicker,
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

function generateRandomOrderCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export default class EdoManagement extends Component {
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
    };
    this.submitButtonRef = createRef();

    this.rowData = [
      {
        OrderCode: "JDYT978H4Y",
        Status: "Delivered",
        BillOfLadingNumber: "BL123456",
        ContainerNumber: "C123456",
        OperatingCarrier: "Carrier X",
        ISOSize: "40ft",
        FE: "F",
        Direction: "North",
        IssueDate: "2021-04-10T19:44:22.000Z",
        ExpiryDate: "2021-04-14T12:54:30.000Z",
        Consignee: "John Doe",
        VesselName: "Vessel Y",
        ImportVoyage: "Voyage 1",
        ExportVoyage: "Voyage 2",
        POD: "Port A",
        FPOD: "Port B",
        EmptyReturnLocation: "Port C",
        FreeDays: "5",
        Remarks: "Handle with care",
        HouseBill: "HB78910",
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

    this.status = [
      { value: "Cont chưa tồn bãi", label: "Cont chưa tồn bãi" },
      { value: "Cont đã tồn bãi", label: "Cont đã tồn bãi" },
      { value: "Cont đã làm lệnh", label: "Cont đã làm lệnh" },
      { value: "Cont đã giao", label: "Cont đã giao" },
    ];

    this.columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "Status",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Trạng thái",
      },
      {
        columnId: "OrderCode",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Mã lệnh (EDO)",
      },
      {
        columnId: "BillOfLadingNumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số vận đơn",
      },
      {
        columnId: "ContainerNumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số Container",
      },
      {
        columnId: "OperatingCarrier",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Hãng khai thác",
      },
      {
        columnId: "ISOSize",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Kích cỡ ISO",
      },
      {
        columnId: "FE",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "F/E",
      },
      {
        columnId: "Direction",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Hướng",
      },
      {
        columnId: "IssueDate",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Ngày phát hành",
      },
      {
        columnId: "ExpiryDate",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Ngày hết hạn",
      },
      {
        columnId: "Consignee",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Chủ hàng",
      },
      {
        columnId: "VesselName",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Tên tàu",
      },
      {
        columnId: "ImportVoyage",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Chuyến nhập",
      },
      {
        columnId: "ExportVoyage",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Chuyến xuất",
      },
      {
        columnId: "POD",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "POD",
      },
      {
        columnId: "FPOD",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "FPOD",
      },
      {
        columnId: "EmptyReturnLocation",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Nơi trả rỗng",
      },
      {
        columnId: "FreeDays",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số ngày miễn",
      },
      {
        columnId: "Note",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Ghi chú",
      },
      {
        columnId: "HouseBill",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "HouseBill",
      },
    ];

    this.rowsFormat = (edo, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Status || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.OrderCode || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.BillOfLadingNumber || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.ContainerNumber || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.OperatingCarrier || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.ISOSize || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.FE || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Direction || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.IssueDate ? formatDateTime(edo?.IssueDate) : "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.ExpiryDate ? formatDateTime(edo?.ExpiryDate) : "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Consignee || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.VesselName || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.ImportVoyage || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.ExportVoyage || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.POD || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.FPOD || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.EmptyReturnLocation || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.FreeDays || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.Remarks || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: edo?.HouseBill || "",
        },
      ];
    };

    this.rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Trạng thái" },
      { type: "header", text: "Mã lệnh (EDO)" },
      { type: "header", text: "Số vận đơn" },
      { type: "header", text: "Số Container" },
      { type: "header", text: "Hãng khai thác" },
      { type: "header", text: "Kích cỡ ISO" },
      { type: "header", text: "F/E" },
      { type: "header", text: "Hướng" },
      { type: "header", text: "Ngày phát hành" },
      { type: "header", text: "Ngày hết hạn" },
      { type: "header", text: "Chủ hàng" },
      { type: "header", text: "Tên tàu" },
      { type: "header", text: "Chuyến nhập" },
      { type: "header", text: "Chuyến xuất" },
      { type: "header", text: "POD" },
      { type: "header", text: "FPOD" },
      { type: "header", text: "Nơi trả rỗng" },
      { type: "header", text: "Số ngày miễn" },
      { type: "header", text: "Ghi chú" },
      { type: "header", text: "HouseBill" },
    ];

    for (let index = 0; index < 20; index++) {
      const duplicatedData = { ...this.rowData[0] };
      duplicatedData.OrderCode = generateRandomOrderCode();
      this.rowData.push(duplicatedData);
    }
  }

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
      <Content className="flex_layout-8-16_container edoManagement_layout">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }}>
            <Mcard title={<span style={{ color: "white" }}>Quản lý EDO</span>}>
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
                    dataSource={{
                      label: "Hãng khai thác",
                      ref: this.submitButtonRef,
                      options: this.carrierOptions,
                    }}
                    onChangeValue={(value) => {}}
                  />
                </Row>
                <Winput
                  title={"Mã số EDO"}
                  tooltip={"Mã số EDO"}
                  onChange={(e) => console.log(e)}
                  checkError={(error) =>
                    this.setState((prevState) => ({
                      formData: {
                        ...prevState.formData,
                        edoNumberError: error,
                      },
                    }))
                  }
                  require={true}
                  className={`form_input_field`}
                  placeholder={"Mã số EDO"}
                  prefix={<UnorderedListOutlined />}
                  errorText={this.formData?.edoNumberError || true}
                />
                <Row gutter={[0, 12]}>
                  <Col span={24}>
                    <Winput
                      title={"Số vận đơn"}
                      tooltip={"Số vận đơn"}
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
                      placeholder={"Số vận đơn"}
                      prefix={<UnorderedListOutlined />}
                    />
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Row>
                        <Col>
                          Trạng thái<span>*</span>
                        </Col>
                        <Tooltip
                          placement="top"
                          title={"Trạng thái"}
                          className="item_tooltip"
                        >
                          <InfoCircleOutlined />
                        </Tooltip>
                      </Row>
                      <Mselect
                        key={this.state.carrier}
                        dataSource={{
                          label: this.state.carrier || "Tất cả",
                          ref: this.submitButtonRef,
                          options: this.status,
                        }}
                        onChangeValue={(value) => {}}
                      />
                    </Row>
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
                        textbutton: `Nạp dữ liệu`,
                        icon: "CloudDownloadOutlined",
                      }}
                      loading={this.state.isLoading}
                    />
                  </Col>
                </Row>
              </Col>
            </Mcard>
          </Col>
          <Col lg={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Mcard
              title={
                <span style={{ color: "white" }}>Thông tin quản lý EDO</span>
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
                        "OrderCode",
                        "OperatingCarrier",
                        "ContainerNumber",
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
