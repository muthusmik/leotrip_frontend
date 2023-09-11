import React, { useState } from "react";
import TripHead from "../../TripHead";
import TripCar from "../car/TripCar";
import CancelCar from "../car/CancelCar";
import Completed from "./CompleteCar";
import { CarTraveldetails } from "../../Constant";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("upcoming"); // Default active tab

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#DEF2FF] h-full w-full">
      <div className="text-3xl font-poppinsRegular font-bold mb-5">My Trips</div>
      <div className="flex  gap-10">
        <div className="w-full">
          <div className="h-fit w-full bg-white border rounded-2xl pt-4 pb-0">
            <TripHead activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
          <div className="h-fit w-full bg-white border rounded-2xl py-4 mt-5">
            {activeTab === "upcoming" &&
              CarTraveldetails.map((CarTraveldetails, index) => (
                <TripCar key={index} data={CarTraveldetails} />
              ))}
            {activeTab === "canceled" &&
              CarTraveldetails.map((travelData, index) => (
                <CancelCar key={index} data={travelData} />
              ))}
            {activeTab === "completed" &&
              CarTraveldetails.map((travelData, index) => (
                <Completed key={index} data={travelData} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
