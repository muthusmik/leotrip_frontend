import React, { useState } from "react";
import TripHead from "../../TripHead";
import TripBus from "../bus/TripBus";
import { TravelDetails } from "../../Constant";
import Cancel from "./CancelBus";
import Completed from "./CompleteBus";

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
              TravelDetails.map((travelData, index) => (
                <TripBus key={index} data={travelData} />
              ))}
            {activeTab === "canceled" &&
              TravelDetails.map((travelData, index) => (
                <Cancel key={index} data={travelData} />
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
