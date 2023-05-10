import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import pay from '../../../asset/images/payment/newpayment.png';
import QrCode from '../../../asset/images/payment/qr-code.png';
import { Form, Row, Col, Table } from 'react-bootstrap';
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
import Modal from 'react-bootstrap/Modal';
import Logo from '../../../asset/images/logo.png'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";
import hotel from "../../../asset/images/hotel/hotel1.jpg";
import location from "../../../asset/images/hotel/location.png";
import moment from "moment";

const HotelDetails = () => {


    /* # STORE */
    const hotelBook = useSelector(state => state.HotelBook);
    const hotelBlockRoom = useSelector(state => state.BlockRoom);
    const hotelSearchData = useSelector(state => state.HotelSearch);
    const store = useStore()

    // console.log("hotelbook conformation", hotelBook)
    return (
        // # From Testing use only Printed
        <Card>
            <div className="container mt-3">
                <div className='row'>
                    <div className='col-5 '>
                        <img src={hotel} height="160px" width="300" alt="hotel" />
                    </div>
                    <div className='col-6'>
                        <h4><span className='h5 fw-bold text-success'>{hotelBook.data[0].HotelName}</span></h4>
                        <p className="hoteladdress text-muted mb-0"><img src={location} alt="location" width="20" />{hotelBlockRoom.data[1].BlockRoomResult.AddressLine1}</p>
                        <p className="hoteladdress text-muted mt-0 mb-0">{hotelBlockRoom.data[1].BlockRoomResult.AddressLine2}</p>
                        <p className="hoteladdress text-muted mt-0">
                            {[...Array(hotel.StarRating)].map((star) => {
                                return (
                                    <span className="fs-5 text-warning">&#9733;</span>
                                );
                            })}
                        </p>
                    </div>
                </div>
                <div className='container rounded my-3 ms-1 row GuestCount py-3'>
                    <div className='col-3'>
                        <h6 className="hoteladdress text-muted">Check In</h6>
                        <h5 className='hoteladdress fs-5'>{hotelSearchData.data[0].CheckInDate}</h5>
                    </div>
                    <div className='col-3'>
                        <h6 className="hoteladdress text-muted">Check Out</h6>
                        <h5 className='hoteladdress fs-5'>{moment(hotelSearchData.data[0].CheckInDate, "DD/MM/YYYY").add(hotelSearchData.data[0].NoOfNights, 'days').format('DD/MM/YYYY')}</h5>
                    </div>
                    <div className='col-3'>
                        <h6 className="hoteladdress text-muted mb-0">Guests</h6>
                        <h5 className='mt-0 ms-2  mb-0'>{hotelSearchData.data[0].NoOfRooms}&nbsp;Room</h5>
                        {(hotelSearchData.data[0].RoomGuests).map((data) => (
                            <>
                                <h5 className='mt-0 ms-2'>{data.NoOfAdults}&nbsp;Adults&nbsp;{data.NoOfChild}&nbsp;Child</h5>
                            </>
                        ))}
                    </div>
                    <div className='col'>
                        <h6 className='roomtype text-muted'>RoomType</h6>
                        <h5>{hotelBook.data[0].HotelRoomsDetails[0].RoomTypeName}</h5>
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
    const store = useStore()

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


    const [validated, setValidated] = useState(false);
    const [valid, setValid] = useState(false)
    const handleValidate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            setValid(form.checkValidity())
        }
        if (form.checkValidity() === true) {
            setValidated(false);
            setValid(form.checkValidity())
        }

    };



    return (
        <Card className='mt-2'>
            <Card.Body>
                <h5>PAYMENT MODES</h5>
                {/* <div className='row'>
                    <div className='col-7 my-2'>
                        <Badge className='bg-secondary'>Session Expires In : 00:00</Badge>
                    </div>
                    <div className='col-4'>
                        <img src={pay} alt="pay" style={{ width: "300px" }} />
                    </div>
                </div> */}
                <Accordion defaultActiveKey="3">
                    {/* <Accordion.Item eventKey="1" className='mt-3'>
                        <Accordion.Header><h5><img src={upi} width="40px" />UPI</h5></Accordion.Header>
                        <Accordion.Body>
                            <div className="row my-2 mb-5 border">
                                <div className="col-2">
                                    <img src={Upi} width="90px" className='m-3' />
                                </div>
                                <div className="col-9 my-auto bg-muted" >
                                    Transfer money from bank account using UPI, You must have a registered VPA
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <div className="row">
                                        <div className="col-1">
                                            <div className="fl">
                                                <div className="fl upiPaymentSerial1">
                                                    <span className="paymentserialNumber"> 1 </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="width100 fl">
                                                <h6>Enter VPA</h6>
                                                <p className="">
                                                    You must have a Virtual Payment Address.
                                                    <p className='link-primary'> Why? </p>
                                                </p>
                                            </div>
                                            <input type="text" className="form-control inputMedium" placeholder="Enter VPA" id="vpaInput" autocomplete="off" value="" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-1">
                                            <div className="fl">
                                                <div className="fl upiPaymentSerial1">
                                                    <span className="paymentserialNumber"> 2 </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10 ">
                                            <p><span className='fw-bold'>Receive payment request on UPI/PSP app</span><br /><span style={{ fontSize: "13px" }}>Keep your smart phone handy</span></p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-1">
                                            <div className="fl">
                                                <div className="fl upiPaymentSerial1">
                                                    <span className="paymentserialNumber"> 3 </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10 ">
                                            <p><span className="fw-bold">Authorize payment request</span><br /><span style={{ fontSize: "13px" }}>Go to transactions in PSP app to approve</span></p>
                                        </div>
                                    </div>
                                    <div className=" d-grid my-3">
                                        <Button onClick={() => setModalShow(true)}>Pay Now</Button>
                                        <p>By proceeding ,You accept Hojoy <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>

                                    </div>

                                </div>
                                <div className="col-5">
                                    <div className="container border w-75 text-center p-3">
                                        <p>SCAN &amp; PAY Using your banking UPI app</p>
                                        <img src={QrCode} width="180px" />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item> */}
                    <Modal
                        show={modalShow}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        onHide={() => setModalShow(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">

                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="px-4" ref={printRef}>
                            <div className='border mb-3' style={{ backgroundColor: "#D0F0C0", borderRadius: "20px" }}>
                                <div className='ms-3 p-2'>
                                    <h5>Congratulations</h5>
                                    <h6 className='text-muted ms-3'>Your Booking Confirmed  successfully</h6>
                                </div>
                            </div >
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
                                    <p><b>Booking Id :{hotelBook.data[1].BookingId}</b></p>
                                    <p><b>HotelBookingStatus :</b><span className='text-success'>{hotelBook.data[1].HotelBookingStatus}</span></p>
                                    <p><b>InvoiceNumber :</b><span className='text-secondary'>{hotelBook.data[1].InvoiceNumber}</span></p>
                                    <p><b>Paid Amount :<span className=' text-danger'>{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].DayRates[0].Amount}</span></b></p>
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
                                            <td>{hotelBook.data[0].HotelName}</td>
                                        </tr>
                                        <tr>
                                            <td>Rooms</td>
                                            <td>{hotelBook.data[0].NoOfRooms}</td>
                                        </tr>
                                        <tr>
                                            <td>Room Type</td>
                                            <td>{hotelBook.data[0].HotelRoomsDetails[0].RoomTypeName}</td>
                                        </tr>
                                        <tr>
                                            <td>Check In  </td>

                                            <td>Nov 23 2022 &nbsp; 00:00</td>
                                        </tr>
                                        <tr>
                                            <td>Check Out</td>
                                            <td>Nov 25 2022 &nbsp; 00:00</td>

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
                                            <th>EmailId </th>
                                            <th>Mobile No </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {(hotelBook.data[0].HotelRoomsDetails[0].HotelPassenger).map((data => (
                                            <tr>
                                                <td>{data.Title}{data.FirstName}</td>
                                                <td>{data.Email}</td>
                                                <td>{data.Phoneno}</td>

                                            </tr>
                                        )))}

                                    </tbody>
                                </Table>
                                <p className='note' colspan="2">Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by HOJOY. HOJOY does not levy any cancellation charges.</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleDownloadImage}>Download</Button>
                        </Modal.Footer>
                    </Modal>
                    {/* <Accordion.Item eventKey="2" className='mt-3'>
                        <Accordion.Header><h5><img src={gpay} width="40px" /> Google Pay(Tez)</h5></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-7">
                                    <div className="row">
                                        <div className="col-1">
                                            <div className="fl">
                                                <div className="fl upiPaymentSerial1">
                                                    <span className="paymentserialNumber"> 1 </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="width100 fl">
                                                <h6>Enter Your Google Pay ID</h6>
                                            </div>
                                            <div className='row'>
                                                <div className="col-7">
                                                    <input type="text" className="form-control inputMedium" placeholder="Enter Your Google Pay ID" id="vpaInput" autocomplete="off" value="" />
                                                </div>

                                                <div className="col-5">
                                                    <Form.Select aria-label="Default select example">
                                                        <option>select</option>
                                                        <option value="@okaxis">@okaxis</option>
                                                        <option value="@oksbi">@oksbi</option>
                                                        <option value="@okicici">@okicici</option>
                                                        <option value="@okhdfcbank">@okhdfcbank</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-1">
                                            <div className="fl">
                                                <div className="fl upiPaymentSerial1">
                                                    <span className="paymentserialNumber"> 2 </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-11 ">
                                            <p><span className='fw-bold'>Receive payment request on Google Pay/PSP app</span><br /><span style={{ fontSize: "13px" }}>Keep your smart phone handy</span></p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-1">
                                            <div className="fl">
                                                <div className="fl upiPaymentSerial1">
                                                    <span className="paymentserialNumber"> 3 </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10 ">
                                            <p><span className="fw-bold">Authorize payment request</span><br /><span style={{ fontSize: "13px" }}>Go to transactions in PSP app to approve</span></p>
                                        </div>
                                    </div>
                                    <div className=" d-grid my-3">
                                        <Button onClick={() => setModalShow(true)}>Pay Now</Button>
                                        <p>By proceeding ,You accept Hojoy <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>
                                    </div>

                                </div>
                                <div className="col-5">
                                    <div className="container border w-75 text-center p-3">
                                        <p>SCAN &amp; PAY Using your banking UPI app</p>
                                        <img src={QrCode} width="180px" />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="3" className='mt-3'>
                        <Accordion.Header><h5><img src={card} /> Debit/Credit Card</h5></Accordion.Header>
                        <Accordion.Body>
                            <Form noValidate validated={validated} onClick={handleValidate}>
                                <div className="row">
                                    <div className="col-6">
                                        <Form.Group className="mb-3" controlId="validation1">
                                            <Form.Label htmlFor="Card_Number">Card Number</Form.Label>
                                            <Form.Control pattern="[0-9]{12,}" placeholder="Card Number" name='Card_Number' required />
                                            <Form.Control.Feedback type="invalid">Please Enter the Card Number</Form.Control.Feedback>
                                        </Form.Group>
                                        {/* <InputGroup className="mb-3" controlId="">
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                        />
                                        <Form.Label htmlFor="Card_Number">Save my card details without CVV.info</Form.Label>
                                    </InputGroup> */}
                                    </div>
                                    <div className="col-6">
                                        <Form.Group controlId="validation2">
                                            <Form.Label htmlFor="Name">Name on Card</Form.Label>
                                            <Form.Control type="text" placeholder="Name" name='Name' required />
                                            <Form.Control.Feedback pattern="[A-Za-z]{3,}" type="invalid">Please Enter the Card Name</Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Form.Group className="mb-3" controlId="validation3">
                                            <Form.Label htmlFor="Expiry_Date">Expiry Date</Form.Label>
                                            <Form.Control type="datetime" placeholder="Expiry Date" name='Expiry_Date' pattern="^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$" required />
                                            <Form.Control.Feedback type="invalid">Please Enter the Expiry Date</Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-3" controlId="validation4">
                                            <Form.Label htmlFor="Enter_CVV">Enter CVV</Form.Label>
                                            <Form.Control pattern="[0-9]{3}" placeholder="Enter CVV" name='Enter_CVV' onChange={() => setValidated(true)} required />
                                            <Form.Control.Feedback type="invalid">Please Enter the Enter CVV</Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Check
                                    inline
                                    label="Agree to pay"
                                    name="group1"
                                    type="checkbox"
                                />
                                <div className=" d-grid my-3">
                                    {valid === true ? (
                                        <Button onClick={() => setModalShow(true)}>Pay Now</Button>
                                    ) : <Button disabled onClick={() => setModalShow(true)}>Pay Now</Button>}

                                    <p>By proceeding ,You accept Hojoy <a className='link-primary'>User Agreement</a>, <a className='link-primary'>Terms of Service</a> and <a className='link-primary'>Privacy Policy</a></p>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='mt-3'>
                        <Accordion.Header><h5><img src={globe} width="30px" /> Netbanking</h5></Accordion.Header>
                        <Accordion.Body>
                            <p>Popular Banks</p>
                            <div className='row'>
                                <div className='col-3 pt-2 mx-auto'>
                                    <InputGroup controlId="" className='border p-2'>
                                        <Form.Check
                                            type="radio"
                                            id="custom-switch"
                                            name="banking"
                                        />
                                        <Form.Label htmlFor="Card_Number " className='ms-2 bold h6'>
                                            SBI
                                            <img src={SBI} width="30px" className='ms-2' />
                                        </Form.Label>
                                    </InputGroup>
                                </div>
                                <div className='col-3 pt-2 mx-auto'>
                                    <InputGroup controlId="" className='border p-2'>
                                        <Form.Check
                                            type="radio"
                                            id="custom-switch"
                                            name="banking"
                                        />
                                        <Form.Label htmlFor="Card_Number " className='ms-2  bold h6'>
                                            HDFC
                                            <img src={HDFC} width="30px" className='ms-2' />
                                        </Form.Label>
                                    </InputGroup>
                                </div>
                                <div className='col-3 pt-2 mx-auto'>
                                    <InputGroup controlId="" className='border p-2  '>
                                        <Form.Check
                                            type="radio"
                                            id="custom-switch"
                                            name="banking"
                                        />
                                        <Form.Label htmlFor="Card_Number " className='ms-2 bold h6'>
                                            ICICI
                                            <img src={ICICI} width="30px" className='ms-2' />
                                        </Form.Label>
                                    </InputGroup>
                                </div>
                                <div className='col-3 pt-2 mx-auto'>
                                    <InputGroup controlId="" className='border p-2 '>
                                        <Form.Check
                                            type="radio"
                                            id="custom-switch"
                                            name="banking"
                                        />
                                        <Form.Label htmlFor="Card_Number " className='ms-2  bold h6'>
                                            AXIS
                                            <img src={Axis} width="30px" className='ms-2' />
                                        </Form.Label>
                                    </InputGroup>
                                </div>
                                <div className='col-6 mt-3'>
                                    <h6>Other Banks</h6>
                                    <Form.Select name="banking" class="bankSelectWrap" id="selectedBank">
                                        <option value="">Select Bank</option>
                                        <option value="AXIS">Axis Bank</option>
                                        <option value="BOBC">Bank of Baroda Corporate</option>
                                        <option value="MAHARASHTRA">Bank of Maharashtra</option>
                                        <option value="CNB">Canara Bank</option>
                                        <option value="CSB">Catholic Syrian Bank</option>
                                        <option value="CNTRL">Central Bank of India</option>
                                        <option value="CUB">City Union Bank</option>
                                        <option value="COP">Corporation Bank</option>
                                        <option value="DEN">Dena Bank</option>
                                        <option value="DHAN">Dhanlaxmi Bank</option>
                                        <option value="FDEB">Federal Bank FedNet</option>
                                        <option value="HDFC">HDFC Bank</option>
                                        <option value="HSBC">HSBC Bank</option>
                                        <option value="ICICI">ICICI Bank</option>
                                        <option value="IDFC">IDFC Bank</option>
                                        <option value="INB">Indian Bank</option>
                                        <option value="IIB">Indusind Bank</option>
                                        <option value="KVB">Karur Vysya Bank</option>
                                        <option value="KMB">Kotak Mahindra Bank</option>
                                        <option value="OBC">Oriental Bank of Commerce</option>
                                        <option value="PNB">Punjab National Bank</option>
                                        <option value="SCB">Standard Chartered Bank</option>
                                        <option value="SBI">State Bank Of India</option>
                                        <option value="SYNDICATE">Syndicate Bank</option>
                                        <option value="TMB">TamilNadu Mercantile Bank</option>
                                        <option value="SIB">The South Indian Bank</option>
                                        <option value="UBI">Union Bank of India</option>
                                        <option value="VJYA">Vijaya Bank</option>
                                        <option value="YES">Yes Bank</option>
                                    </Form.Select>
                                </div>
                                <div className="my-3">
                                    <Button onClick={() => setModalShow(true)}>Pay Now</Button>
                                    <p>By proceeding ,You accept Hojoy <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Card.Body>
        </Card>
    )
}

const PaymentDetails = () => {

    return (
        <>
            <HotelDetails />
            <PaymentMethod />
        </>
    )
}

export default PaymentDetails