import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../buslist/buslist.scss';
import Arrow from '../../../asset/images/bus/arrow.png';
import { Tab, Tabs, Row, Col, Card, Button, TabPane, Form, Stack } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import { loadBusLayout } from '../../../store/actions/buslayout';
import moment from "moment";
import './busloader.scss';
import warning from "../../../asset/images/warning.png"
import nodata from '../../../asset/images/hotel/no-result-found.png'





const Busbookinglist = ({ filteredValue, handleError }) => {




    const buslistingdata = useSelector(state => state.Bus);
    const [busList, setBusList] = useState([])

    console.log("mani", buslistingdata)

    useEffect(() => {
        setBusList([])
        if (filteredValue) {
            setBusList(filteredValue)
        }
        else if (buslistingdata?.data?.Message) {
            setBusList([])
        }
    }, [filteredValue])






    // # Routing
    let history = useHistory();


    /* currency */
    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);




    const handleSubmit = (bus, result) => {
        if (boardingPoints == '') {
            setErrormsg('! Please Select the  Boarding Point');
        }
        else if (droppingPoints == '') {
            setErrormsg('! Please Enter the Dropping Point');
        }
        else {
            setErrormsg('')
            history.push("/bus/busconfirmation", { state: bus, result, price, seatNum, boardingPoints, boardLocation, droppingPoints, dropLocation, boardTime, dropTime })
        }

    }


    // fare details
    const [open, SetOpen] = useState(false);

    const [compare, setCompare] = useState('');
    const dispatch = useDispatch();

    const handleselect = (index, result) => {
        setCurrentTab(0)
        setBoardingPoints("")
        setDropingPoints("")
        if (compare === index) {
            SetOpen(!open);
        } else {
            SetOpen(true);
            setCompare(index)
        }
        const seatlayout = {
            "TraceId": buslistingdata.data.result[0].TraceId,
            "ResultIndex": result
        }
        dispatch(loadBusLayout(seatlayout));
        setPrice(0);
        setSeatnum([]);
    }

    // Boarding Point
    const [boardingPoints, setBoardingPoints] = useState('');
    const [boardLocation, setBoardLocation] = useState('');
    const [boardTime, setBoardTime] = useState('');

    const handleBoard = (event, locat, time) => {
        setBoardingPoints(event);
        setBoardLocation(locat)
        setBoardTime(time)
    }

    // Dropping Point
    const [droppingPoints, setDropingPoints] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [dropTime, setDropTime] = useState('');

    const handleDrop = (event, locat, time) => {
        setDropingPoints(event);
        setDropLocation(locat)
        setDropTime(time)
    }


    const [errormsg, setErrormsg] = useState('');
    const [price, setPrice] = useState(0);
    const [seatNum, setSeatnum] = useState([]);

    const Handleoverlay = (value) => {
        const divElement = value.target.outerHTML
        const myId = value.target.id
        const MyclassName = value.target.className
        const outerHtml = value.target.outerHTML
        const val = outerHtml.split("'")
        if (val[3] > 0) {
            if (!seatNum.includes(val[1])) {
                if (seatNum.length < 6) {
                    setPrice(price + parseInt(val[3]))
                    setSeatnum(oldArray => [...oldArray, val[1]]);
                    var classname = "s" + MyclassName
                    var element = document.getElementById(myId);

                    element.classList.add(classname);
                }
            }
            else {

                seatNum.splice(seatNum.indexOf(val[1]), 1)
                setPrice(price - parseInt(val[3]))
                var classname = MyclassName.split(" ")
                var element = document.getElementById(myId);
                element.classList.remove(classname[1]);
            }
        }
    }

    const handleClear = () => {
        setPrice(0);
        setSeatnum([]);
    }


    const [currentTab, setCurrentTab] = useState(0);
    const buslayout = useSelector(state => state.BusLayout);



    return (
        <>
            <div>

                {(busList.length > 0) ?
                    <h6>showing <span className="fw-bold">{busList.length}Buses</span></h6>
                    : null}
                <Card className='mb-3 '>
                    <Card.Body>
                        <Row className='fw-bold ms-2'>
                            <Col xs={3}>Bus</Col>
                            <Col className='text-end ms-4'>DEPARTURE</Col>
                            <Col className='text-end'>DURATION</Col>
                            <Col>ARRIVAL</Col>
                            <Col>PRICE</Col>
                            <Col></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            {(busList.length > 0) ? (busList).map((bus, index) => (
                <div key={index} className='busticketcard flightbookdetail'>
                    <div className='busticketcontent mt-3 pt-5'>
                        <Row className='px-3'>
                            <Col xs={3}>
                                <h6 className='fw-bold'>{bus.TravelName}</h6>
                                <h6 className='text-muted small'>{bus.BusType}</h6>
                            </Col>
                            <Col xs={2} className=" text-end">
                                <h5 className=' '>{moment(bus.DepartureTime).format("HH:mm")}</h5>
                                {(buslistingdata?.data?.length > 0) ? (
                                    <>
                                        <p className='datainfo'>{buslistingdata?.data?.result[0]?.source_city}</p>
                                    </>
                                ) : null}
                            </Col>
                            <Col xs={2} className='text-center'>
                                <img src={Arrow} alt="img" style={{ width: "100%", height: "25px" }} className="duration mb-0" />
                                <h6 className='text-danger'>
                                    {moment(bus.ArrivalTime).diff(moment(bus.DepartureTime), 'hours')}h:{(moment(bus.ArrivalTime).diff(moment(bus.DepartureTime), 'minutes')) - (moment(bus.ArrivalTime).diff(moment(bus.DepartureTime), 'hour') * 60)}m
                                </h6>
                            </Col>
                            <Col>
                                <h5 className='mb-0'>{moment(bus.ArrivalTime).format("HH:mm")}</h5>
                                {(buslistingdata?.data?.length > 0) ? (
                                    <>
                                        <span className='datainfo'>{buslistingdata?.data?.result[0]?.destination_city}</span>
                                    </>
                                ) : null}
                            </Col>
                            <Col>
                                <span className='h5 fw-bold text-danger'>{numberFormat(bus.Price.OfferedPriceRoundedOff, "INR")}</span>
                                <p className='fw-bold'>&nbsp;&nbsp;<del>{numberFormat(bus.Price.BasePrice, "INR")}{ }</del></p>

                            </Col>
                            <Col xs={2}>
                                <span className='float-end h6'>{bus.AvailableSeats} Seats Left</span>
                                <button className='btn btn-sm btn-primary bus-farebtn fw-bold w-100' onClick={() => handleselect(index, bus.ResultIndex)} >Select Seat</button>
                            </Col>
                        </Row>
                    </div>
                    {index === compare && open && (<div className='busmoreinfo container w-75 mt-4'>

                        <Tabs
                            defaultActiveKey="0"
                            id="uncontrolled-tab"
                            className="mb-3"
                            activeKey={currentTab}
                        >
                            <Tab eventKey={0} title="SELECT SEATS" className='pb-5' disabled={currentTab !== 0}>
                                <div className='seatinfo'>
                                    <div className='booked'></div>
                                    <label>booked</label>

                                    <div className='available'></div>
                                    <label>Available</label>

                                    <div className='ladies'></div>
                                    <label>Ladies</label>

                                    <div className='selected'></div>
                                    <label>Selected</label>
                                </div>

                                {(buslayout.data?.SeatLayoutDetails) ? (
                                    <>
                                        <>
                                            <Row className='mt-4'>
                                                <Col xs={8}>
                                                    <div dangerouslySetInnerHTML={{ __html: buslayout.data.SeatLayoutDetails.HTMLLayout }} onClick={(event) => Handleoverlay(event)}>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div class="bus-seat-status">
                                                        <p>Selected Seats <span className='text-primary'>No.{seatNum.length}</span></p>
                                                        <Form.Control type="text" className="busseats sts" name="seat_num" value={seatNum} readOnly />
                                                    </div>

                                                    <div class="bus-payment-col">
                                                        <p>You Pay</p>
                                                        <p >
                                                            <Form.Control type="text" className="pay-busrp" name="total_fair" value={price} readonly="" />
                                                        </p>
                                                    </div>
                                                    <Row className='px-3'>
                                                        {/* <Button className='col-5 mx-auto fw-bold' onClick={handleClear}>Clear</Button> */}
                                                        <Button
                                                            className="success fw-bold"
                                                            onClick={() => setCurrentTab((prev) => prev + 1)}
                                                            disabled={price === 0}
                                                        >
                                                            Next
                                                        </Button>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </>
                                    </>
                                ) :
                                    <div className='mt-4'>
                                        <div class="snippet" data-title="dot-falling">
                                            <div class="stage text-success fw-bold">
                                                Loading <div class="dot-falling"></div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {/* <div className='float-end mb-3'>
                                    <button className='btn btn-primary btn-sm'>CONTINUE</button>
                                </div> */}
                            </Tab>
                            <Tab eventKey={1} title="BOARDING AND DROPPING" className='pb-5' disabled={currentTab !== 1}>
                                <b><FontAwesomeIcon icon={faLocation} className="text-danger" />&nbsp;Select boarding and dropping point</b>
                                <Row className='mt-3'>
                                    {(boardingPoints === '' || droppingPoints === '') ? <h6 className="fw-bold text-danger">{errormsg}</h6> : null}
                                    <Col xs={4}>
                                        <Card className="p-2 boardingpoint" style={{ height: "270px" }} >
                                            <b>Boarding point</b>
                                            <Scrollbars >

                                                {bus.BoardingPoints && bus.BoardingPoints.map((data, index) => (
                                                    <div key={index} className="mt-2 ms-0">
                                                        <label htmlFor='boarding-point'>
                                                            <input type="radio" name="boarding-point" id="boarding-point" className='me-2' onClick={() => handleBoard(data.CityPointName, data.CityPointLocation, data.CityPointTime)} />
                                                            <b>{moment(data.CityPointTime).format("HH:mm")}</b>
                                                            <h6 className='fw-bold text-primary small'>{data.CityPointName}<br />
                                                                <span className='h6 text-dark small'>{data.CityPointLocation}</span></h6>
                                                        </label>
                                                    </div>
                                                ))}
                                            </Scrollbars>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card className="p-2" style={{ height: "270px" }}>
                                            <b>Dropping  point</b>
                                            <Scrollbars>
                                                {bus.DroppingPoints && bus.DroppingPoints.map((data, index) => (
                                                    <div key={index} className="mt-2 ms-0">
                                                        <label htmlFor='boarding-point'>
                                                            <input type="radio" name="droping-point" id="boarding-point" className='me-2' onClick={() => handleDrop(data.CityPointName, data.CityPointLocation, data.CityPointTime)} />
                                                            <b>{moment(data.CityPointTime).format("HH:mm")}</b>
                                                            <h6 className='fw-bold text-primary small'>{data.CityPointName}<br />
                                                                <span className='h6 text-dark small'>{data.CityPointLocation}</span></h6>
                                                        </label>
                                                    </div>
                                                ))}
                                            </Scrollbars>
                                        </Card>
                                    </Col>
                                    <Col >
                                        <Card className='pb-2' style={{ height: "100px" }}>
                                            <Card.Header>
                                                <h6 className='fw-bold'>Boarding Point</h6>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className='small'
                                                >
                                                    {boardingPoints}
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className='mt-2 pb-2' style={{ height: "100px" }} >
                                            <Card.Header>
                                                <h6 className='fw-bold'>Dropping Point</h6>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className='small'>{droppingPoints}</div>
                                            </Card.Body>
                                        </Card>
                                        <div className="row gap-2 my-3 ">
                                            <Button
                                                className="col-5 mx-auto fw-bold"
                                                onClick={() => setCurrentTab((prev) => prev - 1)}
                                            >
                                                Preview
                                            </Button>
                                            <Button
                                                disabled={droppingPoints === "" || boardingPoints === ""}
                                                className="col-5 mx-auto fw-bold"
                                                onClick={() => setCurrentTab((prev) => prev + 1)}
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>

                            </Tab>
                            <Tab eventKey={2} title="POLICIES" className='pb-5 bustable-style' disabled={currentTab !== 2}>
                                <table>
                                    <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                        <td>Time Slab</td>
                                        <td>Cancellation Charges</td>
                                    </tr>
                                    {bus.CancellationPolicies && bus.CancellationPolicies.map((data, index) => (
                                        <>
                                            <tr key={index}>
                                                <td>{data.PolicyString}</td>
                                                <td>{data.CancellationCharge}</td>
                                            </tr>
                                        </>
                                    ))}
                                    <tr><td className='note text-danger' colspan="2">Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by HOJOY. HOJOY does not levy any cancellation charges.</td></tr>
                                </table>
                                <div className='mt-3'>
                                    <b>Other important information</b>
                                    <div className='otherinfo'>
                                        <li key={index} className='mt-2'>Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments.</li>
                                        <li key={index} className='mt-2'>All discounts offered by HOJOY will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details.</li>
                                    </div>

                                </div>
                                <div className='text-end mt-3'>
                                    <Button
                                        className="fw-bold"
                                        onClick={() => setCurrentTab((prev) => prev - 1)}
                                    >
                                        Preview
                                    </Button>
                                    <Button className='fw-bold ms-3' onClick={() => handleSubmit(bus, bus.ResultIndex)} >Continue</Button>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    )}
                </div>
            )) : (handleError) ? (
                <Card className='ms-4 noData'>
                    <p className="text-center my-auto"><img src={nodata} alt={nodata} width="40%" height="60%" /></p>
                </Card>
            )
                : (buslistingdata?.data?.Message) ?

                    (<Card className='ms-4 text-center'>
                        <h2>Something went wrong</h2>
                        <p className="text-center"><img src={warning} alt={warning} width="30%" height="30%" /></p>
                        <h5 className=" fw-bold">{buslistingdata?.data?.Message}</h5>
                    </Card>)

                    : <Card>
                        <div class="loader-wrapper  text-end pb-3">
                            <div class="truck-wrapper">
                                <div class="truck">
                                    <div class="truck-container"></div>
                                    <div class="glases"></div>
                                    <div class="bonet"></div>

                                    <div class="base"></div>

                                    <div class="base-aux"></div>
                                    <div class="wheel-back"></div>
                                    <div class="wheel-front"></div>

                                    <div class="smoke"></div>
                                </div>
                            </div>

                        </div>
                        <h6 className='fw-bold text-center'>Please Wait ...</h6>
                        <h6 className='fw-bold text-center mb-3'>We are searching the best Buses for you</h6>
                    </Card>
            }
        </>
    )

}
export default Busbookinglist;
