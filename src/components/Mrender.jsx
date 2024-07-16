import Icon, * as LOL from "@ant-design/icons";
import {
  Row,
  Col,
  Tooltip,
  Button,
  Drawer,
  List,
  message,
  Result,
  Carousel,
  Spin,
} from "antd";
import { isMobile } from "react-device-detect";
import React from "react";
import { isMobileOnly } from "react-device-detect";
import {
  Mautocomplete,
  Mbutton,
  Mcapcha,
  Mcheckbox,
  Mdatepicker,
  Mdivider,
  Mform,
  Minput,
  MnonEditInput,
  Mradio,
  Msearch,
  Mselect,
  Mselectsearch,
  Mswitch,
  Mtab,
  Mupload,
} from "./BasicUI/BasicUI";

const terminalList = [
  {
    TerminalCode: "NDP",
    name: "CẢNG NAM HẢI ĐÌNH VŨ",
  },
  {
    TerminalCode: "NDV",
    name: "CẢNG NAM ĐÌNH VŨ",
  },
  {
    TerminalCode: "NHP",
    name: "CẢNG NAM HẢI",
  },
  {
    TerminalCode: "NHI",
    name: "NAM HẢI ICD",
  },
  {
    TerminalCode: "BDP",
    name: "CẢNG BÌNH DƯƠNG",
  },
  {
    TerminalCode: "GML",
    name: "CẢNG GEMALINK",
  },
  {
    TerminalCode: "VMD",
    name: "ASL GEMADEPT DEPOT",
  },
  {
    TerminalCode: "ASL",
    name: "GAL DEPOT",
  },
  {
    TerminalCode: "STD",
    name: "SUỐI TIÊN 2 DEPOT",
  },
  {
    TerminalCode: "PIP",
    name: "PHƯỚC LONG ICD 1",
  },
  {
    TerminalCode: "IC3",
    name: "PHƯỚC LONG ICD 3",
  },
  {
    TerminalCode: "GNL",
    name: "GNL DEPOT",
  },
];

export class MCarouselWithMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.data = this.props.dataSource || {};
    this.config = this.props.config || {};
  }

  renderCarouselItems(item) {
    return (
      <div className="m-carousel-item">
        <h5 className="m-carousel-item-title">{item.title}</h5>
        <span className="m-carousel-item-subtitle"></span>
        <div className="m-carousel-item-content"></div>
      </div>
    );
  }

  renderCarouselMenu(item) { }

  render() {
    return (
      <div className="m-carousel-container">
        {this.data.title ? <h5>{this.data.title}</h5> : ""}
        <Drawer
          title={this.data.title}
          placement={isMobile ? "bottom" : "left"}
          getContainer={false}
        ></Drawer>
        <Carousel className="m-carousel" {...this.config}>
          {this.data.data.map((item) => {
            return this.renderCarouselItems(item);
          })}
        </Carousel>
      </div>
    );
  }
}

