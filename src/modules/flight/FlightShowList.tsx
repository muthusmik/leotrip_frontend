import Navbar from "components/common/Navbar";
import FlightSearchComponent from "./FlightSearchComponent";
import { HomeFooter } from "components/common/Homepagefooter";

function FlightShowList() {
    return (
        <div>
            <Navbar />
            <FlightSearchComponent />
            <HomeFooter />
        </div>
    )
}

export default FlightShowList;