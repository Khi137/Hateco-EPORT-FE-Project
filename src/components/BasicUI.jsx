import React from "react";
import {
  Card,
  Row,
  Col,
  Input,
  Checkbox,
  Switch,
  Table,
  Divider,
  DatePicker,
  Radio,
  Tabs,
  Popconfirm,
  Dropdown,
  Button,
  Drawer,
  Collapse,
  Steps,
  Carousel,
  Upload,
  Modal,
  Popover,
  Tooltip,
  Pagination,
  Image,
  List,
  Badge,
  message,
  AutoComplete,
  Select,
  Progress,
} from "antd";
import "./BasicUI.scss";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import * as LOL from "@ant-design/icons";
import moment from "moment";

export {
  Mcollapse,
  Mdrawer,
  Mcapcha,
  Mtab,
  Mrangepicker,
  Msearch,
  Minput,
  Mbutton,
  Mcard,
  Mtable,
  Mdatepicker,
  Mradio,
  Mform,
  Mcheckbox,
  Mselect,
  Mswitch,
  Mdivider,
  Mdropdown,
  MoneFieldInput,
  Mstep,
  MnonEditInput,
  Mcarousel,
  Mupload,
  Mpagination,
  Mimage,
  Mlist,
  Mautocomplete,
  Mselectsearch,
  MMobileTabs,
  MeditInput,
  MeditSelect,
  Mprogress,
  Mmultiswitch,
};

const { Option } = Select;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const { Search } = Input;
const { Panel } = Collapse;
const { Step } = Steps;
var checkPrSps = new RegExp("[~|`|!|@|#|$|%|^|&|*|(|)|/]", "g");

var removespc = function (text, exp = "") {
  let checksps = new RegExp(
    "[^a-zA-Z0-9àảãáạăằẳẵắặâầẩẫấậÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬđĐèẻẽéẹêềểễếệÈẺẼÉẸÊỀỂỄẾỆìỉĩíịÌỈĨÍỊòỏõóọôồổỗốộơờởỡớợÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢùủũúụưừửữứựÙỦŨÚỤƯỪỬỮỨỰỳỷỹýỵỲỶỸÝỴ" +
      exp +
      "_\\\\/\\(\\)-]",
    "g"
  );
  return (text + "").normalize().replace(checksps, "");
};
var jjjg = setTimeout(() => {}, 0);
var setvalthat = (val, that, time = 0) => {
  clearTimeout(jjjg);
  jjjg = setTimeout(() => {
    that.setState({ value: val });
  }, time);
};

class Mmultiswitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
    this.data = this.props.dataSource || {};
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.activeItem != this.state.activeItem) {
      this.setState({ activeItem: nextProps.activeItem });
    }
  }

  clickHandler(e) {
    e.stopPropagation();
    let current = e.currentTarget;
    let parent = current.parentNode;
    if (Array.from(current.classList).indexOf("active") >= 0) {
      return;
    }

    parent.childNodes.forEach((currentValue) => {
      currentValue.classList.remove("active");
    });
    current.classList += " active";

    if (this.data.returnValue) {
      this.data.returnValue(current.getAttribute("data-ref"));
    }
  }

  render() {
    return (
      <div
        {...this.props}
        className={"m-ios-switch " + (this.data.class ? this.data.class : "")}
      >
        <div className="m-ios-switch-container">
          <ul>
            {this.data.options.map((item, index) => {
              return (
                <li
                  data-ref={item.ref}
                  onClick={this.clickHandler.bind(this)}
                  className={
                    item.active || item.ref == this.state.activeItem
                      ? " active"
                      : ""
                  }
                  key={index}
                >
                  <span>{item.label || ""}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

class Mprogress extends React.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.data = this.props.dataSource || {};
  }

  render() {
    let span = this.data.span || 24;
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        xl={span.xl || span}
      >
        <div className="m-progress-header">
          {this.data.label ? this.data.label : ""}
          {this.data.affix ? this.data.affix : ""}
        </div>
        <Progress percent={this.data.value} {...this.props}></Progress>
      </Col>
    );
  }
}

class MeditInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
      value: this.props.dataSource?.value,
    };
  }

  UNSAFE_componentWillMount() {
    this.data = this.props.dataSource || {};
  }

  handlerChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handlerEdit(event) {
    let maincontent = event.currentTarget.previousElementSibling;
    this.setState({ isEdit: false });
  }

  handlerSave(e) {
    let returnvalue = this.state.value;
    if (this.props.dataSource?.returnValue) {
      this.props.dataSource?.returnValue(returnvalue);
    }

    this.setState({ isEdit: true });
  }

  render() {
    let span = this.data.span || 24;
    let icon = "";

    if (this.data.icon) {
      icon = React.createElement(LOL[this.data.icon] || "i", {
        className:
          "m-form__icon " +
          (!LOL[this.data.icon] ? "material-" + this.data.icon : ""),
      });
    } else {
      icon = React.createElement(LOL["AlignLeftOutlined"] || "i", {
        className:
          "m-form__icon " +
          (!LOL[this.data.icon] ? "material-" + this.data.icon : ""),
      });
    }

    return (
      <>
        <Col
          xs={span.xs || span}
          sm={span.sm || span}
          md={span.md || span}
          lg={span.lg || span}
          xl={span.xl || span}
        >
          <div className="m-flex-row m-editinput">
            <div className="m-editinput-content">
              {icon !== "" && icon}
              {this.data.label && <span>{this.data.label}:&ensp;</span>}
              <input
                onChange={(e) => this.handlerChange(e)}
                readOnly={this.state.isEdit}
                type="text"
                value={this.state.value}
              />
            </div>
            {this.data.disable !== "undefined" && !this.data.disable ? (
              this.state.isEdit ? (
                <span
                  onClick={this.handlerEdit.bind(this)}
                  className="m-action-icon"
                >
                  <LOL.EditOutlined />
                </span>
              ) : (
                <span
                  onClick={this.handlerSave.bind(this)}
                  className="m-action-icon"
                >
                  <LOL.SaveOutlined />
                </span>
              )
            ) : (
              ""
            )}
          </div>
        </Col>
      </>
    );
  }
}

class MeditSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
      value: this.props.dataSource?.value || this.props.value || "",
      content: this.props.dataSource?.content || this.props.content || "",
    };
    this.selectRef = React.createRef();
  }

  UNSAFE_componentWillMount() {
    this.data = this.props.dataSource || {};
  }

  componentDidMount() {
    if (this.selectRef.current) {
      this.selectRef.current.data("component", this);
    }
    if (!window.component) window.component = {};
    window.component[
      this.props.id ||
        this.props.ref ||
        this.props.dataSource.id ||
        this.props.dataSource.ref
    ] = this;
  }

  handlerEdit(event) {
    this.setState({ isEdit: false });
  }

  handlerSave(e) {
    let returnvalue = this.state.value;
    if (this.props.dataSource.returnValue) {
      this.props.dataSource.returnValue(returnvalue);
    }

    this.setState({ isEdit: true });
  }

  handleChange(e) {
    let returnvalue = {};
    returnvalue[this.props.dataSource.ref] = e.target.value;

    if (typeof this.props.dataSource.onChange == "function") {
      this.props.dataSource.onChange(e);
    }

    if (this.props.onChangeValue) {
      this.props.onChangeValue(returnvalue);
    }

    if ((this.props.config || {}).returnValue) {
      this.props.config.returnValue(e.target.value);
    }

    this.setState({
      value: e.target.value,
      content: e.target.selectedOptions[0].text,
    });
  }

  renderOptions(value) {
    let data = this.props.dataSource;
    var options = (this.state.options || data.options || []).map((item, ii) => {
      let temp;
      if (value == item.value) {
        temp = (
          <option
            key={item.value + "" + ii}
            value={item.value}
            data={JSON.stringify(item.data || {})}
            selected="selected"
          >
            {item.label}
          </option>
        );
      } else {
        temp = (
          <option
            key={item.value + "" + ii}
            value={item.value}
            data={JSON.stringify(item.data || {})}
          >
            {item.label}
          </option>
        );
      }
      return temp;
    });
    return options;
  }

  render() {
    let icon = "";
    let data = this.props.dataSource;
    let span = data.span || 24;
    if (data.icon) {
      icon = React.createElement(LOL[data.icon], { className: "m-form__icon" });
    } else {
      icon = React.createElement(LOL["BarsOutlined"], {
        className: "m-form__icon",
      });
    }
    var readonly = (
      this.state.readonly === undefined ? data.readonly : this.state.readonly
    )
      ? true
      : false;
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        xl={span.xl || span}
      >
        <div className="m-flex-row m-editinput">
          {
            <div className="m-editinput-content">
              {icon !== "" && icon}
              {this.data.label && <span>{this.data.label}:&ensp;</span>}
              {!this.state.isEdit ? (
                <div
                  className={
                    "m-editselect m-form__input " +
                    this.state.status +
                    " " +
                    (readonly ? "readonly" : "")
                  }
                >
                  <select
                    ref={this.selectRef}
                    id={data.ref}
                    key={data.ref || ""}
                    onChange={this.handleChange.bind(this)}
                    disabled={readonly ? true : false}
                    defaultValue={data.value || this.state.value || ""}
                    tabIndex={data?.tabindex || 1}
                    style={{ paddingLeft: "0", color: "#aaa" }}
                  >
                    <option key="" value="" disabled></option>
                    {this.renderOptions(data.value || this.state.value)}
                  </select>
                </div>
              ) : (
                <input
                  readOnly={this.state.isEdit}
                  type="text"
                  value={data.content || this.state.content}
                />
              )}
            </div>
          }
          {this.data.disable !== "undefined" && !this.data.disable ? (
            this.state.isEdit ? (
              <span
                onClick={this.handlerEdit.bind(this)}
                className="m-action-icon"
              >
                <LOL.EditOutlined />
              </span>
            ) : (
              <span
                onClick={this.handlerSave.bind(this)}
                className="m-action-icon"
              >
                <LOL.SaveOutlined />
              </span>
            )
          ) : (
            ""
          )}
        </div>
      </Col>
    );
  }
}

