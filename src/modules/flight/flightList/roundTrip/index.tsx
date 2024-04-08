import React from "react";
import Navbar from "components/common/ListingNavbar";

import ReviewDetails from "modules/flight/review/ReviewDetails";
import FlightListRoundTrip from "./FlightListRoundTrip";
import FlightModifySearch from "modules/bus/buslist/BusModifySearch";
import FlightFilterRoundTrip from "./FlightFilterRoundTrip";
import FlightFilter from "../oneWay/FligthFilter";
import RoundTripFlights from "./RoundTripFlights";

const RoundTrip = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <FlightModifySearch />
      </div>
      <div>
        <RoundTripFlights />
      </div>
      <div className="flex flex-row bg-[#DEF2FF] h-full py-7  border">
        <div className="w-[28%]">
          <FlightFilter />
        </div>
        <div className="w-[70%]">
          <FlightListRoundTrip />
        </div>
      </div>
    </div>
  );
};
export default RoundTrip;