export class MchangeAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
    };
  }

  handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div className="profile">
        <div className="avatar" id="avatar">
          <div id="preview">
            {this.state.avatar ? (
              <img
                src={this.state.avatar}
                id="avatar-image"
                className="avatar_img"
                alt="Avatar"
              />
            ) : (
              <img
                src="/assets/images/logo_notifi2.png"
                id="avatar-image"
                className="avatar_img"
                alt="Default Avatar"
              />
            )}
          </div>
          <div className="avatar_upload">
            <label className="upload_label" style={{ textAlign: "center" }}>
              <div style={{ textAlign: "center" }}>Tải ảnh</div>
              <input
                type="file"
                id="avatar_upload"
                style={{ display: "none" }}
                onChange={this.handleImageChange}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export class MrequireForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: "",
      inputValue: "",
      currentRef: undefined,
      submitResult: null,
      loadding: [],
      filterData: {},
      tempupload: false,
    };
  }
  submitting() {
    this.setState({ loadding: [true] });
  }

  isloading() {
    return this.state.loadding[0];
  }

  submitted() {
    this.setState({ loadding: [false] });
  }

  submitProp() {
    let dataReturn = this.state.filterData;
    this.props.submitBtn(dataReturn);
  }

  updatevalue(value) {
    let data = this.state.filterData;
    Object.assign(data, value);
    this.setState({
      filterData: data,
    });
  }

  renderLabel(item) {
    return (
      <Col span={item.span || 10}>
        <div className="m-inline-label">
          <span>{item.label}</span>
        </div>
      </Col>
    );
  }

  keyPressSubmit(e) {
    if (this.props.submitKeyPress || false) {
      if (e.key === "Enter") {
        this.submitProp();
      }
    }
  }

  render() {
    const { loadding } = this.state;
    let submiticon = React.createElement(
      LOL[this.props.submitBtnIcon || "CloudDownloadOutlined"]
    );
    return (
      <Spin size="small" spinning={loadding[0] || false}>
        <Mform
          {...this.props}
          gutter={24}
          onKeyPress={this.keyPressSubmit.bind(this)}
        >
          {(this.props.dataSource || [])
            .filter((p) => p.visible === undefined || p.visible === true)
            .map((item, index) => {
              switch (item.type) {
                case "function_content":
                  return item.content();
                  break;
                case "input":
                  return (
                    <Minput
                      config={item.config || {}}
                      onChangeValue={(value) => this.updatevalue(value)}
                      key={item.ref || index}
                      dataSource={item}
                    ></Minput>
                  );
                  break;
                case "label":
                  return this.renderLabel(item);
                  break;
                case "noneditinput":
                  return (
                    <MnonEditInput
                      dataSource={item}
                      key={item.ref || index}
                    ></MnonEditInput>
                  );
                  break;
                case "search":
                  return (
                    <Msearch
                      config={item.config || {}}
                      onChangeValue={(value) => this.updatevalue(value)}
                      key={item.ref || index}
                      dataSource={item}
                    ></Msearch>
                  );
                  break;
                case "select":
                  return (
                    <div style={{ marginTop: "20px", width: "100%" }}>
                      <Mselect
                        config={item.config || {}}
                        onChangeValue={(value) => this.updatevalue(value)}
                        key={item.ref || index}
                        dataSource={item}
                      ></Mselect>
                    </div>
                  );
                  break;
                case "selectsearch":
                  return (
                    <Mselectsearch
                      config={item.config || {}}
                      onChangeValue={(value) => this.updatevalue(value)}
                      key={item.ref || index}
                      dataSource={item}
                    ></Mselectsearch>
                  );
                  break;
                case "datepicker":
                  return (
                    <div style={{ marginTop: "30px" }}>
                      <Mdatepicker
                        config={item.config || {}}
                        onChangeValue={(date, dateString, self) =>
                          this.updatevalue({ [item.ref]: dateString })
                        }
                        dataSource={item}
                        key={item.ref || index}
                      ></Mdatepicker>
                    </div>
                  );
                  break;
                case "radio":
                  return (
                    <Mradio
                      config={item.config || {}}
                      onChangeValue={(value) => this.updatevalue(value)}
                      key={item.ref || index}
                      dataSource={item}
                    ></Mradio>
                  );
                  break;
                case "divider":
                  return <Mdivider dataSource={item} key={index}></Mdivider>;
                  break;
                case "capcha":
                  return <Mcapcha dataSource={item} key={index}></Mcapcha>;
                  break;
                case "switch":
                  return (
                    <div
                      style={{
                        marginTop: "30px",
                        // display: "flex",
                        // alignItems: "center",
                      }}
                    >
                      <Mswitch
                        onChangeValue={(value) => this.updatevalue(value)}
                        key={item.ref || index}
                        dataSource={item}
                      ></Mswitch>
                    </div>
                  );
                  break;
                case "checkbox":
                  return (
                    <div
                      style={{
                        marginTop: "30px",
                        width: "100%",
                      }}
                    >
                      <Mcheckbox
                        onChangeValue={(value) => this.updatevalue(value)}
                        key={item.ref || index}
                        dataSource={item}
                      ></Mcheckbox>
                    </div>
                  );
                  break;
                  {
                    /* case "selectBarge":
                  return <BargeSelect></BargeSelect>;
                  break; */
                  }
                  {
                    /* case "CustomerSelect":
                  return <CustomerSelect {...item}></CustomerSelect>;
                  break;
                case "CustomerSelect2":
                  return <CustomerSelect2 {...item}></CustomerSelect2>;
                  break; */
                  }
                case "autocomplete":
                  return (
                    <Mautocomplete
                      config={item.config || {}}
                      onChangeValue={(value) => this.updatevalue(value)}
                      key={item.ref || index}
                      dataSource={item}
                    ></Mautocomplete>
                  );
                  break;
                default:
                  break;
              }
            })}

          {this.props.children}
          {this.props.submitBtn ? (
            <Row justify="center" align="right" style={{ width: "100%" }}>
              {this.props.upload ? (
                <Col sm={22} md={12} align="center">
                  <Mupload dataSource={this.props.upload}></Mupload>
                </Col>
              ) : (
                ""
              )}
              <Col sm={22} md={this.props.upload ? 12 : 24} align="center">
                <Button
                  type="primary"
                  style={{ marginTop: "12px" }}
                  icon={submiticon}
                  loading={this.state.loadding[0]}
                  onClick={this.submitProp.bind(this)}
                  className={this.props.fullwidth ? "m-w-100" : ""}
                >
                  {this.props.submitBtnLabel || "Nạp dữ liệu"}
                </Button>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </Mform>
      </Spin>
    );
  }
}

// // -------------------------end - render input--------------------

// // -------------------------start - render tracking form ------------------

export class Mtracking extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTrackingContainer() {
    return <></>;
  }

  renderTrackingBL() {
    return <></>;
  }

  renderTrackingBooking() {
    return <></>;
  }

  renderTrackingInvoice() {
    const { t } = this.props;
    return (
      <>
        <div className="m-sci-fi">
          <div className="m-selector">
            {/* <div className="m-selection m-selected">{t('login.Tabpane-invoice-trackcode')}</div>
            <div className="m-selection">{t('login.Tabpane-invoice-invoiceinfo')}</div> */}
          </div>
        </div>
      </>
    );
  }

  renderTrackingVessel() {
    const { t } = this.props;
    return (
      <div>
        <Row justify="center">
          <Col xs={23} sm={23} md={14} lg={14}>
            <div className="m-sci-form">
              {/* <RangePicker id="search_v_rg"
                style={{ "width": "100%" }}
                showTime
                placeholder={"Ngày bắt đầu...", "Ngày kết thúc..."} /> */}
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={23} sm={23} md={14} lg={14}>
            <div className="m-sci-form">
              <Button
                type="primary"
                id="search_v_btn"
                icon={<LOL.SearchOutlined />}
              >
                Tra cứu
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  UNSAFE_componentWillMount() {
    this.trackingData = [
      {
        label: "Số container",
        content: this.renderTrackingContainer(),
      },
      {
        label: "Số BL",
        content: this.renderTrackingBL(),
      },
      {
        label: "Số Booking",
        content: this.renderTrackingBooking(),
      },
      {
        label: "Số hóa đơn",
        content: this.renderTrackingInvoice(),
      },
      {
        label: "Lịch trình tàu",
        content: this.renderTrackingVessel(),
      },
    ];
  }

  render() {
    return (
      <>
        <Mtab
          config={{
            defaultActiveKey: "0",
            // onChange: () => {
            //   (act) => {
            //     this.setState({ M_acttab: act });
            //   };
            // },
            className: "m-sign-tab",
          }}
          dataSource={this.trackingData}
        />
        <Mform justify="center" style={{ textAlign: "center" }}>
          <Msearch
            config={{
              onSearch: () => this.setTrackingVis(true),
              enterButton: true,
            }}
            dataSource={{
              label: "Nhập thông tin truy vấn...",
              span: 10,
              ref: "tracking",
              type: "input",
            }}
          ></Msearch>
        </Mform>
        <Row justify="center">
          <div className="tracking_error" style={{ color: "red" }}>
            {this.state && this.state["tracking_error"]
              ? this.props.t(this.state["tracking_error"])
              : ""}
          </div>
        </Row>
      </>
    );
  }
}

// // -------------------------end - render tracking form -----------------------

// // -------------------------start - render slide tab------------------

export class MslideTab extends React.Component {
  constructor(props) {
    super(props);
  }

  renderThumbnail() {
    const datas = this.props.dataSource;
    return <div className="m-slide-thumbnail"></div>;
  }

  render() {
    return <div className="m-slide-tab">{this.renderThumbnail()}</div>;
  }
}

// // -------------------------end - render slide tab------------------

// // -------------------------start - contact us elements------------------

const portListData = [
  {
    TerminalName: "Cảng Nam Đình vũ",
    ZaloNumber: "0913887726",
    Messenger: "https://www.facebook.com/namdinhvuport",
  },
  {
    TerminalName: "Cảng Nam Hải",
    ZaloNumber: "0913887726",
    Messenger: "https://www.facebook.com/namdinhvuport",
  },
  {
    TerminalName: "Cảng Bình dương",
    ZaloNumber: "0913887726",
    Messenger: "https://www.facebook.com/namdinhvuport",
  },
];

export class Mcontact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
      portcontactVisible: false,
      TelFocus: false,
    };

    let that = this;
    this.datasource = [];
    this.terminal = localStorage.getItem("terminal")
      ? JSON.parse(localStorage.getItem("terminal"))
      : [];
  }

  clickHandler() {
    document.getElementById("circularMenu").classList.toggle("active");
    if (document.getElementById("circularMenu").classList.contains("active")) {
      this.setState({
        status: true,
      });
    } else {
      this.setState({
        status: false,
      });
    }
  }

  closeDrawerHandle() {
    this.setState({ portcontactVisible: false });
  }

  renderContactContent() {
    return this.terminal.length == 0 ? (
      <>
        <span style={{ color: "#aaa" }}>
          Vui lòng chọn hình thức liên hệ và đơn vị chăm sóc khách hàng của
          chúng tôi để nhận được hỗ trợ tốt nhất
        </span>
        <List
          itemLayout="horizontal"
          dataSource={this.datasource}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a href="#">
                    {
                      (
                        (terminalList.filter((p) => {
                          return p.TerminalCode == item.TerminalCode;
                        }) || [])[0] || {}
                      ).name
                    }
                  </a>
                }
                description={
                  <>
                    <div
                      className="m-flex-row"
                      style={{ justifyContent: "flex-end" }}
                    >
                      <Mbutton
                        style={{ marginRight: "12px" }}
                        icon={
                          <LOL.PhoneOutlined
                            style={{
                              position: "relative",
                              top: "-2px",
                              left: "0px",
                              marginRight: "12px",
                            }}
                          />
                        }
                        onFocus={() => this.setState({ TelFocus: true })}
                        onBlur={() => this.setState({ TelFocus: false })}
                      >
                        <a
                          style={{ color: "#000" }}
                          href={"tel:" + item.ContactTel}
                          data-rel="external"
                        >
                          {this.state.TelFocus ? item.ContactTel : "Hotline"}
                        </a>
                      </Mbutton>
                      <Mbutton
                        style={{ marginRight: "12px" }}
                        icon={
                          <img
                            style={{
                              position: "relative",
                              top: "-2px",
                              left: "0px",
                              marginRight: "12px",
                            }}
                            width="20px"
                            src="/assets/images/zalo.png"
                          />
                        }
                        href={"zalo:" + item.ContactZaloID}
                        onClick={() => {
                          window.open("https://zalo.me/" + item.ContactZaloID);
                        }}
                      >
                        Zalo
                      </Mbutton>
                      <Mbutton
                        icon={
                          <img
                            style={{
                              position: "relative",
                              top: "-2px",
                              left: "0px",
                              marginRight: "12px",
                            }}
                            width="50px"
                            src="/assets/images/messenger.png"
                          />
                        }
                        href={
                          isMobile
                            ? "fb://page/356459924914161"
                            : "https://www.facebook.com/messages/t/" +
                            item.ContactFacebookID
                        }
                        target={isMobile ? "_seft" : "_blank"}
                      // onClick={() => { window.open("https://zalo.me/0913887726"); }}
                      >
                        Facebook
                      </Mbutton>
                    </div>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </>
    ) : (
      this.datasource
        .filter((p) => p.TerminalCode == this.terminal.TerminalCode)
        .map((item) => (
          <div
            className="m-flex-row"
            style={{ justifyContent: "center", flexDirection: "column" }}
          >
            <h6
              style={{
                marginBottom: "8px",
                width: "100%",
                textAlign: "center",
              }}
            >
              Chào mừng đến với
            </h6>
            <h5
              style={{
                color: "#0075BB",
                marginBottom: "16px",
                width: "100%",
                textAlign: "center",
              }}
            >
              {this.terminal.name}
            </h5>
            <a
              style={{ color: "#000", width: "100%" }}
              href={"tel:" + item.ContactTel}
              data-rel="external"
            >
              <Mbutton
                style={{ marginBottom: "12px", width: "100%" }}
                icon={
                  <LOL.PhoneOutlined
                    style={{
                      position: "relative",
                      top: "-2px",
                      left: "0px",
                      marginRight: "12px",
                    }}
                  />
                }
                onMouseEnter={() => this.setState({ TelFocus: true })}
                onMouseLeave={() => this.setState({ TelFocus: false })}
              >
                {this.state.TelFocus ? item.ContactTel : "Hotline"}
              </Mbutton>
            </a>
            <Mbutton
              style={{ marginBottom: "12px" }}
              icon={
                <img
                  style={{
                    position: "relative",
                    top: "-2px",
                    left: "0px",
                    marginRight: "12px",
                  }}
                  width="20px"
                  src="/assets/images/zalo.png"
                />
              }
              href={"zalo:" + item.ContactZaloID}
              onClick={() => {
                window.open("https://zalo.me/" + item.ContactZaloID);
              }}
            >
              Zalo
            </Mbutton>
            <Mbutton
              icon={
                <img
                  style={{
                    position: "relative",
                    top: "-2px",
                    left: "0px",
                    marginRight: "12px",
                  }}
                  width="20px"
                  src="/assets/images/messenger.png"
                />
              }
              href={
                isMobile
                  ? "fb://page/356459924914161"
                  : "https://www.facebook.com/messages/t/" +
                  item.ContactFacebookID
              }
              target={isMobile ? "_seft" : "_blank"}
            // onClick={() => { window.open("https://zalo.me/0913887726"); }}
            >
              Facebook
            </Mbutton>
          </div>
        ))
    );
  }

  render() {
    const McusService = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        version="1.1"
        width="80"
        height="80"
        viewBox="-30 10 250 180"
        xml="preserve"
      >
        <desc>Created with Fabric.js 1.7.22</desc>
        <defs></defs>
        <g
          id="icon"
          style={{
            stroke: 1,
            opacity: 1,
          }}
        >
          <path
            d="M 67.298 58.285 l -1.131 -0.207 V 40.717 c 1.603 -0.106 2.878 -1.43 2.878 -3.059 v -8.765 c 0 -1.629 -1.275 -2.953 -2.878 -3.059 v -4.667 C 66.167 9.496 56.672 0 45 0 C 33.329 0 23.833 9.496 23.833 21.167 v 4.667 c -1.603 0.106 -2.878 1.43 -2.878 3.059 v 8.765 c 0 1.629 1.275 2.953 2.878 3.059 v 17.361 l -1.131 0.207 c -4.646 0.85 -8.017 4.894 -8.017 9.616 v 18.463 c 0 2.005 1.631 3.636 3.636 3.636 H 71.68 c 2.005 0 3.636 -1.631 3.636 -3.636 V 67.901 C 75.315 63.179 71.943 59.135 67.298 58.285 z M 59.384 56.839 c -2.589 -0.474 -4.468 -2.727 -4.468 -5.359 v -1.186 c 0.394 -0.338 0.793 -0.667 1.165 -1.036 c 0.349 -0.345 0.675 -0.715 1.001 -1.085 c 3.696 -0.651 6.582 -3.672 7.022 -7.436 h 0.063 v 16.976 L 59.384 56.839 z M 28.77 25.674 c 10.872 -1.542 17.75 -3.961 21.992 -7.752 c 3.05 3.47 5.926 5.722 10.432 8.191 l -0.791 9.467 c -0.188 2.24 -0.754 4.411 -1.683 6.454 c -0.489 1.076 -1.081 2.115 -1.76 3.088 c -0.28 0.401 -0.585 0.786 -0.895 1.166 c -0.157 0.011 -0.313 0.024 -0.473 0.024 h -6.386 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 4.933 c -1.911 1.759 -4.105 3.119 -6.561 4.007 c -1.662 0.602 -3.494 0.602 -5.156 0 c -7.156 -2.586 -12.189 -9.156 -12.823 -16.738 L 28.77 25.674 z M 61.359 40.737 h 0.724 c -0.282 1.834 -1.317 3.421 -2.786 4.427 c 0.456 -0.746 0.884 -1.51 1.244 -2.303 C 60.856 42.168 61.12 41.456 61.359 40.737 z M 41.743 54.199 c 1.05 0.38 2.154 0.569 3.257 0.569 s 2.207 -0.189 3.258 -0.569 c 1.67 -0.603 3.224 -1.417 4.673 -2.391 c 0.134 3.058 2.118 5.689 4.951 6.688 C 55.16 65.929 50.845 72.017 45 76.583 c -5.845 -4.566 -10.16 -10.654 -12.881 -18.086 c 2.832 -0.999 4.815 -3.628 4.951 -6.684 C 38.509 52.782 40.069 53.594 41.743 54.199 z M 67.045 28.893 v 8.765 c 0 0.595 -0.484 1.08 -1.079 1.08 h -4.053 c 0.224 -0.983 0.396 -1.978 0.481 -2.99 l 0.663 -7.934 h 2.908 C 66.561 27.813 67.045 28.297 67.045 28.893 z M 45 2 c 10.568 0 19.167 8.598 19.167 19.167 v 4.646 h -0.942 l 0.015 -0.185 c 0.033 -0.397 -0.172 -0.776 -0.523 -0.965 c -4.942 -2.648 -7.852 -4.961 -11.118 -8.835 c -0.182 -0.215 -0.445 -0.344 -0.726 -0.354 c -0.3 -0.01 -0.555 0.097 -0.752 0.297 c -3.939 4 -10.897 6.483 -22.56 8.051 c -0.528 0.071 -0.908 0.543 -0.863 1.075 l 0.077 0.917 h -0.941 v -4.646 C 25.833 10.598 34.431 2 45 2 z M 22.955 37.658 v -8.765 c 0 -0.595 0.484 -1.079 1.079 -1.079 h 2.908 l 0.664 7.934 c 0.085 1.015 0.244 2.014 0.468 2.99 h -4.039 C 23.439 38.737 22.955 38.253 22.955 37.658 z M 25.833 40.737 h 2.81 c 1.244 3.726 3.477 7.043 6.441 9.58 v 1.162 c 0 2.632 -1.879 4.886 -4.468 5.359 l -4.783 0.874 V 40.737 z M 23.062 60.252 l 7.095 -1.297 c 2.94 8.159 7.717 14.789 14.243 19.687 l 0.6 0.45 l 0.6 -0.45 c 6.526 -4.898 11.303 -11.528 14.243 -19.687 l 7.095 1.297 c 3.695 0.677 6.377 3.894 6.377 7.649 v 0.625 l -8.764 7.897 c -1.866 1.682 -2.937 4.087 -2.937 6.599 V 88 h -33.23 v -4.979 c 0 -2.513 -1.071 -4.918 -2.937 -6.599 l -8.764 -7.897 v -0.624 C 16.685 64.146 19.367 60.929 23.062 60.252 z M 16.685 86.364 V 71.218 l 7.425 6.691 c 1.446 1.303 2.275 3.166 2.275 5.112 V 88 H 18.32 C 17.418 88 16.685 87.267 16.685 86.364 z M 71.68 88 h -8.064 v -4.979 c 0 -1.946 0.829 -3.81 2.274 -5.112 l 7.426 -6.691 v 15.146 C 73.315 87.267 72.582 88 71.68 88 z"
            stroke-linecap="round"
          />
          <path
            d="M 35.22 30.608 c 2.01 -0.965 3.964 -0.965 5.974 0 c 0.14 0.067 0.287 0.099 0.432 0.099 c 0.373 0 0.73 -0.209 0.902 -0.567 c 0.239 -0.498 0.029 -1.095 -0.469 -1.334 c -2.556 -1.228 -5.149 -1.228 -7.705 0 c -0.498 0.239 -0.708 0.836 -0.469 1.334 C 34.125 30.638 34.723 30.848 35.22 30.608 z"
            stroke-linecap="round"
          />
          <path
            d="M 48.22 30.608 c 2.009 -0.964 3.964 -0.964 5.974 0 c 0.14 0.067 0.287 0.099 0.432 0.099 c 0.373 0 0.73 -0.209 0.902 -0.567 c 0.239 -0.498 0.029 -1.095 -0.469 -1.334 c -2.555 -1.228 -5.147 -1.228 -7.704 0 c -0.498 0.239 -0.708 0.836 -0.469 1.334 C 47.124 30.637 47.718 30.85 48.22 30.608 z"
            stroke-linecap="round"
          />
          <path
            d="M 39.784 42.059 c -0.385 0.396 -0.377 1.028 0.019 1.414 c 1.695 1.651 3.44 2.477 5.189 2.477 c 1.748 0 3.5 -0.825 5.204 -2.475 c 0.397 -0.384 0.407 -1.017 0.023 -1.414 c -0.384 -0.396 -1.017 -0.407 -1.414 -0.023 c -2.604 2.52 -5.022 2.522 -7.607 0.002 C 40.802 41.655 40.169 41.664 39.784 42.059 z"
            transform=" matrix(1 0 0 1 0 0) "
            stroke-linecap="round"
          />
        </g>
      </svg>
    );
    let user_info = {};
    try {
      user_info = JSON.parse(localStorage.getItem("user_info"));
    } catch (err) { }
    user_info = user_info || {};
    return (
      <>
        <div id="circularMenu" className="circular-menu">
          <Tooltip placement="right" title="Hỗ trợ khách hàng">
            <a className="floating-btn" onClick={this.clickHandler.bind(this)}>
              <i>
                <McusService />
              </i>
              {/* <i><HeartIcon/></i> */}
            </a>
          </Tooltip>
          <menu
            className="items-wrapper"
            style={{ display: "flex", flexDirection: "row", gap: "20px" }}
          >
            {/* <Tooltip placement="topLeft" title="Chat Zalo">
              <a href="#" onClick={() => { this.setState({ portcontactVisible: true }) }} className="menu-item">
                <img style={{ position: "relative", top: "-2px", left: "0px" }} width="20px" src="/assets/images/logos/zalo.png" />
              </a>
            </Tooltip> */}
            <Tooltip placement="topLeft" title="Hỗ trợ trực tuyến">
              <a
                onClick={() => {
                  this.setState({ portcontactVisible: true });
                }}
                className="menu-item"
                style={{ cursor: "pointer" }}
              >
                <LOL.WechatOutlined style={{ fontSize: "30px" }} />
              </a>
            </Tooltip>
            <Tooltip placement="top" title="Kết nối mạng xã hội">
              <a
                href={
                  isMobile
                    ? "fb://page/356459924914161"
                    : "https://www.facebook.com/namdinhvuport"
                }
                target={isMobile ? "_seft" : "_blank"}
                className="menu-item"
              >
                <LOL.FacebookOutlined style={{ fontSize: "30px" }} />
              </a>
            </Tooltip>
            <Tooltip placement="right" title="Tài liệu hướng dẫn">
              <a
                href={
                  user_info.UserGroupCode == "OPR" ||
                    user_info.UserGroupCode == "Operation"
                    ? window.root_url +
                    "/assets/documents/03.HDSD_Smartport_V2.7.4__Hãng_tàu.pdf"
                    : window.root_url +
                    "/assets/documents/02.HDSD_Smartport_V2.7.4__Khách_hàng.pdf"
                }
                target="_blank"
                className="menu-item"
              >
                <LOL.ReadOutlined style={{ fontSize: "30px" }} />
              </a>
            </Tooltip>
            <Tooltip placement="right" title="Chức năng đang được phát triển">
              <a className="menu-item inactive">
                <LOL.FieldTimeOutlined style={{ fontSize: "30px" }} />
              </a>
            </Tooltip>
          </menu>
        </div>

        <div id="chat-sidebar">
          <div id="sidebar-user-box" className="102">
            <img src="/user.png" />
            <span id="slider-username">Hỗ trợ 1 </span>
          </div>

          <div id="sidebar-user-box" className="103">
            <img src="/user.png" />
            <span id="slider-username">Hỗ trợ 2 </span>
          </div>

          <div id="sidebar-user-box" className="104">
            <img src="/user.png" />
            <span id="slider-username">Hỗ trợ 3 </span>
          </div>

          <div id="sidebar-user-box" className="105">
            <img src="/user.png" />
            <span id="slider-username">Hỗ trợ 4 </span>
          </div>
        </div>

        {/* ---------------port contact drawer----------- */}
        <Drawer
          title="Hỗ trợ trực tuyến"
          placement={isMobileOnly ? "bottom" : "left"}
          width="25vw"
          height={this.terminal.length == 0 ? "50vh" : "40vh"}
          closable={true}
          onClose={() => this.closeDrawerHandle()}
          // visible={this.state.portcontactVisible}
          key={"portcontact"}
        >
          {this.renderContactContent()}
        </Drawer>
      </>
    );
  }
}

