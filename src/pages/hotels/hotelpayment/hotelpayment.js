import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector, useStore } from "react-redux";
import Card from 'react-bootstrap/Card';
const PaymentDetails = () => {

  /* # STORE */
  const hotelBook = useSelector(state => state.HotelBook);
  const store = useStore()


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
                  <h6>{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].Price.PublishedPriceRoundedOff}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h6>Discount</h6>
                </div>
                <div className="col-4">
                  <h6 className="text-success">-{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].Price.Discount}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h6>Other Charges</h6>
                </div>
                <div className="col-4">
                  <h6>{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].Price.OtherCharges}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h6>Service Tax</h6>
                </div>
                <div className="col-4">
                  <h6>{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].Price.GST.TaxableAmount}</h6>
                </div>
              </div>
              <hr />
              <div className="row p-3" style={{backgroundColor:"#e5f5e1"}}>
                <div className="col-8">
                  <h6 className="fw-bold">Total Amount</h6>
                </div>
                <div className="col-4">
                  <h6 className="fw-bold" style={{color:"orangered"}}>{hotelBook.data[0].HotelRoomsDetails[0].Price.CurrencyCode}.{hotelBook.data[0].HotelRoomsDetails[0].Price.OfferedPriceRoundedOff}</h6>
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