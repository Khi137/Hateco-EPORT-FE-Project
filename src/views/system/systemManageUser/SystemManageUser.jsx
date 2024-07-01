import React, { Component } from "react";
import "./SystemManageUser.scss";
import { Mradio, Msearch, Mselect, Mtable } from "../../../components/BasicUI";
import {
  CloseCircleOutlined,
  CloudDownloadOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { ReactGrid } from "@silevis/reactgrid";
import { Checkbox } from "antd";
import CheckboxCellTemplate from "./CellTemplate.jsx";
let rowData = [
  {
    selected: false,
    key: "1",
    group: "Hãng Tàu",
    portCode: "NDV,NDP",
    username: "LCL",
    password: null,
    name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
    cardId: null,
    address:
      "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
    phone: "0936793580",
    email: "cs-hph@litcoline.com",
    support: null,
    status: null,
  },
  {
    selected: false,
    key: "2",
    group: "Marketing - BDD",
    portCode: "NDV,NDP",
    username: "huynn",
    password: null,
    name: "Nguyễn Ngọc Huy",
    cardId: null,
    address: "Cảng Nam Đình Vũ",
    phone: "09367935888",
    email: "huy.nn@namdinhvuport.com.vn",
    support: null,
    status: null,
  },
  {
    selected: false,
    key: "3",
    group: "Cty FWD",
    portCode: "NDV,NDP",
    username: "tnamtest",
    password: null,
    name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
    cardId: null,
    address:
      "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
    phone: "0936793580",
    email: "cs-hph@litcoline.com",
    support: null,
    status: null,
  },
  {
    selected: false,
    key: "4",
    group: "Hãng Tàu",
    portCode: "NDV,NDP",
    username: "LCL",
    password: null,
    name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
    cardId: null,
    address:
      "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
    phone: "0936793580",
    email: "cs-hph@litcoline.com",
    support: null,
    status: null,
  },
  {
    selected: true,
    key: "5",
    group: "Hãng Tàu",
    portCode: "NDV,NDP",
    username: "LCL",
    password: null,
    name: "CTY TNHH LITCO CONTAINER LINE VIET NAM",
    cardId: null,
    address:
      "Room 816, TD Business Center, Lot4 & 5/20A, Le Hong Phong Street, Dong Khe Ward, Ngo Quyen District, Hai Phong City, Viet Nam",
    phone: "0936793580",
    email: "cs-hph@litcoline.com",
    support: null,
    status: null,
  },
];

export class SystemManageUser extends Component {
  constructor(props) {
    super(props);
    this.checkboxCellTemplate = new CheckboxCellTemplate();
    this.state = {
      tableData: {
        reactGridColumns: [
          {
            columnId: "checkbox",
            width: 50,
            resizable: true,
            header: <Checkbox />,
          },

          { columnId: "STT", width: 50, resizable: true, header: "STT" },
          {
            columnId: "ContainerNumber",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Số Container",
          },
          {
            columnId: "OperationCode",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Hãng Tàu",
          },
          {
            columnId: "IsoSizetype",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Kích cỡ",
          },
          {
            columnId: "CargoTypeName",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Full/Empty",
          },
          {
            columnId: "ClassName",
            width: 400,
            resizable: true,
            reorderable: true,
            header: "Hướng",
          },
          {
            columnId: "ExpDate",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Hạn Booking",
          },
          {
            columnId: "Position",
            width: 1000,
            resizable: true,
            reorderable: true,
            header: "Vị trí bãi",
          },
          {
            columnId: "DateIn",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Ngày vào bãi",
          },
          {
            columnId: "DateOut",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Ngày ra bãi",
          },
          {
            columnId: "ContainerStatusName",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Tình trạng cont",
          },
          {
            columnId: "Cabc",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Tình trạng cont",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "Chọn" },
              { type: "header", text: "STT" },
              { type: "header", text: "Số Container" },
              { type: "header", text: "Hãng Tàu" },
              { type: "header", text: "Kích cỡ" },
              { type: "header", text: "Full/Empty" },
              { type: "header", text: "Hướng" },
              { type: "header", text: "Hạn Booking" },
              { type: "header", text: "Vị trí bãi" },
              { type: "header", text: "Ngày vào bãi" },
              { type: "header", text: "Ngày ra bãi" },
              { type: "header", text: "Tình trạng cont" },
              { type: "header", text: "Tình trạng cont" },
            ],
          },
          ...this.generateTableData(rowData),
        ],
      },
      loadData: false,
      selectedRowKeys: [],
    };
    this.columns = [
      {
        title: "STT",
        dataIndex: "key",
        key: "key",
        width: 100,
      },
      {
        title: "Nhóm",
        dataIndex: "group",
        key: "group",
        width: 200,
      },
      {
        title: "Mã cảng",
        dataIndex: "portCode",
        key: "portCode",
        width: 200,
      },
      {
        title: "Tên đăng nhập",
        dataIndex: "username",
        key: "username",
        width: 150,
      },
      {
        title: "Mật khẩu",
        dataIndex: "password",
        key: "password",
        width: 100,
      },
      {
        title: "Họ tên",
        dataIndex: "name",
        key: "name",
        width: 250,
      },
      {
        title: "CCCD/CMND",
        dataIndex: "cardId",
        key: "cardId",
        width: 150,
      },
      {
        title: "Địa chỉ",
        dataIndex: "address",
        key: "address",
        width: 600,
      },
      {
        title: "Số điện thoại",
        dataIndex: "phone",
        key: "phone",
        width: 150,
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        width: 300,
      },
      {
        title: "Kinh doanh hổ trợ",
        dataIndex: "support",
        key: "support",
        width: 500,
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        width: 150,
      },
    ];
  }

  getColumns = () => [
    {
      columnId: "checkbox",
      width: 50,
      resizable: true,
      header: <Checkbox />,
    },

    { columnId: "STT", width: 50, resizable: true, header: "STT" },
    {
      columnId: "ContainerNumber",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Số Container",
    },
    {
      columnId: "OperationCode",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Hãng Tàu",
    },
    {
      columnId: "IsoSizetype",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Kích cỡ",
    },
    {
      columnId: "CargoTypeName",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Full/Empty",
    },
    {
      columnId: "ClassName",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Hướng",
    },
    {
      columnId: "ExpDate",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Hạn Booking",
    },
    {
      columnId: "Position",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Vị trí bãi",
    },
    {
      columnId: "DateIn",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Ngày vào bãi",
    },
    {
      columnId: "DateOut",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Ngày ra bãi",
    },
    {
      columnId: "ContainerStatusName",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Tình trạng cont",
    },
    {
      columnId: "Cabc",
      width: 150,
      resizable: true,
      reorderable: true,
      header: "Tình trạng cont",
    },
  ];

  generateRowData = (container, index) => {
    return {
      rowId: String(index + 1),
      cells: [
        {
          type: "custom",
          value: {
            checked: container.selected,
            rowId: container.key,
          },
        },
        { type: "text", nonEditable: true, text: container?.key || "" },
        { type: "text", nonEditable: false, text: container?.group || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.portCode || "",
        },
        { type: "text", nonEditable: true, text: container?.username || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.password || "",
        },

        { type: "text", nonEditable: true, text: container?.name || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.cardId || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.address || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.phone || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.email || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.support || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.status || "",
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
    const { loadData, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    console.log(selectedRowKeys);
    return (
      <div className="systemManageUser-container">
        <div className="panel-left">
          <header>Quản lý người dùng</header>
          <div className="select-group">
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
                // value: this.state.selectValue,
                options: [
                  { label: "NDV", value: "NDV" },
                  { label: "Cát lái", value: "Catlai" },
                  { label: "Hải phòng", value: "HP" },
                ],
              }}
            />
          </div>
          <div className="button">
            <button className="button-load-data" onClick={this.handleLoadData}>
              <CloudDownloadOutlined /> Nạp dữ liệu
            </button>
          </div>
          <div>
            <Mradio
              dataSource={{
                label: "Select an option",
                options: [
                  { label: "Tất cả", value: "option1" },
                  { label: "Đã kích hoạt", value: "option2" },
                  { label: "Chưa kích hoạt", value: "option3" },
                ],
                radioStyle: { gap: "50px", padding: "12px 0" },
              }}
            />
          </div>
        </div>
        <div className="panel-right">
          <div className="action-right">
            <div className="header-action">
              <div className="search">
                <Msearch />
              </div>
              <div className="lists-action">
                <button className="btn green" onClick={this.handleAddRow}>
                  <PlusCircleOutlined className="icon" />
                  Thêm dòng
                </button>
                <button className="btn red" onClick={this.handleDeleteRow}>
                  <CloseCircleOutlined className="icon" />
                  Xóa dòng
                </button>
                <button className="btn blue">
                  <SaveOutlined className="icon" />
                  Lưu
                </button>
                <button className="btn black">
                  <FileTextOutlined className="icon" />
                  Xuất excel
                </button>
              </div>
            </div>

            <div className="line">Danh sách người dùng</div>
            <div className="table-data-user">
              <ReactGrid
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

export default SystemManageUser;
