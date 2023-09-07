import { useLocation } from "react-router-dom";
import Navbar from "components/common/Navbar";
import { HomeFooter } from "components/common/Homepagefooter";
import APPAdd from "components/common/AppAdd";
import BusModifySearchComponent from "components/modules/bus/BusModifySearch";

function BusShowList(props: any) {
    const locationValue = useLocation();
    const valuesFromProps = locationValue.state;
    console.log("Props............", valuesFromProps);

    return (
        <div>
            <Navbar />
            <BusModifySearchComponent {...valuesFromProps} />
            <APPAdd />
            <HomeFooter />
        </div>
    )
}

export default BusShowList;