import React, { useState, useEffect } from 'react'
import CustomNavbar from '../../../../component/navbar/Navbar';
import '../../flightlist/flightlist.scss';
import Carousel from '../../../../component/carousel/flightpriceCarousel';
import FlightModifySearch from '../flightmodifysearch';
import FlightFilter from './flightfilter';
import FlightBookingList from './flightbookinglist';
import Footer from "../../../../component/footer/footer";
import { useSelector } from "react-redux";
import { setFlightList } from '../../../../store/actions/flightsearch';
import { useLocation } from 'react-router-dom';
import { set } from 'date-fns';
import moment from "moment";

// const FlightDateList = () => {
//     return (
//         <>
//             <h5 className='pricelabel'>Fare Trends</h5>
//             <div className='carousel-color rounded-3'>
//                 <Carousel />
//             </div>
//         </>
//     );

// }


const FlightListContent = () => {

    const FlightFilterData = useSelector(state => state.FlightSearch);






    /* Store List of data */
    const [flightfilter, setFlightfilter] = useState([]);

    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        
        if (FlightFilterData?.data?.flightDetails) {
            setFlightfilter(FlightFilterData.data.flightDetails)
        }
        else{
            setFlightfilter("")
        }

    }, [FlightFilterData.data.flightDetails]);


    /*  #filtering Statevalue */
    const [filtering, setFiltering] = useState({
        price: false,
        flight: false,
        refund: false,
        stop: false,
        deptime: false,
        arrtime: false,
    });

    const [pricevalue, setPricevalue] = useState({ min: 0, max: 100000 })

    const [flightname, setFlightname] = useState()


    const priceRange = (price) => {
        setFlightfilter([])
        if (filtering.flight) {
            setFiltering({ price: true, flight: true });
        }
        else {
            setFiltering({ price: true, flight: false });

        }
        setPricevalue(price);
        FlightFliterprocess()
    }

    const Flightname = (flightname) => {
        setFlightfilter([])
        if (flightname !== "all") {
            if (filtering.price) {
                setFiltering({ flight: true, price: true });
            }
            else {
                setFiltering({ flight: true, price: false });
            }
        }
        else {
            setFiltering({ flight: false, price: true });
            setFlightfilter(FlightFilterData.data.flightDetails)
        }
        setFlightname(flightname)
        FlightFliterprocess()
    }

    const refund = (refund) => {
        console.log("gasas",refund)
        if (refund !== "0") {
            if (refund === "1") {
                const filterFlightrefund = (FlightFilterData?.data.flightDetails).filter((a) => ((a.FareDataMultiple[0].IsRefundable) === true));
                if (filterFlightrefund.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(filterFlightrefund)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            }
            else {
                const filterFlightrefund = (FlightFilterData?.data.flightDetails).filter((a) => ((a.FareDataMultiple[0].IsRefundable) === false));
                if (filterFlightrefund.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(filterFlightrefund)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }

            }
        }
        else {
            setFlightfilter(FlightFilterData.data.flightDetails)

        }
    }


    const stops = (stops) => {
        if (stops !== 0) {
            if (stops === 1) {
                const flightfilterstops = (FlightFilterData?.data.flightDetails).filter((a) => ((a.Segments[0].length) === 1));
                if (flightfilterstops.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(flightfilterstops)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            }
            else if (stops === 2) {
                const flightfilterstops = (FlightFilterData?.data.flightDetails).filter((a) => ((a.Segments[0].length) === 2));
                if (flightfilterstops.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(flightfilterstops)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            }
            else {
                const flightfilterstops = (FlightFilterData?.data.flightDetails).filter((a) => ((a.Segments[0].length) > 2));
                if (flightfilterstops.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(flightfilterstops)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            }
        }
        else {
            setFlightfilter(FlightFilterData.data.flightDetails)

        }
    }


    /*  # Depature Time */


    const DepTime = (DepTime) => {

        if (DepTime.length > 0) {
            if (DepTime[0] == 23 || DepTime[1] == 5) {
                const flightDepTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][0]?.DepTime).format("HH")) >= DepTime[0] || (moment(a.Segments[0][0]?.DepTime).format("HH")) < DepTime[1])

                if (flightDepTimefilter.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(flightDepTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            } else {
                const flightDepTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][0]?.DepTime).format("HH")) >= DepTime[0] && (moment(a.Segments[0][0]?.DepTime).format("HH")) < DepTime[1])
                if (flightDepTimefilter.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(flightDepTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            }
        }
        else {
            setFlightfilter(FlightFilterData.data.flightDetails)
        }
    }




    /*  # Arrival Time */

    const ArrivalTime = (ArrivalTime) => {

        if (ArrivalTime.length > 0) {
           
            if (ArrivalTime[0] == 23 || ArrivalTime[1] == 5) {
                const flightArrTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) >= ArrivalTime[0] || (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) < ArrivalTime[1])
                if (flightArrTimefilter.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(flightArrTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            } else {
                const flightArrTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) >= ArrivalTime[0] && (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) < ArrivalTime[1])
                if (flightArrTimefilter.length !== 0) {
                    setErrorMsg(false);
                    setFlightfilter(flightArrTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setFlightfilter([])
                }
            }
        }
        else {

            setFlightfilter(FlightFilterData.data.flightDetails)
        }
    }









    useEffect(() => {
        setFlightfilter([])
        FlightFliterprocess()
    }, [pricevalue, flightname])

    const ClearAll = (ClearAll) => {
        setFlightfilter([])
        if (ClearAll !== "all") {
            setFiltering({ flight: false, price: false });
            setFlightfilter(FlightFilterData.data.flightDetails)
        }
    }



    const FlightFliterprocess = () => {
        setFlightfilter([])
        if (filtering.price && filtering.flight) {
            const priceDataFilter = (FlightFilterData?.data?.flightDetails).filter((a) => (a.FareDataMultiple[0].Fare.PublishedFare < pricevalue.max) && (a.FareDataMultiple[0].Fare.PublishedFare > pricevalue.min))
            const mfilter = priceDataFilter.filter((a) => (((a.Segments[0][0].Airline.AirlineName).toUpperCase()).localeCompare(flightname.toUpperCase()) === 0));
            if (mfilter.length !== 0) {
                setErrorMsg(false);
                setFlightfilter(mfilter)
            }
            else {
                setErrorMsg(true);
                setFlightfilter([])
            }
        }
        else if (filtering.price) {
            const filteredPrice = (FlightFilterData?.data?.flightDetails).filter((a) => (a.FareDataMultiple[0].Fare.PublishedFare < pricevalue.max) && (a.FareDataMultiple[0].Fare.PublishedFare > pricevalue.min))
            if (filteredPrice.length !== 0) {
                setErrorMsg(false);
                setFlightfilter(filteredPrice)
            }
            else {
                setErrorMsg(true);
                setFlightfilter([])
            }
        }
        else if (filtering.flight) {
            const filterFlightname = (FlightFilterData?.data.flightDetails).filter((a) => (((a.Segments[0][0].Airline.AirlineName).toUpperCase()).localeCompare(flightname.toUpperCase()) === 0));
            if (filterFlightname.length !== 0) {
                setErrorMsg(false);
                setFlightfilter(filterFlightname)
            }
            else {
                setErrorMsg(true);
                setFlightfilter([])
            }
        }
        else {
            setFlightfilter([])
            setErrorMsg(false);
            setFlightfilter(FlightFilterData.data.flightDetails)
        }
    }

    




    return (
        <>
            <div className='flightlistcontent container mt-4 mb-5'>
                <div className='listWrapper'>
                {console.log("Sam",priceRange)}
                    <div className='flightlistfilter'>
                        
                        <FlightFilter onhandle={Flightname} handlePrice={priceRange} handleClear={ClearAll} handlerefund={refund} handlestop={stops} handleDepTime={DepTime} handleRetTime={ArrivalTime} />

                    </div>
                    <div className='flightlistresult  ms-4'>
                        {/* <FlightDateList/> */}
                        <FlightBookingList filteredValue={flightfilter} handleError={errorMsg} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


const FlightlistOneway = () => {



    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <>
            {/* <CustomNavbar /> */}
            <FlightModifySearch />
            <FlightListContent />
        </>
    );
};
export default FlightlistOneway;



