import React from 'react';
import '../../flightlist/flightlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OneWay from '../../oneway';






const FlightModifySearch= () => {

    const [modalShow, setModalShow] = React.useState(false);


    
    return (
        <div className='modifysearch_header'>
            <div className='container roundtrip-modifysearch'>
                <div className='row'>
                    <div className='col-4 d-flex p-3 ms-3'>
                        <h5>MAA</h5>
                        <p className='ms-1'>(Chennai)</p>
                        <span>
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} className="mx-2" style={{ fontSize: "30px", color: "blue" }} />
                        </span>
                        <h5>CJB</h5>
                        <p className='ms-1'>(Coimbatore)</p>
                    </div>
                    <div className='col'>
                        <h5 className='mb-0 mt-2'>Departure</h5>
                        <p className='mt-0 ms-2'>Oct 12,2022</p>
                    </div>
                    <div className='col'>
                        <h5 className='mb-0 mt-2'>Travellers</h5>
                        <p className='mt-0 ms-2'>4</p>
                    </div>
                    <div className='col'>
                        <h5 className='mb-0 mt-2'>Return Date</h5>
                        <p className='mt-0 ms-2'>Oct 15,2022</p>
                    </div>
                    <div className='col-2'>
                        <h5 className='mb-0 mt-2'>Travel Class</h5>
                        <p className='mt-0 ms-2'>Premium Economy</p>
                    </div>
                    <div className='col-2 p-3'>
                        <Button variant="primary fw-bold float-end me-5" onClick={() => setModalShow(true)}>
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
        </div>
    )
   

};
export default FlightModifySearch;