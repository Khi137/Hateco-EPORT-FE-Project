// Danh mục cảng

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import { Msearch, Mbutton, Mtable, Mcheckbox, Mcard } from "../../components/BasicUI/BasicUI";
import { Checkbox, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";
import { getPorts } from "../../service.js/port.service";

let rowData = [
  { key: "1", nation: "asd", portCode: "asd", portName: "asd" },
  { key: "2", nation: "asd", portCode: "asd", portName: "asd" },
  { key: "3", nation: "asd", portCode: "asd", portName: "asd" },
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

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    const response = await getPorts()
    this.setState((prevState) => ({
      tableData: response?.data?.payload ? response?.data?.payload : [],
      formData: {
        ...prevState.formData,
      },
      isLoading: false,
    }));
  }

  render() {
    const columnsFormat = [
      { columnId: "STT", width: 150, resizable: true, header: "STT" },
      {
        columnId: "nation",
        width: 400,
        resizable: true,
        reorderable: true,
        header: "Quốc gia",
      },
      {
        columnId: "portCode",
        width: 400,
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
          text: container?.nation_code || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.port_code || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.port_name || "",
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
              {rowData.length === 0 ? (
                <Col className="no_data">
                  <Row justify={"center"}>
                    <DatabaseOutlined className="no_data_icon" />
                  </Row>
                  <Row justify={"center"}>Nhập số container để nạp dữ liệu container...</Row>
                </Col>
              ) : (
                <Col className="have_data">
                  {!this.state.isLoading ? (
                    !this.state.tableData[0] ? (
                      <Col className="no_data">
                        <Row justify={"center"}>
                          <DatabaseOutlined className="no_data_icon" />
                        </Row>
                        <Row justify={"center"}>Không có dữ liệu</Row>
                      </Col>
                    ) : (
                      <Mtable
                        config={{
                          defaultData: this.state.tableData,
                          columnsFormat: columnsFormat,
                          rowsFormat: rowsFormat,
                          rowsHeader: rowsHeader,
                          reoderRow: true,
                        }}
                        functionRequire={{
                          addcolumn: false,
                          deleteColumn: true,
                          exportExel: true,
                          saveData: (data) => {
                            console.log(data);
                          },
                          searchField: ["cusCode", "OperationCode", "IsoSizetype"],
                        }}
                      />
                    )
                  ) : (
                    <Row className="no_data" justify={"center"} align={"middle"}>
                      <LoadingOutlined className="no_data_icon" />
                    </Row>
                  )}
                </Col>
              )}
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}
export default PortsList;
