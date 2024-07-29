import React from "react";
import { Route } from "react-router-dom";
import ApproveCommand from "../views/commandManager/approveCommand";
import UpdateCommandInfomation from "../views/commandManager/updateCommandInfomation";

const CommandManagerRoutes = [
    <Route path="approve_command" element={<ApproveCommand />} />,
    <Route path="update_command_Infomation" element={<UpdateCommandInfomation />} />,
]
export default CommandManagerRoutes;
