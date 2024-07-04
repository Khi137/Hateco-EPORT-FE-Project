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
export default DirectionContainer;
