// Danh mục công việc

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import {
  Msearch,
  Mbutton,
  Mtable,
  Mcheckbox,
} from "../../../components/BasicUI";

import "./Task.scss";
import CheckboxCellTemplate from "./CellTemplate";
import { Checkbox } from "antd";

let rowData = [
  {
    key: "1",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "2",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "3",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "4",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "5",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "6",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "7",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "9",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "10",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "11",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "12",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "13",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },

  {
    key: "14",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
  {
    key: "15",
    taskCode: "",
    taskName: "",
    workCrane: false,
    workYard: false,
    workGate: false,
  },
];

export class Task extends Component {
  constructor(props) {
    super(props);
    this.checkboxCellTemplate = new CheckboxCellTemplate();
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 50, resizable: true, header: "STT" },
          {
            columnId: "taskCode",
            width: 320,
            resizable: true,
            reorderable: true,
            header: "Mã công việc",
          },
          {
            columnId: "taskName",
            width: 1000,
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
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Mã công việc" },
              { type: "header", text: "Tên công việc" },
              { type: "header", text: "Công việc cầu tàu" },
              { type: "header", text: "Công việc bãi" },
              { type: "header", text: "Công việc cổng" },
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
          text: container?.taskCode || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.taskName || "",
        },
        {
          type: "custom",
          value: {
            checked: container.workCrane,
            rowId: container.key,
          },
        },
        {
          type: "custom",
          value: {
            checked: container.workYard,
            rowId: container.key,
          },
        },
        {
          type: "custom",
          value: {
            checked: container.workGate,
            rowId: container.key,
          },
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
      <div className="task-container">
        <div className="task-panel drop-box-shadow">
          <div className="task-panel-title title-xl-normal">
            Danh mục công việc
          </div>
          <div className="task-panel-content">
            <div className="task-panel-content-navigation">
              <div className="task-panel-content-navigation-search">
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
              <div className="task-panel-content-navigation-button">
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
            <div className="task-panel-content-table">
              <Mtable
                rows={this.state.tableData.reactGridRows}
                columns={this.state.tableData.reactGridColumns}
                customCellTemplates={{ custom: this.checkboxCellTemplate }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Task;
