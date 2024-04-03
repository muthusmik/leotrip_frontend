
import location from '../../../assets/icons/locationSymbol.svg';
import adult from '../../../assets/icons/adultchild.webp';
import restaurants from '../../../assets/images/restaurant.png';

import { useState } from 'react';

const BookingInfo = () => {




    //Coupon

    //json data
    const hotelData = [
        {
            image: require('../../../assets/images/room3.jpg'),
            name: "Standard Twin Room",
            reviewStars: 5,
            rating: "200 Ratings",
            location: "49, Raja Muthiah Rd, Tharamani, Periyamedu Park Town, Chennai, Tamil Nadu",

        },
    ]
    return (
        <div className='bg-white pb-5'>
            {/* BookingInfo */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2">
                <h1 className="font-bold">Booking Info</h1>
            </div>
            <div className="bg-[#fddfb3] p-2 flex justify-between">
                <h1 className="font-bold text-sm"> Last Minute Deal (Ends in 13h : 11m : 35s)</h1>
                <p className="font-bold text-sm">&#x20B9;(500 Discount included)</p>
            </div>
            <div className="border m-4">
                {hotelData.map((hotel, index) => (
                    <div className="flex" key={index}>
                        <div className="flex h-[200px]">
                            <img src={hotel.image} alt='error' className="rounded-md" />
                        </div>
                        <div className="px-10 text-justify">
                            <h5 className="font-bold py-3">{hotel.name}</h5>
                            <div className=" flex my-3">
                                <img src={location} alt="er" />
                                <small className="text-sm text-gray-400 pl-2">{hotel.location}</small>
                            </div>
                            <div className="flex">
                                {Array.from({ length: hotel.reviewStars }, (_, index) => (
                                    <svg
                                        key={index}
                                        className="w-5 h-5 text-yellow-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l2.535 7.776H21l-6.568 4.776L17.189 22 12 17.823 6.811 22l1.756-5.448L3 9.776h5.465z" />
                                    </svg>
                                ))}
                                <p className='pl-2'>{hotel.rating}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className='mx-10 border rounded-md'>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2">
                    <h1 className="font-bold">1 Room for 1 Adults 1 Child</h1>
                    <p className='text-white text-sm'>Great Choice! You are saving &#x20B9;(1242 With you booking)</p>
                </div>
                <div className='border border-b-2 px-5 py-5'>
                    <p>1 x Standard Twin Ac Room</p>
                    <div className='my-6'>
                        <div className='flex'>
                            <img src={adult} alt="" className='w-[40px] h-[40px]' />
                            <div className='mx-2'>
                                <p className='font-bold'>1 Adults 1 Children (5yrs)</p>
                                <p>Rooms only | <button className='text-blue-400'>Free Cancellation</button></p>
                            </div>
                        </div>
                    </div>
                    <button className='text-blue-400'>View Booking & Cancellation Policy</button>
                </div>
                <div className='px-5 py-5'>
                    <div className='flex items-center'>
                        <img src={restaurants} alt="" className='w-[50px] h-[50px]' />
                        <h1 className='ml-2 font-bold text-lg'>Add Meal</h1>
                    </div>
                    <div className="flex items-center bg-[#fddfb3] rounded-lg p-3 mx-10">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-[#3182ce] rounded" />
                        <p className="ml-2 text-lg">Add Breakfast at just ₹158 (inclusive of taxes and fees)</p>
                    </div>
                </div>
            </div>

            <div className='bg-[#bee4fc] p-2 rounded-md mx-10 my-5'>
                <div className='flex flex-col sm:flex-row justify-around'>
                    <div className=''>
                        <p>check In</p>
                        <h1 className='font-bold pt-3'>Fri, 28 Jul 2023</h1>
                        <p>12 : 00 PM</p>
                    </div>
                    <div className=''>
                        <p>Check Out</p>
                        <h1 className='font-bold pt-3'>Fri, 28 Jul 2023</h1>
                        <p>11 : 00 PM</p>
                    </div>
                    <div className=''>
                        <p>Guest</p>
                        <h1 className='font-bold pt-3'>2 Guest | 1 Room</h1>
                        <p>1 Night</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default BookingInfo;