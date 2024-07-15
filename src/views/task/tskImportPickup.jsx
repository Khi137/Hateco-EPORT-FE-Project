import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { Component, createRef } from "react";
import {
  Mbutton,
  Mcard,
  Mdatepicker,
  Minput,
  Mradio,
  Mstep,
  Mtable,
  Winput,
} from "../../components/BasicUI";
import {
  IdcardOutlined,
  SnippetsOutlined,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Empty from "../system/Empty";
const formInfoCustomer = [
  {
    label: "TÊN CHỦ HÀNG",
    require: true,
    type: "text",
  },
  {
    label: "TÊN NGƯỜI ĐẠI DIỆN",
    require: true,
    type: "text",
  },
  {
    label: "SỐ ĐIỆN THOẠI",
    require: true,
    type: "number",
  },
  {
    label: "GHI CHÚ",
    require: true,
    type: "text",
  },
];

const dataSource = [
  {
    label: "Danh sách container",
    icon: <SnippetsOutlined />,
  },
  {
    label: "Tính cước",
    icon: <IdcardOutlined />,
  },
  {
    label: "Hoàn tất",
    icon: <CheckOutlined />,
  },
];

const rowData = [
  {
    numberContainer: "ABC123",
    brandExploit: "Hãng khai thác",
    iso: "ISO123",
    sector: "Gạo nhập khẩu",
    weight: "100 tấn",
    vehicleInformation: "Thông tin phương tiện",
  },
];

const formInput = [
  {
    title: "Số vận đơn",
    tooltip: "Số vận đơn",
    require: true,
    className: `form_input_field`,
    placeholder: "Nhập số vận đơn",
  },
  {
    title: "Tên khách hàng",
    tooltip: "Tên khách hàng",
    require: true,
    className: `form_input_field`,
    placeholder: "Nhập tên khách hàng",
  },
  {
    title: "Tên người đại diện",
    tooltip: "Tên người đại diện",
    require: true,
    className: `form_input_field`,
    placeholder: "Tên người đại diện",
  },
  {
    title: "Số điện thoại",
    tooltip: "Số điện thoại",
    require: true,
    className: `form_input_field`,
    placeholder: "Nhập số điện thoại",
  },
  {
    title: "Ghi chú",
    tooltip: "Ghi chú",
    require: false,
    className: `form_input_field`,
    placeholder: "Nhập ghi chú (nếu có)",
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
export class TskImportPickup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        pinCode: "",
        pinCodeError: true,

        taxCode: "",
        billForm: "",
        billSymbol: "",
        billNumber: "",

        searchData: "",
      },
      radioValue: "pincode",
      tableData: [],
      isLoading: false,
      currentStep: 0,
    };
    this.submitButtonRef = createRef();
    this.pinCodeRef = createRef();
  }
  renderFormInputCustomer = (value, index) => {
    return (
      <Row className="w-100_layout" key={index}>
        <Row>{value.label}</Row>
        <Minput
          dataSource={{
            inputType: value.type,
          }}
        />
      </Row>
    );
  };
  handleLoadData = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState((prevState) => ({
        tableData: rowData,
        isLoading: false,
      }));
    }, 1000);
  };
  handleNextStep = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  };
  handlePreviousStep = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep - 1,
    }));
  };
  renderInput = (value) => {
    return (
      <Col span={8}>
        <Winput
          title={value.title}
          tooltip={value.tooltip}
          require={value.require}
          className={value.className}
          placeholder={value.placeholder}
        />
      </Col>
    );
  };
  render() {
    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "numberContainerId",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Số Container",
      },
      {
        columnId: "brandExploitId",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Hãng khai thác",
      },
      {
        columnId: "isoId",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Kích cỡ ISO",
      },
      {
        columnId: "sectorId",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Loại hàng",
      },
      {
        columnId: "weightId",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Trọng lượng",
      },
      {
        columnId: "vehicleInformationId",
        width: 500,
        resizable: true,
        reorderable: true,
        header: "Thông tin phương tiện",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: true,
          text: container?.numberContainer || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.brandExploit || "",
        },
        { type: "text", nonEditable: true, text: container?.iso || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.sector || "",
        },
        { type: "text", nonEditable: true, text: container?.weight || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.vehicleInformation || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Số Container" },
      { type: "header", text: "Hãng khai thác" },
      { type: "header", text: "Kích cỡ ISO" },
      { type: "header", text: "Loại hàng" },
      { type: "header", text: "Trọng lượng" },
      { type: "header", text: "Thông tin phương tiện" },
    ];
    const { currentStep } = this.state;
    return (
      <Content className="flex_layout-8-16_container">
        <Mcard>
          <Row>
            <Col span={4}>
              <Row className="p_layout f-title">Các bước</Row>
              <Mstep
                dataSource={dataSource}
                config={{ current: 0 }}
                currentStep={this.state.currentStep + 1}
                stepStyle={{
                  minHeight: "200px",
                  display: "flex",
                }}
                stepsStyle={{
                  width: "300px",
                  margin: "auto",
                }}
              />
            </Col>
            <Col span={1}>
              <div className="vertical-line"></div>
            </Col>
            <Col span={19}>
              <Row className="f-title center_layout mt-12_layout">
                Thông tin lệnh - giao hàng container
              </Row>
              <Row>
                <Col span={24}>
                  <div className="horizontal-line"></div>
                </Col>
              </Row>
              <Row gutter={[12, 12]}>
                <Col span={8}>
                  <Row>HẠN TRẢ RỖNG</Row>
                  <Mdatepicker
                    dataSource={{
                      format: "YYYY-MM-DD HH:mm:ss",
                      id: "my-datepicker",
                      required: true,
                      lockbefore: true,
                      propReadonly: false,
                    }}
                  />
                </Col>
                {formInput.map((el) => {
                  return this.renderInput(el);
                })}
              </Row>
              <Row className="center_layout">
                <Mbutton
                  color=""
                  className="m_button third"
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleLoadData}
                  block
                  size={"12"}
                  dataSource={{
                    textbutton: `Nạp dữ liệu`,
                    icon: "CloudDownloadOutlined",
                  }}
                />
              </Row>
              <Row>
                <Col span={24}>
                  <div className="horizontal-line"></div>
                </Col>
              </Row>
              <Row className="full-width">
                {!this.state.isLoading ? (
                  !this.state.tableData[0] ? (
                    <Empty
                      text="Truy vấn thông tin lệnh để nạp dữ liệu container..."
                      icon="InboxOutlined"
                    />
                  ) : (
                    <Row className="flex-col_layout">
                      {this.state.currentStep === 0 && (
                        <Mtable
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
                            searchField: ["Group", "Address", "FullName"],
                          }}
                        />
                      )}
                      {this.state.currentStep === 1 && (
                        <Empty
                          text="Dữ liệu ở trang tính cước..."
                          icon="InboxOutlined"
                        />
                      )}

                      {this.state.currentStep === 2 && (
                        <Empty
                          text="Dữ liệu ở trang thanh toán..."
                          icon="InboxOutlined"
                        />
                      )}

                      <Row
                        className={
                          currentStep === 0
                            ? "mt-12_layout mb-12_layout flex_end"
                            : "mt-12_layout mb-12_layout"
                        }
                        justify="space-between"
                      >
                        {currentStep > 0 && (
                          <Col>
                            <Mbutton
                              color=""
                              className="m_button third_border"
                              type="primary"
                              htmlType="submit"
                              onClick={this.handlePreviousStep}
                              block
                              size={12}
                              dataSource={{
                                textbutton: "Quay lại",
                                icon: "DoubleLeftOutlined",
                              }}
                            />
                          </Col>
                        )}

                        <Col>
                          <Mbutton
                            color=""
                            className="m_button third_border"
                            type="primary"
                            htmlType="submit"
                            onClick={this.handleNextStep}
                            block
                            size={12}
                            dataSource={{
                              textbutton:
                                currentStep === dataSource.length - 1
                                  ? "Hoàn tất"
                                  : "Tiếp theo",
                              icon: "DoubleRightOutlined",
                            }}
                          />
                        </Col>
                      </Row>
                    </Row>
                  )
                ) : (
                  <Row
                    className="no_data center_layout"
                    justify={"center"}
                    align={"middle"}
                  >
                    <LoadingOutlined className="no_data_icon" />
                  </Row>
                )}
              </Row>
            </Col>
          </Row>
        </Mcard>
      </Content>
    );
  }
}

export default TskImportPickup;
