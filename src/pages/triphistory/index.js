import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal,Tabs,Tab } from 'react-bootstrap';
import logo from '../../asset/images/logo.png'
import CustomNavbar from '../../component/navbar/Navbar';
import travels from '../../asset/images/login/travels.png';

const TripMsg = ()=>{
    return(
        <>
            <Card className='triprow'>
                <Row>
                    <Col xs={4} className='p-4 triphead '>
                        <img className='tripimage' src={travels} alt="travels" width={250}/>
                    </Col>
                    <Col xs={5} className='mt-5 tripcontent'>
                        <h6>Looks like you have never booked with Hojoy
                        <span className='h5 fw-bold'>When you book your trips will be shown here.</span></h6>
                        <Button className='mt-3'>Start Booking Now</Button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}



const TripHistory = () => {

    return (
        <>
            <CustomNavbar />
            <div className='bgtheme'>
                <div className='bgthemepera'><h4 className='text-center text-white pt-5'>Trip History</h4></div>
                
            </div>
            <div className='profilePage mx-auto'>
                <Tabs
                    defaultActiveKey="Upcoming"
                    id="uncontrolled-tab-example"
                    className="mb-3 triptabs"
                    fill
                >
                    <Tab eventKey="Upcoming" title="Upcoming Bookings">
                        <TripMsg />
                    </Tab>
                    <Tab eventKey="Cancelled" title="Cancelled Bookings">
                        <TripMsg />
                    </Tab>
                    <Tab eventKey="Completed" title="Completed Bookings">
                        <TripMsg />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default TripHistory
