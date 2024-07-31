import React from "react";
import { Route } from "react-router-dom";
import TrackingContainer from "../views/tracking/trackingContainer";
import TrackingContainerList from "../views/tracking/trackingContainerList";
import TrackingBill from "../views/tracking/trackingBill";
import TrackingBooking from "../views/tracking/trackingBooking";
import TrackingEdo from "../views/tracking/trackingEdo";
import TrackingHouseBill from "../views/tracking/trackingHouseBill";
import Eirsrv from "../views/tracking/eirsrv";
import PinCodeTrackingGML from "../views/tracking/pinCodeTrackingGML";
import EirTracking from "../views/tracking/eirTracking";

const TrackingRoutes = [
    <Route key="tracking_container" path="tracking_container" element={<TrackingContainer />} />,
    <Route key="tracking_container_list" path="tracking_container_list" element={<TrackingContainerList />} />,
    <Route key="tracking_bill" path="tracking_bill" element={<TrackingBill />} />,
    <Route key="tracking_booking" path="tracking_booking" element={<TrackingBooking />} />,
    <Route key="tracking_edo" path="tracking_edo" element={<TrackingEdo />} />,
    <Route key="tracking_housebill" path="tracking_housebill" element={<TrackingHouseBill />} />,
    <Route key="eirsrv" path="eirsrv" element={<Eirsrv />} />,
    <Route key="pin_code_tracking_GML" path="pin_code_tracking_GML" element={<PinCodeTrackingGML />} />,
    <Route key="eir_tracking" path="eir_tracking" element={<EirTracking />} />
];

export default TrackingRoutes;