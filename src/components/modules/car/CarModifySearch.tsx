import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import getInCarSvg from '../../../assets/icons/getInCar.svg';
import getOutCarSvg from '../../../assets/icons/getOutCar.svg';
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import toFlightSvg from '../../../assets/icons/Toflight.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import moment from "moment";
import { autoCompleteData } from "components/utils/constants/stringconstants/common";

const options = [
    { value: 'oneWay', label: 'One-way' },
    { value: 'roundTrip', label: 'Round-trip' },
    { value: 'airportTransfer', label: 'Airport-transfer' },
    { value: 'hourlyRental', label: 'Hourly Rental' },
];

const selectTripType = [
    { value: 'fromAirport', label: 'From Airport' },
    { value: 'toAirport', label: 'To Airport' },
]

const CarModifySearchComponent = (props: any) => {
    const values = props;
    console.log("Props in carModifySearchComponent...................", values);

    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);

    const dateOfRetrun = new Date();
    dateOfRetrun.setDate(today.getDate() + 1);

    const [fromValue, setFromValue] = useState(values.fromValue);
    const [toValue, setToValue] = useState(values.toValue);
    const [selectedOption, setSelectedOption] = useState<string>(values.selectedOption);
    const [tripType, setTripType] = useState<string>(values.tripType);
    const [date, setDate] = useState(values.departureDate);
    const [returnDate, setReturnDate] = useState(values.returnDate);
    const [pickupTime, setPickupTime] = useState(values.pickupTime);
    const [dropTime, setDropTime] = useState(values.dropTime);

    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);
    const returnDateOfJourney = useRef<any>(null);
    const selectRef = useRef<any>(null);
    const pickUpTimeRef = useRef<any>(null);
    const dropTimeRef = useRef<any>(null);

    const handleSearchCar = () => {
        console.log("WERWEEFWWEFWEfew................", fromValue, toValue, moment(date).format("DD/MM/YYYY"), returnDate, pickupTime, dropTime)
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
        <div className="w-full items-center justify-center text-white px-6 bg-gradient-to-r from-sky-600 to-slate-600 shadow-lg">
            <div className="my-4 flex">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify='true' />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2'>
                {selectedOption === 'airportTransfer' &&
                    <div className="h-[70px]">
                        <div className="flex flex-row rounded-[16px] h-[70px] px-2 w-full">
                            <div className="w-[5%]">
                                <p className="font-poppinsRegular relative bottom-3  text-center w-[140px]">Select Trip Type</p>
                            </div>
                            <div className="w-[100%] flex flex-col justify-center px-2">
                                <div className="flex items-center">
                                    <select name="" id="" defaultValue={tripType} className="w-full h-full outline-none font-poppinsRegular text-lg cursor-pointer bg-transparent" onChange={(e) => handleSelectValue(e.target.value)} ref={selectRef}>
                                        <option value="fromAirport">From Airport</option>
                                        <option value="toAirport">To Airport</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>}
                <div className="w-[14rem]">
                    <AutoSuggestionList
                        label={"From"}
                        value={fromValue}
                        placeholder={selectedOption === 'airportTransfer' && tripType === "fromAirport" ? "Airport Name" : "Pickup Location"}
                        setValue={handleFromValueChange}
                        data={autoCompleteData}
                        img={selectedOption === 'airportTransfer' && tripType === "fromAirport" ? fromFlightSvg : getInCarSvg}
                        ref={fromInputRef}
                        usedIn={"Car"}
                        modify="true"
                    />
                </div>
                <div className="w-[14rem]">
                    <AutoSuggestionList
                        label={"To"}
                        value={toValue}
                        setValue={handleToValueChange}
                        placeholder={selectedOption === 'airportTransfer' && tripType === "toAirport" ? "Airport Name" : "Drop Location"}
                        data={autoCompleteData}
                        img={tripType === "toAirport" ? toFlightSvg : getOutCarSvg}
                        ref={toInputRef}
                        usedIn={"Car"}
                        modify="true"
                    />
                </div>
                <div className="h-[70px] min-w-[14%] max-w-[20%]">
                    <div className="flex flex-row rounded-[16px] h-full w-full">
                        <div className="w-[15%] h-full">
                            <p className="font-poppinsRegular relative bottom-3 left-3  text-center w-[5.4rem]">Departure</p>
                            {/* <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" /> */}
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ps-4">
                            <div className="flex items-center">
                                <CustomDatePicker onSelect={(e) => handleDateOfJourney(e)} ref={dateOfJourney} defaultDate={date} minDate={today} maxDate={maxDate} placeholder={"Select Pickup Date"} />
                            </div>
                        </div>
                    </div>
                </div>
                {selectedOption === "roundTrip" &&
                    <div className="h-[70px] min-w-[14%] max-w-[20%]">
                        <div className="flex flex-row rounded-[16px] h-full w-full">
                            <div className="w-[15%] h-full">
                                <p className="font-poppinsRegular relative bottom-3 left-3  text-center w-[3.6rem]">Return</p>
                                {/* <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" /> */}
                            </div>
                            <div className="w-[80%] flex flex-col justify-center ps-4">
                                <div className="flex items-center">
                                    <CustomDatePicker onSelect={(e) => handleReturnDateOfJourney(e)} ref={returnDateOfJourney} defaultDate={returnDate} minDate={today} maxDate={maxDate} placeholder={"Select Return Date"} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="h-[70px] min-w-[14%] max-w-[20%]">
                    <div className="flex flex-row rounded-[16px] h-full w-full">
                        <div className="w-[15%] h-full">
                            <p className="font-poppinsRegular relative bottom-3 left-3  text-center w-[6.5rem]">Pickup-Time</p>
                            {/* <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" /> */}
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ps-4">
                            <div className="flex items-center">
                                <input type="time" className="w-full h-full outline-none bg-transparent" ref={pickUpTimeRef} onChange={(e) => setPickupTime(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                {selectedOption === "roundTrip" &&
                    <div className="h-[70px] min-w-[14%] max-w-[20%]">
                        <div className="flex flex-row rounded-[16px] h-full w-full">
                            <div className="w-[15%] h-full">
                                <p className="font-poppinsRegular relative bottom-3 left-3  text-center w-[6.5rem]">Drop Time</p>
                                {/* <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" /> */}
                            </div>
                            <div className="w-[80%] flex flex-col justify-center ps-4">
                                <div className="flex items-center">
                                    <input type="time" className="w-full h-full outline-none bg-transparent" ref={dropTimeRef} onChange={(e) => setDropTime(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div>
                    <PrimaryButton outlined onClick={() => handleSearchCar()}>
                        <p className="font-poppinsRegular">Search</p>
                    </PrimaryButton>
                </div>
            </div>
        </div>

    )
}

export default CarModifySearchComponent;