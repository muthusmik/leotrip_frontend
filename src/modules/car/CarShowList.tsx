import { useLocation } from "react-router-dom";
import Navbar from "components/common/Navbar";
import { HomeFooter } from "components/common/Homepagefooter";
import CarModifySearchComponent from "components/modules/car/CarModifySearch";
import APPAdd from "components/common/AppAdd";

function CarShowList(props: any) {
    const locationValue = useLocation();
    const valuesFromProps = locationValue.state;
    console.log("Props............", valuesFromProps);

    return (
        <div>
            <Navbar />
            <CarModifySearchComponent {...valuesFromProps} />
            <APPAdd />
            <HomeFooter />
        </div>
    )
}

export default CarShowList;