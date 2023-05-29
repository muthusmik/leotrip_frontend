import React,{useEffect} from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import HotelPaymentDetails from './hotelpaymentdetails';
import HotelPayment from './hotelpayment';
import './payment.scss';
import Footer  from '../../../component/footer/footer';
import { useSelector, useStore, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
const HotelPayMethod = () => {

    const location = useLocation();
    // console.log("fafa", location)
    let txnid = location?.state?.state?.txnid;
   


    return (
        <>
            <div className='container hotelpay-detail'>
                <div className="row listWrapper">
                    <div className="col-8">
                        <HotelPaymentDetails txnid={txnid}/>
                    </div>
                    <div className="col-4 hotelinfopay">
                        <HotelPayment />
                    </div>
                </div>
            </div>
        </>
    )
}

const HotelContent = () => {
    return (
        <div className="">
            <div className="container text-white">
                <h3 name="Review your Booking" className="mt-5">Payment and Booking Details</h3>
            </div>
        </div>
        )
}


const Billing = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

   
  

    return (
        <>
            {/* <CustomNavbar /> */}
            <div>
                <div className='hotelpaybackground-theme'>
                    <HotelContent />
                </div>
                <HotelPayMethod />
            </div>
            <Footer/>

        </>
    )
}

export default Billing