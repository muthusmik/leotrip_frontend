import React, { useState, useEffect } from "react";
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
import BusPayUForm from '../buspayment/buspayu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FareDetails = ({ selected, busbookData, gustRes }) => {

  const location = useLocation();
  const busdata = location.state;
  const [payLoader, setPayLoader] = useState(false);
  const [busbaseFare, setBusbaseFare] = useState()
  const [taxamount, setTaxamount] = useState()
  const [discountprice, setDiscountprice] = useState()
  const [publishprice, setPublishprice] = useState()
  const [offeredprice, setOfferedprice] = useState()
  const dispatch = useDispatch();

  const BlockBusData = useSelector(state => state.busblock)

  console.log("busvalues....", busdata.seatdetails)
  useEffect(() => {
    busPriceDetails()
  }, [])

  const busPriceDetails = () => {
    var pricedata = busdata.seatdetails.length
    let BusBaseprice = 0;
    let Taxprice = 0;
    let Othercharge = Taxprice;
    let discount = 0
    let PublishedFare = 0
    let OfferedFare = 0
    for (var i = 0; i < pricedata; i++) {
      BusBaseprice = busdata.seatdetails[i]?.Price.BasePrice + BusBaseprice

      Taxprice = busdata.seatdetails[i]?.Price.Tax + Taxprice
      Othercharge = busdata.seatdetails[i]?.Price.OtherCharges + Othercharge

      discount = busdata.seatdetails[i]?.Price.Discount + discount

      PublishedFare = busdata.seatdetails[i]?.Price.PublishedPrice + PublishedFare

      OfferedFare = busdata.seatdetails[i]?.Price.OfferedPriceRoundedOff + OfferedFare
    }
    let allPrices = { BusBaseprice, Taxprice, Othercharge, discount, PublishedFare }
    console.log("aaaprice", allPrices)

    setBusbaseFare(BusBaseprice)
    setTaxamount(Othercharge)
    setDiscountprice(discount)
    setPublishprice(Math.round(PublishedFare))
    setOfferedprice(Math.round(PublishedFare))
    let localstores = [];
    localstores.push({ "busbaseprice": BusBaseprice });
    localstores.push({ "tax": Othercharge });
    localstores.push({ "discount": discount });
    localstores.push({ "PublishedFare": PublishedFare });
    localstores.push({ "OfferedFare": PublishedFare });
    localStorage.setItem('busprice', JSON.stringify(localstores));
  }




  function handleScroll() {
    window.scroll({
      top: 1000,
      left: 0,
      behavior:'smooth',
    });
  }

  const handlerediect = () => {
    // toast.dismiss();
    // toast("Your Preffered Room is currently unavailable")
    alert(BlockBusData?.data?.Error?.ErrorMessage)
    // history.push("/bus/buslist")
    history.push("/bus")
    // history.push("/bus/buspayment")
  }

  const [onshow, setOnhow] = useState();
  useEffect(() => {
    const usertoken = JSON.parse(localStorage.getItem('token'))
    console.log("bbb", usertoken)
    if ((selected == true) && (usertoken) && (BlockBusData?.data?.Result)) {
      setOnhow(true)
      setPayLoader(false)
    }
    else if ((selected == true) && (usertoken) && (BlockBusData?.data?.Error)) {
      setOnhow(true)
      setPayLoader(false)
    }
    else if ((selected == true) && (usertoken)) {
      setPayLoader(true)
    }
    else {
      setOnhow(false)
    }
  }, [selected, BlockBusData])

  /* currency */
  const numberFormat = (value, cur) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0
    }).format(value);

  let history = useHistory();

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
        <Card.Body>
          <div className="row">
            <div className="col-8">
              <h6>Basefare</h6>
            </div>
            <div className="col-4">
              <h6>{numberFormat(busbaseFare, "INR")}</h6>
            </div>
          </div>
          {(discountprice != 0) ? (
            <div className="row  text-success">
              <div className="col-8">
                <h6>Discount</h6>
              </div>
              <div className="col-4">
                <h6>{numberFormat(discountprice, "INR")}</h6>
              </div>
            </div>
          ) : null}
          {(taxamount != 0) ? (
            <div className="row">
              <div className="col-8">
                <h6>Taxes &amp; fees</h6>
              </div>
              <div className="col-4">
                <h6>{numberFormat(taxamount, "INR")}</h6>
              </div>
            </div>
          ) : null}
          <hr />
          <div className="row">
            <div className="col-8">
              <h6>Total Amount</h6>
            </div>
            <div className="col-4">
              {/* <del className="fw-bold">{numberFormat(publishprice, "INR")}</del><br /> */}
              <h6 className="fw-bold text-danger">{numberFormat(publishprice, "INR")}</h6>
            </div>
            <br />
            {/* <div className=" d-grid gap-2 mt-2">
              {(selected == false) ? (
                <>
                  <h6 className="small text-danger text-center">Please fill the Traveler details</h6>
                  <Button variant="primary" disabled style={{ border: "orangered" }}>Pay  &amp; confirm now</Button>
                </>
              ) : (<Button variant="primary" onClick={() => handleSubmit(buslist.data.result[1].busdetails[0].ResultIndex)} style={{ border: "orangered" }}>Pay  &amp; confirm now</Button>)}
            </div> */}
            {(onshow == false && !payLoader) ? (
              <>
                <h6 className="small text-danger text-center">Please fill the Guest details and submit the form</h6>

              </>
            ) :
              (onshow == true && !payLoader) ? null :
                <div className='mt-2 text-center'>
                  <div class="snippet" data-title="dot-falling">
                    <div className="lds-dual-ring"></div>
                    <div class="stage text-success fw-bold">
                      Loading...
                    </div>
                  </div>
                </div>}
            {onshow && (
              <>
                {(BlockBusData?.data?.Result?.ResponseStatus === 1) ? (
                  <div className=" d-grid gap-2">
                    <>
                      <BusPayUForm busbookData={busbookData} gustRes={gustRes} busdata={busdata} PriceAmount={publishprice} />
                    </>
                  </div>
                ) : (<div className=" d-grid gap-2">
                  <>
                    <Button onClick={handlerediect}>Pay &amp; confirm now</Button>
                    <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                    />
                  </>
                </div>
                )}
              </>
            )}

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
