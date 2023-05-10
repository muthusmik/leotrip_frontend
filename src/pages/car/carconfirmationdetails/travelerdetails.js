import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button, Card,Row,Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
const TravelerDetails = ({ handleName, handleNumber, handleEmail, handleLocation }) => {

    const history = useHistory();
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

    const [selectedvalue, onselectvalue] = useState(false);

    return (
        <>

            <Card className='mt-2'>
                <Card.Body >
                    <div className='container'>
                        <h5>Pickup Address</h5>
                        <h6 className='mt-4'>Coimbatore</h6>
                        <Row>
                            <Col xs={8}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Pickup Location</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control type="text" name='location' placeholder="Enter Pickup Location" required onChange={(e) => handleLocation(e)} />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Pickup location.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col xs={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Pickup Time </Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control type="time" name='location' placeholder="Enter Pickup Time " required />
                                         <Form.Control.Feedback type="invalid">
                                            Please Enter Pickup time <span className='small'>(type HH:MM AM/PM)</span>.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>


                    </div>
                </Card.Body>
            </Card>
            <Accordion defaultActiveKey="1">

                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header><h5>Traveller details</h5></Accordion.Header>
                    <Accordion.Body>

                        <InputGroup size="sm" className="mb-3 w-50">
                            <Form.Label>Traveler Name</Form.Label>
                            <InputGroup >
                                <Form.Select aria-label="Gender" className='w-25'>

                                    <option value="1">Mr</option>
                                    <option value="2">Mrs</option>
                                    <option value="3">Miss</option>
                                </Form.Select>
                                <Form.Control
                                    placeholder="Traveler Name"
                                    className='w-75'
                                    required
                                    pattern="[A-Za-z]{3,}"
                                    onChange={(e) => handleName(e)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Traveller Name.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3 w-50">
                            <Form.Label>Mobile Number</Form.Label>
                            <InputGroup >
                                <Form.Select aria-label="Gender" className='w-25'>
                                    <option value="91">+91</option>
                                </Form.Select>
                                <Form.Control
                                    placeholder="Mobile Number"
                                    className='w-75'
                                    required
                                    pattern="[0-9]{10}"
                                    onChange={(e) => handleNumber(e)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Mobile Number.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </InputGroup>
                        <Form.Group className="mb-3 w-50">
                            <Form.Label>Email <span className='small'>(Your E-ticket and updates will be sent here)</span></Form.Label>
                            <Form.Control type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter Email" required onChange={(e) => handleEmail(e)} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Email Address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className='text-end'>
                            <Button className='btn btn-primary fw-bold' onClick={handleValidate}>proceed</Button>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header><h5>Cancellation Policy</h5></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ul >
                                <span>

                                </span>
                                <div>
                                    <h5>After Booking Confirmed</h5>
                                    <p>Free Cancellation</p>
                                </div>
                            </ul>
                            <ul>
                                <span >

                                </span>
                                <div>
                                    <h5>After 1 Oct 11:30 am</h5>
                                    <p>No refund</p>
                                </div>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header><h5>Govt. advisory & safety guidelines</h5></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h4>Safety precautions</h4>
                            <ul class="list">
                                <li>Our cabs are sanitised before pickup however you may request driver to sanitise before your board</li>
                                <li>Maintain social distancing, wear mask &amp; avoid touching your mouth, eyes, nose without sanitising your hands</li>
                                <li>Avoid travel in case you’re experiencing covid-19 symptoms</li>
                                <li>Download Aarogya Setu app on phone for your safety</li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header><h5>Other information</h5></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ul className="list">
                                <li >AC will be switched off in hilly areas</li>
                                <li>If you opt for partial payment, please pay the balance to the driver within 45 min from pickup time</li>
                                <li>Only one pick-up, one drop &amp; one pit stop for meal is included</li>
                            </ul>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default TravelerDetails