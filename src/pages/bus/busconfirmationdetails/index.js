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
import { loadBusInfo } from '../../../store/actions/businfo';


const PackageDetails = () => {
    const [selectedvalue, onselectvalue] = useState(false);

    const [validated, setValidated] = useState(false)
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
                <Form noValidate validated={validated} onClick={handleValidate}>
                    <div className="row listWrapper">
                        <div className="col-8">
                            <Busdetails />
                            <Insurance />
                            <TravelerDetails />
                            <TripType />
                        </div>
                        <div className="col-4 bus-paydetail">
                            <FareDetails selected={selectedvalue} />
                            {/* <Promte /> */}
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}

const PackageInfo = () => {
    // store access
    const buslist = useSelector(state => state.Bus);
    const location = useLocation();
    const [busdata, setBusData] = useState(location.state.state.Price);
    console.log("setBusData.....i9nside index page", busdata)
    // console.log("buslist header jibi", buslist.data.result[1].busdetails[0].ArrivalTime)

    return (
        <>
            <div className="container text-white buspackageinfo">
                <h3 name="Review your Booking" className="">Review your Booking</h3>
                <h5>

                    <>
                        <span> {buslist.data.result[0].source_city} - {buslist.data.result[0].destination_city}</span>
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
 
    console.log("i am fine",infodata.seatNum)


    const dispatch = useDispatch();


    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    // useEffect =(() =>{
    //     const businfo = {
    //         "TraceId": buslist.data.result[0].TraceId,
    //         "ResultIndex": infodata.result,
    //         "EndUserIp": "1.1.1.1",
    //         "ClientId": "180148",
    //         "UserName": "SKdigPa8",
    //         "Password": "A$JSkEf4#4",
    //         "BoardingPointId": 1,
    //         "DroppingPointId": 1,
    //         "Passenger": [
    //             {
    //                 "LeadPassenger": true,
    //                 "PassengerId": 0,
    //                 "Title": "Mr",
    //                 "FirstName": "Amit",
    //                 "LastName": "Singh",
    //                 "Email": "amit@srdvtechnologies.com",
    //                 "Phoneno": "9643737502",
    //                 "Gender": "1",
    //                 "IdType": null,
    //                 "IdNumber": null,
    //                 "Address": "Modinagar",
    //                 "Age": "22",
    //                 "Seat":"U34",
    //             }
    //         ]

    //     }
    //     dispatch(loadBusInfo(businfo));

    // },[])

   



    return (
        <>
            <div>
                <CustomNavbar />
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