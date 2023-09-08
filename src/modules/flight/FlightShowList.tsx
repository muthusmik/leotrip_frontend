import { useLocation } from "react-router-dom";
import Navbar from "components/common/Navbar";
import { HomeFooter } from "components/common/Homepagefooter";
import FlightModifySearchComponent from "components/modules/flight/FlightModifySearch";
import FlightListing from "./FlightListing";
import APPAdd from "components/common/AppAdd";

function FlightShowList(props: any) {
    const locationValue = useLocation();
    const valuesFromProps = locationValue.state;
    console.log("Props............", valuesFromProps);

    return (
        <div>
            <Navbar />
            <FlightModifySearchComponent {...valuesFromProps} />
            <FlightListing />
            <APPAdd />
            <HomeFooter />
        </div>
    )
}

export default FlightShowList;