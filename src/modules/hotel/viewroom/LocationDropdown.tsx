
import React, { useState } from 'react';
import map from '../../../assets/images/map.png';
import checkin from '../../../assets/icons/checkIn.svg';
import checkout from '../../../assets/icons/checkOut.svg';
import ellipsis from '../../../assets/icons/Ellipse.png';
import childrenbeds from '../../../assets/icons/familytwomen.png';
import beds from '../../../assets/icons/beds.png';
import adult from '../../../assets/icons/adult.png';
import pets from '../../../assets/icons/pets.png';
import portablecard from '../../../assets/images/portablecard.png';
import mastercard from '../../../assets/images/mastercard.png';
import rupay from '../../../assets/images/RuPay.png';
import visa from '../../../assets/images/visacard.png';
import paypal from '../../../assets/images/paypal.png';

const LocationDropdown = () => {
    const [isOpen, setIsOpen] = useState(Array(5).fill(false));
    const toggleDropdown = (index: any) => {
        const updatedIsOpen = isOpen.map((value, i) => i === index ? !value : false);
        setIsOpen(updatedIsOpen);
    };

    // Placeholder for dynamic button names
    const dropdownButtonNames = ["Key Landmarks", "Airport", "Tourist Attractions", "Other Landmark"];

    // Placeholder for items arrays
    const items = [
        [
            { "name": "Chennai Airport", "distance_km": "16.1 km" },
            { "name": "Chennai Lighthouse", "distance_km": "4.4 Km" },
            { "name": "Marina Beach", "distance_km": "3.4 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" }
        ],
        [
            { "name": "Chennai Airport", "distance_km": "16.1 km" },
            { "name": "Chennai Lighthouse", "distance_km": "4.4 Km" },
            { "name": "Marina Beach", "distance_km": "3.4 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" }
        ],
        [
            { "name": "Chennai Airport", "distance_km": "16.1 km" },
            { "name": "Chennai Lighthouse", "distance_km": "4.4 Km" },
            { "name": "Marina Beach", "distance_km": "3.4 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" }
        ],
        [
            { "name": "Chennai Airport", "distance_km": "16.1 km" },
            { "name": "Chennai Lighthouse", "distance_km": "4.4 Km" },
            { "name": "Marina Beach", "distance_km": "3.4 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" },
            { "name": "Kandhakottam Temple", "distance_km": "10.5 km" }
        ],

    ];

    return (
        <>
            <div className='bg-white p-3  mx-5'>
                <h1 className='font-bold text-md pt-5 pb-5'>Location</h1>
                <p>The Location of Ibis Chennai City Centre - An Accor Brand has been rated 4.4 by 2173 guests</p>
                <div className='flex flex-col lg:flex-row  border-2 border-[#e0e4e7]'>
                    <div className='lg:w-[30%] bg-[#eaf7fc]'>
                        <div className='bg-[#eaf7fc] mx-1 border-4 border-[#eaf7fc] rounded-lg w-[full] md:w-[50%] lg:w-full  mx-auto'>
                            <h1 className='p-3 font-bold'>Around this property:</h1>
                            <div>
                                {dropdownButtonNames.map((buttonName, index) => (
                                    <div className="relative" key={index}>
                                        <button
                                            id={`dropdownDefaultButton${index}`}
                                            onClick={() => toggleDropdown(index)}
                                            className="bg-white w-full text-blue-700 font-bold rounded-lg text-md px-5 py-2.5 text-left inline-flex items-center justify-between border-[#eaf7fc] border-4 my-1 shadow-md"
                                            type="button"
                                        >
                                            {buttonName}
                                            <svg
                                                className={`w-2.5 h-2.5 transform transition-transform ${isOpen[index] ? 'rotate-180' : ''}`}
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>

                                        {isOpen[index] && (
                                            <div className="w-full absolute z-10 bg-[#eaf7fc] divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 max-h-48 overflow-y-auto">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    {items[index].map((item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            <label className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer border border-white">
                                                                <div className='flex'>
                                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                                                    <div>
                                                                        <p className='font-bold pl-2'>{item.name}</p>
                                                                        <small className='pl-2'>{item.distance_km}</small>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[70%] '>
                        <img src={map} alt='map' className='w-full lg:h-auto h-56' />
                    </div>
                </div>

                <h1 className='font-bold text-md pt-5 pb-5'>House Rules</h1>
                <p>The Fortune Inn takes special requests - add in the next step!</p>
                <div className='bg-white p-3 border-2 border-[#e0e4e7]'>
                    {/* checkIn */}
                    <div className='mx-3 lg:mx-10 border-b-2 flex flex-col md:flex-row p-4'>
                        <div className='w-full lg:w-1/3 flex items-center mb-4 lg:mb-0'>
                            <img src={checkin} alt='checkin' className='w-10 h-10' />
                            <h1 className='m-2 font-bold'>Check-in</h1>
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <p className='p-2 text-sm'>From 12:00</p>
                        </div>
                    </div>
                    {/* checkout */}
                    <div className='mx-3 lg:mx-10 border-b-2 flex flex-col md:flex-row p-4'>
                        <div className='w-full lg:w-1/3 flex items-center mb-4 lg:mb-0'>
                            <img src={checkout} alt='checkout' className='w-10 h-10' />
                            <h1 className='m-2 font-bold'>Check-out</h1>
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <p className='p-2 text-sm'>Until 11:00</p>
                        </div>
                    </div>
                    {/* Cancellation */}
                    <div className='mx-3 lg:mx-10 border-b-2 flex flex-col md:flex-row p-4'>
                        <div className='w-full lg:w-1/3 flex items-center mb-4 lg:mb-0'>
                            <img src={ellipsis} alt='ellipsis' className='w-10 h-10' />
                            <h1 className='p-2 font-bold text-justify'>Cancellation/prepayment</h1>
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <p className='p-2 text-sm'>Cancellation and prepayment policies vary according to accommodation type. Please check what <a className='text-blue-400'>conditions</a> may apply to each option when making your selection.</p>
                        </div>
                    </div>
                    {/* Children and beds */}
                    <div className='mx-3 lg:mx-10 border-b-2 flex flex-col md:flex-row p-4'>
                        <div className='w-full lg:w-1/3 flex items-center mb-4 lg:mb-0'>
                            <img src={childrenbeds} alt='childrenbeds' className='w-10 h-10' />
                            <h1 className='m-2 font-bold'>Children and beds</h1>
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <div>
                                <h1 className='p-2 font-bold'>Child policies</h1>
                                <p className='p-2 text-sm'>Children of any age are welcome.</p>
                                <p className='p-2 text-sm'>Children aged 18 years and above are considered adults at this property.</p>
                                <p className='p-2 text-sm'>To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
                            </div>
                            <div>
                                <h1 className='p-2 font-bold'>Cot and extra bed policies</h1>
                                <div className='border border-black border-b-0 ml-1 p-2'>
                                    <h1 className='p-2 font-bold'>0+ years</h1>
                                </div>
                                <div className='flex border border-black ml-1'>
                                    <div className='w-1/2 flex items-center p-2'>
                                        <img src={beds} alt='beds' className='w-10 h-10' />
                                        <h1 className='m-2'>Extra bed upon request</h1>
                                    </div>
                                    <div className='w-1/2'>
                                        <p className='pt-5 text-sm'>500 per person, per night</p>
                                    </div>
                                </div>
                                <p className='p-2 text-sm'>Prices for extra beds are not included in the total price, and will have to be paid for separately during your stay.</p>
                                <p className='p-2 text-sm'>The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.</p>
                                <p className='p-2 text-sm'>There are no cots available at this property.</p>
                                <p className='p-2 text-sm'>All extra beds are subject to availability.</p>
                            </div>
                        </div>
                    </div>
                    {/* No age restriction */}
                    <div className='mx-3 lg:mx-10 border-b-2 flex flex-col md:flex-row p-4'>
                        <div className='w-full lg:w-1/3 flex items-center mb-4 lg:mb-0'>
                            <img src={adult} alt='adult' className='w-10 h-10' />
                            <h1 className='m-2 font-bold'>No age restriction</h1>
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <p className='p-2 text-sm'>There is no age requirement for check-in</p>
                        </div>
                    </div>
                    {/* Pets */}
                    <div className='mx-3 lg:mx-10 border-b-2 flex flex-col md:flex-row p-4'>
                        <div className='w-full lg:w-1/3 flex items-center mb-4 lg:mb-0'>
                            <img src={pets} alt='pets' className='w-10 h-10' />
                            <h1 className='m-2 font-bold'>Pets</h1>
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <p className='p-2 text-sm'>Pets are not allowed.</p>
                        </div>
                    </div>
                    {/* Accepted payment methods */}
                    <div className='mx-3 lg:mx-10 border-b-2 flex flex-col md:flex-row p-4'>
                        <div className='w-[70%] lg:w-1/3 flex items-center mb-4 lg:mb-0'>
                            <img src={portablecard} alt='portablecard' className='w-10 h-10' />
                            <h1 className='m-2 font-bold'>Accepted payment methods</h1>
                        </div>
                        <div className='flex w-full md:w-2/3'>
                            <img src={mastercard} alt='mastercard' className='w-10 h-6 mt-3 mr-3 lg:mr-10' />
                            <img src={visa} alt='visa' className='w-10 h-6  mt-3 mr-3 lg:mr-10' />
                            <img src={paypal} alt='paypal' className='w-10 h-6  mt-3 mr-3 lg:mr-10' />
                            <img src={rupay} alt='rupay' className='w-10 h-6  mt-3 ' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LocationDropdown;
