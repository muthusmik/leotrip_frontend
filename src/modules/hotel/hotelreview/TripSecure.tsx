
import { useState } from 'react';
import protect from '../../../assets/images/protect.png';
import restaurants from '../../../assets/images/restaurant.png';
import { Link } from 'react-router-dom';
import { AuthLogin } from 'components/Auth/AuthLogin';



const insuranceData = [
    {
        "coverage": "24*7 emergency medical assistance",
        "amount": "Upto ₹ 10K"
    },
    {
        "coverage": "Hotel booking cancellation charges if cancelled due to illness",
        "amount": "Upto ₹ 10K"
    },
    {
        "coverage": "Bounced booking",
        "amount": "Upto ₹ 20K"
    },
    {
        "coverage": "Loss of tablets and laptops",
        "amount": "Upto ₹ 20K"
    },
    {
        "coverage": "Loss of baggage",
        "amount": "Upto ₹ 20K"
    },
    {
        "coverage": "Cost of return travel in case of trip interruption",
        "amount": "Upto ₹ 10K"
    },
    {
        "coverage": "Hotel extension in case of hospitalization",
        "amount": "Upto ₹ 10K"
    },
    {
        "coverage": "Cost of return travel in case of trip interruption",
        "amount": "Upto ₹ 10K"
    },
    {
        "coverage": "Hotel extension in case of hospitalization",
        "amount": "Upto ₹ 10K"
    }
];

const TripSecure = () => {
    // benefits
    const [showMoreBenefits, setShowMoreBenefits] = useState(false);
    const [numToShow, setNumToShow] = useState(7);

    const toggleShowMoreBenefits = () => {
        setNumToShow(numToShow + 7);
        setShowMoreBenefits(!showMoreBenefits);
    };

    const handleShowLess = () => {
        setNumToShow(7);
        setShowMoreBenefits(!showMoreBenefits);
    };

    // button
    const [showRemoveButton, setShowRemoveButton] = useState(false);

    const handleAddButton = () => {
        setShowRemoveButton(true);
    };

    const handleRemoveButton = () => {
        setShowRemoveButton(false);
    };

    return (
        <>
            <div className='bg-white mt-5 pb-4'>
                <div className="flex m-5 pt-3">
                    <img src={protect} alt="er" />
                    <div className='px-2'>
                        <h1 className='font-bold'>Trip Secure</h1>
                        <small className='font-bold text-gray-400'>Trip Secure document will be sent to the registered Email ID within 48 hours of booking.</small>
                    </div>
                </div>

                <div className="border-gray-400 border-4 m-5 p-5">
                    <h1 className='font-bold'>Worry-free hotel stay!</h1>
                    <ul className='text-sm text-gray-400 pt-2 list-disc mx-10 font-bold'>
                        {insuranceData.slice(0, numToShow).map((coverage, index) => (
                            <li key={index} className='pt-3'>
                                {coverage.amount} {coverage.coverage}
                            </li>
                        ))}
                    </ul>
                    <div className='ml-10 mt-3'>
                        {!showMoreBenefits && (
                            <button onClick={toggleShowMoreBenefits} className="text-blue-500 mt-3">
                                View Benefits
                            </button>
                        )}
                        {showMoreBenefits && (
                            <button onClick={handleShowLess} className="text-blue-500 mt-3">
                                Show less
                            </button>
                        )}
                    </div>
                    {/* add insurance */}
                    <div className=''>
                        <div className='flex text-end justify-end items-center'>
                            <div className='me-2'>
                                <h1 className='text-sm'><span className='font-bold text-lg'>&#x20B9;29</span> per person</h1>
                                <p className='text-sm'><span className='text-[#ca2626]'>Non Refundable </span>| Includes GST</p>
                            </div>
                            <div>
                                {!showRemoveButton ? (
                                    <div>
                                        <button onClick={handleAddButton} className='border border-1 border-[#EC8E03] text-[#EC8E03] rounded-lg px-3 py-1 '>+Add</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button onClick={handleRemoveButton} className='border border-1 border-[#EC8E03] text-[#EC8E03] rounded-lg px-3 py-1 '>Remove</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* login */}
            <div className='border bg-white mt-5'>
                <div className='flex items-center'>
                    <img src={restaurants} alt="" className='w-[50px] h-[50px]' />
                    <h1 className='ml-2  text-sm'>You have to login to use your <b>wallet amount</b></h1>
                    <div className="ml-auto">
                        <Link to=''>
                            <button className='border border-1 bg-[#2B93D4] text-white rounded-lg px-3 py-1 me-5'>LOGIN</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-end m-5'>
                    <button className='border border-1 bg-[#ec8e03] text-white rounded-lg px-10 py-2'>Make Payment</button>
            </div>
        </>
    );
};

export default TripSecure;
