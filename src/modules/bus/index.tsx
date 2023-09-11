import React from 'react';
import { HomeFooter } from 'components/common/Homepagefooter';
import Navbar from 'components/common/Navbar';
import Carousel from 'components/common/Carousel';
import BusSearchComponent from './BusSearchComponent';
import { AboutUs } from 'components/common/About/AboutUs';
import { OfferSlider } from 'components/common/OfferSlider';
import { Dailydeals } from 'components/common/DailyDeals';
import APPAdd from 'components/common/AppAdd';
import SearchBackground from 'components/common/SearchBackground';

function BusModule() {
    return (
        <>
            <Navbar />
            <SearchBackground>
                <BusSearchComponent />
            </SearchBackground>
            <Carousel />
            <OfferSlider />
            <Dailydeals />
            <AboutUs />
            <APPAdd />
            <HomeFooter />
        </>
    );
}

export default BusModule;
