import React, { useState } from 'react';
import '../../flightlist/flightlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Sun from '../../../../asset/images/flight/sun.png';
import Moon from '../../../../asset/images/flight/moon.png';
import SunRise from '../../../../asset/images/flight/sunrise.png';
import SunSet from '../../../../asset/images/flight/sunset.png';


const FlightFilter = ({ onhandle, handlePrice, handleClear, handlerefund, handlestop, handleRetTime, handleDepTime }) => {


    const [show, setShow] = useState(true)
    const [view, setView] = useState(true)
    const [onshow, setOnshow] = useState(true)
    const [onview, setOnview] = useState(true)
    const [hide, setHide] = useState(true)
    const [onhide, setOnhide] = useState(true)

    const handleClick = (val) => {

        switch (val) {
            case 1:
                if (show === false) {
                    setShow(true);
                } else {
                    setShow(false);
                }
                break;
            case 2:
                if (view === false) {
                    setView(true);
                } else {
                    setView(false);
                }
                break;
            case 3:
                if (onshow === false) {
                    setOnshow(true);
                } else {
                    setOnshow(false);
                }
                break;
            case 4:
                if (onview === false) {
                    setOnview(true);
                } else {
                    setOnview(false);
                }
                break;
            case 5:
                if (hide === false) {
                    setHide(true);
                } else {
                    setHide(false);
                }
                break;
            case 6:
                if (onhide === false) {
                    setOnhide(true);
                } else {
                    setOnhide(false);
                }
                break;
            default:
                return null;
        }
    }


    const FlightList = useSelector(state => state.FlightSearch);
    const [val, setVal] = useState({ min: 0, max: 10000000 });
    const [showon, setShowon] = useState(false)
    const [price, setPrice] = useState({ min: 0, max: 10000000 });

    const [myArray, setMyArray] = useState([]);
    const length = FlightList.data?.flightDetails?.length;
    const [pricevalues, setpricevalues] = useState([])



    /* #   name and pricevalue */
    useEffect(() => {
        const showArry = async () => {
            let finalvalue = [];
            let finalpricevalue = [];
            for (let i = 0; i < length; i++) {

                finalpricevalue = [...finalpricevalue, FlightList.data?.flightDetails[i].FareDataMultiple[0].Fare.PublishedFare]
                const flightlen = FlightList.data?.flightDetails[i]?.Segments[0]?.length;

                for (let j = 0; j < flightlen; j++) {
                    finalvalue = [...finalvalue, FlightList.data?.flightDetails[i].Segments[0][j]?.Airline?.AirlineName]
                }
            }
            setMyArray(finalvalue)
            setpricevalues(finalpricevalue)
            setVal({ min: Math.floor(Math.min(...finalpricevalue)), max: Math.floor(Math.max(...finalpricevalue)) })
            setPrice({ min: Math.floor(Math.min(...finalpricevalue)), max: Math.floor(Math.max(...finalpricevalue)) })

        }
        showArry()
    }, [FlightList])

    const withoutDuplicates = [...new Set(myArray)];


    // < RESET BUTTON >
    const handleResetAll = () => {
        setVal({ min: Math.floor(Math.min(...pricevalues)), max: Math.floor(Math.max(...pricevalues)) })
        handlePrice({ min: Math.floor(Math.min(...pricevalues)), max: Math.floor(Math.max(...pricevalues)) })
        handleClear()
    }

    const handleReset = () => {
        setVal({ min: Math.floor(Math.min(...pricevalues)), max: Math.floor(Math.max(...pricevalues)) })
        handlePrice({ min: Math.floor(Math.min(...pricevalues)), max: Math.floor(Math.max(...pricevalues)) })
    }




    /*  # color active state using jquery*/

    var Deplinks = document.querySelectorAll('.flight_on_departure ul li ');

    const [dvalue, setDvalue] = useState(1);


    const handleDepval = (e) => {
        setDvalue(e)
    }

    if ((FlightList.data?.flightDetails) && (dvalue !== 0)) {
        Deplinks.forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.preventDefault();
                Deplinks.forEach(function (element) {
                    element.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }
    else {
        Deplinks.forEach(function (element) {
            element.classList.remove('active');
        });
    }

    const [avalue, setAvalue] = useState(1);

    const handleArrval = (e) => {
        setAvalue(e)
    }

    var Arrivallinks = document.querySelectorAll('.flight_on_arrival ul li');
    if ((FlightList.data?.flightDetails) && (avalue !== 0)) {
        Arrivallinks.forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.preventDefault();
                Arrivallinks.forEach(function (element) {
                    element.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }
    else {
        Arrivallinks.forEach(function (element) {
            element.classList.remove('active');
        });
    }



    const [stopvalue, setStopvalue] = useState(1);

    const handleStopval = (e) => {
        setStopvalue(e)
    }

    var Stopslinks = document.querySelectorAll('.flight_on_stop ul li');
    if ((FlightList.data?.flightDetails) && (stopvalue !== 0)) {
        Stopslinks.forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.preventDefault();
                Stopslinks.forEach(function (element) {
                    element.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }
    else {
        Stopslinks.forEach(function (element) {
            element.classList.remove('active');
        });
    }




    return (
        <>
            <div className='flightfilter'>
                <form>
                    <div className='filtersearch d-flex py-2  border-bottom border-1'>

                        <div className='ms-3'>
                            <div><strong>Filters</strong></div>
                        </div>
                        <span><button className='btn btn-sm me-3' type='reset'
                            onClick={() => {
                                handleResetAll();
                                handleDepval(0);
                                handleArrval(0);
                                handleStopval(0);
                            }}>Reset All</button></span>
                    </div>
                    <div className=' border-bottom border-2'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='d-flex'>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(1)} className={(show === true) ? ("flight-arrowicon") : ("flight-operator")} />
                                </div>
                                <strong className='ms-2'>Fare Type</strong>
                            </div>
                            {show && (
                                <div
                                    onChange={(e) => {
                                        handlerefund(e.target.value)
                                        handleDepval(0);
                                        handleArrval(0);
                                        handleStopval(0);
                                        handleReset();
                                    }}>
                                    <input type="radio" id="all" name="refundable" value="0" className=' faretype ms-2 mt-2' defaultChecked />
                                    <label htmlFor="airlines" className='ms-1'>All</label>&nbsp;<br />

                                    <input type="radio" id="refundable" name="refundable" value="1" className=' faretype ms-2 mt-2' />
                                    <label htmlFor="refundable" className='ms-1'> Refundable</label><br />

                                    <input type="radio" id="non-refundable" name="refundable" value="2" className=' faretype ms-2 mt-2' />

                                    <label htmlFor="refundable" className='ms-1'> Non Refundable</label><br />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className=' border-bottom border-2 departure'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='row mb-3'>
                                <div className='col-1'>
                                    <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(2)} className={(view === true) ? ("flight-arrowicon") : ("flight-operator")} />
                                </div>
                                <strong className='col-8'>Departure</strong>
                                <a className='col-2 text-primary small'
                                    onClick={() => {
                                        handleDepTime([]);
                                        handleDepval(0);
                                    }}>Clear</a>
                            </div>
                            {view && (
                                <div className='flight_on_departure'>
                                    <ul className='ps-0 mt-2'
                                        onClick={() => {
                                            // setDvalue(1);
                                            handleArrval(0);
                                            handleStopval(0); 
                                            handleReset();
                                        }}>
                                        <li onClick={() => handleDepTime([5, 12])}>
                                            <img src={SunRise} alt="sunrise" />
                                            <span>05-12</span>
                                        </li>
                                        <li onClick={() => handleDepTime([12, 18])}>
                                            <img src={Sun} alt="sunrise" />
                                            <span>12-18</span>
                                        </li>
                                        <li onClick={() => handleDepTime([18, 23])}>
                                            <img src={SunSet} alt="sunrise" />
                                            <span>18-23</span>
                                        </li>
                                        <li onClick={() => handleDepTime([23, 5])}>
                                            <img src={Moon} alt="sunrise" />
                                            <span>23-05</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className=' border-bottom border-2 departure'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='row mb-3'>
                                <div className='col-1'>
                                    <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(3)} className={(onshow === true) ? ("flight-arrowicon") : ("flight-operator")} />
                                </div>
                                <strong className='col-8'>Arrival</strong>
                                <a className='col-2 text-primary small'
                                    onClick={() => {
                                        handleRetTime([]);
                                        handleArrval(0);
                                        handleStopval(0);
                                    }}>Clear</a>
                            </div>
                            {onshow && (
                                <div className='flight_on_arrival'>
                                    <ul className='ps-0 mt-2'
                                        onClick={() => {
                                            // setAvalue(1);
                                            handleDepval(0);
                                            handleStopval(0);
                                            handleReset();
                                        }}>
                                        <li onClick={() => handleRetTime([5, 12])}>
                                            <img src={SunRise} alt="sunrise" />
                                            <span>05-12</span>
                                        </li>
                                        <li onClick={() => handleRetTime([12, 18])}>
                                            <img src={Sun} alt="sunrise" />
                                            <span>12-18</span>
                                        </li>
                                        <li onClick={() => handleRetTime([18, 23])}>
                                            <img src={SunSet} alt="sunrise" />
                                            <span>18-23</span>
                                        </li>
                                        <li onClick={() => handleRetTime([23, 5])}>
                                            <img src={Moon} alt="sunrise" />
                                            <span>23-05</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='stop border-bottom border-2'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='row'>
                                <div className='col-1'>
                                    <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(4)} className={(onview === true) ? ("flight-arrowicon") : ("flight-operator")} />
                                </div>
                                <strong className='col-8'>Stops</strong>
                                <a className='col-2 text-primary small'
                                    onClick={(e) => {
                                        handlestop(0);
                                        handleStopval(0);
                                    }}>Clear</a>
                            </div>
                            {onview && (
                                <div className='flight_on_stop'>
                                    <ul className='ps-0 mt-2 ms-3'
                                        onClick={() => {
                                            setStopvalue(1);
                                            handleDepval(0);
                                            handleArrval(0);
                                            handleReset();
                                        }}>
                                        <li onClick={(e) => handlestop(1)}>
                                            <div className='stopdiv'>
                                                Direct
                                            </div>
                                        </li>
                                        <li onClick={(e) => handlestop(2)}>
                                            <div className='stopdiv'>
                                                <b>1</b> Stop
                                            </div>
                                        </li>
                                        <li onClick={(e) => handlestop(3)}>
                                            <div className='stopdiv'>
                                                <b>1+</b> Stop
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='price border-bottom border-2'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='row mb-3'>
                                <span className='col-1'>
                                    <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(5)} className={(hide === true) ? ("flight-arrowicon") : ("flight-operator")} />
                                </span>
                                <strong className='col-8 ms-0'>Price</strong>
                                <a className='col-2 text-primary small' onClick={handleReset}>Clear</a>
                            </div>
                            {(hide && FlightList.data.flightDetails?.length > 0) ? (
                                <div className="slider ms-3">
                                    <InputRange
                                        step={5}
                                        formatLabel={(value) => null}
                                        draggableTrack={true}
                                        allowSameValues={false}
                                        maxValue={price.max}
                                        minValue={price.min}
                                        value={val}
                                        onChange={setVal}
                                        onChangeComplete={(args) => {
                                            handlePrice(args);
                                            handleDepval(0);
                                            handleArrval(0);
                                            handleStopval(0);
                                        }}
                                    />
                                    <div className='rangevalue'>

                                        <div><FontAwesomeIcon icon={faIndianRupeeSign} />{(val?.min > 0) ? val.min : 0}</div>
                                        <div><FontAwesomeIcon icon={faIndianRupeeSign} /> {(val?.max > 0) ? val.max : 1000000}</div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='d-flex'>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(6)} className={(onhide === true) ? ("flight-arrowicon") : ("flight-operator")} />
                                </div>
                                <strong className='ms-2'>Preferred Airlines</strong>
                            </div>
                            {(onhide && FlightList.data.flightDetails?.length > 0 && myArray.length > 0) ? (
                                <Card className="flightfiltername">
                                    <div className='pre-airlines' onChange={(e) => onhandle("all")}>
                                        <input type="radio" id="airlines" name="airlines" className='ms-2 mt-2' value="all" defaultChecked />
                                        <label htmlFor="airlines" className='ms-1'>All</label>&nbsp;
                                    </div>
                                    {withoutDuplicates.map((flight, index) => (
                                        <>
                                            <div key={index} className='pre-airlines'
                                                onChange={(e) => {
                                                    onhandle(e.target.value);
                                                    handleDepval(0);
                                                    handleArrval(0);
                                                    handleStopval(0);
                                                }}>
                                                <input type="radio" id="airlines" name="airlines" className='ms-2 mt-2' value={flight} />
                                                <label htmlFor="airlines" className='ms-1'>{flight}</label>&nbsp;
                                            </div>
                                        </>
                                    ))}
                                </Card>
                            ) : null}
                            {/* <div>
                                <div class="snippet" data-title="dot-falling">
                                    <div class="stage text-success fw-bold">
                                        Loading <div class="dot-falling"></div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FlightFilter;
