import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button } from 'react-bootstrap';
import user from '../../../asset/images/bus/user.png';
import Remove from '../../../asset/images/bus/remove.png';
import { useLocation } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
// import { useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserMinus } from '@fortawesome/free-solid-svg-icons';


const TravelerDetails = () => {
    const location = useLocation();
    const seat = location.state
    console.log("trip-list..........", seat)
    const [formValues, setFormValues] = useState([{ name: "", age: "", gender: "" }])
    const [view, setView] = useState(false)
    let addFormFields = (index) => {
        if (index < 9) {
            setFormValues([...formValues, { name: "", age: "", gender: "" }])
        }

    }

    const handleValue = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);

    }



    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const length =parseInt(seat.seatNum?.length)

    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header>
                        <div>
                            <h5>Traveller Details</h5>
                            <h6 className='small'>Please make sure you enter the Name as per your Govt. photo id</h6>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey="1">
                            {console.log(length,"hello")}
                        {[...Array(length)].map((value, index) => {
                            return (
                                <Accordion.Item eventKey={index} key={index} >
                                    {console.log(length,"hello array")}
                                    <Accordion.Header>
                                        <div className='row w-100'>
                                            <div className='col-9 my-3'>
                                                <h6>Traveller {index + 1} <br />
                                                    {/* <span className='small'>(age)</span> */}
                                                </h6>
                                            </div>
                                            <div className='col-2' >
                                                <p className='mt-3'>Seat {seat.seatNum[index]}</p>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='row'>
                                            <div className='col-2' >
                                                <Form.Label>Title</Form.Label>
                                                <Form.Select aria-label="Gender">
                                                    <option value="1">Mr</option>
                                                    <option value="2">Mrs</option>
                                                    <option value="3">Miss</option>
                                                </Form.Select>
                                            </div>
                                            <div className='col-4'>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" name="name" required  placeholder="Enter Name" onChange={(e) => handleValue(index, e)} />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid Traveller Name.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </div>
                                            <div className='col-4'>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label>Age</Form.Label>

                                                    <Form.Control type="number" min="0" name="age" required placeholder="Enter Age" onChange={(e) => handleValue(index, e)} />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid Age.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </div>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required placeholder="Enter Email" />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a valid Email Address.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Group className="mb-3" >
                                                        <Form.Label>Mobile Number</Form.Label>
                                                        <InputGroup >
                                                            <Form.Select className='w-25'>
                                                                <option value="91">+91</option>
                                                            </Form.Select>
                                                            <Form.Control
                                                                placeholder="Mobile Number"
                                                                className='w-75'
                                                                required
                                                                pattern="[0-9]{10}"
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid Mobile Number.
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                        )})}
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/* <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header>
                        <div>
                            <h5>Contact Details</h5>
                            <h6 className='small'>Your E-ticket and updates will be sent to the following details</h6>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </>
    )
}
export default TravelerDetails












