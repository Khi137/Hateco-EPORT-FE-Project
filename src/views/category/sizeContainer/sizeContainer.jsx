// Danh mục kích cỡ

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import {
  Msearch,
  Mbutton,
  Mtable,
  Mcheckbox,
} from "../../../components/BasicUI";

import "./sizeContainer.scss";
import { Checkbox } from "antd";

let rowData = [
  { key: "1", typeC: "Container 20 feet", lenghtC: "5.898", widthC: "2.352", heightC: "2.395", volumeC: "33.2" },
  { key: "2", typeC: "Container 20 feet lạnh", lenghtC: "5.485", widthC: "2.286", heightC: "2.265", volumeC: "28.4" },
  { key: "3", typeC: "Container 40 feet thường", lenghtC: "12.032", widthC: "2.35", heightC: "2.392", volumeC: "67.6" },
  { key: "4", typeC: "Container 40 feet cao", lenghtC: "12.023", widthC: "2.352", heightC: "2.698", volumeC: "76.3" },
  { key: "5", typeC: "Container 40 feet lạnh", lenghtC: "11.572", widthC: "2.296", heightC: "2.521", volumeC: "67.0" },
];

export class SizeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 150, resizable: true, header: "STT" },
          {
            columnId: "typeC",
            width: 550,
            resizable: true,
            reorderable: true,
            header: "Loại Container",
          },
          {
            columnId: "lenghtC",
            width: 300,
            resizable: true,
            reorderable: true,
            header: "Chiều dài (m)",
          },
          {
            columnId: "widthC",
            width: 300,
            resizable: true,
            reorderable: true,
            header: "Chiều rộng (m)",
          },
          {
            columnId: "heightC",
            width: 300,
            resizable: true,
            reorderable: true,
            header: "Chiều cao (m)",
          },
          {
            columnId: "volumeC",
            width: 300,
            resizable: true,
            reorderable: true,
            header: "Thể tích (m3)",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Loại Container" },
              { type: "header", text: "Chiều dài (m)" },
              { type: "header", text: "Chiều rộng (m)" },
              { type: "header", text: "Chiều cao (m)" },
              { type: "header", text: "Thể tích (m3)" },
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
          text: container?.typeC || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.lenghtC || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.widthC || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.heightC || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.volumeC || "",
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
      <div className="sizeContainer-container">
        <div className="sizeContainer-panel drop-box-shadow">
          <div className="sizeContainer-panel-title title-xl-normal">
            Danh mục kích cỡ
          </div>
          <div className="sizeContainer-panel-content">
            <div className="sizeContainer-panel-content-navigation">
              <div className="sizeContainer-panel-content-navigation-search">
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
              <div className="sizeContainer-panel-content-navigation-button">
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
            <div className="sizeContainer-panel-content-table">
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
export default SizeContainer;
