// Danh mục loại hàng hóa

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import { Msearch, Mbutton, Mtable, Mcheckbox } from "../../components/BasicUI";

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
    width: 400,
    resizable: true,
    reorderable: true,
    header: "Mã loại hàng",
  },
  {
    columnId: "taskName",
    width: 1200,
    resizable: true,
    reorderable: true,
    header: "Tên loại hàng",
  },
];

const rowsFormat = (container, index) => [
  { type: "text", nonEditable: true, text: String(index + 1) },
  { type: "text", nonEditable: false, text: container?.taskCode || "" },
  { type: "text", nonEditable: true, text: container?.taskName || "" },
];

const rowsHeader = [
  { type: "header", text: "STT" },
  { type: "header", text: "Mã loại hàng" },
  { type: "header", text: "Tên loại hàng" },
];

const Navigation = ({ searchValue, handleSearchChange, handleFormSubmit }) => (
  <div>
    <div>
      <Msearch
        dataSource={{
          id: "search1",
          label: "Search",
          value: searchValue,
          icon: "SearchOutlined",
          text: "",
        }}
        config={{
          onLiveSearch: (value) => console.log("Live search:", value),
        }}
        onChangeValue={(e) => handleSearchChange(e["search1"])}
      />
    </div>
    <div>
      <Mbutton
        className="m_button green drop-button-shadow"
        block
        htmlType="submit"
        type="primary"
        onClick={handleFormSubmit}
        dataSource={{
          textbutton: "Xuất file excel",
          color: "",
          size: "12",
          icon: "FileExcelOutlined",
        }}
      />
    </div>
  </div>
);

const Table = ({ rowData, columnsFormat, rowsFormat, rowsHeader }) => (
  <div>
    <Mtable
      tableData={rowData}
      columnsFormat={columnsFormat}
      rowsFormat={rowsFormat}
      rowsHeader={rowsHeader}
      reoderRow={true}
    />
  </div>
);

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

  handleSearchChange = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <div>
        <div>
          <div>Danh mục loại hàng hóa</div>
          <div>
            <Navigation
              searchValue={this.state.searchValue}
              handleSearchChange={this.handleSearchChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <Table
              rowData={rowData}
              columnsFormat={columnsFormat}
              rowsFormat={rowsFormat}
              rowsHeader={rowsHeader}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CommoditiesType;