// // -------------------------end - extend UI elements------------------

// // -------------------------start - customer guide------------------

export class MuserGuide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="m-chatbox">
          <div className="m-container" ng-cloak ng-app="chatApp">
            <h1>Swanky Chatbox UI With Angular</h1>
            <div className="chatbox" ng-controller="MessageCtrl as chatMessage">
              <div className="chatbox__user-list">
                <h1>User list</h1>
                <div className="chatbox__user--active">
                  <p>Jack Thomson</p>
                </div>
                <div className="chatbox__user--busy">
                  <p>Angelina Jolie</p>
                </div>
                <div className="chatbox__user--active">
                  <p>George Clooney</p>
                </div>
                <div className="chatbox__user--active">
                  <p>Seth Rogen</p>
                </div>
                <div className="chatbox__user--away">
                  <p>John Lydon</p>
                </div>
              </div>
              <div
                className="chatbox__messages"
                ng-repeat="message in messages"
              >
                <div className="chatbox__messages__user-message">
                  <div className="chatbox__messages__user-message--ind-message">
                    <p className="name">test</p>
                    <br />
                    <p className="message">test</p>
                  </div>
                </div>
              </div>
              <form>
                <Minput />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// // -------------------------end - customer guide------------------

// // -------------------------start - hexagon grid------------------

