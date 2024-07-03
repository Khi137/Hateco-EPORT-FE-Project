import { UserOutlined } from "@ant-design/icons";
import React, { Component } from "react";

export class Empty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text ? this.props.text : "Dữ liệu trống",
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gap: "12px",
        }}
      >
        <UserOutlined style={{ fontSize: "40px" }} />
        <p style={{ fontSize: "14px" }}>{this.state.text}</p>
      </div>
    );
  }
}

export default Empty;
