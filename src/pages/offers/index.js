import React from 'react';
import CustomNavbar from '../../component/navbar/Navbar';
import { Card } from 'react-bootstrap';
import "./offer.scss"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HojoyOfferBanners from "../../json/offers/themebanners";
import Footer from '../../component/footer/footer';
const SiteBanners = () => {



    const sliderMenu = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <div className='container SiteBanners'>
                <Slider  {...sliderMenu}>
                    {HojoyOfferBanners.map((card, index) => (
                        <div>
                            <img src={card.img} alt="img1" ></img>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

const OfferContent = () => {

    return (
        <>
            <div className='container offercontent'>
                <ul className="nav nav-pills offernav" role="tablist">
                    <li className="nav-item mx-2">
                        <a className="nav-link active" data-bs-toggle="pill" href="#alloffers">All Offers</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" data-bs-toggle="pill" href="#flight">Flight</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" data-bs-toggle="pill" href="#hotel">Hotel</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" data-bs-toggle="pill" href="#car">Car</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" data-bs-toggle="pill" href="#bus">Bus</a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="tab-content cardoffercontent mb-5">
                    <div id="alloffers" className="container content-Frame tab-pane active pt-5">
                        <h4>Special Offers For You</h4>
                        <div className='row offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv '>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div id="flight" className="container content-Frame tab-pane fade pt-5 ">
                        <h4>Flight Offer For You</h4>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 500 OFF!</h4>
                                                <h6>With  Bank Credit Cards </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 1500 OFF!</h4>
                                                <h6>With HDFC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 750 OFF!</h4>
                                                <h6>With ICIC Bank Debit Cards</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Flight</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div id="hotel" className="container content-Frame tab-pane fade pt-5">
                        <h4>Hotel Offer For You</h4>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 '>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Flat 10% OFF* on Domestic Hotels</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Flat 10% OFF* on Domestic Hotels</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Flat 10% OFF* on Domestic Hotels</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Flat 10% OFF* on Domestic Hotels</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Flat 10% OFF* on Domestic Hotels</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Flat 10% OFF* on Domestic Hotels</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div> <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Flat 10% OFF* on Domestic Hotels</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Hotel</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div id="car" className="container content-Frame tab-pane fade pt-5">
                        <h4>Car Offer For You</h4>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Up to 30% Less Prices + Extra Discount!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Up to 30% Less Prices + Extra Discount!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Up to 30% Less Prices + Extra Discount!!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Up to 30% Less Prices + Extra Discount!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Up to 30% Less Prices + Extra Discount!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Up to 30% Less Prices + Extra Discount!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Up to 30% Less Prices + Extra Discount!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Car</h5>
                                                <h4>Get Up To Rs. 7500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div id="bus" className="container content-Frame tab-pane fade pt-5">
                        <h4>Bus Offer For You</h4>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Bus</h5>
                                                <h4>Get Up To Rs. 500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Bus</h5>
                                                <h4>Get Up To Rs. 750 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Bus</h5>
                                                <h4>Get Up To Rs. 100 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Bus</h5>
                                                <h4>Get Up To Rs. 500 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-3 offersdiv'>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Bus</h5>
                                                <h4>Get Up To Rs. 700 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                            <div className='col-6'>
                                <Card className='OFFERCARD'>
                                    <div className='upper-region row'>
                                        <div className='col-4'>
                                            <img alt="offer img" src="https://gos3.ibcdn.com/nov-thumb-1666862910.jpg?im=Resize=(270,270)" style={{ width: "140px", height: "140px" }} />
                                        </div>
                                        <div className='col-8 p-2'>
                                            <div className='text-region'>
                                                <h5 className='text-muted fw-bold'>Bus</h5>
                                                <h4>Get Up To Rs. 200 OFF!</h4>
                                                <h6>With ICIC Bank Credit Cards & EasyEMI</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className='p-2 text-primary fw-bold'>Copy&Book:HojoyZHAB@</h5>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const Offers = () => {

    return (
        <>
            <CustomNavbar />
            <div className='HojoyOffer-themes'>
                <SiteBanners />
                <OfferContent />
            </div>
            <Footer />
        </>
    )



}
export default Offers;