export class HexagonList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    return this.props.dataSource.map((item, index) => (
      <div key={index} className="Grid-Item">
        <div className="Grid-Item-Content">
          <div className="Grid-Item-Content-Inner">
            <a href="#">{item}</a>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <>
        <div className="m-Grid">{this.renderItems()}</div>
      </>
    );
  }
}

// // -------------------------end - hexagon grid------------------

// // -------------------------start - hexagon tiles------------------

export class HexagonTiles extends React.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.data = this.props.dataSource || {};
  }

  renderItems() {
    let content = this.data.map((item, index) => {
      let frontstyle = {};
      if (item.frontImg) {
        frontstyle = {
          backgroundImage:
            "url(" + window.root_url + "/assets/images/" + item.frontImg + ")",
        };
      }
      return (
        <div className="tiles" key={index}>
          <div className="tiles-border"></div>
          <div className="tiles-inner">
            <div className="tiles-wrap -front">
              <div className="tiles-wrap-layer1">
                <div className="tiles-wrap-layer2">
                  <div
                    className={
                      item.frontImg ? "tiles-main" : "tiles-main m-glass"
                    }
                    style={item.frontImg ? frontstyle : {}}
                  >
                    <div className="tiles-main--inner">{item.frontContent}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-wrap -back">
              <div className="tiles-wrap-layer1">
                <div className="tiles-wrap-layer2">
                  <div
                    className="tiles-main"
                    style={{
                      backgroundImage:
                        "url(" +
                        window.root_url +
                        "assets/images/" +
                        item.backImg +
                        ")",
                    }}
                  >
                    <div className="tiles-main--inner">{item.backContent}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return content;
  }

  render() {
    return (
      <>
        <div className="honeycomb">{this.renderItems()}</div>
      </>
    );
  }
}

// // -------------------------end - hexagon tiles------------------

// // -------------------------start - slider with thumbnail------------------

export class MslideThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.dataSource || [];
  }

  renderslider() {
    let content = this.data.map((item, index) => {
      return (
        <li key={index} className={index == 0 ? "active" : ""}>
          <div
            className="img"
            style={{
              backgroundImage: "url(../assets/images/" + item.img + ")",
            }}
          ></div>
          <div className="blur-content">
            <div className="blur-img"></div>
          </div>
        </li>
      );
    });
    return content;
  }

  renderThumbnails() {
    let content = this.data.map((item, index) => {
      return (
        <li className={index == 0 ? "active" : ""}>
          <p>Chào mừng đến với</p>
          <span>{item.label || ""}</span>
          <div className="m-thumbnail-action">
            <Tooltip title="Thông báo" placement="left">
              <LOL.BellOutlined />
            </Tooltip>
            <Tooltip title="Gọi vào đường dây nóng" placement="topRight">
              <LOL.PhoneOutlined />
            </Tooltip>
          </div>
        </li>
      );
    });
    return content;
  }

  renderMenu() {
    return (
      <div className="m-slide-menu">
        <ul>
          <li>
            <LOL.HomeFilled style={{ color: "#fff" }} />
          </li>
          <li
            onClick={() => {
              window.open(
                window.root_url +
                "/assets/documents/SMARTPORT_Q_A_15022023_P1.pdf"
              );
            }}
          >
            Các câu hỏi thường gặp
          </li>
          <li
            onClick={() => {
              window.open(
                window.root_url +
                "/assets/documents/02.HDSD_Smartport_V2.7.4__Khách_hàng.pdf"
              );
            }}
          >
            Hướng dẫn sử dụng
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="m-vslider">
        <article id="slider">
          {this.renderMenu()}
          <div id="thumbnail" className="thumbnail left">
            <ul className="thumbnail-list">
              {this.renderThumbnails()}
              <li className="marker"></li>
            </ul>
          </div>
          <div id="slide" className="slide left">
            <ul>{this.renderslider()}</ul>
          </div>
          <div className="m-slide-content"></div>
        </article>
      </div>
    );
  }
}

