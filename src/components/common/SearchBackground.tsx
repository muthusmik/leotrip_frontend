import React, { useEffect, useState } from 'react';
import flight from '../../assets/icons/pexels-sam-kolder-2387871.jpg';
import hotel from '../../assets/images/lake_scandinavia_blue_sky_pier_during_sunset_4k_5k_hd_travel.jpg';
import bus from '../../assets/images/marine_algae_underwater_and_huts_and_coconut_trees_under_blue_cloudy_sky_4k_hd_beach.jpg';
import car from '../../assets/images/miami_downtown_florida_cityscape_5k.jpg';
// import flight from '../../assets/images/flight.svg';
// import hotel from '../../assets/images/hotel.svg';
// import bus from '../../assets/images/bus.svg';
// import car from '../../assets/images/car.svg';
import '../../index.css';

export function SearchBackground({ children, ...props }: any) {

    return (
        <>
            <div className='carousel-container flex overflow-hidden justify-center'>
                <img src={flight} className='carousel-item z-0 w-full h-[20rem] object-cover grayscale' style={{ imageOrientation: "revert-layer" }} />
                <div className='z-10 absolute w-[94%] flex self-center justify-center'>{children}</div>
            </div>
            <div className='h-14 bg-gradient-to-t from-[#b2c1f4ee] to-[#e0e1e2]'></div>

        </>
    )
}

export default SearchBackground;