import { useEffect, useRef, useState } from "react";
import RoomGuestCountComponent from "../RoomGuestCountComponent";
import { PrimaryButton } from "styles/Button";
import RoomListing from "./RoomListing";
import checkin from '../../../assets/icons/checkIn.svg';
import checkout from '../../../assets/icons/checkOut.svg';
import CustomDatePicker from "components/common/CustomdatePicker";

const Rooms=()=>{

    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);
    const dateOfRetrun = new Date();
    dateOfRetrun.setDate(today.getDate() + 1);

    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState(dateOfRetrun);
    const [roomGuestDropdown, showRoomGuestDropdown] = useState(false);
    const [roomGuestCount, setRoomGuestCount] = useState({
        roomCount: 1,
        adultCount: 1,
        childCount: 0
    })
    const checkInRef = useRef<any>(null);
    const checkOutRef = useRef<any>(null);


    useEffect(() => {
        if (checkInDate && checkOutRef.current) {
            checkOutRef.current.focus();
        }
    }, [checkInDate]);



    const handleCheckInDate = (newValue: any) => {
        setCheckInDate(newValue);
        if (newValue && checkOutRef.current) {
            checkOutRef.current.focus();
        }
    };

    const handleCheckOutDate = (newValue: any) => {
        setCheckOutDate(newValue);
        showRoomGuestDropdown(true);
    };

    const handleRoomGuestDropdown = () => {
        showRoomGuestDropdown(false)
    }

    const handleSearchHotel = () => {

    }

    const handleRoomTypeChange = () => {

    };
    return (

        <div id="rooms" className='mx-5 my-2' style={{ marginTop: '20px' }}>
            <div className='bg-white p-3 border-2 border-[#e0e4e7]'>
                <div>
                    <h1 className='font-bold text-md pt-5 text-center md:text-left'>Check Availability</h1>
                    <div className='flex flex-col md:flex-row md:justify-around border mt-5'>
                        <div className="bg-white rounded-[10px] border-2 border-gray-400 hover:bg-slate-100  md:w-[25%] sm:w-[50%] sm:mx-auto h-[60px] flex flex-col justify-center items-center mt-10 md:mt-0 md:mr-2">
                            <p className="font-poppinsRegular relative bottom-2 bg-white text-center w-[full] sm:w-[90%] right-6 left-1">
                                Guests &amp; Rooms
                            </p>
                            <div className="flex justify-center w-full h-full relative bottom-2">
                                <button className="flex flex-row w-full h-full justify-center" onClick={() => showRoomGuestDropdown(true)} disabled={roomGuestDropdown}>
                                    <p className="flex text-center w-[90%] font-poppinsRegular text-lg justify-center items-center h-full rounded-[5px] px-1">
                                        Rooms: {roomGuestCount.roomCount}, Adults: {roomGuestCount.adultCount}
                                        {roomGuestCount.childCount > 0 ? `, Child: ${roomGuestCount.childCount}` : null}
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-full w-8 text-gray-700"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {roomGuestDropdown &&
                            <RoomGuestCountComponent
                                roomGuestCount={roomGuestCount}
                                setRoomGuestCount={setRoomGuestCount}
                                showRoomGuestDropdown={showRoomGuestDropdown}
                            />
                        }
                        <div className="bg-white rounded-[10px] border-2 sm:w-[50%] sm:mx-auto md:w-[24%] border-gray-400 hover:bg-slate-100 flex flex-row h-[60px] px-2 mt-10 md:mt-0 md:mr-2">
                            <div className="w-[20%]">
                                <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[100px]">Check-In</p>
                                <img src={checkin} alt="error" className="w-full h-[35px] relative bottom-3" />
                            </div>
                            <div className="w-[80%] flex flex-col justify-center ps-2 border-l-2 border-gray-400">
                                <div className="flex items-center w-full h-full">
                                    <CustomDatePicker onSelect={(e) => handleCheckInDate(e)} ref={checkInRef} minDate={today} maxDate={maxDate} placeholder={"Select Check-In Date"} />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[10px] border-2 sm:w-[50%] sm:mx-auto md:w-[24%] border-gray-400 hover:bg-slate-100 flex flex-row h-[60px] px-2 mt-10 md:mt-0 md:mr-2">
                            <div className="w-[20%]">
                                <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[100px]">Check-Out</p>
                                <img src={checkout} alt="error" className="w-full h-[35px] relative bottom-3" />
                            </div>
                            <div className="w-[80%] flex flex-col justify-center ps-2 border-l-2 border-gray-400">
                                <div className="flex items-center w-full h-full">
                                    <CustomDatePicker onSelect={(e) => handleCheckOutDate(e)} ref={checkOutRef} minDate={dateOfRetrun} maxDate={maxDate} placeholder={"Select Check-Out Date"} />

                                </div>
                            </div>
                        </div>
                        <div className="mt-10 md:mt-0 mx-auto">
                            <PrimaryButton rounded onClick={() => handleSearchHotel()}>
                                <p className="w-[100px] font-poppinsRegular">Search Hotel</p>
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <hr className='border-1 mt-10' />
                <h1 className='font-bold text-md pt-5'>Rooms</h1>
                <div className='overflow-x-auto'>
                    <table className="w-full border border-slate-300 ">
                        <thead className='border border-slate-300 '>
                            <tr className='bg-gray-400 border border-slate-300 flex flex-col md:flex-wrap md:flex-row justify-around items-center '>
                                <th className="bg-gray-400 w-full md:w-[30%] py-2 md:block hidden">
                                    <select className="py-2 border-none bg-gray-400 hover:border-none" onChange={handleRoomTypeChange}>
                                        <option value="">Select Room Type</option>
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                    </select>
                                </th>
                                <th className="bg-gray-400 w-full md:w-[35%]  py-2 hidden md:block">Options</th>
                                <th className="bg-gray-400 w-full md:w-[35%] py-2 hidden md:block">Price</th>
                            </tr>
                        </thead>
                        <tbody className='w-full border border-black'>
                            <RoomListing />
                            <RoomListing />
                            <RoomListing />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default Rooms;