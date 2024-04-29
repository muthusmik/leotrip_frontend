import Navbar from "components/common/Navbar";
import React from "react";
import Carousel from "components/common/Carousel";
import SearchBackground from "components/common/SearchBackground";
import { HomeFooter } from "components/common/Homepagefooter";
import { OfferSlider } from "components/common/OfferSlider";
import { Dailydeals } from "components/common/DailyDeals";
import { AboutUs } from "components/common/About/AboutUs";
import APPAdd from "components/common/AppAdd";
import GuideLine from "components/common/GuideLine";
import CarDetails from "./CarDetails";
import CarSearchComponent from "./CarSearchComponent";


function CarModule() {
  return (
    <div>
      <SearchBackground>
        <CarSearchComponent />
      </SearchBackground>
      <OfferSlider />
      <GuideLine />
      <APPAdd />
      <CarDetails />
      <HomeFooter />
    </div>
  );
}

export default CarModule;
