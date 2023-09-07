import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import toFlightSvg from '../../../assets/icons/Toflight.svg';
import dateSvg from '../../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import TravellerCountComponent from "modules/flight/TravellerCount";
import { useNavigate } from "react-router";

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

const options = [
    { value: 'oneWay', label: 'One-way' },
    { value: 'roundTrip', label: 'Round-trip' },
];

const FlightModifySearchComponent = (props: any) => {
    const values = props;
    console.log("Values................", values)
    const navigate = useNavigate()
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);
    const dateOfRetrun = new Date();
    dateOfRetrun.setDate(today.getDate() + 1);

    const [fromValue, setFromValue] = useState(values.fromValue);
    const [toValue, setToValue] = useState(values.toValue);
    const [date, setDate] = useState(values.departureDate);
    const [returnDate, setReturnDate] = useState(values.returnDate);
    const [selectedOption, setSelectedOption] = useState<string>(values.selectedOption);
    const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);

    const [travellerData, setTravellerData] = useState({
        adultCount: values.travellerData.adultCount,
        childCount: values.travellerData.childCount,
        infantCount: values.travellerData.infantCount,
        class: values.travellerData.class
    })
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);
    const returnDateOfJourney = useRef<any>(null);

    const handleSearchFlight = () => {
        console.log("handleSearchFlight................", fromValue, toValue, travellerData, returnDate)

    }

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
        if (selectedOption === "roundTrip") {
            if (date && returnDateOfJourney.current) {
                returnDateOfJourney.current.focus();
            }
        }
    }, [date]);

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
        if (newValue && returnDateOfJourney.current) {
            returnDateOfJourney.current.focus();
        }
        else if (selectedOption !== "roundTrip") {
            setShowTravellerDropdown(true)
        }
    };

    const handleReturnDateOfJourney = (newValue: any) => {
        setReturnDate(newValue);
        setShowTravellerDropdown(true)
    };

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <div className="w-full items-center text-white justify-between px-6 bg-gradient-to-r from-sky-600 to-slate-600 shadow-lg">
            <div className="my-4 flex">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify="true" />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2'>
                <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={"Enter City or Airport"}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={fromFlightSvg}
                    ref={fromInputRef}
                    usedIn="Flight"
                    modify="true"
                />
                <AutoSuggestionList
                    label={"To"}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={"Enter City or Airport"}
                    data={autoCompleteData}
                    img={toFlightSvg}
                    ref={toInputRef}
                    usedIn="Flight"
                    modify="true"
                />
                <div className="w-[20%] h-[70px]">
                    <div className="flex flex-row rounded-[16px] h-full w-full">
                        <div className="w-[15%] h-full">
                            <p className="font-poppinsRegular relative bottom-3 left-3 text-center w-[5.4rem]">Departure</p>
                            {/* <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" /> */}
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ps-4">
                            <div className="flex items-center w-full h-full">
                                <CustomDatePicker onSelect={(e) => handleDateOfJourney(e)} ref={dateOfJourney} defaultDate={today} minDate={today} maxDate={maxDate} placeholder={"Select Date"} />
                            </div>
                        </div>
                    </div>
                </div>
                {selectedOption === "roundTrip" &&
                    <div className=" w-[20%] h-[70px] ">
                        <div className="flex flex-row rounded-[16px] h-full w-full">
                            <div className="w-[15%] h-full">
                                <p className="font-poppinsRegular relative bottom-3 left-3 text-center w-[3.5rem]">Return</p>
                                {/* <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" /> */}
                            </div>
                            <div className="w-[80%] flex flex-col justify-center ps-4">
                                <div className="flex items-center w-full h-full">
                                    <CustomDatePicker onSelect={(e) => handleReturnDateOfJourney(e)} ref={returnDateOfJourney} defaultDate={today} minDate={today} maxDate={maxDate} placeholder={"Select Return Date"} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="w-[20%] h-[70px] flex flex-col">
                    <p className="font-poppinsRegular relative bottom-3 w-[9rem]">
                        Travellers &amp; Class
                    </p>
                    <div className="flex flex-row justify-center w-full h-full relative bottom-3">
                        <button className="flex flex-row w-full h-full" onClick={() => setShowTravellerDropdown(true)} disabled={showTravellerDropdown}>
                            <p className={`flex text-center font-poppinsRegular w-[90%] h-full text-[16px] rounded-[5px] px-1`}>
                                Travellers: {travellerData.adultCount + travellerData.childCount + travellerData.infantCount}<br />
                                {/* {travellerData.childCount > 0 ? `, Child: ${travellerData.childCount}` : null}
                                {travellerData.infantCount > 0 ? `, Infant: ${travellerData.infantCount}` : null} */}
                                Class: {travellerData.class}
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
                    {showTravellerDropdown &&
                        <TravellerCountComponent
                            modify="true"
                            travellerData={travellerData}
                            setTravellerData={setTravellerData}
                            setShowTravellerDropdown={setShowTravellerDropdown}
                        />
                    }
                </div>
                <div>
                    <PrimaryButton outlined onClick={() => handleSearchFlight()}>
                        <p className="font-poppinsRegular">Search</p>
                    </PrimaryButton>
                </div>
            </div>
            {/* <div className="mb-4 flex">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify="true" />
            </div> */}
        </div>
    )
}

export default FlightModifySearchComponent;