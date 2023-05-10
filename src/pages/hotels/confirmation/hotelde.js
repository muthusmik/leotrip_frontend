import React from 'react';
import hotel from "../../../asset/images/hotel/hotel1.jpg";
import location from "../../../asset/images/hotel/location.png";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { useSelector, useStore } from "react-redux";
import Parser from 'html-react-parser';
import moment from "moment";
import { useLocation } from 'react-router-dom';
const Hoteldetails = () => {
    const location = useLocation();
    const roomData = location.state.state;
     /* # STORE */
     const hotelBlockRoom = useSelector(state => state.BlockRoom);
     const hotelSearchData = useSelector(state => state.HotelSearch);
     const store = useStore()
      console.log(roomData , "hotelBlockRoom...hello.")
    //   console.log(hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails,"hello Hotel")
    return (
        <Card>
            <div class="cardetails">
                <Card.Body>
                {(roomData)?(
                    <div className="container">
                        <div className='row'>
                            <div className='col-5 '>
                                <img src={hotel} height="160px" width="300" alt="hotel"/>
                            </div>
                            <div className='col-6'>
                                <h4>{roomData.RoomTypeName}</h4>
                                {/* <p className="hoteladdress text-muted mb-0"><img src={location} alt="location" width="20" />{hotelBlockRoom.data[1].BlockRoomResult.AddressLine1}</p> */}
                                {/* <p className="hoteladdress text-muted mt-0 mb-0">{hotelBlockRoom.data[1].BlockRoomResult.AddressLine2}</p> */}
                                <p className="hoteladdress text-muted mt-0"> 
                                {/* {[...Array(hotel.StarRating)].map((star) => {
                                        return (
                                            <span className="fs-5 text-warning">&#9733;</span>
                                        );
                                    })}  */}
                                    </p>
                            </div>
                        </div>
                        <div className='container rounded my-3 row GuestCount py-3'>
                            <div className='col-3'>
                                <h6 className="hoteladdress text-muted">Check In</h6>
                                {/* <h5 className='hoteladdress fs-5'>{hotelSearchData.data[0].CheckInDate}</h5> */}
                            </div>
                            <div className='col-3'>
                                <h6 className="hoteladdress text-muted">Check Out</h6>
                                {/* <h5 className='hoteladdress fs-5'>{moment(hotelSearchData.data[0].CheckInDate, "DD/MM/YYYY").add(hotelSearchData.data[0].NoOfNights, 'days').format('DD/MM/YYYY')}</h5> */}
                            </div>
                            <div className='col-3'>
                                <h6 className="hoteladdress text-muted mb-0">Guests</h6>
                                {/* <h5 className='mt-0 ms-2  mb-0'>{hotelSearchData.data[0].NoOfRooms}&nbsp;Room</h5> */}
                                {(hotelSearchData.data[0].RoomGuests).map((data) => (
                                    <>
                                        {/* <h5 className='mt-0 ms-2'>{data.NoOfAdults}&nbsp;Adults&nbsp;{data.NoOfChild}&nbsp;Child</h5> */}
                                    </>
                                ))}
                            </div>
                            <div className='col'>
                                <h6 className='roomtype text-muted'>RoomType</h6>
                                {/* {(hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails)&&(hotelBlockRoom.data[1].BlockRoomResult.HotelRoomsDetails).map((data) => ( */}
                                     
                                     <>
                                       <h5>{roomData.RoomTypeName}</h5>
                                      </>
                                      
                                {/* ))} */}
                            </div>
                        </div>
                        <div className='hotelpolicy'>
                            <h6>Hotel Policy</h6>
                            {/* {Parser(
                            hotelBlockRoom.data[1].BlockRoomResult.HotelPolicyDetail
                            )} */}
                        </div>
                    </div>
                        ): <div className="w-100  rounded-3" style={{ backgroundColor: "#dfede3", paddingTop: "80px", paddingLeft: "400px", fontSize: "20px", color: "darkblue", height: "100px" }}>
                        <span className="spinner-border spinner-border-sm"></span>
                        &nbsp;Loading....
                    </div>}
                </Card.Body>
            </div>
        </Card>
    )
}

export default Hoteldetails