import React from 'react';
import '../../flightlist/flightlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Sun from '../../../../asset/images/flight/sun.png';
import Moon from '../../../../asset/images/flight/moon.png';
import SunRise from '../../../../asset/images/flight/sunrise.png';
import SunSet from '../../../../asset/images/flight/sunset.png';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';









const FlightFilter = () => {

    const [val, setVal] = React.useState({ min: 3000, max: 15000 });



    return (
        <>
            <div className='flightfilter'>
                <div className='filtersearch d-flex  border-bottom border-2'>
                    <div className='ms-3 mt-1'>
                        <div><strong>Filters</strong></div>
                        <p className='ms-2'>showing 16 flights</p>
                    </div>
                    <span><button className='btn btn-sm me-3'>Reset All</button></span>
                </div>
                <div className=' border-bottom border-2'>
                    <div className='ms-3 mt-2 mb-2'>
                        <div><strong>Fare Type</strong></div>
                        <input type="checkbox" id="refundable" name="refundable" className=' faretype ms-2 mt-2' />
                        <label htmlFor="refundable" className='ms-1'> Refundable</label><br />
                    </div>
                </div>
                <div className=' border-bottom border-2 departure'>
                    <div className='ms-3 mt-2 mb-2'>
                        <div><strong>Departure</strong></div>
                        <ul className='ps-0 mt-2'>
                            <li>
                                <img src={SunRise} alt="sunrise" />
                                <span>05-12</span>
                            </li>
                            <li>
                                <img src={Sun} alt="sunrise" />
                                <span>12-18</span>
                            </li>
                            <li>
                                <img src={SunSet} alt="sunrise" />
                                <span>18-23</span>
                            </li>
                            <li>
                                <img src={Moon} alt="sunrise" />
                                <span>23-05</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='stop border-bottom border-2'>
                    <div className='ms-3 mt-2 mb-2'>
                        <div><strong>Stops</strong></div>
                        <ul className='ps-0 mt-2 ms-3' >
                            <li>
                                <div className='stopdiv'>
                                    Direct
                                </div>
                            </li>
                            <li>
                                <div className='stopdiv'>
                                    <b>1</b> Stop
                                </div>
                            </li>
                            <li>
                                <div className='stopdiv'>
                                    <b>1+</b> Stop
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='price border-bottom border-2'>
                    <div className='ms-3 mt-2 mb-2'>
                        <div><strong>Price</strong></div>
                        <div className="slider ms-3">
                            <InputRange
                                step={5}
                                formatLabel={(value) => null}
                                draggableTrack={true}
                                allowSameValues={false}
                                maxValue={15000}
                                minValue={3000}
                                value={val}
                                onChange={setVal}
                                onChangeComplete={(args) => console.log(args)}
                            />
                            <div className='rangevalue'>
                                <div><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.min}`}</div>
                                <div><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.max}`}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='ms-3 mt-2 mb-2'>
                       <div><strong>Preferred Airlines</strong></div>
                       <div className='pre-airlines'>
                       <input type="checkbox" id="airlines" name="airlines" className='ms-2 mt-2' />
                        <label htmlFor="airlines" className='ms-1'> IndiGo</label><br />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FlightFilter;