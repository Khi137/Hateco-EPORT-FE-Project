import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { Component } from "react";
import {
  Mcard,
  Mdatepicker,
  Mradio,
  Mstep,
  Mtable,
  Winput,
} from "../../components/BasicUI/BasicUI";
import {
  CheckOutlined,
  ContainerOutlined,
  FormOutlined,
  IdcardOutlined,
  PhoneOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";

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

export class PreAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: rowData,
    };
  }
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
                    Thông tin lệnh - hạ container rỗng
                  </span>
                </>
              }
            >
              <Row className="mt-12_layout" justify={"space-between"}>
                <Col span={12}>
                  <Row>Từ ngày</Row>
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
                <Col span={12}>
                  <Winput
                    title={"Số vận đơn"}
                    tooltip={"Số vận đơn"}
                    onChange={(e) => console.log(e)}
                    require={false}
                    className={`form_input_field`}
                    placeholder={"Số vận đơn"}
                    prefix={<ContainerOutlined />}
                  />
                </Col>
              </Row>
              <Row className="horizontal-line" />
              {valueInfoCustomer.map((value) => {
                return this.renderInfo(value);
              })}
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
            </Mcard>
          </Col>
          <Col span={16}>
            <Mcard>
              <Row className="mt-12_layout mb-12_layout">
                <Mstep dataSource={dataSourceStep} direction="horizontal" />
              </Row>
              <Row className="horizontal-line" />
              <Row>
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
                    searchField: ["ContainerNo"],
                  }}
                />
              </Row>
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default PreAdvice;
