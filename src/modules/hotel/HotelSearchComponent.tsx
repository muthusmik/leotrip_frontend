import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import locationSvg from '../../assets/icons/locationSymbol.svg';
import dateSvg from '../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RoomGuestCountComponent from "./RoomGuestCountComponent";

const autoCompleteData = [
    "Asparagus",
    "Beetroot",
    "Broccoli",
    "Cabbage",
    "Carrot",
    "Cauliflower",
    "Celery",
    "Corn",
    "Eggplant",
    "Lettuce",
    "Mushroom",
    "Onion",
    "Parsnip",
    "Pea",
    "Potato",
    "Pumpkin",
    "Radish",
    "Spinach",
    "Tomato",
    "Turnip",
];

const HotelSearchComponent = () => {

    const [fromValue, setFromValue] = useState("");
    const [roomGuestDropdown, showRoomGuestDropdown] = useState(false);
    const [roomGuestCount, setRoomGuestCount] = useState({
        roomCount: 1,
        adultCount: 1,
        childCount: 0
    })

    const fromInputRef = useRef<any>(null);
    const checkInRef = useRef<any>(null);

    useEffect(() => {
        if (fromValue && checkInRef.current) {
            checkInRef.current.focus();
        }
    }, [fromValue]);

    const handleFromValueChange = (newValue: any) => {
        setFromValue(newValue);
        if (newValue && checkInRef.current) {
            checkInRef.current.focus();
        }
    };

    const handleRoomGuestCount = () => {
        console.log("ASSSDSDSDs..............", roomGuestCount)
        if (roomGuestDropdown) {
            showRoomGuestDropdown(false)
        }
        else {
            showRoomGuestDropdown(true)
        }
    }

    const handleSearchHotel = () => {

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
                <div className="bg-white rounded-[10px] border-2 w-[24%] border-black flex flex-row h-[70px] px-2">
                    <div className="w-[20%]">
                        <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[100px]">Check-In</h2>
                        <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                    </div>
                    <div className="w-[74%] flex flex-col justify-center px-2 border-l-2 border-black">
                        <div className="flex items-center">
                            <CustomDatePicker onSelect={(e) => console.log(e)} ref={checkInRef} minDate={new Date()} maxDate={new Date()} placeholder={"Select Check-In Date"} />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[10px] border-2 w-[24%] border-black flex flex-row h-[70px] px-2">
                    <div className="w-[20%]">
                        <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[100px]">Check-Out</h2>
                        <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                    </div>
                    <div className="w-[74%] flex flex-col justify-center px-2 border-l-2 border-black">
                        <div className="flex items-center">
                            <CustomDatePicker onSelect={(e) => console.log(e)} minDate={new Date()} maxDate={new Date()} placeholder={"Select Check-Out Date"} />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[10px] border-2 border-black  hover:bg-slate-100 w-[20%] h-[70px] flex flex-col justify-center items-center">
                    <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[80%] right-2">
                        Guests &amp; Rooms
                    </h2>
                    <div className="px-2 h-full">
                        <p className="flex text-center font-poppinsRegular text-[16px] cursor-pointer rounded-[5px]" onClick={() => handleRoomGuestCount()}>
                            Rooms: {roomGuestCount.roomCount}, Adults: {roomGuestCount.adultCount}
                            {roomGuestCount.childCount > 0 ? `, Child: ${roomGuestCount.childCount}` : null}
                        </p>
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
            <div className="absolute top-[8.3rem] right-[38%]">
                <PrimaryButton rounded onClick={() => handleSearchHotel()}>
                    <p className="w-[200px] font-poppinsRegular">Search Hotel</p>
                </PrimaryButton>
            </div>
        </>
    )
}

export default HotelSearchComponent;