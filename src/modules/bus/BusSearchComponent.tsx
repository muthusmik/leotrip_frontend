import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import fromBusSvg from '../../assets/icons/frombus.svg';
import toBusSvg from '../../assets/icons/tobus.svg';
import dateSvg from '../../assets/icons/datesvg.svg';
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";

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

const BusSearchComponent = () => {

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const handleSearchBus = () => {
        console.log("WERWEEFWWEFWEfew................", fromValue, toValue)
    }
    useEffect(() => {
        if (fromValue && toInputRef.current) {
            toInputRef.current.focus();
        }
    }, [fromValue]);
    const handleFromValueChange = (newValue: any) => {
        setFromValue(newValue);

        // Move focus to the "To" input when a value is provided in "From"
        if (newValue && toInputRef.current) {
            toInputRef.current.focus();
        }
    };
    return (
        <>
            <div className='flex flex-row w-full items-center justify-between gap-6 bg-white px-10 h-[160px] rounded-[20px]'>
                <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={"Enter From city"}
                    // setValue={setFromValue}
                    setValue={handleFromValueChange} // Call the new handler
                    data={autoCompleteData}
                    img={fromBusSvg}
                    ref={fromInputRef}
                />
                <AutoSuggestionList
                    label={"To"}
                    value={toValue}
                    setValue={setToValue}
                    placeholder={"Enter To city"}
                    data={autoCompleteData}
                    img={toBusSvg}
                    ref={toInputRef}
                />
                <div className="bg-white rounded-[10px] border-2 border-black ">
                    <div className="flex flex-row rounded-[16px] h-[70px] px-2">
                        <div className="w-[20%]">
                            <h2 className="font-poppinsRegular font-semibold relative bottom-3 bg-white text-center w-full">Date</h2>
                            <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center px-4 border-l-2 border-black ">
                            <div className="flex items-center">
                                <CustomDatePicker onSelect={(e) => console.log(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[8.7rem] right-[38%]">
                <PrimaryButton rounded onClick={() => handleSearchBus()}>
                    <p className="w-[200px] font-poppinsRegular">Search Bus</p>
                </PrimaryButton>
            </div>
        </>
    )
}

export default BusSearchComponent;