import React, { useState } from 'react';
import '../buslist/buslist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import Seater from '../../../asset/images/bus/seat.png';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import Sun from '../../../asset/images/flight/sun.png';
import Moon from '../../../asset/images/flight/moon.png';
import SunRise from '../../../asset/images/flight/sunrise.png';
import SunSet from '../../../asset/images/flight/sunset.png';
import FilterData from '../../../json/Bus/busfilter.json'
import { useSelector } from "react-redux";








const BusFilter = ({ busoperator, handleDepTime, handleRetTime, handleBusType,handleClear }) => {

    const [show, setShow] = useState(true)
    const [view, setView] = useState(true)
    const [onshow, setOnshow] = useState(true)
    const [onview, setOnview] = useState(true)
    const [hide, setHide] = useState(true)

    
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
            default:
                return null;
        }
    }
    const [showon, setShowon] = useState(false)

    const handleResetAll = () => {
        handleClear()
    }

    const buslist = useSelector(state => state.Bus);

    console.log("rubber.....", buslist)


    return (
        <>
            <div className='busfilter'>
                <form>
                    <div className='filtersearch d-flex mt-2 border-bottom border-1'>
                        <div className='ms-3 mt-1 mb-2'>
                            <div><strong>Filters</strong></div>
                        </div>
                        <span><button className='btn btn-sm me-3' type='reset' onClick={handleResetAll}>Reset All</button></span>
                    </div>
                    <div className=' border-bottom border-1 time-period'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='mt-1'>
                                <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(2)} className={(view === true) ? ("arrowicon") : ("bus-operator")} />
                                <strong className='ms-2'>Departure</strong>
                                <a className='col-2 text-primary small float-end' onClick={() => handleDepTime([])}>Clear</a>
                            </div>
                            {view && (
                                <ul className='ps-0 mt-2'>
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
                            )}
                        </div>
                    </div>
                    <div className=' border-bottom border-1 time-period'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='mt-1'>
                                <FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(3)} className={(onshow === true) ? ("arrowicon") : ("bus-operator")} />
                                <strong className='ms-2'>Arrival</strong>
                                <a className='col-2 text-primary small float-end' onClick={() => handleRetTime([])}>Clear</a>
                            </div>
                            {onshow && (
                                <ul className='ps-0 mt-2'>
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
                            )}
                        </div>
                    </div>
                    <div className='border-bottom border-1 mb-3'>
                        <div className='mx-3 mt-2 mb-2'>
                            <div className='mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(4)} className={(onview === true) ? ("arrowicon") : ("bus-operator")} /><strong className='ms-2'>Bus Operator</strong></div>
                            {(onview && buslist.data?.result?.length > 0) ? (
                                <>
                                    <div className='card bus-operator busflitername p-1 mt-2'>
                                        <div className='filtername py-1' onClick={() => busoperator("all")}>
                                            <label htmlFor="bus-operators" className='ms-1 small'>
                                                <input type="radio" id="bus-operators" name="bus-operators" className='me-2 mt-2' value="all" defaultChecked />
                                                All</label><br />
                                        </div>
                                        {buslist.data.result[1].busdetails.map(data => (
                                            <div className='filtername py-1' onClick={(event) => busoperator(event.target.value)}>
                                                <label htmlFor="bus-operators" className='ms-1 small'>
                                                    <input type="radio" id="bus-operators" name="bus-operators" value={data.TravelName} className='me-2 mt-2' />
                                                    {data.TravelName}</label><br />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : null}

                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className='ms-3 mt-2 mb-2'>
                            <div className='mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(5)} className={(hide === true) ? ("arrowicon") : ("bus-operator")} /><strong className='ms-2'>Bus Types</strong></div>
                            {(hide && buslist.data?.result?.length > 0) ? (
                                <>
                                    <div className='card bus-operator busflitername p-1 mt-2'>
                                        <div className='filtername py-1' onClick={() => handleBusType("all")} >
                                            <label htmlFor="bus-type" className='ms-1 small'>
                                                <input type="radio" id="bus-type" name="bus-type" value="all" defaultChecked className='me-2 mt-2' />
                                                All</label><br />
                                        </div>
                                        {buslist.data.result[1].busdetails.map(data => (
                                            <div className='filtername py-1' onClick={(event) => handleBusType(event.target.value)} >
                                                <label htmlFor="bus-type" className='ms-1 small'>
                                                    <input type="radio" id="bus-type" name="bus-type" value={data.BusType} className='me-2 mt-2' />
                                                    {data.BusType}</label><br />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default BusFilter;