import React, { Component } from "react";
import "./SystemManageGroup.scss";
import { Msearch } from "../../../components/BasicUI";
import {
  CloseCircleOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
export class SystemManageGroup extends Component {
  render() {
    return (
      <div className="system-group-container">
        <header>Danh sách nhóm người dùng</header>
        <div className="system-group-actions">
          <div className="action-search">
            {" "}
            <Msearch />
          </div>
          <div className="action-list">
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
          </div>
        </div>
      </div>
    );
  }
}

export default SystemManageGroup;
