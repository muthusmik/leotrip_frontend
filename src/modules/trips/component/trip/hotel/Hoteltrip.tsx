import React, { useState } from "react";
import TripHead from "../../TripHead";
import TripHotel from "../hotel/TripHotel";
import CancelHotel from "../hotel/CancelHotel";
import { HotelTravelDetails } from "../../Constant";
import Completed from "./CompleteHotel";

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
              HotelTravelDetails.map((travelData, index) => (
                <TripHotel key={index} data={travelData} />
              ))}
            {activeTab === "canceled" &&
              HotelTravelDetails.map((travelData, index) => (
                <CancelHotel key={index} data={travelData} />
              ))}
            {activeTab === "completed" &&
              HotelTravelDetails.map((travelData, index) => (
                <Completed key={index} data={travelData} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
