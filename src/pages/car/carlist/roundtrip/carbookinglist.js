import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faCircleArrowRight, faGasPump, faCircleCheck, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import Seater from '../../../../asset/images/car/seat.png';
import { Card, Row, Col } from 'react-bootstrap';
import CustomButton from "../../../../component/button";
import { useHistory } from "react-router-dom";
import { set } from "date-fns";
import nomessage from "../../../../asset/images/nomessage.png"

const CarBookingList = () => {


    let history = useHistory();
    const handleClick = (data,TraceID) => {
        
        history.push('/car/carconfirmation', { state: { data:data,TraceID:TraceID } })
    };
    const carlistdata = useSelector(state => state.Car);

    const [carlist, setCarlist] = useState()







    useEffect(() => {
        if (carlistdata.data === 400) {
            setCarlist([])
        }
        else {
            setCarlist(carlistdata)
        }
    }, [carlistdata])

    const numberFormat = (value,cur) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: cur,
        maximumFractionDigits:0
    }).format(value);


    return (
        <>
            {(carlistdata.data?.length > 0) ? (

                (carlist.data[0]?.TaxiData && carlist.data[0]?.TaxiData) ? (
                    <>
                        <h6>showing <span className="fw-bold">{carlist.data[0]?.TaxiData.length} Cars for Round Trip</span></h6>
                        {(carlist.data[0].TaxiData).map((data, index) => (

                            <div key={index} className="carbookinglist mb-3">

                                <Card >
                                    <Card.Header className="shadow">
                                        <Row>
                                            <Col xs={2}>
                                                <img src={data.Image} alt="Car" style={{ height: "70px", width: "140px" }} />
                                            </Col>
                                            <Col>

                                                <h6 className="fw-bold text-dark my-2">{data.Category}</h6>
                                                <h6>
                                                    <FontAwesomeIcon icon={faSnowflake} className="text-secondary" />&nbsp;
                                                    <span className="me-2">{(data.AirConditioner) ? <>Ac</> : <>Non Ac</>}</span>
                                                    <FontAwesomeIcon icon={faSuitcaseRolling} className="text-secondary ms-2" />
                                                    <span>{data.LuggageCapacity}</span>
                                                    <img src={Seater} alt='img' className="ms-2" style={{ width: "20px", height: "20px" }} />&nbsp;
                                                    <span>{data.SeatingCapacity} passengers allowed</span>
                                                </h6>
                                            </Col>
                                        </Row>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="cab_content">
                                            <Col xs={9}>
                                                <ul>
                                                    <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>{data.Fare.TotalKmCharged} kms included. After that {numberFormat(data.Fare.OutStationExtraKmRate, "INR")}/km</p></li>
                                                    <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>Reserve this cab at {numberFormat(data.Fare.AdvanceAmount, "INR")} only</p></li>
                                                    <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>Outstation driver allowance at {numberFormat(data.Fare.OutStationDriverAllowance, "INR")} only</p></li>
                                                    <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>waiting charges at {numberFormat(data.Fare.LocalExtraHrRate, "INR")}/Hrs</p></li>
                                                    {/* <li><FontAwesomeIcon icon={faGasPump} className="text-danger" /><p>Diesel Car</p></li> */}
                                                </ul>
                                            </Col>
                                            <Col className="text-end">
                                                <h5>{numberFormat(data.Fare.TotalAmount, "INR")}</h5>
                                                <CustomButton customstyle="btn btn-primary fw-bold w-50 " onClick={() => handleClick(data,carlist.data[0]?.TraceID)} value='Select'></CustomButton>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                            </div>
                        ))}
                    </>
                ) : <Card className="hotelLoader  text-center pb-3 ">
                    <div class="preloaderBg" id="preloader" onload="preloader()">
                        <div class="preloadercar"></div>
                        <div class="preloader2"></div>
                    </div>
                    <h6 className='fw-bold'>Please Wait ...</h6>
                    <h6 className='fw-bold'>We are searching the best Cars for you</h6>
                </Card>

            ) : (carlistdata.data == 400) ? (
                <Card className="border-0 h-50">
                    <div className='ms-4 text-center oops-page mt-4'>
                        <p><img src={nomessage} alt={nomessage} width="30%" height="30%" /></p>
                        <h4 className='fw-bold mt-5'><span style={{ fontSize: "25px" }}>O</span>ops! try again later </h4>
                    </div>
                </Card>
            ) : <Card className="hotelLoader  text-center pb-3 ">
                <div class="preloaderBg" id="preloader" onload="preloader()">
                    <div class="preloadercar"></div>
                    <div class="preloader2"></div>
                </div>
                <h6 className='fw-bold'>Please Wait ...</h6>
                <h6 className='fw-bold'>We are searching the best Cars for you</h6>
            </Card>}

        </>
    );

};
export default CarBookingList;




