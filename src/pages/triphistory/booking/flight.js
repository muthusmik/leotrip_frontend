import React, { useState } from "react";
import '../triphistory.scss'
import Flight from '../../../asset/images/flight/flight.png';
import travels from '../../../asset/images/login/travels.png';
import moment from "moment";
import { Tabs, Tab, Card, Row, Col, Button, FormLabel, Modal, Table } from 'react-bootstrap';
import CancelFlight from '../../../asset/images/cancelflight.jpg';
import { Formik, Form, Field } from 'formik';
import { Inputbox } from "../../../component/inputbox/inputbox";
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useEffect } from "react";
import { flightCancellation, flightbookinglist } from '../../../store/services/flight';
import '../../preloader.scss';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import Logo from '../../../asset/images/logo.png';

const TripMsg = () => {
    return (
        <>
            <Card>
                <Row>
                    <Col xs={4} className='p-4'>
                        <img src={travels} alt="travels" width={250} />
                    </Col>
                    <Col xs={5} className='mt-5'>
                        <h6>Looks like you have never booked with Hojoy,
                            <span className='h5 fw-bold'> When you book your trips your transaction will be shown here.</span></h6>
                        {/* <Button className='mt-3'>Start Booking Now</Button> */}
                    </Col>
                </Row>
            </Card>
        </>
    )
}


