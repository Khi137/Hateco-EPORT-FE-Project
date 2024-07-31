import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../views/login/login";
import UnAuthLayout from "../layout/UnAuthLayout/UnAuthLayout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Register from "../views/register/register";
import ShowComponent from "../ShowComponent";
import Dashboard from "../components/Dashboard/Dashboard";
import PersonalRoutes from "./PersonalRoutes.jsx";
import PostageRoutes from "./PostageRoutes.jsx";
import TariffRoutes from "./TariffRoutes.jsx";
import ShippingLineRoutes from "./ShippingLineRoutes.jsx";
import TrackingRoutes from "./TrackingRoutes.jsx";
import SystemManagerRoutes from "./SystemManagerRoutes.jsx";
import CategoryRoutes from "./CategoryRoutes.jsx";
import ReportRoutes from "./ReportRoutes.jsx";
import CommandManagerRoutes from "./CommandManagerRoutes.jsx";
import OrdersCheckingRoutes from "./OrdersCheckingRoutes.jsx";
import TaskRoutes from "./TaskRoutes.jsx";
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/postage"> {PersonalRoutes}</Route>
          <Route path="/personal"> {PostageRoutes}</Route>
          <Route path="/tariff"> {TariffRoutes}</Route>
          <Route path="/shippingLine"> {ShippingLineRoutes}</Route>
          <Route path="/tracking"> {TrackingRoutes}</Route>
          <Route path="/system_manager"> {SystemManagerRoutes}</Route>
          <Route path="/category"> {CategoryRoutes}</Route>
          <Route path="/report"> {ReportRoutes}</Route>
          <Route path="/command_manager"> {CommandManagerRoutes}</Route>
          <Route path="/orders_checking"> {OrdersCheckingRoutes}</Route>
          <Route path="/task"> {TaskRoutes}</Route>
        </Route>
      </Routes>
    );
  }
}
export default MainRoutes;
