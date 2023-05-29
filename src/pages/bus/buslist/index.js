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
    const [busfilterselect, setBusFilterSelect] = useState({
        "ftype": '',
        "name": ''
    });


    useEffect(() => {
        window.scrollTo(0, 0);
        if (buslist?.data?.result?.length > 0) {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
        else {
            setfilterdata("")
        }

    }, [buslist]);


    useEffect(() => {
        console.log("bus select filter", busfilterselect);
        if (busfilterselect.name !== "" || busfilterselect.ftype !== "")
            filterDataCheck();
    }, [busfilterselect]);

    const ClearAll = (data) => {
        setfilterdata([])
        if (data !== "all") {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
    }

    const filterDataCheck = () => {
        let filteredData = "";
        if (busfilterselect.name !== "all" && busfilterselect.ftype !== "all") {
            console.log("ggg", busfilterselect)
            if (busfilterselect.name != "" && busfilterselect.ftype != "") {
                filteredData = buslist?.data?.result[1]?.busdetails.filter((a) => (((a.BusType).toUpperCase()).localeCompare(busfilterselect.ftype.toUpperCase()) === 0) && ((a.TravelName).toUpperCase()).localeCompare(busfilterselect.name.toUpperCase()) === 0);
                if (filteredData?.length > 0) {
                    setErrorMsg(false);
                    setfilterdata(filteredData)
                }
                else {
                    setErrorMsg(true);
                    setfilterdata([])
                }
            }
            else {
                filteredData = buslist?.data?.result[1]?.busdetails.filter((a) => (((a.BusType).toUpperCase()).localeCompare(busfilterselect.ftype.toUpperCase()) === 0 || ((a.TravelName).toUpperCase()).localeCompare(busfilterselect.name.toUpperCase()) === 0));
                if (filteredData?.length > 0) {
                    setErrorMsg(false);
                    setfilterdata(filteredData)
                }
                else {
                    setErrorMsg(true);
                    setfilterdata([])
                }
            }

        }
        else if (busfilterselect.name != "all") {
            filteredData = buslist?.data?.result[1]?.busdetails.filter((a) => (((a.TravelName).toUpperCase()).localeCompare(busfilterselect.name.toUpperCase()) === 0));
            if (filteredData?.length > 0) {
                setErrorMsg(false);
                setfilterdata(filteredData)
            }
            else {
                setErrorMsg(true);
                setfilterdata([])
            }
        }
        else if (busfilterselect.ftype != "all") {
            filteredData = buslist?.data?.result[1]?.busdetails.filter((a) => (((a.BusType).toUpperCase()).localeCompare(busfilterselect.ftype.toUpperCase()) === 0));
            if (filteredData?.length > 0) {
                setErrorMsg(false);
                setfilterdata(filteredData)
            }
            else {
                setErrorMsg(true);
                setfilterdata([])
            }
        }
        else {
            setfilterdata(buslist?.data?.result[1]?.busdetails)
        }
    }

    const busType = (val) => {
        setBusFilterSelect(prevState => ({ ...prevState, ftype: val }));
        // filterDataCheck(val);
    }
    const BusName = (val) => {
        setBusFilterSelect(prevState => ({ ...prevState, name: val }));
        // filterDataCheck(val);

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

        if (Arrivalval.length > 0) {
            if (Arrivalval[0] == 23 || Arrivalval[1] == 5) {
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
                        <BusFilter busoperator={BusName} handleDepTime={DepTime} handleRetTime={ArrivalValue} handleBusType={busType} handleClear={ClearAll} />
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
            {/* <CustomNavbar /> */}
            <BusModifySearch />
            <BusListContent />
            <Footer />
        </>
    );
};
export default BusList;