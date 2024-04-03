
import React from 'react';
import mastercard from '../../../assets/images/mastercard.png';
import rupay from '../../../assets/images/RuPay.png';
import visa from '../../../assets/images/visacard.png';
import paypal from '../../../assets/images/paypal.png';


const HotelComponent = () => {
    const hotelData = [
        {
            image: require('../../../assets/images/room3.jpg'),
            name: "The Pride Hotel Chennai",
            reviewStars: 4,
            price: "3,299",
            buttonText: "VIEW DETAILS",
            rating: "4.1",
            feedback: "Very Good",
            distance: "2.6 Km from Lbis Chennai city Centre- An Accor Brand",
            cancellation: "Free Cancellation",
            breakfast: "Free Breakfast Available at Higher Price."
        },
        {
            image: require('../../../assets/images/room3.jpg'),
            name: "The Pride Hotel Chennai",
            reviewStars: 4,
            price: "3,299",
            buttonText: "VIEW DETAILS",
            rating: "4.1",
            feedback: "Very Good",
            distance: "2.6 Km from Lbis Chennai city Centre- An Accor Brand",
            cancellation: "Free Cancellation",
            breakfast: "Free Breakfast Available at Higher Price."
        },
        {
            image: require('../../../assets/images/room3.jpg'),
            name: "The Pride Hotel Chennai",
            reviewStars: 4,
            price: "3,299",
            buttonText: "VIEW DETAILS",
            rating: "4.1",
            feedback: "Very Good",
            distance: "2.6 Km from Lbis Chennai city Centre- An Accor Brand",
            cancellation: "Free Cancellation",
            breakfast: "Free Breakfast Available at Higher Price."
        },
        {
            image: require('../../../assets/images/room3.jpg'),
            name: "The Pride Hotel Chennai",
            reviewStars: 4,
            price: "3,299",
            buttonText: "VIEW DETAILS",
            rating: "4.1",
            feedback: "Very Good",
            distance: "2.6 Km from Lbis Chennai city Centre- An Accor Brand",
            cancellation: "Free Cancellation",
            breakfast: "Free Breakfast Available at Higher Price."
        },
        // Add more hotel data objects as needed
    ];

    return (
        <>
            <div className='bg-white mx-5 border border-2 border-[#e5e5e5] font-poppinsRegular'>
                <div className="flex flex-wrap justify-center">
                    {hotelData.map((hotel, index) => (
                        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 mb-5 my-2 px-3" key={index}>
                            <div className="card border border-[#e5e5e5] border-2">
                                <div className="card-body text-center">
                                    <img src={hotel.image} alt='error' className="mx-auto" />
                                    <h5 className="font-bold pt-3">{hotel.name}</h5>
                                    <div className="flex justify-center my-2">
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
                                    </div>
                                    <p className="text-[#059f05] font-bold">&#x20B9;{hotel.price}</p>
                                    <button className="btn border border-2 border-gray-400 rounded-full px-10 text-blue-400 text-sm mt-2">view details</button>
                                    <div className='my-5'>
                                        <p className="border divide-y divide-slate-200 text-[#3649f4] py-2 text-sm"><span className='bg-[#3649f4] rounded-sm p-1 text-white'>{hotel.rating}</span> ({hotel.feedback})</p>
                                    </div>
                                    <small className="text-sm">{hotel.distance}</small>
                                    <p className="bg-[#fddfb3] font-bold text-sm my-2">{hotel.cancellation}</p>
                                    <p className="font-bold text-sm pb-5">{hotel.breakfast}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex my-5'>
                <button className="bg-int-sandal mx-auto w-[200px] font-poppinsRegular text-white py-2 rounded-lg">
                    continue Booking
                </button>
            </div>

            <div className='flex w-ful bg-gray-100 pb-2'>
                            <img src={mastercard} alt='card' className='w-10 h-6 mt-3' />
                            <img src={visa} alt='card' className='w-20 h-6 pl-10 mt-3' />
                            <img src={paypal} alt='card' className='w-18 h-6 pl-10 mt-3' />
                            <img src={rupay} alt='card' className='w-18 h-6 pl-10 mt-3' />
                        </div>
        </>
    );
};
export default HotelComponent;
