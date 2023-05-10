import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import faPlane from '../../../asset/images/flight/take.png';
import Button from 'react-bootstrap/Button';
import { Badge, Modal, Table, Row, Col } from 'react-bootstrap';
import pay from '../../../asset/images/payment/newpayment.png';
import QrCode from '../../../asset/images/payment/qr-code.png';
import Form from 'react-bootstrap/Form';
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
import moment from "moment";
import './payment.scss'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";




const TripDetails = () => {

    const DestinationData = JSON.parse(localStorage.getItem('destinationdata'));
    // store access
    const flightinfo = useSelector(state => state.FlightOnewayInfo);

    const FlightBook = useSelector(state => state.FlightOneWayBook);
    // console.log("i am flightbooklcc", FlightBook)

     /*    # Inner Card Duration */

     const HandleBtw = (value) => {

        var Hours = Math.floor(value.Duration / 60)
        var minute = value.Duration % 60
        var duration = Hours + "h:" + minute + "m"
        return (
            duration
        )

    }

    return (
        <Card>
            {(flightinfo.data) ? (
                <div class="container">

                    {flightinfo.data[0]?.Results?.Segments[0].map((data, index) => (
                        <Card className='my-3'>
                            <Card.Body>
                                <div class="row" key={index}>
                                    <div class="col-2 small pt-3">
                                        <img src="https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/6E.png" width="40px" alt="flights" class="common-elementsstyles__CarrierLogo-sc-ilw4bs-12 drVxdV" />
                                        <h6 className='text-muted small'>{data.Airline.AirlineName}<br />{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</h6>
                                    </div>
                                    <div class="col-3 small">
                                        <p>{moment(data.DepTime).format("ddd MMM DD YYYY")} <br />
                                            <b className='h4'>{data.Origin.AirportCode}&nbsp;
                                                <span className='text-muted'>{moment(data.DepTime).format("HH:MM")}</span>
                                            </b><br />
                                            <span className='text-muted'>{data.Origin.AirportName}</span></p>
                                    </div>
                                    <div className="col-3 small">
                                        <div>
                                            <div className="justifyBetween alignItemsCenter d-flex">
                                                <div className="hVaJvo"></div>.....
                                                <p className="text-danger mt-1">{HandleBtw(flightinfo.data[0]?.Results?.Segments[0][index])}</p>.....
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" loading="lazy" class="Flight__FlightIcon-sc-1w228os-0 eiNikk"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg></div>
                                            {/* <h6 className='mt-3'>{moment({}).seconds(flightinfo.data[0].Results.Segments[0][0].Duration).format("HH:mm")}</h6> */}
                                        </div>
                                    </div>
                                    <div className='col-4 small'>
                                        <p>{moment(data.ArrTime).format("ddd MMM DD YYYY")} <br />
                                            <span className='h4'>{data.Destination.AirportCode}&nbsp;
                                                <span className='text-muted'>{moment(data.ArrTime).format("HH:MM")}</span>
                                            </span>
                                            <br /><span className='text-muted'>{data.Destination.AirportName}</span></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

            ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "280px", paddingLeft: "400px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                <span className="spinner-border spinner-border-sm"></span>
                &nbsp;Loading....
            </div>}
        </Card>
    )
}

const PaymentMethod = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const flightinfo = useSelector(state => state.FlightOnewayInfo);
    // console.log("...........flight info..........", flightinfo);

    const FlightBook = useSelector(state => state.FlightOneWayBook);


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
                    <>
                        {/* <Accordion.Item eventKey="1" className='mt-3'>
                        <Accordion.Header><h5><img src={upi} width="40px" alt='banking' />UPI</h5></Accordion.Header>
                        <Accordion.Body >
                            <div className="row my-2 mb-5 border">
                                <div className="col-2">
                                    <img src={Upi} width="90px" className='m-3' alt='banking' />
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
                                        <Button variant="success" onClick={() => setModalShow(true)}>Pay 
                                        {flightinfo.data[0].Results.Fare.Currency} {flightinfo.data[0].Results.Fare.PublishedFare} 
                                        </Button>
                                        <p>By proceeding ,You accept Hojoy <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>
                                    </div>

                                </div>
                                <div className="col-5">
                                    <div className="container border w-75 text-center p-3">
                                        <p>SCAN &amp; PAY Using your banking UPI app</p>
                                        <img src={QrCode} width="180px" alt='banking' />
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
                            <Modal.Header closeButton className='paymentmodel'>
                                <Modal.Title id="contained-modal-title-vcenter paymentmodel" >
                                    <div className='ms-3 p-2  ' >
                                        <h5>Congratulations</h5>
                                        <h6 className='text-muted ms-3'>Your Booking Confirmed  successfully</h6>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="px-4" ref={printRef}>

                                {(FlightBook.data) ? (
                                    (FlightBook.data[0]?.result.Error.ErrorCode == 0) && (FlightBook.data.length > 0) ? (

                                        <div className='bookingConfirmedDetails' >
                                            <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                <Col xs="5">
                                                    <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }} />
                                                </Col>
                                                <Col>
                                                    <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                </Col>
                                            </Row>

                                            <div className='m-3'>
                                                <p><b>Booking Id&nbsp;:</b>{FlightBook.data[0].result.Response.BookingId}</p>
                                                <p><b>PNR &nbsp;: </b><span className='text-success'>{FlightBook.data[0].result.Response.PNR}</span></p>
                                                <p><b>Paid Amount&nbsp;: <span className=' text-danger'>{FlightBook.data[0].result.Response.FlightItinerary.Fare.Currency} {FlightBook.data[0].result.Response.FlightItinerary.Fare.PublishedFare}</span></b></p>
                                                <p><b>Flight Status &nbsp;: </b><span className='text-success'>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].FlightStatus}</span></p>
                                            </div>

                                            <Table bordered hover>
                                                <thead >
                                                    <tr className="bg-success text-light text-center h5">
                                                        <th colspan='2'>Flight Details</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Airline Name</th>
                                                        <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineName})</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Origin</th>
                                                        <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportName})</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Destination </th>
                                                        <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportName})</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Duration</th>
                                                        <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Duration}</td>
                                                        {/* <td>{moment(flightinfo.data[0].Results.Segments[0][0].DepTime).format("ddd MMM DD YYYY")} - {moment(flightinfo.data[0].Results.Segments[0][0].ArrTime).format("ddd MMM DD YYYY")}</td> */}
                                                    </tr>
                                                    {/* <tr>
                                                    <th>Dispatch/Arraivel Time </th>
                                                    <td>{moment(flightinfo.data[0].Results.Segments[0][0].DepTime).format("HH:MM")} - {moment(flightinfo.data[0].Results.Segments[0][0].ArrTime).format("HH:MM")}</td>
                                                </tr> */}
                                                </tbody>
                                            </Table>

                                            <Table bordered hover>
                                                <thead >
                                                    <tr className="bg-success text-light text-center h5">
                                                        <th colspan='5'>Traveler Details</th>
                                                    </tr>
                                                    <tr className="bg-secondary text-light text-center">
                                                        <th>Traveler Name</th>
                                                        <th>Date Of Birth</th>
                                                        <th>Email Id</th>
                                                        <th>Mobile No </th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {(FlightBook.data[0].result.Response.FlightItinerary.Passenger).map((data => (

                                                        <tr>
                                                            <td>{data.Title}.{data.FirstName}</td>
                                                            <td>{data.DateOfBirth}</td>
                                                            <td>{data.Email}</td>
                                                            <td>{data.ContactNo}</td>

                                                        </tr>
                                                    )))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                        <span className="spinner-border spinner-border-sm"></span>
                                        &nbsp;Loading....

                                    </div>
                                ) : null}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={handleDownloadImage}>Download</Button>
                            </Modal.Footer>
                        </Modal>


                        {/* <Accordion.Item eventKey="2" className='mt-3'>

                        <Accordion.Header><h5><img src={gpay} width="40px" alt='banking' /> Google Pay(Tez)</h5></Accordion.Header>
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
                                        <Button variant="success" onClick={() => setModalShow(true)}>Pay


                                         {flightinfo.data[0].Results.Fare.Currency} {flightinfo.data[0].Results.Fare.PublishedFare} 

                                         </Button>

                                        <p>By proceeding ,You accept Hojoy <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>
                                    </div>

                                </div>
                                <div className="col-5">
                                    <div className="container border w-75 text-center p-3">
                                        <p>SCAN &amp; PAY Using your banking UPI app</p>
                                        <img src={QrCode} width="180px" alt='banking' />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>

                    </Accordion.Item> */}

                        <Accordion.Item eventKey="3" className='mt-3'>
                            <Accordion.Header><h5><img src={card} alt='banking' /> Debit/Credit Card</h5></Accordion.Header>
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
                            <Accordion.Header><h5><img src={globe} width="30px" alt='banking' /> Netbanking</h5></Accordion.Header>
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
                                                <img src={SBI} width="30px" className='ms-2' alt='banking' />
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
                                                <img src={HDFC} width="30px" className='ms-2' alt='banking' />
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
                                                <img src={ICICI} width="30px" className='ms-2' alt='banking' />
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
                                                <img src={Axis} width="30px" className='ms-2' alt='banking' />
                                            </Form.Label>
                                        </InputGroup>
                                    </div>
                                    <div className='col-6 mt-3'>
                                        <h6>Other Banks</h6>
                                        <Form.Select class="bankSelectWrap" id="selectedBank">
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
                                        <Button className='w-100' onClick={() => setModalShow(true)}>Pay Now

                                            {/* {flightinfo.data[0].Results.Fare.Currency} {flightinfo.data[0].Results.Fare.PublishedFare}  */}
                                        </Button>
                                        <p>By proceeding ,You accept Hojoy <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </>
                </Accordion>
            </Card.Body>
        </Card>
    )
}

const PaymentDetails = () => {

    return (
        <>
            <TripDetails />
            <PaymentMethod />
        </>
    )
}

export default PaymentDetails