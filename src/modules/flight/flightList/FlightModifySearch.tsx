import AutoSuggestionList from "components/AutoSuggestionListingPage";
import RadioGroup from "components/common/RadioGroup";
import React, { useRef, useState } from "react";
import CustomDatePicker from "../../../components/CustomdatePickerlistpage";
import TravellerCountComponent from "../TravellerCount";
import { ButtonListOutlined } from "styles/Button";
import Checkbox from "components/common/CheckBox";
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
        <div className="bg-gradient-to-r from-bg-blue-start to-bg-blue-end p-5">
            <div className="mx-5">
                <div className=" flex">
                    <RadioGroup type={'list'} options={options} selected={selectedOption} onChange={handleOptionChange} />
                </div>
                <div className="flex flex-col mdlg:flex-row my-3 hover:flex-row">
                    <div className="my-1">
                        <AutoSuggestionList
                            label={"From"}
                            value={fromValue}
                            placeholder={"Enter From city"}
                            // setValue={setFromValue}
                            setValue={handleFromValueChange}
                            data={autoCompleteData}
                            ref={fromInputRef} />
                    </div>
                    <div className="my-1">
                        <AutoSuggestionList
                            label={"To"}
                            value={fromValue}
                            placeholder={"Enter To city"}
                            // setValue={setFromValue}
                            setValue={handleFromValueChange}
                            data={autoCompleteData}
                            ref={fromInputRef} />
                    </div>
                    <div className="my-1">
                        <CustomDatePicker onSelect={(e) => handleDateOfJourney(e)} ref={dateOfJourney} minDate={today} maxDate={maxDate} placeholder={"Departure Date"} />
                    </div>
                    {selectedOption === "roundTrip" &&
                        <div className="my-1">
                            <CustomDatePicker onSelect={(e) => handleDateOfJourney(e)} ref={dateOfJourney} minDate={today} maxDate={maxDate} placeholder={"Return Date"} />
                        </div>
                    }
                    <div className="my-1">
                        <div className="mx-5">
                            <p className="font-poppinsRegular  text-white">
                                Travellers
                            </p>
                            <div className="flex flex-row justify-center w-full h-full  bottom-3 bg-int-blue">
                                <button className="flex flex-row w-full h-full justify-center items-center " onClick={() => setShowTravellerDropdown(true)} disabled={showTravellerDropdown}>
                                    <p className="flex text-center font-poppinsRegular  ps-3 justify-center text-white">
                                        Travellers
                                        {/* {travellerData.adultCount + travellerData.childCount + travellerData.infantCount}<br /> */}
                                        {/* {travellerData.childCount > 0 ? `, Child: ${travellerData.childCount}` : null}
                            {travellerData.infantCount > 0 ? `, Infant: ${travellerData.infantCount}` : null} */}
                                        {/* Class: {travellerData.class} */}
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-full w-8 text-white"
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
                    <div className="my-auto  flex justify-center items-center mb-0 pb-0 mx-5 mt-5">
                        <ButtonListOutlined >search</ButtonListOutlined>
                    </div>
                </div>
                <div className="flex flex-col mdlg:flex-row mt-5">
                    <div className="flex mx-3">
                        <Checkbox color={'indigo'} />
                        <p className="text-white mx-3">Defence Forces</p>
                    </div>
                    <div className="flex mx-3">
                        <Checkbox color={'indigo'} />
                        <p className="text-white mx-3">Students</p>
                    </div>
                    <div className="flex mx-3">
                        <Checkbox color={'indigo'} />
                        <p className="text-white mx-3">Senior Citizens</p>
                    </div>
                    <div className="flex mx-3">
                        <Checkbox color={'indigo'} />
                        <p className="text-white mx-3">Doctors Nurses</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default FlightModifySearch;