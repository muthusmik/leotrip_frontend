import FareRadioButtons from "./FareRadioButtons";
import { Step, Stepper } from "@material-tailwind/react";
import flight from "../../../../assets/images/flight.svg";
import AI from "../../../../assets/images/AI.png";
import React, { useEffect } from "react";
import arrow from "../../../../assets/icons/Arrowtick.svg";
import Coin from "../../../../assets/icons/coin.png";
import { ClassNames } from "@emotion/react";
import Concession from "./Concession";
import { Link } from "react-router-dom";

const FlightReviewModal = () => {
  const [selectedFare, setSelectedFare] = React.useState("low");

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

  const prices = {
    low: "4,320",
    comfort: "5,320",
    premium: "6,320",
    lowReturn: "4,320",
    comfortReturn: "5,320",
    premiumReturn: "6,320",
  };
  useEffect(() => {
    console.log("selectedFare", selectedFare);
  }, [selectedFare]);
  return (
    <>
      <div>
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
            <div className="flex items-center justify-between mt-3 ">
              <div className="flex items-center ">
                <img src={AI} alt="404" className="h-10 w-10" />
                <div className="ml-5 text-light-black">
                  <h1 className="text-black text-sm">Air India</h1>
                  <p className="text-xs">UK-993</p>
                  <p className="text-xs">ECONOMY</p>
                </div>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-sm">05 : 00</h1>
                  <p className="text-light-black text-xs">Chennai</p>
                </div>
              </div>
              <div>
                <small className="text-light-black px-6 text-xs">01h 05m</small>
                <Stepper className="flex items-center">
                  <Step className="w-3 h-3"></Step>
                  <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                  <Step
                    className="w-6 h-6 bg-cover"
                    style={{ backgroundImage: `url(${flight})` }}
                  ></Step>
                  <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                  <Step className="w-3 h-3"></Step>
                </Stepper>
                <p className=" px-1 text-light-black text-xs text-center p-0 ">
                  1-stop
                </p>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-sm">06 : 00</h1>
                  <p className="text-light-black text-xs">Coimbatore</p>
                </div>
              </div>
            </div>
            <div className=" mt-5 h-[250px] overflow-y-auto py-5">
              <div className="bg-[#EAF2FF] border-[#89DBF5] border-2 shadow-xl p-3">
                <div className="flex justify-between">
                  <FareRadioButtons
                    label="Low Fare"
                    fareType="low"
                    selectedFare={selectedFare}
                    setSelectedFare={setSelectedFare}
                    prices={prices}
                  />
                </div>
                <div>
                  <Concession />
                </div>
              </div>
              <div className="bg-[#EAF2FF] border-[#89DBF5] border-2 shadow-xl p-3 my-3">
                <div className="flex justify-between">
                  <FareRadioButtons
                    label="Comfort Fare"
                    fareType="comfort"
                    selectedFare={selectedFare}
                    setSelectedFare={setSelectedFare}
                    prices={prices}
                  />
                </div>
                <div>
                  <Concession />
                </div>
              </div>

              <div className="bg-[#EAF2FF] border-[#89DBF5] border-2 shadow-xl p-3">
                <div className="flex justify-between">
                  <FareRadioButtons
                    label="Premium Fare"
                    fareType="premium"
                    selectedFare={selectedFare}
                    setSelectedFare={setSelectedFare}
                    prices={prices}
                  />
                </div>
                <div>
                  <Concession />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] bg-white border p-5">
            <p>
              <span className="bg-[#FDDFB3] px-4 text-sm"> RETURN</span>
            </p>
            <div className="flex flex-row items-center mt-3">
              <h1>CJB</h1>
              <img src={arrow} alt="arrow" className="h-3 px-5" />
              <h1>MAA</h1>
            </div>
            <div className="flex items-center justify-between mt-3 ">
              <div className="flex items-center ">
                <img src={AI} alt="404" className="h-10 w-10" />
                <div className="ml-5 text-light-black">
                  <h1 className="text-black text-sm">Air India</h1>
                  <p className="text-xs">UK-993</p>
                  <p className="text-xs">ECONOMY</p>
                </div>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-sm">06 : 00</h1>
                  <p className="text-light-black text-xs">Coimbatore</p>
                </div>
              </div>

              <div>
                <small className="text-light-black px-6 text-xs">01h 05m</small>
                <Stepper className="flex items-center">
                  <Step className="w-3 h-3"></Step>
                  <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                  <Step
                    className="w-6 h-6 bg-cover"
                    style={{ backgroundImage: `url(${flight})` }}
                  ></Step>
                  <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                  <Step className="w-3 h-3"></Step>
                </Stepper>
                <p className=" px-1 text-light-black text-xs text-center p-0 ">
                  1-stop
                </p>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-sm">05 : 00</h1>
                  <p className="text-light-black text-xs">Chennai</p>
                </div>
              </div>
            </div>
            <div className=" mt-5 h-[250px] overflow-y-auto py-5">
              <div className="bg-[#EAF2FF] border-[#89DBF5] border-2 shadow-xl p-3">
                <div className="flex justify-between">
                  <FareRadioButtons
                    label="Low Fare"
                    fareType="lowReturn"
                    selectedFare={selectedFare}
                    setSelectedFare={setSelectedFare}
                    prices={prices}
                  />
                </div>{" "}
                <div>
                  <Concession />
                </div>
                <div className="flex flex-wrap text-xs "></div>
              </div>
              <div className="bg-[#EAF2FF] border-[#89DBF5] border-2 shadow-xl p-3 my-3">
                <div className="flex justify-between">
                  <FareRadioButtons
                    label="Comfort Fare"
                    fareType="comfortReturn"
                    selectedFare={selectedFare}
                    setSelectedFare={setSelectedFare}
                    prices={prices}
                  />
                </div>
                <div>
                  <Concession />
                </div>
              </div>

              <div className="bg-[#EAF2FF] border-[#89DBF5] border-2 shadow-xl p-3">
                <div className="flex justify-between">
                  <FareRadioButtons
                    label="Premium Fare"
                    fareType="premiumReturn"
                    selectedFare={selectedFare}
                    setSelectedFare={setSelectedFare}
                    prices={prices}
                  />
                </div>
                <div>
                  <Concession />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-[#E7E7E7] py-4 flex justify-end">
          <p className="text-int-sandal text-end mx-2 text-lg">Grand Total </p>
          <p className="me-5 text-lg">
            {selectedFare === "low" ? (
              <span>&#x20B9; {prices.low}</span>
            ) : selectedFare === "comfort" ? (
              <span>&#x20B9; {prices.comfort}</span>
            ) : selectedFare === "premium" ? (
              <span>&#x20B9; {prices.premium}</span>
            ) : (
              <span>&#x20B9; {prices.low}</span>
            )}
          </p>
          <button className=" bg-int-sandal px-10 py-3 text-center text-white  font-semibold rounded-xl text-lg me-4">
            <Link to="/flights/reviewDetails">
              <span className="font-poppinsRegular">Continue</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default FlightReviewModal;
