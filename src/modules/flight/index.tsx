import CustomDatePicker from 'components/common/CustomdatePicker';
import Navbar from 'components/common/Navbar';
import React from 'react';

function FlightModule() {

    return (
        <div>
            <Navbar />
            <h2>Flight Module</h2>
            <CustomDatePicker onSelect={(date) => {
                console.log('Selected date:', date);
                // Perform any actions you want when a date is selected
            }}
                minDate={new Date()} // Set your minDate value
                maxDate={new Date()} // Set your maxDate value
                placeholder="Select a date" // Customize the placeholder tex
            />
            <p>This is the flight module page.</p>

        </div>
    );
}

export default FlightModule;
