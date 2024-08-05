// Danh mục trạng thái Container

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import { Msearch, Mbutton, Mtable, Mcheckbox, Mcard } from "../../components/BasicUI/BasicUI";

import { Checkbox, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";
import { getConstatus } from "../../service.js/containerStatus.service";

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

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    const response = await getConstatus()
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
          text: container?.container_status_code || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.container_status_name || "",
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
            </Mcard>
          </Col>
        </Row>
      </Content>
    );
  }
}
export default StatesContainer;
