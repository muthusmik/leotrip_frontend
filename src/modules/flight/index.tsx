import Navbar from 'components/common/Navbar';
import React from 'react';
import Carousel from 'components/common/slider';
import { HomeFooter } from 'components/common/Homepagefooter';
import HotelSearchComponent from 'modules/hotel/HotelSearchComponent';
import { OfferSlider } from 'components/common/OfferSlider';
import APPAdd from 'components/common/AppAdd';
import { Dailydeals } from 'components/common/DailyDeals';
import { AboutUs } from 'components/common/About/AboutUs';

function FlightModule() {
    return (
        <div>
            <Navbar />
            <Carousel>
                <HotelSearchComponent />
            </Carousel>
            <OfferSlider />
            <Dailydeals />
            <AboutUs />
            <APPAdd />
            <HomeFooter />
        </div>
    );
}

export default FlightModule;
