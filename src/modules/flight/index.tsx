import Navbar from "components/common/Navbar";
import React from "react";
import SearchBackground from "components/common/SearchBackground";
import Carousel from "components/common/Carousel";
import { HomeFooter } from "components/common/Homepagefooter";
import FlightSearchComponent from "./FlightSearchComponent";
import { OfferSlider } from "components/common/OfferSlider";
import APPAdd from "components/common/AppAdd";
import { Dailydeals } from "components/common/DailyDeals";
import { AboutUs } from "components/common/About/AboutUs";
import GuideLine from "components/common/GuideLine";
import FlightDetails from "./FlightDetails";

function FlightModule() {
  return (
    <div>
      <SearchBackground>
        <FlightSearchComponent />
      </SearchBackground>
      <OfferSlider />
      <GuideLine />
      <APPAdd />
      <FlightDetails />
      <HomeFooter />
    </div>
  );
}

export default FlightModule;
