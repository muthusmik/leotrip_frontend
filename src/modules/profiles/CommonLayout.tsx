import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profilesidebar from "./Profilesidebar";
import Flighttrip from '../trips/component/trip/flight/Flighttrip'
import Cartrip from '../trips/component/trip/car/Cartrip'
import Bustrip from '../trips/component/trip/bus/Bustrip'
import Hoteltrip from '../trips/component/trip/hotel/Hoteltrip'
import Profile from "./profile";
import arrow from '../../assets/images/arrow.png';
import closed from '../../assets/images/close.png';
const CommonLayout=()=>{
    const location=useLocation();
    const selectedOpt = location.state;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selectedOpt);

      const ScrollToTraveller=()=>{
        const element=document.getElementById('Travellers')
        if(element){
        element.scrollIntoView({behavior:'smooth'})
    }
}
      const renderComponent = () => {
        switch (selectedOption) {

            case 'Travellers':
                return <Profile />;
                case 'My Profile':
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
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return(
    <div className="bg-[#DEF2FF] h-full w-full py-10">
            <div className="flex mx-[5%] gap-10">
                <div className={`flex justify-end sm:flex sm:w-auto absolute sm:relative bg-red ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <div className="h-fit py-10 w-[250px] bg-white border rounded-2xl">
                        <Profilesidebar setSelectedOption={setSelectedOption} ToTraveller= {ScrollToTraveller} />
                    </div>
                    <div className="absolute sm:hidden" onClick={toggleSidebar}>
                        <img src={isSidebarOpen ? closed : arrow} alt={isSidebarOpen ? 'Close' : 'Open'} />
                    </div>
                </div>
                <div className="bg-[#DEF2FF] w-full h-fit">
                    <div className="bg-[#DEF2FF] h-fit w-full bg-white rounded-2xl">
                        <div className={`absolute block sm:hidden  ${isSidebarOpen ? 'hidden' : 'block'} `} onClick={toggleSidebar}>
                            <img src={arrow} alt="Open" />
                        </div>
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CommonLayout;
