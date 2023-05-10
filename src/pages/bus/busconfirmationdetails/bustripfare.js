import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector, useStore } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import { useHistory } from "react-router-dom";
import { loadBusBook } from '../../../store/actions/busbook';
import { useLocation } from 'react-router-dom';


export const FareDetails = ({ selected }) => {

  const location = useLocation();
  const busdata = location.state;
  console.log("setBusData..... index page", busdata)

  const dispatch = useDispatch();

  function handleScroll() {
    window.scroll({
      top: 1000,
      left: 0,
      behavior: 'smooth',
    });
  }

  let history = useHistory();

  const handleSubmit = (ResultIndex) => {

    const busbook = {
      "Password": "A$JSkEf4#4",
      "ResultIndex": ResultIndex,
      "TraceId": buslist.data.result[0].TraceId,
      "BoardingPointId": 1,
      "DroppingPointId": 1,
      "RefID": "1",
      "Passenger": [
        {
          "LeadPassenger": true,
          "PassengerId": 0,
          "Title": "Mr",
          "FirstName": "Amit",
          "LastName": "Singh",
          "Email": "amit@srdvtechnologies.com",
          "Phoneno": "9643737502",
          "Gender": "1",
          "IdType": null,
          "IdNumber": null,
          "Address": "Modinagar",
          "Age": "22",
          "Seat": {
            "ColumnNo": "001",
            "Height": 1,
            "IsLadiesSeat": false,
            "IsMalesSeat": false,
            "IsUpper": false,
            "RowNo": "000",
            "SeatFare": 400,
            "SeatIndex": 2,
            "SeatName": "2",
            "SeatStatus": true,
            "SeatType": 1,
            "Width": 1,
            "Price": {
              "CurrencyCode": "INR",
              "BasePrice": 400,
              "Tax": 0,
              "OtherCharges": 0,
              "Discount": 0,
              "PublishedPrice": 400,
              "PublishedPriceRoundedOff": 400,
              "OfferedPrice": 380,
              "OfferedPriceRoundedOff": 380,
              "AgentCommission": 20,
              "AgentMarkUp": 0,
              "TDS": 8,
              "GST": {
                "CGSTAmount": 0,
                "CGSTRate": 0,
                "CessAmount": 0,
                "CessRate": 0,
                "IGSTAmount": 0,
                "IGSTRate": 18,
                "SGSTAmount": 0,
                "SGSTRate": 0,
                "TaxableAmount": 0
              }
            }
          }
        },
        {
          "LeadPassenger": false,
          "PassengerId": 0,
          "Title": "Mr",
          "FirstName": "ramesh",
          "LastName": "Tomar",
          "Email": "ramesh@srdvtechnologies.com",
          "Phoneno": "1234567890",
          "Gender": "1",
          "IdType": null,
          "IdNumber": null,
          "Address": "Modinagar",
          "Age": "28",
          "Seat": {
            "ColumnNo": "002",
            "Height": 1,
            "IsLadiesSeat": false,
            "IsMalesSeat": false,
            "IsUpper": false,
            "RowNo": "000",
            "SeatFare": 400,
            "SeatIndex": 3,
            "SeatName": "3",
            "SeatStatus": true,
            "SeatType": 1,
            "Width": 1,
            "Price": {
              "CurrencyCode": "INR",
              "BasePrice": 400,
              "Tax": 0,
              "OtherCharges": 0,
              "Discount": 0,
              "PublishedPrice": 400,
              "PublishedPriceRoundedOff": 400,
              "OfferedPrice": 380,
              "OfferedPriceRoundedOff": 380,
              "AgentCommission": 20,
              "AgentMarkUp": 0,
              "TDS": 8,
              "GST": {
                "CGSTAmount": 0,
                "CGSTRate": 0,
                "CessAmount": 0,
                "CessRate": 0,
                "IGSTAmount": 0,
                "IGSTRate": 18,
                "SGSTAmount": 0,
                "SGSTRate": 0,
                "TaxableAmount": 0
              }
            }
          }
        }
      ]
    }
    dispatch(loadBusBook(busbook));
    history.push('/bus/buspayment',location.state)
  };

  const buslist = useSelector(state => state.Bus);

  // console.log("trip-list", buslist.data.result[1].busdetails[0].Price)
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
            <br />
            <div className=" d-grid gap-2 mt-2">

              {(selected == false) ? (
                <>
                  <h6 className="small text-danger text-center">Please fill the Traveler details</h6>
                  <Button variant="primary" disabled style={{ border: "orangered" }}>Pay  &amp; confirm now</Button>
                </>
              ) : (<Button variant="primary" onClick={() => handleSubmit(buslist.data.result[1].busdetails[0].ResultIndex)} style={{ border: "orangered" }}>Pay  &amp; confirm now</Button>)}
            </div>

          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export const Promte = () => {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1" className='mt-3'>
        <Accordion.Header><h5>Offers</h5></Accordion.Header>
        <Accordion.Body>
          {/* <div className="row border rounded m-2 p-2">
            <Form.Check
              className="h6 border-bottom pb-3 fw-bold"
              label="bigbus"
              name="offers"
              type="radio"
            />
            <h6 className="small">BIGBUS: Get upto Rs. 500 off on your Bus Booking.</h6>
          </div>
          <div className="row border rounded m-2 p-2 ">
            <Form.Check
              className="h6 border-bottom pb-3 fw-bold"
              label="bustm"
              name="offers"
              type="radio"
            />
            <h6 className="small">Travel Pass - Buy @ Rs 99, get instant Rs 50 off &amp; 4 vouchers worth Rs. 50 off on bus/Rs 25 on train.</h6>
          </div>

          <div className="row border rounded m-2 p-2">
            <Form.Check
              className="h6 border-bottom pb-3 fw-bold"
              label="gosbi"
              name="offers"
              type="radio"
            />
            <h6 className="small">Exclusive SBI Offer: Get upto 500 off using SBI Credit Cards.</h6>
          </div> */}
          <div className="fw-bold h5">
            <div class="stage">
              coming soon<span class="dot-flashing"></span>
            </div>
          </div>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
