import React from "react";
import { button } from "@material-tailwind/react";
import AirAsia from "../../../../assets/images/AA.png";
import arrow from "../../../../assets/icons/Arrowtick.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import AI from "../../../../assets/images/AI.png";
import Coin from "../../../../assets/icons/coin.png";
import flight from "../../../../assets/images/flight.svg";
import { Step, Stepper } from "@material-tailwind/react";

import Dollar from "../../../../assets/icons/dollar.png";
import Calender from "../../../../assets/icons/calender.png";
import Trolly from "../../../../assets/icons/trolly.png";
import Travelbag from "../../../../assets/icons/travelbag.png";

import { ClassNames } from "@emotion/react";
import FareRadioButtons from "./FareRadioButtons";
import FlightReviewModal from "./FlightReviewModal";
const RoundTripFlights = () => {
  const flightPickup = [
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      arrivalCode: "MAA",
      arrival: "06 : 05",
      departureCode: "CJB",
      price: 4320,
    },
  ];

  const flightReturn = [
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      arrivalCode: "CJB",
      arrival: "06 : 05",
      departureCode: "MAA",
      price: 4520,
    },
  ];
  const [selectedFare, setSelectedFare] = React.useState("low");
  const prices = {
    low: "4,320",
    comfort: "5,320",
    premium: "6,320",
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="bg-[#d9d9d9] w-[100%] flex flex-row px-5 font-poppinsRegular py-5">
        {flightPickup.map((flight, index) => (
          <div
            key={index}
            className="w-[33.3%] border-r-4 border-light-black p-3 flex flex-row items-center mx-3 justify-center"
          >
            <div>
              <img src={AirAsia} alt="404" className="" />
            </div>

            <div className="flex flex-col text-center text-sm text-light-black mx-3">
              <p className="text-[#444343]"> {flight.airline}</p>
              <p>{flight.airlinecode}</p>
            </div>
            <div className="flex flex-col text-center text-sm text-light-black mx-3">
              <p className="text-black text-base"> {flight.arrival}</p>
              <p> {flight.arrivalCode}</p>
            </div>
            <div>
              <img src={arrow} alt="404" className="ml-2 h-6 w-6 mx-3" />
            </div>
            <div className="flex flex-col text-center text-sm text-light-black mx-3">
              <p className="text-black text-base">{flight.departure}</p>
              <p> {flight.departureCode}</p>
            </div>
            <div className="flex flex-col text-center text-sm text-light-black mx-5">
              <p className="text-int-dark-red text-lg">₹ {flight.price}</p>
              <button className="text-int-dark-sky-blue underline">
                Details
              </button>
            </div>
          </div>
        ))}

        {flightReturn.map((flight, index) => (
          <div
            key={index}
            className="w-[33.3%] border-r-4 p-3 border-light-black flex flex-row items-center justify-center mx-3"
          >
            <div>
              <img src={AirAsia} alt="404" className="" />
            </div>

            <div className="flex flex-col text-center text-sm text-light-black mx-3">
              <p className="text-[#444343]"> {flight.airline}</p>
              <p>{flight.airlinecode}</p>
            </div>
            <div className="flex flex-col text-center text-sm text-light-black mx-3">
              <p className="text-black text-base"> {flight.arrival}</p>
              <p> {flight.arrivalCode}</p>
            </div>
            <div>
              <img src={arrow} alt="404" className="ml-2 h-6 w-6 mx-3" />
            </div>
            <div className="flex flex-col text-center text-sm text-light-black mx-3">
              <p className="text-black text-base">{flight.departure}</p>
              <p> {flight.departureCode}</p>
            </div>
            <div className="flex flex-col text-center text-sm text-light-black mx-5">
              <p className="text-int-dark-red text-lg">₹ {flight.price}</p>
              <button className="text-int-dark-sky-blue underline">
                Details
              </button>
            </div>
          </div>
        ))}

        <div className="w-[33.3%] p-3">
          <h1 className="text-lg  ">Grand Total</h1>
          <div className="flex flex-row items-center ms-10">
            <h1 className="text-2xl">
              ₹ <span className=" line-through">8,640</span>
            </h1>
            <h1 className="text-2xl ms-3">8,340</h1>
            <button
              className="mx-auto bg-int-sandal px-12 py-3 text-center text-white rounded text-base"
              onClick={openModal}
            >
              <span className="font-poppinsRegular">BOOK NOW</span>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 font-poppinsRegular w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg overflow-y-auto max-h-[90vh] w-[70%] ">
            <FlightReviewModal />
          </div>
        </div>
      )}
    </>
  );
};

export default RoundTripFlights;
