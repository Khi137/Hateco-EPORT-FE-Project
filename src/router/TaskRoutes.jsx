import React from "react";
import { Route } from "react-router-dom";
import TskImportPickup from "../views/task/tskImportPickup";
import EmptyPickup from "../views/task/emptyPickup";
import FCLPreAdvice from "../views/task/fCLPreAdvice";
import PreAdvice from "../views/task/preAdvice";
import StuffingOrder from "../views/task/stuffingOrder";
import UnstuffingOrder from "../views/task/unstuffingOrder";

const TaskRoutes = [
  <Route path="tskImportPickup" element={<TskImportPickup />} />,
  <Route path="tskEmptyPickup" element={<EmptyPickup />} />,
  <Route path="tskFCL_Pre_Advice" element={<FCLPreAdvice />} />,
  <Route path="tskPre_Advice" element={<PreAdvice />} />,
  <Route path="tskStuffingOrder" element={<StuffingOrder />} />,
  <Route path="tskUnstuffingOrder" element={<UnstuffingOrder />} />,
];
export default TaskRoutes;
