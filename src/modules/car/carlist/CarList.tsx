
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CarList() {
    const [sorted, setSorted] = useState('low')
    const carData = [
        {
            from: 'chennai',
            to: 'madurai',
            car_image: require('../../../assets/images/carbg.avif'),
            car_model: "Indica Swift",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "4 Seats"],
            car_type: "Spacious Car",
            pricing: {
                base_price: 4560,
                discounted_price: 2632,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'trichy',
            car_image: require('../../../assets/images/toyotacamry.jpg'),
            car_model: "Innova Crysta",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "4 Seats"],
            car_type: "Compact Car",
            pricing: {
                base_price: 6450,
                discounted_price: 4672,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'salem',
            car_image: require('../../../assets/images/inova.jpg'),
            car_model: "Toyota Innova",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "5 Seats"],
            car_type: "Large Car",
            pricing: {
                base_price: 5450,
                discounted_price: 3632,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'madurai',
            car_image: require('../../../assets/images/carbg.avif'),
            car_model: "Indica Swift",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "4 Seats"],
            car_type: "Spacious Car",
            pricing: {
                base_price: 4560,
                discounted_price: 2632,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'trichy',
            car_image: require('../../../assets/images/toyotacamry.jpg'),
            car_model: "Innova Crysta",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "4 Seats"],
            car_type: "Compact Car",
            pricing: {
                base_price: 6450,
                discounted_price: 4672,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'salem',
            car_image: require('../../../assets/images/inova.jpg'),
            car_model: "Toyota Innova",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "5 Seats"],
            car_type: "Large Car",
            pricing: {
                base_price: 5450,
                discounted_price: 3632,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'madurai',
            car_image: require('../../../assets/images/carbg.avif'),
            car_model: "Indica Swift",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "4 Seats"],
            car_type: "Spacious Car",
            pricing: {
                base_price: 4560,
                discounted_price: 2632,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'trichy',
            car_image: require('../../../assets/images/toyotacamry.jpg'),
            car_model: "Innova Crysta",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "4 Seats"],
            car_type: "Compact Car",
            pricing: {
                base_price: 6450,
                discounted_price: 4672,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        },
        {
            from: 'chennai',
            to: 'salem',
            car_image: require('../../../assets/images/inova.jpg'),
            car_model: "Toyota Innova",
            rating: "4.3/5",
            total_ratings: 953,
            body_type: "Hatchback",
            features: ["AC", "5 Seats"],
            car_type: "Large Car",
            pricing: {
                base_price: 5450,
                discounted_price: 3632,
                taxes_and_charges: 503,
                cancellation_policy: {
                    cancellation_time_limit: "free till 1 hours before departure"
                },
                extra_km_fare: {
                    per_km_charge: 18.5,
                    free_km_limit: 148
                },
                discounts: {
                    MUMBAI_PUNE: 212,
                    percent_off: 20
                }
            },
            additional_info: {
                fuel_type: "Diesel"
            },
        }
    ]

    const sortByDiscountedPrice = (ascending: any, sort: any) => {
        const sortedCars = [...carData].sort((a, b) => {
            return ascending ? a.pricing.discounted_price - b.pricing.discounted_price : b.pricing.discounted_price - a.pricing.discounted_price;
        });
        setSortedCars(sortedCars);
        setSorted(sort);
    };

    const [sortedCars, setSortedCars] = useState(carData); // State to hold sorted cars, initially same as carData




    return (
        <div className='w-full md:w-[70%] me-10 font-poppinsRegular'>
            <div className='flex justify-between mb-4'>
                <button onClick={() => sortByDiscountedPrice(true, 'low')} className={`mr-2 mb-2 px-4 py-2 rounded focus:outline-none ${sorted === 'low' ? 'bg-gradient-to-l from-bg-blue-start to-bg-blue-end text-white' : 'border-b-2 border-blue-400 text-gray-800'}`}>Sort by Lowest Price</button>
                <button onClick={() => sortByDiscountedPrice(false, 'high')} className={`mr-2 mb-2 px-4 py-2 rounded focus:outline-none ${sorted === 'high' ? 'bg-gradient-to-l from-bg-blue-start to-bg-blue-end text-white' : 'border-b-2 border-blue-400 text-gray-800'}`}>Sort by Highest Price</button>
            </div>
            {sortedCars.map((car, index) => (
                <div key={index} className='border-4 hover:border-blue-200 bg-white w-full flex flex-col md:flex-row px-5 py-7 rounded-lg mb-4'>
                    <div className='w-full md:w-[20%] flex justify-center md:justify-start'>
                        <img src={car.car_image} alt={car.car_model} className='rounded-lg' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </div>
                    <div className='w-full md:w-[50%] ps-2 pt-4 md:pt-0 md:pl-4'>
                        {/* <div className='flex flex-col md:flex-row items-center justify-between'> */}
                        <div className='flex items-center mt-3'>
                            <h2 className='font-bold'>{car.car_model}</h2>
                            <p><small className='border bg-gradient-to-l from-bg-blue-start to-bg-blue-end rounded-md p-1 ms-2'>{car.rating}</small> <small className='text-light-black'>({car.total_ratings} ratings)</small></p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className='font-semibold pe-2'>{car.body_type}</p>
                            <p>{car.features.join(', ')}</p>
                        </div>
                        {/* </div> */}
                        <h1 className='font-semibold py-3'>{car.car_type}</h1>
                        <table className='w-full'>
                            <tbody>
                                <tr className='mt-10 font-semibold'>
                                    <td className=''>Extra km Fare:</td>
                                    <td className='ps-10'>₹{car.pricing.extra_km_fare.per_km_charge}/km after {car.pricing.extra_km_fare.free_km_limit} kms</td>
                                </tr>
                                <tr className='font-semibold'>
                                    <td className=''>Fuel Type:</td>
                                    <td className='ps-10'>{car.additional_info.fuel_type}</td>
                                </tr>
                                <tr className='font-semibold'>
                                    <td className=''>Cancellation:</td>
                                    <td className='ps-10'>{car.pricing.cancellation_policy.cancellation_time_limit}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full md:w-[30%] text-center md:text-right pt-4 md:pt-0'>
                        <p style={{ backgroundImage: 'linear-gradient(to right, #4FACFE, #00F2FE)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                            <span className='uppercase'>{car.from}-{car.to}</span> ₹{car.pricing.discounts.MUMBAI_PUNE} off,
                        </p>
                        <p className='text-red-500'>{car.pricing.discounts.percent_off}% off</p>
                        <span className='text-light-black line-through'>₹{car.pricing.base_price}</span>
                        <span className='ps-5 font-bold text-2xl'>₹{car.pricing.discounted_price}</span>
                        <p>+₹{car.pricing.taxes_and_charges}<small className='text-light-black'>(Taxes & Charges)</small></p>
                        <button className='flex uppercase bg-gradient-to-r from-bg-blue-start to-bg-blue-end rounded-md items-center pl-2 text-white pr-5 py-2 font-poppinsRegular w-[60%] text-center justify-center mt-8 mb-3 mx-auto'>
                            <Link to= '/car/carlist/oneway/review'
                                state = { car } // Pass the car data as state
                            >
                                BOOK NOW
                            </Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default CarList;
