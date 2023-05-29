import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Flight from '../../../../asset/images/flight/flight.png';
import { Tabs, Tab, Card, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector, useStore } from "react-redux";
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import warning from "../../../../asset/images/warning.png";
import nomessage from "../../../../asset/images/nomessage.png"
import moment from "moment";
import './loader.scss';
import { useHistory } from "react-router-dom";
import { loadFlightOneway } from '../../../../store/actions/flightoneway';
import { loadFlightOnewayInfo } from '../../../../store/actions/flightonewayinfo';
import { loadFlightReturnInfo } from '../../../../store/actions/flightreturninfo';
import { clearReducer } from '../../../../store/actions/flightreturninfo';
import { useLocation } from 'react-router-dom';
import nodata from '../../../../asset/images/hotel/no-result-found.png'
import Bag from "../../../../asset/images/flight/bag.png";
import Cabin_Bag from "../../../../asset/images/flight/cabin-baggage.png";
import TravelSeat from "../../../../asset/images/flight/travelseat.png";


const Flightbookinglist = ({ firstfilteredValue, secondfilteredValue, handleError }) => {

    let history = useHistory();
    const location = useLocation();
    const [firstFlight, setFirstFlight] = useState([])
    const [firstFlightchosen, setFirstFlightchosen] = useState([])
    const [secondFlightchosen, setSecondFlightchosen] = useState([])
    const [firstflightprice, setfirstflightprice] = useState()
    const [firstflightsrdvindex, setFirstflightsrdvindex] = useState()
    const [firstflightresultindex, setFirstflightresultindex] = useState()
    const [secondflightprice, setSecondflightprice] = useState()
    const [secondflightsrdvindex, setSecondflightsrdvindex] = useState()
    const [secondflightresultindex, setSecondflightresultindex] = useState()


    const handleChange = (card, SrdvIndex, ResultIndex, price) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setFirstFlightchosen(card)
        setFirstflightsrdvindex(SrdvIndex)
        setFirstflightresultindex(ResultIndex)
        setfirstflightprice(price)
    }


    const [secondFlight, setSecondFlight] = useState([])

    const handleModify = (card, SrdvIndex, ResultIndex, price) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setSecondFlightchosen(card)
        setSecondflightsrdvindex(SrdvIndex)
        setSecondflightresultindex(ResultIndex)
        setSecondflightprice(price)
    }

    /*     ## Calling data */

    const [flightList, setFlightList] = useState()

    const FlightSearchList = useSelector(state => state.FlightSearch);
    const AirLineList = useSelector(state => state.AirLine);
    const origin = FlightSearchList?.data?.Origin;
    const Destination = FlightSearchList?.data?.Destination;

    useEffect(() => {
        setFirstFlight([])
        setSecondFlight([])
        if (FlightSearchList) {
            setFlightList(FlightSearchList)

            if ((firstfilteredValue) || (secondfilteredValue)) {
                setFirstFlight(firstfilteredValue)
                setSecondFlight(secondfilteredValue)
                setFirstFlightchosen(firstfilteredValue[0])
                setSecondFlightchosen(secondfilteredValue[0])
            }
            else if (FlightSearchList?.data?.Message) {
                setFirstFlight("")
                setSecondFlight("")
            }
        }
    }, [firstfilteredValue, secondfilteredValue])


    console.log("DMK", firstFlight, "HJ...........", firstfilteredValue)
    console.log("ADMK", secondFlight, "GG............", secondfilteredValue)


    /*  # Stop Handle */

    const HandleConnecting = (value) => {

        if (value.length == 1) {
            return (
                value.length - 1 + " " + "Stop"
            )
        }
        else if (value.length > 1) {
            return (
                value.length - 1 + " " + "Stop"
                //value[0].Destination.AirportCode
            )
        }
    }

    function hanldeAirline(val) {

        const filterFlightname = (AirLineList.data).filter((a) => (((a.id).toUpperCase()).localeCompare(val.toUpperCase()) === 0));

        return filterFlightname[0].logo
    }
    /*    # Card Duration */

    const handleReturnBook = (ResultIndex, SrdvIndex) => {

        const flightoneway = {
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvType": "MixAPI",
            "TraceId": flightList.data.TraceId,
            "ResultIndex": ResultIndex,
            "SrdvIndex": SrdvIndex,
        }
        const tertiary = dispatch(loadFlightOneway(flightoneway));
        console.log("tertiary", tertiary);
        const flightonewayinfo = {
            "EndUserIp": "107.180.105.183",
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvType": "MixAPI",
            "TraceId": flightList.data.TraceId,
            "ResultIndex": ResultIndex,
            "SrdvIndex": SrdvIndex,
        }
        dispatch(loadFlightOnewayInfo(flightonewayinfo));
        dispatch(clearReducer())
        history.push('/flight/flightconfirmation', { state: traveldetails, mode: "roundtrip" })
    }

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

    /*  # Arrival Time  */
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

    //    # country currency formatting

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);


    /* # Refund */

    const handleRefund = (value) => {
        if (value == true) {
            return (
                <>
                    <FontAwesomeIcon icon={faMoneyBill1} />&nbsp;R
                </>
            )
        }
        else {
            return (
                null
            )
        }
    }

    /* # returnfare opening */
    const [openrtnfare, SetOpenrtnfare] = useState(false);

    const [farertncompare, setFarertncompare] = useState('');

    const handleRtnFareselect = (index) => {

        if (farertncompare === index) {
            SetOpenrtnfare(!openrtnfare);
        } else {
            SetOpenrtnfare(true);
            setFarertncompare(index)
        }
    }

    /* # fare opening */
    const [openfare, SetOpenfare] = useState(false);

    const [farecompare, setFarecompare] = useState('');

    const handleFareselect = (index) => {

        if (farecompare === index) {
            SetOpenfare(!openfare);
        } else {
            SetOpenfare(true);
            setFarecompare(index)
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

    /* # depature flight fare opening */
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


    /*  # return flight To fetch card only one at a time */

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
    const traveldetails = location.state.state

    const dispatch = useDispatch();
    const handleRoute = () => {

        const flightoneway = {
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvType": "MixAPI",
            "TraceId": flightList.data.TraceId,
            "ResultIndex": firstflightresultindex,
            "SrdvIndex": firstflightsrdvindex,
        }
        dispatch(loadFlightOneway(flightoneway));

        const flightonewayinfo = {
            "EndUserIp": "107.180.105.183",
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvType": "MixAPI",
            "TraceId": flightList.data.TraceId,
            "ResultIndex": firstflightresultindex,
            "SrdvIndex": firstflightsrdvindex,
        }
        dispatch(loadFlightOnewayInfo(flightonewayinfo));
        const flightReturninfo = {
            "EndUserIp": "107.180.105.183",
            "ClientId": "180109",
            "UserName": "SKdigPa8",
            "Password": "A$JSkEf4#4",
            "SrdvType": "MixAPI",
            "TraceId": flightList.data.TraceId,
            "ResultIndex": secondflightresultindex,
            "SrdvIndex": secondflightsrdvindex,
        }
        dispatch(loadFlightReturnInfo(flightReturninfo));
        // fare quote dispatch here

        history.push
            ('/flight/flightreturnconform', { state: traveldetails })

    };

    return (
        <>
            {(firstFlight.length > 0) && (secondFlight.length > 0) ? (
                <>

                    <div className='yourselection'>
                        <h6 className='small ms-2 mt-1 fw-bold text-success'>Your Selection</h6>
                        <div>
                            <div className='ms-4 mt-3'>
                                <ul className='d-flex p-3'>
                                    <li>
                                        <div className='ticketdata-roundtrip d-block'>
                                            <div>
                                                <h6 className="text-center my-0"><img src={hanldeAirline(firstFlightchosen?.Segments[0][0]?.Airline?.AirlineCode)} height={30} width={40} /></h6>
                                                <p className='mb-0'>{firstFlightchosen.Segments[0][0]?.Airline?.AirlineName}</p>
                                                <span className='datainfo-roundtrip'>{firstFlightchosen.Segments[0][0]?.Airline?.AirlineCode} ( {firstFlightchosen.Segments[0][0]?.Airline?.FlightNumber} )</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='me-3 my-auto'>
                                        <h6 className='fw-bold mb-0'>{moment(firstFlightchosen.Segments[0][0]?.DepTime).format("HH:mm")}</h6>
                                        <span className='datainfo-roundtrip'>{origin}</span>
                                    </li>
                                    <li className='ms-3 my-auto'>
                                        <small className='mb-0'>{HandleConnecting(firstFlightchosen.Segments[0])}</small><br />
                                        <img src={Flight} alt="img" className="path mb-0" style={{ marginTop: "-15px" }} />
                                        <h6 className='datainfo_time-roundtrip ms-1'>{HandleDuration(firstFlightchosen.Segments[0])}</h6>
                                    </li>
                                    <li className='ms-3 my-auto'>
                                        <h5 className='mb-0'>{HandleArrivalTime(firstFlightchosen?.Segments[0])}</h5>
                                        <span className='datainfo-roundtrip'>{Destination}</span>
                                    </li>
                                    {(firstflightprice) ? (
                                        <li className='my-auto'>
                                            <span className='ticketprice-roundtrip d-flex justify-content-end'>{numberFormat(firstflightprice, firstFlightchosen.FareDataMultiple[0].Fare.Currency)}</span>
                                            {/* <p className='moreinfobtn  float-end mb-0' ><FontAwesomeIcon icon={faPlus} />&nbsp;Details</p> */}
                                        </li>
                                    ) : (
                                        <li className='my-auto'>
                                            {/* <span className='ticketprice-roundtrip d-flex justify-content-end'>{numberFormat(firstflightprice, firstFlightchosen.FareDataMultiple[0].Fare.Currency)}</span> */}
                                            {/* <p className='moreinfobtn  float-end mb-0' ><FontAwesomeIcon icon={faPlus} />&nbsp;Details</p> */}
                                        </li>
                                    )}
                                    <li className='border-start border-2 border-success '>
                                        <div className='ticketdata-roundtrip d-block ms-4'>
                                            <div>
                                                <h6 className="text-center my-0"><img src={hanldeAirline(secondFlightchosen?.Segments[0][0]?.Airline?.AirlineCode)} height={30} width={40} /></h6>
                                                <p className='mb-0'>{secondFlightchosen?.Segments[0][0]?.Airline?.AirlineName}</p>
                                                <span className=' mt-0 datainfo-roundtrip'>{secondFlightchosen?.Segments[0][0]?.Airline?.AirlineCode} ({secondFlightchosen.Segments[0][0].Airline?.FlightNumber})</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='me-3 my-auto'>
                                        <h5 className='datainfo_duration-roundtrip mb-0'>{moment(secondFlightchosen.Segments[0][0].DepTime).format("HH:mm")}</h5>
                                        <span className='datainfo_location-roundtrip'>{Destination}</span>
                                    </li>
                                    <li className='ms-3 my-auto'>
                                        <small className='mb-0'>{HandleConnecting(secondFlightchosen.Segments[0])}</small><br />
                                        <img src={Flight} alt="img" className="pathflip mb-0" style={{ marginTop: "-15px" }} />
                                        <h6 className='datainfo_time-roundtrip ms-1'>{HandleDuration(secondFlightchosen.Segments[0])}</h6>
                                    </li>
                                    <li className='ms-3 my-auto'>
                                        <h5 className='datainfo_duration-roundtrip mb-0'>{HandleArrivalTime(secondFlightchosen?.Segments[0])}</h5>
                                        <span className='datainfo_location-roundtrip'>{origin}</span>
                                    </li>
                                    {(secondflightprice) ? (
                                        <li className='my-auto'>
                                            <span className='ticketprice-roundtrip d-flex justify-content-end'>{numberFormat(secondflightprice, secondFlightchosen.FareDataMultiple[0].Fare.Currency)}</span>
                                            {/* <p className='moreinfobtn  float-end mb-0' ><FontAwesomeIcon icon={faPlus} />&nbsp;Details</p> */}
                                        </li>
                                    ) : (
                                        <li className='my-auto'>
                                            {/* <span className='ticketprice-roundtrip d-flex justify-content-end'>{numberFormat(firstflightprice, firstFlightchosen.FareDataMultiple[0].Fare.Currency)}</span> */}
                                            {/* <p className='moreinfobtn  float-end mb-0' ><FontAwesomeIcon icon={faPlus} />&nbsp;Details</p> */}
                                        </li>
                                    )}
                                    {((firstflightprice) && (secondflightprice)) ? (
                                        <div className='me-4 border-start border-2 border-success'>
                                            <div className='ms-3'>
                                                <h4><b>{numberFormat((firstflightprice + secondflightprice), firstFlightchosen.FareDataMultiple[0].Fare.Currency)}</b></h4>
                                                <button className='btn btn-primary text-white' onClick={() => handleRoute()}><b>Book Now</b></button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='me-4 border-start border-2 border-success'>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row ticket-content'>

                        <>
                            <div className='col-6'>
                                <div className=''>
                                    {(firstFlight.length > 0) ?
                                        <div className="mt-2 mb-0 ms-2">
                                            <small className='flight-result'>Showing <span className="fw-bold mb-0">{firstFlight?.length}&nbsp;Flights</span></small>
                                        </div>
                                        : <div className="mt-2 ms-2">
                                            <small className='flight-result'>Showing <span className="fw-bold mb-0">0&nbsp;Flights</span></small>
                                        </div>}
                                    <Card className='ticketlabels-roundtrip mt-2'>
                                        <ul className='labellist mt-2'>
                                            <li className='ms-2'>AIRLINE</li>
                                            <li>DEPARTURE</li>
                                            <li>DURATION</li>
                                            <li>ARRIVAL</li>
                                            <li className='me-4'>PRICE</li>
                                        </ul>
                                    </Card>
                                    {firstFlight.map((flightdata, index) => (
                                        
                                                <div key={index} className='ticketcard-roundtrip flightbookdetail'>
                                                    <div className='ticketcontent-roundtrip p-3'>
                                                        <div className='row my-auto'>
                                                            <div className='package-selection  col-3'>
                                                                <div className='d-flex'>
                                                                    <div className='my-auto'>
                                                                        {/* <input type="radio" name="first" onClick={() => handleChange(flightdata)} defaultChecked={index == 0} /> */}
                                                                    </div>
                                                                    <div className='ticketdata-roundtrip ms-3 d-block text-end'>
                                                                        <h6 className="text-center my-0"><img src={hanldeAirline(flightdata?.Segments[0][0]?.Airline?.AirlineCode)} height={30} width={40} /></h6>
                                                                        <p className='mb-0'>{flightdata?.Segments[0][0]?.Airline?.AirlineName}</p>
                                                                        {/* <span className='datainfo-roundtrip'>{flightdata?.Segments[0][0]?.Airline?.AirlineCode}-{flightdata.Segments[0][0].Airline?.FlightNumber}</span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col'>
                                                                <h5 className='datainfo_duration-roundtrip mb-0'>{moment(flightdata.Segments[0][0].DepTime).format("HH:mm")}</h5>
                                                                <span className='datainfo_location-roundtrip'>{origin}</span>
                                                            </div>
                                                            <div className='col ms-2'>
                                                                <small className='mb-0'>{HandleConnecting(flightdata.Segments[0])}</small>
                                                                <img src={Flight} alt="img" className="path mb-0" style={{ marginTop: "-15px" }} />
                                                                <h6 className='datainfo_time-roundtrip ms-1'>{HandleDuration(flightdata.Segments[0])}</h6>
                                                            </div>
                                                            <div className='col'>
                                                                <h5 className='datainfo_duration-roundtrip mb-0'>{HandleArrivalTime(flightdata?.Segments[0])}</h5>
                                                                <span className='datainfo_location-roundtrip'>{Destination}</span>
                                                            </div>
                                                            <div className='col'>
                                                                <Button size='sm' className='farebtn_rtrip' onClick={() => handleFareselect(index)}>View Fare</Button>
                                                                {/* <span className='ticketprice-roundtrip d-flex justify-content-end'>{numberFormat(flightdata.OfferedFare, flightdata.FareDataMultiple[0].Fare.Currency)}</span> */}
                                                                <p className='moreinfobtn  float-end mb-0' onClick={() => handleselect(index)} ><FontAwesomeIcon icon={faPlus} />&nbsp;Details</p>
                                                                <small className="refund-roundtrip mt-0 float-end fw-bold">{handleRefund(flightdata.FareDataMultiple[0].IsRefundable)}</small>
                                                                {/* <small className="refund-roundtrip mt-0 float-end fw-bold">{!flightdata.FareDataMultiple[0].IsLCC ? "GDS" : "LCC"}</small> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {index === farecompare && openfare && (
                                                        <div className='FareSegments'>
                                                            <div className='fare-package mt-3'>

                                                                <div className='fw-bold' >
                                                                    <Row >
                                                                        {(firstFlight?.length > 0) ? flightdata.FareDataMultiple.map((pricedata, idx) => (
                                                                            <>
                                                                                <Row className='fare-package_details ms-4 mb-2 p-2'>
                                                                                    <Col>
                                                                                        {/* <h6>package&nbsp;{idx + 1}</h6> */}
                                                                                        <div className='d-flex'>
                                                                                            <h5 className='text-dark fw-bold'>{pricedata.Source}</h5>
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
                                                                                            <button className='btn btn-primary btn-sm'
                                                                                                onClick={() =>
                                                                                                    handleChange(flightdata, pricedata.SrdvIndex, pricedata.ResultIndex, pricedata.Fare.PublishedFare)}>
                                                                                                ADD
                                                                                            </button>
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
                                                    {index === compare && open && (<div className='roundtripdetails-info'>
                                                        <Tabs
                                                            defaultActiveKey="overview"
                                                            id="uncontrolled-tab"
                                                            className="roundtrip mb-3"
                                                        >
                                                            <Tab eventKey="overview" title="OVERVIEW" className='pb-5'>
                                                                {flightdata.Segments[0].map((data, index) => (
                                                                    <Card className='roundtrip-overviews mb-3' key={index}>
                                                                        <ul className='mt-3'>
                                                                            <li className='roundtrip-flightdata'>
                                                                                <div>
                                                                                    <b><span className='fl-label'>{data.Airline.AirlineName}</span></b>
                                                                                    <span className='fl-label'>{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</span>
                                                                                </div>
                                                                            </li>
                                                                            <li className='add_card-info'>
                                                                                <p className='mb-0'><b>{data.Origin.CityName}</b></p>
                                                                                <h6 className='mb-0 mt-0'>{moment(data.DepTime).format("HH:mm")}</h6>
                                                                                <span className='mt-0 dep-label'>{data.Origin.AirportName}</span>
                                                                            </li>
                                                                            <li className='p-3'>
                                                                                <img src={Flight} alt="img" className="path mb-0" />
                                                                                <h6 className='datainfo_time-roundtrip'>{HandleBtw(flightdata.Segments[0][index])}</h6>
                                                                            </li>
                                                                            <li className='add_card-info me-3'>
                                                                                <p className='mb-0'><b>{data.Destination.CityName}</b></p>
                                                                                <h6 className='mb-0 mt-0'>{moment(data.ArrTime).format("HH:mm")}</h6>
                                                                                <span className='mt-0 dep-label'>{data.Destination.AirportName}</span>
                                                                            </li>
                                                                            <li>

                                                                            </li>
                                                                        </ul>
                                                                    </Card>
                                                                ))}
                                                            </Tab>
                                                            <Tab eventKey="faredetails" title="FARE" className='pb-5 roundtrip-table-style'>
                                                                <table>
                                                                    <tr>
                                                                        <td>Base Fare <span className='price-label'>(1 Adult )</span></td>
                                                                        <td>{numberFormat(flightdata.FareDataMultiple[0].Fare.BaseFare, flightdata.FareDataMultiple[0].Fare.Currency)}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Taxes and Fees</td>
                                                                        <td>{numberFormat(flightdata.FareDataMultiple[0].Fare.Tax, flightdata.FareDataMultiple[0].Fare.Currency)}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>Total Fare</b></td>
                                                                        <td className='text-danger'><b> {numberFormat(flightdata.FareDataMultiple[0].Fare.BaseFare + flightdata.FareDataMultiple[0].Fare.Tax, flightdata.FareDataMultiple[0].Fare.Currency)}</b></td>
                                                                    </tr>
                                                                </table>
                                                            </Tab>
                                                            <Tab eventKey="baggage" title="BAGGAGE" className='pb-5 roundtrip-table-style'>
                                                                <table>
                                                                    <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                                        <td>Sector/Flight</td>
                                                                        <td>Check in Baggage</td>
                                                                        <td>Cabin Baggage</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{FlightSearchList.data.Origin} - {FlightSearchList.data.Destination}({flightdata?.Segments[0][0]?.Airline?.AirlineCode}-{flightdata.Segments[0][0].Airline?.FlightNumber})</td>
                                                                        <td>{flightdata.FareDataMultiple[0].FareSegments[0].Baggage}</td>
                                                                        <td>{flightdata.FareDataMultiple[0].FareSegments[0].CabinBaggage}</td>
                                                                    </tr>
                                                                </table>
                                                            </Tab>
                                                        </Tabs>
                                                    </div>
                                                    )}
                                                </div>

                                          
                                    ))}
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className=''>
                                    {(secondFlight.length > 0) ?
                                        <div className="mt-2  ms-2">
                                            <small className='flight-result'>Showing <span className="fw-bold mb-0">{secondFlight?.length}&nbsp;Flights</span></small>
                                        </div>
                                        : <div className="mt-2 ms-2">
                                            <small className='flight-result'>Showing <span className="fw-bold mb-0">0&nbsp;Flights</span></small>
                                        </div>}
                                    <Card className='ticketlabels-roundtrip mt-2'>
                                        <ul className='labellist mt-2'>
                                            <li className='ms-2'>AIRLINE</li>
                                            <li>DEPARTURE</li>
                                            <li>DURATION</li>
                                            <li>ARRIVAL</li>
                                            <li className='me-4'>PRICE</li>
                                        </ul>
                                    </Card>
                                    {secondFlight.map((flightdata, index) => (
                                       
                                                <div key={index} className='ticketcard-roundtrip flightbookdetail'>
                                                    <div className='ticketcontent-roundtrip p-3'>
                                                        <div className='row my-auto'>
                                                            <div className='package-selection  col-3'>
                                                                <div className='d-flex'>
                                                                    <div className='my-auto'>
                                                                        {/* <input type="radio" name="second" onClick={() => handleModify(flightdata)} defaultChecked={index == 0} /> */}
                                                                    </div>
                                                                    <div className='ticketdata-roundtrip ms-3 d-block text-end'>
                                                                        <h6 className="text-center my-0"><img src={hanldeAirline(flightdata?.Segments[0][0]?.Airline?.AirlineCode)} height={30} width={40} /></h6>
                                                                        <p className='my-0'>{flightdata?.Segments[0][0]?.Airline?.AirlineName}</p>
                                                                        {/* <span className=' mt-0 datainfo-roundtrip'>{flightdata?.Segments[0][0]?.Airline?.AirlineCode}-{flightdata.Segments[0][0].Airline?.FlightNumber}</span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col'>
                                                                <h5 className='datainfo_duration-roundtrip mb-0'>{moment(flightdata.Segments[0][0].DepTime).format("HH:mm")}</h5>
                                                                <span className='datainfo_location-roundtrip'>{Destination}</span>
                                                            </div>
                                                            <div className='col ms-2'>
                                                                <small className='mb-0'>{HandleConnecting(flightdata.Segments[0])}</small>
                                                                <img src={Flight} alt="img" className="pathflip mb-0" style={{ marginTop: "-15px" }} />
                                                                <h6 className='datainfo_time-roundtrip ms-1'>{HandleDuration(flightdata.Segments[0])}</h6>
                                                            </div>
                                                            <div className='col'>
                                                                <h5 className='datainfo_duration-roundtrip mb-0'>{HandleArrivalTime(flightdata?.Segments[0])}</h5>
                                                                <span className='datainfo_location-roundtrip'>{origin}</span>
                                                            </div>
                                                            <div className='col'>
                                                                {/* <span className='ticketprice-roundtrip d-flex justify-content-end'>{numberFormat(flightdata.OfferedFare, flightdata.FareDataMultiple[0].Fare.Currency)}</span> */}
                                                                <Button size='sm' className='farebtn_rtrip' onClick={() => handleRtnFareselect(index)}>View Fare</Button>
                                                                <p className='moreinfobtn  float-end mb-0' onClick={() => handleselection(index)} ><FontAwesomeIcon icon={faPlus} />&nbsp;Details</p>
                                                                <small className="refund-roundtrip mt-0 float-end fw-bold">{handleRefund(flightdata.FareDataMultiple[0].IsRefundable)}</small>
                                                                {/* <small className="refund-roundtrip mt-0 float-end fw-bold">{!flightdata.FareDataMultiple[0].IsLCC ? "GDS" : "LCC"}</small> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {index === farertncompare && openrtnfare && (
                                                        <div className='FareSegments'>
                                                            <div className='fare-package mt-3'>

                                                                <div className='fw-bold' >
                                                                    <Row >
                                                                        {(secondFlight?.length > 0) ? flightdata.FareDataMultiple.map((pricedata, idx) => (
                                                                            <>
                                                                                <Row className='fare-package_details ms-4 mb-2 p-2'>
                                                                                    <Col>
                                                                                        {/* <h6>package&nbsp;{idx + 1}</h6> */}
                                                                                        <div className='d-flex'>
                                                                                            <h5 className='text-dark fw-bold'>{pricedata.Source}</h5>
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
                                                                                            <button className='btn btn-primary btn-sm'
                                                                                                onClick={() =>
                                                                                                    handleModify(flightdata, pricedata.SrdvIndex, pricedata.ResultIndex, pricedata.Fare.PublishedFare)}>
                                                                                                ADD
                                                                                            </button>
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
                                                    {index === view && show && (<div className='roundtripdetails-info'>

                                                        <Tabs
                                                            defaultActiveKey="overview"
                                                            id="uncontrolled-tab"
                                                            className="roundtrip mb-3"
                                                        >
                                                            <Tab eventKey="overview" title="OVERVIEW" className='pb-5'>
                                                                {flightdata.Segments[0].map((data, index) => (
                                                                    <Card className='roundtrip-overviews mb-3' key={index}>
                                                                        <ul className='mt-3'>
                                                                            <li className='roundtrip-flightdata'>
                                                                                <div>
                                                                                    <b><span className='fl-label'>{data.Airline.AirlineName}</span></b>
                                                                                    <span className='fl-label'>{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</span>
                                                                                </div>
                                                                            </li>
                                                                            <li className='add_card-info'>
                                                                                <p className='mb-0'><b>{data.Origin.CityName}</b></p>
                                                                                <h6 className='mb-0 mt-0'>{moment(data.DepTime).format("HH:mm")}</h6>
                                                                                <span className='mt-0 dep-label'>{data.Origin.AirportName}</span>
                                                                            </li>
                                                                            <li className='p-3'>
                                                                                <img src={Flight} alt="img" className="pathflip mb-0" />
                                                                                <h6 className='datainfo_time-roundtrip'>{HandleBtw(flightdata.Segments[0][index])}</h6>
                                                                            </li>
                                                                            <li className='add_card-info me-3'>
                                                                                <p className='mb-0'><b>{data.Destination.CityName}</b></p>
                                                                                <h6 className='mb-0 mt-0'>{moment(data.ArrTime).format("HH:mm")}</h6>
                                                                                <span className='mt-0 dep-label'>{data.Destination.AirportName}</span>
                                                                            </li>
                                                                            <li>

                                                                            </li>
                                                                        </ul>
                                                                    </Card>
                                                                ))}
                                                            </Tab>
                                                            <Tab eventKey="faredetails" title="FARE" className='pb-5 roundtrip-table-style'>
                                                                <table>
                                                                    <tr>
                                                                        <td>Base Fare <span className='price-label'>(1 Adult )</span></td>
                                                                        <td>{numberFormat(flightdata.FareDataMultiple[0].Fare.BaseFare, flightdata.FareDataMultiple[0].Fare.Currency)}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Taxes and Fees</td>
                                                                        <td>{numberFormat(flightdata.FareDataMultiple[0].Fare.Tax, flightdata.FareDataMultiple[0].Fare.Currency)}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>Total Fare</b></td>
                                                                        <td className='text-danger'><b> {numberFormat(flightdata.FareDataMultiple[0].Fare.BaseFare + flightdata.FareDataMultiple[0].Fare.Tax, flightdata.FareDataMultiple[0].Fare.Currency)}</b></td>
                                                                    </tr>
                                                                </table>
                                                            </Tab>
                                                            <Tab eventKey="baggage" title="BAGGAGE" className='pb-5 roundtrip-table-style'>
                                                                <table>
                                                                    <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                                        <td>Sector/Flight</td>
                                                                        <td>Check in Baggage</td>
                                                                        <td>Cabin Baggage</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{FlightSearchList.data.Destination} - {FlightSearchList.data.Origin}({flightdata?.Segments[0][0]?.Airline?.AirlineCode}-{flightdata.Segments[0][0].Airline?.FlightNumber})</td>
                                                                        <td>{flightdata.FareDataMultiple[0].FareSegments[0].Baggage}</td>
                                                                        <td>{flightdata.FareDataMultiple[0].FareSegments[0].CabinBaggage}</td>
                                                                    </tr>
                                                                </table>
                                                            </Tab>
                                                            {/* <Tab eventKey="cancellation" title="CANCELLATION" className='pb-5' >
                                                    <div className='cancellation'>
                                                        <div className='CancellationCharges'>
                                                            <div className='roundtrip-table-style'>
                                                                <table>
                                                                    <tr>
                                                                        <td>Ho-Joy</td>
                                                                        <td>₹300</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>0-2 hours</td>
                                                                        <td>Non Refundable</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2-24 hours</td>
                                                                        <td>Non Refundable</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>more than 24 hours</td>
                                                                        <td>₹3,480</td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className='RescheduleCharges'>
                                                            <div className='roundtrip-table-style me-5'>
                                                                <table>
                                                                    <tr>
                                                                        <td>Ho-Joy</td>
                                                                        <td><FontAwesomeIcon icon={faIndianRupeeSign} />300</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>0-2 hours</td>
                                                                        <td>Non Refundable</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2-24 hours</td>
                                                                        <td>Non Refundable</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>more than 24 hours</td>
                                                                        <td><FontAwesomeIcon icon={faIndianRupeeSign} />3,480</td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab> */}
                                                        </Tabs>
                                                    </div>
                                                    )}
                                                </div>
                                        
                                    ))}
                                </div>
                            </div>
                        </>
                    </div>
                </>
            ) :
                (firstFlight?.length > 0) ? (
                    <>
                        {(firstFlight?.length > 0) ?
                            <div className="mt-2 mb-0 ms-2">
                                <h6 className='flight-result'>Showing <span className="fw-bold mb-0">{firstFlight.length}&nbsp;Flights</span></h6>
                            </div>
                            : <div className="mt-2 ms-2">
                                <h6 className='flight-result'>Showing <span className="fw-bold mb-0">0&nbsp;Flights</span></h6>
                            </div>}
                        <Card className='ticketlabels-roundtrip mt-1'>
                            <ul className='labellist mt-2'>
                                <li className='ms-2'>AIRLINE</li>
                                <li>DEPARTURE</li>
                                <li>DURATION</li>
                                <li>ARRIVAL</li>
                                <li>PRICE</li>
                                <li></li>
                            </ul>
                        </Card>
                        {firstFlight.map((flightdata, index) => (
                            <Card className='px-4 my-2'>
                                <Row>
                                    <Col xs={9}>
                                        {flightdata.Segments.map((flight, index) => (
                                            <Row className='my-3 px-3'>
                                                <Col>
                                                    <h6 className="my-0"><img src={hanldeAirline(flight[0]?.Airline?.AirlineCode)} height={30} width={40} /></h6>
                                                    <p className='mb-0'>{flight[0].Airline?.AirlineName}</p>
                                                    {/* <span className=' mt-0 datainfo-roundtrip'>{flight[0]?.Airline?.AirlineCode}-{flight[0].Airline?.FlightNumber}</span> */}
                                                </Col>
                                                <Col>
                                                    <h5 className='datainfo_duration-roundtrip mb-0'>{moment(flight[0].DepTime).format("HH:mm")}</h5>
                                                    <span className='datainfo_location-roundtrip'>{flight[0].Origin.AirportCode}</span>
                                                </Col>
                                                <Col>
                                                    <small className='mb-0 fw-bold'>{flightdata.Segments[index].length - 1} stop</small><br />
                                                    <img src={Flight} alt="img" className={((flight[0].Origin.AirportCode).localeCompare(origin) === 0) ? ("pathinter") : ("pathinterflip")} />
                                                    <h6 className='ms-1 small fw-bold'>{HandleDuration(flightdata.Segments[0])}</h6>
                                                </Col>
                                                <Col>
                                                    <h5 className='datainfo_duration-roundtrip mb-0'>{moment(flight[flight.length - 1].ArrTime).format("HH:mm")}</h5>
                                                    <span className='datainfo_location-roundtrip'>{flight[flight.length - 1].Destination.AirportCode}</span>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Col>
                                    <Col className='my-auto'>
                                        <span className='ticketprice-roundtrip d-flex justify-content-end'>{numberFormat(flightdata.FareDataMultiple[0].Fare.PublishedFare, flightdata.FareDataMultiple[0].Fare.Currency)}</span>
                                        {flightdata.FareDataMultiple[0].IsRefundable === true ? <small className="refund-roundtrip mt-0 float-end fw-bold">Refundable</small> : null}
                                    </Col>
                                    <Col className='text-end my-auto'>
                                        <Button size='sm' className='me-3 farebtn_int' onClick={() => handleFareselect(index)}>View Fare</Button>
                                        {/* <Button className='fw-bold' onClick={() => { handleReturnBook(flightdata.FareDataMultiple[0].ResultIndex, flightdata.FareDataMultiple[0].SrdvIndex) }}>Book</Button><br /> */}
                                        <p className='moreinfobtn  float-end mb-0 me-4' onClick={() => handleselection(index)} ><FontAwesomeIcon icon={faPlus} />&nbsp;Details</p>
                                    </Col>

                                </Row>
                                {index === farecompare && openfare && (
                                    <div className='FareSegments'>
                                        <div className='fare-package mt-3'>

                                            <div className='fw-bold' >
                                                <Row >
                                                    {(firstFlight?.length > 0) ? flightdata.FareDataMultiple.map((pricedata, idx) => (
                                                        <>
                                                            <Row className='fare-package_details ms-4 mb-2 p-2'>
                                                                <Col>
                                                                    {/* <h6>package&nbsp;{idx + 1}</h6> */}
                                                                    <div className='d-flex'>
                                                                        <h5 className='text-dark fw-bold'>{pricedata.Source}</h5>
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
                                                                        {/* <button className='btn btn-primary btn-sm' 
                                                                                    onClick={() => 
                                                                                        handleChange(flightdata,pricedata.SrdvIndex,pricedata.ResultIndex,pricedata.OfferedFare)}>
                                                                                        ADD
                                                                                    </button> */}
                                                                        <Button className='fw-bold' onClick={() => { handleReturnBook(pricedata.ResultIndex, pricedata.SrdvIndex) }}>Book</Button><br />

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
                                <Row>
                                    {index === view && show && (<div className='roundtripdetails-info'>

                                        <Tabs
                                            defaultActiveKey="overview"
                                            id="uncontrolled-tab"
                                            className=" mb-3"
                                            fill
                                        >
                                            <Tab eventKey="overview" title="OVERVIEW" className='pb-5'>
                                                {flightdata.Segments.map((data, index) => (
                                                    <Card className='roundtrip-overviews mb-2' key={index}>
                                                        <Card.Header>
                                                            {index === 0 ? (
                                                                <h6 className='text-center fw-bold mt-2 text-success'>{origin} - {Destination}</h6>
                                                            ) :
                                                                <h6 className='text-center fw-bold mt-2 text-success'>{Destination} - {origin}</h6>
                                                            }
                                                        </Card.Header>
                                                        {data.map((flight, idx) => (
                                                            <Card.Body>
                                                                <Row>
                                                                    <Col className='roundtrip-flightdata'>
                                                                        <div>
                                                                            <b><span className='fl-label'>{flight.Airline.AirlineName}</span></b>
                                                                            <span className='fl-label'>{flight.Airline.AirlineCode}-{flight.Airline.FlightNumber}</span>
                                                                        </div>
                                                                    </Col>
                                                                    <Col className='add_card-info'>
                                                                        <p className='mb-0'><b>{flight.Origin.CityName}</b></p>
                                                                        <h6 className='mb-0 mt-0'>{moment(flight.DepTime).format("HH:mm")}</h6>
                                                                        <span className='mt-0 dep-label'>{flight.Origin.AirportName}</span>
                                                                    </Col>
                                                                    <Col className='p-3'>
                                                                        <img src={Flight} alt="img" className={(index === 0) ? ("path mb-0") : ("pathflip mb-0")} />
                                                                        <h6 className='datainfo_time-roundtrip'>{HandleBtw(flightdata.Segments[index][idx])}</h6>
                                                                    </Col>
                                                                    <Col className='add_card-info me-3'>
                                                                        <p className='mb-0'><b>{flight.Destination.CityName}</b></p>
                                                                        <h6 className='mb-0 mt-0'>{moment(flight.ArrTime).format("HH:mm")}</h6>
                                                                        <span className='mt-0 dep-label'>{flight.Destination.AirportName}</span>
                                                                    </Col>
                                                                    {/* <Col>

                                                            </Col> */}
                                                                </Row>
                                                            </Card.Body>
                                                        ))}
                                                    </Card>
                                                ))}
                                            </Tab>
                                            <Tab eventKey="faredetails" title="FARE" className='pb-5 roundtrip-table-style'>
                                                <table>
                                                    <tr>
                                                        <td>Base Fare <span className='price-label'>(1 Adult )</span></td>
                                                        <td>{numberFormat(flightdata.FareDataMultiple[0].Fare.BaseFare, flightdata.FareDataMultiple[0].Fare.Currency)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Taxes and Fees</td>
                                                        <td>{numberFormat(flightdata.FareDataMultiple[0].Fare.Tax, flightdata.FareDataMultiple[0].Fare.Currency)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Total Fare</b></td>
                                                        <td className='text-danger'><b> {numberFormat(flightdata.FareDataMultiple[0].Fare.BaseFare + flightdata.FareDataMultiple[0].Fare.Tax, flightdata.FareDataMultiple[0].Fare.Currency)}</b></td>
                                                    </tr>
                                                </table>
                                            </Tab>
                                            <Tab eventKey="baggage" title="BAGGAGE" className='pb-5 roundtrip-table-style'>
                                                <table>
                                                    <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                        <td>Sector/Flight</td>
                                                        <td>Check in Baggage</td>
                                                        <td>Cabin Baggage</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{FlightSearchList.data.Destination} - {FlightSearchList.data.Origin}({flightdata?.Segments[0][0]?.Airline?.AirlineCode}-{flightdata.Segments[0][0].Airline?.FlightNumber})</td>
                                                        <td>{flightdata.FareDataMultiple[0].FareSegments[0].Baggage}</td>
                                                        <td>{flightdata.FareDataMultiple[0].FareSegments[0].CabinBaggage}</td>
                                                    </tr>
                                                </table>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                    )}
                                </Row>
                            </Card>
                        ))}
                    </>

                ) :
                    (handleError) ? (
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
        </>
    )

}
export default Flightbookinglist;
