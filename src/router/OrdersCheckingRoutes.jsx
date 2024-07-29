import React from "react";
import { Route } from "react-router-dom";
import PendingTask from "../views/task/pendingTask";
import TskUpdateOrder from "../views/task/tskUpdateOrder";

const OrdersCheckingRoutes = [
    <Route path="pending_Task" element={<PendingTask />} />,
    <Route path="tsk_update_order" element={<TskUpdateOrder />} />
]
export default OrdersCheckingRoutes;
