import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import CarPayUForm from '../carpayment/carpayu';
const CarFareDetails = ({ selected,passanger}) => {



    const location = useLocation();
    const [traceid, setTraceid] = React.useState(location.state.state.TraceID)
    const [carfare, setCarfare] = React.useState(location.state.state.data)

    const [onshow, setOnhow] = useState();
    useEffect(() => {
        const usertoken = JSON.parse(localStorage.getItem('token'))
        console.log("bbbakka", selected)
        if ((selected == true) && (usertoken)) {
            setOnhow(true)
            console.log("whitte")
        }
        else {
            setOnhow(false)
            console.log("black")
        }
    }, [selected])

    let history = useHistory();

    /* onclick setting data to trigger useEffect for  dispatch */
    // const handleSubmit = () => {

    //     const carBook = {
    //         "EndUserIp": "107.180.105.183",
    //         "ClientId": "180109",
    //         "UserName": "SKdigPa8",
    //         "Password": "A$JSkEf4#4",
    //         "SrdvIndex": carfare.SrdvIndex,
    //         "TraceID": traceid,
    //         "PickUpTime": "18:00",
    //         "DropUpTime": "18:00",
    //         "RefID": "77894",
    //         "CustomerName": "Amit Singh",
    //         "CustomerPhone": "9643737502",
    //         "CustomerEmail": "support@srdvtechnologies.com",
    //         "CustomerAddress": "Noida"

    //     }
    //     dispatch(loadCarBook(carBook));
    //     history.push('/car/CarPayment', { state: { carfare } })
    // };


    /* # Car book dispatch */

    const dispatch = useDispatch();

    // const handlerediect = () => {
    //     // toast.dismiss();
    //     // toast("Your Preffered Room is currently unavailable")
    //     alert("Your Preffered Room is currently unavailable")
    //     history.push("/hotel/hotellist")
    // }



    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);


    return (
        <Card>
            <Card.Header className="bg-white">

                <div className="row">
                    <div className="col-8">

                        <h4>Price Summary</h4>
                        <h6 className="small"> Inclusive of GST</h6>
                    </div>
                    <div className="col-4 text-end">
                        <h5>{numberFormat(carfare.Fare.TotalAmount, "INR")}</h5>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={
                            <Popover>
                                <Popover.Body style={{ width: "350px", zIndex: 2, padding: "0%", marginLeft: "-156px" }}>
                                    <Card className="p-2">
                                        <Row className="border-bottom p-2">
                                            <Col xs={8}>
                                                <h6>Base Fare</h6>
                                                <h6 className="small">for {carfare.Fare.TotalKmCharged}kms, after discount</h6>
                                                <p><b>GST</b> Included in base fare({numberFormat(carfare.Fare.TotalServiceTax, "INR")})</p>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <h5>{numberFormat(carfare.Fare.BaseFare + carfare.Fare.TotalServiceTax, "INR")}</h5>
                                            </Col>
                                        </Row>
                                        <Row className="p-2">
                                            <Col xs={8}>
                                                <h6>Driver Allowance</h6>
                                                <h6 className="small">dont need to extra pay</h6>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <h5>{numberFormat(carfare.Fare.OutStationDriverAllowance, "INR")}</h5>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Popover.Body>
                            </Popover>
                        }>
                            <Badge bg="light" className="text-primary h6"><a>View details</a></Badge>

                        </OverlayTrigger>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                {/* <div className="row border p-2">
                    <div className="col-1">
                        <Form.Check inline name="group1" type="radio" />
                    </div>
                    <div className="col-11">
                        <h5 className="small">
                            <span className="h6 fw-bold">Pay {numberFormat(carfare.Fare.AdvanceAmount, "INR")} Now</span><br />Remaining to driver
                        </h5>
                    </div>
                </div>
                <div className="row border p-2">
                    <div className="col-1">
                        <Form.Check inline name="group1" type="radio" />
                    </div>
                    <div className="col-11">
                        <h5 className="small">
                            <span className="h6 fw-bold">Pay {numberFormat(carfare.Fare.TotalAmount, "INR")} Now</span><br />Full payment
                        </h5>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-8">
                        <h6 className="mb-0">Base Fare</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>{numberFormat(carfare.Fare.BaseFare, "INR")}</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6>Service Tax</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>
                            {numberFormat(carfare.Fare.TotalServiceTax, "INR")}
                        </b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6 className="m-0">Driver Allowance</h6>
                        <small className="m-0">({carfare.Fare.OutStationMinKmPerDay}/per day * {carfare.Fare.TotalDaysCharged})</small>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>
                            {numberFormat(carfare.Fare.OutStationMinKmPerDay * carfare.Fare.TotalDaysCharged, "INR")}
                        </b>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-8">
                        <h6>Total Amount</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b className="text-danger">
                            {numberFormat(carfare.Fare.TotalAmount, "INR")}
                        </b>
                    </div>
                </div>
                <br />
                {/* <div className=" d-grid gap-2">
                    {(selected == false) ? (
                        <>
                            <h6 className="small text-danger text-center">Please fill the Traveler details and proceed the form</h6>
                            <Button variant="primary" disabled  >Pay &amp; confirm now</Button></>
                    ) : (<Button variant="primary" onClick={handleSubmit}>Pay &amp; confirm now</Button>)}
                </div> */}
                {(!onshow) ? (
                    <>
                        <h6 className="small text-danger text-center">Please fill the Traveller details and submit the form</h6>
                    </>
                ) : null}
                {onshow && (
                    <>

                        <div className=" d-grid gap-2">
                            <>
                                {/* <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6> */}
                                <CarPayUForm  passanger={passanger}/>
                            </>
                        </div>

                    </>
                )}

            </Card.Body>
        </Card>
    )
}


export default CarFareDetails
