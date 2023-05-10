import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import LocalSearch from "../../../component/autocomplete/localsearch";
import HotelFilterdata from '../../../json/Hotels/hotelfilter_amu.json';
import HotelFilterpro from '../../../json/Hotels/hotelfilter_property.json';
// import { useEffect } from 'react';




const HotelFilter = ({onhandle,handlePrice}) => {


   /*  # filter arrow icon function */

    const [show, setShow] = useState(true);
    const [view, setView] = useState(true);
    const [hide, setHide] = useState(true);
    const [onshow, setOnshow] = useState(true);
    const [onview, setOnview] = useState(true);
    const [onhide, setOnhide] = useState(true);
 

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
                if (hide === false) {
                    setHide(true);
                } else {
                    setHide(false);
                }
                break;
            case 4:
                if (onshow === false) {
                    setOnshow(true);
                } else {
                    setOnshow(false);
                }
                break;
            case 5:
                if (onview === false) {
                    setOnview(true);
                } else {
                    setOnview(false);
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

    // console.log("iam babu")

    return (
        <>
            <div className='hotelfilter'>
            <form>
                <div className='filtersearch d-flex py-2  border-bottom border-1'>
                    <div className='ms-3 '>
                        <div><strong>Filters</strong></div>
                    </div>
                    <span><button className='btn btn-sm me-3' type='reset' onClick={() => onhandle(6)}>Reset All</button></span>
                </div>

                <div className='pricerange py-2  border-bottom border-1'>
                    <div className='ms-3 mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(3)} className={(hide === true) ? ("arrowicon") : ("searchhotels")} /><strong className='ms-2'>Price Range</strong></div>
                    {hide && (
                        <div className='price-checkbox ms-4 mt-1'>
                            <div>
                                <input type="radio" name="pricebox" onClick={() =>handlePrice(2)}></input>
                                <label htmlFor='priceboxone'>Upto &ensp; ₹2000</label>
                            </div>
                            <div>
                                <input type="radio" name="pricebox" onClick={() =>handlePrice(4)}></input>
                                <label htmlFor='priceboxtwo'>₹2001 - ₹4000</label>
                            </div>
                            <div>
                                <input type="radio" name="pricebox" onClick={() =>handlePrice(6)}></input>
                                <label htmlFor='priceboxthree'>₹4001 - ₹6000</label>
                            </div>
                            <div>
                                <input type="radio" name="pricebox" onClick={() =>handlePrice(8)}></input>
                                <label htmlFor='priceboxfour'>₹6001 - ₹8000</label>
                            </div>
                            <div>
                                <input type="radio" name="pricebox" onClick={() =>handlePrice(9)}></input>
                                <label htmlFor='priceboxfive'>₹8000 +</label>
                            </div>
                            <div >
                            <input type="radio"  name="pricebox" defaultChecked onClick={() => onhandle(6)}/>&nbsp;
                            <label htmlFor='priceboxfive'>All</label>
                        </div> 
                        </div>
                    )}
                </div>
                <div className='hotelstarfilter py-2  border-bottom border-1'>
                    <div className='ms-3 mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(2)} className={(view === true) ? ("arrowicon") : ("searchhotels")} /><strong className='ms-2'>Star Rating</strong></div>
                    {view && (<div className='ms-4 mt-1'>
                        <div className='checkbox'>
                            <input type="radio"  name="star" value="5" onClick={() => onhandle(5)}/>
                            <span className="hint-star star">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='checkbox'>
                            <input type="radio"   name="star" value="4" onClick={() => onhandle(4)} />
                            <span className="hint-star star">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='checkbox'>
                            <input type="radio"   name="star"  value="3" onClick={() => onhandle(3)}/>
                            <span className="hint-star star">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='checkbox'>
                            <input type="radio"   name="star" value="2" onClick={() => onhandle(2)} />
                            <span className="hint-star star">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='checkbox'>
                            <input type="radio"    name="star" value="1" onClick={() => onhandle(1)}/>
                            <span className="hint-star star">
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='checkbox d-flex'>
                            <input type="radio"  name="star" value="0" defaultChecked onClick={() => onhandle(6)}/>&nbsp;
                            <span>All</span>
                        </div> 
                    </div>
                    )}
                </div>
                {/* <div className='deal py-2  border-bottom border-1' >
                    <div className='ms-3 mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(4)} className={(onshow === true) ? ("arrowicon") : ("searchhotels")} /><strong className='ms-2'>Deals</strong></div>
                    {onshow && (<div className='ms-4 mt-1'>
                        <input type="checkbox" name="deals"></input>
                        <label htmlFor='deals'> Exclusive deals Only</label>
                    </div>
                    )}
                </div>
                <div className='propertytype  py-2  border-bottom border-1'>
                    <div className='ms-3 mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(5)} className={(onview === true) ? ("arrowicon") : ("searchhotels")} /><strong className='ms-2'>Property Type</strong></div>
                    {onview && (<div className='ms-4 mt-1'>
                        {HotelFilterpro.map((hotel, index) => (
                            <div key={index}>
                                <input type="checkbox" name="property"></input>
                                <label htmlFor='property'>{hotel.property_type}</label>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
                <div className='amenities py-2  border-bottom border-1 pb-3'>
                    <div className='ms-3 mt-1'><FontAwesomeIcon icon={faAngleRight} onClick={() => handleClick(6)} className={(onhide === true) ? ("arrowicon") : ("searchhotels")} /><strong className='ms-2'>Amenities</strong></div>
                    {onhide && (
                        <div className='amenities-checkbox ms-4 mt-1'>
                            {HotelFilterdata.map((hotel, index) => (
                                <div key={index}>
                                    <input type="checkbox" name="amenit"></input>
                                    <label htmlFor='amenit'>{hotel.Amenit_field}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div> */}
                </form>
            </div>
        </>


    );
};
export default HotelFilter;