import React from "react";
import { Route } from "react-router-dom";
import SystemManageUser from "../views/system/SystemManageUser";
import SystemManageGroup from "../views/system/SystemManageGroup";
import SystemManagerGroupPermission from "../views/system/SystemManagerGroupPermission";

const SystemManagerRoutes = [
    <Route path="SystemManageUser" element={<SystemManageUser />} />,
    <Route path="SystemManageGroup" element={<SystemManageGroup />} />,
    <Route path="SystemManagerGroupPermission" element={<SystemManagerGroupPermission />} />
]
export default SystemManagerRoutes;
