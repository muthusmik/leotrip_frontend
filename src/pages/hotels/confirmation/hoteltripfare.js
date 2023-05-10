import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useStore } from "react-redux";
import { useLocation } from 'react-router-dom';
// import ContentLoader, { BulletList, Circle } from "react-content-loader";
import './details.scss';

export const HotelFareDetails = ({ selected }) => {
    const location = useLocation();
    const roomData = location.state.state;
    /* # STORE */
    // const hotelBlockRoom = useSelector(state => state.BlockRoom);
    const store = useStore()

    console.log(roomData, "Tripfare")

    // const guestStatus = useSelector(state => state.HotelGuestInfo)

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    const history = useHistory();
    const handleSelect = () => {

        history.push("/hotel/hotelpayment")
    }
    return (
        <Card>
            <Card.Header className="bg-white">
                <div className="row">
                    <div className="col-8">
                        <h4>Price Summary</h4>
                        <h6 className="small"> Inclusive of GST</h6>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-8">
                        <h6>Room Charges
                            {/* <small className="text-danger">(1 Room X 1 Night)</small> */}
                        </h6>
                    </div>
                    <div className="col-4 fw-bold" style={{ textAlign: "right" }}>
                        {numberFormat(roomData.Price.PublishedPrice, roomData.Price.CurrencyCode)}
                        {/* {(hotelBlockRoom.data[1].BlockRoomResult?.HotelRoomsDetails[0]?.DayRates).map((data) => (
                            <b>
                                {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{data.Amount}
                            </b>
                        ))} */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6>Other Charges</h6>
                    </div>
                    <div className="col-4 fw-bold" style={{ textAlign: "right" }}>
                        {numberFormat(roomData.Price.OtherCharges, roomData.Price.CurrencyCode)}
                        {/* <b>
                            {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.OtherCharges}
                        </b> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6>Taxes & Fees</h6>
                    </div>
                    <div className="col-4 fw-bold" style={{ textAlign: "right" }}>
                        {numberFormat(roomData.Price.Tax, roomData.Price.CurrencyCode)}

                        <b>
                            {/* {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.GST.TaxableAmount} */}
                        </b>
                    </div>
                </div>
                {/* {(hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.Discount>0)?(
                <div className="row">
                    <div className="col-8">
                        <h6>Discount</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b className="text-success">
                            {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.-{hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.Discount}
                        </b>
                      
                    </div>
                </div>
                  ):null} */}
                <hr />
                <div className="row">
                    <div className="col-8">
                        <h6>Price after discount</h6>
                    </div>
                    <div className="col-4 fw-bold" style={{ textAlign: "right" }}>
                        {numberFormat(roomData.Price.OfferedPrice, roomData.Price.CurrencyCode)}
                        {/* <b>
                            {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.OfferedPriceRoundedOff}
                        </b> */}
                    </div>
                </div>
                <br />
                <div className=" d-grid gap-2">
                    {(selected == false) ? (
                        <>
                            <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
                            <Button disabled onClick={handleSelect}>Pay &amp; confirm now</Button></>
                    ) : (<Button onClick={handleSelect}>Pay &amp; confirm now</Button>)}
                </div>

            </Card.Body>
        </Card>
    )
}

export const Promte = () => {
    return (
        <Card className="mt-4">
            <Card.Header className="bg-white">
                <h4>Offers</h4>
            </Card.Header>
            <Card.Body>
                <Form>
                    {/* <div className="row border rounded m-1">
                        <div className="col-1">
                            <Form.Check
                                name="offers"
                                type="radio"
                            />
                        </div>
                        <div className="col-9">
                            <Form.Label className="">
                                <h5>GOCITI</h5>
                                <h6 className="small">Use this code to get to get ₹500 off on CITIBANK Credit/Debit cards</h6>
                            </Form.Label>
                        </div>
                    </div>
                    <div className="row border rounded m-1">
                        <div className="col-1">
                            <Form.Check
                                name="offers"
                                type="radio"
                            />
                        </div>
                        <div className="col-9">
                            <Form.Label className="">
                                <h5>GOFESTIVE</h5>
                                <h6 className="small">Get additional discount of ₹150 using this offer code</h6>
                            </Form.Label>
                        </div>
                    </div>
                    <div className="row border rounded m-1">
                        <div className="col-1">
                            <Form.Check
                                name="offers"
                                type="radio"
                            />
                        </div>
                        <div className="col-9">
                            <Form.Label className="">
                                <h5>CABOFFER</h5>
                                <h6 className="small">Get up-to ₹100 Off on Outstation Cab transactions</h6>
                            </Form.Label>
                        </div>
                    </div> */}


                    <div className="fw-bold h5">
                        <div class="stage">
                            coming soon<span class="dot-flashing"></span>
                        </div>
                    </div>



                    {/* <div className="row  m-1">
                        <div className="container border mt-1">
                            <h5>ENTER PROMO CODE</h5>
                        </div>
                        <div className="container border">
                            <InputGroup className="my-3 ">
                                <Form.Control
                                    placeholder="Got A Promote code? Enter"
                                    variant="outline-secondary"
                                />
                                <Button variant="outline-secondary"><FontAwesomeIcon icon={faAnglesRight} />
                                </Button>
                            </InputGroup>
                        </div>
                    </div> */}
                </Form>
            </Card.Body>
        </Card>
    )
}

