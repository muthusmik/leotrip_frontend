import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import {  useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const PaymentDetails = () =>{
  
  const location = useLocation();

  // console.log(location, "i am about paymentdata")
  
   const [pricefare,setPricefare] = React.useState(location.state.state.carfare)

  //  console.log(pricefare,"iam fit")
    
  return(
  
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
            <Card.Body>
                <div className="row">
                    <div className="col-8">
                        <h6 className="mb-0">Base Fare</h6><small className="text-danger mt-0">(OutStationPerKmRate=₹{pricefare.Fare.OutStationPerKmRate})</small>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>₹{pricefare.Fare.BaseFare}</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6>Advance Amount</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>
                          ₹{pricefare.Fare.AdvanceAmount}
                        </b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6>Service Tax</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                        <b>
                         ₹{pricefare.Fare.TotalServiceTax}
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
                           ₹{pricefare.Fare.TotalAmount}
                        </b>
                    </div>
                </div>
            </Card.Body>
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