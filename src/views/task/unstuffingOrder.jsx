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
  UserOutlined,
} from "@ant-design/icons";
import Empty from "../system/Empty";

const dataFormInput = [
  {
    text: "Số D/O",
    icon: <IdcardOutlined />,
    require: true,
    type: "input",
  },
  [
    {
      text: "Số BL/BOOKING",
      icon: <IdcardOutlined />,
      require: false,
      type: "input",
    },
    {
      text: "Số Container",
      icon: <IdcardOutlined />,
      require: false,
      type: "input",
    },
  ],
  {
    text: "Hàng hóa",
    option: [
      { label: "NDV", value: "NDV" },
      { label: "Cát lái", value: "Catlai" },
      { label: "Hải phòng", value: "HP" },
    ],

    type: "select",
  },
  {
    text: "Phương án",
    option: [
      { label: "NDV", value: "NDV" },
      { label: "Cát lái", value: "Catlai" },
      { label: "Hải phòng", value: "HP" },
    ],

    type: "select",
  },
  [
    {
      text: "PTGN",
      option: [
        { label: "NDV", value: "NDV" },
        { label: "Cát lái", value: "Catlai" },
        { label: "Hải phòng", value: "HP" },
      ],

      type: "select",
    },
    {
      text: "Hạn lệnh",
      type: "date",
    },
  ],
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

const rowData = [
  {
    numberContainer: "ABC123",
    numberBooking: "123456",
    brandExploit: "Hãng khai thác",
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
export class UnstuffingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      isLoading: false,
    };
  }
  renderDate = (value) => {
    return (
      <Col>
        <Row>{value.text}</Row>
        <Mdatepicker
          dataSource={{
            format: "YYYY-MM-DD HH:mm:ss",
            id: "my-datepicker",
            required: true,
            lockbefore: true,
            propReadonly: false,
            className: "date_input",
          }}
        />
      </Col>
    );
  };
  renderSelect = (value) => {
    return (
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Row style={{ marginBottom: "4px" }}>{value.text}</Row>
          <Mselect
            dataSource={{
              label: value.text,
              options: value.option,
            }}
          />
        </Col>
      </Row>
    );
  };
  renderInput = (value) => {
    return (
      <Winput
        title={value.text}
        tooltip={value.text}
        onChange={(e) => console.log(e)}
        require={value.require}
        className={`form_input_field`}
        placeholder={value.text}
        prefix={value.icon}
      />
    );
  };
  renderInfo = (value) => {
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
  renderFormInput = (value) => {
    if (Array.isArray(value)) {
      return (
        <Row gutter={[12, 12]}>
          {value.map((item, index) => (
            <Col span={12} key={index}>
              {item.type === "input"
                ? this.renderInput(item)
                : this.renderSelect(item)}
            </Col>
          ))}
        </Row>
      );
    } else {
      return (
        <Row>
          <Col span={24}>
            {value.type === "input"
              ? this.renderInput(value)
              : this.renderSelect(value)}
          </Col>
        </Row>
      );
    }
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
          text: container?.numberBooking || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.brandExploit || "",
        },
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
      { type: "header", text: "Số Booking" },
      { type: "header", text: "Hãng khai thác" },
      { type: "header", text: "Cảng dỡ" },
      { type: "header", text: "Cảng đích" },
      { type: "header", text: "Thao tác" },
    ];
    return (
      <Content className="flex_layout-8-16_container">
        <Row gutter={[12, 12]}>
          <Col span={8}>
            <Mcard
              title={
                <>
                  <span style={{ color: "white" }}>
                    Thông tin lệnh - lệnh rút hàng
                  </span>
                </>
              }
            >
              <Row className="mt-12_layout mb-12_layout">
                <Mradio
                  dataSource={{
                    options: [
                      { label: "Master Bill", value: "option1" },
                      { label: "House Bill", value: "option2" },
                    ],
                  }}
                />
              </Row>
              {dataFormInput.map((item) => {
                return this.renderFormInput(item);
              })}
              <Row className="horizontal-line" />
              {valueInfoCustomer.map((value) => {
                return this.renderInfo(value);
              })}
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
                styleButton={{ margin: "12px 0" }}
              />
            </Mcard>
          </Col>
          <Col span={16}>
            <Mcard>
              <Row className="mt-12_layout mb-12_layout">
                <Mstep dataSource={dataSourceStep} direction="horizontal" />
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

export default UnstuffingOrder;
