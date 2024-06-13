import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Tongquan from "../Tongquan";
import Login from "../views/login/login";
import UnAuthLayout from "../layout/UnAuthLayout/UnAuthLayout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Register from "../views/register/register";
import ForgotPassword from "../views/forgotPassword/forgotPassword";

class MainRoutes extends Component {
  render() {
    return (
      < Routes >

        <Route element={<UnAuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/home" element={<Tongquan />} />
        </Route>

      </Routes >
    )

  }
}

export default MainRoutes;
