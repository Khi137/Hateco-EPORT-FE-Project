import React, { Component } from "react";
import "./SystemManageGroup.scss";
import { Mbutton, Msearch, Mtable, Winput } from "../../../components/BasicUI";
import {
  CloseCircleOutlined,
  PlusCircleOutlined,
  SaveOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ReactGrid } from "@silevis/reactgrid";
import { Checkbox } from "antd";
import CheckboxCellTemplate from "../systemManageUser/CellTemplate";

let rowData = [
  {
    key: "1",
    levelGroup: "2",
    codeGroup: "QUANTRI",
    nameGroup: "Quản Trị Hệ Thống",
    note: "",
  },
  {
    key: "2",
    levelGroup: "2",
    codeGroup: "DEV",
    nameGroup: "developer",
    note: "",
  },
  {
    key: "3",
    levelGroup: "2",
    codeGroup: "BOD",
    nameGroup: "BOD Tập Đoàn",
    note: "",
  },
  {
    key: "4",
    levelGroup: "2",
    codeGroup: "RM",
    nameGroup: "RM Tập đoàn",
    note: "",
  },
];
export class SystemManageGroup extends Component {
  constructor(props) {
    super(props);
    this.checkboxCellTemplate = new CheckboxCellTemplate();
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 100, resizable: true, header: "STT" },
          {
            columnId: "Level",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Cấp độ nhóm",
          },
          {
            columnId: "CodeGroup",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Mã nhóm",
          },
          {
            columnId: "NameGroup",
            width: 300,
            resizable: true,
            reorderable: true,
            header: "Tên nhóm",
          },
          {
            columnId: "Note",
            width: 710,
            resizable: true,
            reorderable: true,
            header: "Ghi chú",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Cấp độ nhóm" },
              { type: "header", text: "Mã nhóm" },
              { type: "header", text: "Tên nhóm" },
              { type: "header", text: "Ghi chú" },
            ],
          },
          ...this.generateTableData(rowData),
        ],
      },
      loadData: false,
      selectedRowKeys: [],
    };
  }
  getColumns = () => [
    { columnId: "STT", width: 50, resizable: true, header: "STT" },
    {
      columnId: "Level",
      width: 200,
      resizable: true,
      reorderable: true,
      header: "Cấp độ nhóm",
    },
    {
      columnId: "CodeGroup",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "Mã nhóm",
    },
    {
      columnId: "NameGroup",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "Tên nhóm",
    },
    {
      columnId: "Note",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "Ghi chú",
    },
  ];

  generateRowData = (container, index) => {
    return {
      rowId: String(index + 1),
      cells: [
        { type: "text", nonEditable: true, text: container?.key || "" },
        { type: "text", nonEditable: false, text: container?.levelGroup || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.codeGroup || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.nameGroup || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.note || "",
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

  handleRowSelect = (e) => {
    const target = e[0].first.row;
    this.setState((prevState) => {
      const alreadySelected = prevState.selectedRowKeys.includes(target);
      const selectedRowKeys = alreadySelected
        ? prevState.selectedRowKeys.filter((key) => key !== target)
        : [...prevState.selectedRowKeys, target];

      return { selectedRowKeys };
    });
  };

  handleSelectAll = () => {
    const updatedRows = rowData.map((row) => ({ ...row, selected: true }));
    this.setState({
      tableData: {
        ...this.state.tableData,
        reactGridRows: this.generateTableData(updatedRows),
      },
    });
  };
  render() {
    return (
      <div className="system-group-container">
        <div className="panel-system-group">
          <header>Danh sách nhóm người dùng</header>
          <div className="system-group-actions">
            <div className="action-search">
              <Winput
                name={"searchData"}
                className={`form_input_field`}
                prefix={<SearchOutlined />}
                placeholder={"Tìm kiếm..."}
              />
            </div>
            <div className="action-list">
              <Mbutton
                className="m_button green drop-button-shadow"
                block
                htmlType="submit"
                type="primary"
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                dataSource={{
                  textbutton: "Thêm dòng",
                  color: "",
                  size: "12",
                  icon: "PlusCircleOutlined",
                }}
              />
              <Mbutton
                className="m_button orange drop-button-shadow"
                block
                htmlType="submit"
                type="primary"
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                dataSource={{
                  textbutton: "Xóa dòng",
                  color: "",
                  size: "12",
                  icon: "MinusCircleOutlined",
                }}
              />
              <Mbutton
                className="m_button red drop-button-shadow"
                block
                htmlType="submit"
                type="primary"
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                dataSource={{
                  textbutton: "Lưu",
                  color: "",
                  size: "12",
                  icon: "SaveOutlined",
                }}
              />
            </div>
          </div>
          <div className="table-data-user">
            <ReactGrid
              rows={this.state.tableData.reactGridRows}
              columns={this.state.tableData.reactGridColumns}
              customCellTemplates={{ custom: this.checkboxCellTemplate }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SystemManageGroup;
