import React, { useState, useEffect } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import locationSvg from '../../assets/icons/locationSymbol.svg';
import toBusSvg from '../../assets/icons/tobus.svg';
import dateSvg from '../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";

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
        roomCount: 5,
        adultCount: 8,
        childCount: 5,
        infantCount: 5
    })
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
            <div className='flex flex-row w-full items-center justify-between gap-4 bg-white px-10 h-[160px] rounded-[20px]'>
                <AutoSuggestionList
                    label={"Location"}
                    value={fromValue}
                    placeholder={"Where you want to stay"}
                    setValue={setFromValue}
                    data={autoCompleteData}
                    img={locationSvg}
                />
                <div className="bg-white rounded-[10px] border-2 w-[24%] border-black flex flex-row h-[70px] px-2">
                    <div className="w-[20%]">
                        <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[100px]">Check-In</h2>
                        <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                    </div>
                    <div className="w-[74%] flex flex-col justify-center px-2 border-l-2 border-black">
                        <div className="flex items-center">
                            <CustomDatePicker onSelect={(e) => console.log(e)} />
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
                            <CustomDatePicker onSelect={(e) => console.log(e)} />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[10px] border-2 border-black w-[20%] h-[70px] flex flex-col justify-center items-center">
                    <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[80%] right-2">
                        Guests &amp; Rooms
                    </h2>
                    <div className="relative bottom-3 px-2">
                        <p className="font-poppinsRegular text-[16px] cursor-pointer" onClick={() => handleRoomGuestCount()}>
                            Rooms: {roomGuestCount.roomCount}, Adults: {roomGuestCount.adultCount}
                            {roomGuestCount.childCount > 0 ? `, Child: ${roomGuestCount.childCount}` : null}
                            {roomGuestCount.infantCount > 0 ? `, Infant(s): ${roomGuestCount.infantCount}` : null}
                        </p>
                    </div>
                </div>
                {roomGuestDropdown &&
                    <div className="absolute top-[8rem] right-0 bg-white border-4 rounded-[10px] w-[20%]">
                        <h2 className="text-center font-poppinsRegular text-2xl">Rooms</h2>
                        <div className="flex flex-row px-4">
                            <p className="font-bold font-poppinsRegular">Room Count: </p>
                            <p></p>
                            <p>{roomGuestCount.roomCount}</p>
                            <p>Count</p>
                        </div>
                        <h2 className="text-center font-poppinsRegular text-2xl">Guests</h2>
                        <div className="flex flex-row px-4">
                            <p className="font-bold font-poppinsRegular">Adult Count: </p>
                            <p></p>
                            <p>{roomGuestCount.adultCount}</p>
                            <p>Count</p>
                        </div>
                        <div className="flex flex-row px-4">
                            <p className="font-bold font-poppinsRegular">Child Count: </p>
                            <p></p>
                            <p>{roomGuestCount.childCount}</p>
                            <p>Count</p>
                        </div>
                        <div className="flex flex-row px-4">
                            <p className="font-bold font-poppinsRegular">Infant Count: </p>
                            <p></p>
                            <p>{roomGuestCount.infantCount}</p>
                            <p>Count</p>
                        </div>
                        <PrimaryButton rounded onClick={() => handleRoomGuestDropdown()}>
                            <p className="w-[100px] font-poppinsRegular">Apply</p>
                        </PrimaryButton>
                    </div>}
            </div>
            <div className="absolute top-[8.7rem] right-[38%]">
                <PrimaryButton rounded onClick={() => handleSearchHotel()}>
                    <p className="w-[200px] font-poppinsRegular">Search Hotel</p>
                </PrimaryButton>
            </div>
        </>
    )
}

export default HotelSearchComponent;