import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import FlightPayUForm from '../flightpayment/flightpayu';
import { useEffect } from "react";


export const FareDetails = ({ selected, validate, resData, mode }) => {

  const location = useLocation()
  console.log("FareDetails.....Mode", mode)

  const flightinfo = useSelector(state => state.FlightOnewayInfo);
  const flightretun = useSelector(state => state.FlightReturnInfo)
  let DepartFlightPrice = flightinfo.data[0].Results.Fare
  let ArrivalFlightPrice = (flightretun?.data).length > 0 ? flightretun.data[0].Results.Fare : [];
  console.log("bbqqq", flightinfo)
  console.log("kkkq", flightretun)
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
              {/* <h6 className="small"> Inclusive of GST</h6> */}
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
            <div>
              {(flightinfo.data[0].Results.Fare.Discount != 0) ? (
                <div className="row">
                  <div className="col-8">
                    <h6>Discount</h6>
                  </div>
                  <div className="col-4" style={{ textAlign: "right" }}>
                    <h6 className="text-success">{numberFormat(flightinfo.data[0].Results.Fare.Discount, flightinfo.data[0].Results.Fare.Currency)} </h6>
                  </div>
                </div>
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
                {console.log("flightinfo.data[0].Results.Fare.PublishedFare",flightinfo.data[0].Results.Fare.PublishedFare)}
                <b className="text-danger">{numberFormat(flightinfo.data[0].Results.Fare.PublishedFare, flightinfo.data[0].Results.Fare.Currency)}</b>
                {/* <b className="text-danger">{(flightinfo.data[0].Results.Fare.PublishedFare, flightinfo.data[0].Results.Fare.Currency)}</b> */}
              </div>
            </div>
            <br />
            {(flightretun.data).length <= 0 ?
              <>
                (onshow === false) ? (
                <>
                  <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
                </>
                ) : null
                <div className=" d-grid gap-2">
                  {onshow && (
                    <>
                      <FlightPayUForm resData={resData} mode={mode} />
                    </>
                  )}
                </div>
              </>
              : null}
          </Card.Body >

        )}
        {
          (flightretun.data?.length > 0) && (
            
            <Card.Body>
              <h6 className="text-primary fw-bold">Second Flight Price Details</h6>
              <div className="row">
                <div className="col-8">
                  <h6 className="mb-0">Base Fare</h6>
                </div>
                <div className="col-4" style={{ textAlign: "right" }}>
                  <h6>{numberFormat(flightretun.data[0].Results.Fare.BaseFare, flightretun.data[0].Results.Fare.Currency)}</h6>
                </div>
              </div>
              <div>
                {(flightretun.data[0].Results.Fare.Discount != 0) ? (
                  <div className="row">
                    <div className="col-8">
                      <h6>Discount</h6>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                      <h6 className="text-success">{numberFormat(flightretun.data[0].Results.Fare.Discount, flightretun.data[0].Results.Fare.Currency)} </h6>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="row">
                <div className="col-8">
                  <h6>Taxes &amp; fees</h6>
                </div>
                <div className="col-4" style={{ textAlign: "right" }}>
                  <h6>{numberFormat(flightretun.data[0].Results.Fare.Tax + flightretun.data[0].Results.Fare.OtherCharges, flightretun.data[0].Results.Fare.Currency)}</h6>
                </div>
                {/* <div className="col-8">
                  <h6>Hojoy offer</h6>
                </div>
                <div className="col-4" style={{ textAlign: "right" }}>
                  <h6>{numberFormat(flightretun.data[0].Results.Fare.PublishedFare - flightretun.data[0].Results.Fare.OfferedFare, flightretun.data[0].Results.Fare.Currency)}</h6>
                </div> */}
              </div>
              <hr />
              <div className="row">
                <div className="col-8">
                  <h6>Payable Amount</h6>
                </div>
                <div className="col-4" style={{ textAlign: "right" }}>
              {/* <small className="fw-bold"><del>{numberFormat(flightretun.data[0].Results.Fare.PublishedFare, flightretun.data[0].Results.Fare.Currency)}</del></small><br/> */}
                  <b className="text-danger">{numberFormat(flightretun.data[0].Results.Fare.PublishedFare, flightretun.data[0].Results.Fare.Currency)}</b>
                </div>
              </div>
              <br />

              {/* payment total */}
              <div className="row">
                <div className="col-8">
                  <h6>Total Travel Fare (Inc all taxes)</h6>
                </div>
                <div className="col-4" style={{ textAlign: "right" }}>
                  <b className="text-danger">{numberFormat(flightretun.data[0].Results.Fare.PublishedFare + flightinfo.data[0].Results.Fare.PublishedFare, flightinfo.data[0].Results.Fare.Currency)}</b>
                </div>
              </div>
              {(onshow === false) ? (
                <>
                  <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
                </>
              ) : null}
              <div className=" d-grid gap-2">
                {onshow && (
                  <>
                    <FlightPayUForm resData={resData} booktype={(flightretun.data?.length > 0) ? true : false} />
                  </>
                )}
              </div>
              {/* payment total */}
            </Card.Body>

          )
        }
      </Card >
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
