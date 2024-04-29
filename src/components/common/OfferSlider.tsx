import React, { useState } from "react";
import '../../index.css';
import Slidercomponent from './Slidercomponent';
import hotel from '../../assets/images/room1.jpg';
import car from '../../assets/images/carbg.avif';
import flight from '../../assets/images/flight_2.jpg';
import bus from '../../assets/images/pixmo.jpg';
import { Box } from "./Sliderbox";
import { NavLink, useNavigate } from "react-router-dom";
import open from '../../assets/icons/Arrowleft.svg';
import close from '../../assets/icons/Arrowright.svg';
import arrow from '../../assets/images/Arrow 45.svg';


export function OfferSlider() {
    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(0)
    const [activeCategory, setActiveCategory] = useState("all"); // Track active category
    const [activeNav, setActiveNav] = useState("all");

    const navigate=useNavigate();
    const offers = [
        {
            title: "Domestic car",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: car
        },
        {
            title: "Domestic bus",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: bus
        },
        {
            title: "Domestic hotel",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: hotel
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestics",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic car",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: car
        },
        {
            title: "Domestic bus",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: bus
        },
        {
            title: "Domestic hotel",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: hotel
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestics",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic car",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: car
        },
        {
            title: "Domestic bus",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: bus
        },
        {
            title: "Domestic hotel",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: hotel
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },
        {
            title: "Domestics",
            description: "Flights Fares Starting @ Rs. 1,468",
            image: flight
        },

        // Add more offers here
    ];
    const filteredOffers = offers.filter(offer => {
        if (activeCategory === "all") return true;
        return offer.title.toLowerCase().includes(activeCategory.toLowerCase());
    });

    const handleNavLinkClick = (category: any) => {
        setActiveNav(category)
        setActiveCategory(category);
    };
    const goToPreviouspar = () => {
        setPrev(prev - 1)
    }
    const goToNextpar = () => {
        setNext(next + 1)
    }


    const handleButtonClick = () => {
        // Add your logic here, such as opening a modal or triggering some other action
        console.log("Button clicked!");
        // For example, if you want to open a modal, you can set a state to control its visibility
        // setModalOpen(true);
    };

    const handleOfferClick = () => {
        navigate('/offer')
    };
    return (
        <div className="border-white rounded-3xl shadow-card my-5 md:my-[5%] mx-0 md:mx-[5%]">
            <div className="flex flex-col md:flex-row justify-around h-[18%] rounded-t-3xl linear text-center font-poppinsRegular text-md sm:text-lg md:text-3xl pt-3 ">
                Offers
                <nav className="flex flex-wrap justify-center items-center space-x-4 md:space-x-7 text-sm md:pr-8 mt-4 md:mt-0">
                    <NavLink to="" className={`hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:border-opacity-50 transition-colors duration-300 ease-in-out ${activeNav === 'all' ? 'text-blue-500 border-b-2 border-opacity-50 border-blue-500' : 'text-gray-500'}`} onClick={() => handleNavLinkClick("all")}>All Offers</NavLink>
                    <NavLink to="" className={`hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:border-opacity-50 transition-colors duration-300 ease-in-out ${activeNav === 'Domestic flight' ? 'text-blue-500 border-b-2 border-opacity-50 border-blue-500' : 'text-gray-500'}`} onClick={() => handleNavLinkClick("Domestic flight")}>Flights</NavLink>
                    <NavLink to="" className={`hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:border-opacity-50 transition-colors duration-300 ease-in-out ${activeNav === 'Domestics' ? 'text-blue-500 border-b-2 border-opacity-50 border-blue-500' : 'text-gray-500'}`} onClick={() => handleNavLinkClick("Domestics")}>DomesticFlights</NavLink>
                    <NavLink to="" className={`hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:border-opacity-50 transition-colors duration-300 ease-in-out ${activeNav === 'Domestic hotel' ? 'text-blue-500 border-b-2 border-opacity-50 border-blue-500' : 'text-gray-500'}`} onClick={() => handleNavLinkClick("Domestic hotel")}>Hotels</NavLink>
                    <NavLink to="" className={`hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:border-opacity-50 transition-colors duration-300 ease-in-out ${activeNav === 'Domestic car' ? 'text-blue-500 border-b-2 border-opacity-50 border-blue-500' : 'text-gray-500'}`} onClick={() => handleNavLinkClick("Domestic car")}>Cabs</NavLink>
                    <NavLink to="" className={`hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:border-opacity-50 transition-colors duration-300 ease-in-out ${activeNav === 'Domestic bus' ? 'text-blue-500 border-b-2 border-opacity-50 border-blue-500' : 'text-gray-500'}`} onClick={() => handleNavLinkClick("Domestic bus")}>Bus</NavLink>
                </nav>
                <div className="flex items-center mt-4 md:mt-0 md:mx-0 mx-auto">
                    <h1 className="text-int-primary-blue text-sm font-bold" onClick={handleOfferClick}>VIEW ALL</h1>
                    <img src={arrow} alt="ar" className="h-10 w-7 mx-3" />
                    <div className="flex rounded-full border py-2  px-1 shadow-lg">
                        <img src={open} alt="*" className="h-4 w-4 mx-2" onClick={() => goToPreviouspar()} />
                        <div className="border-l"></div>
                        <img src={close} alt="*" className="h-4 w-4 mx-2" onClick={() => goToNextpar()} />
                    </div>
                </div>

            </div>
            <Slidercomponent className="md:w-4/5 mx-auto" offers={filteredOffers} Box={Box} goToPrevious1={prev} goToNext1={next} />
        </div>

    );
}