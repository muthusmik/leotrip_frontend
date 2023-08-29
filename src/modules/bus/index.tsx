import React from 'react';
import { HomeFooter } from 'components/common/Homepagefooter';
import Navbar from 'components/common/Navbar';
import Carousel from 'components/common/slider';
import BusSearchComponent from './BusSearchComponent';
import { AboutUs } from 'components/common/About/AboutUs';
import { OfferSlider } from 'components/common/OfferSlider';
import { Dailydeals } from 'components/common/DailyDeals';
import APPAdd from 'components/common/AppAdd';

function BusModule() {
    return (
        <div>
            <Navbar />
            <Carousel>
                <BusSearchComponent />
            </Carousel>
            <OfferSlider />
            <Dailydeals />
            <AboutUs />
            <APPAdd />
            <HomeFooter />
        </div>
    );
}

export default BusModule;
