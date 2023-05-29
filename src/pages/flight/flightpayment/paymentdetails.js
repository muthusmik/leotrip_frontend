import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import faPlane from '../../../asset/images/flight/take.png';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Badge, Modal, Table, Row, Col } from 'react-bootstrap';
import pay from '../../../asset/images/payment/newpayment.png';
import QrCode from '../../../asset/images/payment/qr-code.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import HDFC from '../../../asset/images/payment/HDFC.png';
import ICICI from '../../../asset/images/payment/icici.png';
import SBI from '../../../asset/images/payment/sbi.png';
import Axis from '../../../asset/images/payment/axis.png';
import upi from '../../../asset/images/payment/upii.png';
import Upi from '../../../asset/images/payment/upi.png';
import gpay from '../../../asset/images/payment/google-pay.png';
import card from '../../../asset/images/payment/card.png';
import globe from '../../../asset/images/payment/globe.png';
import { useSelector, useStore } from "react-redux";
import Logo from '../../../asset/images/logo.png'
import moment from "moment";
import './payment.scss'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";
import { useLocation } from 'react-router-dom';
import { addBooking } from '../../../store/services/addBookingDetails';
import { object } from 'yup';



const TripDetails = () => {
    console.log("propsTrip", localStorage.getItem('JourneyTrip'));
    const triptype = localStorage.getItem('JourneyTrip');
    const DestinationData = JSON.parse(localStorage.getItem('destinationdata'));
    // store access
    const flightinfo = useSelector(state => state.FlightOnewayInfo);
    const flightreturninfo = useSelector(state => state.FlightReturnInfo);
    const FlightBook = useSelector(state => state.FlightOneWayBook);
    // console.log("trip details", flightinfo, flightreturninfo)

    /*    # Inner Card Duration */

    useEffect(() => {
        if (flightreturninfo) {
            console.log("flightreturninfoflightreturninfo", flightreturninfo);
            console.log("flightinfoflightinfoflightinfo", flightinfo);

        }
    }, [flightreturninfo])

    const HandleBtw = (value) => {

        var Hours = Math.floor(value.Duration / 60)
        var minute = value.Duration % 60
        var duration = Hours + "h:" + minute + "m"
        return (
            duration
        )

    }

    return (
        <Card>
            {(flightinfo.data) ? (
                <div class="container">

                    {flightinfo.data[0]?.Results?.Segments[0].map((data, index) => (
                        <Card className='my-3'>
                            <Card.Body>
                                <div class="row" key={index}>
                                    <div class="col-2 small pt-3">
                                        <img src="https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/6E.png" width="40px" alt="flights" class="common-elementsstyles__CarrierLogo-sc-ilw4bs-12 drVxdV" />
                                        <h6 className='text-muted small'>{data.Airline.AirlineName}<br />{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</h6>
                                    </div>
                                    <div class="col-3 small">
                                        <p>{moment(data.DepTime).format("ddd MMM DD YYYY")} <br />
                                            <b className='h4'>{data.Origin.AirportCode}&nbsp;
                                                <span className='text-muted'>{moment(data.DepTime).format("HH:MM")}</span>
                                            </b><br />
                                            <span className='text-muted'>{data.Origin.AirportName}</span></p>
                                    </div>
                                    <div className="col-3 small">
                                        <div>
                                            <div className="justifyBetween alignItemsCenter d-flex">
                                                <div className="hVaJvo"></div>.....
                                                <p className="text-danger mt-1">{HandleBtw(flightinfo.data[0]?.Results?.Segments[0][index])}</p>.....
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" loading="lazy" class="Flight__FlightIcon-sc-1w228os-0 eiNikk"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg></div>
                                            {/* <h6 className='mt-3'>{moment({}).seconds(flightinfo.data[0].Results.Segments[0][0].Duration).format("HH:mm")}</h6> */}
                                        </div>
                                    </div>
                                    <div className='col-4 small'>
                                        <p>{moment(data.ArrTime).format("ddd MMM DD YYYY")} <br />
                                            <span className='h4'>{data.Destination.AirportCode}&nbsp;
                                                <span className='text-muted'>{moment(data.ArrTime).format("HH:MM")}</span>
                                            </span>
                                            <br /><span className='text-muted'>{data.Destination.AirportName}</span></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                    {triptype == 2 ?
                        <>
                            {(flightreturninfo.initialState) ? null :
                                <>
                                    {flightreturninfo.data[0]?.Results?.Segments[0].map((data, index) => (
                                        <Card className='my-3'>
                                            <Card.Body>
                                                <div class="row" key={index}>
                                                    <div class="col-2 small pt-3">
                                                        <img src="https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/6E.png" width="40px" alt="flights" class="common-elementsstyles__CarrierLogo-sc-ilw4bs-12 drVxdV" />
                                                        <h6 className='text-muted small'>{data.Airline.AirlineName}<br />{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</h6>
                                                    </div>
                                                    <div class="col-3 small">
                                                        <p>{moment(data.DepTime).format("ddd MMM DD YYYY")} <br />
                                                            <b className='h4'>{data.Origin.AirportCode}&nbsp;
                                                                <span className='text-muted'>{moment(data.DepTime).format("HH:MM")}</span>
                                                            </b><br />
                                                            <span className='text-muted'>{data.Origin.AirportName}</span></p>
                                                    </div>
                                                    <div className="col-3 small">
                                                        <div>
                                                            <div className="justifyBetween alignItemsCenter d-flex">
                                                                <div className="hVaJvo"></div>.....
                                                                <p className="text-danger mt-1">{HandleBtw(flightreturninfo.data[0]?.Results?.Segments[0][index])}</p>.....
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" loading="lazy" class="Flight__FlightIcon-sc-1w228os-0 eiNikk"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg></div>
                                                            {/* <h6 className='mt-3'>{moment({}).seconds(flightinfo.data[0].Results.Segments[0][0].Duration).format("HH:mm")}</h6> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-4 small'>
                                                        <p>{moment(data.ArrTime).format("ddd MMM DD YYYY")} <br />
                                                            <span className='h4'>{data.Destination.AirportCode}&nbsp;
                                                                <span className='text-muted'>{moment(data.ArrTime).format("HH:MM")}</span>
                                                            </span>
                                                            <br /><span className='text-muted'>{data.Destination.AirportName}</span></p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </>
                            }
                        </>
                        : null}
                </div>



            ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "280px", paddingLeft: "400px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                <span className="spinner-border spinner-border-sm"></span>
                &nbsp;Load payment detail 3....
            </div>}
        </Card>
    )
}

const PaymentMethod = (txnid) => {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalReturnShow, setModalReturnShow] = React.useState(false);
    const triptype = localStorage.getItem('JourneyTrip');
    const history = useHistory();
    const flightinfo = useSelector(state => state.FlightOnewayInfo);
    const flightreturninfo = useSelector(state => state.FlightReturnInfo);
    const FlightBook = useSelector(state => state.FlightOneWayBook);
    const FlightReturnBook = useSelector(state => state.FlightReturnBook);
    console.log("return info", FlightBook, FlightReturnBook, flightinfo);
    console.log("payment detail flight inside the flightbook....", FlightBook)
    const [saveBooking, setSaveBooking] = useState(true);

    useEffect(() => {
        if (FlightBook?.data?.result && saveBooking || FlightReturnBook?.data.result && saveBooking) {
            setSaveBooking(false)
            SaveOneWayBooking();

        }
    }, [FlightBook])

    const printRef = React.useRef();
    const printRefReturn = React.useRef();

    const SaveOneWayBooking = async () => {
        let traceIddepart = (flightinfo?.data[0]?.TraceId)
        const bookingDetails = (FlightBook?.data?.result?.Response) ? (FlightBook?.data?.result?.Response) : (FlightReturnBook?.data?.result?.Response);
        bookingDetails['TraceId'] = traceIddepart
        Object.assign(bookingDetails, { transactionId: txnid })
        console.log("kkk", bookingDetails)
        let SaveBooking = await addBooking(bookingDetails)
        console.log("SaveBooking", SaveBooking, bookingDetails)
        if (triptype == 2) {
            if (flightreturninfo.initialState) {
                // console.log("transactionIdtransactionIdtransactionId", txnid.txnid, flightreturninfo);
            }
            else {
                console.log("transactionIdtransactionIdtransactionId", txnid, flightreturninfo);
                let traceIdarrival = flightreturninfo?.data[0]?.TraceId
                const bookingReturnDetails = FlightReturnBook?.data?.result?.Response;
                Object.assign(bookingReturnDetails, { transactionId: (txnid?.txnid)?(txnid.txnid):txnid})
                bookingDetails['TraceId'] = traceIdarrival
                let SaveBookingReturn = await addBooking(bookingReturnDetails)
                console.log("SaveBookingReturn", SaveBooking, bookingReturnDetails)
            }
        }
        setSaveBooking(false)
    }
    const HandleBtw = (value) => {

        var Hours = Math.floor(value.Duration / 60)
        var minute = value.Duration % 60
        var duration = Hours == 0 ? minute + " Minutes" : Hours + "Hr:" + minute + " Minutes"
        return (
            duration
        )

    }

    const handleDownloadImage = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };
    const handleDownloadReturnImage = async () => {
        const element = printRefReturn.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };
    // console.log("successful and done to confirmation", FlightBook.data.result.Response.FlightItinerary, FlightReturnBook)
    // console.log("done to confirmation", FlightBook.data?.result.Error.ErrorCode == 0);

    const handleTripHistory = () => {
        console.log("Trip history")
        history.push("/home/triphistory")
    }
    const HandleDestination = (value) => {
        if (value.length == 1) {
            var name = (value[0].Destination.CityName)
            var code = (value[0].Destination.CityCode)
            return (
                name + "(" + code + ")"
            )
        }
        else if (value.length > 1) {
            var index = value.length - 1;
            var name = (value[index].Destination.CityName)
            var code = (value[index].Destination.CityCode)

            return (
                name + "(" + code + ")"
            )
        }
    }
    return (
        <Card className='mt-2'>
            <Card.Body>
                <Accordion defaultActiveKey="3">
                    {console.log("FlightBook loading............", FlightBook.data.length === 0, FlightBook?.data.length != 0)}
                    {(FlightBook?.data.length != 0) ?
                        <>
                            <Accordion.Item eventKey="3" className='mt-3'>
                                {(FlightBook?.data) ? (
                                    (FlightBook?.data?.result?.Error.ErrorCode == "0") ?
                                        (
                                            <>
                                                <Accordion.Header><h5><img src={card} alt='banking' /> {FlightBook.data.result.Response.FlightItinerary.Segments[0].Origin.CityName}-{FlightBook.data.result.Response.FlightItinerary.Segments[0].Destination.CityName}</h5></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='bookingConfirmedDetails' >
                                                        <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                            <Col xs="5">
                                                                <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }} />
                                                            </Col>
                                                            <Col>
                                                                <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                            </Col>
                                                        </Row>

                                                        <div className='m-3'>
                                                            <p><b>Booking Id&nbsp;:</b>{FlightBook.data.result.Response.BookingId}</p>
                                                            <p><b>PNR &nbsp;: </b><span className='text-success'>{FlightBook.data.result.Response.PNR}</span></p>
                                                            <p><b>Paid Amount&nbsp;: <span className=' text-danger'>{FlightBook.data.result.Response.FlightItinerary.Fare.Currency} {FlightBook.data.result.Response.FlightItinerary.Fare.PublishedFare} (Incl.. {FlightBook.data.result.Response.FlightItinerary.Fare.Currency} {FlightBook.data.result.Response.FlightItinerary.Fare.Tax} Tax)</span></b></p>
                                                            <p><b>Flight Status &nbsp;: </b><span className='text-success'>{FlightBook.data.result.Response.FlightItinerary.Segments[0].FlightStatus}</span></p>
                                                            <p><b>Email us :</b><span className='text-dark fw-bold'>booking@hojoy.in</span></p>
                                                            <p><b>Customer Care No :</b><span className='text-dark fw-bold'>89777 81 999, 89777 82 999</span></p>
                                                        </div>

                                                        <Table bordered hover>
                                                            <thead >
                                                                <tr className="bg-success text-light text-center h5">
                                                                    <th colspan='2'>Flight Details</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th>Airline Name</th>
                                                                    <td>{FlightBook.data.result.Response.FlightItinerary.Segments[0].Airline.AirlineName}</td>
                                                                    {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineName})</td> */}
                                                                </tr>
                                                                <tr>
                                                                    <th>Origin</th>
                                                                    <td>{FlightBook.data.result.Response.FlightItinerary.Segments[0].Origin.AirportCode}({FlightBook.data.result.Response.FlightItinerary.Segments[0].Origin.AirportName})</td>
                                                                    {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportName})</td> */}
                                                                </tr>
                                                                <tr>
                                                                    <th>Destination </th>
                                                                    <td>{FlightBook.data.result.Response.FlightItinerary.Segments[0].Destination.AirportCode}({FlightBook.data.result.Response.FlightItinerary.Segments[0].Destination.AirportName})</td>
                                                                    {/* <td> {HandleDestination(FlightBook.data.result.Response.FlightItinerary.Segments[0])}</td> */}
                                                                    {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportName})</td> */}
                                                                </tr>
                                                                <tr>
                                                                    <th>Duration</th>
                                                                    <td>{HandleBtw(FlightBook.data.result.Response.FlightItinerary.Segments[0])}</td>
                                                                    {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Duration}</td> */}
                                                                    {/* <td>{moment(flightinfo.data[0].Results.Segments[0][0].DepTime).format("ddd MMM DD YYYY")} - {moment(flightinfo.data[0].Results.Segments[0][0].ArrTime).format("ddd MMM DD YYYY")}</td> */}
                                                                </tr>
                                                                <tr>
                                                                    <th>Dispatch/Arrival Time </th>
                                                                    <td>{moment(flightinfo.data[0].Results.Segments[0][0].DepTime).format("DD/MMM/yyyy HH:MM")} - {moment(flightinfo.data[0].Results.Segments[0][0].ArrTime).format("DD/MMM/yyyy HH:MM")}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>

                                                        <Table bordered hover>
                                                            <thead >
                                                                <tr className="bg-success text-light text-center h5">
                                                                    <th colspan='5'>Traveler Details</th>
                                                                </tr>
                                                                <tr className="bg-secondary text-light text-center">
                                                                    <th>Traveler Name</th>
                                                                    <th>Date Of Birth</th>
                                                                    <th>Email Id</th>
                                                                    <th>Mobile No </th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {(FlightBook.data.result.Response.FlightItinerary.Passenger).map((data => (

                                                                    <tr>
                                                                        <td>{data.Title}.{data.FirstName}</td>
                                                                        <td>{data.DateOfBirth}</td>
                                                                        <td>{data.Email}</td>
                                                                        <td>{data.ContactNo}</td>

                                                                    </tr>
                                                                )))}
                                                            </tbody>
                                                        </Table>
                                                        <Button variant="success" onClick={() => history.push("/home/triphistory")}>For Download Ticket</Button>
                                                    </div>
                                                </Accordion.Body>
                                            </>
                                        )
                                        : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                            <span className="spinner-border spinner-border-sm"></span>
                                            &nbsp;Loading payment detail 1....

                                        </div>
                                ) : null}
                            </Accordion.Item>
                        </>
                        : null
                    }
                </Accordion>
                {triptype == 2 ?
                    <Accordion defaultActiveKey="3">
                        {console.log("FlightReturnBook inside the internationall data page",FlightReturnBook.data)}
                        {(FlightReturnBook.data.length !=0) ?
                            <>
                                <Accordion.Item eventKey="3" className='mt-3'>
                                    {(FlightReturnBook.data) ? (
                                        (FlightReturnBook.data?.result?.Error?.ErrorCode == 0) ?
                                            (
                                                <>
                                                    <Accordion.Header><h5><img src={card} alt='banking' />{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Origin.CityName}--{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Destination.CityName}</h5></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='bookingConfirmedDetails' >
                                                            <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                                <Col xs="5">
                                                                    <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }} />
                                                                </Col>
                                                                <Col>
                                                                    <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                                </Col>
                                                            </Row>

                                                            <div className='m-3'>
                                                                <p><b>Booking Id&nbsp;:</b>{FlightReturnBook.data.result.Response.BookingId}</p>
                                                                <p><b>PNR &nbsp;: </b><span className='text-success'>{FlightReturnBook.data.result.Response.PNR}</span></p>
                                                                <p><b>Paid Amount&nbsp;: <span className=' text-danger'>{FlightReturnBook.data.result.Response.FlightItinerary.Fare.Currency} {FlightReturnBook.data.result.Response.FlightItinerary.Fare.PublishedFare}</span></b></p>
                                                                <p><b>Flight Status &nbsp;: </b><span className='text-success'>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].FlightStatus}</span></p>
                                                                <p><b>Email us: </b><span className='text-dark fw-bold'>booking@hojoy.in</span></p>
                                                                <p><b>Customer Care No :</b><span className='text-dark fw-bold'>89777 81 999, 89777 82 999</span></p>
                                                            </div>

                                                            <Table bordered hover>
                                                                <thead >
                                                                    <tr className="bg-success text-light text-center h5">
                                                                        <th colspan='2'>Flight Details</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Airline Name</th>
                                                                        <td>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Airline.AirlineName}</td>
                                                                        {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineName})</td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Origin</th>
                                                                        <td>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Origin.AirportCode}({FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Origin.AirportName})</td>
                                                                        {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportName})</td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Destination </th>
                                                                        <td>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Destination.AirportCode}({FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Destination.AirportName})</td>

                                                                        {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportName})</td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Duration</th>
                                                                        <td>{HandleBtw(FlightReturnBook.data.result.Response.FlightItinerary.Segments[0])}</td>                                            {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Duration}</td> */}
                                                                        {/* <td>{moment(flightinfo.data[0].Results.Segments[0][0].DepTime).format("ddd MMM DD YYYY")} - {moment(flightinfo.data[0].Results.Segments[0][0].ArrTime).format("ddd MMM DD YYYY")}</td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Dispatch/Arrival Time </th>
                                                                        <td>{moment(flightinfo?.data[0]?.Results.Segments[0][0].DepTime).format("DD/MMM/yyyy HH:MM")} - {moment(flightinfo.data[0].Results.Segments[0][0].ArrTime).format("DD/MMM/yyyy HH:MM")}</td>
                                                                    </tr>


                                                                    <tr>
                                                                        <th>Origin</th>
                                                                        <td>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Origin.CityName} ({FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Origin.AirportCode})</td>
                                                                        <td>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Origin.AirportName}</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th>Destination </th>
                                                                        <td>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Destination.CityName} ({FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Destination.AirportCode})</td>
                                                                        <td>{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Destination.AirportName}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Duration</th>
                                                                        <td>{HandleBtw(FlightReturnBook.data.result.Response.FlightItinerary.Segments[0])}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Dispatch/Arraivel Time </th>
                                                                        <td>{moment(flightreturninfo?.data[0]?.Results.Segments[0][0]?.DepTime).format("DD MMM  YYYY HH:mm")}  </td>

                                                                        <td>{moment(flightreturninfo?.data[0]?.Results?.Segments[0][0]?.ArrTime).format("DD MMM YYYY  HH:mm")}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Baggage </th>
                                                                        <td> Luggage:{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].Baggage}  </td>

                                                                        <td>Cabin:{FlightReturnBook.data.result.Response.FlightItinerary.Segments[0].CabinBaggage}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>

                                                            <Table bordered hover>
                                                                <thead >
                                                                    <tr className="bg-success text-light text-center h5">
                                                                        <th colspan='5'>Traveler Details</th>
                                                                    </tr>
                                                                    <tr className="bg-secondary text-light text-center">
                                                                        <th>Traveler Name</th>
                                                                        <th>Date Of Birth</th>
                                                                        <th>Email Id</th>
                                                                        <th>Mobile No </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    {(FlightReturnBook.data.result.Response.FlightItinerary.Passenger).map((data => (

                                                                        <tr>
                                                                            <td>{data.Title}.{data.FirstName}</td>
                                                                            <td>{data.DateOfBirth}</td>
                                                                            <td>{data.Email}</td>
                                                                            <td>{data.ContactNo}</td>

                                                                        </tr>
                                                                    )))}
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                        <Button variant="success" onClick={() => history.push("/home/triphistory")}>For Download Ticket</Button>
                                                    </Accordion.Body>
                                                </>
                                            )
                                            : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                                <span className="spinner-border spinner-border-sm"></span>
                                                &nbsp;Loading payment detail 2....

                                            </div>
                                    ) : null}
                                </Accordion.Item>
                            </>
                            : 
                            <Accordion defaultActiveKey="3">
                            {console.log("FlightBook loading............", FlightBook.data.length === 0, FlightBook?.data.length != 0)}
                            {(FlightBook?.data.length != 0) ?
                                <>
                                    <Accordion.Item eventKey="3" className='mt-3'>
                                        {(FlightBook?.data) ? (
                                            (FlightBook?.data?.result?.Error.ErrorCode == "0") ?
                                                (
                                                    <>
                                                        <Accordion.Header><h5><img src={card} alt='banking' /> {FlightBook.data.result.Response.FlightItinerary.Segments[1].Origin.CityName}-{FlightBook.data.result.Response.FlightItinerary.Segments[1].Destination.CityName}</h5></Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className='bookingConfirmedDetails' >
                                                                <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                                    <Col xs="5">
                                                                        <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }} />
                                                                    </Col>
                                                                    <Col>
                                                                        <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                                    </Col>
                                                                </Row>
        
                                                                <div className='m-3'>
                                                                    <p><b>Booking Id&nbsp;:</b>{FlightBook.data.result.Response.BookingId}</p>
                                                                    <p><b>PNR &nbsp;: </b><span className='text-success'>{FlightBook.data.result.Response.PNR}</span></p>
                                                                    <p><b>Paid Amount&nbsp;: <span className=' text-danger'>{FlightBook.data.result.Response.FlightItinerary.Fare.Currency} {FlightBook.data.result.Response.FlightItinerary.Fare.PublishedFare} (Incl.. {FlightBook.data.result.Response.FlightItinerary.Fare.Currency} {FlightBook.data.result.Response.FlightItinerary.Fare.Tax} Tax)</span></b></p>
                                                                    <p><b>Flight Status &nbsp;: </b><span className='text-success'>{FlightBook.data.result.Response.FlightItinerary.Segments[1].FlightStatus}</span></p>
                                                                    <p><b>Email us :</b><span className='text-dark fw-bold'>booking@hojoy.in</span></p>
                                                                    <p><b>Customer Care No :</b><span className='text-dark fw-bold'>89777 81 999, 89777 82 999</span></p>
                                                                </div>
        
                                                                <Table bordered hover>
                                                                    <thead >
                                                                        <tr className="bg-success text-light text-center h5">
                                                                            <th colspan='2'>Flight Details</th>
        
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>Airline Name</th>
                                                                            <td>{FlightBook.data.result.Response.FlightItinerary.Segments[1].Airline.AirlineName}</td>
                                                                            {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Airline.AirlineName})</td> */}
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Origin</th>
                                                                            <td>{FlightBook.data.result.Response.FlightItinerary.Segments[1].Origin.AirportCode}({FlightBook.data.result.Response.FlightItinerary.Segments[0].Origin.AirportName})</td>
                                                                            {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Origin.AirportName})</td> */}
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Destination </th>
                                                                            <td>{FlightBook.data.result.Response.FlightItinerary.Segments[1].Destination.AirportCode}({FlightBook.data.result.Response.FlightItinerary.Segments[1].Destination.AirportName})</td>
                                                                            {/* <td> {HandleDestination(FlightBook.data.result.Response.FlightItinerary.Segments[0])}</td> */}
                                                                            {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportCode}({FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Destination.AirportName})</td> */}
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Duration</th>
                                                                            <td>{HandleBtw(FlightBook.data.result.Response.FlightItinerary.Segments[1])}</td>
                                                                            {/* <td>{FlightBook.data[0].result.Response.FlightItinerary.Segments[0].Duration}</td> */}
                                                                            {/* <td>{moment(flightinfo.data[0].Results.Segments[0][0].DepTime).format("ddd MMM DD YYYY")} - {moment(flightinfo.data[0].Results.Segments[0][0].ArrTime).format("ddd MMM DD YYYY")}</td> */}
                                                                        </tr>
                                                                        {console.log("FlightBook.data.result.Response.FlightItinerary.Segments[1]",FlightBook.data.result.Response.FlightItinerary.Segments[1])}
                                                                        <tr>
                                                                            <th>Dispatch/Arrival Time </th>
                                                                            <td>{moment(FlightBook.data.result.Response.FlightItinerary.Segments[1].DepTime).format("DD/MMM/yyyy HH:MM")} - {moment(FlightBook.data.result.Response.FlightItinerary.Segments[1].ArrTime).format("DD/MMM/yyyy HH:MM")}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
        
                                                                <Table bordered hover>
                                                                    <thead >
                                                                        <tr className="bg-success text-light text-center h5">
                                                                            <th colspan='5'>Traveler Details</th>
                                                                        </tr>
                                                                        <tr className="bg-secondary text-light text-center">
                                                                            <th>Traveler Name</th>
                                                                            <th>Date Of Birth</th>
                                                                            <th>Email Id</th>
                                                                            <th>Mobile No </th>
        
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
        
                                                                        {(FlightBook.data.result.Response.FlightItinerary.Passenger).map((data => (
        
                                                                            <tr>
                                                                                <td>{data.Title}.{data.FirstName}</td>
                                                                                <td>{data.DateOfBirth}</td>
                                                                                <td>{data.Email}</td>
                                                                                <td>{data.ContactNo}</td>
        
                                                                            </tr>
                                                                        )))}
                                                                    </tbody>
                                                                </Table>
                                                                <Button variant="success" onClick={() => history.push("/home/triphistory")}>For Download Ticket</Button>
                                                            </div>
                                                        </Accordion.Body>
                                                    </>
                                                )
                                                : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                    &nbsp;Loading payment detail 1....
        
                                                </div>
                                        ) : null}
                                    </Accordion.Item>
                                </>
                                : null
                            }
                        </Accordion>
                        }
                    </Accordion>
                    : null}
            </Card.Body>
        </Card>
    )
}

const PaymentDetails = (txnid) => {
    const bookType = localStorage.getItem('JourneyTrip')
    // const history = useHistory();
    return (
        <>
            <TripDetails />
            <PaymentMethod txnid={txnid} />
            {/* <div className="my-5">
                <Button variant="success" onClick={() => history.push("/home/triphistory")}>For Download Ticket</Button>
            </div> */}
        </>
    )
}

export default PaymentDetails