import React, { useState } from 'react';
import './login.scss'
import { Card, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const UserDetails = () => {

    // #cancel button
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // detail page
    const [view,setView] = useState(true)
    const [viewDetails,setViewDetails] = useState(false)
    const onHandle = ()=>{
        setView(false)
        setViewDetails(true)
    }

    const onEdit = ()=>{
        setViewDetails(false)
        setView(true)
    }


    return (
        <>
        { view &&(<Card className='my-3'>
            <Card.Body>
                <h5 className="fw-bold mb-4">Personal Information</h5>
                <Row>
                    <Col>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="mobile"
                                type="tel"
                                size="sm"
                            />
                            <label htmlFor="floatingInputCustom">Mobile Number</label>
                        </Form.Floating>
                    </Col>
                    <Col>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="email"
                                type="email"
                                size="sm"
                            />
                            <label htmlFor="floatingInputCustom">Email Id</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="name"
                                type="text"
                                size="sm"
                            />
                            <label htmlFor="floatingInputCustom">First Name</label>
                        </Form.Floating>
                    </Col>
                    <Col>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="last _name"
                                type="text"
                                size="sm"
                            />
                            <label htmlFor="floatingInputCustom">Last Name</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <label htmlFor="floatingInputCustom">Gender</label>
                            <Row className='mt-2'>
                                <Col>
                                    <Form.Check
                                        id="gender"
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        size="sm"
                                        className="h6"
                                        label="Male"
                                    />
                                </Col>
                                <Col>
                                    <Form.Check
                                        id="gender"
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        className="h6"
                                        size="sm"
                                        label="Female"
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="dob"
                                type="text"
                                size="sm"
                            />
                            <label htmlFor="floatingInputCustom">Date Of Birth</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row className='my-4'>
                    <Col xs={2}>
                        <Button   variant="success" className='w-75 shadow-lg loginbuttons' onClick={onHandle}>SAVE</Button>
                    </Col>
                    <Col xs={2}>
                        <Button  variant="light" className='w-75 shadow-lg loginbuttons' onClick={handleShow}>CANCEL</Button>
                        <Modal centered show={show} onHide={handleClose}>
                            <Modal.Header closeButton style={{ backgroundColor: "#AFE1AF" }}>
                                <Modal.Title>Cancel</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Are You sure you want to cancel? <br /> This would discard all saved changes</p>
                                <Row>
                                    <Col><Button variant="secondary" onClick={handleClose}>Cancel</Button></Col>
                                    <Col className="text-end"><Button  variant="success" className='shadow-lg loginbuttons' >Yes</Button></Col>
                                </Row >
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Card.Body>
        </Card> )}
        {viewDetails && (
        <Card className='my-3'>
            <Card.Body className="p-5">
                <Row>
                    <Col>
                        <h5 className="fw-bold">Personal Information</h5>
                    </Col>
                    <Col className='text-end'>
                        <Button variant='outline-success'  onClick={onEdit}><FontAwesomeIcon icon={faPen} /> Edit</Button>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3} className="fw-bold">Mobile Number</Col>
                    <Col>859245656</Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3} className="fw-bold">Email ID</Col>
                    <Col>example@gmail.com</Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3} className="fw-bold">First Name</Col>
                    <Col>janani</Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3} className="fw-bold">Last Name</Col>
                    <Col>g</Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3} className="fw-bold">Gender</Col>
                    <Col>Female</Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3} className="fw-bold">Date Of Birth</Col>
                    <Col>07/05/2002</Col>
                </Row>
            </Card.Body>
        </Card>
        )}
    </>
    )
}

export default UserDetails
