import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
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
import { useSelector, useStore, useDispatch } from "react-redux";
import Logo from '../../../asset/images/logo.png'
import { loadBusBook } from '../../../store/actions/busbook';
import moment from "moment";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";


const TripDetails = () => {

    // dispatch payload

    // store access
    const businfo = useSelector(state => state.BusInfo);
    // console.log("trip-info.....", businfo.data[0].Result)

    const busbook = useSelector(state => state.BusBook);
    // console.log("Bus Booking ..........details....", busbook.data[0])


    return (
        <Card>
            {(busbook.data?.length > 0) ? (
                <div className='container m-3'>

                    <p><span className='h5 fw-bold'>{businfo.data.Result.TravelName}</span> &nbsp;&nbsp;<span className='fs-6 text-secondary'>{businfo.data.Result.BusType}</span></p>
                    <div className='row border container' style={{ backgroundColor: "lightgrey" }}>
                        <div className='col-6' style={{ fontSize: "11px" }}>
                            <h6 className='fw-bold'><span style={{ fontSize: "12px" }} className="text-secondary">{businfo.data.Result.DepartureTime}</span><br />{businfo.data.Result.source_city}</h6>
                        </div>
                        <div className='col-6'>
                            <h6 className='fw-bold'><span style={{ fontSize: "12px" }} className="text-secondary">{businfo.data.Result.ArrivalTime}</span><br />{businfo.data.Result.destination_city}</h6>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-3'>Travellers: </div>
                        <div className='col'>
                            <ul type="none">
                                <li style={{ marginLeft: "-35px" }}>
                                    <table>
                                        <tr>
                                            {(busbook.data[0].Passenger.length > 0) ? (busbook.data[0].Passenger).map((book, index) => (
                                                <td className='me-2'> {book.FirstName} &nbsp;&nbsp;&nbsp;</td>
                                            )) : null}
                                        </tr>
                                    </table>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3'>Primary Contact: </div>
                        <div className='col'>

                            <Row>
                                {(busbook.data[0].Passenger.length > 0) ? (busbook.data[0].Passenger).map((book, index) => (

                                    <Col className='me-2'> {book.FirstName} <br />
                                        {book.Email} <br />
                                        {book.Phoneno} <br />
                                        {book.Seat.SeatName}</Col>


                                )) : null}
                            </Row>


                        </div>
                    </div>
                </div>
            ) :null} {/* <div className="w-100 h-100 rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "80px", paddingBottom: "80px", paddingLeft: "400px", fontSize: "20px", color: "darkblue" }}>
                <span className="spinner-border spinner-border-sm"></span>
                &nbsp;Loading....</div> */}   
        </Card>
    )
}

