import React, { Component } from "react";
import { Mcollapse, Mdrawer, Mbutton, Mcapcha } from "./components/BasicUI";
import Header from "./components/Header";
import Footer from "./components/Footer";

class ShowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        { label: "Section 1", content: "Content of section 1" },
        { label: "Section 2", content: "Content of section 2" },
        { label: "Section 3", content: "Content of section 3" },
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

  render() {
    return (
      <>
        <Header />
        <div classnName="bodylayout" style={{ margin: "100px 40% 100px 30%" }}>
          <h1 style={{ color: "green", margin: "50px 0px 50px 0px" }}>
            Show component
          </h1>
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mcollapse</h2>
          <Mcollapse
            dataSource={this.state.dataSource}
            config={this.state.config}
          />
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mdrawer</h2>
          <Mbutton onClick={this.onShow} style={{ margin: "10px 0px" }}>
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

        </div>
        <Footer />
      </>
    );
  }
}

export default ShowComponent;
