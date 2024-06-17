import React, { Component } from "react";
import {
  Mcollapse,
  Mdrawer,
  Mbutton,
  Mcapcha,
  Mtab,
  Mcheckbox,
} from "./components/BasicUI";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/BasicUI.scss";
import { Button } from "antd";

class ShowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        { label: "Section 1", content: "Happy code!" },
        { label: "Section 2", content: "Happy money!" },
        { label: "Section 3", content: "Happy life!" },
      ],
      configCollapse: {},
      dataSourceDrawer: {
        content: "Happy code! Happy money! Happy life!",
      },
      configDrawer: {
        title: "Drawer Title",
        placement: "right",
        onClose: this.onClose,
        visible: this.state?.visible,
      },
      isCaptchaVerified: false,
      tabConfig: {
        dataEndpoint: "https://example.com/api/tabs", // URL giả định cho endpoint dữ liệu tabs
        footer:
          "This is a footer text for the tabs. Happy code! Happy money! Happy life!",
      },
      tabData: [
        { label: "Tab 1", content: "Content of Tab 1" },
        { label: "Tab 2", content: "Content of Tab 2", badge: 5 },
        { label: "Tab 3", content: "Content of Tab 3" },
      ],
      checkboxValue: false,
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onShow = () => {
    this.setState({
      visible: true,
    });
  };

  handleCaptchaVerify = (isVerified) => {
    this.setState({
      isCaptchaVerified: isVerified,
    });
  };

  handleCheckboxChange = (returnValue) => {
    this.setState({
      checkboxValue: returnValue.checked,
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="component-bodylayout">
          <h1
            className="tile-component"
            style={{ margin: "50px 0px 50px 0px" }}
          >
            Show component
          </h1>
          <div class="heading-xl-normal">This is a normal heading XL</div>
          <div class="heading-xl-bold">This is a bold heading XL</div>
          <div class="heading-lg-normal">This is a normal heading LG</div>
          <div class="heading-lg-bold">This is a bold heading LG</div>
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mcollapse</h2>
          <Mcollapse
            className="test-Mcollapse"
            dataSource={this.state.dataSource}
            config={this.state.config}
          />
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mdrawer</h2>
          <Mbutton className="test_button_red" onClick={this.onShow} style={{ margin: "10px 0px" }}>
            Open Drawer
          </Mbutton>
          <Mdrawer
            dataSource={this.state.dataSourceDrawer}
            config={{ ...this.state.configDrawer, visible: this.state.visible }}
          />
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mcapcha</h2>
          <div style={{ margin: "20px 0px" }}>
            <Mcapcha
              captchaEndpoint="https://example.com/api/captcha" // URL giả định cho endpoint CAPTCHA
              onVerify={this.handleCaptchaVerify}
            />
          </div>
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mtab</h2>
          <div style={{ margin: "20px 0px" }}>
            <Mtab
              dataEndpoint="https://example.com/api/tabs" // URL giả định cho endpoint dữ liệu tabs
              footer="This is a footer text for the tabs. Happy code! Happy money! Happy life!"
              config={{ animated: true }}
              dataSource={this.state.tabData}
            />
          </div>
          <span className="bodylayout">
            <Mcheckbox
              dataSource={{
                value: this.state.checkboxValue,
                label: "I agree to the terms and conditions",
              }}
              onChangeValue={this.handleCheckboxChange}
            />
          </span>
        </div>
        <Footer />
      </>
    );
  }
}

export default ShowComponent;
