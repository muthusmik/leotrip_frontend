import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faGasPump, faCircleCheck, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import Seater from '../../../../asset/images/car/seat.png';
import { Card, Row, Col } from 'react-bootstrap';
import CustomButton from "../../../../component/button";
import { useHistory } from "react-router-dom";
import { set } from "date-fns";
import warning from "../../../../asset/images/warning.png"
import '../carLoader.scss'
const CarBookingList = () => {


    let history = useHistory();
    const handleClick = (data) => {
        // console.log(data,"selected value")
        history.push('/car/carconfirmation', { state: { data: data } })
    };
    const carlistdata = useSelector(state => state.Car);

    const [carlist, setCarlist] = useState(carlistdata)
    const [loader, setLoader] = useState(true);
    //const [error,setError] = useState("");
    const [error, seterror] = useState()




    const store = useStore()
    //if(carlist.data?.length > 0)
    console.log("carlistss...............>", carlist);

    useEffect(() => {
        console.log("inside the effect", carlistdata)
        if (carlistdata.data.code) {
            // seterror(carlist.data?.error_params[0].Error.Status === 'Fail' ? true : false)
            setLoader(false);
            setCarlist([])
            console.log(carlist.data?.error_params?.[0]?.Error.Status, "400 Error response")
        }
        else if (carlistdata.data && carlistdata.data.length > 0) {
            setCarlist(carlistdata)
        }

    }, [carlistdata])

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);

    //console.log("carlistss...............>", carlist.data[0].TaxiData[0]);

    return (
        <>

            {(carlist.data && carlist.data.length > 0) ?

                (!carlistdata.data.code && carlist.data[0].TaxiData) ?
                    (
                        <>
                            <h6>showing <span className="fw-bold">{carlist.data[0]?.TaxiData.length} Car variation for One Way</span></h6>
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
                                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>{data.Fare.TotalKmCharged} kms included. After that {numberFormat(data.Fare.OutStationExtraKmRate)}/km</p></li>
                                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>Free cancellation until 1 hour before pickup</p></li>
                                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>Reserve this cab at {numberFormat(data.Fare.AdvanceAmount)} only</p></li>
                                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>Outstation driver allowance at {numberFormat(data.Fare.OutStationDriverAllowance)} only</p></li>
                                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary" /><p>waiting charges at {numberFormat(data.Fare.LocalExtraHrRate)}/Hrs</p></li>
                                                        {/* <li><FontAwesomeIcon icon={faGasPump} className="text-danger" /><p>Diesel Car</p></li> */}
                                                    </ul>
                                                </Col>
                                                <Col className="text-end">
                                                    <h5>{numberFormat(data.Fare.BaseFare)}</h5>
                                                    <CustomButton customstyle="btn btn-primary fw-bold w-50 " onClick={() => handleClick(data)} value='Select'></CustomButton>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>

                                </div>
                            ))}
                        </>
                        //     ) : (carlist.data.error_params) ? <span > {carlist?.data?.error_params?.[0]?.Error.ErrorMessage}</span> :
                        // <span >No Results Found</span>
                    ) :
                    (carlist.data.error_params) ? (<div className='ms-4 text-center mt-4'>
                        <h3 className='fw-bold'>Something went wrong</h3>
                        <p><img src={warning} alt={warning} width="30%" height="30%" /></p>
                        <h5 className='fw-bold'>{carlist?.data?.error_params?.[0]?.Error.ErrorMessage}</h5>
                    </div>
                    ) :
                        (<Card className="hotelLoader  text-center pb-3 ">
                            <div class="preloaderBg" id="preloader" onload="preloader()">
                                <div class="preloadercar"></div>
                                <div class="preloader2"></div>
                            </div>
                            <h6 className='fw-bold'>Please Wait ...</h6>
                            <h6 className='fw-bold'>We are searching the best Cars for you</h6>
                        </Card>)
                : (
                    <Card className="hotelLoader  text-center pb-3 ">
                        <div class="preloaderBg" id="preloader" onload="preloader()">
                            <div class="preloadercar"></div>
                            <div class="preloader2"></div>
                        </div>
                        <h6 className='fw-bold'>Please Wait ...</h6>
                        <h6 className='fw-bold'>We are searching the best Cars for you</h6>
                    </Card>
                )
            }
        </>
    );

};
export default CarBookingList;



