import React, { useState } from 'react';
import '../../flightlist/flightlist.scss';
import { Button, Row, Col, Card, Form, Toast, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Sun from '../../../../asset/images/flight/sun.png';
import Moon from '../../../../asset/images/flight/moon.png';
import SunRise from '../../../../asset/images/flight/sunrise.png';
import SunSet from '../../../../asset/images/flight/sunset.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import InputRange from "react-input-range";
import OneWay from '../../oneway';
import './multicity.scss'

const FlightModifySearch = ({ handleChange }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [val, setVal] = React.useState({ min: 3000, max: 15000 });

    // toast
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showD, setShowD] = useState(false);
    const toggleShowA = () => {
        setShowA(!showA)
        setShowB(false)
        setShowC(false)
        setShowD(false)
    };
    const toggleShowB = () => {
        setShowA(false)
        setShowB(!showB)
        setShowC(false)
        setShowD(false)
    };
    const toggleShowC = () => {
        setShowA(false)
        setShowB(false)
        setShowC(!showC)
        setShowD(false)
    };
    const toggleShowD = () => {
        setShowA(false)
        setShowB(false)
        setShowC(false)
        setShowD(!showD)
    };

    return (
        <div className='modifysearch_header'>
            <div className='container'>
                <div className='row m-5 pt-4'>
                    <div className='col-3 p-3'>
                        <h3 className='fw-bold text-white'>Multicity Flights</h3>
                    </div>
                    <div className='col-5 p-3'>
                        <Row >
                            <ToggleButtonGroup type="radio" name="options" className='multiCitySwitch m-2' defaultValue={"Select your OwnFlight"} >
                                <ToggleButton id="tbg-radio-1" className='togglebutton' value={"Flight Combinations"} onClick={() => handleChange("Flight Combinations")}>
                                    Flight Combinations
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" className='togglebutton' value={" Select your OwnFlight"} onClick={() => handleChange("Select your OwnFlight")}>
                                    Select your OwnFlight
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Row>
                        <div className='row bg-light pt-1' style={{ height: "35px" }}>
                            <div className="col-3">
                                <Button onClick={toggleShowA} variant="light" className='w-100' size="sm">
                                    Time
                                </Button>
                                <Toast show={showA} onClose={toggleShowA} className="filtertoast">
                                    <Toast.Body>
                                        <Card className='p-2'>
                                            <Row className='ps-0 mt-2'>
                                                <Col>
                                                    <img src={SunRise} alt="sunrise" width={30} />
                                                    <span>05-12</span>
                                                </Col>
                                                <Col>
                                                    <img src={Sun} alt="sunrise" width={30} />
                                                    <span>12-18</span>
                                                </Col>
                                                <Col>
                                                    <img src={SunSet} alt="sunrise" width={30} />
                                                    <span>18-23</span>
                                                </Col>
                                                <Col>
                                                    <img src={Moon} alt="sunrise" width={30} />
                                                    <span>23-05</span>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Toast.Body>
                                </Toast>
                            </div>
                            <div className="col-3">
                                <Button onClick={toggleShowB} variant="light" className='w-100' size="sm" >
                                    stop
                                </Button>
                                <Toast show={showB} onClose={toggleShowB} className="filtertoast" >
                                    <Toast.Body>
                                        <Card>
                                            <Card.Body>
                                                <Form.Check
                                                    type="checkbox"
                                                    label="All Stops"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="1 Stop(6 flights)"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="2 Stops(12 flights)"
                                                />
                                            </Card.Body>
                                            <Card.Footer>
                                                <h6>Onward Flight Duration</h6>
                                                <InputRange
                                                    step={5}
                                                    formatLabel={(value) => null}
                                                    draggableTrack={true}
                                                    allowSameValues={false}
                                                    maxValue={15000}
                                                    minValue={3000}
                                                    value={val}
                                                    onChange={setVal}
                                                    onChangeComplete={(args) => console.log(args)}
                                                />
                                                <Row className='rangevalue'>
                                                    <Col><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.min}`}</Col>
                                                    <Col className='text-end'><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.max}`}</Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Toast.Body>
                                </Toast>
                            </div>
                            <div className="col-3">
                                <Button onClick={toggleShowC} variant="light" className='w-100' size="sm">
                                    Airlines
                                </Button>
                                <Toast show={showC} onClose={toggleShowC} className="filtertoast">
                                    <Toast.Body>
                                        <Card className='p-3'>
                                            <Form.Check
                                                type="checkbox"
                                                label="All Airlines"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Air India(10 flights)"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="IndiGo(5 flights)"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Multi-Carrier(3 flights)"
                                            />
                                        </Card>
                                    </Toast.Body>
                                </Toast>
                            </div>
                            <div className="col-3">
                                <Button onClick={toggleShowD} variant="light" className='w-100' size="sm">
                                    price
                                </Button>
                                <Toast show={showD} onClose={toggleShowD} className="filtertoast">
                                    <Toast.Body>
                                        <Card className='p-3'>
                                            <h6>Onward</h6>
                                            <InputRange
                                                step={5}
                                                formatLabel={(value) => null}
                                                draggableTrack={true}
                                                allowSameValues={false}
                                                maxValue={15000}
                                                minValue={3000}
                                                value={val}
                                                onChange={setVal}
                                                onChangeComplete={(args) => console.log(args)}
                                            />
                                            <Row className='rangevalue'>
                                                <Col><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.min}`}</Col>
                                                <Col className='text-end'><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.max}`}</Col>
                                            </Row>
                                        </Card>
                                    </Toast.Body>
                                </Toast>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-3'>
                        <Button variant="primary float-end me-5" onClick={() => setModalShow(true)}>
                            Modify Search
                        </Button>

                        <Modal
                            show={modalShow}
                            size="xl"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            onHide={() => setModalShow(false)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input className="check-input" type="radio" name="triptype" id="oneway" value="oneway" defaultChecked />
                                            <label className="check-label" htmlFor="oneway">One Way</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="check-input" type="radio" name="triptype" id="roundtrip" value="roundtrip" />
                                            <label className="check-label" htmlFor="round-trip">Round-trip</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="check-input" type="radio" name="triptype" id="multicity" value="multicity" />
                                            <label className="check-label" htmlFor="multi-city">Multi-city</label>
                                        </div>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <OneWay />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => setModalShow(false)}>Submit</Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </div>
        </div >
    )


};
export default FlightModifySearch;