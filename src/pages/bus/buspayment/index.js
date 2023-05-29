import React,{useEffect} from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import BusPaymentDetails from './buspaymentdetails';
import BusTicketPrice from './buspayment';
import './payment.scss';
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../../component/footer/footer';


const BusPayMethod = (txnid) => {
    return (
        <>
            <div className='container pay-detail mt-1'>
                <div className="row buspay-listWrapper" style={{marginTop:"-50px"}}>
                    <div className="col-8">
                        <BusPaymentDetails txnid={txnid}/>
                    </div>
                    <div className="col-4 infopay">
                        <BusTicketPrice />
                    </div>
                </div>
            </div>
        </>
    )
}

const BusContent = () => {
    // store access
    const buslist = useSelector(state => state.Bus);
    const dispatch = useDispatch();
    

    return (
        <>
            <div className="container text-white buspackageinfo">
                <h3 name="Review your Booking" className="">Payment and Booking details</h3>

                <h5>
                    <span> {buslist.data?.result[0].source_city} - {buslist.data?.result[0].destination_city}</span>
                    {/* <span>&nbsp; | </span><span>&nbsp; {businfo.data.Result.ArrivalTime}</span> */}
                </h5>

            </div>
        </>
    )
}


const BusPayment = (txnid) => {
    return (
        <>
            {/* <CustomNavbar /> */}
            <div>
                <div className='buspaybackground-theme'>
                    <BusContent />
                </div>
                <BusPayMethod  txnid={txnid}/>
            </div>
            <Footer />

        </>
    )
}

export default BusPayment