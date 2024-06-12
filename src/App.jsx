import React from "react";
import {
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
} from "./components/BasicUI";

import { isMobileOnly, isMobile } from "react-device-detect";

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

    document.getElementsByTagName("body").classList.add(deviceClass);
  }

  render() {
    let test = process.env.REACT_APP_API_HOST;
    return (
      <>
        <h1>{test}</h1>
        <Mselect/>
      </>
    );
  }
}

export default App;
