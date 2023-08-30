import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import getInCarSvg from '../../../assets/icons/getInCar.svg';
import getOutCarSvg from '../../../assets/icons/getOutCar.svg';
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import toFlightSvg from '../../../assets/icons/Toflight.svg';
import dateSvg from '../../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import TravellerCountComponent from "modules/flight/TravellerCount";

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
    { value: 'airportTransfer', label: 'Airport-transfer' },
    { value: 'hourlyRental', label: 'Hourly Rental' },
];

const CarSearchComponent = () => {

    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [selectedOption, setSelectedOption] = useState<string>('oneWay');
    const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);
    const [tripType, setTripType] = useState<string>("fromAirport");
    const [travellerData, setTravellerData] = useState({
        adultCount: 9,
        childCount: 6,
        infantCount: 6,
        class: "economy"
    })
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);

    const handleSearchCar = () => {
        console.log("WERWEEFWWEFWEfew................", fromValue, toValue, travellerData)
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
        <div className=" w-full items-center justify-between gap-6 bg-white px-2 rounded-[20px] shadow-lg">
            <div className="px-4 mt-4">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2 px-4 h-[140px]'>
                {selectedOption === 'airportTransfer' &&
                    <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[20%] max-w-[26%]">
                        <div className="flex flex-row rounded-[16px] h-[70px] px-2 w-full">
                            <div className="w-[5%]">
                                <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[140px]">Select Trip Type</h2>
                            </div>
                            <div className="w-[100%] flex flex-col justify-center px-4 ">
                                <div className="flex items-center">
                                    <select name="" id="" className="w-full" onChange={(e) => setTripType(e.target.value)}>
                                        <option value="" disabled>Select Type</option>
                                        <option value="fromAirport">From Airport</option>
                                        <option value="toAirport">To Airport</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>}
                <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={"Pickup Location"}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={selectedOption === 'airportTransfer' ? fromFlightSvg : getInCarSvg}
                    ref={fromInputRef}
                />
                <AutoSuggestionList
                    label={"To"}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={"Drop Location"}
                    data={autoCompleteData}
                    img={getOutCarSvg}
                    ref={toInputRef}
                />
                <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[20%] max-w-[40%]">
                    <div className="flex flex-row rounded-[16px] h-full px-2 w-full">
                        <div className="w-[20%]">
                            <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-full">Date</h2>
                            <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center px-4 border-l-2 border-black ">
                            <div className="flex items-center">
                                <CustomDatePicker onSelect={(e) => console.log(e)} ref={dateOfJourney} minDate={today} maxDate={maxDate} placeholder={"Pickup Date and Time"} />
                            </div>
                        </div>
                    </div>
                </div>
                {selectedOption === "roundTrip" &&
                    <div className="bg-white rounded-[10px] border-2 border-black h-[70px] min-w-[20%] max-w-[40%]">
                        <div className="flex flex-row rounded-[16px] h-full px-2 w-full">
                            <div className="w-[20%]">
                                <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-full">Date</h2>
                                <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                            </div>
                            <div className="w-[80%] flex flex-col justify-center px-4 border-l-2 border-black ">
                                <div className="flex items-center">
                                    <CustomDatePicker onSelect={(e) => console.log(e)} ref={dateOfJourney} minDate={today} maxDate={maxDate} placeholder={"Select Return Date"} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {/* <div className="bg-white rounded-[10px] border-2 border-black  hover:bg-slate-100 w-[20%] h-[70px] flex flex-col justify-center items-center">
                    <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-[80%] right-2">
                        Travellers &amp; Class
                    </h2>
                    <div className="px-2 h-full">
                        <p className="flex text-center font-poppinsRegular text-[16px] cursor-pointer rounded-[5px]" onClick={() => handleTravellerCount()} >
                            Travellers: {travellerData.adultCount + travellerData.childCount + travellerData.infantCount}<br />
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
                </div> */}
            </div>
            <div className="absolute top-[10rem] right-[38%]">
                <PrimaryButton rounded onClick={() => handleSearchCar()}>
                    <p className="w-[200px] font-poppinsRegular">Search Car</p>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default CarSearchComponent;