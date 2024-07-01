import React, { Component } from "react";
import "./SystemManagerGroupPermission.scss";
import { Msearch, Mselect, Mtable } from "../../../components/BasicUI";
import { CloudDownloadOutlined, SaveOutlined } from "@ant-design/icons";
import { ReactGrid } from "@silevis/reactgrid";
import { Checkbox } from "antd";
import CheckboxCellTemplate from "../systemManageUser/CellTemplate";
let rowData = [
  {
    key: "1",
    category: "Lệnh đóng hàng container",
    parentCode: "Task",
    view: false,
    add: true,
    edit: true,
    delete: false,
  },
  {
    key: "2",
    category: "Cập nhật thông tin lệnh",
    parentCode: "Task",
    view: true,
    add: false,
    edit: true,
    delete: true,
  },
  {
    key: "3",
    category: "	Lệnh rút hàng Container",
    parentCode: "Task",
    view: true,
    add: false,
    edit: false,
    delete: true,
  },
  {
    key: "4",
    category: "Duyệt lệnh",
    parentCode: "Task",
    view: false,
    add: false,
    edit: false,
    delete: true,
  },
];
export class SystemManagerGroupPermission extends Component {
  constructor(props) {
    super(props);
    this.checkboxCellTemplate = new CheckboxCellTemplate();
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 50, resizable: true, header: "STT" },
          {
            columnId: "Category",
            width: 350,
            resizable: true,
            reorderable: true,
            header: "Tên danh mục",
          },
          {
            columnId: "ParentCode",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "ParentCode",
          },
          {
            columnId: "View",
            width: 100,
            resizable: true,
            header: <Checkbox />,
            header: "Xem",
          },
          {
            columnId: "Add",
            width: 100,
            resizable: true,
            header: <Checkbox />,
            header: "Thêm",
          },
          {
            columnId: "Edit",
            width: 100,
            resizable: true,
            header: <Checkbox />,
            header: "Sửa",
          },
          {
            columnId: "Delete",
            width: 100,
            resizable: true,
            header: <Checkbox />,
            header: "Xóa",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Tên danh mục" },
              { type: "header", text: "ParentCode" },
              { type: "header", text: "Xem" },
              { type: "header", text: "Thêm" },
              { type: "header", text: "Sửa" },
              { type: "header", text: "Xóa" },
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
      columnId: "Category",
      width: 200,
      resizable: true,
      reorderable: true,
      header: "Tên danh mục",
    },
    {
      columnId: "ParentCode",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "ParentCode",
    },
    {
      columnId: "View",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "Xem",
    },
    {
      columnId: "Add",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "Thêm",
    },
    {
      columnId: "Edit",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "Sửa",
    },
    {
      columnId: "Delete",
      width: 50,
      resizable: true,
      reorderable: true,
      header: "Xóa",
    },
  ];

  generateRowData = (container, index) => {
    return {
      rowId: String(index + 1),
      cells: [
        { type: "text", nonEditable: true, text: container?.key || "" },
        { type: "text", nonEditable: false, text: container?.category || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.parentCode || "",
        },
        {
          type: "custom",
          value: {
            checked: container.view,
            rowId: container.key,
          },
        },
        {
          type: "custom",
          value: {
            checked: container.add,
            rowId: container.key,
          },
        },
        {
          type: "custom",
          value: {
            checked: container.edit,
            rowId: container.key,
          },
        },
        {
          type: "custom",
          value: {
            checked: container.delete,
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

  handleDeleteSelected = () => {
    const filteredRows = rowData.filter((row) => !row.selected);
    this.setState({
      tableData: {
        ...this.state.tableData,
        reactGridRows: this.generateTableData(filteredRows),
      },
    });
  };

  handleLoadData = () => {
    this.setState((prev) => ({
      loadData: !prev.loadData,
    }));
  };

  handleAddRow = () => {
    const newKey = (rowData.length + 1).toString();
    const newRow = {
      key: newKey,
      group: "",
      portCode: "",
      username: "",
      password: null,
      name: "",
      cardId: null,
      address: "",
      phone: "",
      email: "",
      support: null,
      status: false,
    };
    rowData = [...rowData, newRow];
    const updatedTableData = {
      reactGridColumns: this.state.tableData.reactGridColumns,
      reactGridRows: [
        ...this.state.tableData.reactGridRows,
        this.generateRowData(newRow, rowData.length - 1),
      ],
    };

    this.setState({
      tableData: updatedTableData,
    });
  };

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };
  render() {
    return (
      <div className="system-permission-container">
        <div className="panel-manage-permission">
          <header>Quản lý phân quyền </header>
          <div className="list-select">
            <Mselect
              dataSource={{
                id: "select1",
                label: "Quản lý người dùng",
                // value: this.state.selectValue,
                options: [
                  { label: "QUANTRI: Quản trị hệ thống", value: "QTHT" },
                  { label: "Dev: Developer", value: "DEV" },
                  { label: "BOD: BOD Tập đoàn", value: "BOD" },
                ],
              }}
            />
            <Mselect
              dataSource={{
                id: "select1",
                label: "Chọn cảng",
                options: [
                  { label: "NDV", value: "NDV" },
                  { label: "Cát lái", value: "Catlai" },
                  { label: "Hải phòng", value: "HP" },
                ],
              }}
            />
          </div>
          <div className="button">
            <button className="button-load-data">
              {" "}
              <CloudDownloadOutlined /> Nạp dữ liệu
            </button>
          </div>
        </div>
        <div className="panel-table">
          <div className="header-action">
            <div className="search">
              <Msearch />
            </div>
            <div className="save">
              <button>
                <SaveOutlined className="icon" />
                Lưu
              </button>
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

export default SystemManagerGroupPermission;
