import { button } from "@material-tailwind/react";
import AirAsia from "../../../../assets/images/AA.png";
import arrow from "../../../../assets/icons/Arrowtick.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import AI from "../../../../assets/images/AI.png";
import Coin from "../../../../assets/icons/coin.png";
import flight from "../../../../assets/images/flight.svg";
import { Step, Stepper } from "@material-tailwind/react";

import { ClassNames } from "@emotion/react";
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
            <button className="mx-auto bg-int-sandal px-12 py-3 text-center text-white rounded text-base">
              <Link to="/flights/reviewDetails">
                <span className="font-poppinsRegular">BOOK NOW</span>
              </Link>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 font-poppinsRegular w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg overflow-y-auto max-h-[90vh] w-[70%] ">
            <div
              style={{
                background: "linear-gradient(90deg, #3081ED 0%, #56CBF2 100%)",
              }}
              className="py-3"
            >
              <div className="flex flex-row items-center">
                <img src={Coin} alt="404" className="h-12 w-12 ms-5" />
                <h1 className="text-1xl ms-5">More Fare Options Available</h1>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[50%] bg-white border p-5">
                <p>
                  <span className="bg-[#FDDFB3] px-4 text-sm"> DEPART</span>
                </p>
                <div className="flex flex-row items-center mt-3">
                  <h1>MAA</h1>
                  <img src={arrow} alt="arrow" className="h-3 px-5" />
                  <h1>CJB</h1>
                </div>
                <div className="flex items-center justify-around mt-3 ">
                  <div className="flex items-center ">
                    <img src={AI} alt="404" className="h-10 w-10" />
                    <div className="ml-5 text-light-black">
                      <h1 className="text-black text-base">Air India</h1>
                      <p className="text-sm">UK-993</p>
                      <p className="text-sm">ECONOMY</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-center ">
                      <h1 className="text-lg">05 : 00</h1>
                      <p className="text-light-black text-sm">Chennai (MAA)</p>
                      <p className="text-light-black text-sm">
                        Fri 05 May 2023
                      </p>
                      <p className="text-light-black text-sm">Terminal - 3</p>
                    </div>
                  </div>
                  <div>
                    <small className="text-light-black px-16">01h 05m</small>
                    <Stepper className="flex items-center">
                      <Step className="w-3 h-3"></Step>
                      <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                      <Step
                        className="w-7 h-7 bg-cover"
                        style={{ backgroundImage: `url(${flight})` }}
                      ></Step>
                      <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                      <Step className="w-3 h-3"></Step>
                    </Stepper>
                    <p className=" px-1 text-int-blue text-sm text-center p-0 my-2">
                      <span className="border-dotted border-2 border-int-blue rounded-3xl px-2 py-1">
                        Retails Fare
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="text-center ">
                      <h1 className="text-lg">06 : 00</h1>
                      <p className="text-light-black text-sm">
                        Coimbatore (CJB)
                      </p>
                      <p className="text-light-black text-sm">
                        Fri 05 May 2023
                      </p>
                      <p className="text-light-black text-sm">Terminal - 3</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] bg-white border p-5">
                <p>
                  <span className="bg-[#FDDFB3] px-4 text-sm"> RETURN</span>
                </p>
              </div>
            </div>
            <div>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoundTripFlights;
