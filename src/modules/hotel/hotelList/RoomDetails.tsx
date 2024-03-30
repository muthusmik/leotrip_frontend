
import React from 'react';
import room1 from '../../../assets/images/room1.jpg';
import window from '../../../assets/icons/window.png';
import bed from '../../../assets/icons/bed.png';
import tick from '../../../assets/icons/tick.png';
import close from '../../../assets/icons/close.png';

interface Room {
  price: string;
  offerprice: string;
  taxesAndFees: string;
}

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const rooms: Room[] = [
  {
    price: "4,199",
    offerprice: "3,779",
    taxesAndFees: "453",
  },
  {
    price: "4,199",
    offerprice: "3,779",
    taxesAndFees: "453",
  },
  {
    price: "4,199",
    offerprice: "3,779",
    taxesAndFees: "453",
  }
];

const RoomDetails: React.FC<Props> = ({ showModal, closeModal }) => {
    const modalDisplay = showModal ? '' : 'hidden';
    return (
        <div className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${modalDisplay}`}>
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-10"></div>
            <div className="modal-container bg-white w-[70%]  h-full mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6 ">
                    <div className="flex justify-between items-center pb-3">

                        <button onClick={closeModal} className="modal-close cursor-pointer z-50">
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path
                                    d="M6.571 6l5.364 5.364a.75.75 0 101.06-1.06L7.632 5l5.364-5.364A.75.75 0 1012.295.272L7.931 5.636 2.568.272A.75.75 0 101.508 1.332L6.87 6 .272 12.568a.75.75 0 101.06 1.06L7.93 7.06l5.364 5.364a.75.75 0 101.06-1.06L9.062 6.002 14.425.638a.75.75 0 101.06 1.06z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="modal-body p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12" style={{ height: '100vh', overflowY: 'auto' }}>
                        <div className="">
                            <img src={room1} alt='room' className='w-full h-96' />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-[15%] my-10'>
                            <p className='flex w-22 h-8 '><img className='me-1' src={window} alt='win' />289 sq.ft</p>
                            <p className='flex w-22 h-8'><img className='me-1' src={window} alt='win' />City View</p>
                            <p className='flex w-22 h-8'><img className='me-1' src={bed} alt='win' />Twin Bed</p>
                        </div>
                        <div className='my-10'>
                            <hr className='border-2 w-[80%] mx-32' />
                        </div>

                        <h1 className='hover:font-bold '>Room Amenities</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>work Desk</p>
                            </div>
                        </div>

                        <h1 className='hover:font-bold my-5'>Popular with Guests</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Interconnected Room</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Air Conditioning</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Wi-Fi</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Iron/Ironing Board</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Room Service</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>+5 More</p>
                            </div>
                        </div>


                        <h1 className='hover:font-bold my-5'>Room Features</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'> Charging Points</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Reading Lamp</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Telephone</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Closet</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Mini Fridge</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>+5 More</p>
                            </div>
                        </div>

                        <h1 className='hover:font-bold  my-2'>Childcare</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Cribs</p>
                            </div>
                        </div>
                        <h1 className='hover:font-bold  my-2'>Beds and Blanket</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Cushions</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Blanket</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Pillows</p>
                            </div>
                        </div>


                        <h1 className='hover:font-bold '>Safety and Security</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Safe</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Cupbords with Locks</p>
                            </div>
                        </div>

                        <h1 className='hover:font-bold my-2'>Media and Entertainment</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>TV</p>
                            </div>
                        </div>

                        <h1 className='hover:font-bold  my-5'>Bathroom</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Shaving Mirror</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Hairdryer</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Dental Kit</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Towels</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Shower</p>
                            </div>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>+5 More</p>
                            </div>
                        </div>

                        <h1 className='hover:font-bold my-5'>Other Facilities</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 w-full'>
                            <div className='flex item-center my-2'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>Kettle</p>
                            </div>
                        </div>

                        <div className='my-10'>
                            <hr className='border-2 w-[80%] mx-32' />
                        </div>
                        <div className=''>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <div className='border-b-4 border-r-4 h-56'>
                                        <h1 className='text-lg'>Room With Free Cancellation</h1>
                                        <div className='ml-10 text-md'>
                                            <div className='flex item-center my-2'>
                                                <img src={tick} alt='tick' className='w-6 h-6' />
                                                <p className='ml-2'>Free Cancellation till 3 hrs before check in <a>KNOW MORE</a></p>
                                            </div>
                                            <div className='flex item-center my-2'>
                                                <img src={close} alt='close' className='w-6 h-6' />
                                                <p className='ml-2'>No meals included</p>
                                            </div>
                                            <div className='flex item-center my-2 mb-6'>
                                                <img src={tick} alt='tick' className='w-6 h-6' />
                                                <p className='ml-2'>Flexible contract - RA1 DSB2B</p>
                                            </div>
                                        </div>
                                        <button className='font-bold text-[#485BFF] pl-16 pb-2'>MORE DETAILS</button>
                                    </div>


                                    <div className='border-b-4 border-r-4 h-56'>
                                        <h1 className='text-lg'>Room With Free Cancellation | Breakfast only</h1>
                                        <div className='ml-10 text-md'>
                                            <div className='flex item-center my-2'>
                                                <img src={tick} alt='tick' className='w-6 h-6' />
                                                <p className='ml-2'>Free Cancellation till 3 hrs before check in <a>KNOW MORE</a></p>
                                            </div>
                                            <div className='flex item-center my-2 mb-6 pt-2'>
                                                <img src={tick} alt='close' className='w-6 h-6' />
                                                <p className='ml-2'>Free Breakfast</p>
                                            </div>

                                        </div>
                                        <button className='font-bold text-[#485BFF] pl-16 pb-2'>MORE DETAILS</button>
                                    </div>


                                    <div className='border-b-4 border-r-4 h-56'>
                                        <h1 className='text-lg'>Room With Free Cancellation | Breakfast only</h1>
                                        <div className='ml-10 text-md'>
                                            <div className='flex item-center my-2'>
                                                <img src={tick} alt='tick' className='w-6 h-6' />
                                                <p className='ml-2'>Free Cancellation till 3 hrs before check in <a>KNOW MORE</a></p>
                                            </div>
                                            <div className='flex item-center my-2'>
                                                <img src={tick} alt='close' className='w-6 h-6' />
                                                <p className='ml-2'>Free Breakfast</p>
                                            </div>
                                            <div className='flex item-center my-2 mb-6'>
                                                <img src={tick} alt='tick' className='w-6 h-6' />
                                                <p className='ml-2'>Buffet Breakfast Free WIFI Shuttle drop to US Conculate Free Cancellation</p>
                                            </div>
                                        </div>
                                        <button className='font-bold  text-[#485BFF] pl-16 pb-2'>MORE DETAILS</button>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className=''>
                                        {rooms.map((room, index) => (
                                            <div key={index} className=' h-56 pl-10 pt-5 border-b-4'>
                                                <div className='relative'>
                                                    <div>
                                                        <small>per night</small>
                                                        <p><small className='line-through'>&#x20B9;{room.price}</small></p>
                                                        <p className='font-bold'>&#x20B9;{room.offerprice}</p>
                                                        <p>+ {room.taxesAndFees} taxes & fees</p>
                                                        <p className='font-bold'>To Get Offer to <span className='text-[#485BFF]'>LOGIN NOW</span></p>
                                                    </div>
                                                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-1 absolute buttom-0 right-0 mt-2 mr-2'>SELECT ROOM</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* room */}

                </div>
            </div>
        </div>


    )
}
export default RoomDetails;
