import React, { Component } from "react";
import * as Icons from "@ant-design/icons";

export class Empty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text ? this.props.text : "Dữ liệu trống",
      icon: this.props.icon ? this.props.icon : "UserOutlined",
    };
  }
  render() {
    const IconComponent = Icons[this.state.icon];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gap: "12px",
          height: "65vh",
          width: "100%",
        }}
      >
        <IconComponent style={{ fontSize: "150px" }} />
        <p style={{ fontSize: "14px" }}>{this.state.text}</p>
      </div>
    );
  }
}

export default Empty;
