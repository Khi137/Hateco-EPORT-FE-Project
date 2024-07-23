import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home/home";
import Login from "../views/login/login";
import UnAuthLayout from "../layout/UnAuthLayout/UnAuthLayout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Register from "../views/register/register";
import ShowComponent from "../ShowComponent";
import Dashboard from "../components/Dashboard/Dashboard";
import SystemManageUser from "../views/system/SystemManageUser";
import SystemManageGroup from "../views/system/SystemManageGroup";
import SystemManagerGroupPermission from "../views/system/SystemManagerGroupPermission";
import TrackingContainer from "../views/tracking/trackingContainer";
import TrackingContainerList from "../views/tracking/trackingContainerList";
import TrackingBill from "../views/tracking/trackingBill";
import TrackingBooking from "../views/tracking/trackingBooking";
import TrackingEdo from "../views/tracking/trackingEdo";
import TrackingHouseBill from "../views/tracking/trackingHouseBill";
import Customer from "../views/category/Customer";
import Task from "../views/category/task";
import ShipExploitBrand from "../views/category/ShipExploitBrand";
import CommoditiesType from "../views/category/commoditiesType";
import DirectionContainer from "../views/category/directionContainer";
import PortsList from "../views/category/portsList";
import StatesContainer from "../views/category/statesContainer";
import SizeContainer from "../views/category/sizeContainer";
import ApproveCommand from "../views/commandManager/approveCommand";
import UpdateCommandInfomation from "../views/commandManager/updateCommandInfomation";
import InstantInvoiceWithReleasePointReport from "../views/report/instantInvoiceWithReleasePointReport";
import ContainerInvoiceReport from "../views/report/containerInvoiceReport";
import ContainerStorageReport from "../views/report/containerStorageReport";
import JobModeInvoiceWithReleasePointReport from "../views/report/jobModeInvoiceWithReleasePointReport";

import Report from "../views/report/report";
import PostageStandard from "../views/postage/postage";

import TariffStandard from "../views/tariff/tariffStandard.jsx";
import TariffRefer from "../views/tariff/tariffRefer.jsx";
import TariffFreeDay from "../views/tariff/tariffFreeDay.jsx";
import TariffHoliday from "../views/tariff/tariffHoliday.jsx";
import TariffContract from "../views/tariff/tariffContract.jsx";
import PendingTask from "../views/task/pendingTask.jsx";
import TskUpdateOrder from "../views/task/tskUpdateOrder.jsx";
import Eirsrv from "../views/tracking/eirsrv.jsx";
import EirTracking from "../views/tracking/eirTracking.jsx";
import PinCodeTrackingGML from "../views/tracking/pinCodeTrackingGML.jsx";

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
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/category-customer" element={<Customer />} />

          <Route path="/personal">
            <Route path="personalInfo" element={<PersonalInfor />} />
          </Route>

          <Route path="/postage">
            <Route path="postage-standard" element={<PostageStandard />} />
          </Route>

          <Route path="/tariff">
            <Route path="tariff-standard" element={<TariffStandard />} />
            <Route path="tariff-refer" element={<TariffRefer />} />
            <Route path="tariff-freeday" element={<TariffFreeDay />} />
            <Route path="tariff-holiday" element={<TariffHoliday />} />
            <Route path="tariff-contract" element={<TariffContract />} />
          </Route>

          <Route path="/shippingLine">
            <Route path="shippingLine_edoManagement" element={<EdoManagement />} />
            <Route path="shippingLine_edoUpdate" element={<EdoUpdate />} />
            <Route path="shippingLine_edoHistory" element={<EdoHistory />} />
          </Route>

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
            <Route path="eirsrv" element={<Eirsrv />} />
            <Route path="pin_code_tracking_GML" element={<PinCodeTrackingGML />} />
            <Route path="eir_tracking" element={<EirTracking />} />
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

          <Route path="/report">
            <Route path="InstantInvoiceWithReleasePointReport" element={<InstantInvoiceWithReleasePointReport />} />
            <Route path="containerStorageReport" element={<ContainerStorageReport />} />
            <Route path="containerInvoiceReport" element={<ContainerInvoiceReport />} />
            <Route path="jobModeInvoiceWithReleasePointReport" element={<JobModeInvoiceWithReleasePointReport />} />
          </Route>

          <Route path="/command_manager">
            <Route path="approve_command" element={<ApproveCommand />} />
            <Route path="update_command_Infomation" element={<UpdateCommandInfomation />} />
          </Route>

          <Route path="/report">
            <Route path="report-1" element={<Report />} />
          </Route>

          <Route path="/orders_checking">
            <Route path="pending_Task" element={<PendingTask />} />
            <Route path="tsk_update_order" element={<TskUpdateOrder />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />

        </Route>
      </Routes >
    );
  }
}
export default MainRoutes;
