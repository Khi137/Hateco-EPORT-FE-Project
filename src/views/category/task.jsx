// Danh mục công việc

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import { Msearch, Mbutton, Mtable, Mcheckbox } from "../../components/BasicUI";

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
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "taskCode",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Mã công việc",
      },
      {
        columnId: "taskName",
        width: 850,
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
          text: container?.taskCode || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.taskName || "",
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.workCrane) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.workYard) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.workGate) || false,
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
      <div>
        <div>
          <div>Danh mục công việc</div>
          <div>
            <div>
              <div>
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
              <div>
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
            <div>
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
export default Task;
