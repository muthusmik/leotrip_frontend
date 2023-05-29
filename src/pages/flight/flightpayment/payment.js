import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from "react-redux";

const PaymentDetails = () => {
    const bookType = localStorage.getItem('JourneyTrip')
    const flightinfo = useSelector(state => state.FlightOnewayInfo);
    const flightReturninfo = useSelector(state => state.FlightReturnInfo);
    
    useEffect(()=>{
        if(flightReturninfo){
            console.log("payment flightReturninfo",flightReturninfo);
            console.log("paymentpaymentpaymentflightinfoflightinfoflightinfo",flightinfo);

        }
    },[flightReturninfo])


    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Price <h6>({flightinfo.data[0]?.Results?.Segments[0][0].Origin.CityCode}--{flightinfo.data[0]?.Results?.Segments[0][0].Destination.CityCode})</h6> </h5></Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Header className="bg-white">
                                <div className="row">
                                    <div className="col-8">
                                        <h4>Price Summary</h4>
                                        <h6 className="small"> Inclusive of GST</h6>
                                    </div>
                                </div>
                            </Card.Header>
                            {(flightinfo.data) ? (
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-8">
                                            <h6 className="mb-0">Base Fare</h6>
                                        </div>

                                        <div className="col-4" style={{ textAlign: "right" }}>
                                            <h6>{numberFormat(flightinfo.data[0].Results.Fare.BaseFare, flightinfo.data[0].Results.Fare.Currency)}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <h6>Discount</h6>
                                        </div>
                                        <div className="col-4" style={{ textAlign: "right" }}>
                                            <h6 className="text-success">{numberFormat(flightinfo.data[0].Results.Fare.Discount, flightinfo.data[0].Results.Fare.Currency)} </h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <h6>Taxes &amp; fees</h6>
                                        </div>
                                        <div className="col-4" style={{ textAlign: "right" }}>
                                            <h6>{numberFormat(flightinfo.data[0].Results.Fare.Tax, flightinfo.data[0].Results.Fare.Currency)}</h6>
                                        </div>
                                        <div className="col-8">
                                            <h6>Amount</h6>
                                        </div>
                                        <div className="col-4" style={{ textAlign: "right" }}>
                                            <h6><del>{numberFormat(flightinfo.data[0].Results.Fare.PublishedFare, flightinfo.data[0].Results.Fare.Currency)}</del></h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-8">
                                            <h6>Total Amount</h6>
                                        </div>
                                        <div className="col-4" style={{ textAlign: "right" }}>
                                            <h6 className="fw-bold text-danger">{numberFormat(flightinfo.data[0].Results.Fare.PublishedFare, flightinfo.data[0].Results.Fare.Currency)}</h6>
                                        </div>
                                    </div>
                                </Card.Body>
                            ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "150px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                <span className="spinner-border spinner-border-sm"></span>
                                &nbsp;Loadd payment 3....
                            </div>}
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {bookType == 2 ?
                <>
                    {(flightReturninfo.initialState) ? null:
                        <>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h5>Price <h6>({flightReturninfo.data[0]?.Results?.Segments[0][0].Destination.CityCode}--{flightReturninfo.data[0]?.Results?.Segments[0][0].Origin.CityCode})</h6> </h5></Accordion.Header>
                                    <Accordion.Body>
                                        <Card>
                                            <Card.Header className="bg-white">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <h4>Price Summary</h4>
                                                        <h6 className="small"> Inclusive of GST</h6>
                                                    </div>
                                                </div>
                                            </Card.Header>
                                            {(flightReturninfo.data) ? (
                                                <Card.Body>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6 className="mb-0">Base Fare</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6>{numberFormat(flightReturninfo.data[0].Results.Fare.BaseFare, flightReturninfo.data[0].Results.Fare.Currency)}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6>Discount</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6 className="text-success">{numberFormat(flightReturninfo.data[0].Results.Fare.Discount, flightReturninfo.data[0].Results.Fare.Currency)} </h6>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6>Taxes &amp; fees</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6>{numberFormat(flightReturninfo.data[0].Results.Fare.Tax, flightReturninfo.data[0].Results.Fare.Currency)}</h6>
                                                        </div>
                                                        <div className="col-8">
                                                            <h6>Amount</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6><del>{numberFormat(flightReturninfo.data[0].Results.Fare.PublishedFare, flightReturninfo.data[0].Results.Fare.Currency)}</del></h6>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6>Total Amount</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6 className="fw-bold text-danger">{numberFormat(flightReturninfo.data[0].Results.Fare.PublishedFare, flightReturninfo.data[0].Results.Fare.Currency)}</h6>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "150px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                                <span className="spinner-border spinner-border-sm"></span>
                                                &nbsp;Loading payment 1....
                                            </div>}
                                        </Card>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>



                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h5>Total Travel Fare</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <Card>
                                            <Card.Header className="bg-white">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <h4> Total TravelFare Summary</h4>
                                                        <h6 className="small"> Inclusive of GST</h6>
                                                    </div>
                                                </div>
                                            </Card.Header>
                                            {(flightReturninfo.data) ? (
                                                <Card.Body>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6 className="mb-0"> Total Travel Base Fare</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6>{numberFormat(flightReturninfo.data[0].Results.Fare.BaseFare + flightinfo.data[0].Results.Fare.BaseFare, flightReturninfo.data[0].Results.Fare.Currency)}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6>Total Travel Discount</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6 className="text-success">{numberFormat(flightReturninfo.data[0].Results.Fare.Discount + flightinfo.data[0].Results.Fare.Discount, flightReturninfo.data[0].Results.Fare.Currency)} </h6>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6>Total  Taxes &amp; fees</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6>{numberFormat(flightReturninfo.data[0].Results.Fare.Tax + flightinfo.data[0].Results.Fare.Tax, flightReturninfo.data[0].Results.Fare.Currency)}</h6>
                                                        </div>
                                                        <div className="col-8">
                                                            <h6>Amount</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6><del>{numberFormat(flightReturninfo.data[0].Results.Fare.PublishedFare + flightinfo.data[0].Results.Fare.PublishedFare, flightReturninfo.data[0].Results.Fare.Currency)}</del></h6>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h6>Total Amount Paid</h6>
                                                        </div>
                                                        <div className="col-4" style={{ textAlign: "right" }}>
                                                            <h6 className="fw-bold text-danger">{numberFormat(flightReturninfo.data[0].Results.Fare.PublishedFare + flightinfo.data[0].Results.Fare.PublishedFare, flightReturninfo.data[0].Results.Fare.Currency)}</h6>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "150px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                                <span className="spinner-border spinner-border-sm"></span>
                                                &nbsp;Loading payment 2....
                                            </div>}
                                        </Card>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </>
                         }
                </>

                : null}
        </>
    )
}



const Payment = () => {
    return (

        <>
            <PaymentDetails />
        </>

    )
};

export default React.memo(Payment);