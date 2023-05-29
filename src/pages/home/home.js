import React, { useState } from "react";
import { Tab, Tabs, Card, Row, Col, Button } from 'react-bootstrap';
import './home.scss';
import tail from '../../asset/images/tail.jpg';
import Img9 from '../../asset/images/img8.jpg';
import Img6 from '../../asset/images/img6.jpg';
import Img11 from '../../asset/images/img11.jpeg';
import deals from '../../asset/images/deals.jpg';
import take from '../../asset/images/flight/take.png';
import HotelOfferDetails from "../../json/Hotels/hotelbookingcards";
import FlightOfferDetails from "../../json/Flight/ticketlist";
// import TravelStories from "./travelstories"
import HotelCard from "./hotelcards"
import Offers from './offers';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


const Deals = () => {

    const [SliderReference, setSliderReference] = useState(null)

    const [SliderShow, setSliderShow] = useState(null)


    const sliderControl = {
        dots: false,

        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: true,
    }

    const sliderSettings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: true,
    }

    return (
        <>

            <Card className="container mt-5 cardrad" >
                <Card.Header className="bg-white h-25">
                   
                    <h5 className="fw-bold labledeals headerdeals"> <img src={deals}  alt="Exclusive Deals" className="h-100"/></h5>
                </Card.Header>
                <Card.Body className="">

                    <Tabs
                        defaultActiveKey="hotel"
                        className="w-25 mt-3 mx-auto border rounded-pill tabsDeals"
                        justify
                        variant="pills"
                        
                    >
                        <Tab eventKey="hotel" title="Hotel" className="dealsTab" tabClassName="rounded-pill dealstabActive">
                            <Row>
                                <Col className="my-auto">
                                    <Button variant="light" size="lg" onClick={SliderReference?.slickPrev} className="slidebutton rounded-circle">
                                        <FontAwesomeIcon icon={faArrowLeftLong} />
                                    </Button>
                                </Col>
                                <Col xs={11}>
                                    <div className="HojoyBankoffers mt-3 ">
                                        <Slider ref={setSliderReference} {...sliderControl}>
                                            {HotelOfferDetails.map((card, index) => (
                                                <Card className="DealsCARD">
                                                    <Row>
                                                        <img src={card.hotelImg} alt="img1" className="dealsbannerimage" width={170} height={135}></img>
                                                        <Col xs={8} className="flex-3 ms-2  ">
                                                            <h5 className="fw-bold mt-2">{card.hotel_name}</h5>
                                                            <h4 className="text-muted fw-bold">{card.location}</h4>
                                                        </Col>
                                                        <Col className="mt-2 text-end">
                                                            <h5 className="text-danger fw-bold">{card.offerprice}</h5>
                                                            <h5 className="text-danger small fw-bold"><del>{card.originalprice}</del></h5>
                                                            <h5 className="text-muted small">Per night</h5>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            ))}
                                        </Slider>
                                    </div>
                                </Col>
                                <Col className="my-auto rightcoldeals ">
                                    <Button variant="light" size="lg" onClick={SliderReference?.slickNext} className="slidebutton rounded-circle">
                                        <FontAwesomeIcon icon={faArrowRightLong} />
                                    </Button>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="flight" title="Flight" className="dealsTab" tabClassName="rounded-pill dealstabActive">
                            <Row>
                                <Col className="my-auto">
                                    <Button variant="light" size="lg" onClick={SliderShow?.slickPrev} className="slidebutton rounded-circle">
                                        <FontAwesomeIcon icon={faArrowLeftLong} />
                                    </Button>
                                </Col>
                                <Col xs={11} >
                                    <div className="HojoyBankoffers mt-3">
                                        <Slider ref={setSliderShow} {...sliderSettings}>
                                            {FlightOfferDetails.map((card, index) => (
                                                <Card className="DealsCARD">
                                                    <Card.Header>

                                                        <h5 className="fw-bold small mt-2">{card.code}</h5>
                                                    </Card.Header>
                                                    <Row>
                                                        <Col className="text-end">
                                                            <h5 className="fw-bold small mt-2">{card.fromid}</h5>
                                                            <h4 className="text-muted small fw-bold">{card.depfrom}</h4>
                                                        </Col>
                                                        <Col className="my-auto" >
                                                            <img src={take} alt="flight" className="mx-auto" />
                                                        </Col>
                                                        <Col>
                                                            <h5 className="fw-bold small mt-2">{card.toid}</h5>
                                                            <h4 className="text-muted small fw-bold">{card.returnto}</h4>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <p className="text-center">Travel between</p>
                                                    </Row>
                                                    <Card.Footer className="w-50 mx-auto h-25 mt-3 rounded-top bg-light">
                                                        <p className="text-center">{card.flightname}</p>
                                                    </Card.Footer>
                                                </Card>
                                            ))}
                                        </Slider>
                                    </div>
                                </Col>
                                <Col className="my-auto rightcoldeals ">
                                    <Button variant="light" size="lg" onClick={SliderShow?.slickNext} className="slidebutton rounded-circle">
                                        <FontAwesomeIcon icon={faArrowRightLong} />
                                    </Button>
                                </Col>
                            </Row>

                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
           
        </>

    )
}



const Homepage = () => {

    const [location, setLocation] = useState({});

    React.useEffect(() => {
        getLocation()
    }, []);

    const  getLocation=()=> {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }


      function showPosition(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLocation({ lat, long });
      }

     console.log("hahaha",location)

    return (
        <>
            <div className="homecontent">
                <Offers />
                <Deals />
                <HotelCard />

                {/* <TravelStories /> */}
            </div>
        </>
    );

}; export default Homepage;

