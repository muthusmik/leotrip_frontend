import React, { useEffect } from 'react';
import car from "../../../asset/images/car/car5.png";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import Seater from '../../../asset/images/car/seat.png';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useDispatch, useSelector, useStore } from "react-redux";
import { loadCarList } from '../../../store/actions/car';
import { useLocation } from "react-router-dom";

const Cardetails = () => {
    const waiting = (
        <Popover className='border border-success text-center popover1' >
            <div className='container'>
                <Badge pill bg="light" text="success" className='border border-success '>Free waiting upto 45 minutes</Badge>
                <p>Driver will wait upto 45 minutes after your pickup time. Post that ₹100 per 60 minutes may be applicable</p>
            </div>
        </Popover>
    );
    const cancel = (
        <Popover className='border border-success text-center popover1' >
            <div className='container'>
                <Badge pill bg="light" text="success" className='border border-success '>Free cancellation until 1 hour before pickup</Badge>
                <p>You may also cancel after this time with some cancelation charges.For details, check fare policy for this booking</p>
            </div>
        </Popover>
    );
    const guarenteed = (
        <Popover className='border border-success text-center popover1' >
            <div className='container'>
                <Badge pill bg="light" text="success" className='border border-success '>Conformed Cab Arraival or 2X Refund</Badge>
                <p>Claim 2X of your paid amount(max ₹2000) if cab is not provided due to any rare circunstance</p>
            </div>
        </Popover>
    );
  


    const location = useLocation();

   
    const [cardetail, setCardetail] = React.useState(location.state.state.data)


    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);


    const carlist = useSelector(state => state.Car);
    const store = useStore()
    
    useEffect(() => {
    }, [location])

    return (
        <Card>
            <div class="cardetails">
                <Card.Body>
                    <div className="container">
                        <div className='row'>
                            <div className='col-3 '>
                                <Card>
                                    <img src={cardetail.Image} height="160px" width="190px" />
                                </Card>
                            </div>
                            <div className='col-8'>
                                <div >
                                    <div >
                                        <h5 className='fw-bold'>
                                            {cardetail.Category}
                                        </h5>
                                        {/* <h6 className='text-danger ms-2'>{cardetail.CarNos}</h6> */}
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faSnowflake} className="text-secondary ms-2" />
                                        <span>{(cardetail.AirConditioner) ? <>Ac</> : <>Non Ac</>}</span>
                                        <FontAwesomeIcon icon={faSuitcaseRolling} className="text-secondary ms-2" />
                                        <span>{cardetail.LuggageCapacity}</span>
                                        <img src={Seater} alt='img' className='ms-2' style={{ width: "20px", height: "20px", marginLeft: "5px" }} />&nbsp;
                                        <span>{cardetail.SeatingCapacity} passengers allowed</span>
                                    </div>
                                    <div className='mt-3'>
                                        <ul type="none" className='small'>
                                            <li>
                                                <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />
                                                <span>{cardetail.Fare.TotalKmCharged} kms for {numberFormat(cardetail?.Fare?.BaseFare)}. For extra kilometers {numberFormat(cardetail.Fare.OutStationExtraKmRate, "INR")}/km</span>
                                            </li>
                                            {/* <li>
                                                <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />
                                                <span>Free cancellation until 1 hour before pickup</span>
                                            </li> */}
                                            <li>
                                                <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />
                                                <span>Advance amount for this cab is {numberFormat(cardetail.Fare.AdvanceAmount)} only</span>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />
                                                <span>Outstation driver allowance is {numberFormat(cardetail.Fare.OutStationDriverAllowance)} only</span>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />
                                                <span>waiting charges is {numberFormat(cardetail.Fare.LocalExtraHrRate)}/Hrs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container border pb-1">
                        <p className='text-success'>Reasons you’ve made a good choice</p>
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="bottom"
                            overlay={waiting}
                        >
                            <Badge bg="success" className='mx-1'>Free Waiting upto 45 minutes</Badge>
                        </OverlayTrigger>
                        {/* <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="bottom"
                            overlay={cancel}
                        >
                            <Badge bg="success" className='mx-1'>Free cancellation until 1 hour before pickup</Badge>
                        </OverlayTrigger> */}
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="bottom"
                            overlay={guarenteed}
                        >
                            <Badge bg="success" className='mx-1'>Graranteed Trip(Conformed Cab Arraival or 2X Refund)</Badge>
                        </OverlayTrigger>
                    </div>
                </Card.Body>
            </div>
        </Card>
    )
}

export default Cardetails
