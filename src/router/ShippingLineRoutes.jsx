import React from "react";
import { Route } from "react-router-dom";
import EdoManagement from "../views/shippingLine/edoManagement";
import EdoUpdate from "../views/shippingLine/edoUpdate";
import EdoHistory from "../views/shippingLine/edoHistory";
import ManagerBooking from "../views/shippingLine/managerBooking";

const ShippingLineRoutes = [
    <Route path="shippingLine_edoManagement" element={<EdoManagement />} />,
    <Route path="shippingLine_edoUpdate" element={<EdoUpdate />} />,
    <Route path="shippingLine_edoHistory" element={<EdoHistory />} />,
    <Route path="shippingLine_managerBooking" element={<ManagerBooking />} />,
]
export default ShippingLineRoutes;
