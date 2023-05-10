import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Form, Row, Col, Accordion } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import shieldCheck from '../../../asset/images/flight/shield.png'
import wait from '../../../asset/images/flight/wait.jpg';
import { Badge, Button } from 'react-bootstrap';
import car from '../../../asset/images/flight/traffic.png';
import info from '../../../asset/images/flight/info.png';
import check from '../../../asset/images/flight/checked.png';
import upsign from '../../../asset/images/flight/up-arrow.png';
import heritage from '../../../asset/images/flight/heritage.png';
import heart from '../../../asset/images/flight/heart.png';
import earth from '../../../asset/images/flight/earth.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './flightconformation.scss';
import CountryCode from '../../../component/countrycode/countrycode';
import { useLocation } from 'react-router-dom';




export const Insurance = () => {
    return (
        <>
            <Card className='mt-3'>
                <div className='container row'>
                    <div className='col-5'>
                        <img src={wait} width="340px" alt='hojoy' />
                    </div>
                    <div className='col-7 p-3'>
                        <h5>TRAVEL INSURANCE </h5>
                        <h6>24HR SETTLEMENT | EASY CLAIM PROCESS</h6>
                        <div className='row'>
                            <div className='col h6 text-center'>
                                <div className='border rounded-top border-success p-1'>Trip Delay</div>
                                <div className='border rounded-bottom bg-success text-light border-success p-1'>FLAT ₹1000</div>
                            </div>
                            <div className='col h6 text-center'>
                                <div className='border rounded-top border-success py-1'>Trip Cancellation</div>
                                <div className='border rounded-bottom bg-success text-light border-success p-1'>FLAT ₹2500</div>
                            </div>
                            <div className='col h6 text-center'>
                                <div className='border rounded-top border-success p-1'>Missed Flight</div>
                                <div className='border rounded-bottom bg-success text-light border-success p-1'>FLAT ₹5000</div>
                            </div>
                            <p style={{ color: "#3A14BB" }}><img src={shieldCheck} className="me-2" alt='hojoy' />Over 7000 travelers secure their trip daily</p>
                        </div>
                        <Button variant="outline-primary w-50">Insure for ₹249/pax</Button>
                        <Button variant="light w-50">I'll Risk it</Button>
                    </div>
                </div>

            </Card>

        </>
    )
}

export const Transfer = () => {
    return (
        <Card className='mt-3'>
            <Card.Header className='bg-white'>
                <h5 className='bold'>HOJOY EXCLUSIVE</h5>
                <Badge bg="danger">Prices in this section are valid only if you book now. They will be higher if you book later.</Badge>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className='col-4 text-center'>
                        <h4><img src={car} width="40" className='me-4 fw-bold' alt='hojoy' />Airport Transfer</h4>
                    </div>
                    <div className='col-6'>
                        <img src={info} width="20" className='me-4 fw-bold' alt='hojoy' />
                    </div>
                </div>
                <div className="row mt-3 px-5">
                    <div className='col'>
                        <Badge bg="secondary text-wrap" ><img src={check} className="me-2" width="20" alt='hojoy' />Sanitised cabs with healthy drivers</Badge>
                    </div>
                    <div className='col-3'>
                        <Badge bg="secondary text-wrap"><img src={check} className="me-2" width="20" alt='hojoy' />Instant boarding at airport. No long queues!</Badge>
                    </div>
                    <div className='col-3'>
                        <Badge bg="secondary text-wrap"><img src={check} className="me-2" width="20" alt='hojoy' />Free cancellation until you confirm address</Badge>
                    </div>
                    <div className='col-3'>
                        <Badge bg="secondary text-wrap"><img src={check} className="me-2" width="20" alt='hojoy' />Environment friendly electric cabs available</Badge>
                    </div>
                </div>
                <div className="row mt-3 px-3">
                    <div className='col-1 my-auto text-end'>
                        <Form.Check
                            className="h5"
                            type="checkbox"
                        />
                    </div>
                    <div className='col-6'>
                        <InputGroup>
                            <Form.Label><span className='h6 me-2'>Cab from Chennai airport</span> </Form.Label>
                            <Form.Select size="sm" className='border-primary'>
                                <option>Chennai</option>
                                <option>Mahabalipuram</option>
                                <option>Arakkonam</option>
                                <option>Kanchipuram</option>
                                <option>Vellore</option>
                                <option>Walajapet</option>
                                <option>Pondicherry</option>
                                <option>Srikalahasti</option>
                                <option>Tirupati</option>
                                <option>Nellore</option>
                                <option>Tiruvannamalai</option>
                                <option>Bangalore</option>
                                <option>Yercaud</option>
                            </Form.Select>
                            <span className='small'>56 kms included. Extra kms to be paid in cash.</span>
                        </InputGroup>
                    </div>
                    <div className='col-2'>
                        - ₹679
                    </div>
                </div>
                <div className="container mt-3 px-3">
                    <img src={upsign} width="20" className='ms-3' alt='hojoy' />
                    <span className='text-muted'>Exact location will be collected post payment.</span>
                </div>
            </Card.Body>
            <Card.Footer className='bg-white'>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2">
                                <img src={heart} className="me-2" width="45" alt='hojoy' />
                            </div>
                            <div className="col-9">
                                <h5>Covid Relief</h5>
                                <h6 className='text-muted small'>Make a difference by contributing towards COVID-19 pandemic relief work.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2">
                                <img src={earth} className="me-2" width="45" alt='hojoy' />
                            </div>
                            <div className="col-10">
                                <h5>Green Initiative</h5>
                                <h6 className='text-muted small'>Offset your carbon footprint by planting saplings. We have already planted over a million saplings.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2">
                                <img src={heritage} className="me-2" width="45" alt='hojoy' />
                            </div>
                            <div className="col-10">
                                <h5>Save our Heritage</h5>
                                <h6 className='text-muted small'>We work with local bodies to maintain cleanliness, build toilets and nurture our environment.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Footer>
        </Card >
    )
}

