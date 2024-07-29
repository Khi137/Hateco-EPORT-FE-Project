import React from "react";
import { Route } from "react-router-dom";
import PostageStandard from "../views/postage/postage";

const PersonalRoutes = [
    <Route path="postage-standard" element={<PostageStandard />} />,
]
export default PersonalRoutes;
