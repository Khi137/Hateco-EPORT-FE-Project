// Danh mục hướng

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import {
  Msearch,
  Mbutton,
  Mtable,
  Mcheckbox,
} from "../../../components/BasicUI";

import "./DirectionContainer.scss";
import { Checkbox } from "antd";

let rowData = [
  { key: "1", directCode: "1", directName: "Import" },
  { key: "2", directCode: "2", directName: "Storage Empty" },
  { key: "3", directCode: "3", directName: "Export" },
];

export class DirectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 150, resizable: true, header: "STT" },
          {
            columnId: "directCode",
            width: 500,
            resizable: true,
            reorderable: true,
            header: "Mã hướng",
          },
          {
            columnId: "directName",
            width: 1400,
            resizable: true,
            reorderable: true,
            header: "Tên hướng",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Mã hướng" },
              { type: "header", text: "Tên hướng" },
            ],
          },
          ...this.generateTableData(rowData),
        ],
      },
      searchValue: "",
    };
  }

  generateRowData = (container, index) => {
    return {
      rowId: String(index + 1),
      cells: [
        { type: "text", nonEditable: true, text: container?.key || "" },
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
      ],
    };
  };

  generateTableData = (dataList) => {
    const generateData = dataList.map((container, index) =>
      this.generateRowData(container, index)
    );
    return generateData;
  };

  handleSearchChange = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    return (
      <div className="directionContainer-container">
        <div className="directionContainer-panel drop-box-shadow">
          <div className="directionContainer-panel-title title-xl-normal">
            Danh mục hướng
          </div>
          <div className="directionContainer-panel-content">
            <div className="directionContainer-panel-content-navigation">
              <div className="directionContainer-panel-content-navigation-search">
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
              <div className="directionContainer-panel-content-navigation-button">
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
            <div className="directionContainer-panel-content-table">
              <Mtable
                rows={this.state.tableData.reactGridRows}
                columns={this.state.tableData.reactGridColumns}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DirectionContainer;
