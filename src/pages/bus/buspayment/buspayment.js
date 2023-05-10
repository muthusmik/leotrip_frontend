import React from "react";
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PaymentDetails = () => {

  const location = useLocation();
  const busdata = location.state;
  console.log("setBusData..... index page", busdata)
  // console.log(Price.BasePrice, "Price")
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
            <Card.Body>
              <div className="row">
                <div className="col-8">
                  <h6>Total Basefare</h6>
                </div>
                <div className="col-4">
                  <h6>₹{busdata.price}</h6>
                </div>
              </div>
              {(busdata.state.Price.Discount > 0) ? (
                <div className="row  p-2 my-2">
                  <div className="col-8">
                    <h6>Discount</h6>
                  </div>
                  <div className="col-4">
                    <h6>₹{busdata.state.Price.Discount}</h6>
                  </div>
                </div>
              ) : null}
              {(busdata.state.Price.OtherCharges > 0) ? (
                <div className="row  p-2 my-2">
                  <div className="col-8">
                    <h6>Other Charges</h6>
                  </div>
                  <div className="col-4">
                    <h6>₹{busdata.state.Price.OtherCharges}</h6>
                  </div>
                </div>
              ) : null}
              <div className="row">
                <div className="col-8">
                  <h6>Taxes &amp; fees</h6>
                </div>
                <div className="col-4">
                  <h6>₹{0}</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-8">
                  <h6>Total Amount</h6>
                </div>
                <div className="col-4">
                  <b className="text-danger">
                    <h6 className="fw-bold">₹{busdata.price}</h6>
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