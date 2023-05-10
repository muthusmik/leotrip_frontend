import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import Seater from '../../../asset/images/car/seat.png';
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
import { useLocation } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";


const TripDetails = () => {


    const location = useLocation();

    //   console.log(location, "i am about paymentdata")

    const [pricefare, setPricefare] = React.useState(location.state.state.carfare)

    const carbook = useSelector(state => state.Car);
    const store = useStore()

    // console.log("hi iam here", carbook)


    

    return (
        <Card>

            <div className=' m-3'>
                <div className="container">
                    <div className='row'>
                        <div className='col-3 '>
                            <Card>
                                <img src={pricefare.Image} height="160px" width="190px" />
                            </Card>
                        </div>
                        <div className='col-8'>
                            <div >
                                <div >
                                    <h5 className='fw-bold'>
                                        {pricefare.Category}
                                    </h5>
                                    {/* <h6 className='text-danger ms-2'>{pricefare.CarNos}</h6> */}
                                </div>
                                <div className='small text-muted'>
                                    <FontAwesomeIcon icon={faSnowflake} className="ms-2" />
                                    <span>{(pricefare.AirConditioner) ? <>Ac</> : <>Non Ac</>}</span>
                                    <FontAwesomeIcon icon={faSuitcaseRolling} className="ms-2" />
                                    <span>{pricefare.LuggageCapacity}</span>
                                    <img src={Seater} alt='img' className='ms-2' style={{ width: "20px", height: "20px", marginLeft: "5px" }} />&nbsp;
                                    <span>{pricefare.SeatingCapacity} passengers allowed</span>
                                </div>
                                <div>
                                    <h6 className='mt-4'>TripType : <span className='text-primary small'>{carbook.data[0].RequestData.Trip}</span></h6>
                                </div>
                                <div className='mt-3'>
                                    <ul type="none ms-0">
                                        <li>
                                            <div className='d-flex'>
                                                <p className='mb-0'>From City:{carbook.data[0].FromCity}</p>&nbsp;&nbsp;
                                                <p className='mt-0'>To City:{carbook.data[0].ToCity}</p>&nbsp;&nbsp;
                                                <p className='text-primary'>({carbook.data[0]&& carbook.data[0].RequestData.CityData[0].Name}<span className='text-dark'> To </span>{carbook.data[0].RequestData.CityData[1].Name})</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex'>
                                                <p>PickUp Date :<span className='fw-bold'> {moment(carbook.data[0].RequestData.PickUpDate).format("MMM DD YYYY")}</span></p>&nbsp;&nbsp;,
                                                <p>Drop Date :<span className='fw-bold'> {moment(carbook.data[0].RequestData.DropDate).format("MMM DD YYYY")}</span></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Card>
    )
}

const PaymentMethod = () => {


    const [modalShow, setModalShow] = React.useState(false);

    const carbookdetails= useSelector(state =>state.CarBook)

    // console.log("car conformation",carbookdetails)

    const location = useLocation();

    const [pricefare, setPricefare] = React.useState(location.state.state.carfare)

    const carbook = useSelector(state => state.Car);

    // console.log("iam good",pricefare)

    
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
                                        <Button onClick={() => setModalShow(true)}>Pay Now</Button>
                                        <p>By proceeding ,You accept Hojoy's <a href=''>User Agreement</a>, <a href=''>Terms of Service</a> and <a href=''>Privacy Policy</a></p>

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
                                {(carbookdetails.data?.length > 0) ? (
                                <>
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">

                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="px-4" ref={printRef}>
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
                                                <p><b>Booking Id :{carbookdetails.data.BookingID}</b></p>
                                                <p><b>BookingStatus :</b><span className='text-success'>{carbookdetails.data.Status} </span></p>

                                                <p><b>Paid Amount :<span className=' text-danger'>₹{pricefare.Fare.TotalAmount}</span></b></p>
                                            </div>

                                            <Table bordered hover size='sm'>
                                                <thead >
                                                    <tr className="bg-success text-light text-center">
                                                        <th colspan='2'>CAR Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Car Name</td>
                                                        <td>{pricefare.Category}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Boarding Point</td>
                                                        <td>{carbook.data[0].RequestData.CityData[0].Name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dropping Point </td>
                                                        <td>{carbook.data[0].RequestData.CityData[1].Name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dispatch Time </td>
                                                        <td>00:00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Arraivel Time</td>
                                                        <td>00:00</td>
                                                        <td></td>
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

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Guru </td>
                                                        <td>Guru456@gmail.com </td>
                                                        <td>9344115426</td>

                                                    </tr>

                                                </tbody>
                                            </Table>

                                            <p className='note ps-2' >Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by HOJOY. HOJOY does not levy any cancellation charges.</p>
                                        </div>
                                    </Modal.Body>
                                </>
                                ) : <div className="w-100 h-100 rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "280px", paddingLeft: "400px", fontSize: "20px", color: "darkblue" }}>
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
                            <div className="col-2 ">
                                <img src={gpay} width="90px" className='m-3' />
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
                                        <Button onClick={() => setModalShow(true)}>Pay Now </Button>
                                        <p>By proceeding ,You accept Hojoy's <a href=''>User Agreement</a>, <a href=''>Terms of Service</a> and <a href=''>Privacy Policy</a></p>
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