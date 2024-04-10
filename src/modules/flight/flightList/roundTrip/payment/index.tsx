import React from "react";
import Navbar from "components/common/ListingNavbar";

import FlightModifySearch from "../../FlightModifySearch";
import PriceSummary from "../FlightPriceSummary";
import FlightDetail from "./FlightDetail";

const RoundTripPayement = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <FlightModifySearch />
      </div>

      <div className="flex flex-row bg-[#DEF2FF] h-full py-7  border">
        <div className="w-[70%]">
          <FlightDetail />
        </div>
        <div className="w-[28%]">
          <PriceSummary />
        </div>
      </div>
    </div>
  );
};
export default RoundTripPayement;
