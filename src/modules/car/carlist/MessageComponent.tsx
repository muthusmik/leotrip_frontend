import React, { useState } from 'react';
import car from '../../../assets/icons/car-bgless.svg';

const MessageComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className='w-[70%] mx-5 font-poppinsRegular'>
                <div className="border-4 hover:border-blue-200 bg-blue-100 w-full px-5 py-7 rounded-lg mb-4">
                    <div className='flex items-center'>
                        <img src={car} alt="car" className='w-14 h-14 rounded-full bg-blue-200' />
                        <div className='ms-4'>
                            <h1 className='font-semibold'>Congratulations!</h1>
                            <p>
                                You are about to grab the best price on your cab, with the Best Price Guaranteed else you get 5X the difference.
                                <button className="text-blue-500" onClick={openModal}>Know More</button>
                            </p>
                            {showModal && (
                                <div className="modal">
                                    <div className="modal-content bg-black text-white w-[30%] absolute p-5">
                                        <span className="close" onClick={closeModal}>&times;</span>
                                        <p>This is where you can provide additional information about the Best Price Guarantee.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[70%] mx-5 font-poppinsRegular'>
                    <div className="border-4 hover:border-blue-200 bg-white w-full  px-5 py-7 rounded-lg mb-4">                       
                            <div className='ms-4'>
                                <h1 className='font-semibold'>Driver & Cab details</h1>
                                <p> Cab operator will be assigned on booking completion. Cab and driver details will be shared up to 30 mins prior to departure.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageComponent;
