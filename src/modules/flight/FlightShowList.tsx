import { useLocation } from "react-router-dom";
import Navbar from "components/common/Navbar";
import { HomeFooter } from "components/common/Homepagefooter";
import FlightModifySearchComponent from "components/modules/flight/FlightModifySearch";
import APPAdd from "components/common/AppAdd";

function FlightShowList(props: any) {
    const locationValue = useLocation();
    const valuesFromProps = locationValue.state.values;
    console.log("Props............", valuesFromProps);

    return (
        <div>
            <Navbar />
            <FlightModifySearchComponent {...valuesFromProps} />
            <APPAdd />
            <HomeFooter />
        </div>
    )
}

export default FlightShowList;