import React from "react";
import Navbar from "components/common/ListingNavbar";
import FlightModifySearch from "modules/flight/flightList/FlightModifySearch";
import CarFilter from "../CarFilter";
import CarList from "../CarList";


const Roundway = () => {
    return (
        <>
        <div>
            <Navbar />
        </div>
        <div>
                <FlightModifySearch />
        </div>
            <div className="flex flex-row bg-[#DEF2FF] h-full py-7">
            <div className="w-[30%]"><CarFilter/></div>
            <CarList/>
            </div>
        </>
    );
}
export default Roundway;