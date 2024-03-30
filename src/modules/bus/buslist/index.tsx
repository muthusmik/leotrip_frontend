// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import Navbar from "components/common/ListingNavbar";
import BusModifySearch from "./BusModifySearch";
import BusList from "./BusList";
import BusFilter from "./BusFilter";
import TicketPriceChart from "components/common/OfferChart";

const BusListing = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <BusModifySearch />
      </div>
      <div className="flex flex-row bg-[#DEF2FF] h-full py-7">
        <div className="w-[27%]">
          <BusFilter />
        </div>
        <div className="w-[70%] ">
          <BusList />
        </div>
      </div>
    </>
  );
};

export default BusListing;
