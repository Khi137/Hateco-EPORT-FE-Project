import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
};

export default Router;
