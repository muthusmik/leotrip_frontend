import React from 'react';
import '../../carlist/carlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';





const CarModifySearch = () => {


    const location = useLocation()
    //  console.log(location)
    // const [source,setSource] =React.useState(location.state.fromaddress)
    // const [destination,setDestination] =React.useState(location.state.toaddress)
    // const [date,setDate] =React.useState(location.state.selectedDay)


    const [modalShow, setModalShow] = React.useState(false);



    return (
        <div className='modifysearch_header'>
            <div className='container modifysearch'>
                <div className='row pt-3'>
                    <div className='col ms-4'>
                        <h5 className='mb-0'>Trip Type</h5>
                        <p className='mt-0 ms-3 car-traveldetail'>OneWay</p>
                    </div>

                    <div className='col-3 d-flex'>
                        <div>
                            <h5 className='mb-0'>From</h5>
                            <p className='car-depature mt-0'>Chennai</p>
                        </div>
                        <FontAwesomeIcon icon={faLongArrowRight} className="mx-2 mb-0 mt-3" style={{ fontSize: "30px", color: "blue" }} />
                        <div>
                            <h5  className='mb-0'>To</h5>
                            <p className=' mt-0 car-return'>Coimbatore</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h5 className='mb-0'>PickUp Date</h5>
                        <p className='mt-0 ms-2 car-traveldetail'>wed Oct 31 2022</p>
                    </div>

                    <div className='col'>
                        <h5 className='mb-0'>PickUp Time</h5>
                        <p className='mt-0 ms-2 car-traveldetail'>04:15PM</p>
                    </div>

                    <div className='col-3 pt-2'>
                        <Button variant="primary float-end me-5" onClick={() => setModalShow(true)}>
                            Modify Search
                        </Button>

                        <Modal
                            show={modalShow}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            onHide={() => setModalShow(false)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">

                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='primary' onClick={() => setModalShow(false)}>Submit</Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </div>
        </div>
    )


};
export default CarModifySearch;