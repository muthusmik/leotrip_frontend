import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Modal, Tabs, Tab } from 'react-bootstrap';
import logo from '../../asset/images/logo.png'
import CustomNavbar from '../../component/navbar/Navbar';
import travels from '../../asset/images/login/travels.png';
import './triphistory.scss'
import { bustransactionlist } from '../../store/services/bustransactionlist';
import { cartransactionlist } from '../../store/services/car';
import { hoteltransactionlist } from '../../store/services/hotel';
import { flighttransactionlist } from '../../store/services/flight';
import { busBookinglist } from '../../store/services/bus';
import { carbookinglist } from '../../store/services/car';
import { hotelbookinglist } from '../../store/services/hotel';
import BusTransactionData from './transactionhistory/bus'
import CarTransactionData from './transactionhistory/car'
import HotelTransactionData from './transactionhistory/hotel'
import FlightTransactionData from './transactionhistory/flight'
import BusBookingData from './booking/bus'
import CarBookingData from './booking/car'
import HotelBookingData from './booking/hotel'
import FlightBookingData from './booking/flight'

const TripMsg = () => {
    return (
        <>
            <Card>
                <Row>
                    <Col xs={4} className='p-4'>
                        <img src={travels} alt="travels" width={250} />
                    </Col>
                    <Col xs={5} className='mt-5'>
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

    const [bustnsdata, setBustnsdata] = useState()

    const [cartnsdata, setCartnsdata] = useState()

    const [Hoteltnsdata, setHoteltnsdata] = useState()

    const [Flighttnsdata, setFlighttnsdata] = useState()

    const [busbookingdata, setBusbookingdata] = useState()

    const [carbookingdata, setCarbookingdata] = useState()

    const [Hotelbookingdata, setHotelbookingdata] = useState()

    
    


    useEffect(() => {

        /* loadbustransactionlist()
        loadcartransactionlist()
        loadhoteltransactionlist()
        loadFlighttransactionlist()
        loadbusbookinglist()
        loadcarbookinglist()
        loadhotelbookinglist()
        loadFlightbookinglist() */

    }, []);


    const loadbustransactionlist = async () => {
        let bustransactiondata = await bustransactionlist();
        setBustnsdata(bustransactiondata)
    }

    const loadcartransactionlist = async () => {
        let cartransactiondata = await cartransactionlist();
        setCartnsdata(cartransactiondata)
    }

    const loadhoteltransactionlist = async () => {
        let hoteltransactiondata = await hoteltransactionlist();
        setHoteltnsdata(hoteltransactiondata)
    }

    const loadFlighttransactionlist = async () => {
        let flighttransactiondata = await flighttransactionlist();
        setFlighttnsdata(flighttransactiondata)
    }


    const loadbusbookinglist = async () => {
        let busbookingdata = await busBookinglist();
        setBusbookingdata(busbookingdata)
    }

    const loadcarbookinglist = async () => {
        let carbookingdata = await carbookinglist();
        setCarbookingdata(carbookingdata)
    }

    const loadhotelbookinglist = async () => {
        let hotelbookingdata = await hotelbookinglist();
        setHotelbookingdata(hotelbookingdata)
    }

    

    //console.log("baba", Flightbookingdata)

    return (
        <>
            {/* <CustomNavbar /> */}
           
            <div className='bgtheme '>
                <h4 className='text-center text-white pt-5'>Trip History</h4>
            </div>
            <div className='historyPage mx-auto'>
                <Tabs
                    defaultActiveKey="Upcoming"
                    id="uncontrolled-tab-example"
                    className="mb-3 border border-0"
                    fill
                >
                    <Tab eventKey="Upcoming" title="Bookings" >
                        <div className='transaction_content'>
                            <Tabs
                                defaultActiveKey="Flight"
                                id="uncontrolled-tab-example"
                                className="mb-3 border border-0 Transaction_Historytab"
                                fill
                            >
                                <Tab eventKey="Flight" title="Flight Booking" >
                                    <FlightBookingData  />
                                </Tab>
                                <Tab eventKey="Hotel" title="Hotel Booking">
                                    <HotelBookingData hotelbook={Hotelbookingdata} />
                                </Tab>
                                <Tab eventKey="Bus" title="Bus Booking">
                                    <BusBookingData Busbook={busbookingdata} />
                                </Tab>
                                <Tab eventKey="Car" title="Car Booking">
                                    <CarBookingData Carbook={carbookingdata} />
                                </Tab>
                            </Tabs>
                        </div>
                    </Tab>
                    {/* <Tab eventKey="Completed" title="Completed Bookings">
                        <TripMsg />
                    </Tab> */}
                    <Tab eventKey="Transaction" title="Transaction History" className='Transaction_History'>
                        <div className='transaction_content'>
                            <Tabs
                                defaultActiveKey="Flight"
                                id="uncontrolled-tab-example"
                                className="mb-3 border border-0 Transaction_Historytab"
                                fill
                            >
                                <Tab eventKey="Flight" title="Flight Transaction" >
                                    <FlightTransactionData Flighttns={Flighttnsdata} />
                                </Tab>
                                <Tab eventKey="Hotel" title="Hotel Transaction">
                                    <HotelTransactionData hoteltns={Hoteltnsdata} />
                                </Tab>
                                <Tab eventKey="Bus" title="Bus Transaction">
                                    <BusTransactionData Bustns={bustnsdata} />
                                </Tab>
                                <Tab eventKey="Car" title="Car Transaction">
                                    <CarTransactionData Cartns={cartnsdata} />
                                </Tab>
                            </Tabs>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default TripHistory
