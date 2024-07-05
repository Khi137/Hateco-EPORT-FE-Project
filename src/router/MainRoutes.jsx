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
import SystemManageUser from "../views/system/systemManageUser/SystemManageUser";
import SystemManageGroup from "../views/system/systemManageGroup/SystemManageGroup";
import SystemManagerGroupPermission from "../views/system/systemManagerGroupPermission/SystemManagerGroupPermission";
import System from "../views/system/system";
import TrackingContainer from "../views/tracking/trackingContainer/trackingContainer";
import TrackingBill from "../views/tracking/trackingBill/trackingBill";
import TrackingBooking from "../views/tracking/trackingBooking/trackingBooking";
import TrackingEdo from "../views/tracking/trackingEdo/trackingEdo";
import TrackingHouseBill from "../views/tracking/trackingHouseBill/trackingHouseBill";
import TrackingContainerList from "../views/tracking/trackingContainerList/trackingContainerList";

import Customer from "../views/category/customer/Customer";

import ShipExploitBrand from "../views/category/shipExploitBrand/ShipExploitBrand";
import Task from "../views/category/task/task";
import CommoditiesType from "../views/category/commoditiesType/commoditiesType";
import DirectionContainer from "../views/category/directionContainer/directionContainer";
import PortsList from "../views/category/portsList/portsList";
import StatesContainer from "../views/category/statesContainer/statesContainer";
import SizeContainer from "../views/category/sizeContainer/sizeContainer";
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
            <Route
              path="tracking_container_list"
              element={<TrackingContainerList />}
            />
            <Route path="tracking_bill" element={<TrackingBill />} />
            <Route path="tracking_booking" element={<TrackingBooking />} />
            <Route path="tracking_edo" element={<TrackingEdo />} />
            <Route path="tracking_housebill" element={<TrackingHouseBill />} />
          </Route>
          <Route path="/system_manager">
            <Route path="SystemManageUser" element={<SystemManageUser />} />
            <Route path="SystemManageGroup" element={<SystemManageGroup />} />
            <Route
              path="SystemManagerGroupPermission"
              element={<SystemManagerGroupPermission />}
            />
          </Route>
          {/* <Route path="/system" element={<System />} /> */}
          <Route path="/category">
            <Route path="category_customer" element={<Customer />} />
            <Route
              path="category_shipExploitBrand"
              element={<ShipExploitBrand />} 
            />
            <Route path="category_task" element={<Task />} />
            <Route
              path="category_commoditiesType"
              element={<CommoditiesType />}
            />
            <Route
              path="category_directionContainer"
              element={<DirectionContainer />}
            />
            <Route path="category_portsList" element={<PortsList />} />
            <Route
              path="category_statesContainer"
              element={<StatesContainer />}
            />
            <Route path="category_sizeContainer" element={<SizeContainer />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
}
export default MainRoutes;
