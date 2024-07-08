import React, { Component } from "react";
import "./SystemManagerGroupPermission.scss";
import {
  Mbutton,
  Msearch,
  Mselect,
  Mtable,
  Winput,
} from "../../../components/BasicUI";
import {
  CloudDownloadOutlined,
  SaveOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import CheckboxCellTemplate from "../systemManageUser/CellTemplate";
let tableData = [
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

function generateRandomContainerNo() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (let index = 0; index < 10; index++) {
  const duplicatedData = { ...tableData[0] };
  duplicatedData.ContainerNo = generateRandomContainerNo();
  tableData.push(duplicatedData);
}
export class SystemManagerGroupPermission extends Component {
  constructor(props) {
    super(props);
    this.checkboxCellTemplate = new CheckboxCellTemplate();
    this.state = {
      tableData: tableData,
      loadData: false,
      selectedRowKeys: [],
    };
  }

  handleLoadData = () => {
    this.setState((prev) => ({
      loadData: !prev.loadData,
    }));
  };

  render() {
    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "Category",
        width: 400,
        resizable: true,
        reorderable: true,
        header: "Tên danh mục",
      },
      {
        columnId: "parentCode",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Parent Code",
      },
      {
        columnId: "view",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Xem",
      },
      {
        columnId: "add",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Thêm",
      },
      {
        columnId: "edit",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "Sửa",
      },
      {
        columnId: "delete",
        width: 150,
        resizable: true,
        reorderable: true,
        header: "xóa",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        { type: "text", nonEditable: true, text: container?.category || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.parentCode || "",
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.view) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.add) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.edit) || false,
        },
        {
          type: "checkbox",
          nonEditable: true,
          checked: Boolean(container?.delete) || false,
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Tên danh mục" },
      { type: "header", text: "Parent Code" },
      { type: "header", text: "Xem" },
      { type: "header", text: "Thêm" },
      { type: "header", text: "Sửa" },
      { type: "header", text: "Xóa" },
    ];
    return (
      <div className="system-permission-container">
        <div className="panel-manage-permission">
          <header>Quản lý phân quyền </header>
          <div className="list-select">
            <Mselect
              dataSource={{
                id: "select1",
                label: "Quản lý người dùng",
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
              <Winput
                name={"searchData"}
                className={`form_input_field`}
                prefix={<SearchOutlined />}
                placeholder={"Tìm kiếm..."}
              />
            </div>
            <div className="save">
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
            <Mtable
              tableData={this.state.tableData}
              columnsFormat={columnsFormat}
              rowsFormat={rowsFormat}
              rowsHeader={rowsHeader}
              reoderRow={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SystemManagerGroupPermission;
