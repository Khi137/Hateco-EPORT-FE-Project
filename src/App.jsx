import React from "react";

import { isMobileOnly, isMobile } from "react-device-detect";
import MainRoutes from "./router/MainRoutes";
import "./App.css";
import "../src/components/BasicUI/BasicUI.scss";
import "@silevis/reactgrid/styles.css";

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
