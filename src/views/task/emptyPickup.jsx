import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { Component } from "react";
import {
  Mbutton,
  Mcard,
  Mdatepicker,
  Mradio,
  Mselect,
  Mstep,
  Mtable,
  Winput,
} from "../../components/BasicUI/BasicUI";
import {
  CheckOutlined,
  FormOutlined,
  IdcardOutlined,
  LoadingOutlined,
  PhoneOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Empty from "../system/Empty";

const valueSelect = [
  {
    label: "Hãng khai thác",
    option: [
      { label: "QUANTRI: Quản trị hệ thống", value: "QTHT" },
      { label: "Dev: Developer", value: "DEV" },
      { label: "BOD: BOD Tập đoàn", value: "BOD" },
    ],
  },
  {
    label: "Kích cỡ ISO",
    option: [
      { label: "NDV", value: "NDV" },
      { label: "Cát lái", value: "Catlai" },
      { label: "Hải phòng", value: "HP" },
    ],
  },
];

const valueInfoCustomer = [
  {
    id: "nameBossId",
    icon: <IdcardOutlined />,
    require: true,
    text: "Chủ hàng",
  },
  [
    {
      id: "nameRepresentId",
      icon: <UserOutlined />,
      require: true,
      text: "Tên người đại diện",
    },
    {
      id: "phoneId",
      icon: <PhoneOutlined />,
      require: true,
      text: "Số điện thoại",
    },
  ],
  {
    id: "noteId",
    icon: <FormOutlined />,
    require: false,
    text: "Ghi chú",
  },
];

const dataSourceStep = [
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

const buttonStep = [
  {
    text: "Quay lại",
    icon: "DoubleLeftOutlined",
  },
  {
    text: "Tiếp tục",
    icon: "DoubleRightOutlined",
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
export class EmptyPickup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tableData: [],
    };
  }
  renderSelect = (value, index) => {
    return (
      <Col span={12}>
        <Mselect
          dataSource={{
            id: `select${index + 1}`,
            label: value.label,
            options: value.option,
          }}
        />
      </Col>
    );
  };
  renderInput = (info) => (
    <Winput
      title={info.text}
      tooltip={info.text}
      onChange={(e) => console.log(e)}
      require={info.require}
      className={`form_input_field`}
      placeholder={info.text}
      prefix={info.icon}
    />
  );
  renderInfoCustomer = (value) => {
    if (Array.isArray(value)) {
      return (
        <Row gutter={[12, 12]}>
          {value.map((item, index) => (
            <Col span={12} key={index}>
              {this.renderInput(item)}
            </Col>
          ))}
        </Row>
      );
    } else {
      return <Row>{this.renderInput(value)}</Row>;
    }
  };
  renderButtonStep = (value) => {
    return (
      <Col>
        <Mbutton
          color=""
          className="m_button third"
          type="primary"
          htmlType="submit"
          block
          size={"12"}
          dataSource={{
            textbutton: value.text,
            icon: value.icon,
          }}
        />
      </Col>
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
    return (
      <Content className="flex_layout-8-16_container">
        <Row gutter={[12, 12]}>
          <Col span={8}>
            <Mcard
              title={
                <>
                  <span style={{ color: "white" }}>
                    Thông tin lệnh - giao container rỗng
                  </span>
                </>
              }
            >
              <Row className="mt-12_layout">
                <Winput
                  title={"Số Booking"}
                  tooltip={"Số Booking"}
                  onChange={(e) => console.log(e)}
                  require={false}
                  className={`form_input_field`}
                  placeholder={"Số booking"}
                  prefix={<SnippetsOutlined />}
                />
              </Row>
              <Row gutter={[12, 12]} className="mt-12_layout">
                {valueSelect.map((el, index) => {
                  return this.renderSelect(el, index);
                })}
              </Row>

              <Row className="horizontal-line" />
              {valueInfoCustomer.map((el, index) => (
                <div key={index}>{this.renderInfoCustomer(el)}</div>
              ))}
              <Row className="horizontal-line" />
              <Row className="mt-12_layout mb-12_layout">
                <Mradio
                  dataSource={{
                    options: [
                      { label: "Xe chủ hàng", value: "option1" },
                      { label: "Sà lan", value: "option2" },
                    ],
                  }}
                />
              </Row>

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
            </Mcard>
          </Col>
          <Col span={16}>
            <Mcard>
              <Row className="mt-12_layout mb-12_layout">
                <Mstep
                  dataSource={dataSourceStep}
                  direction="horizontal"
                  // currentStep={this.state.currentStep + 1}
                />
              </Row>
              <Row className="horizontal-line" />
              <Row>
                {!this.state.isLoading ? (
                  !this.state.tableData[0] ? (
                    <Empty
                      text="Truy vấn thông tin lệnh để nạp dữ liệu container..."
                      icon="InboxOutlined"
                    />
                  ) : (
                    <>
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
                          exportExel: true,
                          searchField: [
                            "ContainerNo",
                            "OperationCode",
                            "IsoSizetype",
                          ],
                        }}
                      />
                      <Row className="horizontal-line" />
                      <Row
                        className="mb-12_layout full-width"
                        justify="space-between"
                      >
                        {buttonStep.map((value) => {
                          return this.renderButtonStep(value);
                        })}
                      </Row>
                    </>
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
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default EmptyPickup;
