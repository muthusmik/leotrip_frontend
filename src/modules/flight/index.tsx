import CustomDatePicker from 'components/common/CustomdatePicker';
import Navbar from 'components/common/Navbar';
import React from 'react';
import Carousel from 'components/common/Carousel';
import { HomeFooter } from 'components/common/Homepagefooter';
import FlightSearchComponent from './FlightSearchComponent';
import { OfferSlider } from 'components/common/OfferSlider';
import APPAdd from 'components/common/AppAdd';
import { Dailydeals } from 'components/common/DailyDeals';
import { AboutUs } from 'components/common/About/AboutUs';

function FlightModule() {

    return (
        <div>
            <Navbar />

            <Carousel>
                <FlightSearchComponent />
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
