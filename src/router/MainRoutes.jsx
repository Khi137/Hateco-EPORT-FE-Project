import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Tongquan from "../Tongquan";
import Login from "../views/login/login";


class MainRoutes extends Component {
  render() {
    return <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Tongquan />} />

    </Routes>;
  }
}

export default MainRoutes;
