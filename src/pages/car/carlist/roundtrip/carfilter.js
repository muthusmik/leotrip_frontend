import React, { useState } from "react";
import '../../carlist/carlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign,faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Seater from '../../../../asset/images/bus/seat.png';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import CarFilterData from '../../../../json/Car/carfilter.json'

const CarFilter = () => {

    const [show, setShow] = useState(true)
    const [view, setView] = useState(true)
    const [onshow, setOnshow] = useState(true)

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
            default:
                return null;
        }
    }

    const [val, setVal] = React.useState({ min: 500, max: 15000 });
    return (
        <>

            <div className="message-box mb-3 py-3">
                <h6 className="ms-3">Make your trip with us</h6>
                <ul type="none">
                    <li ><FontAwesomeIcon icon={faCircleCheck} className="text-primary me-3" />No hidden charges - Pay nothing extra than what’s mentioned</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="text-primary me-3" />Experienced & polite drivers with clean & comfortable cabs</li>
                </ul>
            </div>
            <div className='carfilter'>
                <div className='filtersearch d-flex mt-2 border-bottom border-1'>
                    <div className='ms-3 mt-1 mb-2'>
                        <div><strong>Filters</strong></div>
                    </div>
                    <span><button className='btn btn-sm me-3'>Reset All</button></span>
                </div>
                <div className=' border-bottom border-1'>
                    <div className='ms-3 mt-2 mb-2'>
                        <div className='mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(1)} className={(show === true) ? ("arrowicon") : ("car-model")} /><strong className='ms-2'>Passenger capacity</strong></div>
                        {show && (<div className='passenger-capacity'>
                            <input type="checkbox" id="four_seater" name="four_seater" className='  ms-2 mt-2' />
                            <label htmlFor="four_seater" className='ms-1'><img src={Seater} alt='img' style={{ width: "20px", height: "20px" }} />&nbsp;4 passenger seats</label><br />
                            <input type="checkbox" id="six_seater" name="six_seater" className='  ms-2 mt-2' />
                            <label htmlFor="six_seater" className='ms-1'><img src={Seater} alt='img' style={{ width: "20px", height: "20px" }} />&nbsp;6 passenger seats</label><br />
                        </div>
                        )}
                    </div>
                </div>
                <div className=' border-bottom border-1'>
                    <div className='ms-3 mt-2 mb-2'>
                        <div className='mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(2)} className={(view === true) ? ("arrowicon") : ("car-model")} /><strong className='ms-2'>Price Filter</strong></div>
                        {view && (
                            <div className="slider ms-3 py-2">
                                <InputRange
                                    step={5}
                                    formatLabel={(value) => null}
                                    draggableTrack={true}
                                    allowSameValues={false}
                                    maxValue={15000}
                                    minValue={500}
                                    value={val}
                                    onChange={setVal}
                                    onChangeComplete={(args) => console.log(args)}
                                />
                                <div className='rangevalue'>
                                    <div><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.min}`}</div>
                                    <div><FontAwesomeIcon icon={faIndianRupeeSign} /> {`${val.max}`}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className=' border-bottom border-1'>
                    <div className='ms-3 mt-2 mb-2'>
                        <div className='mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(3)} className={(onshow === true) ? ("arrowicon") : ("car-model")} /><strong className='ms-2'>Car model</strong></div>
                        {onshow && (
                            <div className="car-model">
                                {CarFilterData.map(model => (
                                    <>
                                        <input type="checkbox" id="car-model" name="car-model" className='ms-2 mt-2' />
                                        <label htmlFor="car-model" className='ms-1'>{model.car_model}</label><br />
                                    </>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarFilter;