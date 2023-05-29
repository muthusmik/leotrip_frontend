import React, { useEffect } from 'react';
import './flight.scss';
import { loadAirportCityList } from "../../store/actions/airportlist"
import { loadAirLine } from "../../store/actions/airline"
import OneWay from './oneway';
import RoundTrip from './roundtrip';
import MultiCity from './multicity';
import localStorage from 'redux-persist/es/storage';

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export const FlightContainer = () => {

    const [value, setValue] = React.useState("oneway");

    const onhandle = e => {
        setValue(e.target.value);
    };


    return (
        <div>
            <div className='triptype' value={value}>
                <div className="form-check form-check-inline" style={{ alignItems: 'center' }}>
                    <input className="check-input" type="radio" name="triptype" id="oneway" value="oneway" defaultChecked onClick={onhandle}></input>
                    <label className="check-label" htmlFor="oneway">One Way</label>
                </div>
                <div className="form-check form-check-inline" style={{ alignItems: 'center' }}>
                    <input className="check-input" type="radio" name="triptype" id="roundtrip" value="roundtrip" onClick={onhandle}></input>
                    <label className="check-label" htmlFor="round-trip">Round-trip</label>
                </div>
                {/* <div className="form-check form-check-inline">
                    <input className="check-input" type="radio" name="triptype" id="multicity" value="multicity" onClick={onhandle} ></input>
                    <label className="check-label" htmlFor="multi-city">Multi-city</label>
                </div> */}
            </div>
            <div>
                {RenderContent(value)}
            </div>
        </div>
    )
}

export const RenderContent = (tab) => {
    switch (tab) {
        case 'oneway':
            return (<OneWay />);
        case 'roundtrip':
            return (<RoundTrip />);
        case 'multicity':
            return (<MultiCity />);
        default:
            return null;
    }
}


export const Flight = () => {


    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    const dispatch = useDispatch();

    useEffect(() => {
        /* #Airportcitylist payload */
        const airportCityList = {
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4"
        }
        dispatch(loadAirportCityList(airportCityList));

        /* #AirLine payload */
        const airline = {
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4"
        }
        dispatch(loadAirLine(airline));

    }, [])

    return (
        <div className='flightsearch'>
            <h2 className='text-white'>Book Domestic and International Flight Tickets</h2>
            <div className='field mt-3'>
                <FlightContainer />
                <RenderContent />
            </div>
        </div>
    );
};
