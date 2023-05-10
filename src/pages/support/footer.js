import React from "react";
import { Row,Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-dark">
            <Row className="container mx-auto">
                <Col>
                    <div class="icon-box row">
                        <div class="icon-main me-2 col-1">
                            <i aria-hidden="true" class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="content-box col text-white">
                            <h5 class="fw-bold">Visit Us Daily</h5>
                            <p className="text-white">104 - Saidatta Apartments A Block<br /> SR Nagar Hyderabad - 500039</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="icon-box row ">
                        <div class="icon-main me-2 col-1">
                            <i aria-hidden="true" class="fas fa-phone phoneIcon"></i>
                        </div>
                        <div class="content-box col text-white">
                            <h6 class="title-box ">
                                Call Us 24/7
                            </h6>
                            <p className="text-white"> (91)-98491 44844 / (91)-93939 60999</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="icon-box row">
                        <div class="icon-main me-2 col-1">
                            <i aria-hidden="true" class="fas fa-location-arrow"></i>
                        </div>
                        <div class="content-box col text-white">
                            <h6 class="title-box fw-bold">
                                Mail Us
                            </h6>
                            <p className="text-white"> hojoycomforts@gmail.com</p>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Footer