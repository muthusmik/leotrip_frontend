import React, { useState, useEffect } from 'react';
import Logo from '../../../asset/images/logo.png'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Modal, Table, Row, Col } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import { useLocation } from 'react-router-dom';
import { jsPDF } from "jspdf";
import { useSelector, useStore, useDispatch } from "react-redux";
import { loadBusBook } from '../../../store/actions/busbook';
import moment from "moment";
import "jspdf/dist/polyfills.es.js";
import { busBookingDetails } from '../../../store/services/bus';

const TripDetails = () => {

    // Modal views
    const location = useLocation();
    const myprop = location.state;
    // console.log("My prop..............", myprop.txnid);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // store access

    const busbook = useSelector(state => state.BusBook);
    console.log("Bus Booking .......... busbook.data[0]....", busbook)
    const busblock = useSelector(state => state.busblock);
    const Bussearch = JSON.parse(localStorage.getItem('bussearch'))
    // console.log("bus block...................", busblock, "....................", Bussearch[0].from.suggestion.CityName, "////////////////", Bussearch[1].to.suggestion.CityName);
    // console.log("busblock.data?.Result?.Passenger[0]?.Seat?.SeatIndex......................", busblock.data?.Result?.Passenger[0]?.Seat?.SeatIndex)

    useEffect(() => {
        console.log("busbook deatils outside busbooking............", busbook);
        if (busbook.data?.BusBookingStatus === "Confirmed") {
            BusBooking();
        }
    }, [busbook])

    const BusBooking = async () => {
        // console.log("busbook deatils inside busbooking............", busbook);
        // console.log("Details.............transactionId", txnid.txnid.txnid, "deaprt date......", Bussearch[2]?.depart_date, "seat ID......", busblock.data?.Result?.Passenger[0]?.Seat?.SeatIndex)
        // Object.assign(busbook.data, { transactionId: txnid.txnid.txnid, depart_date: Bussearch[2]?.depart_date, SeatId: busblock.data?.Result?.Passenger[0]?.Seat?.SeatIndex })
        let seatIndex = [];
        for (let passengerLength = 0; passengerLength < busblock.data?.Result?.Passenger.length; passengerLength++) {
            seatIndex.push(busblock.data?.Result?.Passenger[passengerLength]?.Seat?.SeatIndex)
        }
        // console.log("seatIndex..............", seatIndex);
        const depDate=moment(busblock?.data?.Result?.DepartureTime).format("YYYY-MM-DDThh:mm:ss");
        const payLoad = {
            "TraceId": busbook.data?.TraceId,
            "BusBookingStatus": busbook.data?.BusBookingStatus,
            "InvoiceAmount": busbook.data.InvoiceAmount,
            "BusId": busbook.data.BusId,
            "TicketNo": busbook.data.TicketNo,
            "SeatId": seatIndex,
            "depart_date": depDate,
            "transactionId": myprop.txnid //txnid.txnid.txnid
        }
        console.log("Add Booking Details payload.......................",myprop,busbook,);
        console.log("Add busbookkkkk.......................", payLoad);

        let busbookingdata = await busBookingDetails(payLoad);
        // console.log("After success............addbusbooking details", busbookingdata);
    }

    return (
        <Card>
            {(busblock.data) ? (
                <div className="container  p-3">
                    <div className='row border-bottom'>
                        <div className='col-9'>
                            <h4 className='text-success fw-bold'>{busblock.data?.Result.TravelName}</h4>
                            <h6 className='small'>{busblock.data?.Result.BusType}</h6>
                        </div>
                        <div className="col-3 mb-5">
                            <a><small className='text-success h6' onClick={handleShow}>Cancellation Policy</small></a>
                            <Modal show={show} onHide={handleClose} centered size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title className='h5 fw-bold text-danger'>Cancellation Policy</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Table bordered hover >
                                        <thead>
                                            <tr style={{ backgroundColor: "#f3f6f8", fontWeight: "bold", color: "green" }}>
                                                <td>Time Slab</td>
                                                <td>Cancellation Charges</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {busblock.data?.Result && busblock.data?.Result.CancelPolicy.map((data, index) => (
                                                <>
                                                    <tr key={index}>
                                                        <td className='h6 small'>{data.FromDate}{data.ToDate}{data.PolicyString}</td>
                                                        <td className='h6 small text-muted'>₹ {data.CancellationCharge}</td>
                                                    </tr>
                                                </>
                                            ))}
                                            <tr><td className='note text-danger' colspan="2">Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by HOJOY. HOJOY does not levy any cancellation charges.</td></tr>
                                        </tbody>
                                    </Table>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            ) : null}
        </Card>
    )
}

