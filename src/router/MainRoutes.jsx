import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home/home";
import Login from "../views/login/login";
import UnAuthLayout from "../layout/UnAuthLayout/UnAuthLayout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Register from "../views/register/register";
import ForgotPassword from "../views/forgotPassword/forgotPassword";
import ShowComponent from "../ShowComponent";
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header";

class MainRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route element={<UnAuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/show-component" element={<ShowComponent />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
}

export default MainRoutes;
