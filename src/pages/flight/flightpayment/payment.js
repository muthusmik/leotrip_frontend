import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from "react-redux";

const PaymentDetails = () => {

    const flightinfo = useSelector(state => state.FlightOnewayInfo);

    const numberFormat = (value, cur) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0
    }).format(value);

    return (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
                <Accordion.Header><h5>Price</h5></Accordion.Header>
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
                                        <h6 className="fw-bold text-danger">{numberFormat(flightinfo.data[0].Results.Fare.OfferedFare, flightinfo.data[0].Results.Fare.Currency)}</h6>
                                    </div>
                                </div>
                            </Card.Body>
                        ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "150px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                            <span className="spinner-border spinner-border-sm"></span>
                            &nbsp;Loading....
                        </div>}
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

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