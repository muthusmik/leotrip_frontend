import React from "react";
import Navbar from "components/common/ListingNavbar";
import FlightPage from './pages'
import ReviewDetails from './ReviewDetails'
const Oneway = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="bg-[#DEF2FF] h-full">
                <div className="flex flex-row h-full py-7">
                    <FlightPage />
                </div>
                <div className="container mx-5">
                    <ReviewDetails />
                </div>
            </div>
        </div>
    );
}
export default Oneway;  