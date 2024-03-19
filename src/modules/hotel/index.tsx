import React from 'react';
import Navbar from 'components/common/Navbar';
import SearchBackground from 'components/common/SearchBackground';
import Carousel from 'components/common/Carousel';
import { HomeFooter } from 'components/common/Homepagefooter';
import { AboutUs } from 'components/common/About/AboutUs';
import { OfferSlider } from 'components/common/OfferSlider';
import { Dailydeals } from 'components/common/DailyDeals';
import APPAdd from 'components/common/AppAdd';
import HotelSearchComponent from './HotelSearchComponent';

function HotelModule() {
    return (
        <div>
            <Navbar />
            <SearchBackground>
            <HotelSearchComponent />
            </SearchBackground>
            <Carousel />
            <OfferSlider />
            <Dailydeals />
            <AboutUs />
            <APPAdd />
            <HomeFooter />
        </div>
    );
}

export default HotelModule;
