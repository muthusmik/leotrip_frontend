import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';
const Cancellation = () => {
    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header>
                        <img src="https://gos3.ibcdn.com/zc-logo-1611062550.png" width="37" height="42" alt="ZC_info_container" loading="lazy" />
                        <div className="ms-3 my-auto">
                            <p className="fw-bold">ZERO CANCELLATION <br />Save big on cancellation charges</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <p><Badge className='me-2 fs-5'>₹4,114</Badge><span className='h5'>Refund with ZC</span></p>
                                    <p className='text-muted'>If you cancel before 05 Oct 04:10 PM, you get full ₹4,114 refund. No questions asked!</p>
                                </div>
                                <div className="col-6">
                                    <p><Badge className='me-2 fs-5'>₹814</Badge><span className='h5'>Refund without ZC</span></p>
                                    <p className='text-muted'>If you cancel before 05 Oct 04:10 PM, you get full ₹814 refund. No questions asked!</p>
                                </div>
                            </div>
                        </div>
                        <div className='container small'>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} style={{ color: "rgb(80, 6, 95)" }} /></span>Convenience fee per pax will be charged in case of cancellation.</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} style={{ color: "rgb(80, 6, 95)" }} /></span>Cancellation must be initiated from Goibibo app/website.</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} style={{ color: "rgb(80, 6, 95)" }} /></span>Zero Cancellation is available on only pure cancellations &amp; will not be valid in case of Date Change.</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} style={{ color: "rgb(80, 6, 95)" }} /></span>Waiver is valid only for FULL cancellations (cancellations of all flights of a particular passenger, booked in an itinerary) for any or all passengers in a booking.</li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Cancellation