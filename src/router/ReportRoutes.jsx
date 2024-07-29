import React from "react";
import { Route } from "react-router-dom";

import InstantInvoiceWithReleasePointReport from "../views/report/instantInvoiceWithReleasePointReport";
import ContainerInvoiceReport from "../views/report/containerInvoiceReport";
import ContainerStorageReport from "../views/report/containerStorageReport";
import JobModeInvoiceWithReleasePointReport from "../views/report/jobModeInvoiceWithReleasePointReport";
import Report from "../views/report/report";

const ReportRoutes = [
    <Route path="report-1" element={<Report />} />,
    <Route path="InstantInvoiceWithReleasePointReport" element={<InstantInvoiceWithReleasePointReport />} />,
    <Route path="containerStorageReport" element={<ContainerStorageReport />} />,
    <Route path="containerInvoiceReport" element={<ContainerInvoiceReport />} />,
    <Route path="jobModeInvoiceWithReleasePointReport" element={<JobModeInvoiceWithReleasePointReport />} />,
]
export default ReportRoutes;