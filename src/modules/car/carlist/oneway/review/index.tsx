import React from "react";
import Navbar from "components/common/ListingNavbar";
import CarReview from "./CarReview";
import ReviewBooking from "./ReviewBooking";
import MessageComponent from "../../MessageComponent";
import CarServices from "../../CarServices";
import TripDetails from "../../TripDetails";



const Review = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <ReviewBooking />
            <div className="flex flex-row bg-[#DEF2FF] h-full py-7 text-sm">
                <div>
                    <CarReview />
                    <MessageComponent />
                    <CarServices/>
                    <TripDetails/>
                </div>

            </div>
        </>
    );
}
export default Review;