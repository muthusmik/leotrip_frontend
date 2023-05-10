import React, { useEffect, useState } from 'react'
import CustomNavbar from '../../../component/navbar/Navbar';
import '../buslist/buslist.scss';
import BusModifySearch from './busmodifysearch';
import BusFilter from './busfilter';
import BusBookingList from './busbookinglist';
import Footer from "../../../component/footer/footer";
import { useSelector } from "react-redux";
import ErrorPage from '../../404page';
import moment from "moment";




const BusListContent = () => {

    const buslist = useSelector(state => state.Bus);
    const [filterdata, setfilterdata] = useState()
    const [errorMsg, setErrorMsg] = useState(false)



    useEffect(() => {
        window.scrollTo(0, 0);
        if (buslist?.data?.result?.length > 0) {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
        else {
            setfilterdata("")
        }

    }, [buslist]);

    console.log("sorry....", filterdata)


    const ClearAll = (data) => {
        setfilterdata([])
        if (data !== "all") {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
    }


    const busType = (val) => {
        if (val !== "all") {
            const filteredData = buslist?.data?.result[1]?.busdetails.filter((a) => (((a.BusType).toUpperCase()).localeCompare(val.toUpperCase()) === 0));
            setfilterdata(filteredData)
        }
        else {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
    }
    const BusName = (val) => {
        if (val !== "all") {
            const filteredData = buslist?.data?.result[1]?.busdetails.filter((a) => (((a.TravelName).toUpperCase()).localeCompare(val.toUpperCase()) === 0));
            setfilterdata(filteredData)
        }
        else {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }

    }


    /*  # Depature Time */

    const DepTime = (DepTime) => {

        if (DepTime.length > 0) {

            if (DepTime[0] == 23 || DepTime[1] == 5) {
                const BusDepTimefilter = (buslist?.data?.result[1]?.busdetails).filter((a) => (moment(a.DepartureTime).format("HH")) >= DepTime[0] || (moment(a.DepartureTime).format("HH")) < DepTime[1])
                if (BusDepTimefilter?.length > 0) {
                    setErrorMsg(false);
                    setfilterdata(BusDepTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setfilterdata([])
                }
            }
            else {

                const BusDepTimefilter = (buslist?.data?.result[1]?.busdetails).filter((a) => (moment(a.DepartureTime).format("HH")) >= DepTime[0] && (moment(a.DepartureTime).format("HH")) < DepTime[1])
                if (BusDepTimefilter.length > 0) {
                    setErrorMsg(false);
                    setfilterdata(BusDepTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setfilterdata([])
                }
            }
        }
        else {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
    }

   


    /*  # Arrival Time */

    const ArrivalValue = (Arrivalval) => {
        console.log("arrr.....", Arrivalval.length)
        if (Arrivalval.length > 0) {
            if (Arrivalval[0] == 23 || Arrivalval[1] == 5) {
                console.log("asuuu....", Arrivalval)
                const BusArrTimefilter = (buslist?.data?.result[1]?.busdetails).filter((a) => (moment(a.ArrivalTime).format("HH")) >= Arrivalval[0] || (moment(a.ArrivalTime).format("HH")) < Arrivalval[1])
                if (BusArrTimefilter.length !== 0) {
                    setErrorMsg(false);
                    setfilterdata(BusArrTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setfilterdata([])
                }
            } else {
                
                const BusArrTimefilter = (buslist?.data?.result[1]?.busdetails).filter((a) => (moment(a.ArrivalTime).format("HH")) >= Arrivalval[0] && (moment(a.ArrivalTime).format("HH")) < Arrivalval[1])
                console.log("atal....", BusArrTimefilter)
                if (BusArrTimefilter.length !== 0) {
                    setErrorMsg(false);
                    setfilterdata(BusArrTimefilter)
                }
                else {
                    setErrorMsg(true);
                    setfilterdata([])
                }
            }
        }
        else {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
    }

    return (
        <>
            <div className='buslistcontent container my-5 '>
                <div className='listWrapper'>
                    <div className='buslistfilter'>
                        <BusFilter busoperator={BusName} handleDepTime={DepTime} handleRetTime={ArrivalValue} handleBusType={busType} handleClear={ClearAll}/>
                    </div>
                    <div className='buslistresult  ms-4'>
                        <BusBookingList filteredValue={filterdata} handleError={errorMsg} />
                    </div>
                </div>
            </div>
        </>
    )
}


const BusList = () => {
    
    return (

        <>
            <CustomNavbar />
            <BusModifySearch />
            <BusListContent />
            <Footer />
        </>
    );
};
export default BusList;