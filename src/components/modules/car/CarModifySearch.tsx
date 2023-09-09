import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import DateSelectionComponent from "components/common/DateSelectComponent";
import TripSelectionComponent from "./TripSelectionComponent";
import getInCarSvg from '../../../assets/icons/getInCar.svg';
import getOutCarSvg from '../../../assets/icons/getOutCar.svg';
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import toFlightSvg from '../../../assets/icons/Toflight.svg';
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import TimeSelectionComponent from "components/common/TimeSelectionComponent";
import moment from "moment";
import { autoCompleteData, today, maxDate, wordings } from "components/utils/constants/stringconstants/common";

const options = [
    { value: 'oneWay', label: 'One-way' },
    { value: 'roundTrip', label: 'Round-trip' },
    { value: 'airportTransfer', label: 'Airport-transfer' },
    { value: 'hourlyRental', label: 'Hourly Rental' },
];

const CarModifySearchComponent = (props: any) => {
    const values = props;
    console.log("Props in carModifySearchComponent...................", values);

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
        <div className="w-full items-center justify-center text-white px-6 bg-gradient-to-r from-[#3081ED] to-[#56CBF2] shadow-lg">
            <div className="my-4 flex">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify='true' />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2'>
                {selectedOption === 'airportTransfer' &&
                    <TripSelectionComponent
                        label={wordings.car.tripSelectionLabel}
                        modify="true"
                        tripType={tripType}
                        onChange={handleSelectValue}
                        ref={selectRef}
                    />
                }
                <div className="w-[14rem]">
                    <AutoSuggestionList
                        label={wordings.car.fromLabel}
                        value={fromValue}
                        placeholder={selectedOption === 'airportTransfer' && tripType === "fromAirport" ? wordings.car.autoPlaceHolderAirport : wordings.car.autoPlaceHolderPickup}
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
                        placeholder={selectedOption === 'airportTransfer' && tripType === "toAirport" ? wordings.car.autoPlaceHolderAirport : wordings.car.autoPlaceHolderDrop}
                        data={autoCompleteData}
                        img={tripType === "toAirport" ? toFlightSvg : getOutCarSvg}
                        ref={toInputRef}
                        usedIn={"Car"}
                        modify="true"
                    />
                </div>
                <DateSelectionComponent
                    label={wordings.car.dateDepLabel}
                    modify="true"
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
                        modify="true"
                        placeholder={wordings.car.dateReturnPlaceHolder}
                        defaultDate={returnDate}
                        maxDate={maxDate}
                        minDate={today}
                        ref={returnDateOfJourney}
                        onSelect={handleReturnDateOfJourney}
                    />
                    // <div className="h-[70px] min-w-[14%] max-w-[20%]">
                    //     <div className="flex flex-row rounded-[16px] h-full w-full">
                    //         <div className="w-[15%] h-full">
                    //             <p className="font-poppinsRegular relative bottom-3 left-3  text-center w-[3.6rem]">Return</p>
                    //             <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                    //         </div>
                    //         <div className="w-[80%] flex flex-col justify-center ps-4">
                    //             <div className="flex items-center">
                    //                 <CustomDatePicker onSelect={(e) => handleReturnDateOfJourney(e)} ref={returnDateOfJourney} defaultDate={returnDate} minDate={today} maxDate={maxDate} placeholder={"Select Return Date"} />
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                }
                <TimeSelectionComponent
                    label={wordings.car.timePickupLabel}
                    modify='true'
                    ref={pickUpTimeRef}
                    onChange={(e) => setPickupTime(e)}
                />
                {/* <div className="h-[70px] min-w-[14%] max-w-[20%]">
                    <div className="flex flex-row rounded-[16px] h-full w-full">
                        <div className="w-[15%] h-full">
                            <p className="font-poppinsRegular relative bottom-3 left-3  text-center w-[6.5rem]">Pickup-Time</p>
                            <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ps-4">
                            <div className="flex items-center">
                                <input type="time" className="w-full h-full outline-none bg-transparent" ref={pickUpTimeRef} onChange={(e) => setPickupTime(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div> */}
                {selectedOption === "roundTrip" &&
                    <TimeSelectionComponent
                        label={wordings.car.timeDropLabel}
                        modify='true'
                        ref={dropTimeRef}
                        onChange={(e) => setDropTime(e)}
                    />
                    // <div className="h-[70px] min-w-[14%] max-w-[20%]">
                    //     <div className="flex flex-row rounded-[16px] h-full w-full">
                    //         <div className="w-[15%] h-full">
                    //             <p className="font-poppinsRegular relative bottom-3 left-3  text-center w-[6.5rem]">Drop Time</p>
                    //             <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" />
                    //         </div>
                    //         <div className="w-[80%] flex flex-col justify-center ps-4">
                    //             <div className="flex items-center">
                    //                 <input type="time" className="w-full h-full outline-none bg-transparent" ref={dropTimeRef} onChange={(e) => setDropTime(e.target.value)} />
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                }
                <div>
                    <PrimaryButton outlined onClick={() => handleSearchCar()}>
                        <p className="font-poppinsRegular">{wordings.car.modifySearch}</p>
                    </PrimaryButton>
                </div>
            </div>
        </div>

    )
}

export default CarModifySearchComponent;