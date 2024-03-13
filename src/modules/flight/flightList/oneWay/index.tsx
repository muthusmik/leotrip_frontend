import React from "react";
import Navbar from "components/common/ListingNavbar";
import FlightModifySearch from "../FlightModifySearch";
import FlightFilter from "./FligthFilter";
import FlightList from "./FligthList";
const Oneway = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <FlightModifySearch />
            </div>
            <div className="flex flex-row bg-[#DEF2FF] h-full py-7">
                {/* <div className="container my-7"> */}
                <div className="w-[30%]"><FlightFilter /></div>
                <div className="w-[70%]"> <FlightList /></div>
                {/* </div> */}
            </div>
        </div>
    );
}
export default Oneway;  