class MMobileTabs extends React.Component {
  constructor(props) {
    super(props);
  }
}

class Mlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: "Không có dữ liệu",
    };
    this.data = props.dataSource || false;
  }

  renderItem(item) {
    return item;
  }

  render() {
    return (
      <List
        header={this.data.header || false}
        footer={this.data.footer || false}
        dataSource={this.data.data}
        bordered={this.data.bordered || false}
        renderItem={(item) => this.renderItem(item)}
      ></List>
    );
  }
}

class Mimage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Image {...this.props} />;
  }
}

class Mpagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Pagination {...this.props} />;
  }
}

class Mupload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: [],
    };
    this.sumsize = 0;
    this.mes = {};
  }

  create_Rowguid = () => {};

  componentDidMount() {
    this.tmp_patch = this.create_Rowguid();
  }
  UNSAFE_componentWillMount() {
    this.data = this.props.dataSource;
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    this.setState({
      previewImage: file.viewtype || file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = async ({ fileList }) => {
    this.sumsize = 0;
    const nFL = fileList
      .map((file) => {
        file.size = file.size || file.originFileObj.size;
        this.sumsize += file.size;

        let ext = file.name
          .substring(file.name.lastIndexOf(".") + 1)
          .toLowerCase();
        let viewtype = "";
        switch (ext) {
          case "xlsx":
          case "xls":
            viewtype = <LOL.FileExcelOutlined />;
            break;
          case "pdf":
            viewtype = <LOL.FilePdfOutlined />;
            break;
          default:
            break;
        }
        file.viewtype = viewtype;
        file.preview = viewtype;
        return file;
      })
      .filter((file) => !file.error);

    if (typeof this.props.onChange === "function") {
      this.props.onChange(nFL, this);
    }
    if (typeof (this.props.dataSource || {}).onChange === "function") {
      this.props.dataSource.onChange(nFL, this);
    }

    this.setState({ fileList: nFL });
  };

  handleupload = (file, fileList) => {};

  handleRemove = (file) => {
    let formData = new FormData();
    formData.append("tmporder", this.tmp_patch);
    formData.append("access_token", localStorage.access_token);
    formData.append("filename", file.name);

    fetch(window.config.apiUrl + "/task/FileUpload/delete", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        message.success("Đã xóa file !");
      })
      .catch((error) => {
        console.log(error);
        message.error("Lỗi upload !");
      });
  };

  render() {
    let action = this.data?.action;
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    return (
      <>
        <Modal
          title={this.data?.label}
          width="80vw"
          visible={this.state.isShow}
          onCancel={() => {
            this.setState({ isShow: false });
          }}
          onOk={() => {
            this.setState({ isShow: false });
          }}
          bodyStyle={{ background: "#ddd" }}
        >
          <div style={{ color: "red" }}>
            * Lưu ý : chỉ được phép đính kèm file hình ảnh, word, excel, pdf
          </div>
          <div style={{ color: "red", paddingBottom: "10px" }}>
            dung lượng mỗi file không được quá 2mb , tổng dung lượng không quá
            6mb
          </div>
          <Upload
            ref={this.uploadInputRef}
            style={{ textAlign: "center", margin: "auto" }}
            action={() => {}}
            listType="picture"
            beforeUpload={this.handleupload}
            multiple={true}
            customRequest={(e) => {
              let uid = e.file.uid;
              if (this.sumsize > 15000000) {
                e.onError("error");
                const fileList = this.state.fileList.filter(
                  (file) => file.uid !== uid
                );
                this.setState({ fileList });
                return message.error("Tổng dung lượng không được quá 15MB !!");
              }
              if (!window.config || !window.config.apiUrl) {
                return message.error("Lỗi: Không tìm thấy đường dẫn API.");
              }

              let formData = new FormData();
              formData.append("files", e.file);
              formData.append("tmporder", this.tmp_patch);
              formData.append("access_token", localStorage.access_token);
              formData.append("filename", e.file.name);

              fetch(window.config.apiUrl + "/task/FileUpload/", {
                method: "POST",
                body: formData,
              })
                .then((response) => response.json())
                .then((data) => {
                  const fileList = this.state.fileList.map((file) => {
                    if (file.uid === uid) {
                      return {
                        ...file,
                        uid: uid,
                        name: data.filename,
                        status: "done",
                        url: data.url,
                        size: data.size,
                        tmporder: data.tmporder,
                        thumbUrl: data.url,
                      };
                    }
                    return file;
                  });
                  this.setState({ fileList });
                  if (typeof this.props.onChange === "function") {
                    this.props.onChange(fileList, this);
                  }
                  if (
                    typeof (this.props.dataSource || {}).onChange === "function"
                  ) {
                    this.props.dataSource.onChange(fileList, this);
                  }
                })
                .catch((error) => {
                  const fileList = this.state.fileList.filter(
                    (file) => file.uid !== uid
                  );
                  this.setState({ fileList });
                  message.error("Lỗi upload !");
                  if (typeof this.props.onChange === "function") {
                    this.props.onChange(fileList, this);
                  }
                  if (
                    typeof (this.props.dataSource || {}).onChange === "function"
                  ) {
                    this.props.dataSource.onChange(fileList, this);
                  }
                });
            }}
            fileList={fileList.map((file) => {
              file.url = decodeURI((file.url + "").replaceAll("%23", "#"));
              file.url = encodeURI(file.url + "").replaceAll("#", "%23");
              file.thumbUrl = file.url;
              return file;
            })}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            onRemove={this.handleRemove}
            {...this.props.config}
          >
            {this.data?.button ? (
              this.data?.button
            ) : (
              <Button icon={<LOL.UploadOutlined />}>{this.data?.label}</Button>
            )}
          </Upload>
          {(this.props.dataSource || {}).extends
            ? this.props.dataSource.extends
            : ""}
        </Modal>
        <Tooltip
          placement="right"
          title="Đính kèm chứng từ"
          defaultVisible={true}
        >
          <LOL.LinkOutlined
            style={{ fontSize: "20px" }}
            className="m-upload"
            onClick={() => this.setState({ isShow: true })}
          />
        </Tooltip>
      </>
    );
  }
}

class Mcarousel extends React.Component {
  render() {
    return <Carousel {...this.props}></Carousel>;
  }
}

class MnonEditInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    let data = this.props.dataSource || false;
    let span = data ? data.span : 24;
    return (
      <div className={"m-nonedit-input " + (data.classes || "")}>
        <label style={{ width: data.labelWidth || "auto" }}>
          {data.label || ""}
        </label>
        <span
          id={this.props.dataSource.id || this.props.dataSource.ref}
          ref={this.inputRef}
        >
          {data.value || ""}
        </span>
      </div>
    );
  }
}

