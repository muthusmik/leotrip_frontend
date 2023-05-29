import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
// import TravelerDetails from './travelerdetails';
// import shieldCheck from '../../../asset/images/flight/shield.png'
// import faPlane from '../../../asset/images/flight/take.png';
import Modal from 'react-bootstrap/Modal';
import { Table, Tabs, Tab } from 'react-bootstrap';
import { useSelector, useStore } from "react-redux";
import moment from "moment";
// import Parser from 'html-react-parser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';

const Flightdetails = () => {
    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const store = useStore()
   




    const flightoneway = useSelector(state => state.FlightOneway);
    const flightinfo = useSelector(state => state.FlightOnewayInfo);
    const flightreturninfo = useSelector(state => state.FlightReturnInfo);

   


    /* # Destination */
    const HandleDestination = (value) => {
        if (value.length == 1) {
            var name = (value[0].Destination.CityName)
            var code = (value[0].Destination.CityCode)
            return (
                name + "(" + code + ")"
            )
        }
        else if (value.length > 1) {
            var index = value.length - 1;
            var name = (value[index].Destination.CityName)
            var code = (value[index].Destination.CityCode)

            return (
                name + "(" + code + ")"
            )
        }
    }


    /*    # Inner Card Duration */

    const HandleBtw = (value) => {
        var Hours = Math.floor(value.Duration / 60)
        var minute = value.Duration % 60
        var duration = Hours + "h:" + minute + "m"
        return (
            duration
        )
    }

    /* # Destination */
    const HandleDestinationName = (value) => {
        if (value.length == 1) {
            var name = (value[0].Destination.CityName)
            var code = (value[0].Destination.CityCode)
            return (
                name
            )
        }
        else if (value.length > 1) {
            var index = value.length - 1;
            var name = (value[index].Destination.CityName)
            var code = (value[index].Destination.CityCode)

            return (
                name
            )
        }
    }

    //airline logo
    const AirLineList = useSelector(state => state.AirLine);
    function hanldeAirline(val) {
        const filterFlightname = (AirLineList.data).filter((a) => (((a.id).toUpperCase()).localeCompare(val.toUpperCase()) === 0));
        return filterFlightname[0].logo
    }

    return (
        <>
            <Card>

                {(flightoneway.data?.length > 0) && (flightinfo.data?.length > 0) && (
                    <>
                        <Card.Header>
                            <h5 className='fw-bold'>TICKET DETAILS</h5>
                        </Card.Header>
                        <Card.Body className='p-4'>
                            <div className="container row">

                                <div className="col-7">
                                    <h5 className='FlightRoute'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" className="Flight__FlightIcon-sc-1w228os-0 flighticc" loading="lazy"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg>
                                        &nbsp;<span className='text-success'>{flightinfo.data[0].Results.Segments[0][0].Origin.CityName} - {HandleDestinationName(flightinfo.data[0].Results.Segments[0])}</span>
                                    </h5>

                                </div>
                                <div className='col-3 text-end'>
                                    <Badge className='bg-danger'><a className='text-white' onClick={handleShow}>Baggage and Fare Rules</a></Badge>

                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        aria-labelledby="contained-modal-title-vcenter"
                                        size="lg"
                                        className='h-75 my-auto'
                                        centered
                                        scrollable
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Baggage and Fare Rules
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Tabs
                                                defaultActiveKey="Baggage"
                                                id="uncontrolled-tab-example"
                                                className="mb-3 pill"
                                            >

                                                <Tab eventKey="Baggage" title="Baggage">
                                                    <div>

                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" className="Flight__FlightIcon-sc-1w228os-0 eiNikk" loading="lazy"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg>
                                                            <span className='h6 mx-1'>{flightinfo.data[0]?.Results?.Segments[0][0]?.Origin?.CityName}({flightinfo?.data[0]?.Results?.Segments[0][0]?.Origin.CityCode}) - {HandleDestination(flightinfo.data[0]?.Results?.Segments[0])}</span>
                                                            {/* <span className='h6 small'>({flightinfo.data[0].Results.Segments[0][0].Airline.AirlineName})</span> */}
                                                        </div>
                                                        <div className='mt-3'>
                                                            {flightinfo.data[0]?.Results?.Segments[0]?.length > 0 && flightinfo.data[0]?.Results?.Segments[0]?.map((data) => (
                                                                <Table bordered size="sm small" >
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Airline</th>
                                                                            <th>Baggage</th>
                                                                            <th>CabinBaggage</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>{data.Airline.AirlineName}({data.Airline.AirlineCode}-{data.Airline.FlightNumber})</td>
                                                                            <td>{data.Baggage}</td>
                                                                            <td>{data.CabinBaggage}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="Fare Rules" title="Fare Rules" >
                                                    <div>
                                                        <div>

                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" className="Flight__FlightIcon-sc-1w228os-0 eiNikk" loading="lazy"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg>
                                                            <span className='h6  mx-1'>{flightinfo.data[0]?.Results?.Segments[0][0]?.Origin?.CityName}({flightinfo.data[0]?.Results?.Segments[0][0]?.Origin?.CityCode}) - {HandleDestination(flightinfo.data[0]?.Results?.Segments[0])}</span>

                                                            <Badge bg='danger'>Partially Refundable</Badge>
                                                        </div>
                                                        <div className='mt-3 row'>
                                                            <div className='cancellation'>
                                                                <div className='CancellationCharges'>
                                                                    {(flightoneway.data[0]?.result?.Results) ? flightoneway.data[0].result.Results.map((cancel, index) => (
                                                                        <div className='table-style ms-4' key={index}>
                                                                            {/* {Parser(cancel.FareRuleDetail)} */}
                                                                            <div dangerouslySetInnerHTML={{ __html: cancel.FareRuleDetail }}></div>

                                                                            <div dangerouslySetInnerHTML={{ __html: flightoneway.data[0]?.result?.SpecialRule }}></div>

                                                                        </div>
                                                                    )) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "80px", paddingLeft: "400px", fontSize: "20px", color: "darkblue", height: "100px" }}>
                                                                        <span className="spinner-border spinner-border-sm"></span>
                                                                        &nbsp;Loading....

                                                                    </div>
                                                                    }
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </Modal.Body>

                                    </Modal>
                                </div>
                                <div className='col-2 text-end'>
                                    {/* <Badge className='bg-danger'>PARTIALLY REFUNDABLE</Badge> */}
                                    <small className="refundable px-1  fw-bold">{flightinfo.data[0].Results.IsRefundable ? <span>REFUNDABLE</span> : null}</small>
                                </div>
                            </div>

                            <div className="container">
                                {flightinfo.data[0]?.Results?.Segments[0].map((data, index) => (
                                    <Card className='p-3'>
                                      
                                            <div className="row" key={index} >

                                                <div className="col-2 small">
                                                    <img src={hanldeAirline(data.Airline.AirlineCode)} height="30px" width="30px" />
                                                    <h6 className='text-muted small'>{data.Airline.AirlineName}<br />{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</h6>
                                                </div>
                                                <div className="col-3 small">
                                                    <p>{moment(data.DepTime).format("ddd MMM DD YYYY")} <br />
                                                        <b className='h6'>{data.Origin.AirportCode}&nbsp;
                                                            <span className='text-muted'>{moment(data.DepTime).format("HH:MM")}</span>
                                                        </b><br />
                                                        <span className='text-muted'>{data.Origin.AirportName}</span></p>
                                                </div>
                                                <div className="col-3 small  my-auto">
                                                    <div>
                                                        <div className="justifyBetween alignItemsCenter d-flex">
                                                            <div className="hVaJvo"></div>.....
                                                            <p className="text-danger mt-1">{(flightinfo.data[0]?.Results?.Segments[0][index] && HandleBtw(flightinfo.data[0]?.Results?.Segments[0][index]))}</p>.....
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" loading="lazy" className="Flight__FlightIcon-sc-1w228os-0 eiNikk"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg></div>

                                                        {/* <h6 className='mt-3'>{moment({}).seconds(flightinfo.data[0].Results.Segments[0][0].Duration).format("HH:mm")}</h6> */}
                                                    </div>
                                                </div>
                                                <div className='col-4 small'>
                                                    <p>{moment(data.ArrTime).format("ddd MMM DD YYYY")} <br />

                                                        <span className='h6'>{data.Destination.AirportCode}&nbsp;
                                                            <span className='text-muted'>{moment(data.ArrTime).format("HH:MM")}</span>

                                                        </span>
                                                        <br /><span className='text-muted'>{data.Destination.AirportName}</span></p>
                                                </div>
                                            </div>
                                       
                                    </Card>
                                ))}
                            </div>
                        </Card.Body>
                    </>
                )}
            </Card>
            <Card>
                {(flightoneway.data?.length > 0) && (flightreturninfo?.data?.length > 0) && (
                    <>
                        <Card.Body className='p-4'>
                            <div className="container row">

                                <div className="col-7">
                                    <h5 className='FlightRoute'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" className="Flight__FlightIcon-sc-1w228os-0 flighticc" loading="lazy"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg>
                                        &nbsp;<span className='text-success'>{flightreturninfo.data[0].Results.Segments[0][0].Origin.CityName} - {HandleDestinationName(flightreturninfo.data[0].Results.Segments[0])}</span>
                                    </h5>

                                </div>
                                <div className='col-3 text-end'>
                                    <Badge className='bg-danger'><a className='text-white' onClick={handleShow}>Baggage and Fare Rules</a></Badge>

                                    <Modal
                                        show={view}
                                        onHide={handleClose}
                                        aria-labelledby="contained-modal-title-vcenter"
                                        size="lg"
                                        className='h-75 my-auto'
                                        centered
                                        scrollable
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Baggage and Fare Rules
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Tabs
                                                defaultActiveKey="Baggage"
                                                id="uncontrolled-tab-example"
                                                className="mb-3 pill"
                                            >

                                                <Tab eventKey="Baggage" title="Baggage">
                                                    <div>

                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" className="Flight__FlightIcon-sc-1w228os-0 eiNikk" loading="lazy"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg>
                                                            <span className='h6 mx-1'>{flightreturninfo.data[0]?.Results?.Segments[0][0]?.Origin?.CityName}({flightreturninfo?.data[0]?.Results?.Segments[0][0]?.Origin.CityCode}) - {HandleDestination(flightreturninfo.data[0]?.Results?.Segments[0])}</span>
                                                            {/* <span className='h6 small'>({flightinfo.data[0].Results.Segments[0][0].Airline.AirlineName})</span> */}
                                                        </div>
                                                        <div className='mt-3'>
                                                            {flightreturninfo.data[0]?.Results?.Segments[0]?.length > 0 && flightreturninfo.data[0]?.Results?.Segments[0]?.map((data) => (
                                                                <Table bordered size="sm small" >
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Airline</th>
                                                                            <th>Baggage</th>
                                                                            <th>CabinBaggage</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>{data.Airline.AirlineName}({data.Airline.AirlineCode}-{data.Airline.FlightNumber})</td>
                                                                            <td>{data.Baggage}</td>
                                                                            <td>{data.CabinBaggage}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="Fare Rules" title="Fare Rules" >
                                                    <div>
                                                        <div>

                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" className="Flight__FlightIcon-sc-1w228os-0 eiNikk" loading="lazy"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg>
                                                            <span className='h6  mx-1'>{flightreturninfo.data[0]?.Results?.Segments[0][0]?.Origin?.CityName}({flightreturninfo.data[0]?.Results?.Segments[0][0]?.Origin?.CityCode}) - {HandleDestination(flightreturninfo.data[0]?.Results?.Segments[0])}</span>

                                                            <Badge bg='danger'>Partially Refundable</Badge>
                                                        </div>
                                                        <div className='mt-3 row'>
                                                            <div className='cancellation'>
                                                                <div className='CancellationCharges'>
                                                                    {(flightoneway.data[0]?.result?.Results) ? flightoneway.data[0].result.Results.map((cancel, index) => (
                                                                        <div className='table-style ms-4' key={index}>
                                                                            {/* {Parser(cancel.FareRuleDetail)} */}
                                                                            <div dangerouslySetInnerHTML={{ __html: cancel.FareRuleDetail }}></div>

                                                                            <div dangerouslySetInnerHTML={{ __html: flightoneway.data[0]?.result?.SpecialRule }}></div>

                                                                        </div>
                                                                    )) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "80px", paddingLeft: "400px", fontSize: "20px", color: "darkblue", height: "100px" }}>
                                                                        <span className="spinner-border spinner-border-sm"></span>
                                                                        &nbsp;Loading....

                                                                    </div>
                                                                    }
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </Modal.Body>

                                    </Modal>
                                </div>
                                <div className='col-2 text-end'>
                                    {/* <Badge className='bg-danger'>PARTIALLY REFUNDABLE</Badge> */}
                                    <small className="refundable px-1  fw-bold">{flightreturninfo.data[0].Results.IsRefundable ? <span>REFUNDABLE</span> : null}</small>
                                </div>
                            </div>

                            <div className="container">
                                {flightreturninfo.data[0]?.Results?.Segments[0].map((data, index) => (
                                    <Card className=''>
                                        <Card.Body>
                                            <div className="row" key={index}>

                                                <div className="col-2 small">
                                                    <img src={hanldeAirline(data.Airline.AirlineCode)} height="30px" width="30px" />
                                                    <h6 className='text-muted small'>{data.Airline.AirlineName}<br />{data.Airline.AirlineCode}-{data.Airline.FlightNumber}</h6>
                                                </div>
                                                <div className="col-3 small">
                                                    <p>{moment(data.DepTime).format("ddd MMM DD YYYY")} <br />
                                                        <b className='h6'>{data.Origin.AirportCode}&nbsp;
                                                            <span className='text-muted'>{moment(data.DepTime).format("HH:MM")}</span>
                                                        </b><br />
                                                        <span className='text-muted'>{data.Origin.AirportName}</span></p>
                                                </div>
                                                <div className="col-3 small my-auto">
                                                    <div>
                                                        <div className=" d-flex">
                                                            <div className="hVaJvo"></div>.....
                                                            <p className="text-danger mt-1">{(flightinfo.data[0]?.Results?.Segments[0][index] && HandleBtw(flightinfo.data[0]?.Results?.Segments[0][index]))}</p>.....
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="2rem" loading="lazy" className="Flight__FlightIcon-sc-1w228os-0 eiNikk"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg></div>

                                                        {/* <h6 className='mt-3'>{moment({}).seconds(flightinfo.data[0].Results.Segments[0][0].Duration).format("HH:mm")}</h6> */}
                                                    </div>
                                                </div>
                                                <div className='col-4 small'>
                                                    <p>{moment(data.ArrTime).format("ddd MMM DD YYYY")} <br />

                                                        <span className='h6'>{data.Destination.AirportCode}&nbsp;
                                                            <span className='text-muted'>{moment(data.ArrTime).format("HH:MM")}</span>

                                                        </span>
                                                        <br /><span className='text-muted'>{data.Destination.AirportName}</span></p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>

                        </Card.Body>
                    </>
                )}
            </Card>
        </>
    )
}

export default Flightdetails