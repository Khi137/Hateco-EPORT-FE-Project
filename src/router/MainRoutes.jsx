import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import login from "../views/login/login";

class MainRoutes extends Component {
  render() {
    return <Routes>
      <Route path="/" element={login} />
    </Routes>;
  }
}

export default MainRoutes;
