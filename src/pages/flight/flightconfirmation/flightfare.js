import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import FlightPayUForm from '../flightpayment/flightpayu';
import { useEffect } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

export const FareDetails = ({ selected, validate, resData }) => {

  const location = useLocation()



  const flightinfo = useSelector(state => state.FlightOnewayInfo);

  console.log("pr.", flightinfo);
  const [onshow, setOnhow] = useState();
  useEffect(() => {
    const usertoken = JSON.parse(localStorage.getItem('token'))
    if ((usertoken) && (validate == true)) {
      setOnhow(true)
      console.log("whitebow")
    }
    else {
      setOnhow(false)
      console.log("rainbow")
    }
  }, [validate])


  const history = useHistory();

  const dispatch = useDispatch();

  const handleSelect = (TraceId, SrdvIndex, ResultIndex, BaseFare, tax) => {

    // // # flightBook


  }

  const numberFormat = (value, cur) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0
    }).format(value);



  return (
    <>
      <Card>
        <Card.Header className="bg-white">
          <div className="row">
            <div className="col-8">
              <h4>Price Summary</h4>
              {/* <h6 className="small"></h6> */}
            </div>
            <div className="col-4 text-end">
              {/* <h5 className="text-danger mb-0">{numberFormat(flightinfo.data[0].Results.Fare.OfferedFare, flightinfo.data[0].Results.Fare.Currency)}</h5>
              <small className="fw-bold"><del>{numberFormat(flightinfo.data[0].Results.Fare.PublishedFare, flightinfo.data[0].Results.Fare.Currency)}</del></small> */}
              {/* <OverlayTrigger trigger="click" placement="bottom" overlay={
                <Popover>
                  <Popover.Body style={{ width: "350px", zIndex: 2, padding: "0%", marginLeft: "-156px" }}>
                    <Card className="p-2">
                      <Row className="border-bottom p-2">
                        <Col xs={8}>
                          <h6>Base Fare</h6>
                        </Col>
                        <Col xs={4} className="text-end">
                          <h6>{numberFormat(flightinfo.data[0].Results.Fare.BaseFare, flightinfo.data[0].Results.Fare.Currency)}</h6>
                        </Col>
                      </Row>
                      <Row className="p-2">
                        <Col xs={8}>
                          <h6> Allowance</h6>
                        </Col>
                        <Col xs={4} className="text-end">
                        </Col>
                      </Row>
                    </Card>
                  </Popover.Body>
                </Popover>
              }>
                <Badge bg="light" className="text-primary h6"><a>View details</a></Badge>

              </OverlayTrigger> */}
            </div>
          </div>
        </Card.Header>
        {(flightinfo.data?.length > 0) && (
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
              {(flightinfo.data[0].Results.Fare.Discount != 0) ? (
                <>
                  <div className="col-8">
                    <h6>Discount</h6>
                  </div>
                  <div className="col-4" style={{ textAlign: "right" }}>
                    <h6 className="text-success">{numberFormat(flightinfo.data[0].Results.Fare.Discount, flightinfo.data[0].Results.Fare.Currency)} </h6>
                  </div>
                </>
              ) : null}
            </div>
            <div className="row">
              <div className="col-8">
                <h6>Taxes &amp; fees</h6>
              </div>
              <div className="col-4" style={{ textAlign: "right" }}>
                <h6>{numberFormat(flightinfo.data[0].Results.Fare.Tax + flightinfo.data[0].Results.Fare.OtherCharges, flightinfo.data[0].Results.Fare.Currency)}</h6>
              </div>
              {/* <div className="col-8">
                <h6>Hojoy offer</h6>
              </div>
              <div className="col-4" style={{ textAlign: "right" }}>
                <h6>{numberFormat(flightinfo.data[0].Results.Fare.PublishedFare - flightinfo.data[0].Results.Fare.OfferedFare, flightinfo.data[0].Results.Fare.Currency)}</h6>
              </div> */}
            </div>
            <hr />
            <div className="row">
              <div className="col-8">
                <h6>Payable Amount</h6>
              </div>
              <div className="col-4" style={{ textAlign: "right" }}>
              <b className="text-danger">{numberFormat(flightinfo.data[0].Results.Fare.PublishedFare, flightinfo.data[0].Results.Fare.Currency)}</b><br/>
              </div>
            </div>
            <br />
            {(onshow === false) ? (
              <>
                <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
              </>
            ) : null}
            <div className=" d-grid gap-2">
              {onshow && (
                <>
                  <FlightPayUForm resData={resData} booktype={false} />
                </>
              )}
            </div>
          </Card.Body>
        )}
      </Card>
    </>
  )
}

export const Promte = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="1" className='mt-3'>
        <Accordion.Header><h5>Offers</h5></Accordion.Header>
        <Accordion.Body>
          {/* <div className="row border rounded m-2 p-2">
          <Form.Check
            className="h6 border-bottom pb-3 fw-bold"
            label="SAVEMORE"
            name="offers"
            type="radio"
          />
        <h6 className="small">Get INR 400 Instant Discount</h6>
      </div>
      <div className="row border rounded m-2 p-2 ">
          <Form.Check
            className="h6 border-bottom pb-3 fw-bold"
            label="GOYESEMI"
            name="offers"
            type="radio"
          />
        <h6 className="small">Get Rs. 295 instant discount with Yes Bank Credit Card EMI</h6>
      </div>
     
      <div className="row border rounded m-2 p-2">
          <Form.Check
            className="h6 border-bottom pb-3 fw-bold"
            label="GIUNIQUE"
            name="offers"
            type="radio"
          />
        <h6 className="small">Use this coupon and get Rs 200 instant discount on your flight booking.</h6>
      </div>

      <div className="row border rounded m-2 p-2">
          <Form.Check
            className="h6 border-bottom pb-3 fw-bold"
            label="GIBFLEMI"
            name="offers"
            type="radio"
          />
        <h6 className="small">Get INR 184 Instant Discount using Bajaj Finserv NO COST EMI pay mode</h6>
      </div>
      */}
          {/* <h6 className="text-danger">COMING SOON...</h6> */}
          {/* <div className="row border m-1">
            <div className="container mt-1">
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
          <div className="fw-bold h5">
            <div class="stage">
              coming soon<span class="dot-flashing"></span>
            </div>
          </div>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
