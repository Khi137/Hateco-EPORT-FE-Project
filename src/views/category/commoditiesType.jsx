// Danh mục loại hàng hóa

import React, { Component } from "react";
import { Mtable, Mcard } from "../../components/BasicUI/BasicUI";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";
import { getCargotype } from "../../service.js/cargoType.service";

const rowData = [
  { key: "1", taskCode: "GP", taskName: "General" },
  { key: "2", taskCode: "RF", taskName: "Reefer" },
  { key: "3", taskCode: "DG", taskName: "Dangerous" },
  { key: "4", taskCode: "DR", taskName: "Reefer & Dangerous" },
  { key: "5", taskCode: "AK", taskName: "Over Dimension" },
  { key: "6", taskCode: "BB", taskName: "Break Bulk" },
  { key: "7", taskCode: "FR", taskName: "Fragile" },
  { key: "8", taskCode: "TK", taskName: "Tank" },
  { key: "9", taskCode: "MT", taskName: "Empty" },
  { key: "10", taskCode: "ER", taskName: "Empty Reefer" },
  { key: "11", taskCode: "ET", taskName: "Empty Tank" },
  { key: "12", taskCode: "ED", taskName: "Empty Dangerous" },
  { key: "13", taskCode: "ER", taskName: "Empty Reefer" },
  { key: "14", taskCode: "AK", taskName: "Over Dimension" },
  { key: "15", taskCode: "FR", taskName: "Fragile" },
  { key: "16", taskCode: "RF", taskName: "Reefer" },
  { key: "17", taskCode: "GP", taskName: "General" },
  { key: "18", taskCode: "AK", taskName: "Over Dimension" },
  { key: "19", taskCode: "ER", taskName: "Empty Reefer" },
  { key: "20", taskCode: "ET", taskName: "Empty Tank" },
];

const columnsFormat = [
  { columnId: "STT", width: 150, resizable: true, header: "STT" },
  {
    columnId: "taskCode",
    width: 650,
    resizable: true,
    reorderable: true,
    header: "Mã loại hàng",
  },
  {
    columnId: "taskName",
    width: 650,
    resizable: true,
    reorderable: true,
    header: "Tên loại hàng",
  },
];

const rowsFormat = (container, index) => [
  { type: "text", nonEditable: true, text: String(index + 1) },
  { type: "text", nonEditable: false, text: container?.cargo_type_code || "" },
  { type: "text", nonEditable: true, text: container?.cargo_type_name || "" },
];

const rowsHeader = [
  { type: "header", text: "STT" },
  { type: "header", text: "Mã loại hàng" },
  { type: "header", text: "Tên loại hàng" },
];

class CommoditiesType extends Component {
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
      searchValue: "",
    };
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    const response = await getCargotype()
    this.setState((prevState) => ({
      tableData: response?.data?.payload ? response?.data?.payload : [],
      formData: {
        ...prevState.formData,
      },
      isLoading: false,
    }));
  }

  handleSearchChange = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <Content className="one_page_layout_container">
        <Row gutter={[12, 12]}>
          <Col span={24} >
            <Mcard
              title={<span style={{ color: 'white' }}>Danh mục loại hàng hóa</span>}
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

export default CommoditiesType;
