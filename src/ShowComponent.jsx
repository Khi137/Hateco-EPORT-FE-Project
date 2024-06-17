import React, { Component, createRef } from "react";
import { Mcollapse, Mdrawer, Mbutton, Mcapcha, Mcheckbox, Winput, Minput } from "./components/BasicUI";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Col, Row, Tooltip } from "antd";
import { InfoCircleOutlined, MailOutlined } from "@ant-design/icons";

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
      checkbox: false,
      formdata: {
        user: "",
        userError: "Không được để trống"
      },
    };
    this.mButtonRef = createRef();
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

  // MCheckbox

  handleCheckboxChange = (value) => {
    this.setState(prevState => ({
      checkbox: value
    }));
  };

  // MButton

  handleFormSubmit = () => {
    if (this.mButtonRef.current) {
      this.mButtonRef.current.loading();
    }
    setTimeout(() => {
      if (this.mButtonRef.current) {
        this.mButtonRef.current.reset();
      }
    }, 2000);
  }

  // Winput

  handleInputChange = (e, regex) => {
    const { name, value } = e.target;

    if (value === "") {
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }));
      return value
    }

    if (regex && !regex.test(value)) {
      console.error(`Value does not match the regex: ${regex}`);
      return
    } else {
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }));
    }
    return value
  };

  render() {
    const checkboxDataSource = {
      label: "Ghi nhớ mật khẩu",
      value: this.state.checkbox,
      className: `${this.state.checkbox && "m-checkbox_checked"}`,
    };

    const inputvalue = ""

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
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mcheckbox</h2>
          <Mcheckbox onChangeValue={(returnValue) => this.handleCheckboxChange(returnValue?.checked)} dataSource={checkboxDataSource} />
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Mbutton (third, outlet, black, red, green, orange)</h2>
          <Mbutton
            className='form_button m_button third'
            type="primary"
            htmlType="submit"
            block
            onClick={this.handleFormSubmit}
            ref={this.mButtonRef}
          >
            Đăng nhập
          </Mbutton>
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Winput</h2>
          <Col className="form_item ">
            <Row className="item_header">
              <Col>Tên đăng nhập<span className="item_require"> * </span></Col>
              <Tooltip placement="top" title={"Email, sđt hoặc username"} className="item_tooltip">
                <InfoCircleOutlined />
              </Tooltip>
            </Row>
            <Winput
              name={"user"}
              type={"text"}
              className={`form_input_field ${!this.state.formdata.userError ? 'error_input' : ''}`}
              prefix={<MailOutlined />}
              placeholder={"Email, sđt hoặc username"}
              value={this.state.formdata.user}
              onChange={(e) => this.handleInputChange(e)}
              errorText={!this.state.formdata.userError && this.state.formdata.userError}
            />
          </Col>
          <Col className="form_item ">
            <Row className="item_header">
              <Col>Tên đăng nhập<span className="item_require"> * </span></Col>
              <Tooltip placement="top" title={"Email, sđt hoặc username"} className="item_tooltip">
                <InfoCircleOutlined />
              </Tooltip>
            </Row>
            <Winput
              name={"user"}
              type={"text"}
              className={`form_input_field ${this.state.formdata.userError ? 'error_input' : ''}`}
              prefix={<MailOutlined />}
              placeholder={"Email, sđt hoặc username"}
              value={this.state.formdata.user}
              onChange={(e) => this.handleInputChange(e)}
              errorText={this.state.formdata.userError && this.state.formdata.userError}
            />
          </Col>
          <h2 style={{ margin: "10px 0px 0px 0px" }}>Minput</h2>
          <Minput
            name="Minput"
            value={inputvalue}
            onChangeValue={(e) => console.log(e)}
            dataSource={{
              ref: "Minput",
              icon: "MailOutlined",
              // inputType: "password"
            }}

          />

        </div>
        <Footer />
      </>
    );
  }
}

export default ShowComponent;
