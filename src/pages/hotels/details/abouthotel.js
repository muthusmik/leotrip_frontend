import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import { useSelector, useStore } from "react-redux";
import Parser from 'html-react-parser';

const AboutHotel = () => {
    const [view, setView] = useState(false)

     /*  # show description */
     const [description, setDescription] = useState(false)


     /* # STORE */
    const HotelInfoData = useSelector(state => state.HotelInfo);
    const store = useStore()

    return (
        <>
            {(HotelInfoData.data?.length > 0) ? (
                <div className="container hotel-detailLayout">
                    <Card className="mt-3">
                        <Card.Header className="bg-light p-3">
                            <h5 className="fw-bold"><span className="me-2">About </span>{HotelInfoData.data[0].HotelDetails.HotelName}</h5>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <div>
                                    <h5 className="fw-bold">Overview</h5>
                                    <div className="ms-3">
                                        <p className="description">

                                            {description === true && (
                                                <>
                                                    {Parser(HotelInfoData.data[0] && HotelInfoData.data[0].HotelDetails.Description)} <br />
                                                    <a onClick={() => setDescription(false)} className="link-primary">show less</a>
                                                </>
                                            )}
                                            {description === false && (
                                                <>
                                                    {Parser(HotelInfoData.data[0] && HotelInfoData.data[0].HotelDetails.Description.slice(0, 800))} <br />
                                                    <a onClick={() => setDescription(true)} className="link-primary">show more</a>
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ) : null}
        </>
    )
}
export default AboutHotel