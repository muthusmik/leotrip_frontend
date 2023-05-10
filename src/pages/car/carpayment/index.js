import React from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import CarPaymentDetails from './carpaymentdetails';
import CarPaymentPrice from './carpayment';
import './payment.scss';
import { useSelector } from "react-redux";
import Footer from '../../../component/footer/footer';
import moment from 'moment';
const CarPayMethod = () => {
    return (
        <>
            <div className='container carpay-detail'>
                <div className="row listWrapper">
                    <div className="col-8">
                        <CarPaymentDetails />
                    </div>
                    <div className="col-4 carinfopay">
                        <CarPaymentPrice />
                    </div>
                </div>
            </div>
        </>
    )
}

const CarContent = () => {
    // store access
    const carlist = useSelector(state => state.Car);
    //    console.log("trip-info header", carlist.data[0].RequestData)

    return (
        <>
            <div className="container text-white buspackageinfo">
                <h3 name="Review your Booking" className="">Payment</h3>
                {(carlist.data[0]?.length > 0) ? 
                <h5>
                   <span> {carlist.data[0] && carlist.data[0].RequestData.CityData[0].Name} - {carlist.data[0] && carlist.data[0].RequestData.CityData[1].Name}</span>
                   <span>&nbsp; | </span><span>&nbsp; {moment(carlist.data[0] && carlist.data[0].RequestData.PickUpDate).format("DD/MM/YYYY HH:MM")} - {moment(carlist.data[0] && carlist.data[0].RequestData.DropDate).format("DD/MM/YYYY HH:MM")}</span>
               </h5>
               : null}
            </div>
        </>
    )
}


const CarPayment = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <CustomNavbar />
            <div>
                <div className='carpaybackground-theme'>
                    <CarContent />
                </div>
                <CarPayMethod />
            </div>
            <Footer />

        </>
    )
}

export default CarPayment