const PaymentMethod = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const Bus = useSelector(state => state.Bus);
    const store = useStore()
    let totalPrices = 0;
    let totalPrice = 0;
    const Bussearch = JSON.parse(localStorage.getItem('bussearch'))
    // Store access to the current state
    const busbook = useSelector(state => state.BusBook);
    console.log("Bus Booking....", busbook)

    const busblock = useSelector(state => state.busblock);
    console.log("ttk", busblock)

    const printRef = React.useRef();

    const handleDownloadImage = async () => {
        const element = printRef.current;
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

    const handleTotal = () => {
        {
            (busblock.data.Result.Passenger).map((data, index) => (
                totalPrices = totalPrices + data.Seat.Price.PublishedPrice
            ))
        }
        return Math.round(totalPrices);
    }
    const handlePrice = () => {
        {
            (busblock.data.Result.Passenger).map((data, index) => (
                totalPrice = totalPrice + data.Seat.Price.PublishedPrice
            ))
        }
        return Math.round(totalPrice);
    }

    return (
        <Card className='mt-2'>
            <Card.Body>
                <Accordion defaultActiveKey="3">
                    <>
                        <Modal
                            show={modalShow}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            onHide={() => setModalShow(false)}
                        >
                            <Modal.Header closeButton className='paymentmodel'>
                                <Modal.Title id="contained-modal-title-vcenter paymentmodel" >

                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="px-4" ref={printRef}>
                                {(busbook?.data) ? (
                                    (busbook.data?.BusBookingStatus === "Confirmed") ?
                                        (
                                            <div className="px-4">
                                                {/* <div className='border mb-3' style={{ backgroundColor: "#D0F0C0", borderRadius: "20px" }}>
                                                        <div className='ms-3 p-2'>
                                                            <h5>Congratulations</h5>
                                                            <h6 className='text-muted ms-3'>Your Booking Confirmed  successfully</h6>
                                                        </div>
                                                    </div > */}
                                                <div className='bookingConfirmedDetails'>
                                                    <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                        <Col xs="5">
                                                            <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }}></img>
                                                        </Col>
                                                        <Col>
                                                            <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                        </Col>
                                                    </Row>

                                                    <div className='m-3'>
                                                        <p><b>Ticket No : {busbook.data.TicketNo}</b></p>
                                                        <p><b>Bus Id : {busbook.data.BusId}</b></p>
                                                        {/* <p><b>Total Amount : </b><span className='text-secondary'>{Math.round(busblock.data.Result.Passenger[0].Seat.Price.PublishedPrice)}</span></p> */}
                                                        <p><b>Bus Booking Status : </b><span className='text-success fw-bold'>{busbook.data.BusBookingStatus}</span></p>
                                                        <p><b>TravelOperator PNR : </b><span>{busbook.data.TravelOperatorPNR}</span></p>
                                                        <p><b>Email us : </b><span className='text-dark fw-bold'>booking@hojoy.in</span></p>
                                                        <p><b>Customer Care No : </b><span className='text-dark fw-bold'> 89777 81 999, 89777 82 999</span></p>
                                                    </div>

                                                    <Table bordered hover size='sm'>
                                                        <thead >
                                                            <tr className="bg-success text-light text-center">
                                                                <th colspan='2'>Bus Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Bus Name</td>
                                                                <td>{busblock.data.Result.TravelName}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Bus Type</td>
                                                                <td>{busblock.data.Result.BusType} </td>
                                                            </tr>
                                                            <tr>
                                                                <td>From</td>
                                                                <td>{Bussearch[0].from.suggestion.CityName}</td>

                                                            </tr>
                                                            <tr>
                                                                <td>To</td>
                                                                <td>{Bussearch[1].to.suggestion.CityName}</td>

                                                            </tr>
                                                            <tr>
                                                                <td>DepTime</td>
                                                                <td>{busblock.data.Result.DepartureTime}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>ArrivalTime</td>
                                                                <td>{busblock.data.Result.ArrivalTime}</td>

                                                            </tr>
                                                        </tbody>
                                                    </Table>

                                                    <Table bordered hover size='sm'>
                                                        <thead >
                                                            <tr className="bg-success text-light text-center w-100">
                                                                <th colspan='5'>Guest Details</th>
                                                            </tr>

                                                            <tr>
                                                                <th>Guest Name</th>
                                                                <th>Gender</th>
                                                                <th>Age</th>
                                                                <th>Phone no</th>
                                                                <th>Address</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {(busblock.data.Result.Passenger).map((data, index) => (
                                                                <tr key={index}>
                                                                    <td>{data.FirstName} {(data.LeadPassenger) ? "*" : null}</td>
                                                                    <td>{data.Gender == 1 ? "Male" : "Female"}</td>
                                                                    <td>{data.Age}</td>
                                                                    <td>{data.Phoneno}</td>
                                                                    <td>{data.Address}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered hover size='sm'>
                                                        <thead >
                                                            <tr className="bg-success text-light text-center w-100">
                                                                <th colspan='5'>Seat Details</th>
                                                            </tr>

                                                            <tr>
                                                                <th>Seat Name</th>
                                                                <th>Row no</th>
                                                                <th>Column no</th>
                                                                <th>IsUpper</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {(busblock.data.Result.Passenger).map((data, index) => (
                                                                <tr key={index}>
                                                                    <td>{data.Seat.SeatName}</td>
                                                                    <td>{data.Seat.RowNo}</td>
                                                                    <td>{data.Seat.ColumnNo}</td>
                                                                    <td>{data.Seat.IsUpper}</td>
                                                                    <td>{Math.round(data.Seat.Price.PublishedPrice)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>
                                                    <div className='text-end pl-3' style={{ paddingRight: 60 }}>
                                                        <p><b >Total Amount : </b><span className='lg text'><b> {handlePrice()}</b></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                            <span className="spinner-border spinner-border-sm"></span>
                                            &nbsp;Loading....

                                        </div>
                                ) : null}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={handleDownloadImage}>Download</Button>
                            </Modal.Footer>
                        </Modal>
                        <Accordion defaultActiveKey="3">
                            <Accordion.Item eventKey="3" className='mt-3'>
                                <Accordion.Header><h5>Details</h5></Accordion.Header>
                                <Accordion.Body>
                                    {(busbook?.data) ? (
                                        (busbook.data?.BusBookingStatus === "Confirmed") ?
                                            (
                                                <div className="px-4" ref={printRef}>
                                                    <div className='bookingConfirmedDetails'>
                                                        <Row style={{ backgroundColor: "#f3f6f8", fontWeight: "bold" }}>
                                                            <Col xs="5">
                                                                <img src={Logo} alt="img" style={{ height: "80px", width: "130px" }}></img>
                                                            </Col>
                                                            <Col>
                                                                <h5 className='text-success h4 fw-bold mt-4'>Booking Details</h5>
                                                            </Col>
                                                        </Row>

                                                        <div className='m-3'>
                                                            <p><b>Ticket No : {busbook.data.TicketNo}</b></p>
                                                            <p><b>Bus Id : {busbook.data.BusId}</b></p>
                                                            {/* <p><b>Total Amount : </b><span className='text-secondary'>{Math.round(busblock.data.Result.Passenger[0].Seat.Price.PublishedPrice)}</span></p> */}
                                                            <p><b>Bus Booking Status : </b><span className='text-success fw-bold'>{busbook.data.BusBookingStatus}</span></p>
                                                            <p><b>TravelOperator PNR : </b><span>{busbook.data.TravelOperatorPNR}</span></p>
                                                            <p><b>Email us : </b><span className='text-dark fw-bold'>booking@hojoy.in</span></p>
                                                            <p><b>Customer Care No : </b><span className='text-dark fw-bold'>89777 81 999, 89777 82 999</span></p>
                                                        </div>

                                                        <Table bordered hover size='sm'>
                                                            <thead >
                                                                <tr className="bg-success text-light text-center">
                                                                    <th colspan='2'>Bus Details</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Bus Name</td>
                                                                    <td>{busblock.data.Result.TravelName}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bus Type</td>
                                                                    <td>{busblock.data.Result.BusType} </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>From</td>
                                                                    <td>{Bussearch[0].from.suggestion.CityName}</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>To</td>
                                                                    <td>{Bussearch[1].to.suggestion.CityName}</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>DepTime</td>
                                                                    <td>{busblock.data.Result.DepartureTime}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>ArrivalTime</td>
                                                                    <td>{busblock.data.Result.ArrivalTime}</td>

                                                                </tr>
                                                            </tbody>
                                                        </Table>

                                                        <Table bordered hover size='sm'>
                                                            <thead >
                                                                <tr className="bg-success text-light text-center">
                                                                    <th colspan='5'>Guest Details</th>
                                                                </tr>

                                                                <tr>
                                                                    <th>Guest Name</th>
                                                                    <th>Gender</th>
                                                                    <th>Age</th>
                                                                    <th>Phone no</th>
                                                                    <th>Address</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {(busblock.data.Result.Passenger).map((data, index) => (
                                                                    <tr key={index}>
                                                                        <td>{data.FirstName} {(data.LeadPassenger) ? "*" : null}</td>
                                                                        <td>{data.Gender == 1 ? "Male" : "Female"}</td>
                                                                        <td>{data.Age}</td>
                                                                        <td>{data.Phoneno}</td>
                                                                        <td>{data.Address}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                        <Table bordered hover size='sm'>
                                                            <thead >
                                                                <tr className="bg-success text-light text-center">
                                                                    <th colspan='5'>Seat Details</th>
                                                                </tr>

                                                                <tr>
                                                                    <th>Seat Name</th>
                                                                    <th>Row no</th>
                                                                    <th>Column no</th>
                                                                    <th>IsUpper</th>
                                                                    <th>Price</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {(busblock.data.Result.Passenger).map((data, index) => (
                                                                    <tr key={index}>
                                                                        <td>{data.Seat.SeatName}</td>
                                                                        <td>{data.Seat.RowNo}</td>
                                                                        <td>{data.Seat.ColumnNo}</td>
                                                                        <td>{data.Seat.IsUpper}</td>
                                                                        <td>{Math.round(data.Seat.Price.PublishedPrice)}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>

                                                        <div className='text-end pl-3' style={{ paddingRight: 60 }}>
                                                            <p><b >Total Amount : </b><span className='lg text'><b> {handleTotal()}</b></span></p>
                                                        </div>
                                                    </div>
                                                    <div className='text-end'>
                                                        <Button variant="success" onClick={() => setModalShow(true)}>Download</Button>
                                                    </div>
                                                </div>
                                            )
                                            : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "230px", paddingLeft: "350px", fontSize: "20px", color: "darkblue", height: "500px" }}>
                                                <span className="spinner-border spinner-border-sm"></span>
                                                &nbsp;Loading....

                                            </div>
                                    ) : null}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </>
                </Accordion>
            </Card.Body>
        </Card>
    )
}

const PaymentDetails = () => {

    return (
        <>
            <TripDetails />
            <PaymentMethod />
        </>
    )
}

export default PaymentDetails