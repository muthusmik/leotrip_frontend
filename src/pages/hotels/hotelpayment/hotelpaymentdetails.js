import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import pay from '../../../asset/images/payment/newpayment.png';
import QrCode from '../../../asset/images/payment/qr-code.png';
import { Modal, Table, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import HDFC from '../../../asset/images/payment/HDFC.png';
import ICICI from '../../../asset/images/payment/icici.png';
import SBI from '../../../asset/images/payment/sbi.png';
import Axis from '../../../asset/images/payment/axis.png';
import upi from '../../../asset/images/payment/upii.png';
import Upi from '../../../asset/images/payment/upi.png';
import gpay from '../../../asset/images/payment/google-pay.png';
import card from '../../../asset/images/payment/card.png';
import globe from '../../../asset/images/payment/globe.png';
import { useSelector, useStore } from "react-redux";
import Logo from '../../../asset/images/logo.png'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";
import { useLocation } from 'react-router-dom';
import hotel from "../../../asset/images/hotel/hotel1.jpg";
import location from "../../../asset/images/hotel/location.png";
import moment from "moment";
import stars from '../../../asset/images/bus/star.png';
import ErrorImage from "../../../asset/images/hotel/noimage.jpg"
import { hotelBookingDetails } from '../../../store/services/hotel';
import { HotelBook } from '../../../store/services/hotelbook';

const HotelDetails = (txnid) => {

    /* # STORE */
    const hotelBook = useSelector(state => state.HotelBook);
    const hotelinfo = useSelector(state => state.HotelInfo);
    const hotelBlockRoom = useSelector(state => state.BlockRoom);
    const hotelSearchData = useSelector(state => state.HotelSearch);
    const location = useLocation();
    const myprop = location.state;
    // console.log("My prop..............", myprop.txnid);
    // console.log("Guset Details...............", myprop.guestDetails);
    const store = useStore()
    // console.log("Transaction id...........", txnid, "hotelBook..........", hotelBook)
    // console.log("Hotel search data..........", hotelSearchData)

    useEffect(() => {
        console.log("hotelBookbusssssssssssssssssss",hotelBook);
        if (hotelBook.data?.HotelBookingStatus === "Confirmed") {
            hotelBooking();
        }
    }, [hotelBook])

    const hotelBooking = async () => {
        const payload = {
            "CheckInDate": "30/04/2024",//mandatory
            // "VoucherStatus": true,
            // "ResponseStatus": 1,
            "transactionId": "erftgd"//mandatory
            // "guestUserId":"",
            // "TraceId": 731,
            // "Status": 1,
            // "InvoiceNumber": "Test2456"
            // "ConfirmationNo": "XXXX",
            // "BookingRefNo": "XXXX",
            // "BookingId": "XXXX",
            // "IsPriceChanged": false,
            // "IsCancellationPolicyChanged": false
        }
        Object.assign(hotelBook.data, { transactionId: myprop.txnid /* txnid.txnid.txnid */, CheckInDate: hotelSearchData?.data[0]?.CheckInDate, HotelName: hotelinfo?.data[0]?.HotelDetails?.HotelName })
        delete hotelBook.data.Error;
        console.log("Hotel Booking...............CheckInDate",  hotelSearchData?.data[0]?.CheckInDate);
        console.log("Hotel Booking...............transactionId", myprop.txnid);
        console.log("Hotel Booking...............payload", hotelBook.data);       

        let hotelbookingdata = await hotelBookingDetails(hotelBook.data);
    }


    return (
        // # From Testing use only Printed
        <Card>
            <div className="container mt-3">
                <div className='row'>
                    <div className='col-5 '>
                        <img src={hotelinfo?.data[0]?.HotelDetails?.Images[0]} height="160px" width="300" alt="hotel" onError={event => {
                            // event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                            event.target.src = "http://localhost:3000/images/noimage.jpg"
                            event.onerror = null
                        }} />
                    </div>
                    <div className='col-6'>
                        <h4><span className='h5 fw-bold text-success'>{hotelinfo?.data[0]?.HotelDetails?.HotelName}</span></h4>
                        <p className="hoteladdress text-muted mb-0"><img src={location} alt="location" width="20" />{hotelBlockRoom?.data[1]?.AddressLine1}</p>
                        <p className="hoteladdress text-muted mt-0 mb-0">{hotelBlockRoom?.data[1]?.AddressLine2}</p>
                        <p className="hoteladdress text-muted mt-0">
                            {[...Array(hotelinfo?.data[0]?.HotelDetails?.StarRating)].map((star) => {
                                return (
                                    <span className="fs-5 mb-5 text-warning"><img src={stars} alt="star" width="22px" height="22px" /></span>
                                );
                            })}
                        </p>
                    </div>
                </div>
                <div className='container rounded my-3 ms-1 row GuestCount py-3'>
                    <div className='col-3'>
                        <h6 className="hoteladdress text-muted">Check In</h6>
                        <h6 className='hoteladdress fs-5'>{hotelSearchData?.data[0]?.CheckInDate}</h6>
                    </div>
                    <div className='col-3'>
                        <h6 className="hoteladdress text-muted">Check Out</h6>
                        <h6 className='hoteladdress fs-5'>{moment(hotelSearchData?.data[0]?.CheckInDate, "DD/MM/YYYY").add(hotelSearchData?.data[0]?.NoOfNights, 'days').format('DD/MM/YYYY')}</h6>
                    </div>
                    <div className='col-3'>
                        <h6 className="hoteladdress text-muted mb-0">Guests</h6>
                        <h6 className='mt-0 ms-2  mb-0'>{hotelSearchData?.data[0]?.NoOfRooms}&nbsp;Room</h6>
                        {(hotelSearchData.data[0].RoomGuests).map((data) => (
                            <>
                                <h6 className='mt-0 ms-2'>{data.NoOfAdults}&nbsp;Adults&nbsp;{data.NoOfChild}&nbsp;Child</h6>
                            </>
                        ))}
                    </div>
                    <div className='col'>
                        <h6 className='roomtype text-muted'>RoomType</h6>
                        <h6>{hotelBlockRoom?.data[1]?.HotelRoomsDetails[0]?.RoomTypeName}</h6>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const PaymentMethod = () => {

    const [modalShow, setModalShow] = React.useState(false);

    /* # STORE */
    const hotelBook = useSelector(state => state.HotelBook);
    const hotelinfo = useSelector(state => state.HotelInfo);
    const hotelBlockRoom = useSelector(state => state.BlockRoom);
    const hotelSearchData = useSelector(state => state.HotelSearch);
    const location = useLocation();
    const myprop = location.state;
    // console.log("Guset Details...............", myprop.guestDetails);
    const guestName = myprop.guestDetails;
    // console.log("hotelBlockRoom deatils.................", hotelBlockRoom)
    // console.log("hotelinfo details..............", hotelinfo)
    const store = useStore()
    // console.log("yama", hotelBook)
    const printRef = React.useRef();

    const handleDownloadImage = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };

    return (
        <>
            <Card className='mt-2'>
                <Card.Body>
                    <Accordion defaultActiveKey="3">
                        <>
                            <Modal
                                show={modalShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                onHide={() => setModalShow(false)}
                            >
                                <Modal.Header closeButton className='paymentmodel'>
                                    <Modal.Title id="contained-modal-title-vcenter paymentmodel" >

                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="px-4" ref={printRef}>
                                    {(hotelBook?.data) ? (
                                        (hotelBook.data?.HotelBookingStatus === "Confirmed") ?
                                            (
                                                <div className="px-4">
                                                    {/* <div className='border mb-3' style={{ backgroundColor: "#D0F0C0", borderRadius: "20px" }}>
                                                        <div className='ms-3 p-2'>
                                                            <h5>Congratulations</h5>
                                                            <h6 className='text-muted ms-3'>Your Booking Confirmed  successfully</h6>
                                                        </div>
                                                    </div > */}
                                                    <div className='bookingConfirmedDetails'>
                                                        <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                            <Col xs="5">
                                                                <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }}></img>
                                                            </Col>
                                                            <Col>
                                                                <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                            </Col>
                                                        </Row>

                                                        <div className='m-3'>
                                                            <p><b>Booking Id :{hotelBook.data.BookingId}</b></p>
                                                            <p><b>ConfirmationNo :</b><span>{hotelBook.data.ConfirmationNo}</span></p>
                                                            <p><b>InvoiceNumber :</b><span className='text-secondary'>{hotelBook.data.InvoiceNumber}</span></p>
                                                            <p><b>HotelBookingStatus :</b><span className='text-success fw-bold'>{hotelBook.data.HotelBookingStatus}</span></p>
                                                            {/* <p><b>Paid Amount :<span className=' text-danger'>{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].DayRates[0].Amount}</span></b></p> */}
                                                            <p><b>Email us :</b><span className='text-dark fw-bold'>booking@hojoy.in</span></p>
                                                            <p><b>Customer Care No :</b><span className='text-dark fw-bold'>89777 81 999, 89777 82 999</span></p>
                                                        </div>

                                                        <Table bordered hover size='sm'>
                                                            <thead >
                                                                <tr className="bg-success text-light text-center">
                                                                    <th colspan='2'>Hotel Details</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Hotel Name</td>
                                                                    <td>{hotelinfo?.data[0]?.HotelDetails?.HotelName}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Rooms</td>
                                                                    <td> {hotelSearchData?.data[0]?.NoOfRooms}&nbsp;Room</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Room Type</td>
                                                                    <td>{hotelBlockRoom?.data[1]?.HotelRoomsDetails[0]?.RoomTypeName}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Check In  </td>
                                                                    <td>{hotelSearchData?.data[0]?.CheckInDate}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Check Out</td>
                                                                    <td>{moment(hotelSearchData?.data[0]?.CheckInDate, "DD/MM/YYYY").add(hotelSearchData?.data[0]?.NoOfNights, 'days').format('DD/MM/YYYY')}</td>

                                                                </tr>
                                                            </tbody>
                                                        </Table>

                                                        <Table bordered hover size='sm'>
                                                            <thead >
                                                                <tr className="bg-success text-light text-center">
                                                                    <th colspan='4'>Guest Details</th>
                                                                </tr>

                                                                <tr>
                                                                    <th>Guest Name</th>
                                                                    <th>Age </th>
                                                                    <th>EmailId </th>
                                                                    <th>Mobile No </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {(guestName.gustDetails.userGuestDetails.Adults).map((data, index) => (
                                                                    <tr key={index}>
                                                                        <td>{data.FirstName} {data.LastName}{(data.LeadPassenger) ? "*" : null}</td>
                                                                        <td>{data.age}</td>
                                                                        <td>{data.Email}</td>
                                                                        <td>{data.Phoneno}</td>
                                                                    </tr>
                                                                ))}
                                                                {(guestName.gustDetails.userGuestDetails.Childs).map((data, index) => (
                                                                    <tr key={index}>
                                                                        <td>{data.FirstName} {data.LastName}</td>
                                                                        <td>{data.age}</td>
                                                                        {/* <td>{data.Email}</td>
                                                                        <td>{data.Phoneno}</td> */}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </div>
                                            )
                                            : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                                <span className="spinner-border spinner-border-sm"></span>
                                                &nbsp;Loading....

                                            </div>
                                    ) : null}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" onClick={handleDownloadImage}>Download</Button>
                                </Modal.Footer>
                            </Modal>
                            <Accordion defaultActiveKey="3">
                                <Accordion.Item eventKey="3" className='mt-3'>
                                    <Accordion.Header><h5>Details</h5></Accordion.Header>
                                    <Accordion.Body>
                                        {(hotelBook?.data) ? (
                                            (hotelBook.data?.HotelBookingStatus === "Confirmed") ?
                                                (
                                                    <div className="px-4" ref={printRef}>
                                                        <div className='bookingConfirmedDetails'>
                                                            <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                                <Col xs="5">
                                                                    <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }}></img>
                                                                </Col>
                                                                <Col>
                                                                    <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                                </Col>
                                                            </Row>

                                                            <div className='m-3'>
                                                                <p><b>Booking Id :{hotelBook.data.BookingId}</b></p>
                                                                <p><b>ConfirmationNo :</b><span>{hotelBook.data.ConfirmationNo}</span></p>
                                                                <p><b>InvoiceNumber :</b><span className='text-secondary'>{hotelBook.data.InvoiceNumber}</span></p>
                                                                <p><b>HotelBookingStatus :</b><span className='text-success fw-bold'>{hotelBook.data.HotelBookingStatus}</span></p>
                                                                {/* <p><b>Paid Amount :<span className=' text-danger'>{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].DayRates[0].Amount}</span></b></p> */}
                                                                <p><b>Email us :</b><span className='text-dark fw-bold'>booking@hojoy.in</span></p>
                                                                <p><b>Customer Care No :</b><span className='text-dark fw-bold'>89777 81 999, 89777 82 999</span></p>
                                                            </div>

                                                            <Table bordered hover size='sm'>
                                                                <thead >
                                                                    <tr className="bg-success text-light text-center">
                                                                        <th colspan='2'>Hotel Details</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Hotel Name</td>
                                                                        <td>{hotelinfo?.data[0]?.HotelDetails?.HotelName}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Rooms</td>
                                                                        <td> {hotelSearchData?.data[0]?.NoOfRooms}&nbsp;Room</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Room Type</td>
                                                                        <td>{hotelBlockRoom?.data[1]?.HotelRoomsDetails[0]?.RoomTypeName}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Check In  </td>
                                                                        <td>{hotelSearchData?.data[0]?.CheckInDate}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Check Out</td>
                                                                        <td>{moment(hotelSearchData?.data[0]?.CheckInDate, "DD/MM/YYYY").add(hotelSearchData?.data[0]?.NoOfNights, 'days').format('DD/MM/YYYY')}</td>

                                                                    </tr>
                                                                </tbody>
                                                            </Table>

                                                            <Table bordered hover size='sm'>
                                                                <thead >
                                                                    <tr className="bg-success text-light text-center">
                                                                        <th colspan='4'>Guest Details</th>

                                                                    </tr>

                                                                    <tr>
                                                                        <th>Guest Name</th>
                                                                        <th>Age </th>
                                                                        <th>EmailId </th>
                                                                        <th>Mobile No </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {(guestName.gustDetails.userGuestDetails.Adults).map((data, index) => (
                                                                        <tr key={index}>
                                                                            <td>{data.FirstName} {data.LastName}{(data.LeadPassenger) ? "*" : null}</td>
                                                                            <td>{data.age}</td>
                                                                            <td>{data.Email}</td>
                                                                            <td>{data.Phoneno}</td>
                                                                        </tr>
                                                                    ))}
                                                                    {(guestName.gustDetails.userGuestDetails.Childs).map((data, index) => (
                                                                        <tr key={index}>
                                                                            <td>{data.FirstName} {data.LastName}</td>
                                                                            <td>{data.age}</td>
                                                                            {/* <td>{data.Email}</td>
                                                                        <td>{data.Phoneno}</td> */}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                        <div className='text-end'>
                                                            <Button variant="success" onClick={() => setModalShow(true)}>Download</Button>
                                                        </div>
                                                    </div>
                                                )
                                                : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                    &nbsp;Loading....

                                                </div>
                                        ) : null}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </>
                    </Accordion>
                </Card.Body>
            </Card>
        </>
    )
}

const PaymentDetails = (txnid) => {

    return (
        <>
            <HotelDetails txnid={txnid} />
            <PaymentMethod />

        </>
    )
}

export default PaymentDetails