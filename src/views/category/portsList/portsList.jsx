// Danh mục cảng

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import {
  Msearch,
  Mbutton,
  Mtable,
  Mcheckbox,
} from "../../../components/BasicUI";

import "./portsList.scss";
import { Checkbox } from "antd";

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
      <div className="portsList-container">
        <div className="portsList-panel drop-box-shadow">
          <div className="portsList-panel-title title-xl-normal">
            Danh mục cảng
          </div>
          <div className="portsList-panel-content">
            <div className="portsList-panel-content-navigation">
              <div className="portsList-panel-content-navigation-search">
                <Msearch
                  dataSource={{
                    id: "search1",
                    label: "Search",
                    value: this.state.searchValue,
                    icon: "SearchOutlined",
                    text: "",
                  }}
                  config={{
                    onLiveSearch: (value) => console.log("Live search:", value),
                  }}
                  onChangeValue={(e) => this.handleSearchChange(e["search1"])}
                />
              </div>
              <div className="portsList-panel-content-navigation-button">
                <Mbutton
                  className="m_button green drop-button-shadow"
                  block
                  htmlType="submit"
                  type="primary"
                  onClick={this.handleFormSubmit}
                  ref={this.mButtonRef}
                  dataSource={{
                    textbutton: "Xuất file excel",
                    color: "",
                    size: "12",
                    icon: "FileExcelOutlined",
                  }}
                />
              </div>
            </div>
            <div className="portsList-panel-content-table">
              <Mtable
                tableData={rowData}
                columnsFormat={columnsFormat}
                rowsFormat={rowsFormat}
                rowsHeader={rowsHeader}
                reoderRow={true}
                // searchValue={formData.searchData}
                // searchField={["ContainerNumber", "OperationCode", "IsoSizetype"]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PortsList;
