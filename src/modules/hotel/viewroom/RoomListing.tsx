import React from 'react';
import room1 from '../../../assets/images/room1.jpg';
import window from '../../../assets/icons/window.png';
import bed from '../../../assets/icons/bed.png';
import tick from '../../../assets/icons/tick.png';
import close from '../../../assets/icons/close.png';
const roomss = [
    {

        taxesAndFees: "254",
        prices: "4,199",
        offerprice: "3,779",
    },
    {

        taxesAndFees: "254",
        prices: "4,199",
        offerprice: "3,779",
        icon: room1,
    },
]
const image = [
    {
        icon: room1,
        cont:" Room Only Free WIFI Shuttle drop to US Conculate"
    },
    {
        cont:"Flexible contract - RA1 DSB2B"
    }
]
function RoomListing() {
    return (
        
        <tr className=''>
            <td className='w-[30%] border border-1 border-black '>
                <div className="mx-5">
                    <img src={room1} alt='room' className='w-full h-60' />
                </div>
                <div className='px-5'>
                    <h1 className='font-bold text-md pt-5'>Standard Twin Room</h1>
                    <p className='flex w-22 h-8 mt-5'><img className='me-2' src={window} alt='win' />289 sq.ft</p>
                    <p className='flex w-22 h-8 mt-5'><img className='me-2' src={window} alt='win' />City View</p>
                    <p className='flex w-22 h-8 mt-5'><img className='me-2' src={bed} alt='win' />Twin Bed</p>
                </div>
                <li className='pt-5 px-4'>Work Desk</li>
                <button className='text-[#485bff] pt-5 px-5 font-bold'>MORE DETAILS</button>
            </td>

            <td className='w-[35%] border border-1 border-black'>
                {image.map((images, index) => (
                    <div key={index}  style={{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${images.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='bg-gradient-to-t px-5'>
                        <h1 className='text-lg'>Room With Free Cancellation</h1>
                        <div className=' mt-8 text-sm'>
                            <div className='flex item-center my-3'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-3'>Free Cancellation till 3 hrs before check in <a>KNOW MORE</a></p>
                            </div>
                            <div className='flex item-center my-3'>
                                <img src={close} alt='close' className='w-6 h-6' />
                                <p className='ml-3'>No meals included</p>
                            </div>
                            <div className='flex item-center my-3'>
                                <img src={tick} alt='close' className='w-6 h-6' />
                                <p className='ml-3'>book with 0 payment</p>
                            </div>
                            <div className='flex item-center my-2 mb-6'>
                                <img src={tick} alt='tick' className='w-6 h-6' />
                                <p className='ml-2'>{images.cont}</p>
                            </div>
                        </div>
                        <button className='font-bold text-[#485BFF] pl-10 pb-2'>MORE DETAILS</button>
                    </div>
                ))}
            </td>

            <td className='w-[35%] border border-1 border-black'>
                {roomss.map((room, index) => (
                    <div key={index}  style={{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${room.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='bg-gradient-to-t h-60'>
                        <div className=' h-56 pl-10 mt-6'>
                                <div className='relative'>
                                    <div>
                                        <small>per night</small>
                                        <p><small className='line-through'>&#x20B9;{room.prices}</small></p>
                                        <p className='font-bold'>&#x20B9;{room.offerprice}</p>
                                        <p>+ {room.taxesAndFees} taxes & fees</p>
                                        <p className='font-bold'>To Get Offer to <span className='text-[#485BFF]'>LOGIN NOW</span></p>
                                    </div>
                                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-1 absolute buttom-0 right-0 mt-5 mr-2 mb-5'>SELECT ROOM</button>
                                </div>
                            </div>
                    </div>
                ))}
            </td>
        </tr>
    );
}

export default RoomListing;
