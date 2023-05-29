import React, { useState, useEffect } from "react";
import './hotellist.scss';
import { Carousel, Button, Row, Col, Badge, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClose } from '@fortawesome/free-solid-svg-icons';
import stars from '../../../asset/images/bus/star.png';
import CustomButton from "../../../component/button";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadHotelInfo } from "../../../store/actions/hotelinfo";
import { loadBlockRoom } from "../../../store/actions/blockroom";
import Parser from 'html-react-parser';
import { previewFile } from "rsuite/esm/utils";
import nomessage from "../../../asset/images/nomessage.png"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import nodata from '../../../asset/images/hotel/no-result-found.png'
import './hotelloader.scss'
import { loadHotelRoom } from "../../../store/actions/hotelroom";
import ErrorImage from "../../../asset/images/hotel/noimage.jpg"
const HotelBooking = ({ filter, handleError /* handleMessage */ }) => {


    const dispatch = useDispatch();

    // const [message,setMessage] = useState("")

    // useEffect(() =>{
    //     setMessage(handleError)
     
    // },[handleError])



    /* #Routing call */
    const history = useHistory();


    const Hotel = useSelector(state => state.HotelSearch)

   
    const guestdetails = JSON.parse(localStorage.getItem('roomGuest'));
  
    const [imageUrl,setImageUrl]= useState(ErrorImage);

    const handleSubmit = (HotelCode, ResultIndex, hotel,HotelName) => {

        
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
        history.push("/hotel/hoteldetails",{ state:{ResultIndex:ResultIndex, HotelCode:HotelCode,TraceId:Hotel.data[2],HotelName:HotelName}})

    }

    /* # STORE value assing to state*/
    const [hotelSearchList, setHotelSearchList] = useState();

    const [error, setError] = useState(false)
    useEffect(() => {
        setHotelSearchList(filter);
        setError(handleError)
        
    }, [filter, handleError])

    // # Loader
    var preloadTime;

    function preloader() {
        preloadTime = setTimeout(showPage, 5000);
    }

    function showPage() {
        document.getElementById("preloader").style.display = "none";
    }

    /*  # To fetch heart icon only one at a time  */


    const [like, setLike] = useState('');
    const [view, setView] = useState('');

    const handleIconClick = (index) => {
        /* # TO show and hide */
        if (view === index) {
            setLike(!like);
        }
        else {
            setView(index)
            setLike(true);
        }
    }

    // # show a preview image

    const [viewImage, setViewImage] = useState('');
    const [showImage, setShowImage] = useState('');
    const handleShowDialog = (idx) => {
        if (showImage === idx) {
            setViewImage(!viewImage)
        } else {
            setViewImage(true)
            setShowImage(idx)
        }
       
    };

    const [show, setShow] = useState('');
    const handleClose = () => {
        setShow(false);
    }


    


    const percentage = (base, offer) => {
        var percen = Math.floor(offer * 100 / base)
        var percentage = 100 - percen
        return percentage
    }

    const numberFormat = (value, cur) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0
        }).format(value);
    return (
        <>
            {(hotelSearchList?.length > 0) ?
                <div className="p-2 py-auto">
                    <h6 className="hotel-result">showing <span className="fw-bold">{hotelSearchList.length}&nbsp;Hotels</span></h6>
                </div>
                : null}
            {(handleError === false && hotelSearchList && hotelSearchList.length > 0) ? (hotelSearchList) && (hotelSearchList).map((hotel, index) => (
                <div className="hotelbooking mb-4" key={index}>
                    <div className="hotel-card bg-white shadow  d-flex">
                        <div className="hotel-card_images">
                            <div className="carouselslider">
                                <img src={hotel.HotelPicture}
                                    onClick={() => handleSubmit(hotel.HotelCode, hotel.ResultIndex)}
                                    onError={event => {
                                        event.target.src ="http://localhost:3000/images/noimage.jpg"
                                        event.onerror = null
                                    }} className=" w-100" />
                            </div>
                            {/* {(viewImage) ? showImage === index && (
                                    <dialog
                                        className="dialog imagedialog"
                                        open
                                        onClick={handleShowDialog}
                                    >

                                        <div>
                                            <Button variant="light" onClick={handleClose} className="text-success  mb-2 float-end fw-bold">
                                                <FontAwesomeIcon icon={faClose} />
                                            </Button>
                                        </div>
                                        <div>
                                            <img src={hotel.HotelPicture}
                                                onError={event => {
                                                    event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                                    event.onerror = null

                                                }} className="d-block w-100 h-100  rounded-3 pb-3" alt="HotelImage" />
                                        </div>

                                    </dialog>
                                ) : null} */}
                        </div>
                        <div className="hotel-card_info p-4">
                            <div className=" align-items-center">
                                <Row>
                                    <Col xs={8} >
                                        <h5 className="mb-0 mr-2 fw-bold ">
                                            &nbsp;&nbsp;
                                            {hotel.HotelName}

                                        </h5>

                                        <div className="text-muted my-2 h6 small">
                                            <i className="fas fa-map-marker-alt text-muted fs-5"></i>
                                            &nbsp;&nbsp;
                                            {hotel.HotelAddress}
                                        </div>
                                        
                                        <OverlayTrigger trigger="hover" placement="bottom" overlay={
                                            <Popover className="popoverStyle ">
                                                <Popover.Body className="text-center">
                                                    <Badge bg="success">Near {hotel.HotelName}</Badge>
                                                    {(hotel.HotelDescription)?(
                                                    <p className="small popovercontent text-start">{Parser(hotel.HotelDescription)}</p>
                                                    ):
                                                    (<p className="small popovercontent text-start">{Parser(hotel.HotelAddress)}</p>)
                                                    }
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                            <Badge className="popoverbutton small">Near {hotel.HotelName}</Badge>

                                        </OverlayTrigger>
                                        
                                        <div>
                                            {[...Array(hotel.StarRating)].map((star) => {
                                                return (
                                                    <span className="fs-5 mb-5 text-warning"><img src={stars} alt="star" width="18px" /></span>
                                                );
                                            })}
                                        </div>
                                    </Col>
                                    <Col xs={4} >
                                        <Row className="mt-1">
                                            <Col xs={8}>

                                            </Col>
                                            <Col>
                                                {/* {(hotel.Price.PublishedPrice !== hotel.Price.OfferedPriceRoundedOff) && (
                                                    <p class="offeredprice">{percentage(hotel.Price.PublishedPrice, hotel.Price.OfferedPriceRoundedOff)}%&nbsp;off</p>
                                                )} */}
                                                {/* <FontAwesomeIcon icon={faHeart} onClick={() => handleIconClick(index)} className={(index === view && like === true) ? ("like") : ("unlike")} /> */}
                                            </Col>
                                            <div className="hotel-card_pricing text-end my-end">
                                                <h5 className="fw-bold text-danger">{numberFormat(hotel.Price.PublishedPrice, hotel.Price.CurrencyCode)}</h5>
                                                {/* <h6 className="text-striked text-muted fw-bold">{numberFormat(hotel.Price.PublishedPrice, hotel.Price.CurrencyCode)}</h6> */}
                                                {/* <h6 className="text-success"><b>{hotel.Price.offer}</b></h6> */}
                                                <h6 className="small">per 1 night</h6>
                                                <Button customstyle="btn  btn-primary fw-bold" onClick={() => handleSubmit(hotel.HotelCode, hotel.ResultIndex, hotel,hotel.HotelName)}>Check Rooms</Button>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>

                                {/* {description === true && (
                                        <>
                                            {Parser(hotel.HotelDescription)}
                                            <a onClick={() => setDescription(false)} className="link-primary"> show less</a>
                                        </>
                                    )}
                                    {description === false && (
                                        <>
                                            {Parser(hotel.HotelDescription.slice(0, 100))}
                                            <a onClick={() => setDescription(true)} className="link-primary"> show more</a>
                                        </>
                                    )} */}
                            </div>
                        </div>
                    </div>
                </div>
            )
            ) : (handleError) ? (
                <Card className='ms-4 noData'>
                    {/* <h2>No Data Found</h2> */}
                    <p className="text-center my-auto"><img src={nodata} alt={nodata} width="40%" height="60%" /></p>
                </Card>
            ) : (Hotel?.error?.errors) ? (
                <Card className="border-0 h-50">
                    <div className='ms-4 text-center oops-page mt-4'>
                        <p><img src={nomessage} alt={nomessage} width="30%" height="30%" /></p>
                        <h4 className='fw-bold mt-5'><span style={{ fontSize: "25px" }}>O</span>ops! try again later </h4>
                    </div>
                </Card>
            ) :
                <Card className="hotelLoader  text-center pb-3 ">
                    <div class="preloaderBg" id="preloader" onload="preloader()">
                        <div class="preloader"></div>
                        <div class="preloader2"></div>
                    </div>
                    <h6 className='fw-bold'>Please Wait ...</h6>
                    <h6 className='fw-bold'>We are searching the best hotels for you</h6>
                </Card>
            }
        </>
    )
}
export default HotelBooking;
