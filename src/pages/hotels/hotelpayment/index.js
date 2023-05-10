import React from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import HotelPaymentDetails from './hotelpaymentdetails';
import HotelPayment from './hotelpayment';
import './payment.scss';
import Footer  from '../../../component/footer/footer';

const HotelPayMethod = () => {
    return (
        <>
            <div className='container hotelpay-detail'>
                <div className="row listWrapper">
                    <div className="col-8">
                        <HotelPaymentDetails />
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
                <h2 name="Review your Booking" className="mt-5">Payment</h2>
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
            <CustomNavbar />
            <div>
                <div className='background-theme'>
                    <HotelContent />
                </div>
                <HotelPayMethod />
            </div>
            <Footer/>

        </>
    )
}

export default Billing