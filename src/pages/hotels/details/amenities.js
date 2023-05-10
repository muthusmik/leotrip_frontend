import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi,faBellConcierge, faCloudSun, faBolt, faCircleArrowRight, faCheck, faUtensils, faHouse, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { Card,  Badge, Button } from 'react-bootstrap';
import { useSelector, useStore } from "react-redux";

const Amenities = () => {
    const [open, setOpen] = useState(false);

    /* # STORE */
    const HotelInfoData = useSelector(state => state.HotelInfo);
    //const store = useStore()


    return (
        <div className="container hotel-detailLayout">
            <Card className="mt-3">
                <Card.Header className="bg-white">
                    <h5 className="fw-bold">Amenities at {HotelInfoData.data[0]?.HotelDetails.HotelName}</h5>
                </Card.Header>
                <Card.Body>
                    <Badge bg="success m-3">POPULAR AMENITIES</Badge>
                    <h5 className="fw-bold">
                        <FontAwesomeIcon icon={faCloudSun} className="text-success ms-4" /> Air Conditioning
                        <FontAwesomeIcon icon={faBolt} className="text-success ms-4" /> Power backup
                        <FontAwesomeIcon icon={faBellConcierge} className="text-success ms-4" /> Room service
                        <a onClick={() => setOpen(!open)} className="link-primary ms-4 h6">View More</a>
                    </h5>
                </Card.Body>
            </Card>
            {open && (
                <Card className="mt-2 p-3">
                    <div className="container row">
                        <div className="col">
                            <ul class="fa-ul">
                            {HotelInfoData.data[0] && HotelInfoData.data[0].HotelDetails.HotelFacilities.map(data => (
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCircleArrowRight} className="text-primary" /></span>{data}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Card.Footer className="text-end">
                        <Button variant="outline-success" onClick={() => setOpen(false)}>Hide</Button>
                    </Card.Footer>
                </Card>
            )}
        </div>
    )
}

export default Amenities