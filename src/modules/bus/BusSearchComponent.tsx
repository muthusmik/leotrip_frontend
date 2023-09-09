import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import DateSelectionComponent from "components/common/DateSelectComponent";
import fromBusSvg from '../../assets/icons/frombus.svg';
import toBusSvg from '../../assets/icons/tobus.svg';
import { PrimaryButton } from "styles/Button";
import { useNavigate } from "react-router-dom";
import { autoCompleteData, wordings, today, maxDate } from "components/utils/constants/stringconstants/common";

const BusSearchComponent = () => {
    const navigate = useNavigate();

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [date, setDate] = useState(today)
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);

    const handleSearchBus = () => {
        const values = {
            'fromValue': fromValue,
            'toValue': toValue,
            'departureDate': date,
        }
        console.log("WERWEEFWWEFWEfew................", fromValue, toValue, date)
        navigate("/busShow", { state: values })
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
            console.log("New value.............", dateOfJourney.current);

        }
    };

    const handleDateValue = (newValue: any) => {
        setDate(newValue);
    }

    return (
        <>
            <div className='flex flex-row w-full items-center justify-between gap-6 bg-white px-10 h-[160px] rounded-[20px] shadow-lg'>
                <AutoSuggestionList
                    label={wordings.bus.fromLabel}
                    value={fromValue}
                    placeholder={wordings.bus.placeholderSource}
                    setValue={handleFromValueChange} // Call the new handler
                    data={autoCompleteData}
                    img={fromBusSvg}
                    ref={fromInputRef}
                    usedIn="Bus"
                    modify="false"
                />
                <AutoSuggestionList
                    label={wordings.bus.toLabel}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={wordings.bus.placeholderDestination}
                    data={autoCompleteData}
                    img={toBusSvg}
                    ref={toInputRef}
                    usedIn="Bus"
                    modify='false'
                />
                <DateSelectionComponent
                    label={wordings.bus.travelDate}
                    modify="false"
                    placeholder={wordings.bus.travelDatePlaceholder}
                    defaultDate={today}
                    maxDate={maxDate}
                    minDate={today}
                    ref={dateOfJourney}
                    onSelect={handleDateValue}
                />
            </div>
            <div className="absolute top-[8rem] right-[40%]">
                <PrimaryButton rounded onClick={() => handleSearchBus()}>
                    <p className="w-[200px] py-1 font-poppinsRegular text-xl">{wordings.bus.searchBus}</p>
                </PrimaryButton>
            </div>
        </>
    )
}

export default BusSearchComponent;