const PaymentMethod = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const Bus = useSelector(state => state.Bus);
    const store = useStore()

    // Store access to the current state
    const busbook = useSelector(state => state.BusBook);
    // console.log("Bus Booking detatils for payment....", busbook.data[0].Passenger)

    const businfo = useSelector(state => state.BusInfo);
    // console.log("trip-info...invoice", businfo.data[0])

    const buslist = useSelector(state => state.Bus);
    // console.log("triplist invoice...", buslist.data.result[1].busdetails[0].ArrivalTime)

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
                                                <h6 className='fw-bold'>Enter VPA</h6>
                                                <p className="">
                                                    You must have a Virtual Payment Address.
                                                    <a href="" target="_blank"> Why? </a>
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
                                        <Button onClick={() => setModalShow(true)}>Pay ₹{Bus.data.result[1].busdetails[0].Price.BasePrice} </Button>
                                        <p>By proceeding ,You accept Hojoy's <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>
                                    </div>

                                </div>
                                <div className="col-5">
                                    <div className="container border w-75 text-center p-3">
                                        <p>SCAN &amp; PAY Using your banking UPI app</p>
                                        <img src={QrCode} width="180px" />
                                    </div>
                                </div>
                            </div> */}

                            <Modal
                                show={modalShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                onHide={() => setModalShow(false)}
                            >
                                {(busbook.data?.length > 0) ? (
                                    <>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">

                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="px-4" ref={printRef}>
                                            <div className='bookingConfirmedDetails'>
                                                <div className='border mb-3' style={{ backgroundColor: "#D0F0C0", borderRadius: "20px" }}>
                                                    <div className='ms-3 p-2'>
                                                        <h5>Congratulations</h5>
                                                        <h6 className='text-muted ms-3'>Your Booking Confirmed  successfully</h6>
                                                    </div>
                                                </div >
                                                <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                    <Col xs="5">
                                                        <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }}></img>
                                                    </Col>
                                                    <Col>
                                                        <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                    </Col>
                                                </Row>

                                                <div className='m-3'>
                                                    <p><b>Booking Id :</b> {busbook.data[1].Result.TraceId}</p>
                                                    <p><b>BookingStatus :</b><span className='text-success'> {busbook.data[1].Result.BusBookingStatus}</span></p>

                                                    <p><b>Paid Amount :<span className=' text-danger'> ₹{busbook.data[1].Result.InvoiceAmount}</span></b></p>
                                                </div>

                                                <Table bordered hover size='sm'>
                                                    <thead >
                                                        <tr className="bg-success text-light text-center">
                                                            <th colspan='2'>Bus Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Bus Name</td>
                                                            <td>{businfo.data.Result.TravelName}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Boarding Point </td>
                                                            <td> {buslist.data.result[0].source_city}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dropping Point </td>
                                                            <td> {buslist.data.result[0].destination_city}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dispatch Time </td>
                                                            <td> {moment(buslist.data.result[1].busdetails[0].DepartureTime).format("MMM DD YYYY HH:mm")}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Arraivel Time</td>
                                                            {/* <td> {buslist.data.result[0].ArrivalTime}</td> */}
                                                            <td>{moment(buslist.data.result[1].busdetails[0].ArrivalTime).format("MMM DD YYYY HH:mm")}</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>

                                                <Table bordered hover size='sm'>
                                                    <thead >
                                                        <tr className="bg-success text-light text-center">
                                                            <th colspan='4'>Traveler Details</th>

                                                        </tr>

                                                        <tr>
                                                            <th>Traveler Name</th>
                                                            <th>EmailId </th>
                                                            <th>Mobile No </th>
                                                            <th>Seat Number</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {(busbook.data[0].Passenger.length > 0) ? (busbook.data[0].Passenger).map((book, index) => (
                                                            <tr>
                                                                <td> {book.FirstName} {book.LastName}</td>
                                                                <td> {book.Email}</td>
                                                                <td> {book.Phoneno}</td>
                                                                <td> {book.Seat.SeatName}</td>
                                                            </tr>
                                                        )) : null}
                                                    </tbody>
                                                </Table>

                                                <p className='note ps-2' >Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by HOJOY. HOJOY does not levy any cancellation charges.</p>
                                            </div>
                                        </Modal.Body>
                                    </>
                                ) : <div className="w-100 h-100 rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "80px", paddingBottom: "80px", paddingLeft: "350px", fontSize: "20px", color: "darkblue" }}>
                                    <span className="spinner-border spinner-border-sm"></span>
                                    &nbsp;Loading....</div>}
                                <Modal.Footer>
                                    <Button variant="success" onClick={handleDownloadImage}>Download</Button>
                                </Modal.Footer>
                            </Modal>


                        {/* </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='mt-3'>
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
                                        <Button onClick={() => setModalShow(true)}>Pay ₹{Bus.data.result[1].busdetails[0].Price.BasePrice} </Button>
                                        <p>By proceeding ,You accept Hojoy's <span className='link-primary'>User Agreement</span>, <span className='link-primary'>Terms of Service</span> and <span className='link-primary'>Privacy Policy</span></p>
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
            <TripDetails />
            <PaymentMethod />
        </>
    )
}

export default PaymentDetails