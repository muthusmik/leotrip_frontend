import React, { useState } from 'react'
import CustomNavbar from '../../../../component/navbar/Navbar';
import './multicity.scss';
import FlightModifySearch from './flightmodifysearch';
import FlightBookingList from './flightbookinglist';
import { Tab, Tabs} from 'react-bootstrap';
import FlightFare from './flightfare';
import FlightCombination from './flightcombination';

const FlightListContent = () => {

    // ToggleButton
    const travel = [
        { name: 'Chennai to coimbatore', value: '1' },
        { name: 'Coimbatore to bangalore', value: '2' },
    ];


    const [selectedvalue, onselectvalue] = useState({
        path: require("../../../../asset/images/flight/airindia.png"),
        flightname: "Air India",
        deptime: "20:23",
        fromid: "MMA",
        traveltime: "2h:50m",
        returntime: "01:35",
        toid: "MUD",
        price: "₹11,750",
    });

    const onhandle = (event) => {
        onselectvalue(event);
     

    }


    return (
        <>
            <div className='container  pb-5'>

                <div className="row listWrapper">

                    <div className="col-8">
                        <Tabs
                            defaultActiveKey="Chennai to coimbatore"
                            className="mb-3"
                            variant="pills border border-primary rounded"
                            fill
                            transition
                        >
                            {travel.map((travel, idx) => (
                            <Tab eventKey={travel.name}  key={idx} title={travel.name} className='border nav-link'>
                                <FlightBookingList onhandle={onhandle} />
                            </Tab>
                            ))}
                        </Tabs>
                    </div>
                    <div className="col-4 car-paydetail">
                        <FlightFare selected={selectedvalue} />
                    </div>
                </div>

            </div>

        </>
    )
}


const FlightlistMulticity = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
      
    const [value, setValue] = React.useState("oneway");

    const handleChange = (value) =>{
        setValue(value);
    };
    const returnedValue = (value) =>{
        switch (value) {
            case "Flight Combinations":
                return (
                <div className="container w-50">
                <FlightCombination />
                </div>
                );
            case "Select your OwnFlight":
                return (<FlightListContent />);
            default:
                return <FlightListContent />;
        }
      
    }
    return (
        <>
            {/* <CustomNavbar /> */}
            <FlightModifySearch handleChange={handleChange}/>
            {returnedValue(value)}
        </>
    );
};
export default FlightlistMulticity;