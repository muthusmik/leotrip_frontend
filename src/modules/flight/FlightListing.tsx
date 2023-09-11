import React, { useState, useEffect } from 'react';
import FlightFilterComponent from 'components/modules/flight/FlightSideFilters';
import FlightOneTripListing from 'components/modules/flight/FlightOneTripListing';

export default function FlightListing() {
    const [selectedOptions, setSelectedOptions] = useState<any>([]);
    const [selectedAirLines, setSelectedAirLines] = useState<any>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([1, 100]);

    useEffect(() => {
        if (selectedOptions) {
            console.log("selectedOptions..........", selectedOptions, "selectedAirLines//////", selectedAirLines);
        }
    }, [selectedOptions])

    return (
        <div className='flex bg-int-listingBg py-8 px-6 gap-6 justify-between'>
            <FlightFilterComponent
                setSelectedOptions={setSelectedOptions}
                setSelectedAirLines={setSelectedAirLines}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
            <FlightOneTripListing />
        </div>
    )
}