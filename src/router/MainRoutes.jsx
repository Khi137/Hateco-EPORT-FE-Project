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

import Customer from "../views/category/customer/Customer";
import ShipExploitBrand from "../views/category/shipExploitBrand/ShipExploitBrand";
import Task from "../views/category/task/Task";
import CommoditiesType from "../views/category/commoditiesType/CommoditiesType";
import DirectionContainer from "../views/category/directionContainer/DirectionContainer";
import PortsList from "../views/category/portsList/PortsList";
import StatesContainer from "../views/category/statesContainer/StatesContainer";
import SizeContainer from "../views/category/sizeContainer/SizeContainer";
class MainRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route element={<UnAuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/show-component" element={<ShowComponent />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category-customer" element={<Customer />} />
          <Route path="/category-shipExploitBrand" element={<ShipExploitBrand />} />
          <Route path="/category-task" element={<Task />} />
          <Route path="/category-commoditiesType" element={<CommoditiesType />} />
          <Route path="/category-directionContainer" element={<DirectionContainer />} />
          <Route path="/category-portsList" element={<PortsList />} />
          <Route path="/category-statesContainer" element={<StatesContainer />} />
          <Route path="/category-sizeContainer" element={<SizeContainer />} />
        </Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    );
  }
}
export default MainRoutes;
