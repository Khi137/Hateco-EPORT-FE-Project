// Danh mục công việc

import React, { Component } from "react";
import { Msearch, Mbutton, Mtable, Mcheckbox, Mcard } from "../../components/BasicUI/BasicUI";

import { Checkbox, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { DatabaseOutlined } from "@ant-design/icons";

let rowData = [
  {
    key: "1",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "2",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "3",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "4",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "5",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "6",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "7",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "9",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "10",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "11",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "12",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "13",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },

  {
    key: "14",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "15",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
];

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        shipBrandNumber: "",
        shipBrandName: "",
        searchData: "",
      },
      containerList: [],
      tableData: [],
    };
  }

  render() {
    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "taskCode",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Mã công việc",
      },
      {
        columnId: "taskName",
        width: 850,
        resizable: true,
        reorderable: true,
        header: "Tên công việc",
      },
      {
        columnId: "workCrane",
        width: 200,
        resizable: true,
        header: <Checkbox />,
      },
      {
        columnId: "workYard",
        width: 200,
        resizable: true,
        header: <Checkbox />,
      },
      {
        columnId: "workGate",
        width: 200,
        resizable: true,
        header: <Checkbox />,
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: container?.taskCode || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.taskName || "",
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.workCrane) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.workYard) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.workGate) || false,
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Mã công việc" },
      { type: "header", text: "Tên công việc" },
      { type: "header", text: "Công việc cầu tàu" },
      { type: "header", text: "Công việc bãi" },
      { type: "header", text: "Công việc cổng" },
    ];

    return (
      <Content className="one_page_layout_container">
        <Row gutter={[12, 12]}>
          <Col span={24} >
            <Mcard
              title={<span style={{ color: 'white' }}>Danh mục công việc</span>}
            >
              <Col>
                {rowData.length === 0 ? (
                  <Col className="no_data">
                    <Row justify={"center"}>
                      <DatabaseOutlined className="no_data_icon" />
                    </Row>
                    <Row justify={"center"}>Nhập số container để nạp dữ liệu container...</Row>
                  </Col>
                ) : (
                  <Col className="have_data">
                    <Mtable
                      config={{
                        defaultData: rowData,
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
                        searchField: [
                          "ContainerNo",
                          "OperationCode",
                          "IsoSizetype",
                        ],
                      }}
                    />
                  </Col>
                )}
              </Col>
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}
export default Task;
