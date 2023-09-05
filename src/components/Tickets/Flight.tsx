import '../../index.css';
import flighticon from '../../assets/icons/icon-flight.svg';
import flticon from '../../assets/icons/flight-icon.svg';
import { PrimaryButton } from 'styles/Button';

export default function Flightticket() {
    const data = [<div className='h-3 w-3 bg-gray-300 border border-gray-300 my-3 rounded-full mt-0 ml-[-5px] z-40 absolute'></div>]; // Your list of items to be repeated
    const repeatTimes = 15; // Number of times to repeat the list
    return (
        <>
            <div className='flex h-[350px] w-fit mx-[10%] shadow-lg rounded-[50px] '>
                <div className=" w-[650px] border rounded-l-[50px] worldmap border-r-0">
                    <div className='bg-blue-200/25 h-[20%] w-full rounded-tl-[50px] text-2xl font-poppinsBold pl-10 pt-5'>
                        <p>Ticket Details</p>
                    </div>
                    <div className='mx-[10%]'>
                        <div className='flex text-3xl font-poppinsBold ml-5 my-10'>
                            <p className='mt-4'>Chennai&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <img src={flticon} alt='flighticon' className='' />
                            <p className='mt-4'>&nbsp;&nbsp;&nbsp;&nbsp;Coimbatore</p>
                        </div>
                        <div className='flex w-full gap-12 mt-10 font-poppinsRegular leading-10'>
                            <div>
                                <p>GATE</p>
                                <p className='font-bold'>25 A</p>
                            </div>
                            <div>
                                <p>BOARDING TIME</p>
                                <p className='font-bold'>05 : 00</p>
                            </div>
                            <div>
                                <p>FLIGHT</p>
                                <p className='font-bold'>AV 1A7</p>
                            </div>
                            <div>
                                <p>DATE</p>
                                <p className='font-bold'>05 MAY 2023</p>
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
                    <div className='bg-gray-800 flex h-[20%] w-[331px] rounded-tr-[50px] text-lg font-poppinsBold pl-10 pt-5 text-white ml-[-2px]'>
                        <p className='mt-1'>Chennai&nbsp;&nbsp;</p>
                        <img src={flighticon} alt='flighticon' className='h-9' />
                        <p className='mt-1'>&nbsp;&nbsp;Coimbatore</p>
                    </div>
                    <div className='mt-7 ml-5 gap-x-10 flex'>
                        <div>
                            <p>PASSENGERS</p>
                            <p className='font-bold'>Gowtham velusamy</p>
                            <p className='font-bold'>Buusha</p>
                        </div>
                        <div>
                            <p>SEAT</p>
                            <p className='font-bold'>4B</p>
                            <p className='font-bold'>5B</p>
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