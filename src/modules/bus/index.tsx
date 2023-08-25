
import { HomeFooter } from 'components/common/Homepagefooter';
import Navbar from 'components/common/Navbar';
import Carousel from 'components/common/Carousel';
import React from 'react';
import { AboutUs } from 'components/common/About/AboutUs';
import { OfferSlider } from 'components/common/OfferSlider';
import { Dailydeals } from 'components/common/DailyDeals';

function BusModule() {
    return (
        <div>
            <Navbar />
            <Carousel>
                <div className="border-2 h-20 w-40 m-52">
                    jlhdgvj
                </div>
            </Carousel>
            <OfferSlider />
            <Dailydeals />
            <AboutUs />  
            <div className='mt-5'></div>       
           <HomeFooter/>
        </div>
    );
}

export default BusModule;