// // -------------------------end - slider with thumbnail------------------

// // -------------------------start - render panel list------------------

// export class MpanelList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount() {
//     let data = this.props.dataSource ? this.props.dataSource.data : [];

//     this.setState({
//       data
//     });
//   }

//   render() {
//     return (
//       <>
//         <Mlist >

//         </Mlist>
//       </>
//     );
//   }
// }

// // -------------------------end - render panel list------------------

// // -------------------------start - render form checkout with napas------------------

// export class MformNapas extends React.Component {
//   constructor(props) {
//     super(props);
//     this.data = this.props.dataSource;
//     this.ecomPaymentCtl = this.props.ecomPaymentCtl
//   }

//   componentDidMount() {
//     var script = document.createElement('script');
//     script.setAttribute('type', "text/javascript");
//     script.setAttribute('id', "napas-widget-script");
//     // script.setAttribute('src', 'https://dps-staging.napas.com.vn/api/restjs/resources/js/napas.paymentpage.min.js');
//     script.setAttribute('src', `${this.data.napasUrl}`);
//     script.setAttribute('merchantId', `${this.data.napasMerchantId}`);
//     script.setAttribute('clientIP', "192.168.1.1");
//     script.setAttribute('deviceId', "0123456789");
//     script.setAttribute('environment', "WebApp");
//     script.setAttribute('cardScheme', "AtmCard");
//     script.setAttribute('enable3DSecure', "false");
//     script.setAttribute('orderId', `${this.data.orderId}`);
//     script.setAttribute('dataKey', `${this.data.dataKey}`);
//     script.setAttribute('napasKey', `${this.data.napasKey}`);
//     script.setAttribute('apiOperation', `${this.data.apiOperation}`);
//     script.setAttribute('orderAmount', `${this.data.orderAmount}`);
//     script.setAttribute('orderCurrency', `${this.data.orderCurrency}`);
//     script.setAttribute('orderReference', `${this.data.orderReference}`);
//     script.setAttribute('channel', "6014");
//     script.setAttribute('sourceOfFundsType', "CARD");
//     script.setAttribute('submerchantCode', `${this.data.merchantID}`);
//     script.setAttribute('submerchantName', `${this.data.merchantID}`);
//     script.setAttribute('submerchantReferenceId', `${this.data.merchantID}`);

//     document.getElementById('napas-widget-container').append(script);
//   }

//   render() {
//     const data = this.data || {};
//     let taction = `${config.apiUrl}/payment/${this.ecomPaymentCtl}/napas_receive/${this.data.merchantID}/${data.orderId}`;

//     return (
//       <>
//         <form id="merchant-form" action={taction} method="POST" target="paymentForm"></form>
//         <div id="napas-widget-container">
//         </div>
//         <Result
//           icon={<LOL.SyncOutlined spin />}
//           title="Quý khách vui lòng không đóng trình duyệt hoặc chuyển trang đến khi giao dịch hoàn tất!"
//         />
//       </>
//     );
//   }
// }

// // -------------------------end - render form checkout with napas------------------
