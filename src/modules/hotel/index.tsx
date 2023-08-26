import Navbar from 'components/common/Navbar';
import React from 'react';
import Carousel from 'components/common/slider';
import { HomeFooter } from 'components/common/Homepagrfooter';
import HotelSearchComponent from './HotelSearchComponent';

function HotelModule() {
    return (
        <div>
            <Navbar />
            <Carousel>
                <HotelSearchComponent />
            </Carousel>
            <HomeFooter />
        </div>
    );
}

export default HotelModule;
