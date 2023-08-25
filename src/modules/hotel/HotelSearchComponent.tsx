import React, { useState, useEffect } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import locationSvg from '../../assets/icons/locationSymbol.svg';
import toBusSvg from '../../assets/icons/tobus.svg';
import dateSvg from '../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";

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
    const [toValue, setToValue] = useState("");
    const [roomGuestCount, setRoomGuestCount] = useState({
        roomCount: 1,
        adultCount: 1,
        childCount: 1,
        infantCount: 1
    })

    return (
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
                    <h2 className="font-poppinsRegular relative bottom-3 bg-white text-center w-[100px]">Check-In</h2>
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
                    <h2 className="font-poppinsRegular relative bottom-3 bg-white text-center w-[100px]">Check-Out</h2>
                    <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                </div>
                <div className="w-[74%] flex flex-col justify-center px-2 border-l-2 border-black">
                    <div className="flex items-center">
                        <CustomDatePicker onSelect={(e) => console.log(e)} />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[10px] border-2 border-black w-[20%] h-[70px]">
                <h2 className="font-poppinsRegular relative bottom-3 bg-white text-center w-[80%] left-2">
                    Guests &amp; Rooms
                </h2>
                <div className="flex items-center justify-center self-center relative bottom-3 px-2 border-2 border-red-400">
                    <p className="font-poppinsRegular text-sm">Rooms: {roomGuestCount.roomCount}, Adults: {roomGuestCount.adultCount}{roomGuestCount.childCount > 0 ? `, Child: ${roomGuestCount.childCount}` : null}{roomGuestCount.infantCount > 0 ? `, Infant(s): ${roomGuestCount.infantCount}` : null}</p>
                </div>
            </div>
        </div>
    )
}

export default HotelSearchComponent;