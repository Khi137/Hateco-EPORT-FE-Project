import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UserOutlined,
  AlignLeftOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Popconfirm, message } from "antd";
import { toggleSubMenu } from "../redux/reducers/navigationReducer";
import "./Header.scss";
import { withRouter } from "../utils/withRouter";
import { addIconExtendsion } from "../redux/reducers/extendsionReducer";
import Extension from "./Extension/Extension";
import * as AntdIcons from "@ant-design/icons";
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

  handleAddExtendsion = (subId) => {
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

  handleNavigateSubMenu = (parentUrl, subUrl) => {
    const fullPath = `${parentUrl}${subUrl}`;
    this.props.navigate(fullPath);
  };

  getBreadcrumbs = () => {
    const { location, navigations } = this.props;
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    let breadcrumbs = [];
    console.log(pathSegments);
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
                <ul>
                  {navigations.map((item) =>
                    item.isOpen && item.subMenu
                      ? item.subMenu.map((subItem) => {
                          const IconComponent = AntdIcons[subItem.icon];

                          return (
                            <li key={subItem.text}>
                              <Popconfirm
                                title="?"
                                description="Bạn muốn thêm tiện ích hay điều hướng?"
                                okText="Đi đến"
                                cancelText="+"
                                onCancel={() =>
                                  this.handleAddExtendsion(subItem.id)
                                }
                                onConfirm={() =>
                                  this.handleNavigateSubMenu(
                                    item.url,
                                    subItem.url,
                                    subItem.text
                                  )
                                }
                              >
                                <Button className="button-custom">
                                  {IconComponent && (
                                    <IconComponent
                                      style={{ marginRight: "8px" }}
                                    />
                                  )}
                                  {subItem.text}
                                </Button>
                              </Popconfirm>
                            </li>
                          );
                        })
                      : null
                  )}
                </ul>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
