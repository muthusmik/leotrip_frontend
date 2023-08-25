
import { HomeFooter } from 'components/common/Homepagefooter';
import Navbar from 'components/common/Navbar';
import Carousel from 'components/common/Carousel';
import React from 'react';
import { AboutUs } from 'components/common/About/AboutUs';

function BusModule() {
    return (
        <div>
            <Navbar />
            <Carousel>
                gowtham
            </Carousel>
            <AboutUs />
            <HomeFooter />
        </div>
    );
}

export default BusModule;
