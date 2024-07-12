import React from "react";
import { Minput } from "./components/BasicUI";

import { isMobileOnly, isMobile } from "react-device-detect";
import { Mcard, Mselect } from "./components/BasicUI";
import Header from "./components/Header";
import MainRoutes from "./router/MainRoutes";
import "./App.css";
import "../src/components/BasicUI.scss";
import "@silevis/reactgrid/styles.css";
import { ConfigProvider } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      menus: {},
      responsive: "m-desktop",
    };
  }

  resizeDetect() {
    let deviceClass = "m-desktop";
    if (isMobile) {
      if (isMobileOnly) {
        deviceClass = "m-mobile";
        if (window.innerWidth < window.innerHeight) {
          deviceClass += " m-mobile-portrait";
        } else {
          deviceClass += " m-mobile-lanescape";
        }
      } else {
        deviceClass = "m-tablet";
        if (window.innerWidth < window.innerHeight) {
          deviceClass += " m-tablet-portrait";
        } else {
          deviceClass += " m-tablet-lanescape";
        }
      }
    }
  }
  render() {
    let test = process.env.REACT_APP_API_HOST;
    return (
      <MainRoutes />
    );
  }
}
export default App;
