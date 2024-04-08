import React, { useEffect, useRef, useState } from "react";
import Checkbox from "components/common/CheckBox";
import arrow from "../../../../assets/icons/Arrowtick.svg";
import AI from "../../../../assets/images/AI.png";
import { PrimaryButton } from "styles/Button";
import ModalFullHeight from "styles/ModalFullHeight";
import FlightDetails from "../oneWay/FlightDetails";
import { useNavigate } from "react-router-dom";
import RightArrow from "../../../../assets/icons/RightArrow.svg";
import AirAsia from "../../../../assets/images/AA.png";

const FlightListRoundTrip = () => {
  const flights = [
    {
      airline: "Air India",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h 30m",
      arrival: "06 : 05",
      stops: 0,
      price: 200,
    },
    {
      airline: "Indigo",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 45m",
      arrival: "06 : 05",
      stops: 1,
      price: 150,
    },
    {
      airline: "Spice Jet",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "3h",
      arrival: "06 : 05",
      stops: 2,
      price: 180,
    },
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h",
      arrival: "06 : 05",
      stops: 0,
      price: 220,
    },
    {
      airline: "Vistara",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 15m",
      arrival: "06 : 05",
      stops: 1,
      price: 250,
    },
    {
      airline: "Air India",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h 30m",
      arrival: "06 : 05",
      stops: 0,
      price: 200,
    },
    {
      airline: "Indigo",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 45m",
      arrival: "06 : 05",
      stops: 1,
      price: 150,
    },
    {
      airline: "Spice Jet",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "3h",
      arrival: "06 : 05",
      stops: 2,
      price: 180,
    },
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h",
      arrival: "06 : 05",
      stops: 0,
      price: 220,
    },
    {
      airline: "Vistara",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 15m",
      arrival: "06 : 05",
      stops: 1,
      price: 250,
    },
    {
      airline: "Air India",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h 30m",
      arrival: "06 : 05",
      stops: 0,
      price: 200,
    },
    {
      airline: "Indigo",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 45m",
      arrival: "06 : 05",
      stops: 1,
      price: 150,
    },
    {
      airline: "Spice Jet",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "3h",
      arrival: "06 : 05",
      stops: 2,
      price: 180,
    },
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h",
      arrival: "06 : 05",
      stops: 0,
      price: 220,
    },
    {
      airline: "Vistara",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 15m",
      arrival: "06 : 05",
      stops: 1,
      price: 250,
    },
    {
      airline: "Air India",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h 30m",
      arrival: "06 : 05",
      stops: 0,
      price: 200,
    },
    {
      airline: "Indigo",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 45m",
      arrival: "06 : 05",
      stops: 1,
      price: 150,
    },
    {
      airline: "Spice Jet",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "3h",
      arrival: "06 : 05",
      stops: 2,
      price: 180,
    },
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h",
      arrival: "06 : 05",
      stops: 0,
      price: 220,
    },
    {
      airline: "Vistara",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 15m",
      arrival: "06 : 05",
      stops: 1,
      price: 250,
    },
    {
      airline: "Air India",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h 30m",
      arrival: "06 : 05",
      stops: 0,
      price: 200,
    },
    {
      airline: "Indigo",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 45m",
      arrival: "06 : 05",
      stops: 1,
      price: 150,
    },
    {
      airline: "Spice Jet",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "3h",
      arrival: "06 : 05",
      stops: 2,
      price: 180,
    },
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h",
      arrival: "06 : 05",
      stops: 0,
      price: 220,
    },
    {
      airline: "Vistara",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 15m",
      arrival: "06 : 05",
      stops: 1,
      price: 250,
    },
    {
      airline: "Air India",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h 30m",
      arrival: "06 : 05",
      stops: 0,
      price: 200,
    },
    {
      airline: "Indigo",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 45m",
      arrival: "06 : 05",
      stops: 1,
      price: 150,
    },
    {
      airline: "Spice Jet",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "3h",
      arrival: "06 : 05",
      stops: 2,
      price: 180,
    },
    {
      airline: "Air Asia",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "2h",
      arrival: "06 : 05",
      stops: 0,
      price: 220,
    },
    {
      airline: "Vistara",
      airlinecode: "I5-743",
      departure: "05 : 00",
      duration: "1h 15m",
      arrival: "06 : 05",
      stops: 1,
      price: 250,
    },
  ];

  const flightsPerPage = 10;
  const navigate = useNavigate();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const [visibleFlights, setVisibleFlights] = useState(flightsPerPage);
  const tableRef = useRef(null);

  const handleProceed = () => {
    navigate("/flight/review");
  };

  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  const [isOpen, setIsOpen] = useState(new Array(flights.length).fill(false));
  const toggleBox = (index: any) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [isActiveChennai, setIsActiveChennai] = useState(true);
  const [isActiveCoimbatore, setIsActiveCoimbatore] = useState(false);

  const handleClickChennai = () => {
    setIsActiveChennai(!isActiveChennai);
    setIsActiveCoimbatore(false);
  };

  const handleClickCoimbatore = () => {
    setIsActiveCoimbatore(!isActiveCoimbatore);
    setIsActiveChennai(false);
  };
  return (
    <>
      <div>
        <div className="font-poppinsRegular w-[95%]">
          <div className="flex justify-around py-8 mx-20">
            <button
              className={`flex items-center border-4 text-white text-center text-base px-8 rounded py-2 ${
                isActiveChennai
                  ? "border-[#EC8E03] "
                  : "border-white opacity-20"
              }`}
              style={{
                backgroundImage: "linear-gradient(45deg, #3081ED, #62B3F0)",
                borderWidth: "2px",
              }}
              onClick={handleClickChennai}
            >
              <span>Chennai</span>
              <img src={RightArrow} alt="404" className="mx-2 h-6 w-6" />
              <span> Coimbatore</span>
            </button>
            <img
              src={arrow}
              alt="404"
              className="ml-2 h-12 w-12"
              style={{
                filter:
                  "invert(68%) sepia(58%) saturate(2854%) hue-rotate(193deg) brightness(97%) contrast(97%)",
              }}
            />
            <button
              className={`flex items-center border-4 text-white text-center text-base px-8 rounded py-2 ${
                isActiveCoimbatore
                  ? "border-[#EC8E03]"
                  : "border-white opacity-30"
              }`}
              style={{
                backgroundImage: "linear-gradient(45deg, #3081ED, #62B3F0)",
                borderWidth: "2px",
              }}
              onClick={handleClickCoimbatore}
            >
              <span> Coimbatore</span>
              <img src={RightArrow} alt="404" className="mx-2 h-6 w-6" />
              <span>Chennai</span>
            </button>
          </div>
        </div>
        <div className="flex flex-row bg-white border-2 border-light-black rounded-lg items-center justify-between diashow-img px-10 text-md px-5 py-3 w-[95%] font-poppinsRegular">
          <div className="flex flex-row items-center">
            <p className="mx-7">Chennai</p>
            <img src={arrow} alt="arrow" className="h-6 w-10" />
            <p className="mx-7">Coimbatore</p>
          </div>
          <p>Wed 5-May-2023</p>
          <div className="m-0 font-poppinsRegular ">
            <button className="border-2 border-light-black  text-sm px-4 rounded-tl-lg rounded-bl-lg bg-[#D9D9D9]">
              <span className="text-xs text-black">PREVIOUS DAY</span>
            </button>
            <button className="border-2 border-light-black text-sm px-4 rounded-tr-lg rounded-br-lg bg-[#D9D9D9]">
              <span className="text-xs text-black">NEXT DAY</span>
            </button>
          </div>
        </div>
        <table className="w-[95%] font-poppinsRegular" ref={tableRef}>
          <thead>
            <tr className="flex flex-row items-center justify-between diashow-img  text-md p-5">
              <th>AIRLINE</th>
              <th>DEPARTURE</th>
              <th>DURATION</th>
              <th>ARRIVAL</th>
              <th>PRICE</th>
              <div className="flex items-center">
                <th className=""></th>
              </div>
            </tr>
          </thead>
          <tbody className="px-5">
            {flights.map((flight, index) => (
              <>
                <div className="bg-white border border-black border-1 rounded mt-5">
                  <tr
                    key={index}
                    className="flex flex-row justify-between items-center py-5 diashow-img px-5"
                  >
                    <td>
                      <div className="flex flex-row">
                        <div>
                          {" "}
                          <img src={AI} alt="404" className="mr-2" />
                        </div>
                        <div className="flex flex-col">
                          <p>{flight.airline}</p>
                          <p className="text-light-black">
                            {flight.airlinecode}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      {flight.departure}
                      <p className="text-light-black">Chennai</p>
                    </td>
                    <td>
                      <p className="text-light-black">{flight.duration}</p>
                      <img src={arrow} alt="arrow" />
                      <p className="text-light-black">{flight.stops} Stop</p>
                    </td>
                    <td>
                      {flight.arrival}
                      <p className="text-light-black">Coimbatore</p>
                    </td>
                    <td>
                      <p className="text-int-dark-red text-2xl">
                        &#x20B9; {flight.price}
                      </p>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="flex flex-col "></td>
                  </tr>
                  <tr className="flex flex-col">
                    <td className="bg-[#F5F3F3]">
                      <button
                        className="text-[#3296D5] pl-3"
                        onClick={() => toggleBox(index)}
                      >
                        Flight Details
                      </button>
                    </td>
                    {isOpen[index] && (
                      <div className="bg-gray-200 p-3 mt-2 rounded-md px-7">
                        <p>Flight details go here...</p>
                      </div>
                    )}
                  </tr>
                </div>
              </>
            ))}
          </tbody>
        </table>
        <ModalFullHeight
          active={isOpenAuthModal}
          closeModal={() => setIsOpenAuthModal(false)}
          width="w-[920px]"
          isSubModal={true}
          transparent={true}
        >
          <FlightDetails
            close={() => setIsOpenAuthModal(false)}
            proceed={handleProceed}
          />
        </ModalFullHeight>
      </div>
    </>
  );
};

export default FlightListRoundTrip;
