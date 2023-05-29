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
  const BlockRoomData = useSelector(state => state.BlockRoom)
  const store = useStore()

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
            <Card.Body>
              <div className="row">
                <div className="col-8">
                  <h6>Room Charges</h6>
                </div>
                <div className="col-4">
                  <h6>{numberFormat(BlockRoomData.data[1].HotelRoomsDetails[0].Price.PublishedPriceRoundedOff,BlockRoomData.data[1].HotelRoomsDetails[0].Price.CurrencyCode)}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h6>Discount</h6>
                </div>
                <div className="col-4">
                  <h6 className="text-success">-{numberFormat(BlockRoomData.data[1].HotelRoomsDetails[0].Price.Discount,BlockRoomData.data[1].HotelRoomsDetails[0].Price.CurrencyCode)}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h6>Other Charges</h6>
                </div>
                <div className="col-4">
                  <h6>{numberFormat(BlockRoomData.data[1].HotelRoomsDetails[0].Price.OtherCharges,BlockRoomData.data[1].HotelRoomsDetails[0].Price.CurrencyCode)}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h6>Taxes & Fees</h6>
                </div>
                <div className="col-4">
                <h6>{numberFormat(BlockRoomData.data[1].HotelRoomsDetails[0].Price.Tax,BlockRoomData.data[1].HotelRoomsDetails[0].Price.CurrencyCode)}</h6>
                </div>
              </div>
              <hr />
              <div className="row p-3" style={{backgroundColor:"#e5f5e1"}}>
                <div className="col-8">
                  <h6 className="fw-bold">Price after discount</h6>
                </div>
                <div className="col-4">
                  <h6 className="fw-bold" style={{color:"orangered"}}>
                  {numberFormat(BlockRoomData.data[1].HotelRoomsDetails[0].Price.PublishedPriceRoundedOff,BlockRoomData.data[1].HotelRoomsDetails[0].Price.CurrencyCode)}
                  </h6>
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