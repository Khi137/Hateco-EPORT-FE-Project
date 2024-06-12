// src/components/Header.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
import {
  AlignCenterOutlined,
  BarChartOutlined,
  ContactsOutlined,
  CreditCardOutlined,
  DownSquareOutlined,
  FileSearchOutlined,
  FlagOutlined,
  HomeOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";
const getIconComponent = (iconName) => {
  const icons = {
    FaHome: <HomeOutlined />,
    LuArrowDownSquare: <DownSquareOutlined />,
    FaShip: <FlagOutlined />,
    TbCategory: <AlignCenterOutlined />,
    TbReceiptTax: <ContactsOutlined />,
    MdOutlineLocationSearching: <FileSearchOutlined />,
    MdPayment: <CreditCardOutlined />,
    MdOutlineSettingsSystemDaydream: <SnippetsOutlined />,
    FaChartBar: <BarChartOutlined />,
  };
  return icons[iconName] || null;
};

class Header extends Component {
  renderMenu = (menu) => {
    return (
      <li key={menu.text}>
        <Link to={menu.url} style={{ textDecoration: "none", color: "white" }}>
          {getIconComponent(menu.icon)} <span>{menu.text}</span>
        </Link>
        {menu.subMenu && (
          <ul className="sub-menu">
            {menu.subMenu.map((subMenu) => this.renderMenu(subMenu))}
          </ul>
        )}
      </li>
    );
  };

  render() {
    const { navigations } = this.props;
    return (
      <div className="header-container">
        <div className="header">
          <div className="logo-main">
            <img
              src={"https://hatecogroup.vn/Styles/images/hateco-logo.svg"}
              className="image-logo"
            />
          </div>
          <div className="text-main">
            Công ty TNHH Cảng Container Quốc Tế Hateco Hải Phòng
          </div>
          <div className="user">
            <UserOutlined style={{ fontSize: "24px" }} />
            <span>Thùy Duyên</span>
          </div>
        </div>
        <div className="nav">
          <ul id="main-menu">
            {navigations.map((nav) => this.renderMenu(nav))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  navigations: state.navigation,
});

export default connect(mapStateToProps)(Header);
