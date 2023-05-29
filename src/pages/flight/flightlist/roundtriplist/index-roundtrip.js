import React,{useEffect,useState} from 'react'
import CustomNavbar from '../../../../component/navbar/Navbar';
import '../../flightlist/flightlist.scss';
import FlightModifySearch from '../flightmodifysearch';
import FlightFilter from './flightfilter';
import FlightBookingList from './flightbookinglist';
import Footer from "../../../../component/footer/footer";
import moment from "moment";
import { useSelector } from "react-redux";


const FlightListContent = (props) => {

    console.log("FlightListContent",props)
    const FlightFilterData = useSelector(state => state.FlightSearch);
  


    /* Store List of data */
    const [firstFlight, setFirstFlight] = useState()
    const [secondFlight, setSecondFlight] = useState()
    const [errorMsg, setErrorMsg] = useState("")

  

    useEffect(() => {
        setFirstFlight([])
        setSecondFlight([])
        if (FlightFilterData) {
            if (FlightFilterData.data?.flightDetails?.length > 0 && FlightFilterData.data?.flightReturnDetails?.length > 0) {
                setFirstFlight(FlightFilterData.data?.flightDetails)
                setSecondFlight(FlightFilterData.data?.flightReturnDetails)

            }
            else if (FlightFilterData.data?.flightDetails?.length > 0) {
                setFirstFlight(FlightFilterData.data?.flightDetails)
                setSecondFlight([])
            }
        }
    }, [FlightFilterData])
    
    console.log("jump",FlightFilterData)

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
        setFirstFlight([])
        setSecondFlight([])
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
        setFirstFlight([])
        setSecondFlight([])
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
            setFirstFlight(FlightFilterData.data.flightDetails)
            setSecondFlight(FlightFilterData.data.flightReturnDetails)
        }
        setFlightname(flightname)
        FlightFliterprocess()
    }

    const refund = (refund) => {
        if (refund !== "0") {
            if (refund === "1") {
                const filterFlightrefund = (FlightFilterData?.data.flightDetails).filter((a) => ((a.FareDataMultiple[0].IsRefundable) === true));
                const filterReturnFlightrefund = (FlightFilterData?.data.flightReturnDetails).filter((a) => ((a.FareDataMultiple[0].IsRefundable) === true));
                
                if ((filterFlightrefund.length !== 0) || (filterReturnFlightrefund.length !==0)){
                    setErrorMsg(false);
                    setFirstFlight(filterFlightrefund)
                    setSecondFlight(filterReturnFlightrefund)
                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            }
            else {
                const filterFlightrefund = (FlightFilterData?.data.flightDetails).filter((a) => ((a.FareDataMultiple[0].IsRefundable) === false));
                const filterReturnFlightrefund = (FlightFilterData?.data.flightReturnDetails).filter((a) => ((a.FareDataMultiple[0].IsRefundable) === false));
                
                if ((filterFlightrefund.length !== 0) || (filterReturnFlightrefund.length !==0)) {
                    setErrorMsg(false);
                    setFirstFlight(filterFlightrefund)
                    setSecondFlight(filterReturnFlightrefund)
                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }

            }
        }
        else {
            setFirstFlight(FlightFilterData.data.flightDetails)
            setSecondFlight(FlightFilterData.data.flightReturnDetails)

        }
    }


    const stops = (stops) => {
        if (stops !== 0) {
            if (stops === 1) {
                const flightfilterstops = (FlightFilterData?.data.flightDetails).filter((a) => ((a.Segments[0].length) === 1));
                const flightReturnfilterstops =(FlightFilterData?.data.flightReturnDetails).filter((a) => ((a.Segments[0].length) === 1));
                
                if ((flightfilterstops.length !== 0) || (flightReturnfilterstops.length !== 0)) {
                    setErrorMsg(false);
                    setFirstFlight(flightfilterstops)
                    setSecondFlight(flightReturnfilterstops)

                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            }
            else if (stops === 2) {
                const flightfilterstops = (FlightFilterData?.data.flightDetails).filter((a) => ((a.Segments[0].length) === 2));
                const flightReturnfilterstops = (FlightFilterData?.data.flightReturnDetails).filter((a) => ((a.Segments[0].length) === 2));

                if ((flightfilterstops.length !== 0) || (flightReturnfilterstops.length !== 0)) {
                    setErrorMsg(false);
                    setFirstFlight(flightfilterstops)
                    setSecondFlight(flightReturnfilterstops)
                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            }
            else {
                const flightfilterstops = (FlightFilterData?.data.flightDetails).filter((a) => ((a.Segments[0].length) > 2));
                const flightReturnfilterstops =(FlightFilterData?.data.flightReturnDetails).filter((a) => ((a.Segments[0].length) > 2));
                
                if ((flightfilterstops.length !== 0) ||(flightReturnfilterstops.length !== 0)){
                    setErrorMsg(false);
                    setFirstFlight(flightfilterstops)
                    setSecondFlight(flightReturnfilterstops)
                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            }
        }
        else {
            setFirstFlight(FlightFilterData.data.flightDetails)
            setSecondFlight(FlightFilterData.data.flightReturnDetails)
        }
    }


    /*  # Depature Time */


    const DepTime = (DepTime) => {

        if (DepTime.length > 0) {
            if (DepTime[0] == 23 || DepTime[1] == 5) {
                const flightDepTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][0]?.DepTime).format("HH")) >= DepTime[0] || (moment(a.Segments[0][0]?.DepTime).format("HH")) < DepTime[1])
                const flightReturnDepTimefilter =(FlightFilterData?.data.flightReturnDetails).filter((a) => (moment(a.Segments[0][0]?.DepTime).format("HH")) >= DepTime[0] || (moment(a.Segments[0][0]?.DepTime).format("HH")) < DepTime[1])
                
                if ((flightDepTimefilter.length !== 0)||(flightReturnDepTimefilter.length !== 0)) {
                    setErrorMsg(false);
                    setFirstFlight(flightDepTimefilter)
                    setSecondFlight(flightReturnDepTimefilter)

                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            } else {
                const flightDepTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][0]?.DepTime).format("HH")) >= DepTime[0] && (moment(a.Segments[0][0]?.DepTime).format("HH")) < DepTime[1])
                const flightReturnDepTimefilter = (FlightFilterData?.data.flightReturnDetails).filter((a) => (moment(a.Segments[0][0]?.DepTime).format("HH")) >= DepTime[0] && (moment(a.Segments[0][0]?.DepTime).format("HH")) < DepTime[1])
    
                if ((flightDepTimefilter.length !== 0) || (flightReturnDepTimefilter.length !== 0)) {
                    setErrorMsg(false);
                    setFirstFlight(flightDepTimefilter)
                    setSecondFlight(flightReturnDepTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            }
        }
        else {
            setFirstFlight(FlightFilterData.data.flightDetails)
            setSecondFlight(FlightFilterData.data.flightReturnDetails)
        }
    }




    /*  # Arrival Time */

    const ArrivalTime = (ArrivalTime) => {

        if (ArrivalTime.length > 0) {

            if (ArrivalTime[0] == 23 || ArrivalTime[1] == 5) {
                const flightArrTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) >= ArrivalTime[0] || (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) < ArrivalTime[1])
                const flightReturnArrTimefilter =(FlightFilterData?.data.flightReturnDetails).filter((a) => (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) >= ArrivalTime[0] || (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) < ArrivalTime[1])
                
                if((flightArrTimefilter.length !== 0)||(flightReturnArrTimefilter.length !== 0)){
                    setErrorMsg(false);
                    setFirstFlight(flightArrTimefilter)
                    setSecondFlight(flightReturnArrTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            } else {
                const flightArrTimefilter = (FlightFilterData?.data.flightDetails).filter((a) => (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) >= ArrivalTime[0] && (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) < ArrivalTime[1])
                const flightReturnArrTimefilter = (FlightFilterData?.data.flightReturnDetails).filter((a) => (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) >= ArrivalTime[0] && (moment(a.Segments[0][a.Segments[0].length - 1]?.ArrTime).format("HH")) < ArrivalTime[1])
    
                if ((flightArrTimefilter.length !== 0) ||(flightReturnArrTimefilter)) {
                    setErrorMsg(false);
                    setFirstFlight(flightArrTimefilter)
                    setSecondFlight(flightReturnArrTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setFirstFlight([])
                    setSecondFlight([])
                }
            }
        }
        else {

            setFirstFlight(FlightFilterData.data.flightDetails)
            setSecondFlight(FlightFilterData.data.flightReturnDetails)
        }
    }









    useEffect(() => {
        setFirstFlight([])
        setSecondFlight([])
        FlightFliterprocess()
    }, [pricevalue, flightname])

    const ClearAll = (ClearAll) => {
        setFirstFlight([])
        setSecondFlight([])
        if (ClearAll !== "all") {
            setFiltering({ flight: false, price: false });
            setFirstFlight(FlightFilterData.data.flightDetails)
            setSecondFlight(FlightFilterData.data.flightReturnDetails)
        }
    }



    const FlightFliterprocess = () => {
        setFirstFlight([])
        setSecondFlight([])
        if (filtering.price && filtering.flight) {
            const priceDataFilter = (FlightFilterData?.data?.flightDetails).filter((a) => (a.FareDataMultiple[0].Fare.PublishedFare < pricevalue.max) && (a.FareDataMultiple[0].Fare.PublishedFare > pricevalue.min))
            const mfilter = priceDataFilter.filter((a) => (((a.Segments[0][0].Airline.AirlineName).toUpperCase()).localeCompare(flightname.toUpperCase()) === 0));
          
            const priceReturnDataFilter = (FlightFilterData?.data?.flightReturnDetails).filter((a) => (a.FareDataMultiple[0].Fare.PublishedFare < pricevalue.max) && (a.FareDataMultiple[0].Fare.PublishedFare > pricevalue.min))
            const mReturnfilter = priceReturnDataFilter.filter((a) => (((a.Segments[0][0].Airline.AirlineName).toUpperCase()).localeCompare(flightname.toUpperCase()) === 0));
          
          
            if ((mfilter.length !== 0) || (mReturnfilter.length !== 0)) {
                setErrorMsg(false);
                setFirstFlight(mfilter)
                setSecondFlight(mReturnfilter)
            }
            else {
                setErrorMsg(true);
                setFirstFlight([])
                setSecondFlight([])
            }
        }
        else if (filtering.price) {
            const filteredPrice = (FlightFilterData?.data?.flightDetails).filter((a) => (a.FareDataMultiple[0].Fare.PublishedFare < pricevalue.max) && (a.FareDataMultiple[0].Fare.PublishedFare > pricevalue.min))
            const filteredReturnPrice = (FlightFilterData?.data?.flightReturnDetails).filter((a) => (a.FareDataMultiple[0].Fare.PublishedFare < pricevalue.max) && (a.FareDataMultiple[0].Fare.PublishedFare > pricevalue.min))
           
            if ((filteredPrice.length !== 0) || (filteredReturnPrice.length !== 0)) {
                setErrorMsg(false);
                setFirstFlight(filteredPrice)
                setSecondFlight(filteredReturnPrice)
            }
            else {
                setErrorMsg(true);
                setFirstFlight([])
                setSecondFlight([])
            }
        }
        else if (filtering.flight) {
            const filterFlightname = (FlightFilterData?.data.flightDetails).filter((a) => (((a.Segments[0][0].Airline.AirlineName).toUpperCase()).localeCompare(flightname.toUpperCase()) === 0));
            const filterReturnFlightname = (FlightFilterData?.data.flightReturnDetails).filter((a) => (((a.Segments[0][0].Airline.AirlineName).toUpperCase()).localeCompare(flightname.toUpperCase()) === 0));
            
            if ((filterFlightname.length !== 0) || (filterReturnFlightname.length !== 0)) {
                setErrorMsg(false);
                setFirstFlight(filterFlightname)
                setSecondFlight(filterReturnFlightname)
            }
            else {
                setErrorMsg(true);
                setFirstFlight([])
                setSecondFlight([])
            }
        }
        else {
            setFirstFlight([])
            setSecondFlight([])
            setErrorMsg(false);
            setFirstFlight(FlightFilterData.data.flightDetails)
            setSecondFlight(FlightFilterData.data.flightReturnDetails)
        }
    }

   



    return (
        <>
            <div className='flightlistcontent-roundtrip container-fluid  my-4'>
                <div className='listWrapper'>
                    <div className='flightlistfilter-roundtrip'>
                        <FlightFilter onhandle={Flightname} handlePrice={priceRange} handleClear={ClearAll} handlerefund={refund} handlestop={stops} handleDepTime={DepTime} handleRetTime={ArrivalTime} />
                    </div>
                    <div className='flightlistresult  ms-4'>
                        <FlightBookingList firstfilteredValue={firstFlight} secondfilteredValue={secondFlight} handleError={errorMsg} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


const FlightlistRoundtrip = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* <CustomNavbar /> */}
            <FlightModifySearch />
            <FlightListContent />
        </>
    );
};
export default FlightlistRoundtrip;