class Mstep extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.data = Array.isArray(this.props.dataSource)
      ? this.props.dataSource
      : [];
    this.config = this.props.config || {};
  }

  render() {
    let content = [];
    if (Array.isArray(this.data)) {
      content = this.data.map((item, index) => (
        <Step
          title={item.label || ""}
          key={index}
          icon={item.icon || <LOL.UserOutlined />}
        ></Step>
      ));
    }
    return <Steps {...this.config}>{content}</Steps>;
  }
}

export class Winput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: this.props.value || "",
    };
  }

  componentDidMount() {
    this.inputRef.current.value = this.state.value;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const { className, errorText, ...otherProps } = this.props;
    return (
      <>
        <Input
          ref={this.inputRef} // Attach Ref to the input element
          {...otherProps}
          value={this.state.value}
          onChange={(dt) => {
            typeof this.props.onChange == "function"
              ? (this.props.onChange(dt) || dt.target.value === "") &&
                this.handleChange(dt)
              : this.handleChange(dt);
          }}
          className={"Winput " + (className || "")}
        />
        <Row className="Winput_error_text">{errorText && errorText}</Row>
      </>
    );
  }
}

// export class Winput extends React.Component {
//   constructor(props) {
//     // super(props);
//     // this.state = {
//     //     value: (this.props.value || '')
//     // }
//     // if (this.props.ref || this.props.id) {
//     //     if (!window.Winput) window.Winput = {};
//     //     window.Winput[this.props.ref || this.props.id || 'Winput_'] = this;
//     // }
//     // $("#" + (this.props.ref || this.props.id || 'Winput_')).data({ value: this.props.value });
//   }
//   componentDidMount() {
//     // $("#" + (this.props.ref || this.props.id || 'Winput_')).data({ value: (this.props.value || '') });
//   }
//   handleChange(dt) {
//     this.setState({
//       value: dt.target.value,
//     });
//   }
//   render() {
//     // $("#" + (this.props.ref || this.props.id || 'Winput_')).data(this.state);
//     return (
//       <Input
//         {...this.props}
//         defaultValue={this.state.value || ""}
//         value={this.state.value || ""}
//         onChange={(dt) => {
//           this.handleChange(dt);
//           if (typeof this.props.onChange == "function") this.props.onChange(dt);
//         }}
//         className={"Winput " + (this.props.className || "")}
//       ></Input>
//     );
//   }
// }
class Mcollapse extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.data = this.props.dataSource;
  }

  renderContent() {
    return this.data?.map((item, index) => (
      <Panel header={item.label} key={index}>
        {item.content}
      </Panel>
    ));
  }

  render() {
    return (
      <Col span={this.data?.span}>
        <Collapse {...this.props.config}>{this.renderContent()}</Collapse>
      </Col>
    );
  }
}

class Mdrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onShow() {
    this.setState({
      visible: true,
    });
  }

  UNSAFE_componentWillMount() {
    this.data = this.props.dataSource;
  }

  render() {
    return <Drawer {...this.props.config}>{this.data?.content || ""}</Drawer>;
  }
}

class Mcapcha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaImg: "",
      captchaText: "",
      userInput: "",
      isVerified: false,
    };
  }

  componentDidMount() {
    this.loadCaptcha();
  }

  loadCaptcha = async () => {
    try {
      const response = await fetch(this.props.captchaEndpoint);
      const data = await response.json();
      this.setState({ captchaImg: data.img, captchaText: data.text });
    } catch (error) {
      console.error("Error loading CAPTCHA:", error);
    }
  };

  handleRefresh = () => {
    this.loadCaptcha();
  };

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.userInput === this.state.captchaText) {
      this.setState({ isVerified: true });
      message.success("CAPTCHA verified successfully!");
      if (this.props.onVerify) {
        this.props.onVerify(true);
      }
    } else {
      this.setState({ isVerified: false });
      message.error("CAPTCHA verification failed. Please try again.");
      if (this.props.onVerify) {
        this.props.onVerify(false);
      }
    }
  };

  render() {
    return (
      <Col flex="auto">
        <img
          height="32px"
          id="CaptchaImg"
          src={
            this.state.captchaImg
              ? this.state.captchaImg
              : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          }
          alt="CAPTCHA"
        />
        <Button onClick={this.handleRefresh}>Refresh</Button>
        <Input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
          placeholder="Enter CAPTCHA"
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
        {this.state.isVerified ? (
          <p style={{ color: "green" }}>CAPTCHA verified successfully!</p>
        ) : (
          <p style={{ color: "red" }}>"Please verify the CAPTCHA!"</p>
        )}
      </Col>
    );
  }
}

//   constructor(props) {
//     super(props);
//   }

//   UNSAFE_componentWillMount() {
//     this.data = this.props.dataSource;
//   }

//   render() {
//     return (
//       <Col flex="auto">
//         <img
//           height="32px"
//           id="CapchaImg"
//           src={
//             this.props.dataSource?.img
//               ? this.props.dataSource?.img
//               : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
//           }
//         />
//       </Col>
//     );
//   }
// }

class Mtab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.tabRef = React.createRef();
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const response = await fetch(this.props.dataEndpoint);
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  renderFooter() {
    if (!this.props.footer) {
      return;
    }
    let content = this.props.footer;
    return <div className="m-tab-footer">{content}</div>;
  }
  render() {
    const tabItem = this.data?.map((item, index) => {
      if (item.badge) {
        return (
          <TabPane
            tab={
              <Badge offset={[15, 0]} count={item.badge}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  {item.label}
                </div>
              </Badge>
            }
            key={index}
            key-data={index}
          >
            {typeof item.content == "function" ? item.content() : item.content}
          </TabPane>
        );
      } else {
        return (
          <TabPane tab={item.label} key={index} key-data={index}>
            {typeof item.content == "function" ? item.content() : item.content}
          </TabPane>
        );
      }
    });
    return (
      <Tabs animated={true} {...this.props.config} ref={this.tabRef}>
        {tabItem}
        {this.renderFooter()}
      </Tabs>
    );
  }
}

class Mcard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card
        bordered={false}
        {...this.props}
        className={
          "m-custom-card " +
          (this.props.background || "") +
          (this.props.className || "")
        }
      ></Card>
    );
  }
}

class Mbutton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: this.props.loading || false,
      color: this.props.dataSource?.color || "default-color",
      opacity: this.props.dataSource?.opacity || "20",
      size: this.props?.size || "12",
      textbutton: this.props.dataSource?.textbutton || "Button",
    };
  }

  loading() {
    this.setState({ loading: true });
  }

  reset() {
    this.setState({ loading: false });
  }
  style() {
    const size = this.state.size;
    if (size) {
      return {
        padding: `${size}px`,
      };
    }
  }
  render() {
    return (
      <div style={{ height: "100px" }}>
        <Button
          className={
            this.state.color === ""
              ? `ant-btn-${this.state.color} opacity-${this.state.opacity}`
              : this.state.color === "blue"
              ? `ant-btn-${this.state.color} opacity-${this.state.opacity}`
              : `ant-btn-${this.state.color} opacity-${this.state.opacity}`
          }
          loading={this.state.loading}
          {...this.props}
          style={this.style()}
        >
          <text className="body-xl-bold">{this.state.textbutton}</text>
        </Button>
      </div>
    );
  }
}

class Mrangepicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.dataSource || false;
    let span = data ? data.span : 24;
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        className="m-form__box"
      >
        <div className="m-form__input">
          <RangePicker placeholder={false} bordered={false} {...this.props} />
        </div>
      </Col>
    );
  }
}

class Msearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || "",
    };
    this.searchRef = React.createRef();
  }
  componentDidMount() {
    const { id, ref, dataSource } = this.props;
    const componentId =
      id || ref || (dataSource && (dataSource.id || dataSource.ref));
    if (componentId) {
      window.component = { ...window.component, [componentId]: this };
      if (typeof (dataSource && dataSource.onLoaded) === "function") {
        dataSource.onLoaded(this.state.value, this);
      }
    }
  }

  UNSAFE_componentWillMount() {
    const { id, ref, dataSource } = this.props;
    const componentId =
      id || ref || (dataSource && (dataSource.id || dataSource.ref));
    if (componentId && window.component) {
      delete window.component[componentId];
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { dataSource, config, onChangeValue } = this.props;
    const newValue =
      dataSource && dataSource.uppercase
        ? value.toUpperCase()
        : dataSource && dataSource.safeString
        ? removespc(value)
        : value;
    this.setState({ value: newValue });
    if (config && config.onLiveSearch) {
      config.onLiveSearch(newValue);
    }
    if (onChangeValue) {
      onChangeValue({ [dataSource.ref]: newValue });
    }
  };

  checkBlur = () => {
    const { value } = this.state;
    const { onChangeValue } = this.props;
    if (!value) {
      const inputLabel =
        this.searchRef.current.parentElement.querySelector(".m-form__label");
      if (inputLabel) {
        inputLabel.classList.remove("m-form__label--focus");
      }
    }
    if (onChangeValue) {
      onChangeValue({ [this.props.dataSource.ref]: value });
    }
  };

  checkFocus = () => {
    const inputLabel =
      this.searchRef.current.parentElement.querySelector(".m-form__label");
    if (inputLabel) {
      inputLabel.classList.add("m-form__label--focus");
    }
  };

  handleKeyPress = (e) => {
    const char = e.which || e.keyCode;
    const strchar = (String.fromCharCode(char) || "").replace(checkPrSps, "");
    if (!strchar) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const { dataSource, config } = this.props;
    const data = config && config?.icon ? config : dataSource;
    const icon = data?.icon ? (
      <i
        className={`m-form__icon ${
          LOL[data?.icon] ? "" : "material-" + data?.icon
        }`}
      />
    ) : (
      <i
        className={`m-form__icon ${
          LOL["AlignLeftOutlined"] ? "" : "material-" + data?.icon
        }`}
      />
    );
    const span = (data && data.span) || 24;

    return (
      <Col
        className="m-form__box"
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        style={{ display: data?.isHide === true ? "none" : "block" }}
      >
        <div className="m-form__input">
          <label className="m-form__label">
            {data?.label || "sample text..."}
          </label>
          <Input.Search
            ref={this.searchRef}
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            className={`inputUppercase ${data?.className || ""}`}
            {...(data?.safeString ? { onKeyPress: this.handleKeyPress } : {})}
            {...config}
          />
          {icon}
        </div>
      </Col>
    );
  }
}

class Mautocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.dataSource?.value || this.props?.value || "",
    };
  }

  componentDidMount() {
    if (this.props.inputRef) {
      this.props.inputRef.current = this;
    }
  }

  handleChange(e) {
    if (typeof this.props.dataSource.onChange == "function") {
      this.props.dataSource.onChange(e);
    }
    if (this.props.dataSource.maxLength) {
      e = e.substring(0, this.props.dataSource.maxLength);
    }
    if ((this.props.dataSource || {}).input_type == "port") {
      let checksps = new RegExp("[^a-zA-Z]", "g");
      let str = e.normalize().replace(checksps, "");
      e = str;
    }
    if (this.props.dataSource.uppercase) {
      e = e.toUpperCase();
    }
    this.setState({
      value: e,
    });
  }

  handleSearch(e) {
    if (typeof this.props.dataSource.onSearch == "function") {
      this.props.dataSource.onSearch(e, this);
    }
  }

  checkBlur(e) {
    const { dataSource } = this.props;
    if (!dataSource) return;

    const { onBlur } = dataSource;
    const { value } = e.target;

    if (!value || value === "default") {
      this.setState({ isFocused: false });
      if (typeof onBlur === "function") {
        onBlur(e);
      }
    }
  }

  checkFocus(e) {
    this.setState({ isFocused: true });
  }

  getDefaultValue(props) {
    const { dataSource } = props;
    if (!dataSource) return "";

    return dataSource.value || props.value || "";
  }

  render() {
    let icon = "";
    let data = this.props.dataSource;
    let span = data.span || 24;
    var options = (data.options || []).map((item, ii) => (
      <Option {...item} key={item.value + "" + ii} value={item.value}>
        {item.label}
      </Option>
    ));
    if (data.icon) {
      icon = React.createElement(LOL[data.icon], { className: "m-form__icon" });
    } else {
      icon = React.createElement(LOL["BarsOutlined"], {
        className: "m-form__icon",
      });
    }
    var readonly = (
      this.state.readonly === undefined ? data.readonly : this.state.readonly
    )
      ? true
      : false;
    var placeholder =
      this.state.placeholder === undefined
        ? data.placeholder
        : this.state.placeholder
        ? this.state.placeholder
        : "";
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        xl={span.xl || span}
        className="m-form__box"
        style={{ display: data?.isHide === true ? "none" : "block" }}
      >
        <div
          className={
            "m-form__input " +
            this.state.status +
            " " +
            (readonly ? "readonly" : "")
          }
        >
          <label
            className={
              data?.value || this.state.value
                ? "m-form__label m-form__label--focus"
                : "m-form__label"
            }
          >
            {data.label}
          </label>
          <AutoComplete
            style={{ width: "100%" }}
            ref={data.ref}
            id={data.ref}
            key={data.ref || ""}
            onSearch={this.handleSearch.bind(this)}
            placeholder={placeholder}
            onChange={this.handleChange.bind(this)}
            onBlur={this.checkBlur.bind(this)}
            disabled={readonly ? true : false}
            value={this.state.value || ""}
            onFocus={this.checkFocus.bind(this)}
            required-text={data.required}
            required={data.required ? true : false}
            defaultValue={data.value || this.state.value || ""}
            tabIndex={data.tabindex || 1}
          >
            {options}
          </AutoComplete>
          {icon}
        </div>
      </Col>
    );
  }
}

class Mselectsearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
    };
    this.selectRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const componentId =
      this.props.id ||
      this.props.ref ||
      this.props?.dataSource.id ||
      this.props?.dataSource.ref;

    if (!window.component) window.component = {};
    window.component[componentId] = this;
  }

  handleChange(label, row) {
    const ObjValue = row || {};
    const returnvalue = {
      [this.props?.dataSource.ref]: ObjValue.value,
    };
    this.setState({ value: ObjValue.value });

    if (this.props.config && this.props.config.returnValue) {
      this.props.config.returnValue(ObjValue.value);
    }
    if (this.props?.dataSource && this.props?.dataSource.returnValue) {
      this.props?.dataSource.returnValue(ObjValue.value);
    }

    if (this.props.onChangeValue) {
      setTimeout(() => {
        this.props.onChangeValue(returnvalue);
      }, 200);
    }

    if (this.inputRef.current) {
      this.inputRef.current.value = ObjValue.value || "";
    }

    if (typeof this.props?.dataSource.onChange === "function") {
      setTimeout(() => {
        this.props?.dataSource.onChange(label, row, this);
      }, 200);
    }
  }

  handleSearch(e) {
    if (typeof this.props?.dataSource.onSearch === "function") {
      setTimeout(() => {
        this.props?.dataSource.onSearch(e, this);
      }, 200);
    }
  }

  checkBlur(e) {
    const { value } = this.props?.dataSource || {};
    const { value: stateValue } = this.state;

    if (!(value || stateValue)) {
      const labelElement = e.target
        .closest(".m-form__input")
        .querySelector(".m-form__label");
      if (labelElement) {
        labelElement.classList.remove("m-form__label--focus");
      }
    }
  }

  checkFocus(e) {
    const labelElement = e.target
      .closest(".m-form__input")
      .querySelector(".m-form__label");
    if (labelElement) {
      labelElement.classList.add("m-form__label--focus");
    }
  }

  render() {
    let icon = "";
    let data = this.props?.dataSource;
    let span = data.span || 24;

    var options = (this.state.options || data.options || []).map((item, ii) => (
      <Option {...item} key={item.value + "" + ii} value={item.value}>
        {item.label}
      </Option>
    ));
    if (data.icon) {
      icon = React.createElement(LOL[data.icon], { className: "m-form__icon" });
    } else {
      icon = React.createElement(LOL["BarsOutlined"], {
        className: "m-form__icon",
      });
    }
    var readonly = (
      this.state.readonly === undefined ? data.readonly : this.state.readonly
    )
      ? true
      : false;
    var placeholder =
      this.state.placeholder === undefined
        ? data.placeholder
        : this.state.placeholder
        ? this.state.placeholder
        : "";

    var that = this;
    var value = data.value || this.state.value;

    // setTimeout(() => {
    //   if (this.inputRef.current) {
    //     this.inputRef.current.value = this.state.value || "";
    //   }
    //   if (this.selectRef.current) {
    //     const labelElement = this.selectRef.current
    //       .closest(".m-form__input")
    //       .querySelector(".m-form__label");
    //     if (labelElement) {
    //       if (value) {
    //         labelElement.classList.add(
    //           "m-form__label--focus",
    //           value,
    //           this.props.dataSource.value || this.state.value
    //         );
    //       } else {
    //         labelElement.classList.remove("m-form__label--focus");
    //       }
    //     }
    //   }
    // }, 10);
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        xl={span.xl || span}
        className="m-form__box"
        style={{ display: data?.isHide === true ? "none" : "block" }}
      >
        <div
          className={
            "m-form__input " +
            this.state.status +
            " " +
            (readonly ? "readonly" : "")
          }
        >
          <label
            className={
              value ? "m-form__label m-form__label--focus" : "m-form__label"
            }
          >
            {data.label}
          </label>
          <input
            type="hidden"
            id={data.ref}
            value={this.state.value || ""}
            ref={this.inputRef}
          />{" "}
          <Select
            allowClear
            showSearch
            style={{ width: "100%" }}
            ref={this.selectRef}
            key={data.ref || ""}
            onSearch={this.handleSearch.bind(this)}
            placeholder={placeholder}
            onChange={this.handleChange.bind(this)}
            onClear={() => {
              this.setState({ value: undefined });
            }}
            onBlur={this.checkBlur.bind(this)}
            disabled={readonly ? true : false}
            onFocus={this.checkFocus.bind(this)}
            required-text={data.required}
            required={data.required ? true : false}
            value={this.state.value || data.value || ""}
            defaultValue={
              this.state.value || data.value || this.state.value || ""
            }
            filterOption={(input, option) => {
              return (
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              );
            }}
            tabIndex={data.tabindex || 1}
          >
            {options}
          </Select>
          {icon}
        </div>
      </Col>
    );
  }
}

class Mtable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Table {...this.props}></Table>;
  }
}

// Sample input data : -----------------------------------------
// object type declare in component as an array of objects +++++++++
// {
//      label: "Chủ hàng *",
//      type: "input",
//      ref: "ShipperName",
//      span: 24,
//      icon: "IdcardOutlined",
//      config: {
//          onChangeValue: (value) => this.parentcomponent(value), -------"value" is return value of input after blur
//          validateValue: (bool) => this.parentcomponent(bool), -------"bool" as a boolean type data return after blur. // add new in 28/09/2020 by manes!!!
//      }
// }

class Minput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: this.props.value || this.props.dataSource?.value || "",
      passVisible: false,
      passVisibleIcon: "EyeInvisibleOutlined",
      status: "",
      responsive: { span: 24 },
      validatevalue: false,
      isValidate: false,
      blur: false,
    };
    this.trimvalue = "";
  }

  componentDidMount() {
    const id =
      this.props?.id ||
      this.props?.ref ||
      this.props.dataSource?.id ||
      this.props.dataSource?.ref;
    const element = document.getElementById(id);
    if (element) {
      element.dataset.component = this;
    }

    if (typeof this.props.dataSource?.onLoaded === "function") {
      this.props.dataSource?.onLoaded(this.state.value, this);
    }

    if (!window.component) {
      window.component = {};
    }
    window.component[id] = this;
  }

  UNSAFE_componentWillMount() {
    this.setState({
      value:
        (this.props?.trim ? this.props.value?.trim() : this.props.value) ||
        (this.props?.trim
          ? this.props.dataSource?.value?.trim()
          : this.props.dataSource?.value) ||
        "",
    });
  }

  numberWithCommas(x) {
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  handleChange(event) {
    if ((this.props.dataSource || {}).uppercase) {
      event.target.value = event.target.value.toUpperCase();
    }

    if (this.props.dataSource?.onChangeValue) {
      let continues = this.props.dataSource?.onChangeValue(event);
      if (continues !== undefined && continues === false) {
        return;
      }
    }

    if (this.props?.onChangeValue) {
      let continues = this.props?.onChangeValue({
        [this.props.dataSource?.ref]: event.target.value,
      });
      if (continues !== undefined && continues === false) {
        return;
      }
    }

    var exp;
    if ((this.props.dataSource || {}).exp) {
      exp = (this.props.dataSource || {}).exp || "";
    }

    if (typeof this.props.dataSource?.onChange == "function") {
      this.props.dataSource?.onChange(event.target.value, this);
    }

    if (this.props.dataSource?.format) {
      if (
        event.target.value?.length > 2 &&
        !event.target.value?.includes("/")
      ) {
        event.target.value =
          event.target.value.slice(0, 2) + "/" + event.target.value?.slice(2);
      }
    }

    if (this.props.dataSource?.trim) {
      event.target.value = event.target.value?.trim();
    }

    if (this.props.dataSource?.maxLength) {
      event.target.value = event.target.value.substring(
        0,
        this.props.dataSource?.maxLength
      );
    }
    if (this.props.dataSource?.inputType == "number") {
      if (this.props.dataSource.notde) {
        event.target.value = event.target.value.replace(/\-/gi, "");
      }
      if (typeof this.props.dataSource.maxNumber == "number") {
        if (
          parseFloat(event.target.value) >
          parseFloat(this.props.dataSource.maxNumber)
        )
          event.target.value = this.inputRef.current.getAttribute("value")
            ? this.inputRef.current.getAttribute("value")
            : this.props.dataSource.maxNumber;
      }
      if (typeof this.props.dataSource.minNumber == "number") {
        if (
          parseFloat(event.target.value) <
          parseFloat(this.props.dataSource.minNumber)
        ) {
          event.target.value = this.inputRef.current.getAttribute("value")
            ? this.inputRef.current.getAttribute("value")
            : this.props.dataSource.minNumber;
        }
      }
    }
    this.setState({
      value: this.props.dataSource?.decimal
        ? parseInt(this.numberWithCommas(event.target.value))
        : event.target.value,
      blur: event.target.value.trim() === "",
    });
    if ((this.props.dataSource || {}).input_type == "ContainerNo") {
      var that = this;
      let checksps = new RegExp("[^a-zA-Z0-9]", "g");
      var str = (event.target.value + "").normalize().replace(checksps, "");
      var str = removespc(event.target.value, exp);
      setvalthat(str, that);
    }
    if ((this.props.dataSource || {}).safeString) {
      var that = this;
      var str = removespc(event.target.value, exp);
      setvalthat(str, that);
    }
  }

  onKeyPress(e) {
    if (
      this.props.dataSource?.config &&
      this.props.dataSource?.config.onKeypress
    ) {
      this.props.dataSource?.config.onKeypress(e);
    }

    if ((this.props.dataSource || {}).safeString) this.handleKeyPress(e);

    if (typeof (this.props.dataSource || {}).onEnter == "function") {
      var char = e.which || e.keyCode;
      if (char == 13) {
        (this.props.dataSource || {}).onEnter(this);
      }
    }
  }

  checkBlur(e) {
    if (!e.target.value) {
      e.target.parentElement.parentElement
        .getElementsByTagName("label")[0]
        .classList.remove("m-form__label--focus");
    }

    let tempvalue = e.target.value;

    if (
      tempvalue.length !== 0 &&
      this.props.dataSource?.minLength &&
      this.props.dataSource?.inputType == "number"
    ) {
      if (
        parseInt(e.target.value).toString().length <
        parseInt(this.props.dataSource?.minLength)
      ) {
        tempvalue = parseFloat(e.target.value) * 1000;
      }
    }

    let returnvalue = {};
    returnvalue[this.props.dataSource?.ref] = tempvalue;
    this.setState({ value: tempvalue });

    if (this.props.validateValue) {
      this.setState({
        isValidate: true,
      });
    }
    if (typeof (this.props.dataSource || {}).onBlur == "function") {
      (this.props.dataSource || {}).onBlur(tempvalue);
    }
  }

  handleBlur(e) {
    if (this.state.value.trim() === "") {
      this.setState({ blur: true });
    } else {
      this.setState({ blur: false });
    }
  }

  checkFocus(e) {
    e.target.parentElement.parentElement
      .getElementsByTagName("label")[0]
      .classList.add("m-form__label--focus");
  }

  togglePassword() {
    this.setState(
      {
        passVisible: !this.state.passVisible,
      },
      () => {
        if (this.state.passVisible) {
          this.inputRef.current.type = "text";
          this.setState({ passVisibleIcon: "EyeOutlined" });
        } else {
          this.inputRef.current.type = "password";
          this.setState({ passVisibleIcon: "EyeInvisibleOutlined" });
        }
      }
    );
  }

  responsive(value) {
    this.setState({
      responsive: value,
    });
  }

  checkRequire(value) {
    let status = "";
    if (value) {
      status = "m-input-success";
    } else {
      status = "m-input-error";
    }
    this.setState({
      status: status,
    });
  }
  handleKeyPress(e) {
    if ((this.props.dataSource || {}).safeString) {
      var char = e.which || e.keyCode;
      var strchar =
        ((String.fromCharCode(char) || "") + "")
          .normalize()
          .replace(checkPrSps, "") + "";
      if (strchar == "" || char == 183) {
        e.preventDefault();
        e.stopPropagation();
      } else {
      }
    }
  }

  trimHandler(e) {
    if (this.props.dataSource?.trim) {
      this.trimvalue = e.clipboardData.getData("text/plain").trim();
    }
  }

  render() {
    let data = this.props.dataSource;
    let icon = data?.icon;
    let span = data?.span || 24;
    let passvisible = "";
    var that = this;
    if (data?.icon) {
      icon = React.createElement(LOL[data?.icon] || "i", {
        className:
          "m-form__icon " + (!LOL[data?.icon] ? "material-" + data?.icon : ""),
      });
    } else {
      icon = React.createElement(LOL["AlignLeftOutlined"] || "i", {
        className:
          "m-form__icon " + (!LOL[data?.icon] ? "material-" + data?.icon : ""),
      });
    }

    if (data?.inputType == "password") {
      passvisible = React.createElement(LOL[this.state.passVisibleIcon], {
        className: "m-password-toggle",
        onClick: this.togglePassword.bind(this),
      });
    }
    const { value } = this.state;
    var readonly = (
      this.state?.readonly === undefined ? data?.readonly : this.state?.readonly
    )
      ? true
      : false;
    if (data?.followProps) {
      this.state.value = data.value;
    }

    if (data?.propReadonly) {
      this.state.readonly = data.propReadonly;
      readonly = this.state?.readonly;
    }

    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        xl={span.xl || span}
        className="m-form__box"
        style={{ display: data?.isHide === true ? "none" : "block" }}
      >
        <div
          className={
            "m-form__input " +
            this.state.status +
            " " +
            (readonly ? "readonly" : "")
          }
        >
          <label
            className={
              (typeof this.state.value === "undefined" ||
              this.state.value === null
                ? ""
                : this.state.value + ""
              ).length > 0
                ? "m-form__label m-form__label--focus"
                : "m-form__label"
            }
          >
            {data?.label || ""}
          </label>
          <span className="ant-input-search ant-input-affix-wrapper">
            <input
              type={data?.inputType || "text"}
              lang={data?.inputType == "number" ? "en-150" : undefined}
              ref={this.inputRef}
              id={data?.ref || ""}
              key={data?.ref || ""}
              value={this.state.value || ""}
              onChange={this.handleChange.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onFocus={this.checkFocus.bind(this)}
              onKeyPress={this.onKeyPress.bind(this)}
              // onPaste={(e)=>{data.onPaste?data.onPaste(e,this):undefined;}}
              onClick={data?.onClick}
              readOnly={readonly ? true : false}
              autoComplete="off"
              className={data?.className || "m_input"}
              // onPaste={this.trimHandler.bind(this)}
              maxLength={data?.maxLength || 9999}
              tabIndex={data?.tabindex || 1}
              pattern={data?.format || ""}
            ></input>
          </span>
          {this.state.blur && (
            <p className="m-form__label__warning">
              {this.props.dataSource.test}
            </p>
          )}
        </div>
      </Col>
    );
  }
}

class Mdatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.dataSource?.value || undefined,
      readonly: props.dataSource?.propReadonly || false,
    };

    this.datePickerRef = React.createRef();
  }

  rangec(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate(current) {
    return current && current < moment().add(-1, "day").endOf("day");
  }

  disabledDateTime(current) {
    var that = this;
    return {
      disabledHours: () =>
        that.rangec(
          0,
          current > moment().endOf("day") ? 0 : moment().format("HH")
        ),
      disabledMinutes: () =>
        that.rangec(
          0,
          current > moment().endOf("hour") ? 0 : moment().format("mm")
        ),
      disabledSeconds: () =>
        that.rangec(
          0,
          current > moment().endOf("minute") ? 0 : moment().format("ss")
        ),
    };
  }
  componentDidMount() {
    const elementId =
      this.props.id || this.props.dataSource?.id || this.datePickerRef.current;
    if (this.props.dataSource?.defaultValue) {
      const formattedValue = moment(this.props.dataSource.defaultValue).format(
        this.props.dataSource.format
      );
      this.datePickerRef.current.value = formattedValue;
    }
    if (!window.component) window.component = {};
    window.component[elementId] = this;
  }

  checkFocus(e) {
    const labelElement =
      e.target.parentElement?.parentElement?.parentElement?.getElementsByTagName(
        "label"
      )[0];
    if (labelElement) {
      labelElement.classList.add("m-form__label--focus");
    }
  }

  checkBlur(e) {
    const labelElement =
      e.target.parentElement?.parentElement?.parentElement?.getElementsByTagName(
        "label"
      )[0];
    if (!e.target.value && labelElement) {
      e.target.parentElement.parentElement.parentElement
        .getElementsByTagName("label")[0]
        .classList.remove("m-form__label--focus");
    }
  }

  handleChange = (data) => {
    const { date, value, target } = data;
    this.setState({ value });
    if (this.props.dataSource.onChanged) {
      this.props.dataSource.onChanged(date, value, this);
    }
    if (this.props.onChangeValue) {
      this.props.onChangeValue(date, value, this);
    }
  };

  render() {
    const data = this.props.dataSource;
    const span = data?.span || 24;
    let value = this.state.value
      ? moment(this.state.value, data.format || "YYYY-MM-DD HH:mm:ss")
      : data.value
      ? moment(data.value, data.format || "YYYY-MM-DD HH:mm:ss")
      : data.defaultValue
      ? moment(data.defaultValue, data.format || "YYYY-MM-DD HH:mm:ss")
      : null;

    if (data.value === "") value = null;
    if (this.state.value === "") value = null;

    if (
      value &&
      (value === "Invalid date" || value.format("YYYY") === "Invalid date")
    ) {
      value = null;
    }

    if (data.followProps) {
      value = data.value
        ? moment(data.value, data.format || "YYYY-MM-DD HH:mm:ss")
        : null;
    }

    if (value && data.range === "start") {
      value.startOf(data.picker);
    } else if (value && data.range === "end") {
      value.endOf(data.picker);
    }

    if (value) {
      if (data.range == "start") {
        switch (data.picker) {
          case "quarter":
          case "month":
          case "year":
          case "week":
            value.startOf(data.picker);
            break;
        }
        if (data.range == "end") {
          switch (data.picker) {
            case "quarter":
            case "month":
            case "year":
            case "week":
              value.endOf(data.picker);
              break;
          }
        }
      }
    }

    const readonly =
      typeof data.propReadonly !== "undefined"
        ? data.propReadonly
        : this.state.readonly;

    return (
      <Col
        offset={data.offset || 0}
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        xl={span.xl || span}
        key={data.ref}
        className={`m-form__box ${data.className || ""} ${
          readonly ? "readonly" : ""
        }`}
      >
        <div className={`m-form__input ${readonly ? "readonly" : ""}`}>
          <label
            className={
              value ? "m-form__label m-form__label--focus" : "m-form__label"
            }
          >
            {data.label}
          </label>
          <DatePicker
            style={{ padding: 0 }}
            placeholder=""
            bordered={false}
            required-text={data.required}
            required={data.required ? true : false}
            ref={this.datePickerRef}
            id={data.ref}
            key={data.ref || ""}
            showTime={true}
            defaultValue={
              data.defaultValue
                ? moment(
                    data.defaultValue,
                    data.format || "YYYY-MM-DD HH:mm:ss"
                  )
                : ""
            }
            defaultPickerValue={
              data.defaultPickerValue
                ? moment(
                    data.defaultPickerValue,
                    data.format || "YYYY-MM-DD HH:mm:ss"
                  )
                : undefined
            }
            value={value}
            disabled={readonly ? true : false}
            inputReadOnly={true}
            picker={data.picker || "date"}
            format={
              data.picker === "quarter"
                ? `[Quý ${moment(value).utc().quarter()} năm ]YYYY`
                : data.format || "YYYY-MM-DD HH:mm:ss"
            }
            disabledDate={data.lockbefore ? this.disabledDate.bind(this) : null}
            disabledTime={
              data.lockbefore ? this.disabledDateTime.bind(this) : null
            }
            onChange={(date, dateString) =>
              this.handleChange({
                date,
                value: dateString,
                target: { id: data.ref, value: dateString },
              })
            }
            onBlur={this.checkBlur.bind(this)}
            onFocus={this.checkFocus.bind(this)}
          />
        </div>
      </Col>

      // !isMobile ?

      //     :
      //     <Col offset={data.offset ? data.offset : 0} span={span} key={data.ref} className={"m-form__box " + data.className}>
      //         <div className="m-form__input">
      //             <label className={this.state.value ? "m-form__label m-form__label--focus" : "m-form__label"}>{data.label}</label>
      //             <input type="datetime-local" style={{ padding: 0 }} placeholder="" bordered={false} required-text={data.required} required={data.required ? true : false}
      //                 ref={data.ref} id={data.ref} key={data.ref || ""}
      //                 showTime={true} value={this.state.value ? moment(this.state.value).format('YYYY-MM-DDTHH:mm') : ""} title={this.state.value ? moment(this.state.value).format('YYYY-MM-DD HH:mm:ss') : ""}
      //                 onChange={(date, dateString) => { this.setState({ value: moment(date.target.value).format('YYYY-MM-DD HH:mm:ss') }) }}
      //                 onBlur={this.checkBlur.bind(this)}
      //                 onClick={data.onClick}
      //                 inputReadOnly={this.state.readonly ? true : false}
      //                 onFocus={this.checkFocus.bind(this)} />
      //         </div>
      //     </Col>
    );
  }
}

