import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../asset/images/logo.png"
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory()
    return (
        <Row className="container mx-auto">
            <Col xs={6}>
                <img src={logo} alt="logo" width="155px" height="100px" onClick={()=>history.push('/flight')} />
            </Col>
            <Col className="my-auto">
                <Row>
                    <Col xs={1} className="elementor-icon-box-icon">
                        <i aria-hidden="true" className="fas fa-phone phoneIcon"></i>
                    </Col>
                    <Col>
                        <h6 >Contact:</h6>
                        <h6 > (91)-98491 44844 /(91)-93939 60999</h6>
                    </Col>
                </Row>
            </Col>
            <Col className="my-auto" >
                <Row >
                    <Col xs={1} className="elementor-icon-box-icon">
                        <i aria-hidden="true" className="far fa-envelope"></i>
                    </Col>
                    <Col>
                        <h6>Email</h6>
                        <h6> hojoycomforts@gmail.com </h6>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Header