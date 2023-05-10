import React from 'react';
import Card from 'react-bootstrap/Card';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Inclusion = () => {
    return (
        <Card className='mt-2'>
            <Card.Body>
                <div className='container'>
                    <div>
                        <h5>Inclusions &amp; exclusions</h5>
                    </div>
                    <div className='row  mt-2'>
                        <div className="col-6 mt-2 border">
                            <h6>Included in your fare</h6>
                                <div className="row">
                                    <div className="col-5 mt-2">
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} style={{ color: "rgb(80, 6, 95)" }} /></span>507  Kms</li>
                                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}  style={{ color: "rgb(80, 6, 95)" }} /></span>State Taxes</li>
                                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} style={{ color: "rgb(80, 6, 95)" }} /></span>Night Charges</li>
                                    </ul>
                                    </div>
                                    <div className="col-7 mt-2">
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}  style={{ color: "rgb(80, 6, 95)" }} /></span>Only One Pickup &amp; Drop</li>
                                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} style={{ color: "rgb(80, 6, 95)" }} /></span>Toll Charges</li>
                                    </ul>
                                    </div>
                                </div>
                        </div>
                        <div className="col-6 mt-2 border">
                            <h6 >Extra charges (based on your usage)</h6>
                           <p>Fare beyond 507 Kms: Rs 20.0/Km<br />
                           Waiting charges ₹100/60 mins after 45 minutes</p>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Inclusion