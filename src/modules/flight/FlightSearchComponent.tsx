import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import fromFlightSvg from '../../assets/icons/fromflight.svg';
import toFlightSvg from '../../assets/icons/Toflight.svg';
import dateSvg from '../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import TravellerCountComponent from "./TravellerCount";

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

const FlightSearchComponent = () => {

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [selectedOption, setSelectedOption] = useState<string>('oneWay');
    const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);

    const [travellerData, setTravellerData] = useState({
        adultCount: 9,
        childCount: 6,
        infantCount: 6,
        class: "economy"
    })
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);

    const handleSearchFlight = () => {
        console.log("WERWEEFWWEFWEfew................", fromValue, toValue)
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
            console.log("New value.............", dateOfJourney.current.value);
        }
    };

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    const handleTravellerCount = () => {
        if (showTravellerDropdown) {
            setShowTravellerDropdown(false)
        }
        else {
            setShowTravellerDropdown(true)
        }
    }

    return (
        <div className=" w-full items-center justify-between gap-6 bg-white px-2 rounded-[20px] border-2 border-red-600">
            <div className="px-4 mt-4">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2 px-4 h-[140px]'>
                <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={"Enter From city"}
                    // setValue={setFromValue}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={fromFlightSvg}
                    ref={fromInputRef}
                />
                <AutoSuggestionList
                    label={"To"}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={"Enter To city"}
                    data={autoCompleteData}
                    img={toFlightSvg}
                    ref={toInputRef}
                />
                <div className="bg-white rounded-[10px] border-2 border-black w-[20%]">
                    <div className="flex flex-row rounded-[16px] h-[70px] px-2 w-full">
                        <div className="w-[20%]">
                            <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-full">Date</h2>
                            <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center px-4 border-l-2 border-black ">
                            <div className="flex items-center">
                                <CustomDatePicker onSelect={(e) => console.log(e)} ref={dateOfJourney} minDate={new Date()} maxDate={new Date()} placeholder={"Select your Date"} />
                            </div>
                        </div>
                    </div>
                </div>
                {selectedOption === "roundTrip" &&
                    <div className="bg-white rounded-[10px] border-2 border-black  w-[20%]">
                        <div className="flex flex-row rounded-[16px] h-[70px] px-2 w-full">
                            <div className="w-[20%]">
                                <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-full">Date</h2>
                                <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                            </div>
                            <div className="w-[80%] flex flex-col justify-center px-4 border-l-2 border-black ">
                                <div className="flex items-center">
                                    <CustomDatePicker onSelect={(e) => console.log(e)} ref={dateOfJourney} minDate={new Date()} maxDate={new Date()} placeholder={"Select your Date"} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="bg-white rounded-[10px] border-2 border-black  hover:bg-slate-100 w-[20%] h-[70px] flex flex-col justify-center items-center">
                    <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[80%] right-2">
                        Travellers &amp; Class
                    </h2>
                    <div className="px-2 h-full">
                        <p className="flex text-center font-poppinsRegular text-[16px] cursor-pointer rounded-[5px]" onClick={() => handleTravellerCount()} >
                            Travellers: {travellerData.adultCount + travellerData.childCount + travellerData.infantCount}<br />
                            {/* {travellerData.childCount > 0 ? `, Child: ${travellerData.childCount}` : null}
                            {travellerData.infantCount > 0 ? `, Infant: ${travellerData.infantCount}` : null} */}
                            Class: {travellerData.class}
                        </p>
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
            <div className="absolute top-[10rem] right-[38%]">
                <PrimaryButton rounded onClick={() => handleSearchFlight()}>
                    <p className="w-[200px] font-poppinsRegular">Search Flight</p>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default FlightSearchComponent;