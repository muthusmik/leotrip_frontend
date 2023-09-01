import React from 'react';
import Navbar from 'components/common/Navbar';
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

export default HotelModule;
