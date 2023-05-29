import React, { useEffect, useState } from 'react';
import CustomNavbar from '../../../component/navbar/Navbar';
import '../buslist/buslist.scss';
import { useSelector,useDispatch } from "react-redux";
import moment from "moment";
import { Form } from 'react-bootstrap';
import TravelerDetails from './travelerdetails';
import { Busdetails,Insurance,TripType } from './tripconfirmationdetail';
import Footer from "../../../component/footer/footer";
import { FareDetails, Promte } from './bustripfare';
import { useLocation } from 'react-router-dom';



const PackageDetails = () => {
    const [selectedvalue, onselectvalue] = useState(false);
    const [busbookData, setBusbookData] = useState('');
    const [gustRes, setGustRes] = useState('');
    const [validated, setValidated] = useState(false)
    const location = useLocation();
   
    useEffect(()=>{
        console.log("DAaaaa",location.state.seatdetails)
    },[])

    const handleBusData = (event) => {
        setBusbookData(event)
    }
    const handleSelectValue = (event) => {
        onselectvalue(event)
    }

   const handleGustRes=(e)=>{
    setGustRes(e)
   }

    const handleValidate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            onselectvalue(form.checkValidity());
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        if (form.checkValidity() === true) {
            onselectvalue(form.checkValidity());
            setValidated(false);
        }
    };

   

    return (
        <>
            <div className='container bus-pakagedetail'>
                {/* <Form noValidate validated={validated} onClick={handleValidate}> */}
                    <div className="row bus-listWrapper">
                        <div className="col-8">
                            <Busdetails />
                            {/* <Insurance /> */}
                            <TravelerDetails result={location.state.result} 
                            seatDetails={location.state.seatdetails} 
                            bordPoint={location.state.boardingPointsId}
                            dropPoint={location.state.droppingPointsId}
                            handleSelectValue={handleSelectValue}
                            handleBusData={handleBusData}
                            handleGustRes={handleGustRes}
                            />
                            {/* <TripType /> */}
                        </div>
                        <div className="col-4 bus-paydetail">
                            <FareDetails selected={selectedvalue} busbookData={busbookData} gustRes={gustRes}/>
                            {/* <Promte /> */}
                        </div>
                    </div>
                {/* </Form> */}
            </div>
        </>
    )
}

const PackageInfo = () => {
    // store access
    const buslist = useSelector(state => state.Bus);
    const busblock = useSelector (state => state.busblock);
    console.log("kkkk",busblock)
    const location = useLocation();
    const [busdata, setBusData] = useState(location.state.state.Price);

    return (
        <>
            <div className="container text-white buspackageinfo">
                <h3 name="Review your Booking" className="">Review your Booking</h3>
                <h5>

                    <>
                        <span> {buslist.data?.result[0].source_city} - {buslist.data?.result[0].destination_city}</span>
                        <span>&nbsp; Outstation Oneway</span><span>&nbsp; {/* {moment(busdata.ArrivalTime).format("MMM DD YYYY - HH:MM")} */}</span>
                    </>

                </h5>
            </div>
        </>
    )
}


const BusConfirmation = () => {


   


    const buslist = useSelector(state => state.Bus);
    const location = useLocation();
    const [infodata, setInfoData] = useState(location.state);
 
    


    const dispatch = useDispatch();


    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);



    return (
        <>
            <div>
                {/* <CustomNavbar /> */}
                <div className='background-theme'>
                    < PackageInfo />
                </div>
                <PackageDetails />

            </div>
            <div className='bottom-Content'>
                <Footer />
            </div>
        </>
    )
}

export default BusConfirmation;