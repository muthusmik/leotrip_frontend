import React, { useState, useEffect } from 'react';
import '../../flightlist/flightlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1, faSortNumericUp, faSortNumericDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Flight from '../../../../asset/images/flight/flight.png';
import Seat from '../../../../asset/images/flight/seat.png';
import { Tabs, Tab, Card, Row, Col, Button } from 'react-bootstrap';
import Bag from "../../../../asset/images/flight/bag.png";
import Cabin_Bag from "../../../../asset/images/flight/cabin-baggage.png";
import TravelSeat from "../../../../asset/images/flight/travelseat.png";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadFlightOneway } from '../../../../store/actions/flightoneway';
import { loadFlightOnewayInfo } from '../../../../store/actions/flightonewayinfo';
import Parser from 'html-react-parser';
import moment from "moment";
import nomessage from "../../../../asset/images/nomessage.png"
import './loader.scss';
import nodata from '../../../../asset/images/hotel/no-result-found.png'
import { useLocation } from 'react-router-dom';

const Flightbookinglist = ({ filteredValue, handleError }) => {


    /* # STORE */
    const FlightSearchList = useSelector(state => state.FlightSearch);
    const dispatch = useDispatch();
    const origin = FlightSearchList?.data?.Origin;
    const Destination = FlightSearchList?.data?.Destination;
    const location = useLocation()
    const traveldetails = location.state.state
    console.log("traveldetails", traveldetails)

    const [flightList, setFlightList] = useState([])

    useEffect(() => {
        setFlightList([])
        if (filteredValue) {
            setFlightList(filteredValue)
            console.log("flightSet value2", filteredValue)
        }
        else if (FlightSearchList?.data?.Message) {
            setFlightList("")
        }
        setSorting(true)
    }, [filteredValue])

    console.log("flightSet value", filteredValue)


    /* # fare opening */
    const [open, SetOpen] = useState(false);

    const [compare, setCompare] = useState('');

    const handleselect = (index) => {

        if (compare === index) {
            SetOpen(!open);
        } else {
            SetOpen(true);
            setCompare(index)
        }
    }


    /*  # To fetch card only one at a time */

    const [show, setShow] = useState(false);

    const [view, setView] = useState('');

    const handleselection = (index, idx) => {
        if (view === index) {
            setShow(!show);
        } else {
            setShow(true);
            setView(index)
        }
    }




    /* # Booking Routing */
    let history = useHistory();

    const handleRoute = (SrdvIndex, ResultIndex) => {

        const flightoneway = {
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvType": "MixAPI",
            "TraceId": FlightSearchList.data.TraceId,
            "ResultIndex": ResultIndex,
            "SrdvIndex": SrdvIndex,
        }
        dispatch(loadFlightOneway(flightoneway));

        const flightonewayinfo = {
            "EndUserIp": "107.180.105.183",
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvType": "MixAPI",
            "TraceId": FlightSearchList.data.TraceId,
            "ResultIndex": ResultIndex,
            "SrdvIndex": SrdvIndex,
        }
        dispatch(loadFlightOnewayInfo(flightonewayinfo));
        // fare quote dispatch here

        history.push('/flight/flightconfirmation', { state: traveldetails })

    };

    //    # country currency formatting

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    const flightoneway = useSelector(state => state.FlightOneway);
    // console.log(flightoneway, "flight fare detais.good...........")


    /*  # Arrival Time */
    const HandleArrivalTime = (data) => {

        if (data.length == 1) {
            var index = data[0].ArrTime
            return (
                moment(index).format("HH:mm")
            )
        }
        else if (data.length > 1) {
            var index = data.length - 1;
            var final = data[index].ArrTime
            return (
                moment(final).format("HH:mm")
            )
        }
    }

    /*  # Stop Handle */

    const HandleConnecting = (value) => {
        if (value.length == 1) {
            return (
                <>
                    Direct
                </>
                // value.length - 1 + " " + "Stop"
            )
        }
        else if (value.length > 1) {
            return (
                value.length - 1 + " " + "Stop"
                //value[0].Destination.AirportCode
            )
        }
    }

    //airline logo
    const AirLineList = useSelector(state => state.AirLine);
    function hanldeAirline(val) {
        const filterFlightname = (AirLineList.data).filter((a) => (((a.id).toUpperCase()).localeCompare(val.toUpperCase()) === 0));

        return filterFlightname[0]?.logo

    }
    /*    # Card Duration */


    const HandleDuration = (value) => {

        if (value.length == 1) {
            var Hours = Math.floor(value[0].Duration / 60)
            var minute = value[0].Duration % 60
            var duration = Hours + "h:" + minute + "m"
            return (
                duration
            )
        }
        else if (value.length > 1) {
            var index = value.length - 1;
            var Total = (value[index].AccumulatedDuration)

            let Hours = Math.floor(Total / 60)
            var minute = Total % 60

            var duration = Hours + "h:" + minute + "m"
            return (
                duration
            )
        }
    }

    /* # Refund */

    const handleRefund = (value) => {
        if (value == true) {
            return (
                <>
                    <FontAwesomeIcon icon={faMoneyBill1} />&nbsp;Refundable
                </>
            )
        }
        else {
            return (
                null
            )
        }
    }


    /*    # Inner Card Duration */

    const HandleBtw = (value) => {


        var Hours = Math.floor(value.Duration / 60)
        var minute = value.Duration % 60
        var duration = Hours + "h:" + minute + "m"
        return (
            duration
        )

    }

    //sorting by price
    function desPrice(a, b) {
        if (a.OfferedFare > b.OfferedFare) return -1;
        if (a.OfferedFare < b.OfferedFare) return 1;
        return 0;
    }
    function ascPrice(a, b) {
        if (a.OfferedFare > b.OfferedFare) return 1;
        if (a.OfferedFare < b.OfferedFare) return -1;
        return 0;
    }
    const [sorting, setSorting] = useState(false);
    const [isAsc, setIsAsc] = useState(true);
    const sortByPrice = () => {
        if (sorting) {
            const sorted = [...flightList].sort(ascPrice)
            setSorting(false)
            setIsAsc(true)
            setFlightList(sorted);
        }
        else {
            const sorted = [...flightList].sort(desPrice)
            setSorting(true)
            setIsAsc(false)
            setFlightList(sorted);
        }

    };


    return (
        <div className='ticket-content flightbookdetail'>
            <h6 className='flight-result'>showing <span className="fw-bold">{flightList?.length} Flights</span></h6>
            <Card className='my-2 pt-3'>
                <ul className='labellist'>
                    <li>AIRLINE</li>
                    <li>DEPARTURE</li>
                    <li className='ms-5'>DURATION</li>
                    <li className='ms-5'>ARRIVAL</li>
                    <li className='ms-2'></li>
                    <li onClick={sortByPrice}>PRICE {isAsc === true ? <FontAwesomeIcon icon={faSortNumericDown} /> : <FontAwesomeIcon icon={faSortNumericUp} />}</li>
                    <li className='me-5'></li>
                    <li className='me-3'>BEST VALUE</li>
                </ul>
            </Card>
            {(flightList?.length > 0) ? flightList.map((flight, index) => (
                        
                        <Card className='mb-3'>
                            <div className='ticketcontent py-2' key={index}>
                                <Row>
                                    <Col xs={2}>
                                        <div className='ticketdata text-center ms-1'>
                                            <div className='ms-4'>
                                                <h6 className="my-0"><img src={hanldeAirline(flight?.Segments[0][0]?.Airline?.AirlineCode)} height={30} width={40} /></h6>
                                                <p className='mb-0'>{flight?.Segments[0][0]?.Airline?.AirlineName}</p>
                                                <span className='datainfo'>{flight?.Segments[0][0]?.Airline?.AirlineCode}-{flight.Segments[0][0].Airline?.FlightNumber}</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={9} sm={8}>
                                        <Row>
                                            <Col xs={3} className='text-wrap text-start mt-2' style={{ wordWrap: "break-word" }}>
                                                <h5 className='mb-0'>{moment(flight.Segments[0][0].DepTime).format("HH:mm")}</h5>
                                                <h6 className='text-wrap' >{origin}</h6>

                                            </Col>
                                            <Col xs={2} className='text-center'>
                                                <small className='mb-0'>{HandleConnecting(flight.Segments[0])}</small>
                                                <img src={Flight} alt="img" className="path" style={{ marginTop: "-15px" }} />
                                                <h6 className='datainfo '>{HandleDuration(flight.Segments[0])}</h6>
                                                {/* <h6 className='datainfo'>{moment({}).seconds(flight.Segments[0][0].Duration).format("HH:mm")}</h6> */}
                                            </Col>
                                            <Col xs={3} className="mt-2 text-end ">
                                                <h5 className='mb-0'>{HandleArrivalTime(flight?.Segments[0])}</h5>
                                                <h6 className='text-wrap'>{Destination}</h6>
                                            </Col>
                                            {/* <Col xs={1}></Col> */}
                                            {/* <Col xs={1} className="text-end">
                                        <img src={Seat} alt="img" className="seat mb-0" />
                                        <p>{flight.FareDataMultiple[0].FareSegments[0].NoOfSeatAvailable}<span className='labelnote'>LEFT</span></p>
                                    </Col> */}
                                            <Col xs={3} className='text-end mt-2'>
                                                <span className='h5 fw-bold'>{numberFormat(flight.FareDataMultiple[0].Fare.PublishedFare, flight.FareDataMultiple[0].Fare.Currency)} </span> <br />
                                                <small> Seat(s) Left<b>:</b> <b className='text-danger'>{flight.FareDataMultiple[0].FareSegments[0].NoOfSeatAvailable}</b></small>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={1} sm={2} className='text-end mt-2'>
                                        <Button size='sm' className='me-3 farebtn' onClick={() => handleselect(index)}>View Fare</Button>

                                        <p className='moreinfobtn  me-3 mb-0' onClick={() => handleselection(index)} ><FontAwesomeIcon icon={faPlus} /> Flight Details</p>
                                        {/* <small className="refund mt-0 me-3  fw-bold"><FontAwesomeIcon icon={faMoneyBill1}/> Refundable</small> */}
                                        <small className="refund mt-0 me-3  fw-bold">{handleRefund(flight.FareDataMultiple[0].IsRefundable)}</small>
                                        {/* <small className="refund mt-0 me-3  fw-bold">{!flight.FareDataMultiple[0].IsLCC ? "GDS" : "LCC"}</small> */}

                                    </Col>
                                </Row>
                            </div>
                            {index === compare && open && (
                                <div className='FareSegments'>
                                    <div className='fare-package mt-3'>

                                        <div className='fw-bold' >
                                            <Row >
                                                {(flightList?.length > 0) ? flight.FareDataMultiple.map((pricedata, idx) => (
                                                    <>
                                                        <Row className='fare-package_details ms-4 mb-2 p-2'>
                                                            <Col>
                                                                {/* <h6>package&nbsp;{idx + 1}</h6> */}
                                                                <div className='d-flex'>
                                                                    <h5 className='text-dark fw-bold'>{pricedata.Source}</h5>
                                                                    {/* <div className='package_Flightname d-flex'>
                                                                    <p className='text-danger fw-bold'>{data[0].AirlineName}</p>&nbsp;
                                                                    <small className='text-primary'>{data[0].AirlineCode}-{data[0].FlightNumber}</small>
                                                                </div> */}
                                                                </div>
                                                                <table>
                                                                    <tr>
                                                                        <td><img src={Bag} alt="img" /><span>Check-in baggage</span></td>
                                                                        <td>{pricedata.FareSegments[0].Baggage}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src={TravelSeat} alt="img" /><span>Class</span></td>
                                                                        <td>{pricedata.FareSegments[0].FareClass}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src={Cabin_Bag} alt="img" /><span>Cabin baggage</span></td>
                                                                        <td>{pricedata.FareSegments[0].CabinBaggage}</td>
                                                                    </tr>
                                                                </table>
                                                            </Col>
                                                            <Col xs={3}>
                                                                <div className='fare-package_price'>
                                                                    <h5 className='h5 text-danger fw-bold'>{numberFormat(pricedata.Fare.PublishedFare, pricedata.Fare.Currency)}</h5>
                                                                    <button className='btn btn-primary btn-sm' onClick={() => handleRoute(pricedata.SrdvIndex, pricedata.ResultIndex)}>Book Now</button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </>
                                                )) : null}
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {index === view && show && (
                                <div className='moreinfo'>
                                    <Tabs
                                        defaultActiveKey="overview"
                                        id="uncontrolled-tab"
                                        className=" mb-3"
                                        fill
                                    >
                                        <Tab eventKey="overview" title="OVERVIEW" className='pb-5'>
                                            {flight.Segments[0].map((data, index) => (
                                                <div className=' overviews mb-2' key={index}>
                                                    <Row className='mt-3'>
                                                        <Col xs={2}>
                                                            {/* <img src={card.path} alt="img" style={{ height: "35px", width: "35px" }} /> */}
                                                            <div className='ms-2'>
                                                                <p className='mb-0'>{data.Airline.AirlineName}</p>
                                                                <span className='datainfo'>{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</span>
                                                            </div>
                                                        </Col>

                                                        <Col className='text-end'>
                                                            <p className='mb-0'><b>{data.Origin.CityName}</b></p>
                                                            <h6 className='mb-0 mt-0'>{moment(data.DepTime).format("HH:mm")}</h6>
                                                            <span className='mt-0 dep-label'>{data.Origin.AirportName}</span>
                                                        </Col>
                                                        <Col className='text-center '>
                                                            <img src={Flight} alt="img" className="path mb-0" />
                                                            <h6 className='datainfo '>{HandleBtw(flight.Segments[0][index])}</h6>
                                                        </Col>
                                                        <Col className=''>
                                                            <p className='mb-0'><b>{data.Destination.CityName}</b></p>
                                                            <h6 className='mb-0 mt-0'>{moment(data.ArrTime).format("HH:mm")}</h6>
                                                            <span className='mt-0 dep-label'>{data.Destination.AirportName}</span>
                                                        </Col>
                                                        {/* <li>

                                                </li> */}
                                                    </Row>
                                                </div>
                                            ))}
                                        </Tab>
                                        <Tab eventKey="faredetails" title="FARE DETAILS" className='pb-5 table-style'>
                                            <h5 className='ms-4'>Fare Summary</h5>
                                            <table className='table-style'>
                                                <tr>
                                                    <td>Base Fare <span className='price-label'>(1 Adult )</span></td>
                                                    <td>{numberFormat(flight.FareDataMultiple[0].Fare.BaseFare, flight.FareDataMultiple[0].Fare.Currency)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Taxes and Fees</td>
                                                    <td>{numberFormat(flight.FareDataMultiple[0].Fare.Tax, flight.FareDataMultiple[0].Fare.Currency)} </td>
                                                </tr>
                                                <tr>
                                                    <td><b>Total Fare</b></td>
                                                    <td className='text-danger'><b> {numberFormat(flight.FareDataMultiple[0].Fare.BaseFare + flight.FareDataMultiple[0].Fare.Tax, flight.FareDataMultiple[0].Fare.Currency)}</b></td>
                                                </tr>
                                            </table>
                                        </Tab>
                                        <Tab eventKey="baggage" title="BAGGAGE RULES" className='pb-5 table-style'>
                                            <h5 className='ms-4'>Baggage Summary</h5>
                                            <table>
                                                <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                    <td>Sector/Flight</td>
                                                    <td>Check in Baggage</td>
                                                    <td>Cabin Baggage</td>
                                                </tr>
                                                <tr>
                                                    <td>{FlightSearchList.data.Origin} - {FlightSearchList.data.Destination}({flight?.Segments[0][0]?.Airline?.AirlineCode}-{flight.Segments[0][0].Airline?.FlightNumber})</td>
                                                    <td>{flight.FareDataMultiple[0].FareSegments[0].Baggage}</td>
                                                    <td>{flight.FareDataMultiple[0].FareSegments[0].CabinBaggage}</td>
                                                </tr>
                                            </table>
                                        </Tab>
                                        {/* <Tab eventKey="cancellation" title="CANCELLATION RULES" >
                                    <div className='cancellation'>
                                        <div className='CancellationCharges'>
                                            {(flightoneway.data?.length > 0) ? flightoneway.data[0].result?.Results.map((cancel, index) => (
                                                // <div className='table-style ms-4' key={index}>
                                                //     {Parser(cancel.FareRuleDetail)}
                                                // </div>
                                                <div dangerouslySetInnerHTML={{__html:(cancel.FareRuleDetail)}}></div>
                                            )) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "40px", paddingLeft: "400px", fontSize: "20px", color: "darkblue", height: "100px" }}>
                                                <span className="spinner-border spinner-border-sm"></span>
                                                &nbsp;Loading....
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </Tab> */}
                                    </Tabs>
                                </div>
                            )}
                        </Card>
                   
            )) : (handleError) ? (
                <Card className='ms-4 noData'>
                    {/* <h2>No Data Found</h2> */}
                    <p className="text-center my-auto"><img src={nodata} alt={nodata} width="40%" height="60%" /></p>
                </Card>
            )
                : (FlightSearchList?.data?.Message) ? (
                    <Card className="border-0 h-50">
                        <div className='ms-4 text-center oops-page mt-4'>
                            <p><img src={nomessage} alt={nomessage} width="30%" height="30%" /></p>
                            <h4 className='fw-bold mt-5'><span style={{ fontSize: "25px" }}>O</span>ops! try again later </h4>
                        </div>
                    </Card>
                ) : <div className='Loader text-center pb-3 '>
                    <svg class="svg-calLoader " xmlns="http://www.w3.org/2000/svg" width="230" height="230">
                        <path class="cal-loader__path" d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z" fill="none" stroke="#0099CC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 10 10 10 10 10 10 432" stroke-dashoffset="77" />
                        <path class="cal-loader__plane " d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z" fill="#000033" />
                    </svg>
                    <h6 className='fw-bold'>Please Wait ...</h6>
                    <h6 className='fw-bold'>We are searching the best flights for you</h6>
                </div>
            }
        </div>
    )

}
export default Flightbookinglist;
