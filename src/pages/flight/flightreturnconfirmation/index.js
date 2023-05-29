import React, { useState } from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import '../flightlist/flightlist.scss';
import { Insurance, Transfer, TravelerDetails } from './tripconfirmationdetail';
import Footer from '../../../component/footer/footer';
import Flightdetails from './flightdetails';
import Cancellation from './cancellation';
import { useSelector } from "react-redux";
import { FareDetails, Promte } from './flightfare';
import { Form } from 'react-bootstrap';
import '../../preloader.scss';
import Card from 'react-bootstrap/Card';
import warning from "../../../asset/images/warning.png"
import { useLocation } from 'react-router-dom';

const PackageDetails = (props) => {
 
    const location=useLocation();
    console.log("propss.ss.",location.state.mode);
    const [selectedvalue, onselectvalue] = useState(false);

    const [validated, setValidated] = useState(false);
    const [resData, setResData] = useState(false)
    const handleValidate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            onselectvalue(form.checkValidity());
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        if (form.checkValidity() === true) {
            onselectvalue(form.checkValidity());
            setValidated(false);
            
        }
    };
    const [isValid,setIsValid] =useState(false)
    const handleValid = (val) => {
        console.log("validata",val)
        setIsValid(val)
    }
    
    const handleData = (val) => {
        console.log("PostResdata",val)
        setResData(val)
    }
    return (
        <>
            <div className='container flight-pakagedetail  pb-5'>
             
                    <div className="row listWrapper">
                        <div className="col-8">
                          
                                <Flightdetails />
                                <TravelerDetails onhandle={handleValid} handleData={handleData} />
                                {/* <Cancellation/>
                                <Insurance />
                                <Transfer /> */}
                         

                        </div>
                        <div className="col-4 flight-paydetail">
                            <FareDetails selected={selectedvalue} validate={isValid} resData={resData} mode={location.state.mode} />
                            {/* <Promte /> */}
                        </div>
                    </div>
             
            </div>
        </>
    )
}

const PackageInfo = () => {
    const DestinationData = JSON.parse(localStorage.getItem('destinationdata'));




    const flightinfo = useSelector(state => state.FlightOnewayInfo);

    const HandleDestination = (value) => {
        if (value.length == 1) {
            var name = (value[0].Destination.CityName)
            var code = (value[0].Destination.CityCode)
            return (
                name + "(" + code + ")"
            )
        }
        else if (value.length > 1) {
            var index = value.length - 1;
            var name = (value[index].Destination.CityName)
            var code = (value[index].Destination.CityCode)

            return (
                name + "(" + code + ")"
            )
        }
    }

    return (
        <>
            <div className="container text-white flightpackageinfo ">
                <h3 name="Review your Booking" className="">Review your Booking</h3>

                {(flightinfo.data?.length > 0) ? (
                    <h6 className='ms-3'>
                        <span>{flightinfo.data[0].Results.Segments[0][0].Origin.CityName}({flightinfo.data[0].Results.Segments[0][0].Origin.CityCode}) - {HandleDestination(flightinfo.data[0].Results.Segments[0])}</span>
                        <small style={{ fontSize: "14px" }}>&nbsp;RoundTrip</small>
                    </h6>
                ) : null}

            </div>
        </>
    )
}


const FlightConfirmation = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const flightoneway = useSelector(state => state.FlightOneway);

    const flightinfo = useSelector(state => state.FlightOnewayInfo);

    return (
        <>
            {(flightoneway.data?.length > 0) && (flightinfo.data?.length > 0) ? (
                <>
                    <div>
                        {/* <CustomNavbar /> */}
                        <div className='flightbackground-theme'>
                            <PackageInfo />
                        </div>
                        <PackageDetails />

                    </div>
                    <div className='bottom-Content'>
                        <Footer />
                    </div>
                </>
            ) : (flightoneway.data[0]?.message) ? (<Card className='w-100 cardheight'>
                <div className='ms-4 text-center mt-4'>
                    <h3 className='fw-bold'>{flightoneway.data[0].code}</h3>
                    <p><img src={warning} alt={warning} width="20%" height="20%" /></p>
                    <h5 className='fw-bold'>{flightoneway.data[0]?.message}</h5>
                </div>
            </Card>
            )
                : <Card className='w-100 cardheight'>
                    <div className='my-auto'>
                        <div class="preloader-orbit-loading">
                            <div class="cssload-inner cssload-one"></div>
                            <div class="cssload-inner cssload-two"></div>
                            <div class="cssload-inner cssload-three"></div>
                        </div>
                        <h6 className='text-center mt-3'>please wait we're  fetching your flight details</h6>
                    </div>
                </Card>
            }
        </>
    )
}

export default FlightConfirmation;