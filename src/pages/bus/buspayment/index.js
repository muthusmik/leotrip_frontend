import React from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import BusPaymentDetails from './buspaymentdetails';
import BusTicketPrice from './buspayment';
import './payment.scss';
import { useSelector } from "react-redux";
import Footer  from '../../../component/footer/footer';

const BusPayMethod = () => {
    return (
        <>
            <div className='container pay-detail'>
                <div className="row listWrapper">
                    <div className="col-8">
                        <BusPaymentDetails />
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
   const businfo = useSelector(state => state.BusInfo);
//  console.log("bus-info header", businfo)
 console.log("bus-list header", buslist)

   return (
       <>
           <div className="container text-white buspackageinfo">
               <h3 name="Review your Booking" className="">Payment</h3>
              
               <h5>
                   <span> {buslist.data.result[0].source_city} - { buslist.data.result[0].destination_city}</span>
                   {/* <span>&nbsp; | </span><span>&nbsp; {businfo.data.Result.ArrivalTime}</span> */}
               </h5>
              
           </div>
       </>
   )
}


const BusPayment = () => {
    return (
        <>
            <CustomNavbar />
            <div>
                <div className='buspaybackground-theme'>
                    <BusContent />
                </div>
                <BusPayMethod />
            </div>
            <Footer/>

        </>
    )
}

export default BusPayment