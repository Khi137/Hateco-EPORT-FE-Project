import React, { Component } from "react";
import "./SystemManageUser.scss";
import { Mradio, Msearch, Mselect } from "../../../components/BasicUI";
import {
  CloseCircleOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { ReactGrid } from "@silevis/reactgrid";
const dataSource = {
  label: "QUANTRI: Quản trị hệ thống",
  value: "QTHT",
};
export class SystemManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reactGridColumns: [
        {
          columnId: "STT",
          width: 50,
          resizable: true,
          sortable: true,
          header: "STT",
        },
        {
          columnId: "MaHangTau",
          width: 150,
          resizable: true,
          sortable: true,
          header: "Mã Hãng Tàu",
        },
        {
          columnId: "TenHangTau",
          width: 500,
          resizable: true,
          sortable: true,
          header: "Tên Hãng Tàu",
        },
        {
          columnId: "TrangThai",
          width: 100,
          resizable: true,
          sortable: true,
          header: "Trạng thái",
        },
      ],
      reactGridRows: [
        {
          rowId: "header",
          cells: [
            { type: "header", text: "STT" },
            { type: "header", text: "Mã hãng tàu" },
            { type: "header", text: "Tên hãng tàu" },
            { type: "header", text: "Trạng thái" },
          ],
        },
        {
          rowId: 1,
          cells: [
            { type: "text", nonEditable: true, text: "1" },
            { type: "text", text: "CNC" },
            { type: "text", text: "Công ty cổ phần CMA - CGM Việt Nam (CMA)" },
            { type: "checkbox", checked: false },
          ],
        },
        {
          rowId: 2,
          cells: [
            { type: "text", nonEditable: true, text: "2" },
            { type: "text", text: "CNC" },
            { type: "text", text: "Công ty cổ phần CMA - CGM Việt Nam (CMA)" },
            { type: "checkbox", checked: false },
          ],
        },
        {
          rowId: 3,
          cells: [
            { type: "text", nonEditable: true, text: "3" },
            { type: "text", text: "CNC" },
            { type: "text", text: "Công ty cổ phần CMA - CGM Việt Nam (CMA)" },
            { type: "checkbox", checked: false },
          ],
        },
        {
          rowId: 4,
          cells: [
            { type: "text", nonEditable: true, text: "4" },
            { type: "text", text: "CNC" },
            { type: "text", text: "Công ty cổ phần CMA - CGM Việt Nam (CMA)" },
            { type: "checkbox", checked: false },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="systemManageUser-container">
        <div className="panel-left">
          <header>Quản lý người dùng</header>
          <div className="select-group">
            <Mselect
              dataSource={{
                id: "select1",
                label: "Nhóm người dùng",
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
                  { label: "QUANTRI: Quản trị hệ thống", value: "QTHT" },
                  { label: "Dev: Developer", value: "DEV" },
                  { label: "BOD: BOD Tập đoàn", value: "BOD" },
                ],
              }}
            />
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
                <button className="btn green">
                  <PlusCircleOutlined className="icon" />
                  Thêm dòng
                </button>
                <button className="btn red">
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
            <div>
              {/* <ReactGrid
                rows={this.state.reactGridRows}
                columns={this.state.reactGridColumns}
                stickyTopRows={1}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SystemManageUser;
