import AutoSuggestionList from "components/AutoSuggestionListingPage";
import RadioGroup from "components/common/RadioGroup";
import React, { useRef, useState } from "react";
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import TravellerCountComponent from "../TravellerCount";
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
const FlightModifySearch = () => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);
    const dateOfRetrun = new Date();
    dateOfRetrun.setDate(today.getDate() + 1);
    const [errormsg, setErrormsg] = useState('');
    const [fromerrormsg, setFromerrormsg] = useState('');
    const [toerrormsg, setToErrormsg] = useState('');
    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [date, setDate] = useState(today);
    const [returnDate, setReturnDate] = useState(dateOfRetrun);
    const [selectedOption, setSelectedOption] = useState<string>('oneWay');
    const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);
    const returnDateOfJourney = useRef<any>(null);
    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };
    const options = [
        { value: 'oneWay', label: 'One-Way' },
        { value: 'roundTrip', label: 'Round-Trip' },
    ];
    const handleFromValueChange = (newValue: any) => {
        setFromValue(newValue);
        if (newValue && toInputRef.current) {
            toInputRef.current.focus();
        }
    };
    const [travellerData, setTravellerData] = useState({
        adultCount: 1,
        childCount: 0,
        infantCount: 0,
        class: "economy"
    })
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


    return (
        <div className="bg-gradient-to-r from-bg-blue-start to-bg-blue-end">
            <div className="container">
                <div className="px-4 mt-4 flex">
                    <RadioGroup type={'list'} options={options} selected={selectedOption} onChange={handleOptionChange} />
                </div>
                <div className="flex flex-row mx-5 mt-5">
                    <div>
                        <div className="flex flex-col">
                            <AutoSuggestionList
                                label={"From"}
                                value={fromValue}
                                placeholder={"Enter From city"}
                                // setValue={setFromValue}
                                setValue={handleFromValueChange}
                                data={autoCompleteData}
                                // img={fromFlightSvg}
                                ref={fromInputRef}
                            />
                            {(fromValue === '') ? <h6 className="flex flex-wrap text-int-red w-full">{fromerrormsg}</h6> : null}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <AutoSuggestionList
                                label={"To"}
                                value={toValue}
                                setValue={handleToValueChange}
                                placeholder={"Enter To city"}
                                data={autoCompleteData}
                                // img={toFlightSvg}
                                ref={toInputRef}
                            />
                            {(toValue === '') ? <h6 className="flex flex-wrap text-int-red w-full">{toerrormsg}</h6> : null}
                        </div>
                    </div>
                    <div className="border border-int-blue border-2   h-[50%] bg-int-blue">
                        <div className="flex items-center w-full h-full">
                            <CustomDatePicker onSelect={(e) => handleDateOfJourney(e)} ref={dateOfJourney} minDate={today} maxDate={maxDate} placeholder={"Select Date"} />
                        </div>
                    </div>
                    {selectedOption === "roundTrip" &&
                        <div className="border border-int-blue border-2  h-[50%] bg-int-blue ms-3">
                            <div className="flex items-center w-full h-full">
                                <CustomDatePicker onSelect={(e) => handleReturnDateOfJourney(e)} ref={returnDateOfJourney} minDate={today} maxDate={maxDate} placeholder={"Select Return Date"} />
                            </div>
                        </div>
                    }
                    <div className="border border-int-blue border-2  h-[50%] bg-int-blue ms-3">
                        <div className="flex flex-row justify-center w-full h-full relative mt-2">
                            <button className="flex flex-row " onClick={() => setShowTravellerDropdown(true)} disabled={showTravellerDropdown}>
                                <p className="flex text-center font-poppinsRegular ">
                                    Travellers: {travellerData.adultCount + travellerData.childCount + travellerData.infantCount}<br />
                                    {/* {travellerData.childCount > 0 ? `, Child: ${travellerData.childCount}` : null}
                            {travellerData.infantCount > 0 ? `, Infant: ${travellerData.infantCount}` : null} */}
                                    {/* Class: {travellerData.class} */}
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
                                travellerData={travellerData}
                                setTravellerData={setTravellerData}
                                setShowTravellerDropdown={setShowTravellerDropdown}
                            />
                        }
                    </div>
                </div>
                <div></div>
            </div>
        </div >
    );
}
export default FlightModifySearch;