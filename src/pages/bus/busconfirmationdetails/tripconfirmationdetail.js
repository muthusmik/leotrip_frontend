import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import icici from '../../../asset/images/bus/ICICI.png';
import bus from '../../../asset/images/bus/bus.png';
import baggage from '../../../asset/images/bus/package.png';
import add from '../../../asset/images/bus/add.png';
import { Form, Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useLocation } from 'react-router-dom';

export const Busdetails = () => {

    // dispatch payload
    const dispatch = useDispatch();
    const location = useLocation();

    // store access
    // const businfo = useSelector(state => state.BusInfo);
    // const store = useStore()
    // console.log("trip-info", businfo.data.Result)
    const [busdata, setBusData] = useState(location.state.state);
    // console.log("setBusData.....", busdata)

    const businfo = useSelector(state => state.BusInfo);
    const buslist = useSelector(state => state.Bus);
    // console.log("trip-list..........", businfo)
    const seat = location.state
    console.log("trip-list..........", seat)

    // Modal views
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [show, setShow] = useState(false);
    return (
        <>
            <Card>
                <div className="container  p-3">
                    <div className='row border-bottom'>
                        <div className='col-9'>
                            <h4 className='text-success fw-bold'>{busdata.TravelName}</h4>
                            <h6 className='small'>{busdata.BusType}</h6>
                        </div>
                        <div className="col-3 mb-5">
                            <a><small className='text-success h6' onClick={handleShow}>Cancellation Policy</small></a>
                            <Modal show={show} onHide={handleClose} centered size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title className='h5 fw-bold text-danger'>Cancellation Policy</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Table bordered hover >
                                        <thead>
                                            <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold", color: "green" }}>
                                                <td>Time Slab</td>
                                                <td>Cancellation Charges</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {busdata.CancellationPolicies && busdata.CancellationPolicies.map((data, index) => (
                                                <>
                                                    <tr key={index}>
                                                        <td className='h6 small'>{data.PolicyString}</td>
                                                        <td className='h6 small text-muted'>₹ {data.CancellationCharge}</td>
                                                    </tr>
                                                </>
                                            ))}
                                            <tr><td className='note text-danger' colspan="2">Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by HOJOY. HOJOY does not levy any cancellation charges.</td></tr>
                                        </tbody>
                                    </Table>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <p className='small mt-2'>Seats Selected
                            <span className='h6'> {seat.seatNum.length > 0 && seat.seatNum.map((num, index) => (
                                <>
                                    {(index < (seat.seatNum.length - 1)) ? <span>{num},</span> : <span>{num}</span>}
                                </>
                            ))}</span>
                        </p>
                    </div>
                </div>

            </Card>

            <div className='row mt-2'>
                <div className='col-6'>
                    <Card >
                        <Card.Body>
                            <div className="container">
                                <h6>Boarding Point Details</h6>
                                <h6 className='fw-bold text-danger'>{seat.boardingPoints}</h6>
                                <p className="mb-0" style={{ fontSize: "12px" }}>{seat.boardLocation}</p>
                                <Badge bg="primary">{moment(seat.boardTime).format("MMM DD YYYY hh:mm a")}</Badge>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-6'>
                    <Card>
                        <Card.Body>
                            <div className="container">
                                <h6>Dropping Point Details</h6>
                                <h6 className='fw-bold text-danger'>{seat.droppingPoints}</h6>
                                <p className="mb-0" style={{ fontSize: "12px" }}>{seat.dropLocation}</p>
                                <Badge bg="primary mt-0">{moment(seat.dropTime).format("MMM DD YYYY hh:mm a")}</Badge>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <Card className='mt-2 text-success' style={{ backgroundColor: "#e6ffe6" }}>
                <Card.Body>
                    <p className='fs-6'>You made the right choice. Travellers liked this bus for</p>
                    <Badge bg="success">Cleanliness</Badge>
                    <Badge bg="success ms-2">Punctuality</Badge>
                </Card.Body>
            </Card>
        </>
    )
}

