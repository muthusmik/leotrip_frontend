import Navbar from "components/common/ListingNavbar"
import HotelModifySearch from "./HotelModifySearch";
import AddressMap from "components/common/Iframe";
import HotelFilter from "./HotelFilter";
import HotelDetails from "./HotelList";



const HotelList = () => {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <HotelModifySearch/>
            </div>
            <div className="flex flex-col md:flex-row bg-[#DEF2FF] ">
                <div className="w-[100%] md:w-[30%] h-full ">
                    <div className="py-7 mx-2"><AddressMap /></div>
                    <div className="py-7"><HotelFilter /></div>
                </div>
                <div className="w-[100%] md:w-[70%] h-full ">
                    <div className="py-7 mx-2"><HotelDetails/></div>
                </div>

            </div>
        </div>
    )
}
export default HotelList;