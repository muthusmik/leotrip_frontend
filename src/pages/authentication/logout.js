import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Tabs, Tab } from 'react-bootstrap';
import CustomNavbar from '../../component/navbar/Navbar';
import travels from '../../asset/images/login/logout.png';
import Login from "../../pages/authentication/login";


const Logout = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <CustomNavbar />
            <div className='bgtheme '>
                <h4 className='text-center text-white pt-5'>My Profile</h4>
            </div>
            <div className='profilePage mx-auto'>
                <Card>
                    <Row className='px-4'>

                        <Col xs={8} className='mt-5'>
                            <h4>Welcome, Traveller!</h4>
                            <h6>Login to get access to your goCash, profile & <br /> bookings, and stay updated on the best travel offers.</h6>
                            <Button className='mt-3 w-50 fw-bold fs-5' onClick={() => setModalShow(true)}>Login</Button>
                        </Col>
                        <Login
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <Col xs={3}>
                            <img src={travels} alt="travels" width={320} />
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    )
}

export default Logout
