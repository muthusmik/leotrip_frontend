import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import DateSelectionComponent from "components/common/DateSelectComponent";
import TripSelectionComponent from "./TripSelectionComponent";
import TimeSelectionComponent from "components/common/TimeSelectionComponent";
import getInCarSvg from '../../../assets/icons/getInCar.svg';
import getOutCarSvg from '../../../assets/icons/getOutCar.svg';
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import toFlightSvg from '../../../assets/icons/Toflight.svg';
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { autoCompleteData, today, dateOfRetrun, maxDate, wordings } from "components/utils/constants/stringconstants/common";

const options = [
    { value: 'oneWay', label: 'One-way' },
    { value: 'roundTrip', label: 'Round-trip' },
    { value: 'airportTransfer', label: 'Airport-transfer' },
    { value: 'hourlyRental', label: 'Hourly Rental' },
];

const CarSearchComponent = () => {
    const navigate = useNavigate();

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [selectedOption, setSelectedOption] = useState<string>('oneWay');
    const [tripType, setTripType] = useState<string>("fromAirport");
    const [date, setDate] = useState(today);
    const [returnDate, setReturnDate] = useState(dateOfRetrun);
    const [pickupTime, setPickupTime] = useState("");
    const [dropTime, setDropTime] = useState("");

    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);
    const returnDateOfJourney = useRef<any>(null);
    const selectRef = useRef<any>(null);
    const pickUpTimeRef = useRef<any>(null);
    const dropTimeRef = useRef<any>(null);

    const handleSearchCar = () => {
        console.log("WERWEEFWWEFWEfew................", fromValue, toValue, moment(date).format("DD/MM/YYYY"), returnDate, pickupTime, dropTime);
        const values = {
            'selectedOption': selectedOption,
            'fromValue': fromValue,
            'toValue': toValue,
            'tripType': tripType,
            'departureDate': date,
            'returnDate': returnDate,
            'pickupTime': pickupTime,
            'dropTime': dropTime
        }
        navigate("/carShow", { state: values })
    }

    useEffect(() => {
        if (tripType && fromInputRef.current) {
            fromInputRef.current.focus();
        }
    }, [tripType]);

    useEffect(() => {
        if (fromValue && toInputRef.current) {
            toInputRef.current.focus();
        }
    }, [fromValue]);

    useEffect(() => {
        if (toValue && dateOfJourney.current) {
            dateOfJourney.current.focus();
        }
    }, [toValue]);

    useEffect(() => {
        if (date && returnDateOfJourney.current) {
            returnDateOfJourney.current.focus();
        }
    }, [date]);

    useEffect(() => {
        if (returnDate && pickUpTimeRef.current) {
            pickUpTimeRef.current.focus();
        }
    }, [returnDate]);

    useEffect(() => {
        if (pickupTime && dropTimeRef.current) {
            dropTimeRef.current.focus();
        }
    }, [pickupTime]);

    const handleFromValueChange = (newValue: any) => {
        setFromValue(newValue);
        if (newValue && toInputRef.current) {
            toInputRef.current.focus();
        }
    };

    const handleToValueChange = (newValue: any) => {
        setToValue(newValue);
        if (newValue && dateOfJourney.current) {
            dateOfJourney.current.focus();
        }
    };

    const handleDateOfJourney = (newValue: any) => {
        setDate(newValue);
        if (selectedOption !== "roundTrip" && newValue && pickUpTimeRef.current) {
            pickUpTimeRef.current.focus();
        }
        else if (newValue && returnDateOfJourney.current) {
            returnDateOfJourney.current.focus();
        }
    };

    const handleReturnDateOfJourney = (newValue: any) => {
        setReturnDate(newValue)
        if (newValue && pickUpTimeRef.current) {
            pickUpTimeRef.current.focus();
        }
    };

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
        if (value !== "airportTransfer")
            setTripType('')
        else
            setTripType("fromAirport")
    };

    const handleSelectValue = (value: string) => {
        setTripType(value)
    }

    return (
        <div className="w-full items-center justify-between gap-6 bg-white px-2 rounded-[20px] shadow-lg">
            <div className="px-4 mt-4 flex">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify='fasle' />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2 px-4 h-[140px]'>
                {selectedOption === 'airportTransfer' &&
                    <TripSelectionComponent
                        label={wordings.car.tripSelectionLabel}
                        modify="false"
                        tripType={tripType}
                        onChange={handleSelectValue}
                        ref={selectRef}
                    />
                }
                <AutoSuggestionList
                    label={wordings.car.fromLabel}
                    value={fromValue}
                    placeholder={selectedOption === 'airportTransfer' && tripType === "fromAirport" ? wordings.car.autoPlaceHolderAirport : wordings.car.autoPlaceHolderPickup}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={selectedOption === 'airportTransfer' && tripType === "fromAirport" ? fromFlightSvg : getInCarSvg}
                    ref={fromInputRef}
                    usedIn={"Car"}
                    modify="false"
                />
                <AutoSuggestionList
                    label={wordings.car.toLabel}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={selectedOption === 'airportTransfer' && tripType === "toAirport" ? wordings.car.autoPlaceHolderAirport : wordings.car.autoPlaceHolderDrop}
                    data={autoCompleteData}
                    img={tripType === "toAirport" ? toFlightSvg : getOutCarSvg}
                    ref={toInputRef}
                    usedIn={"Car"}
                    modify="false"
                />
                <DateSelectionComponent
                    label={wordings.car.dateDepLabel}
                    modify="false"
                    placeholder={wordings.car.dateDepPlaceHolder}
                    defaultDate={date}
                    maxDate={maxDate}
                    minDate={today}
                    ref={dateOfJourney}
                    onSelect={handleDateOfJourney}
                />
                {selectedOption === "roundTrip" &&
                    <DateSelectionComponent
                        label={wordings.car.dateReturnLabel}
                        modify="false"
                        placeholder={wordings.car.dateReturnPlaceHolder}
                        defaultDate={returnDate}
                        maxDate={maxDate}
                        minDate={today}
                        ref={returnDateOfJourney}
                        onSelect={handleReturnDateOfJourney}
                    />
                }
                <TimeSelectionComponent
                    label={wordings.car.timePickupLabel}
                    modify='false'
                    ref={pickUpTimeRef}
                    onChange={(e) => setPickupTime(e)}
                />
                {/* <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[14%] max-w-[20%] hover:border-orange-600">
                    <div className="flex flex-row rounded-[16px] h-full w-full">
                        <div className="w-[15%] h-full">
                            <p className="font-poppinsRegular relative bottom-3 left-3 bg-white text-center w-[6.5rem]">Pickup-Time</p>
                            <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black hover:border-orange-600">
                            <div className="flex items-center">
                                <input type="time" className="w-full h-full outline-none bg-transparent" ref={pickUpTimeRef} onChange={(e) => setPickupTime(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div> */}
                {selectedOption === "roundTrip" &&
                    <TimeSelectionComponent
                        label={wordings.car.timeDropLabel}
                        modify='false'
                        ref={dropTimeRef}
                        onChange={(e) => setDropTime(e)}
                    />
                    // <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[14%] max-w-[20%] hover:border-orange-600">
                    //     <div className="flex flex-row rounded-[16px] h-full w-full">
                    //         <div className="w-[15%] h-full">
                    //             <p className="font-poppinsRegular relative bottom-3 left-3 bg-white text-center w-[6.5rem]">Drop Time</p>
                    //             <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" />
                    //         </div>
                    //         <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black hover:border-orange-600">
                    //             <div className="flex items-center">
                    //                 <input type="time" className="w-full h-full outline-none bg-transparent" ref={dropTimeRef} onChange={(e) => setDropTime(e.target.value)} />
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                }
            </div>
            <div className="absolute top-[10.8rem] right-[40%]">
                <PrimaryButton rounded onClick={() => handleSearchCar()}>
                    <p className="w-[200px] py-1 font-poppinsRegular text-xl">{wordings.car.searchCar}</p>
                </PrimaryButton>
            </div>
        </div>

    )
}

export default CarSearchComponent;