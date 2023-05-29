import React, { useEffect, useState } from "react";
import '../triphistory.scss'
import { Tabs, Tab, Card, Row, Col, Button, Modal, Form, Label } from 'react-bootstrap';
import travels from '../../../asset/images/login/travels.png';
import { cancelbusBooking, busBookinglist } from '../../../store/services/bus'
import { setError } from "../../../store/actions/signup";
import moment from "moment";
import { useSelector, useStore, useDispatch } from "react-redux";

const TripMsg = () => {
    return (
        <>
            <Card>
                <Row>
                    <Col xs={4} className='p-4'>
                        <img src={travels} alt="travels" width={250} />
                    </Col>
                    <Col xs={5} className='mt-5'>
                        <h6>Looks like you have never booked with Hojoy
                            <span className='h5 fw-bold'>When you book your trips your transaction will be shown here.</span></h6>
                        {/* <Button className='mt-3'>Start Booking Now</Button> */}
                    </Col>
                </Row>
            </Card>
        </>
    )
}

const BusBookingData = ({ Busbook }) => {

    const busBlockDetails = useSelector(state => state.busblock);
    const [modalShow, setModalShow] = React.useState(false);
    const [busBookingListData, setBusbookingdata] = useState();
    const [open, SetOpen] = useState(false);
    const [compare, setCompare] = useState('');
    const [indexValue, setIndexValue] = useState();
    
    const handlemodelClose = () => {
        setModalShow(false)
    }

    const handlemodel = () => {
        setModalShow(true)
    }

    const [remarkdata, setRemarkdata] = useState()
    // console.log("busBlockDetails......................", busBlockDetails.data?.Result?.Passenger[0]?.Seat?.SeatIndex)
    const handleremark = (e) => {
        console.log("123", e)
        setRemarkdata(e.target.value)
    }
    console.log("akak", remarkdata)

    const handlecanceldata = async (busid, seatid) => {

        if (remarkdata === null) {
            setError("please fill the field")
        }
        else {
            const canceldata = {
                "BusId": busid,
                // "SeatId": seatid,
                "Remarks": remarkdata
            }
            let cancelbus = await canceldata(cancelbusBooking)
        }
    }

    useEffect(() => {
        loadBusbookinglist();
    }, []);

    const loadBusbookinglist = async () => {
        let busBookingData = await busBookinglist();
        setBusbookingdata(busBookingData)
        console.log("busBookingData",busBookingData);
    }
    const handleCancelBookingIndex = (value) => {
        setModalShow(true)
        setIndexValue(value)
        setCompare(value)
    }
    const handlecancelbooking = async (valueFromModal, idx) => {
        if (compare === valueFromModal) {
            // console.log("INDEx............", valueFromModal, busBookingListData, indexValue)
            // SetOpen(!open);
            let busIndexdata = busBookingListData.result[indexValue];
            console.log("flightItinerarydata.........................", busIndexdata.SeatId, "         ", busIndexdata);
            const data =
            {
                // "EndUserIp": "1.1.1.1",
                "ClientId": "180109",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4",
                "BusId": busIndexdata.BusId,
                "SeatId": (busBlockDetails.data?.Result?.Passenger[0]?.Seat?.SeatIndex) ? busBlockDetails.data?.Result?.Passenger[0]?.Seat?.SeatIndex : (busIndexdata.SeatId) ? busIndexdata.SeatId : "XXXX",
                "Remarks": "Cancel this ticket"
            }
            console.log("Payload for BusCancellation.............", data);
            let busCanceldata = await cancelbusBooking(data);
            // console.log("buscancel............", busCanceldata)
            if (busCanceldata.status == "200" && busCanceldata.data.Error.ErrorCode == "0") {
                alert("Bus is cancelled successfully. Your amount will be reverted back within 10 days");
                loadBusbookinglist()
                setModalShow(false)
            }
            else if (busCanceldata.status == "200" && busCanceldata.data.Error.ErrorCode != "0") {
                alert(busCanceldata.data.Error.ErrorMessage)
                setModalShow(false)
            }
            else {
                alert("We are unable to cancel the Bus! Please try after sometime!!")
                setModalShow(false)
            }

        } else {
            SetOpen(true);
            setCompare(valueFromModal)
        }

    }

    const numberFormat = (value, cur) => {
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);
    }

    return (
        <>
            <Card className='mb-3' style={{ backgroundColor: "#f2f2f2" }}>
                <Card.Body>
                    <Row className='fw-bold ms-2'>
                        <Col xs={1}>Bus ID</Col>
                        <Col xs={4} className="text-center">Txn id</Col>
                        <Col xs={2}>Departure</Col>
                        <Col xs={2}>Ticket No</Col>
                        <Col>Amount</Col>
                        <Col>Status</Col>
                    </Row>
                </Card.Body>
            </Card>
            {(busBookingListData?.result?.length > 0) ? busBookingListData.result.map((bus, index) => (
                <div key={index} className="my-3">
                    <div className="bustnsvalue">
                        <Row className='px-3 py-2'>
                            <Col xs={1}>
                                <h6 className="fw-bold">{bus.BusId}</h6>
                            </Col>
                            <Col xs={4} className="text-center">
                                <span className='datainfo'>{bus.transactionId}</span><br />
                            </Col>
                            <Col xs={2}>
                                <span className='datainfo'>{moment(bus.depart_date).format('DD/MM/YYYY hh:mm A')}</span><br />
                            </Col>
                            <Col xs={2} className='text-center'>
                                <h6 className='fw-bold'>{bus.TicketNo}</h6>
                            </Col>
                            <Col className='text-center'>
                                <span className='fw-bold'>₹ {bus.InvoiceAmount}</span>
                            </Col>
                            <Col>
                                <span className='h6 text-success'>{bus.BookingStatus}</span>
                            </Col>
                            {/* <Col>
                                <small className="text-primary fw-bold" style={{ fontSize: "14px", cursor: "pointer" }} onClick={handlemodel}>Cancel</small>
                            </Col> */}
                        </Row>
                    </div>
                    {(bus.BookingStatus === "Upcoming") ? (
                        <div className="text-end me-5">
                            <button className="btn btn-danger btn-sm" onClick={() => { handleCancelBookingIndex(index) }} >Cancel Booking</button>
                        </div>

                    ) : null}
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
                                    <h5 className='mt-0'>Cancel bus booking</h5>
                                </Modal.Title>
                            </Modal.Header>
                        </div>
                        <Modal.Body style={{ paddingTop: 18, paddingBottom: 18 }}>
                            <h5 className='mt-0 text-center'>Are you sure want cancel this bus ticket?</h5>
                        </Modal.Body>
                        <Modal.Footer>
                            <Row>
                                <Col>
                                    <Button variant="success" className='w-100 mt-2' onClick={() => handlecancelbooking(indexValue)} >Confirm</Button>
                                </Col>
                                <Col>
                                    <Button variant="danger" className='w-100 mt-2' onClick={() => setModalShow(false)} >Cancel</Button>
                                </Col>
                            </Row>
                        </Modal.Footer>
                    </Modal>
                </div>
            )) : <TripMsg />}
        </>
    )

}
export default BusBookingData;