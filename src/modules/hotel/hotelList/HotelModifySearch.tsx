import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "../../../components/AutoSuggestionListingPage";


import CustomDatePicker from "components/CustomdatePickerlistpage";
import { ButtonListOutlined } from "styles/Button";
import RoomGuestCountComponent from "../RoomGuestCountComponent";
import { useNavigate } from "react-router-dom";


const autoCompleteData = [
    { airportName: "Indira Gandhi International Airport", city: "Delhi", iataCode: "DEL", countryCode: "IN", countryFlag: "🇮🇳" },
    { airportName: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", iataCode: "BOM", countryCode: "IN", countryFlag: "🇮🇳" },
    { airportName: "Kempegowda International Airport", city: "Bangalore", iataCode: "BLR", countryCode: "IN", countryFlag: "🇮🇳" },
    { airportName: "Chennai International Airport", city: "Chennai", iataCode: "MAA", countryCode: "IN", countryFlag: "🇮🇳" },
    { airportName: "Netaji Subhas Chandra Bose International Airport", city: "Kolkata", iataCode: "CCU", countryCode: "IN", countryFlag: "🇮🇳" },
    { airportName: "Los Angeles International Airport", city: "Los Angeles", iataCode: "LAX", countryCode: "US", countryFlag: "🇺🇸" }
];

const HotelModifySearch = () => {
    const navigate = useNavigate();
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);
    const dateOfRetrun = new Date();
    dateOfRetrun.setDate(today.getDate() + 1);

    const [errormsg, setErrormsg] = useState('');
    const [fromerrormsg, setFromerrormsg] = useState('');
    const [fromValue, setFromValue] = useState("");
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState(dateOfRetrun);
    const [roomGuestDropdown, showRoomGuestDropdown] = useState(false);
    const [roomGuestCount, setRoomGuestCount] = useState({
        roomCount: 1,
        adultCount: 1,
        childCount: 0
    })

    const fromInputRef = useRef<any>(null);
    const checkInRef = useRef<any>(null);
    const checkOutRef = useRef<any>(null);

    useEffect(() => {
        if (fromValue && checkInRef.current) {
            checkInRef.current.focus();
        }
    }, [fromValue]);

    useEffect(() => {
        if (checkInDate && checkOutRef.current) {
            checkOutRef.current.focus();
        }
    }, [checkInDate]);

    const handleFromValueChange = (newValue: any) => {
        setFromValue(newValue);
        if (newValue && checkInRef.current) {
            checkInRef.current.focus();
        }
    };

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

    const handleSearchHotel = () => {

    }

    const handleRoomGuestDropdown = () => {
        showRoomGuestDropdown(false)
    }

    return (
        <>
            {/* <div className='bg-gradient-to-r from-bg-blue-start to-bg-blue-end flex flex-col md:flex-row items-center justify-around   h-full py-10 rounded-[20px] shadow-lg'>
                <div className="">
                    <AutoSuggestionList
                        label={"Location"}
                        value={fromValue}
                        placeholder={"Where you want to stay"}
                        // setValue={setFromValue} 
                        setValue={handleFromValueChange} // Call the new handler
                        data={autoCompleteData}
                        ref={fromInputRef}
                    />
                </div>
                <div className="flex items-center h-full ">
                    <CustomDatePicker onSelect={(e) => handleCheckInDate(e)} ref={checkInRef} minDate={today} maxDate={maxDate} placeholder={"Select Check-In Date"} />
                </div>
                <div className="flex items-center h-full">
                    <CustomDatePicker onSelect={(e) => handleCheckOutDate(e)} ref={checkOutRef} minDate={dateOfRetrun} maxDate={maxDate} placeholder={"Select Check-Out Date"} />
                </div>
                <div className="my-1 ">
                    <div className="mx-5">
                        <p className="font-poppinsRegular  text-white">
                            Guests &amp; Rooms
                        </p>
                        <div className="flex flex-row justify-center  bottom-3 bg-int-blue">
                            <button className="flex flex-row w-[160%] h-full justify-center items-center " onClick={() => showRoomGuestDropdown(true)} disabled={roomGuestDropdown}>
                                <p className="flex text-center font-poppinsRegular  ps-3 justify-center text-white">
                                    Rooms: {roomGuestCount.roomCount}, Adults: {roomGuestCount.adultCount}
                                    {roomGuestCount.childCount > 0 ? `, Child: ${roomGuestCount.childCount}` : null}

                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-full w-8 text-white"
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
                        {roomGuestDropdown &&
                            <RoomGuestCountComponent
                                roomGuestCount={roomGuestCount}
                                setRoomGuestCount={setRoomGuestCount}
                                showRoomGuestDropdown={showRoomGuestDropdown}
                            />
                        }
                    </div>
                </div>
                <div className="">
                    <ButtonListOutlined >
                        <p className="w-[100px] font-poppinsRegular">Search Hotel</p>
                    </ButtonListOutlined>
                </div>
            </div> */}
                {/* <div className="bg-gradient-to-r from-bg-blue-start to-bg-blue-end p-5  md:max-w-[100%] w-full"> */}

            <div className='bg-gradient-to-r from-bg-blue-start to-bg-blue-end p-5  md:max-w-[100%] w-full shadow-lg'>
            <div className="flex flex-col mdlg:flex-row my-3  items-center justify-center md:max-w-[100%] mx-auto">

                <div className="my-1 w-[60%] mx-auto">
                    <AutoSuggestionList
                        label={"Location"}
                        value={fromValue}
                        placeholder={"Where you want to stay"}
                        setValue={handleFromValueChange}
                        data={autoCompleteData}
                        ref={fromInputRef}
                    />
                </div>
                <div className="my-1 w-[60%] mx-auto">
                    <CustomDatePicker onSelect={(e) => handleCheckInDate(e)} ref={checkInRef} minDate={today} maxDate={maxDate} placeholder={"Check-In"} />
                </div>
                <div className="my-1 w-[60%] mx-auto">
                    <CustomDatePicker onSelect={(e) => handleCheckOutDate(e)} ref={checkOutRef} minDate={dateOfRetrun} maxDate={maxDate} placeholder={"Check-Out"} />
                </div>
                <div className="my-1 w-[60%] mx-auto">
                    <div className="mx-5">
                        <p className="font-poppinsRegular text-white text-md">
                            Guests & Rooms
                        </p>
                        <div className="flex flex-row justify-center bottom-3 bg-int-blue">
                            <button className="flex flex-row w-full md:w-auto h-full justify-center items-center" onClick={() => showRoomGuestDropdown(true)} disabled={roomGuestDropdown}>
                                <p className="flex text-center font-poppinsRegular ps-3 justify-center text-white">
                                    Rooms: {roomGuestCount.roomCount}, Adults: {roomGuestCount.adultCount}
                                    {roomGuestCount.childCount > 0 ? `, Child: ${roomGuestCount.childCount}` : null}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-full w-8 text-white"
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
                        {roomGuestDropdown &&
                            <RoomGuestCountComponent
                                roomGuestCount={roomGuestCount}
                                setRoomGuestCount={setRoomGuestCount}
                                showRoomGuestDropdown={showRoomGuestDropdown}
                            />
                        }
                    </div>
                </div>
                <div className="mt-5 w-[60%] mx-auto">
                    <ButtonListOutlined>
                        <p className="w-[100px] font-poppinsRegular">Search Hotel</p>
                    </ButtonListOutlined>
                </div>
                </div>
            </div>


        </>
    )
}

export default HotelModifySearch;