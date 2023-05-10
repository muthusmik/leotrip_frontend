import React from "react";
import './car.scss';
import CustomNavbar from '../../component/navbar/Navbar'
import OneWay from "./oneway";
import AirportTransfer from "./airporttransfer";
import RoundTrip from "./roundtrip";
import Footer from "../../component/footer/footer";
import Homepage from '../home/home';
import { loadCarCityList } from "../../store/actions/carcitylist"
import { useDispatch} from "react-redux";
import { useEffect } from 'react';

export const Carcontainer = () => {

    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

    const [value, setValue] = React.useState("oneway");

    const onhandle = e => {
        setValue(e.target.value);
    };

    return (
        <>
            <div className='cartripselection'>
                <div className="form-check form-check-inline" >
                    <input className="check-input" type="radio" name="cartriptype" id="oneway" value="oneway" defaultChecked onClick={onhandle} />
                    <label className="check-label" htmlFor="oneway">One Way</label>
                </div>
                <div className="form-check form-check-inline" >
                    <input className="check-input" type="radio" name="cartriptype" id="roundtrip" value="roundtrip" onClick={onhandle} />
                    <label className="check-label" htmlFor="round-trip">Round trip</label>
                </div>
                <div className="form-check form-check-inline"  >
                    <input className="check-input" type="radio" name="cartriptype" id="airporttransfer" value="airporttransfer" onClick={onhandle} />
                    <label className="check-label" htmlFor="airporttransfer">Airport Transfer</label>
                </div>
                <div>
                    {RenderContent(value)}
                </div>
            </div>
        </>
    )
}

export const RenderContent = (tab) => {
    switch (tab) {
        case 'oneway':
            return (<OneWay />);
        case 'roundtrip':
            return (<RoundTrip />);
        case 'airporttransfer':
            return (<AirportTransfer />);
        default:
            return null;
    }
}





const Car = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        /* #Airportcitylist payload */
        const carCityList = {
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4"
        }
        dispatch(loadCarCityList(carCityList));

    }, [])

    

    return (
        <>
            <div className='carsearch' >
                <CustomNavbar />
                <div className="headerImage">
                    <div className="container">
                        <h2 className="text-white">Book Online Cab</h2>
                        <div className='carsearchcontainer mx-auto'>
                            <Carcontainer />
                            <RenderContent />
                        </div>
                    </div>
                </div>
            </div>
            <Homepage/>
            <Footer />
        </>
    );
};
export default Car;