export const Insurance = () => {


    // Insurance state value


    // const [errormsg, setErrormsg] = useState('');

    // const [insurance,setInsurance] = useState (" ");

    // const handleInsurance = (event) => {   

    //     setInsurance(event.target.value);
    //     if (e.target.value !== '') {
    //         setErrormsg('');
    //       }
    // } 

    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header><h5>Trip insurance at ₹15 per person</h5></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <div className='row'>
                                <div className='col-2'>
                                    <img src={icici} alt="img" />
                                </div>
                                <div className='col mt-2'>
                                    <h6>ICICI Lombard's Travel Insurance</h6>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-4 text-center'>
                                    <img src={bus} alt="img" height="50px" />
                                    <p>Trip Cancellation</p>
                                    <Badge pill bg="success" text="light" className='px-4'>Upto ₹1500</Badge>
                                </div>
                                <div className='col-4 text-center'>
                                    <img src={baggage} alt="img" height="50px" />
                                    <p> Loss of baggage</p>
                                    <Badge pill bg="success" text="light" className='px-4'>Upto ₹3000</Badge>
                                </div>
                                <div className='col-4 text-center'>
                                    <img src={add} alt="img" height="50px" />
                                    <p>Personal accident</p>
                                    <Badge pill bg="success" text="light" className='px-4'>Upto ₹6,00,000</Badge>
                                </div>
                            </div>
                            <div className='row mt-5 mb-3'>
                                <Form.Check.Label><Form.Check inline name="group1" type="radio" /* onChange={handleInsurance} */ />Yes, secure my trip. I agree to the given</Form.Check.Label>
                                <Form.Check.Label><Form.Check inline name="group1" type="radio" /* onChange={handleInsurance} */ />No, I am willing to risk my trip</Form.Check.Label>
                            </div>
                            <Badge bg="primary" text="light" className='px-4'>Required</Badge>
                            &nbsp;&nbsp;Please select one of the above option
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}


function renderContent(tab) {
    switch (tab) {
        case "business":
            return <Card>
                <Card.Body>
                    <Form>

                        <div class="row">
                            <div class="col-4">
                                <Form.Group className="mb-3" >
                                    <Form.Label><h6>GST Number</h6></Form.Label>
                                    <Form.Control type="text" placeholder="EG: 22AAAAA0000A1Z5" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid GST Number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div class="col-4" >
                                <Form.Group className="mb-3" >
                                    <Form.Label><h6>Company Name</h6></Form.Label>
                                    <Form.Control type="text" placeholder="Company Name" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Company Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div class="col-4">
                                <Form.Group className="mb-3" >
                                    <Form.Label><h6>Business Email</h6></Form.Label>
                                    <Form.Control type="text" placeholder="Business Email ID" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Business Email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="">
                                <Form.Group className="mb-3" >
                                    <Form.Label><h6>Company Address</h6></Form.Label>
                                    <Form.Control type="text" placeholder="Company Address" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Company Address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <Form.Group className="mb-3" >
                                    <Form.Label><h6>Phone Number</h6></Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Phone Number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div class="col-4">
                                <Form.Group className="mb-3" >
                                    <Form.Label><h6>Country</h6></Form.Label>
                                    <Form.Control type="text" placeholder="Country" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Country.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div class="col-4">
                                <Form.Group className="mb-3" >
                                    <Form.Label><h6>State</h6></Form.Label>
                                    <Form.Control type="text" placeholder="State" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid State.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>;

        default:
            return null;
    }
}

export const TripType = () => {
    const [value, setValue] = React.useState(1);
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

    const onChange = e => {
        setValue(e.target.value);
    };
    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header><h5>Trip Type</h5></Accordion.Header>
                    <Accordion.Body>
                        <Form noValidate validated={validated}>

                            <Form.Group onChange={onChange} value={value}>
                                <div className="row">
                                    <div className="col-3">
                                        <Form.Check
                                            className="h6 pb-3 fw-bold"
                                            label="Personal"
                                            name="trip_type"
                                            type="radio"
                                            value="personal"
                                            selected={true}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <Form.Check
                                            className="h6 pb-3 fw-bold"
                                            label="Business"
                                            name="trip_type"
                                            type="radio"
                                            value="business"
                                        />
                                    </div>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid State.
                                    </Form.Control.Feedback>
                                </div>
                                <div className='col-3 text-end'>

                                </div>
                            </Form.Group>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div>
                {renderContent(value)}
            </div>

        </>
    )
}

