// Danh mục trạng thái Container

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import {
  Msearch,
  Mbutton,
  Mtable,
  Mcheckbox,
} from "../../../components/BasicUI";

import "./statesContainer.scss";
import { Checkbox } from "antd";

let rowData = [
  { key: "1", statesCode: "D", statesName: "Delivered" },
  { key: "2", statesCode: "S", statesName: "Stacking" },
];

export class StatesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 150, resizable: true, header: "STT" },
          {
            columnId: "statesCode",
            width: 500,
            resizable: true,
            reorderable: true,
            header: "Mã trạng thái",
          },
          {
            columnId: "statesName",
            width: 1400,
            resizable: true,
            reorderable: true,
            header: "Tên trạng thái",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Mã trạng thái" },
              { type: "header", text: "Tên trạng thái" },
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
          text: container?.statesCode || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.statesName || "",
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
      <div className="statesContainer-container">
        <div className="statesContainer-panel drop-box-shadow">
          <div className="statesContainer-panel-title title-xl-normal">
            Danh mục trạng thái Container
          </div>
          <div className="statesContainer-panel-content">
            <div className="statesContainer-panel-content-navigation">
              <div className="statesContainer-panel-content-navigation-search">
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
              <div className="statesContainer-panel-content-navigation-button">
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
            <div className="statesContainer-panel-content-table">
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
export default StatesContainer;
