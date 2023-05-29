import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faCircleArrowRight, faGasPump, faCircleCheck, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import Seater from '../../../../asset/images/car/seat.png';
import { Card, Row, Col } from 'react-bootstrap';
import CustomButton from "../../../../component/button";
import { useHistory } from "react-router-dom";
import { set } from "date-fns";

const CarBookingList = () => {


    let history = useHistory();
    const handleClick = (data) => {
        // console.log(data,"selected value")
        history.push('/carconfirmation', { state: { data: data } })
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
            console.log(carlist.data?.error_params?.[0]?.Error.Status,"400 Error response")
        }
        else if (carlistdata.data && carlistdata.data.length > 0) {
            setCarlist(carlistdata)
        }

    }, [carlistdata])


    //console.log("carlistss...............>", carlist.data[0].TaxiData[0]);

    return (
        <>
            <h6>showing <span className="fw-bold">{carlist.data[0]?.TaxiData.length} Cars</span></h6>
            {(carlist.data?.length >0) ? (carlist.data[0].TaxiData).map((data, index) => (

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
                                        <FontAwesomeIcon icon={faSuitcaseRolling} className="text-secondary ms-2"/>
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
                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary"/><p>506 kms included. After that ₹14.5/km</p></li>
                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary"/><p>Free cancellation until 1 hour before pickup</p></li>
                                        <li key={index}><FontAwesomeIcon icon={faCircleCheck} className="text-primary"/><p>Reserve this cab at ₹1777 only</p></li>
                                        <li><FontAwesomeIcon icon={faGasPump} className="text-danger"/><p>Diesel Car</p></li>
                                    </ul>
                                </Col>
                                <Col className="text-end">
                                    {/* <div className="offer-tag mt-2 mb-0">
                                            {data.Fare.TotalAmount}
                                            <div className="circle"></div>
                                        </div> */}
                                    <div className="fare">
                                        {/* <p className="mt-2 fw-bold text-muted">₹ {data.TotalAmount}</p> */}
                                        <b>₹ {data.Fare.TotalAmount}</b>
                                    </div>
                                    <CustomButton customstyle="btn btn-primary fw-bold w-50 "  onClick={() => handleClick(data)} value='Select'></CustomButton>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </div>
            )) : <div className="w-100 h-100 rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "280px", paddingLeft: "400px", fontSize: "20px", color: "darkblue" }}>
            <span className="spinner-border spinner-border-sm"></span>
            &nbsp;Loading....
        </div>}
        </>
    );

};
export default CarBookingList;




