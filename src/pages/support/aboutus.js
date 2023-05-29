import React from "react";
import { useHistory } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import logo from "../../asset/images/logo.png"
import driver from "../../asset/images/Car-Drivers.jpg"
import Footer from "./footer";
import './support.scss';
import Header from "./header";
const AboutUs = () => {
    const history = useHistory();

    /*  # scroll Top of Page */

   React.useEffect(()=>{
    window.scrollTo(0,0);
  }, []);


    return (
        <div>
            <Header />
            <div className="page-header flex-middle bg_img">
                <div className="container">
                    <div className="inner ">
                        <h1 className="page-title">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="container term p-5">
                <div className="ot-heading">
                    <h6 className="highlightabout small">ABOUT COMPANY</h6>
                    <h2 class="main-head">About Ho Joy Comforts</h2>
                </div>
                <div >
                    <div class="elementor-widget-wrap">
                    </div>
                    <div>
                        <div >
                            <p>By investing in technology Ho Joy Comforts takes the friction out of travel, hojoy.in seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from flights to hotels, and much more. As one of India’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, hojoy.in enables properties to reach a global audience and grow their businesses. Wherever you want to go and whatever you want to do, hojoy.in makes it easy and supports you with 24/7 customer support.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container term p-5">
                <div className="container">
                    <Row >
                        <Col xs={5}>
                            <img src={driver} alt="driver" className="h-100 w-100" />
                        </Col>
                        <Col className="my-auto">
                            <div className="">
                                <div className="ot-heading">
                                <h6 className="is_highlight small">vision</h6>
                                    <h2 class="main-head">What hojoy.in Offers</h2>
                                </div>
                                <div >
                                    <div class="elementor-widget-wrap">
                                    </div>
                                    <div>
                                        <div >
                                            <h5 className="text-success">Incredible Selection</h5>
                                            <p>Whether you want to stay in a luxury beach resort, or a cozy B&B in the countryside, hojoy.in gives you amazing diversity and variety of choice – all in one place.</p>
                                            <h5 className="text-success">Low Rates</h5>
                                            <p>hojoy.in offers you the best available rates. And with our promise to price match, you can rest assured that you’re always getting a great deal.</p>
                                            <h5 className="text-success">Instant Confirmation</h5>
                                            <p>At hojoy.in, every reservation is instantly confirmed. When you find your perfect stay, a few clicks are all it takes.</p>
                                            <h5 className="text-success">No Reservation Fees</h5>
                                            <p>We don’t charge you any booking fees or add any administrative charges. And in many cases, your booking can be canceled free of charge.</p>
                                            <h5 className="text-success">Secure Booking</h5>
                                            <p>We facilitate hundreds of thousands of transactions every day through our secure platform and work to the highest standards to guarantee your privacy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;