// - import data with datatype as array Objects
// - Object name is "dataSource" with sample data
// = [
//     {
//         label: ""(optional) --
//         span: ""(optional) -- grid system default 24
//         ref: ""(require) -- component id, ref, key must be unquie
//         name: ""(require) -- name of group radio button
//         defaultValue: ""(optional) -- ref of radio item
//         options: ""(require) -- Object array, list of radio group
//     }

// if input property have "config" , it will be a object with base props of ant design Radio.Group component
// ]

class Mradio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.dataSource?.value || "",
      readonly: false,
    };

    this.radioGroupRef = React.createRef();
  }

  componentDidMount() {
    const refKey =
      this.props.id || this.props.dataSource?.id || this.props.dataSource?.ref;
    if (this.radioGroupRef.current) {
      this.radioGroupRef.current.dataset.component = this;
    }
    if (!window.component) window.component = {};
    window.component[refKey] = this;
  }

  handleChange(e) {
    this.setState({
      value: e.target?.value,
    });

    let returnvalue = {};
    returnvalue[this.props.dataSource.ref] = e.target?.value;

    if (this.props.onChangeValue) {
      this.props.onChangeValue(returnvalue);
    }
    if (typeof this.props.onChanged == "function") {
      this.props.onChanged(e.target?.value);
    }

    if (this.props.config && this.props.config.returnValue) {
      this.props.config.returnValue(e.target?.value);
    }

    if (this.props.switchContent) {
      let contentref = e.target?.value;
      this.props.switchContent(contentref);
    }
  }

  render() {
    let data = this.props.dataSource;
    let colStyle = data?.colStyle;
    let radioStyle = data?.radioStyle || {};
    let span = data?.span || 24;
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        style={colStyle}
      >
        <Radio.Group
          style={radioStyle}
          id={data?.ref}
          ref={data?.ref}
          key={data?.ref || ""}
          name={data?.name}
          defaultValue={data?.defaultValue || ""}
          value={this.state?.value || data?.value || data?.defaultValue || ""}
          className={
            (this.props.dataSource || {}).className +
            " " +
            (this.state.readonly ? "readonly" : "")
          }
          options={data?.options}
          disabled={this.state.readonly ? true : false}
          onChange={this.handleChange.bind(this)}
        ></Radio.Group>
      </Col>
    );
  }
}

class Mform extends React.Component {
  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <Row
        {...restProps}
        className={className ? `m-form ${className}` : "m-form"}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? React.cloneElement(child) : child
        )}
      </Row>
    );
  }
}

class Mcheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || false,
    };
  }

  componentDidMount() {
    const elementId =
      this.props.id ||
      this.props.ref ||
      this.props.dataSource?.id ||
      this.props.dataSource?.ref;
    if (!window.component) window.component = {};
    window.component[elementId] = this;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  componentWillReceiveProps() {
    if (this.props.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  handleChange(e) {
    const isChecked = e.target.checked;
    this.setState({ value: isChecked });

    if (this.props.onChangeValue) {
      const returnValue = {
        key: this.props.dataSource?.key,
        checked: isChecked,
      };
      this.props.onChangeValue(returnValue, this);
    }

    if (this.props.dataSource?.onChange) {
      this.props.dataSource.onChange(isChecked, this);
    }
  }

  render() {
    const data = this.props.dataSource || {};
    const span = data.span || 24;

    if (
      typeof data.value != "undefined" &&
      typeof this.props.value == "undefined"
    ) {
      // this.props.value == data.value;
    }
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        style={data.style}
        className={"m-form__Mcheckbox" + (data.className || "")}
        onClick={this.handleChange.bind(this)}
      >
        <span className="m-form__Checkbox">
          <Checkbox
            id={data.ref}
            checked={this.props.dataSource.value}
            onChange={this.handleChange.bind(this)}
            {...this.props}
          >
            {data.label}
          </Checkbox>
        </span>
      </Col>
    );
  }
}

class Mselect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.dataSource?.value || this.props.value || "",
    };
  }
  componentDidMount() {
    if (this.selectRef?.current) {
      this.selectRef.current.dataset.component = this;
    }
  }

  handleChange(e) {
    const { value } = e.target;

    this.setState({ value });

    const returnvalue = {
      [this.props.dataSource?.ref]: value,
    };

    if (typeof this.props.dataSource.onChange === "function") {
      this.props.dataSource.onChange(e);
    }

    if (this.props.onChangeValue) {
      this.props.onChangeValue(returnvalue);
    }

    if ((this.props.config || {}).returnValue) {
      this.props.config.returnValue(value);
    }
  }

  checkBlur(e) {
    if (!e.target?.value || e.target?.value === "default") {
      e.target.parentElement
        .getElementsByTagName("label")[0]
        .classList.remove("m-form__label--focus");
    }

    if (typeof (this.props.dataSource || {}).onBlur == "function") {
      (this.props.dataSource || {}).onBlur(e.target.value);
    }
  }

  checkFocus(e) {
    e.target.parentElement
      .getElementsByTagName("label")[0]
      .classList.add("m-form__label--focus");
  }

  renderOptions(value) {
    let data = this.props.dataSource;
    var options = (this.state?.options || data?.options || []).map(
      (item, ii) => {
        let temp;
        if (value + "" == item?.value + "") {
          temp = (
            <option
              key={item?.value + "" + ii}
              value={item?.value}
              data={JSON.stringify(item.data || {})}
              selected="selected"
            >
              {item?.label}
            </option>
          );
        } else {
          temp = (
            <option
              key={item?.value + "" + ii}
              value={item.value}
              data={JSON.stringify(item.data || {})}
            >
              {item?.label}
            </option>
          );
        }
        return temp;
      }
    );
    return options;
  }

  render() {
    let icon = "";
    let data = this.props.dataSource;
    let span = data?.span || 24;
    if (data?.icon) {
      icon = React.createElement(LOL[data.icon], { className: "m-form__icon" });
    } else {
      icon = React.createElement(LOL["BarsOutlined"], {
        className: "m-form__icon",
      });
    }
    var readonly = (
      this.state?.readonly === undefined ? data?.readonly : this.state?.readonly
    )
      ? true
      : false;
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        className="m-form__box"
        style={{ display: data?.isHide === true ? "none" : "block" }}
      >
        <div
          className={
            "m-form__input " +
            this.state.status +
            " " +
            (readonly ? "readonly" : "")
          }
        >
          <label
            className={
              data?.value || this.state.value
                ? "m-form__label m-form__label--focus"
                : "m-form__label"
            }
          >
            {data?.label}
          </label>
          <select
            ref={this.selectRef}
            id={data?.ref}
            key={data?.ref || ""}
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.checkBlur(e)}
            disabled={readonly}
            onFocus={(e) => this.checkFocus(e)}
            required-text={data?.required}
            required={data?.required}
            defaultValue={data?.value || this.state.value}
            tabIndex={data?.tabindex || 1}
          >
            <option key="" value=""></option>
            {this.renderOptions(data?.value || this.state.value)}
          </select>
          {icon}
        </div>
      </Col>
    );
  }
}

