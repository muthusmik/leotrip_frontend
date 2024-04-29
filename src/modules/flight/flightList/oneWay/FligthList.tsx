import Checkbox from "components/common/CheckBox";
import React, { useEffect, useRef, useState } from "react";
import arrow from "../../../../assets/icons/Arrowtick.svg";
import AI from "../../../../assets/images/AI.png";
import { PrimaryButton } from "styles/Button";
import ModalFullHeight from "styles/ModalFullHeight";
import FlightDetails from "./FlightDetails";
import { useNavigate } from "react-router-dom";
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
const FlightList = () => {
  const navigate = useNavigate();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false);
  const [visibleFlights, setVisibleFlights] = useState(flightsPerPage);
  const tableRef = useRef<HTMLTableElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const table = tableRef.current;
      if (table) {
        const { scrollTop, scrollHeight, clientHeight } = table;
        if (scrollTop + clientHeight >= scrollHeight) {
          setVisibleFlights(
            (prevVisibleFlights) => prevVisibleFlights + flightsPerPage
          );
        }
      }
    };

    const tableElement = tableRef.current;
    if (tableElement) {
      tableElement.addEventListener("scroll", handleScroll);
      return () => {
        tableElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const handleProceed = () => {
    // setIsOpenAuthModal(true)
    navigate("/flight/review");
  };

//on/off
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(prevState => !prevState);
  };

  //open/close
  const [isOpen, setIsOpen] = useState(new Array(flights.length).fill(false));
    const toggleBox = (index:any) => {
      setIsOpen(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
    });
    };
    useEffect(()=>{
console.log("isopen",isOpen)
    },[isOpen])
  return (
    <div className="">
      <table className="w-[95%] font-poppinsRegular" ref={tableRef}>
        <thead>
          <tr className="flex flex-row bg-white border border-black border-1 rounded-lg items-center justify-between diashow-img  text-md p-5">
            <th>AIRLINE</th>
            <th>DEPARTURE</th>
            <th>DURATION</th>
            <th>ARRIVAL</th>
            <th>PRICE</th>
            <div className="flex items-center">
              <th className="">RECOMMENDED</th>
              <th><label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  className="hidden"
                />
                <div className={`w-8 h-4 flex items-center  rounded-full ${isChecked ? 'bg-blue-400' : 'bg-gray-400'}`}>
                  <span className={`block w-3 h-3 rounded-full bg-white shadow-md transform ${isChecked ? 'translate-x-5' : 'translate-x-0'}`}></span>
                  <span className={`transform -translate-x-1/2 text-xs font-bold text-black text-satrt ${isChecked ? '' : 'hidden'}`}>ON</span>
                  <span className={`transform -translate-x-1/2 text-xs font-bold text-black ${isChecked ? 'hidden' : ''}`}>OFF</span>
                </div>
              </label>
              </th>
            </div>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <>
              <div className="bg-white border border-black border-1 rounded-lg">
                <tr
                  key={index}
                  className="flex flex-row justify-between items-center py-5 diashow-img"
                >
                  <td>
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <img src={AI} alt="404" className="mr-2" />
                      </div>
                      <div className="flex flex-col">
                        <p>{flight.airline}</p>
                        <p className="text-light-black">{flight.airlinecode}</p>
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
                    <div>
                      <p className="border border-int-blue border-1 rounded-3xl px-1 text-int-blue text-xs">
                        + More Fare
                      </p>
                    </div>
                  </td>
                  <td>
                    <PrimaryButton rounded onClick={handleProceed}>
                      <p className="font-poppinsRegular">BOOK NOW</p>
                    </PrimaryButton>
                  </td>
                </tr>
                <tr>
                  <td className="flex flex-col bg-[#fddfb3] border-[#ec8e03] border-l-2 ml-10 my-5 pe-10">
                    <p className="">Use Promo Code : BOOK NOW to get flat Rs.300 OFF on this flight</p>
                  </td>
                </tr>
                <tr className="flex flex-col">
                  <td className="bg-[#f5f3f3]">
                    <button className="text-[#3296d5] pl-3" onClick={() => toggleBox(index)}>Flight Details</button>
                   
                  </td>
                  {isOpen[index] && (
                      
                      <div className="bg-gray-200 p-3 mt-2 rounded-md">
                          {/* Content to show when the box is open */}
                          {/* You can place your flight details here */}
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
      {/* <div className="">
                <div className="w-[95%]">
                    <div className="flex flex-row bg-white border border-black border-1 rounded-lg justify-between p-5 diashow-img">
                        <h3>AIRLINES</h3>
                        <h3>DEPARTURE</h3>
                        <h3>DURATION</h3>
                        <h3>ARRIVE</h3>
                        <h3>PRICE</h3>
                    </div>
                    {flights.map((flight, index) => (
                        <div key={index} className="flex flex-row bg-white border border-black border-1 rounded-lg justify-between items-center p-3 dropShadow:diashow-img">
                            <div className="flex items-center border">
                                <img src={AI} alt="404" className="mr-2" />
                                <div className="flex flex-col">
                                    <p>{flight.airline}</p>
                                    <p>{flight.airlinecode}</p>
                                </div>
                            </div>
                            <div className="flex flex-col border">
                                <p>{flight.departure}</p>
                                <p>Chennai</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p>{flight.duration}</p>
                                <img src={arrow} alt="arrow" />
                                <p>{flight.stops} Stop</p>
                            </div>
                            <div className="flex flex-col">
                                <p>{flight.arrival}</p>
                                <p>Coimbatore</p>
                            </div>
                            <div>
                                <p className="">{flight.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
    </div>
  );
};

export default FlightList;
