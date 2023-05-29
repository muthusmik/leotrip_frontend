import React, { useEffect, useState, useRef } from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useStore, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import HotelPayUForm from '../hotelpayment/hotelpayu';
// import ContentLoader, { BulletList, Circle } from "react-content-loader";
import './details.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HotelFareDetails = ({ hotelguestdetail, selected, onselectvalue }) => {
    const location = useLocation();
    const roomData = location?.state?.state;
    /* # STORE */

    const store = useStore()
    const hotelBook = useSelector(state => state);
    console.log("aaab", roomData)

    const isInitialMount = useRef(true);

    const [onshow, setOnhow] = useState();
    useEffect(() => {
        const usertoken = JSON.parse(localStorage.getItem('token'))
        console.log("bbb", selected)
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if ((selected == true) && (usertoken)) {
                setOnhow(true)
            }
            else {
                onselectvalue(false)
                setOnhow(false)
            }
        }
    }, [selected])

    // const guestStatus = useSelector(state => state.HotelGuestInfo)




    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    const dispatch = useDispatch();


    const BlockRoomData = useSelector(state => state.BlockRoom)
    const history = useHistory();
    console.log("recorrect", BlockRoomData?.data[1])

    const handlerediect = () => {
        // toast.dismiss();
        // toast("Your Preffered Room is currently unavailable")
        alert("Your Preffered Room is currently unavailable")
        history.push("/hotel/hotellist")
    }

    let totalprice = roomData?.Price?.RoomPrice + roomData?.Price?.Tax
    const handleSelect = () => {



    }
    return (
        <Card>
            <Card.Header className="bg-white">
                <div className="row">
                    <div className="col-9">
                        <h4>Price Summary</h4>
                    </div>
                    {/* <div className="col-3">
                        <h5 className="text-danger mb-0"> {numberFormat(roomData.Price.OfferedPrice, roomData.Price.CurrencyCode)}</h5>
                        <small className="fw-bold"><del>{numberFormat(roomData.Price.PublishedPrice, roomData.Price.CurrencyCode)}</del></small>
                        
                    </div> */}
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
                        {numberFormat(roomData.Price.RoomPrice, roomData.Price.CurrencyCode)}
                        {/* {(hotelBlockRoom.data[1].BlockRoomResult?.HotelRoomsDetails[0]?.DayRates).map((data) => (
                            <b>
                                {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{data.Amount}
                            </b>
                        ))} */}
                    </div>
                </div>
                {/* <div className="row"> */}
                {/* <div className="col-8"> */}
                {/* <h6>Other Charges</h6> */}
                {/* </div> */}
                {/* <div className="col-4 fw-bold" style={{ textAlign: "right" }}> */}
                {/* {numberFormat(roomData.Price.OtherCharges, roomData.Price.CurrencyCode)} */}
                {/* <b>
                            {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.OtherCharges}
                        </b> */}
                {/* </div> */}
                {/* </div> */}
                <div className="row">
                {(roomData.Price.Tax != 0) ? (
                    <>
                    <div className="col-8">
                        <h6>Taxes & Fees</h6>
                    </div>
                    <div className="col-4 fw-bold" style={{ textAlign: "right" }}>
                        {numberFormat(roomData.Price.Tax+roomData?.Price?.AgentCommission, roomData.Price.CurrencyCode)}

                        <b>
                            {/* {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.GST.TaxableAmount} */}
                        </b>
                    </div>
                    </>
                    ) : null}
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
                        <h6> Total Price</h6>
                    </div>
                    <div className="col-4 fw-bold" style={{ textAlign: "right" }}>
                        {numberFormat(roomData?.Price?.RoomPrice + roomData?.Price?.Tax+roomData?.Price?.AgentCommission
, roomData.Price.CurrencyCode)}
                        {/* <b>
                            {hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails[0].Price.OfferedPriceRoundedOff}
                        </b> */}
                    </div>
                </div>
                <br />
                {/* <div className=" d-grid gap-2">
                    {(selected == false) ? (
                        <>
                            <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
                            <Button disabled onClick={handleSelect}>Pay &amp; confirm now</Button></>
                    ) : (<Button onClick={handleSelect}>Pay &amp; confirm now</Button>)}
                </div> */}
                {(onshow == false) ? (
                    <>
                        <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
                    </>
                ) : null}
                {onshow && (
                    <>
                        {(BlockRoomData?.data[1]?.AvailabilityType === "Confirm") ? (
                            <div className=" d-grid gap-2">
                                <>
                                    <HotelPayUForm guestdetails={hotelguestdetail} />
                                </>
                            </div>
                        ) : (<div className=" d-grid gap-2">
                            <>
                                <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
                                <Button onClick={handlerediect}>Pay &amp; confirm now</Button>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark"
                                />
                            </>
                        </div>
                        )}
                    </>
                )}
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

