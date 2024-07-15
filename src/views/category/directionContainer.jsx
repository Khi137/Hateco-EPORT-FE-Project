// Danh mục hướng

import React, { Component } from "react";
import { Msearch, Mbutton, Mtable, Mcheckbox, Mcard } from "../../components/BasicUI";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import { DatabaseOutlined } from "@ant-design/icons";

let rowData = [
  { key: "1", directCode: "1", directName: "Import" },
  { key: "2", directCode: "2", directName: "Storage Empty" },
  { key: "3", directCode: "3", directName: "Export" },
];

export class DirectionContainer extends Component {
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
        columnId: "directCode",
        width: 400,
        resizable: true,
        reorderable: true,
        header: "Mã hướng",
      },
      {
        columnId: "directName",
        width: 800,
        resizable: true,
        reorderable: true,
        header: "Tên hướng",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: container?.directCode || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.directName || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Mã hướng" },
      { type: "header", text: "Tên hướng" },
    ];

    return (
      <Content className="one_page_layout_container">
        <Row gutter={[12, 12]}>
          <Col span={24} >
            <Mcard
              title={<span style={{ color: 'white' }}>Danh mục hướng</span>}
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
export default DirectionContainer;
