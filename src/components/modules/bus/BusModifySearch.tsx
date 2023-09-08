import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import DateSelectionComponent from "components/common/DateSelectComponent";
import fromBusSvg from '../../../assets/icons/frombus.svg';
import toBusSvg from '../../../assets/icons/tobus.svg';
import { PrimaryButton } from "styles/Button";
import { autoCompleteData } from "components/utils/constants/stringconstants/common";

const BusModifySearchComponent = (props: any) => {
    const values = props;
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);

    const [fromValue, setFromValue] = useState(values.fromValue);
    const [toValue, setToValue] = useState(values.toValue);
    const [date, setDate] = useState(values.departureDate)
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);
    const handleSearchBus = () => {
        console.log("WERWEEFWWEFWEfew................", fromValue, toValue, date)
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
        if (newValue && toInputRef.current && !toValue) {
            toInputRef.current.focus();
        }
    };

    const handleToValueChange = (newValue: any) => {
        setToValue(newValue);
        if (newValue && dateOfJourney.current && !date) {
            dateOfJourney.current.focus();
        }
    };

    const handleDateValue = (newValue: any) => {
        setDate(newValue);
    }

    return (
        <div className='flex flex-row w-full h-[8rem] items-center justify-between text-white px-6 bg-gradient-to-r from-[#3081ED] to-[#56CBF2] shadow-lg'>
            <div className="relative top-4 flex flex-wrap w-[86%] justify-between">
                <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={"Enter Source"}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={fromBusSvg}
                    ref={fromInputRef}
                    usedIn="Bus"
                    modify="true"
                />
                <AutoSuggestionList
                    label={"To"}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={"Enter Destination"}
                    data={autoCompleteData}
                    img={toBusSvg}
                    ref={toInputRef}
                    usedIn="Bus"
                    modify='true'
                />
                <DateSelectionComponent
                    label="Travel Date"
                    modify="true"
                    placeholder="Select your Date"
                    defaultDate={date}
                    maxDate={maxDate}
                    minDate={today}
                    ref={dateOfJourney}
                    onSelect={handleDateValue}
                />
            </div>
            <div>
                <PrimaryButton outlined onClick={() => handleSearchBus()}>
                    <p className="font-poppinsRegular">Search</p>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default BusModifySearchComponent;