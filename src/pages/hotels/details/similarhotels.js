import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { Card, Badge, Button,Row } from 'react-bootstrap';
import { faUtensils, faHome, faWifi, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useStore, useDispatch } from "react-redux";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import { loadHotelInfo } from "../../../store/actions/hotelinfo";
import { useHistory } from 'react-router-dom';
import { loadHotelRoom } from "../../../store/actions/hotelroom";


const SimilarHotels = () => {

    const [sliderRef, setSliderRef] = useState(null)
    const dispatch = useDispatch();
    const sliderSettings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
    }

    const Hotel = useSelector(state => state.HotelSearch)

    /* # STORE */
    const hotelSearchList = useSelector(state => state.HotelSearch);
    const store = useStore()
    const history = useHistory();
    const handleSubmit = (HotelCode, ResultIndex) => {



        /* # Hotelinfo dispatch */
        const hotelInfo = {
            "ResultIndex": ResultIndex,
            "HotelCode": HotelCode,
            "TraceId": Hotel.data[2]
        }
        dispatch(loadHotelInfo(hotelInfo))

        const hotelRoom = {
            "ResultIndex": ResultIndex,
            "HotelCode": HotelCode,
            "TraceId": Hotel.data[2]
        }
        dispatch(loadHotelRoom(hotelRoom));

        history.push("/hotel/hoteldetails")
        console.log("data result id.....", HotelCode)
       
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
       
    }

    return (
        <div className="container hotel-detailLayout mt-5">

            <div>
                <h5 className="fw-bold">Similar Properties to Hotel Vinayak</h5>
            </div>
            <div className='float-end'>
                <button onClick={sliderRef?.slickPrev} className="btn btn-primary btn-sm rounded-circle  me-2">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button onClick={sliderRef?.slickNext} className="btn btn-primary btn-sm rounded-circle">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

            <div className="mt-5">

                <div className="row">

                    <div>
                        <Slider ref={setSliderRef} {...sliderSettings}>
                            {(hotelSearchList.data.length > 0) ? (hotelSearchList.data[1]).slice(0, 12).map((hotel, index) => (
                                <div key={index}>
                                    <div className="p-3 bg-white rounded-4 mx-2" style={{height:"630px"}}  onClick={() => handleSubmit(hotel.HotelCode, hotel.ResultIndex)}>
                                        <img src={hotel.HotelPicture}
                                            onError={event => {
                                                event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                                event.onerror = null
                                            }} className="sliderimg rounded-2" alt="HotelImage" />
                                        <div>
                                            <p></p>
                                            <h5 className="fw-bold">{hotel.HotelName}</h5>
                                            <Badge bg="success" className="fs-6 small">{hotel.StarRating}/5</Badge>

                                            <p className="small text-wrap h6 text-muted mb-3 w-75 mt-3">
                                            <OverlayTrigger trigger="hover" placement="bottom" overlay={
                                            <Popover className="popoverStyle ">
                                                <Popover.Body className="text-center">
                                                    <Badge bg="success">Hotel Address</Badge>
                                                    <p className="text-center">{hotel.HotelAddress}</p>
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                            <Badge className="popoverbutton">Hotel Address</Badge>

                                        </OverlayTrigger>
                                                </p>

                                            {/* <h6 className="fw-bold"><Badge bg="success">{hotel.StarRating}/5</Badge> 3860 reviews</h6> */}

                                            <h6 className="text-muted mb-4"><FontAwesomeIcon icon={faBed} /> Deluxe Non A/C Room</h6>

                                            <p className="small fw-bold"><FontAwesomeIcon icon={faUtensils} className="text-muted" /> Restaurant<br />
                                                <FontAwesomeIcon icon={faHome} className="text-muted" /> Room Service<br />
                                                <FontAwesomeIcon icon={faWifi} className="text-muted" />Free Internet</p>

                                            <h6 className="text-muted small"><del>₹{hotel.Price.PublishedPrice}</del></h6>
                                            <h5 className="fw-bold">₹{hotel.Price.OfferedPriceRoundedOff}</h5>
                                            <h6 className="small">1 room per night</h6>
                                        </div>
                                    </div>
                                </div>
                            )) : null}
                        </Slider>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SimilarHotels