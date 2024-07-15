import React, { Component } from "react";
import { connect } from "react-redux";
import * as AntdIcons from "@ant-design/icons";
import "./Extendsion.scss";
import { withRouter } from "../../utils/withRouter";
import { Button, Popover, message } from "antd";
import { removeIconExtendison } from "../../redux/reducers/extendsionReducer";

export class Extension extends Component {
  handleNavigate = (url) => {
    this.props.navigate(url);
  };
  handleRemove = (id) => {
    this.props.removeIconExtendison(id);
    message.success("Xóa tiện ích thành công");
  };

  content = (id, text) => {
    return (
      <>
        <p>{text}</p>
        <div className="remove-icon" onClick={() => this.handleRemove(id)}>
          <AntdIcons.MinusOutlined />
        </div>
      </>
    );
  };
  render() {
    const { extensions } = this.props;
    return (
      <div className="extension-container">
        <ul>
          {extensions.map((extension, index) => {
            const IconComponent = AntdIcons[extension.icon];

            return (
              <li key={index}>
                <Popover
                  placement="bottom"
                  content={() => this.content(extension.id, extension.text)}
                  onClick={() => this.handleNavigate(extension.url)}
                >
                  <Button>
                    {IconComponent ? <IconComponent /> : extension.icon}
                  </Button>
                </Popover>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  extensions: state.extendsion,
});

const mapDispatchToProps = {
  removeIconExtendison,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Extension));
