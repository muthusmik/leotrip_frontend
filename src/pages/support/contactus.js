import React from "react";
import './support.scss';
import { Row, Col, Card } from "react-bootstrap";
import calcen from '../../asset/images/support.jpg';
import Footer from "./footer";
import  Header  from "./header";

const ContactUs = () => {

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
                        <h1 className="page-title">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pb-5">
                <Row className="pt-5">
                    <Col xs={6}>
                        <div className="elementor-widget-container">
                            <div className="ot-heading">
                                <h6 className="is_highlight">contact us</h6>
                                <h3 className="main-head">Get in Touch</h3>
                            </div>
                            <p>Give us a call or drop by anytime, we endeavour to answer all enquiries immediately.</p>
                        </div>
                        <Row className="icon-box">
                            <Col xs={1} className="icon-main me-2">
                                <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                            </Col>
                            <Col className="content-box">
                                <h5 className="fw-bold">Visit Us Daily</h5>
                                <p>104 - Saidatta Apartments
                                    A Block
                                    SR Nagar
                                    Hyderabad - 500039</p>
                            </Col>
                        </Row>
                        <Row className="icon-box">
                            <Col xs={1} className="icon-main me-2">
                                <i aria-hidden="true" className="fas fa-phone phoneIcon"></i>
                            </Col>
                            <Col className="content-box">
                                <h6 className="title-box"><a href="tel:+1-800-456-478-23" className="text-dark fw-bold">Call Us 24/7</a></h6>
                                <p> (91)-98491 44844 / (91)-93939 60999</p>
                            </Col>
                        </Row>
                        <Row className="icon-box">
                            <Col xs={1} className="icon-main me-2">
                                <i aria-hidden="true" className="fas fa-location-arrow"></i>
                            </Col>
                            <Col className="content-box">
                                <h6 className="title-box"><a href="mailto: info@hojoy.in" className="text-dark fw-bold">Mail Us</a></h6>
                                <p> hojoycomforts@gmail.com</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <img src={calcen} alt="cal center" height="100%" width={"100%"} />
                    </Col>
                </Row>
                <Row className="formcontainer">
                    <Card className="p-5">
                        <label className="my-3"> Your name<br />
                            <span>
                                <input type="text" name="your-name" value="" size="40" className="w-100 inputbox" aria-required="true" aria-invalid="false" />
                            </span>
                        </label>
                        <label className="my-3"> Your email<br />
                            <span >
                                <input type="email" name="your-email" value="" size="40" className="w-100 inputbox" aria-required="true" aria-invalid="false" /></span>
                        </label>
                        <label className="my-3"> Subject<br />
                            <span>
                                <input type="text" name="your-subject" value="" size="40" className="w-100 inputbox" aria-required="true" aria-invalid="false" />
                            </span>
                        </label>
                        <label> Your message (optional)<br />
                            <span>
                                <textarea name="your-message" cols="40" rows="140" className="w-100 inputtextbox" aria-invalid="false"></textarea>
                            </span>
                            <input type="submit" value="Submit" />
                        </label>


                    </Card>
                </Row>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUs