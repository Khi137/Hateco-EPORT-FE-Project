import React from "react";
import { Route } from "react-router-dom";
import TariffStandard from "../views/tariff/tariffStandard";
import TariffRefer from "../views/tariff/tariffRefer";
import TariffFreeDay from "../views/tariff/tariffFreeDay";
import TariffHoliday from "../views/tariff/tariffHoliday";
import TariffContract from "../views/tariff/tariffContract";

const TariffRoutes = [
    <Route path="tariff-standard" element={<TariffStandard />} />,
    <Route path="tariff-refer" element={<TariffRefer />} />,
    <Route path="tariff-freeday" element={<TariffFreeDay />} />,
    <Route path="tariff-holiday" element={<TariffHoliday />} />,
    <Route path="tariff-contract" element={<TariffContract />} />,
]
export default TariffRoutes;
