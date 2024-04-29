import { useLocation } from "react-router-dom";

const ReviewBooking=(props:any)=>{
    const location = useLocation();
    const car = location.state;
    console.log("car", car)
    return(
        <>
          <div className="bg-gradient-to-r from-bg-blue-start to-bg-blue-end p-5 font-poppinsRegular text-sm">
                <h1 className="text-white text-2xl">Review Booking</h1>
                <p className="text-white">{car.from}-{car.to}</p>
                <p className="text-white">One Way | Pickup : Tue, 30 Apr ‘24, 10:00 AM</p>
            </div>  
        </>
    )

}
export default ReviewBooking;