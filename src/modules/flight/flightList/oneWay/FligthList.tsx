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
  return (
    <div className="">
      <table className="w-[95%] font-poppinsRegular" ref={tableRef}>
        <thead>
          <tr className="flex flex-row bg-white border border-black border-1 rounded-lg justify-between diashow-img  text-xl p-5">
            <th>AIRLINE</th>
            <th>DEPARTURE</th>
            <th>DURATION</th>
            <th>ARRIVAL</th>
            <th>PRICE</th>
            <th>RECOMMENDED</th>
          </tr>
        </thead>
        <tbody>
          {flights.slice(0, visibleFlights).map((flight, index) => (
            <>
              <tr
                key={index}
                className="flex flex-row bg-white border border-black border-1 rounded-lg justify-between p-5 diashow-img"
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
                    <p className="border border-int-blue border-1 rounded-3xl p-1 text-int-blue text-sm">
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
              {/* <td className="flex flex-col">
                                <p className="bg-[#FBB040]">Use Promo Code : BOOK NOW to get flat Rs.300 OFF on this flight</p>
                            </td> */}
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
