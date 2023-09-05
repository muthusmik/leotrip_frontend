import React, { useState } from "react";
import TripHead from "../../TripHead";
import TripCar from "../car/TripCar";
import CancelCar from "../car/CancelCar";
import Completed from "./CompleteCar";
import { TravelDetails } from "../../Constant";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("upcoming"); // Default active tab

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#DEF2FF] h-full w-full">
      <div className="flex  gap-10">
        <div className="w-full">
          <div className="h-fit w-full bg-white border rounded-2xl py-4">
            <TripHead activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
          <div className="h-fit w-full bg-white border rounded-2xl py-4 mt-10">
            {activeTab === "upcoming" &&
              TravelDetails.map((travelData, index) => (
                <TripCar key={index} data={travelData} />
              ))}
            {activeTab === "canceled" &&
              TravelDetails.map((travelData, index) => (
                <CancelCar key={index} data={travelData} />
              ))}
            {activeTab === "completed" &&
              TravelDetails.map((travelData, index) => (
                <Completed key={index} data={travelData} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
