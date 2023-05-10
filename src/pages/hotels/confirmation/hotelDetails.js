import React from 'react';
import hotel from "../../../asset/images/hotel/hotel1.jpg";
import locaterImg from "../../../asset/images/hotel/location.png";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import stars from '../../../asset/images/bus/star.png';
import { useSelector, useStore } from "react-redux";
import Parser from 'html-react-parser';
import moment from "moment";
import { useLocation } from 'react-router-dom';
const Hoteldetails = () => {
    const location = useLocation();
    const hotelData = useSelector(state => state.HotelInfo);
    const roomData = location.state.state;
    console.log("hotelData....", hotelData.data[0].HotelDetails)
    /* # STORE */
    const hotelSearchData = useSelector(state => state.HotelSearch);
    console.log(roomData, "hotelBlockRoom...hello.")
    console.log(hotelSearchData, "hello Hotel")
    return (
        <Card>
            <div class="cardetails">
                <Card.Body>
                    {(roomData) ? (
                        <div className="container">
                            <div className='row'>
                                <div className='col-5 '>
                                    <img src={hotelData.data[0].HotelDetails.Images[0]} height="160px" width="300" alt="hotel" onError={event => {
                                        event.target.src = "http://photos.hotelbeds.com/giata/original/36/365958/365958a_hb_r_001.jpg"
                                        event.onerror = null
                                    }}  />
                                    
                                </div>
                                <div className='col-6'>
                                    <h5>{hotelData.data[0].HotelDetails.HotelName}</h5>
                                    
                                    <p className="hoteladdress text-muted mb-0"><img src={locaterImg} alt="location" width="20" /> {hotelData.data[0].HotelDetails.Address}</p>
                                    {/* <p className="hoteladdress text-muted mt-0 mb-0">{hotelBlockRoom.data[1].BlockRoomResult.AddressLine2}</p> */}
                                    <p className="hoteladdress text-muted mt-0">
                                         {[...Array(hotelData.data[0].HotelDetails.StarRating)].map((star) => {
                                                return (
                                                    <span className="fs-5 mb-5 text-warning"><img src={stars} alt="star" width="18px" /></span>
                                                );
                                            })}
                                    </p>
                                </div>
                            </div>
                            <div className='container rounded my-3 row GuestCount py-3'>
                                <div className='col-3'>
                                    <h6 className="hoteladdress text-muted">Check In</h6>
                                    <h6 className='hoteladdress'>{hotelSearchData.data[0].CheckInDate}</h6>
                                </div>
                                <div className='col-3'>
                                    <h6 className="hoteladdress text-muted">Check Out</h6>
                                    <h6 className='hoteladdress'>{moment(hotelSearchData.data[0].CheckInDate, "DD/MM/YYYY").add(hotelSearchData.data[0].NoOfNights, 'days').format('DD/MM/YYYY')}</h6>
                                </div>
                                <div className='col-3'>
                                    <h6 className="hoteladdress text-muted mb-0">Guests</h6>
                                    <h6 className='mt-0 ms-2  mb-0'>{hotelSearchData.data[0].NoOfRooms}&nbsp;Room</h6>
                                    {(hotelSearchData.data[0].RoomGuests).map((data) => (
                                        <>
                                            <h6 className='mt-0 ms-2'>{data.NoOfAdults}&nbsp;Adults&nbsp;{data.NoOfChild}&nbsp;Child</h6>
                                        </>
                                    ))}
                                </div>
                                <div className='col'>
                                    <h6 className='roomtype text-muted'>RoomType</h6>
                                    {/* {(hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails)&&(hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails).map((data) => ( */}

                                    <>
                                        <h6>{roomData.RoomTypeName}</h6>
                                    </>

                                    {/* ))} */}
                                </div>
                            </div>
                            <div className='hotelpolicy'>
                                {/* <h6>Hotel Policy</h6> */}
                                {/* {Parser(
                            hotelBlockRoom.data[1].BlockRoomResult.HotelPolicyDetail
                            )} */}
                            </div>
                        </div>
                    ) : <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "80px", paddingLeft: "400px", fontSize: "20px", color: "darkblue", height: "100px" }}>
                        <span className="spinner-border spinner-border-sm"></span>
                        &nbsp;Loading....
                    </div>}
                </Card.Body>
            </div>
        </Card>
    )
}

export default Hoteldetails