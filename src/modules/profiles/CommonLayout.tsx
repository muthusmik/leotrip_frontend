import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profilesidebar from "./Profilesidebar";
import Flighttrip from '../trips/component/trip/flight/Flighttrip'
import Cartrip from '../trips/component/trip/car/Cartrip'
import Bustrip from '../trips/component/trip/bus/Bustrip'
import Hoteltrip from '../trips/component/trip/hotel/Hoteltrip'
import Profile from "./profile";
const CommonLayout=()=>{
    const location=useLocation();
    const selectedOpt = location.state;

    const [selectedOption, setSelectedOption] = useState(selectedOpt);

    const handleOptionClick = (option:any) => {
        setSelectedOption(option);
      };
      const renderComponent = () => {
        switch (selectedOption) {

            case 'Travellers':
                return <Profile />;
            case 'Flight':
                return <Flighttrip />;
            case 'Car':
                return <Cartrip />;
            case 'Bus':
                return <Bustrip />;
            case 'Hotel':
                return <Hoteltrip />;
            default:
                return null; // Render nothing by default
        }
    };
    return(
        <div className="bg-[#DEF2FF] h-full w-full py-10">
        <div className="flex mx-[5%] gap-10">
            <div>
                <div className="h-fit py-10 w-[250px] bg-white border rounded-2xl">
                <Profilesidebar setSelectedOption={handleOptionClick} />
                </div>
            </div>
            <div className="bg-[#DEF2FF] w-full">
                {/* <div className="h-fit  w-full bg-white border rounded-2xl py-4">
                    <TripHead />
                </div> */}
                <div className=" bg-[#DEF2FF] h-fit w-full bg-white  rounded-2xl  ">
                {renderComponent()}
                </div>

            </div>
        </div>
    </div>
    );
}
export default CommonLayout;