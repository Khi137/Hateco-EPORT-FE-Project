// Danh mục kích cỡ

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import { Msearch, Mbutton, Mtable, Mcheckbox } from "../../components/BasicUI";
import { Checkbox } from "antd";

let rowData = [
  {
    key: "1",
    typeC: "Container 20 feet",
    lenghtC: "5.898",
    widthC: "2.352",
    heightC: "2.395",
    volumeC: "33.2",
  },
  {
    key: "2",
    typeC: "Container 20 feet lạnh",
    lenghtC: "5.485",
    widthC: "2.286",
    heightC: "2.265",
    volumeC: "28.4",
  },
  {
    key: "3",
    typeC: "Container 40 feet thường",
    lenghtC: "12.032",
    widthC: "2.35",
    heightC: "2.392",
    volumeC: "67.6",
  },
  {
    key: "4",
    typeC: "Container 40 feet cao",
    lenghtC: "12.023",
    widthC: "2.352",
    heightC: "2.698",
    volumeC: "76.3",
  },
  {
    key: "5",
    typeC: "Container 40 feet lạnh",
    lenghtC: "11.572",
    widthC: "2.296",
    heightC: "2.521",
    volumeC: "67.0",
  },
];

export class SizeContainer extends Component {
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
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
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
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Loại Container" },
      { type: "header", text: "Chiều dài (m)" },
      { type: "header", text: "Chiều rộng (m)" },
      { type: "header", text: "Chiều cao (m)" },
      { type: "header", text: "Thể tích (m3)" },
    ];

    return (
      <div>
        <div>
          <div>Danh mục kích cỡ</div>
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
export default SizeContainer;
