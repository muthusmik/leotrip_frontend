
import location from '../../../assets/icons/locationSymbol.svg';
import adult from '../../../assets/icons/adultchild.webp';
import restaurants from '../../../assets/images/restaurant.png';
import adults from '../../../assets/icons/adult.svg';
import child from '../../../assets/icons/child.png';
import { useState } from 'react';

const BookingInfo = () => {

    // price summary
    const [showCharity, setShowCharity] = useState(true);
    const handleToggleCharity = () => {
        setShowCharity(!showCharity);
    };


    //Coupon
    const [selectedCoupon, setSelectedCoupon] = useState('');
    const [couponCode, setCouponCode] = useState('');
    const [offerMessage, setOfferMessage] = useState('');
    const couponData = [
        {
            code: "SAVE10",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE11",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE12",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE13",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE15",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE14",
            offer: 'Get 10% off on your purchase!',

        },

    ];

    const handleClear = () => {
        setSelectedCoupon('');
        setCouponCode('');
        setOfferMessage('');
    };

    const handleCheckboxChange = (event: any) => {
        const { value } = event.target;
        setCouponCode(value);
        setOfferMessage('');
    };

    const handleApplyCoupon = () => {
        const selectedCoupon = couponData.find(coupon => coupon.code === couponCode);
        console.log("xcfgjkl", selectedCoupon)
        if (selectedCoupon) {
            setOfferMessage(selectedCoupon.offer);
            console.log("x", selectedCoupon.offer)
        } else {
            setOfferMessage('Invalid coupon code.');
        }
    };

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
        <div className='flex'>
            {/* BookingInfo */}
            <div className="w-[70%] m-5 pb-3 bg-white text-sm">
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
                            <div className="flex  h-[200px]">
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
                    <div className='flex '>
                        <div className='ml-5'>
                            <p>check In</p>
                            <h1 className='font-bold pt-3'>Fri, 28 Jul 2023</h1>
                            <p>12 : 00 PM</p>
                        </div>
                        <div className='ml-10'>
                            <p>Check Out</p>
                            <h1 className='font-bold pt-3'>Fri, 28 Jul 2023</h1>
                            <p>11 : 00 PM</p>
                        </div>
                        <div className='ml-10'>
                            <p>Guest</p>
                            <h1 className='font-bold pt-3'>2 Guest | 1 Room</h1>
                            <p>1 Night</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-[30%] m-5">
                {/* price summary */}
                <div className='border text-sm bg-white'>
                    <div className='flex justify-between bg-gradient-to-r from-cyan-400 to-blue-400 p-3'>
                        <p className='text-md'>Price Summary</p>
                        <div className='flex items-center me-5'>
                            <img src={adults} alt="Adults" className='w-8 h-7' /><span className='pl-2'>1</span>
                            <img src={child} alt="Child" className='w-5 h-5 mt-2 ml-3' /><span className='pl-2'>0</span>
                        </div>
                    </div>
                    <div className=' border-b-2 flex justify-between p-3'>
                        <p>1 Rooms x 2 Night(s)</p>
                        <h1 className='font-bold'>&#x20B9;<span className='pl-2'>11,020</span></h1>
                    </div>
                    <div className='border-b-2 flex justify-between p-3'>
                        <p>Discount</p>
                        <h1 className='font-bold'>&#x20B9;<span className='pl-2'>3000</span></h1>
                    </div>
                    <div className='border-b-2 flex justify-between p-3'>
                        <p>Service charges</p>
                        <h1 className='font-bold'>&#x20B9;<span className='pl-2'>300</span></h1>
                    </div>
                    <div>
                        <button className="w-5 h-5 rounded-full border border-black mt-1 ml-3" onClick={handleToggleCharity}>
                            {showCharity ? "-" : "+"}
                        </button>
                        {showCharity && (
                            <div className='border-b-2  pt-2 pl-7 pb-5'>
                                <div className='flex justify-between'>
                                    <p>Other Services</p>
                                    <h1 className='font-bold pe-2'>&#x20B9;<span className='pl-2'>300</span></h1>
                                </div>
                                <div className='flex justify-between pt-2'>
                                    <p>Total Tax</p>
                                    <small className='pe-2'>&#x20B9;<span className='pl-2'>290</span></small>
                                </div>
                                <div className=' flex justify-between'>
                                    <p>Charity <button className="text-blue-500" onClick={handleToggleCharity}>Remove</button></p>
                                    <small className='pe-2'>&#x20B9;<span className='pl-2'>10</span></small>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex justify-between p-3'>
                        <h1 className='text-[#ef9d25] text-lg'>Grand Total</h1>
                        <h1 className='text-[#c61e1e] font-bold text-lg'>&#x20B9;<span className='pl-2'>14020</span></h1>
                    </div>
                </div>
                {/* coupon */}
                <div className='border text-sm bg-white mt-5'>
                    <div className='bg-gradient-to-r from-cyan-400 to-blue-400 p-3 '>
                        <p className='text-md'>Have a coupon code</p>
                    </div>
                    <div className='border-b-2'>
                        <div>
                            <div className='mx-4 my-5 border-b-2'>
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter Coupon Code"
                                    className='border-b-2 border-black text-[#ee9c22] text-center text-lg'
                                />

                                <button onClick={handleClear} className='border px-5 py-1 ml-2 text-md rounded-lg'>Clear</button>
                                {<div className={selectedCoupon ? 'text-green-500' : 'text-red-500'}>{offerMessage}</div>}
                                <button onClick={handleApplyCoupon} className='border px-5 py-1 mx-2 my-2 text-md rounded-lg bg-[#ee9c22]'>Apply</button>
                            </div>
                            <div className='border mx-5 mb-3'>
                                <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                                    {couponData.map(coupon => (
                                        <div key={coupon.code}>
                                            <label>
                                                <div className='flex border-b-2'>
                                                    <input
                                                        type="checkbox"
                                                        value={coupon.code}
                                                        checked={couponCode === coupon.code}
                                                        onChange={handleCheckboxChange}
                                                        className='h-6 w-6 m-3'
                                                    />
                                                    <div className='pt-2'>
                                                        <h1 className='font-bold'>{coupon.code} </h1>
                                                        <small>{coupon.offer}</small>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* button */}
                <div className='flex my-5'>
                    <button className="bg-int-sandal mx-auto w-[200px] font-poppinsRegular text-white py-2 rounded-lg">
                        continue Booking
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BookingInfo;