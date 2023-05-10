import React,{useState} from "react";
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
import { loadFlightOnewayBook } from '../../../store/actions/flightonewaybook';
import { useEffect } from "react";


export const FareDetails = ({ selected,validate }) => {

  const location = useLocation()
  // console.log(location, "i am about flightbookdata")
const [isValid,setIsValid] =useState(false)

  useEffect(() => {
    setIsValid(validate)
  },[])
  // console.log("pricing page",isValid)

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSelect = (TraceId, SrdvIndex, ResultIndex) => {

    // // # flightBook

    const flightonewaybook = [

      {
        "EndUserIp": "107.180.105.183",
        "ClientId": "180109",
        "UserName": "SKdigPa8",
        "Password": "A$JSkEf4#4",
        "SrdvType": "MixAPI",
        "SrdvIndex": SrdvIndex,
        "TraceId": TraceId,
        "ResultIndex": ResultIndex,
        "Passengers": [
          {
            "Title": "Mr",
            "FirstName": "sairam",
            "LastName": "SRDV",
            "PaxType": "1",
            "DateOfBirth": "1992-02-15",
            "Gender": "1",
            "PassportNo": "",
            "PassportExpiry": "",
            "AddressLine1": "Noida",
            "City": "Noida",
            "CountryCode": "IN",
            "CountryName": "India",
            "ContactNo": "9643737502",
            "Email": "brajesh@srdvtechnologies.com",
            "IsLeadPax": true,
            "Fare": {
              "BaseFare": 2000,
              "Tax": 667,
              "TransactionFee": "0",
              "YQTax": 0,
              "AdditionalTxnFeeOfrd": 0,
              "AdditionalTxnFeePub": 0,
              "AirTransFee": "0"
            }
          },
          {
            "Title": "Mr",
            "FirstName": "nambi",
            "LastName": "SRDV",
            "PaxType": "2",
            "DateOfBirth": "2012-02-15",
            "Gender": "1",
            "PassportNo": "",
            "PassportExpiry": "",
            "AddressLine1": "Noida",
            "City": "Noida",
            "CountryCode": "IN",
            "CountryName": "India",
            "ContactNo": "9643737502",
            "Email": "brajesh@srdvtechnologies.com",
            "IsLeadPax": false,
            "Fare": {
              "BaseFare": 2000,
              "Tax": 667,
              "TransactionFee": "0",
              "YQTax": 0,
              "AdditionalTxnFeeOfrd": 0,
              "AdditionalTxnFeePub": 0,
              "AirTransFee": "0"
            }
          }
        ]
      }
    ]
    dispatch(loadFlightOnewayBook(flightonewaybook));

    history.push("/flight/Flightpayment")
  }

  const numberFormat = (value, cur) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0
    }).format(value);

  const flightinfo = useSelector(state => state.FlightOnewayInfo);
  const flightreturninfo = useSelector(state => state.FlightReturnInfo);
   //console.log("iam raja", flightinfo)
  return (
    <>
      <Card>
        <Card.Header className="bg-white">
          <div className="row">
            <div className="col-8">
              <h4>Price Summary</h4>
              <h6 className="small"> Inclusive of GST</h6>
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
                <h6>{numberFormat(flightinfo.data[0].Results.Fare.BaseFare+(flightreturninfo.data[0]?.Results?.Fare?.BaseFare ? flightreturninfo.data[0].Results.Fare.BaseFare: 0), flightinfo.data[0].Results.Fare.Currency)}</h6>
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
                <h6>{numberFormat(flightinfo.data[0].Results.Fare.Tax+(flightreturninfo.data[0]?.Results?.Fare?.Tax ? flightreturninfo.data[0].Results.Fare.Tax: 0), flightinfo.data[0].Results.Fare.Currency)}</h6>
              </div>
              {/* <div className="col-8">
                <h6>Hojoy offer</h6>
              </div>
              <div className="col-4" style={{ textAlign: "right" }}>
                <h6>{numberFormat(flightinfo.data[0].Results.Fare.PublishedFare-flightinfo.data[0].Results.Fare.OfferedFare, flightinfo.data[0].Results.Fare.Currency)}</h6>
              </div> */}
            </div>
            <hr />
            <div className="row">
              <div className="col-8">
                <h6>Payable Amount</h6>
              </div>
              <div className="col-4" style={{ textAlign: "right" }}>
                <b className="text-danger">{numberFormat(flightinfo.data[0].Results.Fare.OfferedFare+(flightreturninfo.data[0]?.Results?.Fare?.OfferedFare ? flightreturninfo.data[0].Results.Fare.OfferedFare: 0), flightinfo.data[0].Results.Fare.Currency)}</b>
              </div>
            </div>
            <br />
            <div className=" d-grid gap-2">
              {(selected === false || isValid===true) ? (
                <>
                  <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>
                  <Button  disabled onClick={() => handleSelect(flightinfo.data[0].TraceId, flightinfo.data[0].Results.SrdvIndex, flightinfo.data[0].Results.ResultIndex)}>Pay &amp; confirm now</Button></>
              ) : (<Button  onClick={() => handleSelect(flightinfo.data[0].TraceId, flightinfo.data[0].Results.SrdvIndex, flightinfo.data[0].Results.ResultIndex)}>Pay &amp; confirm now</Button>)}
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
