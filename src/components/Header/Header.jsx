import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UserOutlined,
  AlignLeftOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Col, Popconfirm, Row, message } from "antd";
import "./Header.scss";
import * as AntdIcons from "@ant-design/icons";
import { toggleSubMenu } from "../../redux/reducers/navigationReducer";
import { withRouter } from "../../utils/withRouter";
import { Mbutton } from "../BasicUI/BasicUI";
import Extension from "../Extension/Extension";
import {
  addIconExtendsion,
  removeIconExtendison,
} from "../../redux/reducers/extendsionReducer";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  handleClick = (menuText) => {
    this.setState({ currentFolder: menuText, currentSubFolder: "" });
    this.props.toggleSubMenu({ text: menuText });
  };

  findSubItemById = (subId) => {
    const { navigations } = this.props;
    for (let item of navigations) {
      if (item.subMenu) {
        const subItem = item.subMenu.find((sub) => sub.id === subId);
        if (subItem) {
          return subItem;
        }
      }
    }
    return null;
  };

  getParentAndSubUrls = (subId) => {
    const { navigations } = this.props;
    let parentUrl = "";
    let subUrl = "";

    for (let item of navigations) {
      if (item.subMenu) {
        const subItem = item.subMenu.find((sub) => sub.id === subId);
        if (subItem) {
          parentUrl = item.url;
          subUrl = subItem.url;
          break;
        }
      }
    }

    return { parentUrl, subUrl };
  };

  handleRemoveExtendsion = (subId, e) => {
    e.stopPropagation();
    this.props.removeIconExtendison(subId);
    message.success("Xóa tiện ích thành công");
  };

  handleAddExtendsion = (subId, e) => {
    e.stopPropagation();
    const subItem = this.findSubItemById(subId);
    if (subItem) {
      const existingExtension = this.props.extensions.find(
        (ext) => ext.id === subItem.id
      );
      if (!existingExtension) {
        const { parentUrl, subUrl } = this.getParentAndSubUrls(subId);

        const newExtension = {
          id: subItem.id,
          text: subItem.text,
          url: `${parentUrl}${subUrl}`,
          parentUrl,
          icon: subItem.icon,
        };
        this.props.addIconExtendsion(newExtension);
        message.success("Thêm tiện ích thành công");
      } else {
        message.warning("Bạn đã thêm tiện ích này rồi");
      }
    } else {
      console.error("Không tìm thấy subItem");
    }
  };

  handleNavigateSubMenu = (e, parentUrl, subUrl) => {
    e.stopPropagation();
    const fullPath = `${parentUrl}${subUrl}`;
    this.props.navigate(fullPath);
  };

  getBreadcrumbs = () => {
    const { location, navigations } = this.props;
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    let breadcrumbs = [];
    navigations.forEach((navItem) => {
      if (pathSegments.includes(navItem.url.replace("/", ""))) {
        breadcrumbs.push(navItem.text);

        if (navItem.subMenu) {
          navItem.subMenu.forEach((subItem) => {
            if (pathSegments.includes(subItem.url.replace("/", ""))) {
              breadcrumbs.push(subItem.text);
            }
          });
        }
      }
    });

    return breadcrumbs;
  };

  isExtensionAdded = (subId) => {
    return this.props.extensions.some((ext) => ext.id === subId);
  };

  styleButton = () => {
    return {
      padding: "12px",
    };
  };

  renderButtonItem = (itemUrl, value) => {
    const IconComponent = AntdIcons[value.icon];
    const isAdded = this.isExtensionAdded(value.id);
    return (
      <Col span={8} className="button-custom">
        <Mbutton
          color=""
          className="m_button third"
          type="primary"
          htmlType="submit"
          onClick={(e) =>
            this.handleNavigateSubMenu(e, itemUrl, value.url, value.text)
          }
          styleButton={this.styleButton()}
          block
          size={"12"}
          dataSource={{
            textbutton: value.text,
            icon: value.icon,
          }}
        ></Mbutton>
        <Row
          className={
            isAdded ? "icon-add-extension_add" : "icon-add-extension_remove"
          }
          onClick={(e) =>
            isAdded
              ? this.handleRemoveExtendsion(value.id, e)
              : this.handleAddExtendsion(value.id, e)
          }
        >
          {isAdded ? (
            <AntdIcons.DeleteOutlined className="icon" />
          ) : (
            <AntdIcons.PlusCircleOutlined className="icon" />
          )}
        </Row>
      </Col>
    );
  };

  render() {
    const { navigations } = this.props;
    const breadcrumbs = this.getBreadcrumbs();
    return (
      <div className="header-container">
        {this.state.toggle && (
          <div className="overlay" onClick={this.handleToggle}></div>
        )}
        <div className="header">
          <div className="logo-main">
            <img
              src={"https://hatecogroup.vn/Styles/images/hateco-logo.svg"}
              className="image-logo"
              alt="logo"
            />
          </div>
          <div className="text-main">
            Công ty TNHH Cảng Container Quốc Tế Hateco Hải Phòng
          </div>
          <div className="user">
            <UserOutlined style={{ fontSize: "24px" }} className="logo-user" />
            <span>Username</span>
          </div>
        </div>
        <div className="menu">
          <div className="navigate">
            <div className="toggle">
              <AlignLeftOutlined
                className="icon-menu"
                onClick={this.handleToggle}
              />
            </div>
            <div
              className="tongquan"
              onClick={() => this.handleClick("Tổng quan")}
            >
              <HomeOutlined />
              <span> {breadcrumbs[0]}</span>
            </div>
            <div className="des">
              <Breadcrumb>
                {breadcrumbs.map((crumb, index) => (
                  <Breadcrumb.Item key={index}>
                    <span style={{ color: "white" }}>{crumb}</span>
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </div>
            <Extension />
          </div>
          {this.state.toggle && (
            <div className="danhsach-menu">
              <div className="danhmuc-cha">
                <ul>
                  {navigations.map((item) => {
                    const IconComponentParent = AntdIcons[item.icon];

                    return (
                      <li
                        key={item.text}
                        onClick={() => this.handleClick(item.text)}
                        className={item.isOpen ? "active" : ""}
                      >
                        <IconComponentParent
                          style={{ marginRight: "8px" }}
                          className="icon-parent"
                        />
                        <span> {item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="danhmuc-con">
                <Row gutter={[12, 12]}>
                  {navigations.map((item) =>
                    item.isOpen && item.subMenu
                      ? item.subMenu.map((subItem) => {
                        return (
                          <>{this.renderButtonItem(item.url, subItem)}</>
                        );
                      })
                      : null
                  )}
                </Row>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  navigations: state.navigation,
  extensions: state.extendsion,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSubMenu: (menuText) => dispatch(toggleSubMenu(menuText)),
  addIconExtendsion: (subItem) => dispatch(addIconExtendsion(subItem)),
  removeIconExtendison: (subId) => dispatch(removeIconExtendison(subId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
