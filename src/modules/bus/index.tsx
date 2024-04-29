import React from "react";
import { HomeFooter } from "components/common/Homepagefooter";
import Navbar from "components/common/Navbar";
import Carousel from "components/common/Carousel";
import BusSearchComponent from "./BusSearchComponent";
import { AboutUs } from "components/common/About/AboutUs";
import { OfferSlider } from "components/common/OfferSlider";
import { Dailydeals } from "components/common/DailyDeals";
import APPAdd from "components/common/AppAdd";
import SearchBackground from "components/common/SearchBackground";
import BusDetails from "./BusDetails";
import GuideLine from "components/common/GuideLine";

function BusModule() {
  return (
    <div>
      <SearchBackground>
        <BusSearchComponent />
      </SearchBackground>
      <OfferSlider />
      <GuideLine />
      <APPAdd />
      <BusDetails />
      <HomeFooter />
    </div>
  );
}

export default BusModule;
