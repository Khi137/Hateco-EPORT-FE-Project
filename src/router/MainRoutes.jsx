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
import TrackingContainer from "../views/tracking/trackingContainer/trackingContainer";
import TrackingBill from "../views/tracking/trackingBill/trackingBill";
import TrackingBooking from "../views/tracking/trackingBooking/trackingBooking";
import TrackingEdo from "../views/tracking/trackingEdo/trackingEdo";
import TrackingHouseBill from "../views/tracking/trackingHouseBill/trackingHouseBill";
import Customer from "../views/category/customer/Customer";


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
          <Route path="/category-customer" element={<Customer />} />

          <Route path="/tracking">
            <Route path="tracking_container" element={<TrackingContainer />} />
            <Route path="tracking_bill" element={<TrackingBill />} />
            <Route path="tracking_booking" element={<TrackingBooking />} />
            <Route path="tracking_edo" element={<TrackingEdo />} />
            <Route path="tracking_housebill" element={<TrackingHouseBill />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    );
  }
}

export default MainRoutes;
