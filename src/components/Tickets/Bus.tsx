import '../../index.css';
import arrow from '../../assets/icons/Arrowtick.svg';
import { PrimaryButton } from 'styles/Button';

export default function Busticket() {
    const data = [<div className='h-3 w-3 bg-gray-300 border border-gray-300 my-3 rounded-full mt-0 ml-[-5px] z-40 absolute'></div>]; // Your list of items to be repeated
    const repeatTimes = 15; // Number of times to repeat the list
    return (
        <>
            <div className='flex h-[350px] w-fit mx-[10%] shadow-lg rounded-[50px] '>
                <div className=" w-[650px] border rounded-l-[50px] bgbus border-r-0">
                    <div className='bg-blue-200/25 h-[22%] w-full rounded-tl-[50px] pl-10 pt-4'>
                        <p className='text-2xl font-poppinsBold'>Sri KRS Travels</p>
                        <p className='font-poppinsRegular'>Non A/C Seat / Sleeper (2+1)</p>
                    </div>
                    <div className='mx-[10%]'>
                        <div className='flex text-3xl font-poppinsBold ml-5 my-7'>
                            <p>Chennai&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <img src={arrow} alt='flighticon' className='' />
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;Coimbatore</p>
                        </div>
                        <div className='w-full text-lg mt-5 font-poppinsRegular leading-10'>
                            <div className='flex gap-10'>
                                <p>Selaiyur</p>
                                <p>Saravanampatti</p>
                            </div>
                            <div className='flex gap-10'>
                                <p>9:40 PM</p>
                                <p>6:30 AM</p>
                            </div>
                            <div className=''>
                                <p>Duration :{'7 hr 50 min'}</p>
                            </div>
                            <div className='ml-auto'>
                                <p>Amount :{'1,350'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    {[...Array(repeatTimes)].map((_, repeatIndex) => (
                        <li key={repeatIndex}>
                            {data.map((item, index) => (
                                <span key={index} className='h-[350px] border border-transparent'>{item}</span>
                            ))}
                        </li>
                    ))}
                </ul>
                <div className='w-[330px] border rounded-r-[50px] border-l-0'>
                    <div className='bg-blue-200/25 h-[22%] w-[331px] rounded-tr-[50px] ml-[-2px]'></div>
                    <div className='mt-7 ml-5 gap-x-10 flex'>
                        <div>
                            <p>PASSENGERS</p>
                            <p className='font-bold'>Gowtham velusamy</p>
                            <p className='font-bold'>Buusha</p>
                        </div>
                        <div>
                            <p>SEAT</p>
                            <p className='font-bold'>L4</p>
                            <p className='font-bold'>L5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-[67%]'>
                <PrimaryButton shadow >
                    DOWNLOAD PDF
                </PrimaryButton>
            </div>
        </>
    );
}