import Navbar from "components/common/ListingNavbar"
import HotelModifySearch from "./HotelModifySearch";
import AddressMap from "components/common/Iframe";
import HotelFilter from "./HotelFilter";
const HotelList=()=>{
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <HotelModifySearch />
            </div>
            <div className="bg-[#DEF2FF]">
                <AddressMap/>
            </div>
            <div className="flex flex-row bg-[#DEF2FF] h-full py-7">
                <div className="w-[35%]"><HotelFilter/></div>
            </div>
        </div>
    )
}
export default HotelList;