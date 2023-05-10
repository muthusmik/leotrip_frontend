import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Parser from 'html-react-parser';


const Policy = () => {
     /*  # show description */
     const [description, setDescription] = useState(false)
    const HotelInfoData = useSelector(state => state.HotelInfo);
    return (
        <div className="container hotel-detailLayout mt-3">
            {(HotelInfoData.data.length > 0) ? (
                <Card>
                    <Card.Header className="bg-white">
                        <h5 className="fw-bold">Property Policies</h5>
                    </Card.Header>
                    <Card.Body>
                        <p className="description">
    
                            {(HotelInfoData.data[0]?.HotelDetails?.HotelPolicy) && description === true && (
                                <>
                                    {Parser(HotelInfoData.data[0]?.HotelDetails?.HotelPolicy)} <br />
                                    <a onClick={() => setDescription(false)} className="link-primary">show less</a>
                                </>
                            )}
                            {(HotelInfoData.data[0]?.HotelDetails?.HotelPolicy)&& description === false && (
                                <>
                                    {Parser(HotelInfoData.data[0]?.HotelDetails?.HotelPolicy.slice(0,800))} <br />
                                    <a onClick={() => setDescription(true)} className="link-primary">show more</a>
                                </>
                            )}
                        </p>
                    </Card.Body>
                </Card>
            ) : null}
        </div>
    )
}
export default Policy
