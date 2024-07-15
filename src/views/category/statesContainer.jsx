// Danh mục trạng thái Container

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import { Msearch, Mbutton, Mtable, Mcheckbox, Mcard } from "../../components/BasicUI";

import { Checkbox, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { DatabaseOutlined } from "@ant-design/icons";

let rowData = [
  { key: "1", statesCode: "D", statesName: "Delivered" },
  { key: "2", statesCode: "S", statesName: "Stacking" },
];

export class StatesContainer extends Component {
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
        columnId: "statesCode",
        width: 400,
        resizable: true,
        reorderable: true,
        header: "Mã trạng thái",
      },
      {
        columnId: "statesName",
        width: 1200,
        resizable: true,
        reorderable: true,
        header: "Tên trạng thái",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: container?.statesCode || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.statesName || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Mã trạng thái" },
      { type: "header", text: "Tên trạng thái" },
    ];

    return (
      <Content className="one_page_layout_container">
        <Row gutter={[12, 12]}>
          <Col span={24} >
            <Mcard
              title={<span style={{ color: 'white' }}>Danh mục trạng thái Container</span>}
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
export default StatesContainer;
