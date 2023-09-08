import React from 'react';
import FlightFilterComponent from 'components/modules/flight/FlightSideFilters';
import FlightOneTripListing from 'components/modules/flight/FlightOneTripListing';

export default function FlightListing() {
    return (
        <div className='flex bg-int-listingBg p-8 gap-6 justify-between'>
            <FlightFilterComponent />
            <FlightOneTripListing />
        </div>
    )
}