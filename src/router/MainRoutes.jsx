import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Tongquan from "../Tongquan";
import Login from "../views/login/login";
import Dashboard from "../components/Dashboard/Dashboard";

class MainRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Tongquan />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
}

export default MainRoutes;
