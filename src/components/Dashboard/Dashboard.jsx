import React, { Component } from "react";
import "./Dashboard.scss";
import {
  DeploymentUnitOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import * as AntdIcons from "@ant-design/icons";
import { Line, DualAxes } from "@ant-design/charts";
import { withRouter } from "../../utils/withRouter";
const listDataCard = [
  {
    title: "Tổng TEUS",
    number: "12.421",
    icon: "DeploymentUnitOutlined",
    des: "Dữ liệu được cập nhật theo thời gian thực",
  },
  {
    title: "Nâng hạ",
    number: "3.021",
    icon: "UngroupOutlined",
    growth: 8.26,
    des: "So với cùng kỳ",
  },
  {
    title: "Đóng rút",
    number: "1.221",
    icon: "MergeCellsOutlined",
    growth: 2.18,
    des: "So với cùng kỳ",
  },
  {
    title: "Dịch vụ",
    number: "8.321",
    icon: "TeamOutlined",
    growth: 3.06,
    des: "So với cùng kỳ",
  },
];

const menuData = [
  {
    title: "Đơn vị 1",
    icon: "RadiusBottomleftOutlined",
    number: "12,421,220",
    date: "01/06/2024",
  },
  {
    title: "Đơn vị 2",
    icon: "CaretDownOutlined",
    number: "12,421,220",
    date: "01/06/2024",
  },
  {
    title: "Đơn vị 3",
    icon: "PlayCircleOutlined",
    number: "12,421,220",
    date: "7/06/2024",
  },
  {
    title: "Đơn vị 4",
    icon: "LoginOutlined",
    number: "12,421,220",
    date: "16/06/2024",
  },
  {
    title: "Đơn vị 5",
    icon: "BorderInnerOutlined",
    number: "12,421,220",
    date: "15/05/2024",
  },
  {
    title: "Đơn vị 6",
    icon: "FullscreenExitOutlined",
    number: "12,421,220",
    date: "18/02/2024",
  },
  {
    title: "Đơn vị 7",
    icon: "MinusSquareOutlined",
    number: "12,421,220",
    date: "01/03/2024",
  },
];

const operateData = [
  {
    title: "Cấp rỗng",
    icon: "HomeOutlined",
    number: 322,
    growth: 15,
    type: "up",
    active: true,
  },
  {
    title: "Trả rỗng",
    icon: "BorderOuterOutlined",
    number: 120,
    growth: 8,
    type: "down",
    active: false,
  },
  {
    title: "Hạ bãi",
    icon: "BorderBottomOutlined",
    number: 225,
    growth: 12,
    type: "down",
    active: false,
  },
  {
    title: "Xuất bãi",
    icon: "PicCenterOutlined",
    number: 225,
    growth: 12,
    type: "down",
    active: false,
  },
  {
    title: "Đóng rút",
    icon: "FullscreenExitOutlined",
    number: 599,
    growth: 25,
    type: "up",
    active: false,
  },
  {
    title: "Vệ sinh",
    icon: "PicRightOutlined",
    number: 1321,
    growth: 23,
    type: "up",
    active: false,
  },
];

const data = [
  { date: "", value: 4652, type: "Nâng hạ" },
  { date: "Th.1", value: 7630, type: "Nâng hạ" },
  { date: "Th.2", value: 7510, type: "Nâng hạ" },
  { date: "Th.3", value: 11354, type: "Nâng hạ" },
  { date: "Th.4", value: 7200, type: "Nâng hạ" },
  { date: "Th.5", value: 6720, type: "Nâng hạ" },
  { date: "Th.6", value: 5024, type: "Nâng hạ" },
  { date: "Th.7", value: 4890, type: "Nâng hạ" },
  { date: "", value: 5123, type: "Dịch vụ" },
  { date: "Th.1", value: 4868, type: "Dịch vụ" },
  { date: "Th.2", value: 11254, type: "Dịch vụ" },
  { date: "Th.3", value: 7654, type: "Dịch vụ" },
  { date: "Th.4", value: 11254, type: "Dịch vụ" },
  { date: "Th.5", value: 7654, type: "Dịch vụ" },
  { date: "Th.6", value: 10125, type: "Dịch vụ" },
  { date: "Th.7", value: 11200, type: "Dịch vụ" },
];

const config = {
  data,
  xField: "date",
  yField: "value",
  seriesField: "type",
  yAxis: {
    label: {
      formatter: (v) => `${v}`,
    },
  },
  legend: {
    position: "top",
  },
  point: {
    size: 5,
    shape: "circle",
    style: {
      fill: "white",
      stroke: "black",
      lineWidth: 2,
    },
  },
  width: 540,
  height: 385,
  scale: { color: { range: ["#5B8FF9", "#5D7092"] } },
};

const uvBillData = [
  { time: "2019-03", value: 350, type: "uv" },
  { time: "2019-04", value: 900, type: "uv" },
  { time: "2019-05", value: 300, type: "uv" },
  { time: "2019-06", value: 450, type: "uv" },
  { time: "2019-07", value: 470, type: "uv" },
  { time: "2019-03", value: 220, type: "bill" },
  { time: "2019-04", value: 300, type: "bill" },
  { time: "2019-05", value: 250, type: "bill" },
  { time: "2019-06", value: 220, type: "bill" },
  { time: "2019-07", value: 362, type: "bill" },
];

const configChart = {
  xField: "time",
  legend: {
    color: {
      position: "bottom",
      layout: { justifyContent: "center" },
    },
  },

  scale: { color: { range: ["#5B8FF9", "#5D7092"] } },
  children: [
    {
      data: uvBillData,
      type: "interval",
      yField: "value",
      colorField: "type",
      group: true,
      style: { maxWidth: 50 },
      label: { position: "inside" },
      interaction: { elementHighlightByColor: { background: true } },
    },
  ],
};

export class Dashboard extends Component {
  renderCard = (data) => {
    const IconCard = AntdIcons[data.icon];
    return (
      <div className="teus">
        <div className="content">
          <div>
            <p>{data.title}</p>
            <p className="number">{data.number}</p>
          </div>
          <IconCard className="icon-data" />
        </div>
        <p className="des">
          <span className={data.growth ? "growth" : ""}>
            {data.growth ? `+${data.growth}%` : null}
          </span>
          {data.des}
        </p>
      </div>
    );
  };
  renderMenu = (data) => {
    const IconCard = AntdIcons[data.icon];
    return (
      <li>
        <div className="menu-child">
          <IconCard className="icon" /> <span>{data.title}</span>
        </div>
        <div className="menu-data">
          <p>{data.number}</p>
          <p>{data.date}</p>
        </div>
      </li>
    );
  };
  renderOperate = (data) => {
    const IconCard = AntdIcons[data.icon];
    return (
      <div className="operate">
        <IconCard className="icon" />
        <div className="des">
          <p>{data.title}</p>
          <p>{data.number}</p>
          <p>
            <span>{data.growth}%</span>
            {data.type === "up" ? (
              <AntdIcons.ArrowUpOutlined className="up" />
            ) : (
              <AntdIcons.ArrowDownOutlined className="down" />
            )}
          </p>
        </div>
        <AntdIcons.ArrowRightOutlined className={data.active && "active"} />
      </div>
    );
  };
  render() {
    return (
      <div className="dashboard-container">
        <div className="header-dashboard">
          <HomeOutlined
            className="icon-header"
            onClick={() => this.props.navigate("/")}
          />
          <span className="text">Header</span>
        </div>
        <div className="content-dashboard">
          <div className="left-content">
            <div className="header">
              <UserOutlined className="icon" />
              <h3 className="text">Thông tin người dùng</h3>
            </div>
            <div className="card-visa">
              <div className="top">
                <h6>ZAHV</h6>
                <div className="path">
                  <div className="path-1"></div>
                  <div className="path-2"></div>
                </div>
              </div>
              <div className="center">
                <span>1101</span>
                <span>2001</span>
                <span>8723</span>
                <span>7001</span>
              </div>
              <div className="bottom">
                <div className="left-bottom">
                  <p className="key">Name card</p>
                  <p className="value">Nguyen Van A</p>
                </div>
                <div className="right-bottom">
                  <p className="key">Expired Date</p>
                  <p className="value">06/27</p>
                </div>
              </div>
            </div>
            <div className="info-user">
              <h4>Nguyen van A</h4>
              <ul>
                <li>
                  <span className="title">Mã số thuê</span>
                  <span className="value">9310239110</span>
                </li>
                <li>
                  <span className="title">Email</span>
                  <span className="value">nguyenvana@gmail.com</span>
                </li>
                <li>
                  <span className="title">SĐT</span>
                  <span className="value">0123456789</span>
                </li>
                <li>
                  <span className="title">FAX</span>
                  <span className="value">02931203910</span>
                </li>
              </ul>
            </div>
            <div className="report">
              <h5>Danh mục báo cáo</h5>
            </div>
          </div>
          <div className="right-content">
            <div className="top">
              <div className="chart">
                <Line {...config} />
              </div>
              <div className="data">
                {listDataCard.map((el) => this.renderCard(el))}
              </div>
            </div>
            <div className="bottom">
              <div className="revenue-unit">
                <div className="title">
                  <h4>Doanh thu đơn vị</h4>
                  <p>
                    Xem tất cả <AntdIcons.RightOutlined />
                  </p>
                </div>
                <div className="panel">
                  <div className="nav">
                    <ul>
                      <li className="active">Tất Cả</li>
                      <li>Nâng Hạ</li>
                      <li>Dịch Vụ</li>
                    </ul>
                  </div>
                  <div className="list-nav">
                    <ul>{menuData.map((item) => this.renderMenu(item))}</ul>
                  </div>
                </div>
              </div>
              <div className="revenue-detail">
                <div className="period">
                  <h4>Biểu đồ doanh thu theo kỳ</h4>
                  <div className="chart">
                    <DualAxes {...configChart} />
                  </div>
                </div>
                <div className="operational">
                  <h4>Doanh thu chi tiết theo tác nghiệp</h4>
                  <div className="data">
                    {/* <Mdropdown /> */}
                    <div className="list-operational">
                      {operateData.map((el) => this.renderOperate(el))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