export const TravelerDetails = ({ onhandle }) => {

    const [guestDetails, setGuestDetails] = useState([])
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    useEffect(() => {
        let varr = [];
        const value = traveler.adult + traveler.children + traveler.Infants;
        for (var i = 0; i < value; i++) {
            varr.push({
                "first_name": "",
                "last_name": "",
                "title": "Mr",
                "gender": "1",
                "DOB": "",
            })
        }
        setGuestDetails(varr)
    }, [])

    const handleValideValue = (event, type, idx) => {
        setValidated(false);
        let newFormValues = [...guestDetails];
        newFormValues[idx][event.target.name] = event.target.value;
        setGuestDetails(newFormValues);
        console.log("guestDetails", guestDetails)
    }
    console.log("guestDetails", guestDetails)
    const location = useLocation()
    const [view, setView] = useState(false)
    const [validated, setValidated] = useState(false)
    const [error, setError] = useState(false)
    const handleSubmit = () => {
        const value = traveler.adult + traveler.children + traveler.Infants;
        if (email === "" || number === "") {
            setError("provide valid email or mobile number")
            onhandle(false)
        }
        else if (guestDetails) {
            for (let i = 0; i < value; i++) {
                for (var key in guestDetails[i]) {
                    if (guestDetails[key] !== null && guestDetails[key] != "") {
                        setError("please enter valid guest details")
                        onhandle(false)
                    }
                    else {
                        setError("  ")

                    }
                }
            }
        }
        else {
            setError("  ")
            onhandle(true)
        }
    }
    const handleValidate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        if (form.checkValidity() === true) {

            setValidated(false);
        }
        onhandle(form.checkValidity())
    };
    const traveler = location.state.state
    return (
        <>
            <Form noValidate validated={validated} onClick={handleValidate}>
                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1" className='mt-3'>
                        <Accordion.Header><h5>Traveler details</h5></Accordion.Header>
                        <Accordion.Body>
                            <Card className='border-light'>
                                <Card.Body>
                                    <Accordion defaultActiveKey={0}>
                                        {[...Array(traveler?.adult)].map((value, index) => {
                                            return (
                                                <Accordion.Item eventKey={index} key={index} >
                                                    <Accordion.Header>
                                                        <div className='row w-100'>
                                                            <div className='col-9 my-3'>
                                                                <h6>Adult {index + 1} <br />
                                                                    {/* <span className='small'>(age)</span> */}
                                                                </h6>
                                                            </div>
                                                            <div className='col-2' >
                                                                <p className='mt-3'></p>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-inline" key={index}>
                                                            <Row className='mt-4'>
                                                                <Col xs={2}>
                                                                    <Form.Label>Title</Form.Label>
                                                                    <Form.Select name="title" aria-label="Gender" onChange={(e) => handleValideValue(e, "adult", index)} required>
                                                                        <option value="Mr">Mr</option>
                                                                        <option value="Ms">Ms</option>
                                                                    </Form.Select>
                                                                    <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
                                                                </Col>
                                                                <Form.Group as={Col} controlId="validation2">
                                                                    <Form.Label>First Name</Form.Label>
                                                                    <Form.Control
                                                                        placeholder="Enter Fist Name"
                                                                        aria-label="Name"
                                                                        name="first_name"
                                                                        // value={formValues[index].first_name}
                                                                        onChange={(e) => handleValideValue(e, "adult", index)}
                                                                        pattern="[A-Za-z]{3,}"
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter the first Name</Form.Control.Feedback>
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="validation3">
                                                                    <Form.Label>Last Name</Form.Label>
                                                                    <Form.Control
                                                                        name="last_name"
                                                                        placeholder="Enter Last Name"
                                                                        aria-label="LastName"
                                                                        // value={formValues[index].last_name}
                                                                        pattern="[A-Za-z]{1,}"
                                                                        onChange={(e) => handleValideValue(e, "adult", index)}
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter the Last Name</Form.Control.Feedback>
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="validation3">
                                                                    <Form.Label>Date of Birth</Form.Label>
                                                                    <Form.Control
                                                                        name="DOB"
                                                                        placeholder="Enter Date Of Birth"
                                                                        aria-label="DOB"
                                                                        // value={formValues[index].last_name}
                                                                        type="date"
                                                                        onChange={(e) => handleValideValue(e, "adult", index)}
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter your Date Of Birth</Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Row>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })}
                                        {[...Array(traveler?.children)].map((value, index) => {
                                            return (
                                                <Accordion.Item eventKey={traveler?.adult + index + 1} key={index} >
                                                    <Accordion.Header>
                                                        <div className='row w-100'>
                                                            <div className='col-9 my-3'>
                                                                <h6>Child {index + 1} <br />
                                                                    {/* <span className='small'>(age)</span> */}
                                                                </h6>
                                                            </div>
                                                            <div className='col-2' >
                                                                <p className='mt-3'></p>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-inline" key={index}>
                                                            <Row className='mt-4'>
                                                                <Col xs={2}>
                                                                    <Form.Label>Title</Form.Label>
                                                                    <Form.Select name="title" onChange={(e) => handleValideValue(e, "child", index)} aria-label="Gender" required>
                                                                        <option value="Mstr">Mstr</option>
                                                                        <option value="Miss">Miss</option>
                                                                    </Form.Select>
                                                                    <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
                                                                </Col>
                                                                <Form.Group as={Col} controlId="validation2">
                                                                    <Form.Label>First Name</Form.Label>
                                                                    <Form.Control
                                                                        placeholder="Enter Fist Name"
                                                                        aria-label="Name"
                                                                        name="first_name"
                                                                        // value={formValues[index].first_name}
                                                                        onChange={(e) => handleValideValue(e, "child", index)}
                                                                        pattern="[A-Za-z]{3,}"
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter the first Name</Form.Control.Feedback>
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="validation3">
                                                                    <Form.Label>Last Name</Form.Label>
                                                                    <Form.Control
                                                                        name="last_name"
                                                                        placeholder="Enter Last Name"
                                                                        aria-label="LastName"
                                                                        // value={formValues[index].last_name}
                                                                        pattern="[A-Za-z]{1,}"
                                                                        onChange={(e) => handleValideValue(e, "child", index)}
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter the Last Name</Form.Control.Feedback>
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="validation3">
                                                                    <Form.Label>Date of Birth</Form.Label>
                                                                    <Form.Control
                                                                        name="DOB"
                                                                        placeholder="Enter Date Of Birth"
                                                                        aria-label="DOB"
                                                                        // value={formValues[index].last_name}
                                                                        type="date"
                                                                        onChange={(e) => handleValideValue(e, "child", index)}
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter your child Date Of Birth</Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Row>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })}
                                        {[...Array(traveler?.Infants)].map((value, index) => {
                                            return (
                                                <Accordion.Item eventKey={(traveler?.adult) + (traveler?.children) + (index + 1)} key={index} >
                                                    <Accordion.Header>
                                                        <div className='row w-100'>
                                                            <div className='col-9 my-3'>
                                                                <h6>Infant {index + 1} <br />
                                                                    {/* <span className='small'>(age)</span> */}
                                                                </h6>
                                                            </div>
                                                            <div className='col-2' >
                                                                <p className='mt-3'></p>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-inline" key={index}>
                                                            <Row className='mt-4'>
                                                                <Col xs={2}>
                                                                    <Form.Label>Title</Form.Label>
                                                                    <Form.Select name="title" onChange={(e) => handleValideValue(e, "infants", index)} aria-label="Gender" required>
                                                                        <option value="Mstr">Mstr</option>
                                                                        <option value="Miss">Miss</option>
                                                                    </Form.Select>
                                                                    <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
                                                                </Col>
                                                                <Form.Group as={Col} controlId="validation2">
                                                                    <Form.Label>First Name</Form.Label>
                                                                    <Form.Control
                                                                        placeholder="Enter Fist Name"
                                                                        aria-label="Name"
                                                                        name="first_name"
                                                                        // value={formValues[index].first_name}
                                                                        onChange={(e) => handleValideValue(e, "infants", index)}
                                                                        pattern="[A-Za-z]{3,}"
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter the first Name</Form.Control.Feedback>
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="validation3">
                                                                    <Form.Label>Last Name</Form.Label>
                                                                    <Form.Control
                                                                        name="last_name"
                                                                        placeholder="Enter Last Name"
                                                                        aria-label="LastName"
                                                                        // value={formValues[index].last_name}
                                                                        pattern="[A-Za-z]{1,}"
                                                                        onChange={(e) => handleValideValue(e, "infants", index)}
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter the Last Name</Form.Control.Feedback>
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="validation3">
                                                                    <Form.Label>Date of Birth</Form.Label>
                                                                    <Form.Control
                                                                        name="DOB"
                                                                        placeholder="Enter Date Of Birth"
                                                                        aria-label="DOB"
                                                                        // value={formValues[index].last_name}
                                                                        type="date"
                                                                        onChange={(e) => handleValideValue(e, "infants", index)}
                                                                        aria-describedby="basic-addon1"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Please Enter your child Date Of Birth</Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Row>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })}
                                    </Accordion>



                                    <Form.Group as={Col} controlId="validation4">
                                        <InputGroup size="sm" className="my-3 w-50">
                                            <Form.Label>Mobile Number</Form.Label>
                                            <InputGroup >
                                                <Form.Select aria-label="Gender" className='w-25'>
                                                    <CountryCode className="ms-2" />
                                                </Form.Select>
                                                <Form.Control
                                                    placeholder="Mobile Number"
                                                    aria-label="Mobile Number"
                                                    aria-describedby="basic-addon1"
                                                    className='w-75'
                                                    name="number"
                                                    onChange={(e) => setNumber(e.target.value)}
                                                    pattern="[0-9]{10}"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">Please Enter the Mobile number</Form.Control.Feedback>
                                            </InputGroup>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="mb-3 w-50">
                                        <Form.Label>Email <span className='small'>(Your E-ticket and updates will be sent here)</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                                        <Form.Control.Feedback type="invalid">Please Enter the email ID</Form.Control.Feedback>
                                    </Form.Group>
                                    <div className="text-end">
                                        {console.log("gu",guestDetails)}
                                        {error!=="" ? <p className='text-danger'>{error}</p> : null}
                                        <Button className='btn btn-primary' onClick={handleSubmit}>Submit</Button>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <InputGroup>
                                        <Form.Check type="checkbox" onInput={() => setView(view => !view)} />
                                        <Form.Label><h6>&nbsp;&nbsp; Enter GST Details <span className='small'>(Optional)</span></h6></Form.Label>
                                    </InputGroup>
                                    {view && (
                                        <>
                                            <div class="row">
                                                <div class="col-4">
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label><h6>GST Number</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="EG: 22AAAAA0000A1Z5" />
                                                    </Form.Group>
                                                </div>
                                                <div class="col-4" >
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label><h6>Company Name</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="Company Name" />
                                                    </Form.Group>
                                                </div>
                                                <div class="col-4">
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label><h6>Business Email</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="Business Email ID" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="">
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label><h6>Company Address</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="Company Address" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label><h6>Phone Number</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="Phone Number" />
                                                    </Form.Group>
                                                </div>
                                                <div class="col-4">
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label><h6>Country</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="Country" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </Card.Footer>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Card className='mt-3 FLIGHTMOREINFO' style={{ lineHeight: "30px" }}>
                    <Card.Body>
                        <div >
                            <div>
                                <Badge className='bg-danger'>
                                    <h6 className='fw-bold'>IMPORTANT INFORMATION</h6>
                                </Badge>
                            </div>
                            <div className='p-2 mt-2' style={{ backgroundColor: "#FFFDD0" }}>
                                <div className="small"><h6>
                                    <img src={shieldCheck} alt='hojoy' />
                                    <span> &nbsp;Please read the below information carefully before proceeding towards making the payment.</span>
                                    <span className='small'>Please note that you have searched onward flight for 09 Oct 2022 but you are booking a suggested flight on 08 Oct 2022. Please review all the details before booking to ensure a great travel experience.</span>
                                </h6>
                                </div>
                            </div>
                            <div >
                                <img src={shieldCheck} alt='hojoy' />
                                <span class="h6 fw-bold ms-2">Trip Related Information<br /></span>
                                <p className='small'>Get 100% Refund on Flight Cancellations: Now get full refund on domestic flight cancellations, for COVID+ cases. No questions asked.
                                    {/* <a href="" target="_blank" class="fb">KNOW MORE</a> */}
                                </p>
                            </div>
                            <div class="marginT15 dF alignItemsCenter">
                                <img src={shieldCheck} alt='hojoy' />
                                <span className='h6 fw-bold ms-2'>COVID Guidelines and Vaccination Requirements</span>
                            </div>
                            <ul className='small'>
                                <li>
                                    <b>Documents Required:</b> All travellers must register on the state website and obtain the TN e-pass. No restrictions apply. However, travellers are advised to carry their COVID vaccination certificate (2 doses taken) or a negative RT-PCR test report with sample taken within 72 hours before arrival.
                                </li>
                                <li>
                                    <b>Test on Arrival:</b> Travellers coming from the states of Maharashtra, Gujarat and Delhi will be tested on arrival. Only symptomatic travellers from other states/UTs will be tested on arrival.
                                </li>
                                <li>
                                    <b>Quarantine Guidelines:</b> All travellers will have to do an institutional quarantine ONLY if the home quarantine facility is not available. 14 days of home quarantine is required for all travellers arriving in Tamil Nadu from other states/UT.
                                </li>
                                <li>
                                    Check the detailed list of travel guidelines issued by Indian States and UTs here
                                    {/* <a href="" target="_blank" > KNOW MORE</a> */}
                                </li>

                            </ul>
                            <img src={shieldCheck} alt='hojoy' />
                            <span class="fw-bold h6 ms-2">Pre-Flight Checklist</span>
                            <ul className='small'>
                                <li>
                                    Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass.
                                </li>
                                <li>
                                    Please reach at least 2 hours prior to flight departure.
                                </li>
                                <li>
                                    The latest DGCA guidelines state that it is compulsory to wear a mask that covers the nose and mouth properly while at the airport and on the flight. Any lapse might result in de-boarding.
                                </li>
                                <li>
                                    One hand bag up to 7 kgs and 55x35x25cm, is allowed per traveller as cabin baggage. Certain personal articles like a lady's purse, laptop bags, etc. can be carried additionally.
                                </li>
                                <li>
                                    Remember to download the baggage tag(s) and affix it on your bag(s).
                                </li>
                            </ul>
                            <p className='small' style={{ lineHeight: "20px" }}>
                                <b>DISCLAIMER:</b>
                                <i>The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued by the State Governments and Airlines before travelling to ensure smooth travel. We accept no liability in this regard. In case you do not meet the required guidelines, the airline or state authorities can stop you from travelling.</i>
                            </p>
                        </div>
                        {/* <div className='mt-2 p-2 w-100 text-left' style={{ backgroundColor: "#e6ffe6" }}>
                        <div className='fs-6 sw-bold container'>
                            Was the informationhelpful?
                            <div class="btn-group ms-4" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                <label class="btn btn-outline-primary" for="btnradio1">YES</label>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btnradio2">NO</label>
                            </div>
                        </div>
                    </div> */}

                    </Card.Body>
                </Card>
            </Form>

        </>
    )
}


