import React, { useState, useCallback } from "react";
import Carousel from 'react-bootstrap/Carousel';
import hotel1 from '../../../asset/images/hotel/room1.jpg'
import hotel2 from '../../../asset/images/hotel/room2.jpg'
import hotel3 from '../../../asset/images/hotel/room.jpg'
import room1 from '../../../asset/images/hotel/g-room1.jpg'
import room2 from '../../../asset/images/hotel/g-room2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays,faBuildingCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useStore } from "react-redux";
import { Modal, Row, Col, Card, Button } from 'react-bootstrap';
import moment from "moment";
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import noImage from "../../../asset/images/no-image.jpg"
import { useEffect } from "react";
// import Gallery from "react-photo-gallery";
import { ModalGateway } from "react-images";
const Hotelpreview = () => {


    /* # STORE */
    const HotelInfoData = useSelector(state => state.HotelInfo);
    const store = useStore()
    const HotelRoomData = useSelector(state => state.HotelRoom);
    //  console.log(HotelRoomData, "hotelroom...previewpagedata")
    useEffect(() => {
        // if(HotelInfoData.data[0]?.HotelDetails?.Images[0]){
        // setImageGalery(HotelInfoData.data[0].HotelDetails.Images[0])
        // }

    })

    const [modalShow, setModalShow] = React.useState(false);
    const hotelSearchData = useSelector(state => state.HotelSearch)

    const [imageGalery, setImageGalery] = React.useState();


    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);


    // image galery
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (

        <>
            {(HotelRoomData.data && HotelInfoData?.data?.length > 0) ? (
                <Card className=" container hotelpreview">
                    <div className="d-flex hotelinfo ms-3">
                        <h4>{HotelInfoData.data[0]?.HotelDetails?.HotelName && HotelInfoData.data[0]?.HotelDetails?.HotelName}</h4>
                        <div className="hotelrating ms-2">
                            {[...Array(HotelInfoData.data[0]?.HotelDetails?.StarRating && HotelInfoData.data[0]?.HotelDetails?.StarRating)].map((star) => {
                                return (
                                    <span className="fs-5 text-warning">&#9733;</span>
                                );
                            })}
                        </div>
                    </div>
                    {/* <div className="ms-3">
                        <p className="hotelcode text-primary">
                            <span className="text-muted">HotelCode:</span>{HotelInfoData.data[0] && HotelInfoData.data[0].HotelDetails.HotelCode}
                        </p>
                    </div> */}
                    <p className="hoteladdress ms-4">
                        <FontAwesomeIcon icon={faLocationCrosshairs} style={{ fontSize: "16px", color: "red" }} />&nbsp;{HotelInfoData.data[0] && HotelInfoData?.data[0]?.HotelDetails?.Address}
                    </p>
                    <div className="d-flex">
                        <div className="hotelcarousel" onClick={() => setModalShow(true)}>
                            <Carousel slide={false} className="carousel-image" prevIcon={false} nextIcon={false} indicators={false} interval={2500}>
                                {HotelInfoData.data[0].HotelDetails?.Images?.length>0 && HotelInfoData.data[0]?.HotelDetails?.Images?.map(data => (
                                    <Carousel.Item>
                                        <img src={data}
                                            onError={event => {
                                                event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                                event.onerror = null
                                            }} className="w-100" alt="img" />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className="hotelpreview-image">
                            <div className="preview-image " onClick={() => setModalShow(true)}>

                                <img src={HotelInfoData.data[0] && HotelInfoData.data[0]?.HotelDetails?.Images[0]} alt="hotel" onError={event => {
                                    event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                    event.onerror = null
                                }} />

                            </div>
                            <div className="preview-image mt-4" onClick={() => setModalShow(true)}>
                                <img src={HotelInfoData.data[0] && HotelInfoData.data[0]?.HotelDetails?.Images[6]} alt="hotel" onError={event => {
                                    event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                    event.onerror = null
                                }} />
                            </div>
                        </div>
                        <div className="hotelpackage">
                            <div className="hotelregularpackage">
                                <div className="d-flex">
                                    <div className="ms-2 regular-pack">
                                        <small>Price start at</small>
                                        {/* {HotelRoomData.data[0] && HotelRoomData.data[0].DayRates.map(data => ( */}
                                        <h5 className="ms-3 mb-0">
                                            <b>{HotelRoomData.data[0] && numberFormat(HotelRoomData.data[0]?.DayRates[0]?.Amount, HotelRoomData.data[0]?.Price?.CurrencyCode)}</b></h5>
                                        {/* ))} */}
                                        <span><b className="text-success">+{HotelRoomData.data[0] && HotelRoomData?.data[0]?.Price?.CurrencyCode}.{HotelRoomData.data[0] && HotelRoomData.data[0]?.Price?.GST?.TaxableAmount}</b>taxes&amp;otherfees</span>
                                        <p>1 <strong>Room</strong> per night</p>
                                    </div>
                                    <div className="ms-5 mt-4">
                                        <h6><FontAwesomeIcon icon={faUser} />&nbsp;2 X Guests</h6>
                                        <h6><FontAwesomeIcon icon={faBed} />&nbsp;1 X Room</h6>
                                    </div>
                                </div>
                               <div>
                               </div>
                               <h6 className="small mt-2 text-center"><FontAwesomeIcon icon={faBuildingCircleCheck} className="text-success" />&nbsp; Free Breakfast</h6>
                                <div className="mt-2 ms-3">
                                    <a href="#middle" className="pack-option ">VIEW OPTIONS &nbsp;
                                    </a>
                                </div>
                            </div>
                            <div className="mt-3 lodgingdetails d-flex">
                                <div className="ms-3">
                                    <p className="mb-0"><FontAwesomeIcon icon={faCalendarDays} /><small className="ms-2">Check-In</small></p>
                                    <h6 className="ms-3 mt-2 small">{hotelSearchData.data[0] && hotelSearchData.data[0]?.CheckInDate}</h6>
                                    <h6 className="ms-3 small text-muted">12:00 PM</h6>
                                </div>
                                <div className="me-3">
                                    <p className="mb-0"><FontAwesomeIcon icon={faCalendarDays} /><small className="ms-2">Check-Out</small></p>
                                    <h6 className="ms-3 mt-2 small">{moment(hotelSearchData.data[0] && hotelSearchData.data[0]?.CheckInDate, "DD/MM/YYYY").add(hotelSearchData.data[0].NoOfNights, 'days').format('DD/MM/YYYY')}</h6>
                                    <h6 className="ms-3 mti1 small text-muted" >11:30 AM</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Modal
                        show={modalShow}
                        // size="xxl-down"
                        aria-labelledby="contained-modal-title-vcenter"
                        size="lg"
                        centered
                        // className="bg-dark"
                        scrollable
                        onHide={() => setModalShow(false)}
                    // fullscreen
                    >
                        <Modal.Header style={{ backgroundColor: "#C7C8C7" }} closeButton></Modal.Header>
                        <Modal.Body style={{ backgroundColor: "#C7C8C7" }} className="border-dark">
                            {/* <div>
                                <>
                            <Gallery photos={HotelInfoData?.data[0]?.HotelDetails?.Images} onClick={openLightbox} />
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel
                                            currentIndex={currentImage}
                                            views={HotelInfoData?.data[0]?.HotelDetails?.Images.map(x => ({
                                                ...x,
                                                srcset: x,
                                                // caption: x.title
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                            </>
                            </div> */}
                            {/* <Row className=' mx-auto'>
                                <Col className='controls my-4 text-end'>
                                    <button onClick={sliderRef?.slickPrev}>
                                        <FaChevronLeft />
                                    </button>
                                </Col>
                                <Col xs={8} className="my-3">
                                    <Slider ref={setSliderRef} {...sliderSettings}>
                                        {HotelInfoData.data[0] && HotelInfoData.data[0].HotelDetails.Images.map((data, index) => (
                                            <Card Card key={index} className='cards'>
                                                <div className=' card-list text-center'>
                                                    <img src={data}
                                                        onError={event => {
                                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                                            event.onerror = null
                                                        }} className="w-100" alt="img" onClick={() => setImageGalery(data)} />
                                                </div>
                                            </Card>
                                        ))}

                                    </Slider>
                                </Col>
                                <Col className='controls my-4'>

                                    <Button onClick={sliderRef?.slickNext}>
                                        <FaChevronRight />
                                    </Button>
                                </Col>
                            </Row> */}
                            {/* <Row>
                                <Col xs={9} className="mt-5 mx-auto">
                                    <img src={imageGalery}
                                        onError={event => {
                                            event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                            event.onerror = null
                                        }} className="mx-auto w-50" height={400} alt="img" />
                                </Col>
                            </Row> */}
                            <Row className="my-5">
                                {HotelInfoData?.data[0] && HotelInfoData?.data[0]?.HotelDetails.Images.map((data, index) => (
                                    <Col>
                                        <img src={data} alt="Hotel Images" onClick={openLightbox} height="250px" width="350px" className="mb-3"/>
                                        <ModalGateway>
                                            {viewerIsOpen ? (
                                                <Modal onClose={closeLightbox}>
                                                    <Carousel
                                                        currentIndex={currentImage}
                                                        views={HotelInfoData?.data[0]?.HotelDetails?.Images.map(x => ({
                                                            ...x,
                                                            srcset: x,
                                                            // caption: x.title
                                                        }))}
                                                    />
                                                </Modal>
                                            ) : null}
                                        </ModalGateway>
                                    </Col>
                                ))}
                            </Row>
                        </Modal.Body>

                    </Modal>
                </Card >
            ) : null}{/* <div className="w-100 h-100 rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "280px", paddingLeft: "400px", fontSize: "20px", color: "darkblue" }}>
            <span className="spinner-border spinner-border-sm"></span>
            &nbsp;Loading....
        </div> */}

        </>


    )
}

export default Hotelpreview