import React, { useEffect, useState } from "react";
import '../triphistory.scss'
import { Tabs, Tab, Card, Row, Col, Button, Modal } from 'react-bootstrap';
import travels from '../../../asset/images/login/travels.png';
import moment from "moment";
import { hotelbookinglist, cancelhotelbooking } from "../../../store/services/hotel";
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


const HotelBookingData = ({ hotelbook }) => {

    const [hotelBookingdata, setHotelBookingdata] = useState();
    const [open, SetOpen] = useState(false);
    const [compare, setCompare] = useState('');
    const [modalShow, setModalShow] = React.useState(false);
    const [indexValue, setIndexValue] = useState()
    useEffect(() => {
        loadHotelbookinglist();
    }, []);

    const handlemodelClose = () => {
        setModalShow(false)
    }

    const loadHotelbookinglist = async () => {
        let hotelBookingdataList = await hotelbookinglist();
        setHotelBookingdata(hotelBookingdataList)
        // console.log("tuber....................", hotelBookingdataList)
    }
    const handleBookingCancelIndex = (value) => {
        setModalShow(true)
        setIndexValue(value)
        setCompare(value)
    }
    const handleCancelbooking = async (valueFromModal, idx) => {
        if (compare === valueFromModal) {
            // console.log("INDEx............", valueFromModal, hotelBookingdata)
            // SetOpen(!open);
            let hotelIndexdata = hotelBookingdata.result[valueFromModal];
            // console.log("hotelIndexdata.........................", hotelIndexdata);
            const data =
            {
                "BookingId": hotelIndexdata.BookingId,
                "RequestType": "4",
                "BookingMode": "5",
                "Remarks": "Cancel the ticket, it is emergency",
                "SrdvType": "SingleTB",
                "SrdvIndex": "SrdvTB",
                // "EndUserIp": "1.1.1.1",
                "ClientId": "180148",
                "UserName": "SKdigPa8",
                "Password": "A$JSkEf4#4"
            }
            // console.log("Payload for hotelCancellation.............", data);
            let hotelCanceldata = await cancelhotelbooking(data);
            console.log("hotelcancel data..............", hotelCanceldata);
            if (hotelCanceldata.status == "200" && hotelCanceldata.data.result.Error.ErrorCode == "0") {
                alert("Hotel is cancelled successfully. Your amount will be reverted back within 10 days");
                loadHotelbookinglist()
                setModalShow(false)
            }
            else if (hotelCanceldata.status == "200" && hotelCanceldata.result.data.Error.ErrorCode != "0") {
                alert(hotelCanceldata.data.Error.ErrorMessage)
                setModalShow(false)
            }
            else {
                alert("We are unable to cancel the Hotel! Please try after sometime!!")
                setModalShow(false)
            }

        } else {
            SetOpen(true);
            setCompare(valueFromModal)
        }

    }

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);

    return (
        <>
            <Card className='mb-3 ' style={{ backgroundColor: "#f2f2f2" }}>
                <Card.Body>
                    <Row className='fw-bold ms-2'>
                        <Col xs={2} className="text-center">Invoice Number</Col>
                        <Col xs={2} className="text-center">Booking Id</Col>
                        <Col xs={2} className="text-center">CheckIn Date</Col>
                        {/* <Col></Col> */}
                        <Col xs={2} className="text-center">Trace Id</Col>
                        <Col xs={2} className="text-center">Confirmation No</Col>
                        <Col xs={2} className="text-center">Status</Col>
                    </Row>
                </Card.Body>
            </Card>
            {(hotelBookingdata?.result?.length > 0) ? hotelBookingdata.result.map((hotel, index) => (
                <div key={index} className="my-3">
                    <div className="bustnsvalue">
                        <Row className='px-3 py-2'>
                            <Col xs={2} className="text-center">
                                <h6 className="fw-bold">{hotel.InvoiceNumber}</h6>
                            </Col>
                            <Col xs={2} className="text-center">
                                <span className='h6 text-success'>{hotel.BookingId}</span>
                            </Col>
                            <Col xs={2} className="text-center">
                                <span className='datainfo'>{/* moment( */hotel.CheckInDate/* .format("DD/MM/YYYY hh:mm A") */}</span>
                            </Col>
                            <Col xs={2} className='text-center'>
                                <h6 className='fw-bold'>{hotel.TraceId}</h6>
                            </Col>
                            <Col xs={2} className="text-center">
                                <span>{hotel.ConfirmationNo}</span>
                            </Col>

                            <Col xs={2} className="text-center">
                                <span className='h6 text-success'>{hotel.BookingStatus}</span>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            {(hotel?.HotelName) ?
                                <div className="ms-5">
                                    <h6 className="text-dark">Hotel Name : <span className="text-secondary">{hotel?.HotelName}</span></h6>
                                </div>
                                : null
                            }
                        </Col>
                        <Col>
                            {(hotel.BookingStatus === "Upcoming") ? (
                                <div className="text-end me-5">
                                    <button className="btn btn-danger btn-sm" onClick={() => handleBookingCancelIndex(index)}>Cancel Booking</button>
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
                                    <h5 className='mt-0'>Cancel hotel booking</h5>
                                </Modal.Title>
                            </Modal.Header>
                        </div>
                        <Modal.Body style={{ paddingTop: 18, paddingBottom: 18 }}>
                            <h5 className='mt-0 text-center'>Are you sure want cancel this hotel ticket?</h5>
                        </Modal.Body>
                        <Modal.Footer>
                            <Row>
                                <Col>
                                    <Button variant="success" className='w-100 mt-2' onClick={() => handleCancelbooking(indexValue)} >Confirm</Button>
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
export default HotelBookingData;