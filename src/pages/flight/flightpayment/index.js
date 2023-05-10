import React from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import PaymentDetails from './paymentdetails';
import Payment from './payment';
import './payment.scss';
import { useSelector } from "react-redux";
import Footer  from '../../../component/footer/footer';

const Method = () => {
    return (
        <>
            <div className='container flightpay-detail'>
                <div className="row listWrapper">
                    <div className="col-8">
                        <PaymentDetails />
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
    
    /* # Destination */
    const HandleDestination = (value) => {
        if (value.length == 1) {
            var name = (value[0].Destination.CityName)
            var code =(value[0].Destination.CityCode)
            return (
                name+"("+code+")"
            )
        }
        else if (value.length > 1) {
            var index = value.length - 1;
            var name = (value[index].Destination.CityName)
            var code =(value[index].Destination.CityCode)

            return (
               name+"("+code+")"
            )
        }
    }

 

   return (
       <>
           <div className="container text-white buspackageinfo">
               <h3 name="Review your Booking" className="">Payment</h3>
                {(flightinfo.data?.length > 0) ?(                
                <h5 className='ms-3'>
                    <span>{flightinfo.data[0].Results.Segments[0][0].Origin.CityName}({flightinfo.data[0].Results.Segments[0][0].Origin.CityCode}) - {HandleDestination(flightinfo.data[0].Results.Segments[0])}</span>
                    <small style={{fontSize:"14px"}}>&nbsp;Oneway</small>
                </h5>
                ):null}
           </div>
       </>
   )
}


const FlightPayment = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return (
        <>
            <CustomNavbar />
            <div>
                <div className='background-theme'>
                    <Content />
                </div>
                <Method />
            </div>
            <Footer/>

        </>
    )
}

export default FlightPayment