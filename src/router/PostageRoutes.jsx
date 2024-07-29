import React from "react";
import { Route } from "react-router-dom";
import PersonalInfor from "../views/login/personalInfor";

const PostageRoutes = [
    <Route path="personalInfo" element={<PersonalInfor />} />,
]
export default PostageRoutes;