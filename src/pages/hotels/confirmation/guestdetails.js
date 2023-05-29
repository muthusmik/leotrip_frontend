import React, { useState } from 'react';
import { Accordion, Row, Col, Card, Form, InputGroup, Button,FormSelect } from 'react-bootstrap';
import CountryCode from '../../../component/countrycode/countrycode';
import { useHistory } from 'react-router-dom';
import { HOTELGUESTINFO } from '../../../store/constants';
import Login from "../../authentication/login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DEFAULT_VERSION } from 'redux-persist/es/constants';


const GuestDetails = ({ handleEmail, handlemobile,handleGust }) => {

    const [modalShow, setModalShow] = React.useState(false);

    const [view, setView] = useState(false)

    const [validated, setValidated] = useState(false)



    const handleValidate = (event) => {
        const usertoken = JSON.parse(localStorage.getItem('token'))
        console.log("uuuu", usertoken)
        if (!usertoken) {
            console.log("here")
            // toast.dismiss();
            // toast("continue Login for your Booking")
           
        }
        else {
            console.log("below")
        }

    };

    const [selectedvalue, onselectvalue] = useState(false);


    const guestdetails = JSON.parse(localStorage.getItem('roomGuest'));

    const [value, onChange] = useState(new Date());





    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header><h5>Guest details</h5></Accordion.Header>
                    <Accordion.Body>
                        <Card className='border-light'>
                            <Card.Body>
                                {[...Array(guestdetails?.length)].map((element, index) => {
                                    return (
                                        <div className="form-inline mt-2" key={index}>
                                            <h6>Room {index + 1}</h6>
                                            {[...Array(guestdetails[index].NoOfAdults)].map((element, idx) => (
                                                <Row className='border p-3'>
                                                    <h6 className='text-muted'>Adult {idx + 1}</h6>
                                                    <Col xs={2}>
                                                        <div className="mb-3">
                                                            <Form.Label>Title</Form.Label>
                                                                <FormSelect name={index+"title"+idx} aria-label="Gender" onChange={(e) => handleGust(e,'Title',index,idx,true)}>
                                                                    {/* <option value="" selected disabled hidden>Select</option> */}
                                                                    <option value="Mr">Mr</option>
                                                                    <option value="Mrs">Mrs</option>
                                                                    <option value="Miss">Miss</option>
                                                                </FormSelect>
                                                                <Form.Control.Feedback type="invalid">
                                                                    invalid
                                                                </Form.Control.Feedback>
                                                        </div>
                                                    </Col>
                                                    <Form.Group as={Col} controlId="validation2">
                                                        <Form.Label>First Name</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                placeholder="Enter First Name"
                                                                aria-label="Name"
                                                                name={index+"first_name"+idx}
                                                                onChange={(e) => handleGust(e,'FirstName',index,idx,true)}
                                                                pattern="[A-Za-z]{4,}"
                                                                aria-describedby="basic-addon1"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please Enter the first Name</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="validation3">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                name={index+"last_name"+idx}
                                                                placeholder="Enter Last Name"
                                                                aria-label="LastName"
                                                                pattern="[A-Za-z]{1,}"
                                                                onChange={(e) => handleGust(e,'LastName',index,idx,true)}
                                                                aria-describedby="basic-addon1"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please Enter the Last Name</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>

                                                    <Form.Group as={Col} xs={2} controlId="validation4">
                                                        <Form.Label>Adult Age</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                name={index+"Age"+idx}
                                                                placeholder="Adult age"
                                                                aria-label="Age"
                                                                pattern="[0-9]{2}"
                                                                onChange={(e) => handleGust(e,'age',index,idx,true)}
                                                                aria-describedby="basic-addon1"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please Enter the Adult Age</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Row>
                                            ))}
                                            {[...Array(guestdetails[index].NoOfChild)].map((element, idx) => (
                                                <Row className='border p-3 mt-3'>
                                                    <h6 className='text-muted'>Child {idx + 1}</h6>
                                                    <Col xs={2}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Title</Form.Label>
                                                            <Form.Select name={index+"title"+idx} aria-label="Gender" hasValidation onChange={(e) => handleGust(e,'Title',index,idx,false)}>
                                                                <option value="" selected disabled hidden>Select</option>
                                                                <option value="Mr">Mr</option>
                                                                <option value="Mrs">Mrs</option>
                                                                <option value="Miss">Miss</option>
                                                            </Form.Select>
                                                            <Form.Control.Feedback type="invalid">
                                                                invalid
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Form.Group as={Col} controlId="validation2">
                                                        <Form.Label>First Name</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                placeholder="Enter First Name"
                                                                aria-label="FirstName"
                                                                name={index+"first_name"+idx}
                                                                onChange={(e) => handleGust(e,'FirstName',index,idx,false)}
                                                                pattern="[A-Za-z]{4,}"
                                                                aria-describedby="basic-addon1"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please Enter the first Name</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="validation3">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                name={index+"last_name"+idx}
                                                                placeholder="Enter Last Name"
                                                                aria-label="LastName"
                                                                pattern="[A-Za-z]{1,}"
                                                                onChange={(e) => handleGust(e,'LastName',index,idx,false)}
                                                                aria-describedby="basic-addon1"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please Enter the Last Name</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} xs={2} controlId="validation4">
                                                        <Form.Label>Child Age</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                name={index+"Age"+idx}
                                                                placeholder="Child age"
                                                                aria-label="Age"
                                                                pattern="[0-9]{2}"
                                                                onChange={(e) => handleGust(e,'age',index,idx,false)}
                                                                aria-describedby="basic-addon1"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please Enter the Children Age</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Row>
                                            ))}
                                        </div>
                                    )
                                })}
                                <Form.Group as={Col} controlId="validation4">
                                    <InputGroup size="sm" className="my-3 w-50">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Select aria-label="Gender" className='w-25'>
                                                <CountryCode className="ms-2" />
                                            </Form.Select>
                                            <Form.Control
                                                placeholder="Mobile Number"
                                                aria-label="Mobile Number"
                                                aria-describedby="basic-addon1"
                                                className='w-75'
                                                name="number"
                                                onChange={(e) => handlemobile(e)}
                                                pattern="[0-9]{10}"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please Enter the Mobile number</Form.Control.Feedback>
                                        </InputGroup>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3 w-50">
                                    <Form.Label>Email <span className='small'>(Your E-ticket and updates will be sent here)</span></Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control type="email" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => handleEmail(e)} required />
                                        <Form.Control.Feedback type="invalid">Please Enter the email ID</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>

                                </Form.Group>
                                <Form.Group >
                                    <Button type='submit' className='btn btn-primary'>Submit</Button>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                    />
                                </Form.Group>

                            </Card.Body>
                            {/* <Card.Footer>
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

                                            <Form.Group className="">
                                                <Form.Label><h6>Business Email</h6></Form.Label>
                                                <Form.Control type="text" placeholder="Business Email ID" />
                                            </Form.Group>
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
                                            <div class="col-4">
                                                <Form.Group className="mb-3" >
                                                    <Form.Label><h6>State</h6></Form.Label>
                                                    <Form.Control type="text" placeholder="State" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Card.Footer> */}
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </>
    )


}

export default GuestDetails;