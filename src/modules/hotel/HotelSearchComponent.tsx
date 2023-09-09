import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import HotelGuestRoomCountComponent from "components/modules/hotel/HotelTravelerCount";
import DateSelectionComponent from "components/common/DateSelectComponent";
import locationSvg from '../../assets/icons/locationSymbol.svg';
import { PrimaryButton } from "styles/Button";
import { autoCompleteData, today, maxDate, dateOfRetrun, wordings } from "components/utils/constants/stringconstants/common";
import { useNavigate } from "react-router-dom";

const HotelSearchComponent = () => {

    const navigate = useNavigate();
    const [fromValue, setFromValue] = useState("");
    const [checkInDate, setCheckInDate] = useState(today);
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

    const handleSearchHotel = () => {
        const values = {
            'fromValue': fromValue,
            'checkInDate': checkInDate,
            'checkOutDate': checkOutDate,
            'roomGuestCount': roomGuestCount
        }
        console.log("handleSearchHotel................", values)
        navigate("/hotelShow", { state: values })
    }

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

    return (
        <>
            <div className='flex flex-row w-full items-center justify-between gap-4 bg-white px-10 h-[160px] rounded-[20px] shadow-lg'>
                <AutoSuggestionList
                    label={wordings.hotel.location}
                    value={fromValue}
                    placeholder={wordings.hotel.locationPlaceHolder}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={locationSvg}
                    ref={fromInputRef}
                    usedIn={"Hotel"}
                    modify="false"
                />
                <DateSelectionComponent
                    label={wordings.hotel.checkIn}
                    modify="false"
                    placeholder={wordings.hotel.checkInPlacholder}
                    defaultDate={today}
                    maxDate={maxDate}
                    minDate={today}
                    ref={checkInRef}
                    onSelect={handleCheckInDate}
                />
                <DateSelectionComponent
                    label={wordings.hotel.checkOut}
                    modify="false"
                    placeholder={wordings.hotel.checkOutPlacholder}
                    defaultDate={dateOfRetrun}
                    maxDate={maxDate}
                    minDate={dateOfRetrun}
                    ref={checkOutRef}
                    onSelect={handleCheckOutDate}
                />
                {/* <div className="bg-white rounded-[10px] border-2 w-[24%] border-black hover:border-orange-600 flex flex-row h-[70px]">
                    <div className="w-[15%] h-full">
                        <p className="font-poppinsRegular relative bottom-3 left-3 bg-white text-center w-[100px]">Check-In</p>
                        <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                    </div>
                    <div className="w-[80%] flex flex-col justify-center ps-2 border-l-2 border-black hover:border-orange-600">
                        <div className="flex items-center w-full h-full">
                            <CustomDatePicker onSelect={(e) => handleCheckInDate(e)} ref={checkInRef} defaultDate={today} minDate={today} maxDate={maxDate} placeholder={"Select Check-In Date"} />
                        </div>
                    </div>
                </div> */}
                {/* <div className="bg-white rounded-[10px] border-2 w-[24%] border-black hover:border-orange-600 flex flex-row h-[70px]">
                    <div className="w-[15%] h-full">
                        <p className="font-poppinsRegular relative bottom-3 left-3 bg-white text-center w-[100px]">Check-Out</p>
                        <img src={dateSvg} alt="error" className="w-full h-[43px] relative bottom-3" />
                    </div>
                    <div className="w-[80%] flex flex-col justify-center ps-2 border-l-2 border-black hover:border-orange-600">
                        <div className="flex items-center w-full h-full">
                            <CustomDatePicker onSelect={(e) => handleCheckOutDate(e)} ref={checkOutRef} defaultDate={dateOfRetrun} minDate={dateOfRetrun} maxDate={maxDate} placeholder={"Select Check-Out Date"} />
                        </div>
                    </div>
                </div> */}
                <HotelGuestRoomCountComponent
                    modify="false"
                    roomGuestCount={roomGuestCount}
                    setRoomGuestCount={setRoomGuestCount}
                    roomGuestDropdown={roomGuestDropdown}
                    showRoomGuestDropdown={showRoomGuestDropdown}
                />
            </div>
            <div className="absolute top-[8rem] right-[40%]">
                <PrimaryButton rounded onClick={() => handleSearchHotel()}>
                    <p className="w-[200px] py-1 font-poppinsRegular text-xl">{wordings.hotel.searchHotel}</p>
                </PrimaryButton>
            </div>
        </>
    )
}

export default HotelSearchComponent;