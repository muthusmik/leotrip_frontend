import { useLocation } from "react-router-dom";
import Navbar from "components/common/Navbar";
import { HomeFooter } from "components/common/Homepagefooter";
import HotelModifySearchComponent from "components/modules/hotel/HotelModifySearch";
// import FlightListing from "./FlightListing";
import APPAdd from "components/common/AppAdd";

function HotelShowList(props: any) {
    const locationValue = useLocation();
    const valuesFromProps = locationValue.state;
    console.log("Props............", valuesFromProps);

    return (
        <div>
            <Navbar />
            <HotelModifySearchComponent {...valuesFromProps} />
            {/* <FlightListing /> */}
            <APPAdd />
            <HomeFooter />
        </div>
    )
}

export default HotelShowList;