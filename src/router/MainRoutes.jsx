import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Tongquan from "../Tongquan";

class MainRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Tongquan />} />
      </Routes>
    );
  }
}

export default MainRoutes;
