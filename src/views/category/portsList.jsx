// Danh mục cảng

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import { Msearch, Mbutton, Mtable, Mcheckbox, Mcard } from "../../components/BasicUI/BasicUI";
import { Checkbox, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { DatabaseOutlined } from "@ant-design/icons";

let rowData = [
  { key: "1", nation: "", portCode: "", portName: "" },
  { key: "2", nation: "", portCode: "", portName: "" },
  { key: "3", nation: "", portCode: "", portName: "" },
  { key: "4", nation: "", portCode: "", portName: "" },
  { key: "5", nation: "", portCode: "", portName: "" },
  { key: "6", nation: "", portCode: "", portName: "" },
  { key: "7", nation: "", portCode: "", portName: "" },
  { key: "8", nation: "", portCode: "", portName: "" },
  { key: "9", nation: "", portCode: "", portName: "" },
  { key: "10", nation: "", portCode: "", portName: "" },
  { key: "11", nation: "", portCode: "", portName: "" },
  { key: "12", nation: "", portCode: "", portName: "" },
  { key: "13", nation: "", portCode: "", portName: "" },
  { key: "14", nation: "", portCode: "", portName: "" },
  { key: "15", nation: "", portCode: "", portName: "" },
  { key: "16", nation: "", portCode: "", portName: "" },
  { key: "18", nation: "", portCode: "", portName: "" },
  { key: "19", nation: "", portCode: "", portName: "" },
  { key: "20", nation: "", portCode: "", portName: "" },
  { key: "21", nation: "", portCode: "", portName: "" },
  { key: "22", nation: "", portCode: "", portName: "" },
];

export class PortsList extends Component {
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
      { columnId: "STT", width: 150, resizable: true, header: "STT" },
      {
        columnId: "nation",
        width: 500,
        resizable: true,
        reorderable: true,
        header: "Quốc gia",
      },
      {
        columnId: "portCode",
        width: 550,
        resizable: true,
        reorderable: true,
        header: "Mã cảng",
      },
      {
        columnId: "portName",
        width: 650,
        resizable: true,
        reorderable: true,
        header: "Tên cảng",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: container?.nation || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.portCode || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.portName || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Quốc gia" },
      { type: "header", text: "Mã cảng" },
      { type: "header", text: "Tên cảng" },
    ];

    return (
      <Content className="one_page_layout_container">
        <Row gutter={[12, 12]}>
          <Col span={24} >
            <Mcard
              title={<span style={{ color: 'white' }}>Danh mục cảng</span>}
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
export default PortsList;
