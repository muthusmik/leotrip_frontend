import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import getInCarSvg from '../../../assets/icons/getInCar.svg';
import getOutCarSvg from '../../../assets/icons/getOutCar.svg';
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import toFlightSvg from '../../../assets/icons/Toflight.svg';
import dateSvg from '../../../assets/icons/datesvg.svg';
import timeSvg from '../../../assets/icons/clock_svg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import CustomSelect from "./CarSelectTripType";
import moment from "moment";
import { useNavigate } from "react-router-dom";
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

const CarSearchComponent = () => {
    const navigate = useNavigate();
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);

    const dateOfRetrun = new Date();
    dateOfRetrun.setDate(today.getDate() + 1);

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
                    <div className="bg-white rounded-[10px] border-2 border-black hover:border-orange-600 h-[70px] min-w-[20%] max-w-[26%]">
                        <div className="flex flex-row rounded-[16px] h-[70px] px-2 w-full">
                            <div className="w-[5%]">
                                <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[140px]">Select Trip Type</p>
                            </div>
                            <div className="w-[100%] flex flex-col justify-center px-2">
                                <div className="flex items-center">
                                    <select name="" id="" className="w-full h-full outline-none font-poppinsRegular text-lg cursor-pointer" onChange={(e) => handleSelectValue(e.target.value)} ref={selectRef}>
                                        <option value="fromAirport" defaultValue={tripType}>From Airport</option>
                                        <option value="toAirport">To Airport</option>
                                    </select>
                                </div>
                                {/* <CustomSelect options={selectTripType} onSelect={handleSelectValue} ref={selectRef} /> */}
                            </div>
                        </div>
                    </div>}
                <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={selectedOption === 'airportTransfer' && tripType === "fromAirport" ? "Airport Name" : "Pickup Location"}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={selectedOption === 'airportTransfer' && tripType === "fromAirport" ? fromFlightSvg : getInCarSvg}
                    ref={fromInputRef}
                    usedIn={"Car"}
                    modify="false"
                />
                <AutoSuggestionList
                    label={"To"}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={selectedOption === 'airportTransfer' && tripType === "toAirport" ? "Airport Name" : "Drop Location"}
                    data={autoCompleteData}
                    img={tripType === "toAirport" ? toFlightSvg : getOutCarSvg}
                    ref={toInputRef}
                    usedIn={"Car"}
                    modify="false"
                />
                <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[14%] max-w-[20%] hover:border-orange-600">
                    <div className="flex flex-row rounded-[16px] h-full w-full">
                        <div className="w-[15%] h-full">
                            <p className="font-poppinsRegular relative bottom-3 left-3 bg-white text-center w-[5.4rem]">Departure</p>
                            <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black hover:border-orange-600">
                            <div className="flex items-center">
                                <CustomDatePicker onSelect={(e) => handleDateOfJourney(e)} ref={dateOfJourney} defaultDate={today} minDate={today} maxDate={maxDate} placeholder={"Select Pickup Date"} />
                            </div>
                        </div>
                    </div>
                </div>
                {selectedOption === "roundTrip" &&
                    <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[14%] max-w-[20%] hover:border-orange-600">
                        <div className="flex flex-row rounded-[16px] h-full w-full">
                            <div className="w-[15%] h-full">
                                <p className="font-poppinsRegular relative bottom-3 left-3 bg-white text-center w-[3.6rem]">Return</p>
                                <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                            </div>
                            <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black hover:border-orange-600">
                                <div className="flex items-center">
                                    <CustomDatePicker onSelect={(e) => handleReturnDateOfJourney(e)} ref={returnDateOfJourney} defaultDate={dateOfRetrun} minDate={today} maxDate={maxDate} placeholder={"Select Return Date"} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[14%] max-w-[20%] hover:border-orange-600">
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
                </div>
                {selectedOption === "roundTrip" &&
                    <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[14%] max-w-[20%] hover:border-orange-600">
                        <div className="flex flex-row rounded-[16px] h-full w-full">
                            <div className="w-[15%] h-full">
                                <p className="font-poppinsRegular relative bottom-3 left-3 bg-white text-center w-[6.5rem]">Drop Time</p>
                                <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" />
                            </div>
                            <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black hover:border-orange-600">
                                <div className="flex items-center">
                                    <input type="time" className="w-full h-full outline-none bg-transparent" ref={dropTimeRef} onChange={(e) => setDropTime(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="absolute top-[10.8rem] right-[40%]">
                <PrimaryButton rounded onClick={() => handleSearchCar()}>
                    <p className="w-[200px] font-poppinsRegular">Search Car</p>
                </PrimaryButton>
            </div>
        </div>

    )
}

export default CarSearchComponent;