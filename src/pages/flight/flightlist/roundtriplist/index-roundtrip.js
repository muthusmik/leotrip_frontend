import React from 'react'
import CustomNavbar from '../../../../component/navbar/Navbar';
import '../../flightlist/flightlist.scss';
import FlightModifySearch from '../flightmodifysearch';
import FlightFilter from './flightfilter';
import FlightBookingList from './flightbookinglist';
import Footer from "../../../../component/footer/footer";





// const FlightDateList =() => {

//    return(
//        <div className=' carousel-color rounded-3'>
       
//        </div>
//    );

// }


const FlightListContent = () => {

    return (
        <>
            <div className='flightlistcontent-roundtrip container-fluid  my-4'>
                <div className='listWrapper'>
                    <div className='flightlistfilter-roundtrip'>
                        <FlightFilter />
                    </div>
                    <div className='flightlistresult  ms-4'>
                        <FlightBookingList/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


const FlightlistRoundtrip = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return (
        <>
            <CustomNavbar />
            <FlightModifySearch/>
            <FlightListContent />
        </>
    );
};
export default FlightlistRoundtrip;
