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
export default StatesContainer;
