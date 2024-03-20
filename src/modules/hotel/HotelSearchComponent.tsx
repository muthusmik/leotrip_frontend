import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import locationSvg from '../../assets/icons/locationSymbol.svg';
import dateSvg from '../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RoomGuestCountComponent from "./RoomGuestCountComponent";
import { useNavigate } from "react-router-dom";

const autoCompleteData = [
    { airportName: "Indira Gandhi International Airport",  city: "Delhi",  iataCode: "DEL",countryCode: "IN", countryFlag: "????" },
    { airportName: "Chhatrapati Shivaji Maharaj International Airport",  city: "Mumbai", iataCode: "BOM",countryCode: "IN", countryFlag: "????" },
    { airportName: "Kempegowda International Airport", city: "Bangalore", iataCode: "BLR",countryCode: "IN", countryFlag: "????" },
    { airportName: "Chennai International Airport",  city: "Chennai", iataCode: "MAA",countryCode: "IN", countryFlag: "????" },
    { airportName: "Netaji Subhas Chandra Bose International Airport",  city: "Kolkata", iataCode: "CCU",countryCode: "IN", countryFlag: "????" },
    { airportName: "Los Angeles International Airport", city: "Los Angeles", iataCode: "LAX", countryCode: "US", countryFlag: "????" }
    ];

const HotelSearchComponent = () => {
    const navigate=useNavigate();
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
        if (fromValue == '') {
            setFromerrormsg('Please Select the Valid Location !');
        }
        else {
            setErrormsg('')
            navigate("/hotel/hotelList")
        }
        console.log("handleHotelSearch................", fromValue)
    }

    const handleRoomGuestDropdown = () => {
        showRoomGuestDropdown(false)
    }

    return (
        <>
            <div className='flex flex-row w-full items-center justify-between gap-4 bg-white px-10 h-[160px] rounded-[20px] shadow-lg'>
                <AutoSuggestionList
                    label={"Location"}
                    value={fromValue}
                    placeholder={"Where you want to stay"}
                    // setValue={setFromValue}
                    setValue={handleFromValueChange} // Call the new handler
                    data={autoCompleteData}
                    img={locationSvg}
                    ref={fromInputRef}
                />
                <div className="bg-white rounded-[10px] border-2 w-[24%] border-black hover:bg-slate-100 flex flex-row h-[70px] px-2">
                    <div className="w-[20%]">
                        <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[100px]">Check-In</p>
                        <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                    </div>
                    <div className="w-[80%] flex flex-col justify-center ps-2 border-l-2 border-black">
                        <div className="flex items-center w-full h-full">
                            <CustomDatePicker onSelect={(e) => handleCheckInDate(e)} ref={checkInRef} minDate={today} maxDate={maxDate} placeholder={"Select Check-In Date"} />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[10px] border-2 w-[24%] border-black  hover:bg-slate-100 flex flex-row h-[70px] px-2">
                    <div className="w-[20%]">
                        <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[100px]">Check-Out</p>
                        <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                    </div>
                    <div className="w-[80%] flex flex-col justify-center ps-2 border-l-2 border-black">
                        <div className="flex items-center w-full h-full">
                            <CustomDatePicker onSelect={(e) => handleCheckOutDate(e)} ref={checkOutRef} minDate={dateOfRetrun} maxDate={maxDate} placeholder={"Select Check-Out Date"} />

                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[10px] border-2 border-black  hover:bg-slate-100 w-[20%] h-[70px] flex flex-col justify-center items-center">

                    <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[66%] right-6">
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
            </div>
            <div className="absolute top-[8.3rem] right-[40%]">
                <PrimaryButton rounded onClick={() => handleSearchHotel()}>
                    <p className="w-[200px] font-poppinsRegular">Search Hotel</p>
                </PrimaryButton>
            </div>
        </>
    )
}

export default HotelSearchComponent;