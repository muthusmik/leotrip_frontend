import React, { useState } from "react";
import '../../index.css';
import Slidercomponent from './Slidercomponent';
import indigo from '../../assets/images/IndiGo-Logo.svg';
import { Box } from "./Sliderbox";


export  function OfferSlider() {

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
        <div className="h-80 w-[80%] mx-[10%] border-white rounded-3xl shadow-card mb-[4%]">
            <div className="h-[18%] rounded-t-3xl linear text-center font-poppinsRegular text-3xl pt-3 linerar">
                Offers For You
            </div>
            <Slidercomponent offers={offers} Box={Box}/>
        </div>
    );
}