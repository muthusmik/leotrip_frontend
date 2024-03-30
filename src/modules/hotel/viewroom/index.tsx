import React from "react";
import Navbar from "components/common/ListingNavbar";
import RoomPage from "./RoomPage";
import APPAdd from "components/common/AppAdd";
import LocationDropdown from "./LocationDropdown";
import GuestReview from "./GuestReview";
import HotelComponent from "./HotelComponenet";
import Rooms from "./Rooms";
import YourPageComponent from "../../../components/common/Pages";


const ViewRoom = () => {
  return (
    <div className="bg-[#DEF2FF] font-poppinsRegular border my-5">
      <div>
        <Navbar />
      </div>
      <div>
        <YourPageComponent/>
      </div>
      <div>
        <RoomPage />
      </div>
      <div>
        <Rooms />
      </div>
      <div id="locations" style={{ marginTop: '20px' }}>
        <LocationDropdown />
      </div>
      <div id="guest-rating" style={{ marginTop: '20px' }}>
        <GuestReview />
      </div>
      <div className="mx-16">
      <APPAdd/>
      </div>
      <div>
        <HotelComponent/>
      </div>
     
    </div>
    
  );
};
export default ViewRoom;
