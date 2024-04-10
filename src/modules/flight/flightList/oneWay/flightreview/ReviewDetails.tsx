import React from "react";
import review from 'assets/images/flightreview.png'
const ReviewDetails = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row bg-gradient-to-r from-bg-blue-start to-bg-blue-end">
                <img src={review} alt="review" className="h-14 w-14"/>
                <p>Flight Details</p>
            </div>
        </div>
    )
}
export default ReviewDetails;