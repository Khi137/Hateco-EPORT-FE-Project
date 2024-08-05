// Danh mục công việc

import React, { Component } from "react";
import { Msearch, Mbutton, Mtable, Mcheckbox, Mcard } from "../../components/BasicUI/BasicUI";

import { Checkbox, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";
import { getJobs } from "../../service.js/job.service";
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

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    const response = await getJobs()
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
        columnId: "taskCode",
        width: 300,
        resizable: true,
        reorderable: true,
        header: "Mã công việc",
      },
      {
        columnId: "taskName",
        width: 400,
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
          text: container?.job_code || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.job_name || "",
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.is_quay) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.is_yard) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.is_gate) || false,
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
export default Task;
