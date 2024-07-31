import React from "react";
import { Route } from "react-router-dom";
import Customer from "../views/category/customer";
import ShipExploitBrand from "../views/category/shipExploitBrand";
import Task from "../views/category/task";
import CommoditiesType from "../views/category/commoditiesType";
import DirectionContainer from "../views/category/directionContainer";
import PortsList from "../views/category/portsList";
import StatesContainer from "../views/category/statesContainer";
import SizeContainer from "../views/category/sizeContainer";

const CategoryRoutes = [
    <Route path="category_customer" element={<Customer />} />,
    <Route path="category_shipExploitBrand" element={<ShipExploitBrand />} />,
    <Route path="category_task" element={<Task />} />,
    <Route path="category_commoditiesType" element={<CommoditiesType />} />,
    <Route path="category_directionContainer" element={<DirectionContainer />} />,
    <Route path="category_portsList" element={<PortsList />} />,
    <Route path="category_statesContainer" element={<StatesContainer />} />,
    <Route path="category_sizeContainer" element={<SizeContainer />} />,
]
export default CategoryRoutes;