class Mswitch extends React.Component {
  constructor(props) {
    super(props);
    this.switchRef = React.createRef(); // Initialize the ref here
    this.state = {
      value: props.value || "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id =
      this.props.id ||
      this.props?.ref ||
      this.props.dataSource?.id ||
      this.props.dataSource?.ref;
    if (this.switchRef.current) {
      this.switchRef.current.setAttribute("data-component", this);
    }
    if (!window.component) window.component = {};
    window.component[id] = this;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.onChangeValue) {
      let returnvalue = {};
      returnvalue[this.props.dataSource?.ref] = e.target.value;
      this.setState({ value: e.target.value });
      this.props.onChangeValue(returnvalue);
    } else {
      return;
    }
  }

  render() {
    let data = this.props.dataSource;
    let span = data?.span || 24;
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
      >
        <Switch {...this.props}></Switch>
      </Col>
    );
  }
}

class Mdivider extends React.Component {
  render() {
    if (this.props.dataSource) {
      let data = this.props.dataSource;
      let span = data.span || 24;
      return (
        <Col
          xs={span.xs || span}
          sm={span.sm || span}
          md={span.md || span}
          lg={span.lg || span}
        >
          <Divider
            className="m-divider"
            style={{ margin: "4px 0px 10px" }}
            orientation={data.align || "center"}
          >
            {data.label}
          </Divider>
        </Col>
      );
    } else {
      return (
        <Col span={24}>
          <Divider className="m-divider" {...this.props}></Divider>
        </Col>
      );
    }
  }
}

class Mdropdown extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }
  componentDidMount() {
    const refId =
      this.props.id ||
      this.props.ref ||
      this.props.dataSource?.id ||
      this.props.dataSource?.ref;

    if (this.dropdownRef.current) {
      this.dropdownRef.current.dataset.component = this;
    }

    if (!window.component) window.component = {};
    window.component[refId] = this;
  }

  renderItems() {
    const { items } = this.props;

    return (
      <>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </>
    );
  }

  render() {
    const { id, ref, dataSource, ...otherProps } = this.props;
    const refId = id || ref || dataSource?.id || dataSource?.ref;

    return (
      <Dropdown ref={this.dropdownRef} {...otherProps}>
        {this.renderItems()}
      </Dropdown>
    );
  }
}

class MoneFieldInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      currentIndex: 0,
      maxLength: this.props.dataSource.length,
      importContStep: (
        <span>
          Tiếp theo <LOL.RightCircleOutlined />
        </span>
      ),
      inputData: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.dataSource.forEach((data) => {
      this.setState(({ inputData }) => {
        inputData[data.ref] = "";
      });
    });
  }

  componentDidMount() {
    this.pushRender();
    window.component = window.component || {};
    window.component[
      this.props.id ||
        this.props.ref ||
        this.props.dataSource.id ||
        this.props.dataSource.ref
    ] = this;
  }

  pushRender() {
    let arrs = [];
    this.props.dataSource.forEach((data) => {
      let item;
      switch (data.type) {
        case "input":
          item = this.renderInput(data);
          break;
        case "select":
          item = this.renderSelect(data);
          break;
      }
      arrs.push(item);
    });

    this.setState({
      dataList: arrs,
    });
  }

  keypressHandler = (e) => {
    var KeyID = e.key;
    switch (KeyID) {
      case "8":
        this.prevStep();
        break;
      case "Enter":
        this.nextStep();
        break;
    }
  };

  handleChange = async (e, id) => {
    var value, inputname;
    if (e.target) {
      value = e.target.value;
      inputname = e.target.id;
    } else {
      value = e;
      inputname = id;
    }

    await this.setState((prevState) => {
      let inputData = Object.assign({}, prevState.inputData); // creating copy of state variable jasper
      inputData[inputname] = value; // update the name property, assign a new value
      return { inputData };
    });

    this.setState((prevState) => {
      let dataList = Object.assign({}, prevState.dataList); // creating copy of state variable jasper
      dataList[inputname] = value; // update the name property, assign a new value
      return { dataList };
    });

    this.pushRender();
  };

  nextStep() {
    if (this.state.currentIndex == this.state.maxLength - 1) {
      this.props.submitInput(this.state.inputData);
      this.setState({
        currentIndex: 0,
        importContStep: (
          <span>
            Tiếp theo <LOL.RightCircleOutlined />
          </span>
        ),
      });
      return;
    }
    if (this.state.currentIndex == this.state.maxLength - 2) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        importContStep: (
          <span>
            Hoàn tất <LOL.UpCircleOutlined />
          </span>
        ),
      });
      return;
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
  }

  prevStep() {
    if (this.state.currentIndex == 0) {
      return;
    }
    this.setState({
      currentIndex: this.state.currentIndex - 1,
    });
  }

  renderInput(data) {
    return (
      <>
        <label>{data.label}</label>
        <Input
          autoFocus
          onChange={(e) => this.handleChange(e)}
          value={this.state.inputData[data.ref]}
          key={data.ref}
          id={data.ref}
        />
      </>
    );
  }

  renderSelect(data) {
    return (
      <>
        <label>{data.label}</label>
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder={"chọn " + data.label + "..."}
          optionFilterProp="children"
          onChange={(e, id) => this.handleChange(e, data.ref)}
          bordered={false}
          // onSearch={this.onSearch}
          autoFocus
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {data.option.map((item, ii) => {
            return (
              <Option key={ii} value={item.value}>
                {item.label}
              </Option>
            );
          })}
        </Select>
      </>
    );
  }

  render() {
    let data = this.props.dataSource;
    let span = data.span || 24;
    return (
      <>
        <Row justify="center">
          <Col
            xs={span.xs || span}
            sm={span.sm || span}
            md={span.md || span}
            lg={span.lg || span}
          >
            <div className="m-1field-input" onKeyPress={this.keypressHandler}>
              <div
                className={
                  "m-addon-before " +
                  (this.state.currentIndex == 0 ? "m-disable" : "")
                }
                onClick={() => this.prevStep()}
              >
                <LOL.LeftCircleOutlined /> Quay lại
              </div>
              {this.state.dataList[this.state.currentIndex]}
              <div className={"m-addon-after"} onClick={() => this.nextStep()}>
                {this.state.importContStep}
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
