import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UserOutlined,
  AlignLeftOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, message } from "antd";
import { toggleSubMenu } from "../reducers/navigationReducer";
import "./Header.scss";
import { withRouter } from "../utils/withRouter";
import { addIconExtendsion } from "../reducers/extendsionReducer";
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

  handleAddExtendsion = (subId) => {
    const subItem = this.findSubItemById(subId);
    if (subItem) {
      const existingExtension = this.props.extensions.find(
        (ext) => ext.id === subItem.id
      );
      if (!existingExtension) {
        this.props.addIconExtendsion(subItem);
      } else {
        message.warning("Bạn đã thêm tiện ích này rồi");
      }
    } else {
      console.error("không tìm thấy subItem");
    }
  };

  handleNavigateSubMenu = (url) => {
    this.props.navigate(url);
  };

  render() {
    const { navigations } = this.props;
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
            <span>User-name</span>
          </div>
        </div>
        <div className="menu">
          <div className="navigate">
            <div className="toggle">
              <AlignLeftOutlined
                style={{
                  fontSize: "24px",
                  borderRight: "1px solid white",
                  paddingRight: "12px",
                  cursor: "pointer",
                }}
                onClick={this.handleToggle}
              />
            </div>
            <div
              className="tongquan"
              onClick={() => this.handleClick("Tổng quan")}
            >
              <HomeOutlined />
              <span>Tổng quan</span>
            </div>
            <div className="des">
              <span>Danh mục chức năng</span>
              <span>Danh mục hãng tàu</span>
            </div>
            <Extension />
          </div>
          {this.state.toggle && (
            <div className="danhsach-menu">
              <div className="danhmuc-cha">
                <ul>
                  {navigations.map((item) => (
                    <li
                      key={item.text}
                      onClick={() => this.handleClick(item.text)}
                      className={item.isOpen ? "active" : ""}
                    >
                      {item.text}
                    </li>
                  ))}
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
                                  this.handleAddExtension(subItem.id)
                                }
                                onConfirm={() =>
                                  this.handleNavigateSubMenu(subItem.url)
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
