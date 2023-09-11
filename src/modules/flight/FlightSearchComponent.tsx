import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import DateSelectionComponent from "components/common/DateSelectComponent";
import FlightTraveller from "components/modules/flight/FlightTravellerComponent";
import fromFlightSvg from '../../assets/icons/fromflight.svg';
import toFlightSvg from '../../assets/icons/Toflight.svg';
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import { useNavigate } from "react-router";
import { autoCompleteData } from "components/utils/constants/stringconstants/common";
import { wordings, today, maxDate, dateOfRetrun } from "components/utils/constants/stringconstants/common";

const options = [
    { value: 'oneWay', label: 'One-way' },
    { value: 'roundTrip', label: 'Round-trip' },
];

const FlightSearchComponent = () => {
    const navigate = useNavigate();

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [date, setDate] = useState(today);
    const [returnDate, setReturnDate] = useState(dateOfRetrun);
    const [selectedOption, setSelectedOption] = useState<string>('oneWay');
    const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);

    const [travellerData, setTravellerData] = useState({
        adultCount: 1,
        childCount: 0,
        infantCount: 0,
        class: "economy"
    })
    const fromInputRef = useRef<any>(null);
    const toInputRef = useRef<any>(null);
    const dateOfJourney = useRef<any>(null);
    const returnDateOfJourney = useRef<any>(null);

    const handleSearchFlight = () => {
        const values = {
            'selectedOption': selectedOption,
            'fromValue': fromValue,
            'toValue': toValue,
            'travellerData': travellerData,
            'departureDate': date,
            'returnDate': returnDate
        }
        console.log("handleSearchFlight................", values)
        navigate("/flightShow", { state: values })
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
        <div className="w-full items-center justify-between gap-6 bg-white px-2 rounded-[20px] shadow-lg">
            <div className="px-4 mt-4 flex">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify="false" />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2 px-4 h-[140px]'>
                <AutoSuggestionList
                    label={wordings.flight.fromLabel}
                    value={fromValue}
                    placeholder={wordings.flight.flightPlaceHolder}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={fromFlightSvg}
                    ref={fromInputRef}
                    usedIn="Flight"
                    modify="false"
                />
                <AutoSuggestionList
                    label={wordings.flight.toLabel}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={wordings.flight.flightPlaceHolder}
                    data={autoCompleteData}
                    img={toFlightSvg}
                    ref={toInputRef}
                    usedIn="Flight"
                    modify='false'
                />
                <DateSelectionComponent
                    label={wordings.flight.departureDateLabel}
                    modify="false"
                    placeholder={wordings.flight.departureDatePlaceHolder}
                    maxDate={maxDate}
                    minDate={today}
                    defaultDate={today}
                    ref={dateOfJourney}
                    onSelect={handleDateOfJourney}
                />
                {selectedOption === "roundTrip" &&
                    <DateSelectionComponent
                        label={wordings.flight.returnDateLabel}
                        modify="false"
                        placeholder={wordings.flight.returnDatePlaceHolder}
                        maxDate={maxDate}
                        minDate={today}
                        defaultDate={today}
                        ref={returnDateOfJourney}
                        onSelect={handleReturnDateOfJourney}
                    />
                }
                <FlightTraveller
                    showTravellerDropdown={showTravellerDropdown}
                    modify="false"
                    travellerData={travellerData}
                    setTravellerData={setTravellerData}
                    setShowTravellerDropdown={setShowTravellerDropdown}
                />
            </div>
            <div className="absolute top-[10.8rem] right-[40%]">
                <PrimaryButton rounded onClick={() => handleSearchFlight()}>
                    <p className="w-[200px] py-1 font-poppinsRegular text-xl">{wordings.flight.searchFlight}</p>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default FlightSearchComponent;