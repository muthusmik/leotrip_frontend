import React, { useState } from "react";
import '../../index.css';
import hotel from '../../assets/images/room2.jpg';
import car from '../../assets/images/carbg.avif';
import flight from '../../assets/images/flight_2.jpg';
import bus from '../../assets/images/pixmo.jpg';
import copy from '../../assets/images/copy.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function Offer() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Handler function to update selected category
    const handleCategoryChange = (category: any) => {
        setSelectedCategory(category);
    };


    const copyCouponCode = (couponCode: any) => {
        navigator.clipboard.writeText(couponCode)
            .then(() => {
                toast.success('Coupon code copied to clipboard!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeButton: false
                });
            })
            .catch(err => {
                console.error('Failed to copy coupon code: ', err);
            });
    };

    const offers = [
        {
            title: "Domestic car",
            description: "Car Fares Starting @ Rs. 1,468",
            validBank: 'Valid Only on Citi Credit and Debit cards.flights, stays, buses & outstation ...',
            couponCode: 'BUSCASHBACK',
            image: car
        },
        {
            title: "Domestic bus",
            description: "Bus Fares Starting @ Rs. 1,468",
            validBank: 'wiith up to 15% Instant discount on flights, stays, buses & outstation ...',
            couponCode: 'BUSCASHBACK',
            image: bus
        },
        {
            title: "Domestic hotel",
            description: "Hotel Fares Starting @ Rs. 1,468",
            validBank: 'Grab now and #SaveBIG on your next stay.',
            couponCode: 'BUSCASHBACK',
            image: hotel
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestics",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic car",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: car
        },
        {
            title: "Domestic bus",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid Only on Citi Credit and Debit cards.',
            couponCode: 'BUSCASHBACK',
            image: bus
        },
        {
            title: "Domestic hotel",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'wiith up to 15% Instant discount on flights, stays, buses & outstation ...',
            couponCode: 'BUSCASHBACK',
            image: hotel
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Grab now and #SaveBIG on your next stay.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestics",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic car",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: car
        },
        {
            title: "Domestic bus",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: bus
        },
        {
            title: "Domestic hotel",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: hotel
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestic Flight",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },
        {
            title: "Domestics",
            description: "Flights Fares Starting @ Rs. 1,468",
            validBank: 'Valid on first-time bookings.',
            couponCode: 'BUSCASHBACK',
            image: flight
        },

        // Add more offers here
    ];


    return (
        <div className="flex my-10 mx-10">
            <div className="w-[20%] me-5">
                <div className="p-5 shadow-lg rounded-md">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-lg">FILTERS</h2>
                        <button onClick={() => setSelectedCategory(null)} className="text-blue-400 text-sm font-bold">CLEAR ALL</button>
                    </div>
                    <p className="text-[#4b4a4a] font-semibold">Categories:</p>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="trending"
                                checked={selectedCategory === "trending"}
                                onChange={() => handleCategoryChange("trending")}
                                className="w-4 h-4 me-2 my-2"
                            />
                            Trending (68)
                        </label>
                        {/* Dropdown for Trending options */}
                        {selectedCategory === "trending" && (
                            <div className="ml-4">
                                <input type="checkbox" className="me-2 h-4 w-4 my-3" />
                                <label>
                                    Checkbox 1
                                </label><br/>
                                <input type="checkbox" className="me-2 h-4 w-4" />
                                <label>
                                    Checkbox 1
                                </label><br/>
                                <input type="checkbox" className="me-2 h-4 w-4 my-3" />
                                <label>
                                    Checkbox 1
                                </label>
                            </div>
                        )}
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="flights"
                                checked={selectedCategory === "flights"}
                                onChange={() => handleCategoryChange("flights")}
                                className="w-4 h-4 me-2 my-2"
                            />
                            Flights (42)
                        </label>
                        {/* Dropdown for Flights options */}
                        {selectedCategory === "flights" && (
                            <div className="ml-4">
                            <input type="checkbox" className="me-2 h-4 w-4 my-3" />
                            <label>
                                Checkbox 1
                            </label><br/>
                            <input type="checkbox" className="me-2 h-4 w-4" />
                            <label>
                                Checkbox 1
                            </label><br/>
                            <input type="checkbox" className="me-2 h-4 w-4 my-3" />
                            <label>
                                Checkbox 1
                            </label>
                        </div>
                        )}
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="hotels"
                                checked={selectedCategory === "hotels"}
                                onChange={() => handleCategoryChange("hotels")}
                                className="w-4 h-4 me-2 my-2"
                            />
                            Hotels (31)
                        </label>
                        {/* Dropdown for Hotels options */}
                        {selectedCategory === "hotels" && (
                            <div className="ml-4">
                            <input type="checkbox" className="me-2 h-4 w-4 my-3" />
                            <label>
                                Checkbox 1
                            </label><br/>
                            <input type="checkbox" className="me-2 h-4 w-4" />
                            <label>
                                Checkbox 1
                            </label><br/>
                            <input type="checkbox" className="me-2 h-4 w-4 my-3" />
                            <label>
                                Checkbox 1
                            </label>
                        </div>
                        )}
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="cabs"
                                checked={selectedCategory === "cabs"}
                                onChange={() => handleCategoryChange("cabs")}
                                className="w-4 h-4 me-2 my-2"
                            />
                            Cabs (11)
                        </label>
                        {/* No dropdown for Cabs */}
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="bus"
                                checked={selectedCategory === "bus"}
                                onChange={() => handleCategoryChange("bus")}
                                className="w-4 h-4 me-2 my-2"
                            />
                            Bus (12)
                        </label>
                        {/* No dropdown for Bus */}
                    </div>
                </div>
            </div>
            <div className="w-[80%]">
                <div className="">
                    <div className="grid grid-cols-3 gap-2">
                        {offers.map((offer, index) => (
                            <div className="" key={index}>
                                <div className="card p-5  mx-2 my-2 shadow-lg rounded-lg">
                                    <img className="card-img-top rounded-lg" src={offer.image} alt="Discount Offer Image" />
                                    <div className="card-body">
                                        <div className="flex justify-between py-3">
                                            <h5 className="card-title font-bold w-[60%]">{offer.description}</h5>
                                            <p className="card-text text-blue-400 text-xs">T&C's Apply</p>
                                        </div>
                                        <p className="card-text text-sm text-light-black">{offer.validBank}</p>
                                        <div className="flex justify-between border border-[#88C2F8] border-dashed rounded-lg bg-[#eaf5ff] coupon-code p-2 my-4">
                                            <p className="font-bold">{offer.couponCode}</p>
                                            <button className="flex items-center btn btn-primary text-sm font-bold text-blue-400 pe-2" onClick={() => copyCouponCode(offer.couponCode)}>
                                                Copy Code<img src={copy} alt="copy" className="w-5 h-5" />

                                            </button>
                                        </div>
                                        <button className="btn btn-success rounded-lg py-2 px-3 text-white font-bold bg-gradient-to-r from-blue-300 to-blue-800" onClick={() => alert('Redirect to booking page')}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}