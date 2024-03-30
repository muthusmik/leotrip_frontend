import Navbar from "components/common/ListingNavbar";
import Pages from "components/common/Pages";
import BookingInfo from "./BookingInfo";

const HotelReview=()=>{
    return(
        <>
            <Navbar/>
            <div className="bg-[#DEF2FF] font-poppinsRegular">
                <Pages/>
                <BookingInfo/> 
            </div>
        </>
    )
}
export default HotelReview;