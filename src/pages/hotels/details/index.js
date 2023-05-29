import React, { useState } from "react";
import '../listing/hotellist.scss'
import HotelModifySearch from "../listing/hotelmodifysearch";
import CustomNavbar from "../../../component/navbar/Navbar";
import Policy from './policy'
import Amenities from "./amenities";
import AboutHotel from './abouthotel';
import Hotelpreview from './hotelpreview';
import SimilarHotels from "./similarhotels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBuildingCircleCheck, faBell, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Form, Card, Tab, Tabs, Button, Modal, Table, Row, Col, Badge } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch, useStore } from "react-redux";
import Footer from "../../../component/footer/footer";
import {loadBlockRoom } from "../../../store/actions/blockroom";
import { useLocation } from "react-router-dom";


const MultiHotelList = (blockValue) => {

    const [inclutionView, setInclutionView] = useState(false)
    const [check, setCheck] = useState('')




    
   
    /* # STORE */
    const HotelRoomData = useSelector(state => state.HotelRoom);
    
    const guestdetails = JSON.parse(localStorage.getItem('NoOfRooms'));
    

    const handleInclutionView = (index) => {
        setCheck(index)
        /* # TO show and hide */
        if (setInclutionView === true) {
            setInclutionView(false);
        } else {
            setInclutionView(true);
        }
    }
    const handleInclutionClose = () => setInclutionView(false);


    /*  # To fetch model data */
    const [show, setShow] = useState(false);
    const [view, setView] = useState('');

    const handleShow = (index) => {
        setView(index)
        /* # TO show and hide */
        if (show === true) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    const handleClose = () => setShow(false);

    /* # Routing call */

    let history = useHistory();

    const dispatch = useDispatch();

    const handleBook = (hotelroom) => {

        let smoking= hotelroom
        //data[]
        if( smoking.SmokingPreference=== "NoPreference"){
            smoking['SmokingPreference']=0;
        }
        else{
            smoking['SmokingPreference']=0;
        }

        

       
        const blockData = {
            "HotelCode": blockValue.blockValue.HotelCode,
            "ResultIndex": blockValue.blockValue.ResultIndex,
            "TraceId": blockValue.blockValue.TraceId,
            "HotelName":blockValue.blockValue.HotelName,
            "GuestNationality": "IN",
            "NoOfRooms": guestdetails,
            "ClientReferenceNo": 0,
            "IsVoucherBooking": true,
            "HotelRoomsDetails": [smoking],
            "SrdvType": "SingleTB",
            "SrdvIndex": "SrdvTB",
        }
        console.log("Im the hotel blocking data payload",blockData);
        dispatch(loadBlockRoom(blockData))
    
        history.push('/hotel/hotelconfirmation', {state:smoking})
    }

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    return (
        <>
            <div id="middle"></div>
            <div className="container mt-3 MulitiHotelList" >
                <Card className="px-4 pt-3 " >
                    <Form.Group className="mb-3 h5 fw-bold" controlId="formBasicCheckbox">
                        <h5>Rooms & Rates</h5>
                    </Form.Group>
                </Card>
                <div className="roomsList px-3">
                    {(HotelRoomData?.data?.length > 0) ? (HotelRoomData.data.map((hotelroom, index) => (
                        <Card className="my-2 " key={index} >
                            <Card.Body>
                                <div className="row">
                                    <div className="col-9 ">
                                        <h5 className="my-2">{hotelroom.RoomTypeName}</h5>
                                        {hotelroom.Amenities.map(data => (
                                            <h6 className="small"><FontAwesomeIcon icon={faBuildingCircleCheck} className="text-success" />&nbsp;{data}</h6>
                                        ))}
                                        {hotelroom.Amenity?.length > 0 && (
                                            <>
                                                <a className="ms-4 small text-primary pe-auto" onClick={() => handleInclutionView(hotelroom.RoomIndex)}>Room Inclution</a>
                                                {hotelroom.RoomIndex === check && inclutionView && (
                                                    <Modal show={inclutionView} size="lg" onHide={handleInclutionClose} centered>
                                                        <Modal.Header closeButton size="sm">
                                                            <h4>Room Inclution</h4>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Row>
                                                                {hotelroom.Amenity?.map(data => (
                                                                    <Col xs={6}>
                                                                        <h6 className="small"><FontAwesomeIcon icon={faCircleCheck} className="text-success me-2" />&nbsp;{data}</h6>
                                                                    </Col>
                                                                ))}
                                                            </Row>
                                                        </Modal.Body>
                                                    </Modal>
                                                )}
                                            </>
                                        )}
                                        <a className="ms-4 small text-primary pe-auto" onClick={() => handleShow(hotelroom.RoomIndex)}>Essential Info</a>
                                        {hotelroom.RoomIndex === view && show && (<Modal show={show} size="lg" onHide={handleClose} centered>

                                            <Modal.Header closeButton size="sm">
                                                <h4>Essential Information<br />
                                                    <span className="fs-6 small text-danger">Cancellation Policy</span></h4>
                                            </Modal.Header>
                                            <Modal.Body>

                                                <div>
                                                    <Table>
                                                        <thead>
                                                            <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                                <td>Time Slab</td>
                                                                <td>Cancellation Charges</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {hotelroom.CancellationPolicies.map((data, index) => (
                                                                <tr key={index}>
                                                                    <td>{data.FromDate}&nbsp;<b className="text-danger">-</b>&nbsp;{data.ToDate}</td>
                                                                    <td>{data.Currency}.{data.Charge}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        <br />
                                                        <tr><td className='note' colspan="2">Note : Cancellation policy mentioned on website OR on ticket is of hotels and is not decided by HOJOY. HOJOY does not levy any cancellation charges.</td></tr>
                                                    </Table>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
                                        )}
                                    </div>
                                    <div className="col-3  text-end">
                                        {/* <p className="small text-danger"><span className="ms-3 border border-danger p-2 rounded"><FontAwesomeIcon icon={faBell} className="text-warning" /> 30 Rooms Left</span></p> */}
                                        <div className="row">
                                            <div className="col-6 text-end">
                                                <p  className="h5 fw-bold">{numberFormat(hotelroom.Price.PublishedPrice, hotelroom.Price.CurrencyCode)}
                                                </p>
                                            </div>
                                            <div className="col-6">
                                                <Button variant="primary" onClick={() => handleBook(hotelroom)}>select Room</Button>
                                            </div>
                                        </div>
                                        {/* <p className="small text-success">You Saved ₹ 400 <FontAwesomeIcon icon={faCircleCheck} /></p> */}
                                    </div>
                                </div>

                            </Card.Body>
                            {/* <Card.Footer className="bg-white">
                            <p className="small text-danger">SBI Credit Card Offer- Save up to INR 7000 on Promocode ATSBIDEALS</p>
                        </Card.Footer> */}
                        </Card>
                    ))) : <Card className="text-center h5 py-5 text-success fw-bold">Loading...</Card>}
                </div>
            </div>
        </>
    )
}

const HotelDetails = (props) => {

    const location = useLocation();

    const [blockneeds,setBlockneeds] = useState({
        ResultIndex: "",
        HotelCode: "",
        TraceId:"",
        HotelName:""
      });
   
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
        setBlockneeds(location.state.state)
    }, []);


    return (
        <>
            <div className="hoteldetails  mb-5">
                {/* <CustomNavbar /> */}
                <HotelModifySearch />
                <Hotelpreview />
                {/* <HotelContentReport /> */}
                <MultiHotelList blockValue={blockneeds}/>
                <Amenities />
                <Policy />
                <AboutHotel />
                <SimilarHotels />
            </div>
            <Footer />

        </>
    )
}
export default HotelDetails;
