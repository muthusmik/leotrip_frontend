import { Step, Stepper } from "@material-tailwind/react";
import flight from "../../../../../assets/images/flight.svg";
import arrow from "../../../../../assets/icons/Arrowtick.svg";
import AI from "../../../../../assets/images/AI.png";
import review from "../../../../../assets/images/flightreview.png";
import TravelSuitcase from "../../../../../assets/icons/travelsuitcase.png";
import AA from "../../../../../assets/images/AA.png";
import BlueBag from "../../../../../assets/icons/travelbluebag.png";
import RedBag from "../../../../../assets/icons/travelred.png";
import TravelBag from "../../../../../assets/icons/travelbag.png";
import FlightTrackDetailsOneway from "./FlightTrackDetailsOneway";
import FlightTrackDetailsReturn from "./FlightTrackDetailsReturn";
const Baggage = () => {
  const baggage = [
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelbag.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelred.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelbluebag.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelbag.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelred.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelbluebag.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelbag.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelred.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelbluebag.png"),
    },
    {
      type: "3 KG",
      description: "Extra baggage 3 KG",
      price: 1350,
      image: require("../../../../../assets/icons/travelbag.png"),
    },
  ];
  return (
    <>
      <div className="border my-5">
        <div className="bg-white justify-between flex flex-row items-center">
          <div className="flex flex-row items-center p-2 pb-0 ms-5">
            <div className="flex flex-row items-end border-b-4 border-[#485BFF]">
              <img src={TravelSuitcase} className="h-auto w-8" alt="404" />
              <p className="text-1xl">Baggage</p>
            </div>
            <p className="bg-gradient-to-l from-bg-blue-start to-bg-blue-end px-3 rounded ms-5 py-1">
              <span className="text-xs text-white font-semibold">
                Pre-book extra baggage and save upto 20%
              </span>
            </p>
          </div>
          <div className="me-10">
            <button className="text-base text-[#1322AD]">
              Skip and continue
            </button>
          </div>
        </div>
        <div className="bg-[#f0eeee] p-8 ">
          <div className="bg-white boder-white rounded-2xl flex ps-5 py-5 items-center  m-10">
            <img src={AI} alt="404" className="h-10 w-10" />
            <div className="ms-10">
              <p className="text-lg">MAA - CJB</p>
              <p className="text-lg">0 of 1 baggage selected</p>
            </div>
          </div>
          <div className="mt-6 h-[300px] overflow-y-auto m-10">
            {baggage.map((item, index) => (
              <div
                key={index}
                className="bg-white border-white rounded-md   py-4 px-5 flex flex-row justify-between"
              >
                <div className="flex flex-row items-center ">
                  <div className="bg-[#D9D9D9]  w-40 h-28 border">
                    <img
                      src={item.image}
                      alt={item.type}
                      className=" w-28 mx-5"
                    />
                  </div>
                  <div className=" ms-10">
                    <p className="text-lg">{item.type}</p>
                    <p className="text-light-black text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="me-3 my-auto flex items-center">
                  <p className="mx-7 text-sm">
                    <span>&#x20B9; </span>
                    {item.price}
                  </p>
                  <button className="border rounded-md shadow-lg px-10 py-1 text-blue-600">
                    <span className="shadow-2xl"> ADD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Baggage;
