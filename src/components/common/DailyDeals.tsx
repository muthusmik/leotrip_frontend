
import logo from '../../assets/icons/LeoLogo.svg';
import Mapicon from '../../assets/icons/mapicon.gif';
import '../../index.css';
import { Slidebutton } from "styles/Button";
import Slidercomponent from './Slidercomponent';
import indigo from '../../assets/images/IndiGo-Logo.svg';
import { Box } from './Sliderbox';

export function Dailydeals() {

    
const offers = [
    {
        title: "Domestic car",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic bus",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic hotel",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic Flight",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic Flight",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic Flight",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic Flight",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic Flight",
        description: "Flights Fares Starting @ Rs. 1,468",
        image: indigo
    },
    {
        title: "Domestic ",
        description: "Flights Fares Starting @ Rs. 1,468",
        image:indigo
    },

    // Add more offers here
];

 
    return (
        <div className="h-96 w-[80%] mx-[10%] border-white rounded-3xl shadow-card mb-[4%]">
            <div className="grid grid-flow-row-1 grid-flow-col h-[17%] rounded-t-3xl linear text-center font-poppinsRegular text-3xl pt-3 bg-primary">
                <div className="font-PoppinsSemiBold ml-5 text-left">DAILY DEALS</div>
                <div className="ml-10 mt-8"><Slidebutton /></div>
                <div className="w-full flex justify-end"><img src={logo} alt='leoLogo' className="h-10 pr-5" /></div>
            </div>
            <div className="flex mt-7 ml-10">
                <div className="h-10 w-10 bg-white border border-r-0">
                    <img src={Mapicon}/>
                </div>
                <div className="h-10 w-40 bg-gray-100 rounded-r-full border pt-1 pl-2">Deal Near {"chennai"}</div>
            </div>
            <Slidercomponent offers={offers} Box={Box}/>
        </div>
    );
}