const FlightBookingData = () => {

    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [view, setView] = useState('');
    const [modalDownload, setModalDownload] = React.useState(false);
    const [loader, showLoader] = useState("true");
    const [Flightbookingdata, setFlightbookingdata] = useState();

    // const [message, setMessage] = useState();
    // const [requestType, setRequestType] = useState();
    // const [cancellationType, setCancellationType] = useState();
    const printRef = React.useRef();
    const handlemodelClose = () => {
        setModalShow(false)
    }

    const handleselection = (index, idx) => {
        if (view === index) {
            setShow(!show);
        } else {
            setShow(true);
            setView(index)
        }
    }

    const HandleBtw = (value) => {

        var Hours = Math.floor(value.Duration / 60)
        var minute = value.Duration % 60
        var duration = Hours == 0 ? minute + " Minutes" : Hours + "Hr:" + minute + " Minutes"
        return (
            duration
        )

    }

    const [open, SetOpen] = useState(false);
    const [compare, setCompare] = useState('');
    const handleModalShow = () => {
        setModalDownload(true);

    }
    // const handleMessageChange = event => {
    //     setMessage(event.target.value);
    // };
    // const handleRequest = event => {
    //     setRequestType(event.target.value);
    // };
    // const handleCancellation = event => {
    //     setCancellationType(event.target.value);
    // };
    const handlecancelbooking = async (index, idx) => {
        if (compare === index) {
            // console.log("INDEx............", index, Flightbookingdata)
            // SetOpen(!open);
            let flightItinerarydata = Flightbookingdata.result[index].FlightItinerary;
            let ticketData = [];
            flightItinerarydata.Passenger.map((item) => {
                ticketData.push({
                    "TicketId": item.Ticket.TicketId,//"66305915",
                    "FirstName": item.FirstName,//"cheran",
                    "LastName": item.LastName        //"T"
                })
            })
            // console.log("flightItinerarydata.........................", flightItinerarydata);
            const data =
            {
                "BookingId": flightItinerarydata.BookingId, //"60188679",
                "RequestType": "1",//requestType,
                "CancellationType": "3",//cancellationType,
                "SrdvType": "MixAPI",
                "SrdvIndex": "1",
                "Sectors": [
                    {
                        "Origin": flightItinerarydata.Origin,    //"CJB",
                        "Destination": flightItinerarydata.Destination, //"MAA"
                    }
                ],
                // "TicketData": ticketData,
                "TicketData": [
                    {
                        "TicketId": flightItinerarydata.Passenger[0].Ticket.TicketId,//"66305915",
                        "FirstName": flightItinerarydata.Passenger[0].FirstName,//"cheran",
                        "LastName": flightItinerarydata.Passenger[0].LastName        //"T"
                    }
                ],
                "PNR": flightItinerarydata.PNR,      //"DZV43R",
                "Remarks": "Cancel this ticket",
                "EndUserIp": "1.1.1.1",
                "ClientId": "180109",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4"
            }
            // console.log("Payload for flightCancellation.............", data);
            let flightCanceldata = await flightCancellation(data);
            // console.log("flightCanceldata..................", flightCanceldata);
            if (flightCanceldata.status == "200" && flightCanceldata.data.result[0].Error.ErrorCode == "0") {
                alert("Flight is cancelled successfully. Your amount will be reverted back within 10 days");
                loadFlightbookinglist()
                setModalShow(false)
            }
            else if (flightCanceldata.status == "200" && flightCanceldata.data.result[0].Error.ErrorCode != "0") {
                alert(flightCanceldata.data.result[0].Error.ErrorMessage)
                setModalShow(false)
            }
            else {
                alert("We are unable to cancel the flight! Please try after sometime!!")
                setModalShow(false)
            }

        } else {
            SetOpen(true);
            setCompare(index)
        }

    }
    const validate = Yup.object({
        bookingid: Yup.string()
            .max(5, 'Must be 5 characters')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })

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
    // console.log("bber",Flightbook)

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    useEffect(() => {
        loadFlightbookinglist();
    }, []);

    const loadFlightbookinglist = async () => {
        let flightbookingdata = await flightbookinglist();
        setFlightbookingdata(flightbookingdata)
    }
    return (
        <>
            <Card className='mb-3 ' style={{ backgroundColor: "#f2f2f2" }}>
                <Card.Body>
                    <Row className='fw-bold ms-2'>
                        <Col xs={2}>Booking Id</Col>
                        <Col xs={2}>PNR no</Col>
                        <Col xs={2}>Journey</Col>
                        <Col className="text-center" xs={2}>Departure</Col>
                        <Col className="text-center" xs={2}>Amount</Col>
                        <Col xs={2} className="text-center" >Status</Col>
                    </Row>
                </Card.Body>
            </Card>
            {(Flightbookingdata?.result?.length > 0) ? Flightbookingdata.result.map((flight, index) => (
                <div key={index} className="my-3">

                    <div className="bustnsvalue">
                        <Row className='px-3 py-2'>
                            <Col xs={2}>
                                <h6 className="fw-bold">{flight.FlightItinerary.BookingId}</h6>
                            </Col>
                            <Col xs={2}>
                                <span className='datainfo'>{flight.FlightItinerary.PNR}</span><br />
                            </Col>
                            <Col xs={2}>
                                <span className="text-danger">{flight.FlightItinerary.Origin}-{flight.FlightItinerary.Destination}</span>
                            </Col>
                            <Col xs={2} className="text-center">
                                <h6 className='fw-bold text-success'>{moment(flight.DepartureTime).format("DD/MM/YYYY HH:MM")}</h6>
                            </Col>
                            <Col xs={2} className="text-end">
                                {(flight.FlightItinerary?.Fare?.PublishedFare) ? (
                                    <span className='h5 fw-bold text-danger'>{numberFormat(flight.FlightItinerary?.Fare?.PublishedFare, flight.FlightItinerary?.Fare?.Currency)}</span>
                                ) : null}
                            </Col >
                            <Col xs={2} className="text-end">
                                {(flight.FlightItinerary?.Fare?.PublishedFare) ? (
                                    <>
                                        {/* <span className='float-end  text-primary'>{flight.BookingStatus}</span> */}
                                        <button size="sm" className="btn btn-primary btn-sm" onClick={() => handleselection(index)}>View details</button>
                                    </>
                                ) : null}
                            </Col>

                        </Row>
                        {index === view ? null : <hr />}
                        {index === view && show && (
                            <div className='moreinfo'>
                                <Tabs
                                    defaultActiveKey={flight.BookingStatus}
                                    id="uncontrolled-tab"
                                    className=" mb-3"
                                    fill
                                >
                                    <Tab eventKey={flight.BookingStatus} title={flight.BookingStatus} className='pb-5'>

                                        {flight.FlightItinerary.Segments.map((data, index) => (
                                            <div className="mt-5">
                                                <Card className="w-75 m-auto border-0">
                                                    <div className=' overviews mb-2' key={index}>
                                                        <Row className='mt-3'>
                                                            <Col xs={2}>
                                                                <div className='ms-2'>
                                                                    <p className='mb-0'>{data.Airline.AirlineName}</p>
                                                                    <span className='datainfo'>{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</span><br />
                                                                    <small className="text-danger mt-0 fw-bold">Fare class:{data.Airline.FareClass}</small>
                                                                </div>
                                                            </Col>

                                                            <Col className='text-end'>
                                                                <p className='mb-0'><b>{data.Origin.CityName}</b></p>
                                                                <h6 className='mb-0 mt-0'>{moment(data.DepTime).format("HH:mm")}</h6>
                                                                <span className='mt-0 dep-label'>{data.Origin.AirportName}</span>
                                                            </Col>
                                                            <Col className='text-center '>
                                                                <img src={Flight} alt="img" className="bookingpath" />
                                                                {/* <h6 className='datainfo '>{HandleBtw(flight.Segments[index])}</h6> */}
                                                            </Col>
                                                            <Col className=''>
                                                                <p className='mb-0'><b>{data.Destination.CityName}</b></p>
                                                                <h6 className='mb-0 mt-0'>{moment(data.ArrTime).format("HH:mm")}</h6>
                                                                <span className='mt-0 dep-label'>{data.Destination.AirportName}</span>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Card>
                                                <div className="p-5">
                                                    <h5 className='ms-5'>Passenger Detail</h5>
                                                    {flight.FlightItinerary.Passenger.map((data, index) => (
                                                        <div className="bookingtable-style">
                                                            <table key={index} className="mb-2">
                                                                <tr>
                                                                    <td>Name</td>
                                                                    <td>{data.FirstName}&nbsp;{data.LastName}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Date Of Birth</td>
                                                                    <td>{data.DateOfBirth} </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email ID</td>
                                                                    <td>{data.Email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Contact No</td>
                                                                    <td>{data.ContactNo}</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        <Row>
                                            <Col>
                                                {(flight.BookingStatus === "Upcoming") ? (
                                                    <div className="text-end me-5">
                                                        <button className="btn btn-danger btn-sm" onClick={() => setModalShow(true)}>Cancel Booking</button>
                                                    </div>

                                                ) : null}
                                            </Col>
                                            <Col>
                                                {(flight.BookingStatus === "Upcoming") ? (
                                                    <div className="text-end me-5">
                                                        <button className="btn btn-success btn-sm" onClick={handleModalShow}>Download Ticket</button>
                                                    </div>

                                                ) : null}
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Modal
                                            show={modalShow}
                                            size="md"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered >
                                            <div style={{ backgroundColor: "#D0F0C0", borderRadius: "10px" }}>
                                                <div className='d-flex justify-content-end m-1 mb-0 '>
                                                    <button type="button" class="btn-close btn-close-danger  bg-danger d-block" aria-label="Close" onClick={handlemodelClose}></button>
                                                </div>
                                                <Modal.Header className='d-flex justify-content-center border-0'>
                                                    <Modal.Title>
                                                        <h5 className='mt-0'>Cancel flight booking</h5>
                                                    </Modal.Title>
                                                </Modal.Header>
                                            </div>
                                            <Modal.Body style={{ paddingTop: 18, paddingBottom: 18 }}>
                                                <h5 className='mt-0 text-center'>Are you sure want cancel this flight ticket?</h5>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Row>
                                                    <Col>
                                                        <Button variant="success" className='w-100 mt-2' onClick={() => handlecancelbooking(index)} >Confirm</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="danger" className='w-100 mt-2' onClick={() => setModalShow(false)} >Cancel</Button>
                                                    </Col>
                                                </Row>
                                            </Modal.Footer>
                                        </Modal>

                                        <Modal
                                            show={modalDownload}
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                            onHide={() => setModalDownload(false)}
                                        >
                                            <Modal.Header closeButton className='paymentmodel'>
                                                <Modal.Title id="contained-modal-title-vcenter paymentmodel" >
                                                    <div className='ms-3 p-2  ' >
                                                        <h6 className='text-muted ms-3'>Ticket Details</h6>
                                                    </div>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="px-4" ref={printRef}>
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
                                                        <p><b>Booking Id&nbsp;:</b>{flight.FlightItinerary.BookingId}</p>
                                                        <p><b>PNR &nbsp;: </b><span className='text-success'>{flight.FlightItinerary.PNR}</span></p>
                                                        <p><b>Paid Amount&nbsp;: <span className=' text-danger'>{flight.FlightItinerary.Fare.Currency} {flight.FlightItinerary.Fare.PublishedFare} (Incl.. {flight.FlightItinerary.Fare.Currency} {flight.FlightItinerary.Fare.Tax} Tax)</span></b></p>
                                                        <p><b>Flight Status &nbsp;: </b><span className='text-success'>{flight.FlightItinerary.Segments[0].FlightStatus}</span></p>
                                                        <p><b>Email us : </b><span className='text-dark fw-bold'> booking@hojoy.in</span></p>
                                                        <p><b>Customer Care No :</b><span className='text-dark fw-bold'>89777 81 999, 89777 82 999</span></p>
                                                    </div>

                                                    <Table bordered hover>
                                                        <thead >
                                                            <tr className="bg-success text-light text-center h5">
                                                                <th colspan='4'>Flight Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>Airline Name</th>
                                                                <td>{flight.FlightItinerary.Segments[0].Airline.AirlineCode}({flight.FlightItinerary.Segments[0].Airline.AirlineName})</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Origin</th>
                                                                <td>{flight.FlightItinerary.Segments[0].Origin.CityName} ({flight.FlightItinerary.Segments[0].Origin.AirportCode})</td>
                                                                <td>{flight.FlightItinerary.Segments[0].Origin.AirportName}</td>

                                                            </tr>
                                                            <tr>
                                                                <th>Destination </th>
                                                                <td>{flight.FlightItinerary.Segments[0].Destination.CityName} ({flight.FlightItinerary.Segments[0].Destination.AirportCode})</td>
                                                                <td>{flight.FlightItinerary.Segments[0].Destination.AirportName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Duration</th>
                                                                <td>{HandleBtw(flight.FlightItinerary.Segments[0])}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Dispatch/Arrival Time </th>
                                                                <td>{moment(flight.FlightItinerary.Segments[0].DepTime).format("DD MMM  YYYY HH:mm")}</td>

                                                                <td>{moment(flight.FlightItinerary.Segments[0].ArrTime).format("DD MMM YYYY  HH:mm")}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Baggage </th>
                                                                <td> Luggage:{flight.FlightItinerary.Segments[0].Baggage}  </td>

                                                                <td>Cabin:{flight.FlightItinerary.Segments[0].CabinBaggage}</td>
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

                                                            {(flight.FlightItinerary.Passenger).map((data => (

                                                                <tr>
                                                                    <td>{data.Title}.{data.FirstName} {data.LastName}</td>
                                                                    <td>{moment(data.DateOfBirth).format("DD/MM/YYYY")}</td>
                                                                    <td>{data.Email}</td>
                                                                    <td>{data.ContactNo}</td>

                                                                </tr>
                                                            )))}
                                                        </tbody>
                                                    </Table>
                                                </div>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="success" onClick={handleDownloadImage}>Download</Button>
                                            </Modal.Footer>
                                        </Modal>
                                        {/* {index === compare && open && (
                                            <div className="cancelbooking-box">
                                                <div>
                                                    <Row>
                                                        <Col xs={7}>
                                                            <Formik
                                                                initialValues={{
                                                                    firstName: '',
                                                                    lastName: '',
                                                                    email: '',
                                                                    password: '',
                                                                    confirmPassword: ''
                                                                }}
                                                                validationSchema={validate}
                                                                onSubmit={values => {
                                                                    console.log(values)
                                                                }}
                                                            >
                                                                {formik => (
                                                                    <div className="container p-4">
                                                                        <h4 className="font-weight-bold .display-4 text-primary">Cancel Flight</h4>
                                                                        <Form>
                                                                            <Inputbox label="Booking Id" name="bookingid" type="text" value={flight.FlightItinerary.BookingId} />
                                                                            <Row>
                                                                                <Col>
                                                                                    <FormLabel className='fw-bold'>Request Type</FormLabel>
                                                                                    <Field
                                                                                        name="RequestType"
                                                                                        as="select"
                                                                                        className={`form-control shadow-none`}
                                                                                        onChange={handleRequest}
                                                                                        autoComplete="off">
                                                                                        <option value="none" selected disabled hidden>Select</option>
                                                                                        <option value="1">Full Cancellation</option>
                                                                                        <option value="2">Partial Cancellation</option>
                                                                                        <option value="3">Reissuance</option>
                                                                                    </Field>
                                                                                    <ErrorMessage component="div" name="RequestType" className="error" />
                                                                                </Col>
                                                                                <Col>
                                                                                    <FormLabel className='fw-bold'>Cancellation Type</FormLabel>
                                                                                    <Field
                                                                                        name="CancellationType"
                                                                                        as="select"
                                                                                        className={`form-control shadow-none`}
                                                                                        autoComplete="off"
                                                                                        onChange={handleCancellation}>
                                                                                        <option value="none" selected disabled hidden>Select</option>
                                                                                        <option value="1">No Show</option>
                                                                                        <option value="2">Flight Cancelled </option>
                                                                                        <option value="3">Others</option>
                                                                                    </Field>
                                                                                    <ErrorMessage component="div" name="CancellationType" className="error" />
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col>
                                                                                    <Inputbox label="Source" name="Source" type="text" value={flight.FlightItinerary.Origin} />
                                                                                </Col>
                                                                                <Col>
                                                                                    <Inputbox label="Destination" name="Destination" type="text" value={flight.FlightItinerary.Destination} />
                                                                                </Col>
                                                                            </Row>
                                                                            <Inputbox label="PNR No" name="PNR" type="text" value={flight.FlightItinerary.PNR} />
                                                                            <div>
                                                                                <FormLabel className='fw-bold'>Remarks</FormLabel>
                                                                                <textarea
                                                                                    className={`form-control shadow-none`}
                                                                                    name="message"
                                                                                    placeholder="Please enter your remarks here"
                                                                                    value={message}
                                                                                    onChange={handleMessageChange}
                                                                                    cols="40" rows="5">

                                                                                </textarea>
                                                                            </div>

                                                                            <button className="btn btn-dark mt-3" type="submit">Submit</button>
                                                                        </Form>
                                                                    </div>
                                                                )}
                                                            </Formik>
                                                        </Col>
                                                        <Col xs={5} className="m-auto">
                                                            <img src={CancelFlight} alt="cancelbooking" width="97%" style={{ borderRadius: "6px" }} />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        )} */}
                                    </Tab>
                                    <Tab eventKey="faredetails" title="FARE DETAILS" className='pb-5 bookingtable-style'>
                                        <div className="p-5">
                                            <h5 className='ms-4'>Fare Summary</h5>
                                            <table>
                                                <tr>
                                                    <td>Fare Type</td>
                                                    <td className="text-primary fw-bold">{flight.FlightItinerary.FareType}</td>
                                                </tr>
                                                <tr>
                                                    <td>Base Fare <span className='price-label'>(1 Adult )</span></td>
                                                    <td>{numberFormat(flight.FlightItinerary.Fare.BaseFare, flight.FlightItinerary.Fare.Currency)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Taxes and Fees</td>
                                                    <td>{numberFormat(flight.FlightItinerary.Fare.Tax, flight.FlightItinerary.Fare.Currency)} </td>
                                                </tr>
                                                <tr>
                                                    <td><b>Total Fare</b></td>
                                                    <td className='text-danger'><b> {numberFormat(flight.FlightItinerary.Fare.BaseFare + flight.FlightItinerary.Fare.Tax + flight.FlightItinerary.Fare.OtherCharges, flight.FlightItinerary.Fare.Currency)}</b></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="baggage" title="BAGGAGE RULES" className='pb-5 bookingtable-style'>
                                        <div className="p-5">
                                            <h5 className='ms-4'>Baggage Summary</h5>
                                            <table>
                                                <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                    <td>Sector/Flight</td>
                                                    <td>Check in Baggage</td>
                                                    <td>Cabin Baggage</td>
                                                </tr>
                                                <tr>
                                                    <td>{flight.FlightItinerary.Origin} - {flight.FlightItinerary.Destination}</td>
                                                    <td>{flight.FlightItinerary.Segments[0].Baggage}</td>
                                                    <td>{flight.FlightItinerary.Segments[0].CabinBaggage}</td>
                                                </tr>
                                            </table>
                                        </div>
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
                    </div>
                </div>
            )) :
                <>
                    <Card className='w-100 cardheight'>
                        <div className='my-auto'>
                            <div class="preloader-orbit-loading">
                                <div class="cssload-inner cssload-one"></div>
                                <div class="cssload-inner cssload-two"></div>
                                <div class="cssload-inner cssload-three"></div>
                            </div>
                            <h6 className='text-center mt-3'>please wait we're  fetching your flight details</h6>
                        </div>
                    </Card>
                    <TripMsg />
                </>
            }
        </>
    )

}
export default FlightBookingData;