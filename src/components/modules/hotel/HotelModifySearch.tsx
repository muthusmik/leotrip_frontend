import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import DateSelectionComponent from "components/common/DateSelectComponent";
import HotelGuestRoomCountComponent from "./HotelTravelerCount";
import locationSvg from '../../../assets/icons/locationSymbol.svg';
import { PrimaryButton } from "styles/Button";
import { useNavigate } from "react-router";
import { autoCompleteData, today, maxDate, wordings, dateOfRetrun } from "components/utils/constants/stringconstants/common";

const HotelModifySearchComponent = (props: any) => {
    const values = props;
    console.log("Values................", values)
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

    return (
        <div className='w-full h-[8rem] flex flex-row items-center text-white justify-between px-6 gap-4 bg-gradient-to-r from-[#3081ED] to-[#56CBF2] shadow-lg'>
            <div className="relative top-4 flex flex-wrap w-[86%] justify-between">
                <AutoSuggestionList
                    label={wordings.hotel.location}
                    value={fromValue}
                    placeholder={wordings.hotel.locationPlaceHolder}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={locationSvg}
                    ref={fromInputRef}
                    usedIn={"Hotel"}
                    modify="true"
                />
                <DateSelectionComponent
                    label={wordings.hotel.checkIn}
                    modify="true"
                    placeholder={wordings.hotel.checkInPlacholder}
                    defaultDate={today}
                    maxDate={maxDate}
                    minDate={today}
                    ref={checkInRef}
                    onSelect={handleCheckInDate}
                />
                <DateSelectionComponent
                    label={wordings.hotel.checkOut}
                    modify="true"
                    placeholder={wordings.hotel.checkOutPlacholder}
                    defaultDate={dateOfRetrun}
                    maxDate={maxDate}
                    minDate={dateOfRetrun}
                    ref={checkOutRef}
                    onSelect={handleCheckOutDate}
                />
                <HotelGuestRoomCountComponent
                    modify="true"
                    roomGuestCount={roomGuestCount}
                    setRoomGuestCount={setRoomGuestCount}
                    roomGuestDropdown={roomGuestDropdown}
                    showRoomGuestDropdown={showRoomGuestDropdown}
                />
            </div>
            <div>
                <PrimaryButton outlined onClick={() => handleSearchHotel()}>
                    <p className="font-poppinsRegular">{wordings.flight.modifySearch}</p>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default HotelModifySearchComponent;