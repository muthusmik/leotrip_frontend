import React from "react";
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PaymentDetails = () => {

  const location = useLocation();
  const busdata = location.state;

  const numberFormat = (value, cur) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0
    }).format(value);

  const busprice = JSON.parse(localStorage.getItem('busprice'))

  console.log("bus.....", busprice)

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
                  <h6>Basefare</h6>
                </div>
                <div className="col-4">
                  <h6>{numberFormat(busprice[0]?.busbaseprice, "INR")}</h6>
                </div>
              </div>
              {(busprice[2].discount != 0) ? (
                <div className="row  p-2 my-2">
                  <div className="col-8">
                    <h6>Discount</h6>
                  </div>
                  <div className="col-4">
                    <h6>{numberFormat(busprice[2]?.discount, "INR")}</h6>
                  </div>
                </div>
              ) : null}
              {(busprice[1].tax != 0) ? (
                <div className="row  p-2 my-2">
                  <div className="col-8">
                    <h6>Taxes &amp; fees</h6>
                  </div>
                  <div className="col-4">
                    <h6>{numberFormat(busprice[1]?.tax, "INR")}</h6>
                  </div>
                </div>
              ) : null}

              <hr />
              <div className="row">
                <div className="col-8">
                  <h6>Amount</h6>
                </div>
                  <div className="col-4">
                    {/* <del className="fw-bold">{numberFormat(busprice[3]?.PublishedFare, "INR")}</del><br /> */}
                    <h6 className="fw-bold text-danger">{numberFormat(busprice[3]?.PublishedFare, "INR")}</h6>
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