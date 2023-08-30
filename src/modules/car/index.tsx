import Navbar from 'components/common/Navbar';
import React from 'react';
import Carousel from 'components/common/Carousel';
import { HomeFooter } from 'components/common/Homepagefooter';
import { OfferSlider } from 'components/common/OfferSlider';
import { Dailydeals } from 'components/common/DailyDeals';
import { AboutUs } from 'components/common/About/AboutUs';
import APPAdd from 'components/common/AppAdd';
import CarSearchComponent from 'components/modules/car/CarSearchComponent';

function CarModule() {
    return (
        <div>
            <Navbar />
            <Carousel>
                <CarSearchComponent />
            </Carousel>
            <OfferSlider />
            <Dailydeals />
            <AboutUs />
            <APPAdd />
            <HomeFooter />
        </div>
    );
}

export default CarModule;
