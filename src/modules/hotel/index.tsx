import Navbar from 'components/common/Navbar';
import React from 'react';
import Carousel from 'components/common/slider';
import HotelSearchComponent from './HotelSearchComponent';

function HotelModule() {
    return (
        <div>
            <Navbar />
            <Carousel>
                <HotelSearchComponent />
            </Carousel>
        </div>
    );
}

export default HotelModule;
