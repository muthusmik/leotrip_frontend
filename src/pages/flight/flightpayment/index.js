import React, { useEffect,useState } from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import PaymentDetails from './paymentdetails';
import Payment from './payment';
import './payment.scss';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { flightBookingDetails } from '../../../store/services/flight';
import Footer from '../../../component/footer/footer';
import { useLocation } from "react-router-dom";


const Method = () => {

     const location = useLocation();
    // console.log("fafa", location)
    let txnid = location?.state?.state?.txnid

    return (
        <>
            <div className='container flightpay-detail'>
                <div className="row listWrapper">
                    <div className="col-8">
                        <PaymentDetails txnid={txnid}/>
                    </div>
                    <div className="col-4 flightinfopay">
                        <Payment />
                    </div>
                </div>
            </div>
        </>
    )
}

const Content = () => {

    const flightinfo = useSelector(state => state.FlightOnewayInfo);
    const flightretun = useSelector(state => state.FlightReturnInfo);
    /* # Destination */
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


    const HandleReturnDestination = (value) => {
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



    // const location = useLocation();
    // console.log("fafa", location)

    return (
        <>
            <div className="container text-white buspackageinfo mt-5">
                <h3 name="Review your Booking" className="">Payment and Booking details</h3>
                {(flightinfo.data?.length > 0) ? (
                    <>
                        {/* {(location.state.state.booktype == false) ? ( */}
                            <h5 className='ms-3'>
                                <span>{flightinfo.data[0].Results.Segments[0][0].Origin.CityName}({flightinfo.data[0].Results.Segments[0][0].Origin.CityCode}) - {HandleDestination(flightinfo.data[0].Results.Segments[0])}</span>
                                {/* <small style={{ fontSize: "14px" }}>&nbsp;Oneway</small> */}
                            </h5>
                        {/* ) : (
                            <h5 className='ms-3'>
                                <span>{flightinfo.data[0].Results.Segments[0][0].Origin.CityName}({flightinfo.data[0].Results.Segments[0][0].Origin.CityCode}) - {HandleReturnDestination(flightretun.data[0].Results.Segments[0])}</span>
                               <small style={{ fontSize: "14px" }}>&nbsp;Oneway</small>
                            </h5>
                         )} */}
                    </>
                ) : null}
            </div>
        </>
    )
}


const FlightPayment = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [view, setView] = useState(false);

    
   

    return (
        <>
            {/* <CustomNavbar /> */}
            <div>
                <div className='flightbackground-theme'>
                    <Content />
                </div>
                <Method />
            </div>
            <Footer />
            {/* <Modal show={view} centered >
                <div style={{ backgroundColor: "#D0F0C0", borderRadius: "10px" }}>
                    <div className='d-flex justify-content-end m-1 mb-0 '>
                        <button type="button" class="btn-close btn-close-danger  bg-danger d-block" aria-label="Close" onClick={setView(false)}></button>
                    </div>
                    <Modal.Header className='d-flex justify-content-center border-0'>
                        <Modal.Title>
                            <h5 className='mt-0'>Something went wrong</h5>
                            <h6 className='text-muted'>try again later</h6>
                        </Modal.Title>
                    </Modal.Header>
                </div>
            </Modal> */}

        </>
    )
}

export default FlightPayment;