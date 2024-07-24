import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import {
  Mbutton,
  Mcard,
  Mcheckbox,
  Mdatepicker,
  Mdivider,
  Mmultiswitch,
  Mradio,
  Mselect,
  Mtable,
  Winput,
} from "../../components/BasicUI/BasicUI";
import moment from "moment";
import { formatDateTime } from "../../utils/util";
import { Col, Modal, Row, Tooltip } from "antd";
import {
  AccountBookOutlined,
  CloseOutlined,
  DatabaseOutlined,
  DownloadOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

function generateRandomSize() {
  const characters = "SML";
  let result = "";
  const charactersLength = characters.length;
  result = characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

function generateRandomBookingNumber() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default class ManagerBooking extends Component {
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
      tableDataGoods: [],
      isLoading: false,
      radioValue: "option1",
      activeItem: "tracuu",
      selectedValues: [1, 2, 3, 4, 5],
      modalVisible: false,
      checkboxValue: false,
      carrierValue: null, // Value for carrier selection
      sizeOptions: [],
    };
    this.submitButtonRef = createRef();

    this.rowData = [
      {
        Status: "Pending",
        Adjustment: "Adjust123",
        BookingType: "TypeA",
        BookingNumber: "BN001",
        RegistrationDate: "2023-05-10T14:30:00.000Z",
        ExpiryDate: "2023-06-10T14:30:00.000Z",
        Carrier: "CarrierName",
        Size: "40ft",
        ISOSize: "ISO1234",
        Quantity: "100",
        Issued: "Yes",
        Consignee: "ConsigneeName",
        Note: "This is a note.",
        ContainerNumber: "C123456",
        VesselName: "VesselA",
        ImportVoyage: "IV123",
        ExportVoyage: "EV123",
        POL: "POLPort",
        POD: "PODPort",
        FPOD: "FPODPort",
        Temperature: "25°C",
        Ventilation: "Open",
        VentilationUnit: "CU",
        Class: "ClassA",
        UNNumber: "UN1234",
        OOGTOP: "10cm",
        OOGLEFT: "20cm",
        OOGRIGHT: "30cm",
        OOGBACK: "40cm",
        OOGFRONT: "50cm",
        Humidity: "60%",
        O2: "21%",
        CO2: "0.04%",
      },
    ];

    this.rowDataGoods = [
      {
        Size: "L",
        Quantity: "Large",
        Note: "Fragile Items",
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

    this.sizeOptions = [
      { label: "25G0", value: "25G0" },
      { label: "22G0", value: "22G0" },
      { label: "22R0", value: "22G0" },
      { label: "22T0", value: "22T0" },
      { label: "22U0", value: "22U0" },
    ];

    this.polOptions = [
      { value: "CKAIT", label: "CKAIT:Aitutaki" },
      { value: "CKAIU", label: "CKAIU:Atiu" },
      { value: "CKARU", label: "CKARU:Arutunga" },
      { value: "CKMGS", label: "CKMGS:Mangaia" },
      { value: "CKMOI", label: "CKMOI:Mitiaro" },
      { value: "CKRAR", label: "CKRAR:Raroton" },
      { value: "CNAIN", label: "CNAIN:Huaiyin" },
      { value: "CNANQ", label: "CNANQ:Anqi:u" },
    ];

    this.columnsFormat = [
      {
        columnId: "Status",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Trạng thái",
      },
      {
        columnId: "Adjustment",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Điều chỉnh",
      },
      {
        columnId: "BookingType",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Loại Booking",
      },
      {
        columnId: "BookingNumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số booking",
      },
      {
        columnId: "RegistrationDate",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Ngày đăng ký",
      },
      {
        columnId: "ExpiryDate",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Ngày hết hạn",
      },
      {
        columnId: "Carrier",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Hãng KT",
      },
      {
        columnId: "Size",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Kích cỡ",
      },
      {
        columnId: "ISOSize",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Kích cỡ ISO",
      },
      {
        columnId: "Quantity",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số lượng",
      },
      {
        columnId: "Issued",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Đã cấp",
      },
      {
        columnId: "Consignee",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Chủ hàng",
      },
      {
        columnId: "Note",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Ghi chú",
      },
      {
        columnId: "ContainerNumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Số container",
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
        columnId: "POL",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Cảng xếp (POL)",
      },
      {
        columnId: "POD",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Cảng dỡ (POD)",
      },
      {
        columnId: "FPOD",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Cảng đích (FPOD)",
      },
      {
        columnId: "Temperature",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Nhiệt độ",
      },
      {
        columnId: "Ventilation",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Thông gió",
      },
      {
        columnId: "VentilationUnit",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "ĐV thông gió",
      },
      {
        columnId: "Class",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Class",
      },
      {
        columnId: "UNNumber",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "UNNo",
      },
      {
        columnId: "OOGTOP",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "OOG TOP",
      },
      {
        columnId: "OOGLEFT",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "OOG LEFT",
      },
      {
        columnId: "OOGRIGHT",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "OOG RIGHT",
      },
      {
        columnId: "OOGBACK",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "OOG BACK",
      },
      {
        columnId: "OOGFRONT",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "OOG FRONT",
      },
      {
        columnId: "Humidity",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Độ ẩm",
      },
      {
        columnId: "O2",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "O2",
      },
      {
        columnId: "CO2",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "CO2",
      },
    ];

    this.columnsFormatGoods = [
      {
        columnId: "Size",
        width: 160,
        resizable: true,
        reorderable: true,
        header: "Kích cỡ",
      },
      {
        columnId: "Quantity",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Số lượng",
      },
      {
        columnId: "Note",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Ghi chú",
      },
    ];

    this.rowsFormat = (booking, index) => {
      return [
        {
          type: "text",
          nonEditable: false,
          text: booking?.Status || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Adjustment || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.BookingType || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.BookingNumber || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.RegistrationDate
            ? formatDateTime(booking?.RegistrationDate)
            : "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.ExpiryDate ? formatDateTime(booking?.ExpiryDate) : "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Carrier || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Size || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.ISOSize || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Quantity || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Issued || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Consignee || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Note || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.ContainerNumber || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.VesselName || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.ImportVoyage || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.ExportVoyage || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.POL || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.POD || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.FPOD || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Temperature || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Ventilation || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.VentilationUnit || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Class || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.UNNumber || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.OOGTOP || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.OOGLEFT || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.OOGRIGHT || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.OOGBACK || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.OOGFRONT || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Humidity || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.O2 || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.CO2 || "",
        },
      ];
    };

    this.rowsFormatGoods = (booking, index) => {
      return [
        {
          type: "text",
          nonEditable: false,
          text: booking?.Size || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Quantity || "",
        },
        {
          type: "text",
          nonEditable: false,
          text: booking?.Note || "",
        },
      ];
    };

    this.rowsHeader = [
      { type: "header", text: "Trạng thái" },
      { type: "header", text: "Điều chỉnh" },
      { type: "header", text: "Loại Booking" },
      { type: "header", text: "Số booking" },
      { type: "header", text: "Ngày đăng ký" },
      { type: "header", text: "Ngày hết hạn" },
      { type: "header", text: "Hãng KT" },
      { type: "header", text: "Kích cỡ" },
      { type: "header", text: "Kích cỡ ISO" },
      { type: "header", text: "Số lượng" },
      { type: "header", text: "Đã cấp" },
      { type: "header", text: "Chủ hàng" },
      { type: "header", text: "Ghi chú" },
      { type: "header", text: "Số container" },
      { type: "header", text: "Tên tàu" },
      { type: "header", text: "Chuyến nhập" },
      { type: "header", text: "Chuyến xuất" },
      { type: "header", text: "Cảng xếp (POL)" },
      { type: "header", text: "Cảng dỡ (POD)" },
      { type: "header", text: "Cảng đích (FPOD)" },
      { type: "header", text: "Nhiệt độ" },
      { type: "header", text: "Thông gió" },
      { type: "header", text: "ĐV thông gió" },
      { type: "header", text: "Class" },
      { type: "header", text: "UNNo" },
      { type: "header", text: "OOG TOP" },
      { type: "header", text: "OOG LEFT" },
      { type: "header", text: "OOG RIGHT" },
      { type: "header", text: "OOG BACK" },
      { type: "header", text: "OOG FRONT" },
      { type: "header", text: "Độ ẩm" },
      { type: "header", text: "O2" },
      { type: "header", text: "CO2" },
    ];

    this.rowsHeaderGoods = [
      { type: "header", text: "Kích cỡ" },
      { type: "header", text: "Số Lượng" },
      { type: "header", text: "Ghi chú" },
    ];

    this.checkboxOptions = [
      { key: "1", label: "Chưa cấp" },
      { key: "2", label: "Đã cấp hết" },
      { key: "3", label: "Hết hạn" },
      { key: "4", label: "Đã hủy" },
      { key: "5", label: "Đang cấp" },
    ];

    this.switchOptions = [
      { ref: "tracuu", label: "Tra cứu" },
      { ref: "khongchidinh", label: "Không chỉ định" },
      { ref: "chidinh", label: "Chỉ định" },
    ];

    for (let index = 0; index < 4; index++) {
      const duplicatedDataGoods = { ...this.rowDataGoods[0] };
      duplicatedDataGoods.Size = generateRandomSize();
      this.rowDataGoods.push(duplicatedDataGoods);
    }

    for (let index = 0; index < 20; index++) {
      const duplicatedData = { ...this.rowData[0] };
      duplicatedData.BookingNumber = generateRandomBookingNumber();
      this.rowData.push(duplicatedData);
    }
  }

  showModal = () => {
    this.setState({ modalVisible: true });
    this.handleLoadDataGoods();
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  handleRadioChange = (returnValue) => {
    this.setState({
      radioValue: returnValue,
    });
  };

  handleSwitchChange = (value) => {
    this.setState({ activeItem: value });
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

  handleLoadDataGoods = () => {
    this.setState({ isLoading: true });
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      this.setState((prevState) => ({
        generalInformation: this.rowDataGoods[0] ? this.rowDataGoods[0] : {},
        tableDataGoods: this.rowDataGoods,
        formData: {
          ...prevState.formData,
          edoNumberError: false,
        },
        isLoading: false,
      }));
    }, 1000);
  };

  handleCheckboxChange = (returnValue) => {
    this.setState((prevState) => ({
      selectedValues: {
        ...prevState.selectedValues,
        [returnValue.key]: returnValue.checked,
      },
    }));
  };

  handleCheckboxChangeModal = (returnValue) => {
    this.setState({
      checkboxValue: returnValue.checked,
    });
  };

  handleCarrierChange = (value) => {
    const values = Object.values(value)[0]
    this.setState({
      carrierValue: values,
      sizeOptions: values === '' ? [] : this.sizeOptions,
    });
  };

  componentDidMount = () => {
    this.handleLoadDataGoods();
    this.handleLoadData();
  };

  renderContent() {
    const { formData } = this.state;

    const contentMap = {
      tracuu: (
        <>
          <Row justify={"space-between"}>
            <Col>
              <Row>Từ ngày</Row>
              <Mdatepicker
                dataSource={{
                  value: formData.fromDate,
                  format: "YYYY-MM-DD HH:mm:ss",
                  defaultValue: formData.fromDate,
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
                  value: formData.toDate,
                  format: "YYYY-MM-DD HH:mm:ss",
                  defaultValue: formData.toDate,
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
          <Winput
            title={"Booking"}
            tooltip={"Booking"}
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
            placeholder={"Booking"}
            prefix={<AccountBookOutlined />}
          />
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
          <Row align="bottom">
            <Col xs={24} sm={22} md={23} lg={22}>
              <Winput
                key={this.state.selectCustomer}
                title={"Tàu/Chuyến"}
                tooltip={"Tàu/Chuyến"}
                value={this.state.selectCustomer}
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
                prefix={<UnorderedListOutlined />}
                placeholder={"Tàu/Chuyến"}
              />
            </Col>
            <Col
              xs={24}
              sm={2}
              md={1}
              lg={2}
              style={{
                marginBottom: "4px",
                display: "flex",
                justifyContent: "center",
              }}
              className="edo-button"
            >
              <Mbutton
                color=""
                className="btn-search"
                block
                size={"12"}
                onClick={this.showModal}
                dataSource={{
                  textbutton: " ",
                  icon: "SearchOutlined",
                }}
              />
            </Col>
          </Row>
          <Row gutter={[8, 12]}>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    POL<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"POL"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "POL",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    POD<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"POD"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "POD",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    FPOD<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"FPOD"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "FPOD",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
          </Row>
          <Mdivider dataSource={{ label: "Loại booking" }} />
          <Col span={24}>
            <Mradio
              dataSource={{
                value: this.state.radioValue,
                label: "Select an option",
                options: [
                  { label: "Tất cả", value: "option1" },
                  { label: "Chỉ định", value: "option2" },
                  { label: "Không chỉ định", value: "option3" },
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
          <Mdivider dataSource={{ label: "Trạng thái booking" }} />
          <Row gutter={[12, 12]}>
            {this.checkboxOptions.map((option) => (
              <Col xs={12} sm={8} md={6} lg={6} key={option.key}>
                <Mcheckbox
                  dataSource={{
                    key: option.key,
                    label: option.label,
                    value: this.state.selectedValues[option.key - 1] || false
                  }}
                  onChangeValue={this.handleCheckboxChange}
                  className="form_Mcheckbox"
                />
              </Col>
            ))}
          </Row>
          <Mbutton
            color=""
            className="m_button third"
            type="primary"
            htmlType="submit"
            block
            ref={this.submitButtonRef}
            size={"12"}
            dataSource={{
              textbutton: `Nạp dữ liệu`,
              icon: "CloudDownloadOutlined",
            }}
            loading={this.state.isLoading}
          />
        </>
      ),
      khongchidinh: (
        <>
          <Row justify={"space-between"}>
            <Col>
              <Row>Từ ngày</Row>
              <Mdatepicker
                dataSource={{
                  value: formData.fromDate,
                  format: "YYYY-MM-DD HH:mm:ss",
                  defaultValue: formData.fromDate,
                  id: "my-datepicker",
                  span: { xs: 24, sm: 24 },
                  required: true,
                  lockbefore: true,
                  propReadonly: false,
                }}
                disable={true}
              />
            </Col>
            <Col>
              <Row>Hiệu lực đến</Row>
              <Mdatepicker
                dataSource={{
                  value: formData.toDate,
                  format: "YYYY-MM-DD HH:mm:ss",
                  defaultValue: formData.toDate,
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
          <Winput
            title={"Booking"}
            tooltip={"Booking"}
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
            placeholder={"Booking"}
            prefix={<AccountBookOutlined />}
          />
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
              onChangeValue={() => {
                this.showModal();
              }}
            />
          </Row>
          <Row align="bottom">
            <Col xs={24} sm={22} md={23} lg={22}>
              <Winput
                key={this.state.selectCustomer}
                title={"Tàu/Chuyến"}
                tooltip={"Tàu/Chuyến"}
                value={this.state.selectCustomer}
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
                prefix={<UnorderedListOutlined />}
                placeholder={"Tàu/Chuyến"}
              />
            </Col>
            <Col
              xs={24}
              sm={2}
              md={1}
              lg={2}
              style={{
                marginBottom: "4px",
                display: "flex",
                justifyContent: "center",
              }}
              className="edo-button"
            >
              <Mbutton
                color=""
                className="btn-search"
                block
                size={"12"}
                onClick={this.showModal}
                dataSource={{
                  textbutton: " ",
                  icon: "SearchOutlined",
                }}
              />
            </Col>
          </Row>
          <Row gutter={[8, 12]}>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    POL<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"POL"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "POL",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    POD<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"POD"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "POD",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    FPOD<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"FPOD"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "FPOD",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
          </Row>
          <Winput
            title={"Chủ hàng"}
            tooltip={"Chủ hàng"}
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
            placeholder={"Chủ hàng"}
            prefix={<UserOutlined />}
          />
          <Winput
            title={"Ghi chú"}
            tooltip={"Ghi chú"}
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
            placeholder={"Ghi chú"}
            prefix={<UnorderedListOutlined />}
          />
          <Mtable
            key={this.state.tableDataGoods}
            config={{
              defaultData: this.state.tableDataGoods,
              columnsFormat: this.columnsFormatGoods,
              rowsFormat: this.rowsFormatGoods,
              rowsHeader: this.rowsHeaderGoods,
              reorderRow: true,
            }}
            functionRequire={{
              searchField: [],
            }}
          />
          <Row
            justify={"space-between"}
            gutter={[12, 12]}
            style={{ marginTop: "12px" }}
          >
            <Col lg={{ span: 10 }}>
              <Mbutton
                color=""
                className="m_button green"
                type="primary"
                htmlType="submit"
                block
                onClick={() => this.showModal()}
                size={"12"}
                dataSource={{
                  textbutton: `Thêm mới`,
                  icon: "FolderAddOutlined",
                }}
              />
            </Col>
            <Col lg={{ span: 10 }}>
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
                  textbutton: `Lưu booking`,
                  icon: "SaveOutlined",
                }}
              />
            </Col>
          </Row>
        </>
      ),
      chidinh: (
        <>
          <Row justify={"space-between"}>
            <Col>
              <Row>Từ ngày</Row>
              <Mdatepicker
                dataSource={{
                  value: formData.fromDate,
                  format: "YYYY-MM-DD HH:mm:ss",
                  defaultValue: formData.fromDate,
                  id: "my-datepicker",
                  span: { xs: 24, sm: 24 },
                  required: true,
                  lockbefore: true,
                  propReadonly: false,
                }}
                disable={true}
              />
            </Col>
            <Col>
              <Row>Hiệu lực đến</Row>
              <Mdatepicker
                dataSource={{
                  value: formData.toDate,
                  format: "YYYY-MM-DD HH:mm:ss",
                  defaultValue: formData.toDate,
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
          <Winput
            title={"Số booking"}
            tooltip={"Số booking"}
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
            placeholder={"Số booking"}
            prefix={<DownloadOutlined />}
          />
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
              onChangeValue={this.handleCarrierChange}
            />
          </Row>
          <Row>
            <Row>
              <Col>
                Kích cỡ<span>*</span>
              </Col>
              <Tooltip
                placement="top"
                title={"Kích cỡ"}
                className="item_tooltip"
              >
                <InfoCircleOutlined />
              </Tooltip>
            </Row>
            <Mselect
              dataSource={{
                label: "Kích cỡ",
                ref: this.submitButtonRef,
                options: this.state.sizeOptions,
              }}
              onChangeValue={(value) => {}}
            />
          </Row>
          <Winput
            title={"Số lượng"}
            tooltip={"Số lượng"}
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
            placeholder={"Số lượng"}
            prefix={<DownloadOutlined />}
            type="number"
            min={0}
          />
          <Row align="bottom">
            <Col xs={24} sm={22} md={23} lg={22}>
              <Winput
                key={this.state.selectCustomer}
                title={"Số container"}
                tooltip={"Số container"}
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
                className={`form_input_field`}
                prefix={<DownloadOutlined />}
                placeholder={"Số container"}
              />
            </Col>
            <Col
              xs={24}
              sm={2}
              md={1}
              lg={2}
              style={{
                marginBottom: "4px",
                display: "flex",
                justifyContent: "center",
              }}
              className="edo-button"
            >
              <Mbutton
                color=""
                className="btn-search"
                block
                size={"12"}
                onClick={this.showModal}
                dataSource={{
                  textbutton: " ",
                  icon: "SearchOutlined",
                }}
              />
            </Col>
          </Row>
          <Row align="bottom">
            <Col xs={24} sm={22} md={23} lg={22}>
              <Winput
                key={this.state.selectCustomer}
                title={"Tàu/Chuyến"}
                tooltip={"Tàu/Chuyến"}
                value={this.state.selectCustomer}
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
                prefix={<UnorderedListOutlined />}
                placeholder={"Tàu/Chuyến"}
              />
            </Col>
            <Col
              xs={24}
              sm={2}
              md={1}
              lg={2}
              style={{
                marginBottom: "4px",
                display: "flex",
                justifyContent: "center",
              }}
              className="edo-button"
            >
              <Mbutton
                color=""
                className="btn-search"
                block
                size={"12"}
                onClick={this.showModal}
                dataSource={{
                  textbutton: " ",
                  icon: "SearchOutlined",
                }}
              />
            </Col>
          </Row>
          <Row gutter={[8, 12]}>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    POL<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"POL"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "POL",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    POD<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"POD"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "POD",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Row>
                <Row>
                  <Col>
                    FPOD<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"FPOD"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "FPOD",
                    ref: this.submitButtonRef,
                    options: this.polOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Row>
            </Col>
          </Row>
          <Winput
            title={"Chủ hàng"}
            tooltip={"Chủ hàng"}
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
            placeholder={"Chủ hàng"}
            prefix={<DownloadOutlined />}
          />
          <Winput
            title={"Ghi chú"}
            tooltip={"Ghi chú"}
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
            placeholder={"Ghi chú"}
            prefix={<DownloadOutlined />}
          />
          <Row style={{ marginTop: "12px" }}>
            <Col lg={{ span: 24 }}>
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
                  textbutton: `Lưu booking`,
                  icon: "SaveOutlined",
                }}
              />
            </Col>
          </Row>
        </>
      ),
    };
    return contentMap[this.state.activeItem] || null;
  }

  renderContentTable() {
    const contentMapTable = {
      tracuu: (
        <>
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
                  searchField: [],
                }}
              />
            )
          ) : (
            <Row className="no_data" justify={"center"} align={"middle"}>
              <LoadingOutlined style={{ fontSize: "64px" }} />
            </Row>
          )}
        </>
      ),
      khongchidinh: (
        <>
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
                  importExel: true,
                  searchField: [],
                }}
              />
            )
          ) : (
            <Row className="no_data" justify={"center"} align={"middle"}>
              <LoadingOutlined style={{ fontSize: "64px" }} />
            </Row>
          )}
        </>
      ),
      chidinh: (
        <>
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
                  searchField: [],
                }}
              />
            )
          ) : (
            <Row className="no_data" justify={"center"} align={"middle"}>
              <LoadingOutlined style={{ fontSize: "64px" }} />
            </Row>
          )}
        </>
      ),
    };
    return contentMapTable[this.state.activeItem] || null;
  }
  render() {
    return (
      <Content className="flex_layout-8-16_container managerBooking_layout">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }}>
            <Mcard
              title={<span style={{ color: "white" }}>Quản lý booking</span>}
            >
              <Col className="input_layout">
                <Row justify="center">
                  <Mmultiswitch
                    activeItem={this.state.activeItem}
                    dataSource={{
                      options: this.switchOptions,
                      returnValue: this.handleSwitchChange,
                    }}
                    style={{ width: "100%" }}
                    onChangeValue={this.handleSwitchChange}
                  />
                </Row>
                {this.renderContent()}
              </Col>
            </Mcard>
          </Col>
          <Col lg={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Mcard
              title={<span style={{ color: "white" }}></span>}
              className="container_list"
            >
              {this.renderContentTable()}
            </Mcard>
          </Col>
          <Modal
            title="Chi tiết theo loại hàng"
            open={this.state.modalVisible}
            onCancel={this.handleCancel}
            closeIcon={<CloseOutlined />}
            footer={null}
            className="custom-wide-modal-edo-booking-manager"
          >
            <Row justify={"space-between"} gutter={[12, 12]}>
              <Col span={12} style={{ marginTop: "4px" }}>
                <Row>
                  <Col>
                    Kích cỡ<span>*</span>
                  </Col>
                  <Tooltip
                    placement="top"
                    title={"Kích cỡ"}
                    className="item_tooltip"
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </Row>
                <Mselect
                  dataSource={{
                    label: "Kích cỡ",
                    ref: this.submitButtonRef,
                    options: this.sizeOptions,
                  }}
                  onChangeValue={(value) => {}}
                />
              </Col>
              <Col span={12}>
                <Winput
                  title={"Số lượng"}
                  tooltip={"Số lượng"}
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
                  placeholder={"Số lượng"}
                  prefix={<DownloadOutlined />}
                  type="number"
                  min={0}
                />
              </Col>
            </Row>
            <Mdivider />
            <Mcheckbox
              dataSource={{
                key: "isRFCheck",
                label: "Hàng nguy hiểm",
                value: this.state.checkboxValue,
              }}
              onChangeValue={this.handleCheckboxChangeModal}
            />
            <Mdivider />
            <Row justify={"space-between"} gutter={[12, 12]}>
              {this.state.checkboxValue && (
                <>
                  <Col span={12}>
                    <Winput
                      title={"Class*"}
                      tooltip={"Class"}
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
                      placeholder={"Class"}
                      prefix={<UnorderedListOutlined />}
                    />
                  </Col>
                  <Col span={12}>
                    <Winput
                      title={"UNNO*"}
                      tooltip={"UNNO"}
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
                      placeholder={"UNNO"}
                      prefix={<UnorderedListOutlined />}
                    />
                  </Col>
                </>
              )}
              <Col span={24}>
                <Mbutton
                  color=""
                  className="m_button green"
                  type="primary"
                  htmlType="submit"
                  block
                  size={"12"}
                  dataSource={{
                    textbutton: `Lưu`,
                    icon: "FolderAddOutlined",
                  }}
                />
              </Col>
            </Row>
          </Modal>
        </Row>
      </Content>
    );
  }
}
