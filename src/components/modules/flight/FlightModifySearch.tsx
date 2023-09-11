import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import DateSelectionComponent from "components/common/DateSelectComponent";
import FlightTraveller from "./FlightTravellerComponent";
import fromFlightSvg from '../../../assets/icons/fromflight.svg';
import toFlightSvg from '../../../assets/icons/Toflight.svg';
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import { useNavigate } from "react-router";
import { autoCompleteData, today, maxDate, wordings } from "components/utils/constants/stringconstants/common";

const options = [
    { value: 'oneWay', label: 'One-way' },
    { value: 'roundTrip', label: 'Round-trip' },
];

const FlightModifySearchComponent = (props: any) => {
    const values = props;
    console.log("Values................", values)
    const navigate = useNavigate();

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
        <div className="w-full items-center text-white justify-between px-6 pb-2 bg-gradient-to-r from-[#3081ED] to-[#56CBF2] shadow-lg">
            <div className="mb-4 flex">
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify="true" />
            </div>
            <div className='flex flex-row w-full items-center justify-between gap-2'>
                <AutoSuggestionList
                    label={wordings.flight.fromLabel}
                    value={fromValue}
                    placeholder={wordings.flight.flightPlaceHolder}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={fromFlightSvg}
                    ref={fromInputRef}
                    usedIn="Flight"
                    modify="true"
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
                    modify="true"
                />
                <DateSelectionComponent
                    label={wordings.flight.departureDateLabel}
                    modify="true"
                    placeholder={wordings.flight.departureDatePlaceHolder}
                    defaultDate={date}
                    maxDate={maxDate}
                    minDate={today}
                    ref={dateOfJourney}
                    onSelect={handleDateOfJourney}
                />
                {selectedOption === "roundTrip" &&
                    <DateSelectionComponent
                        label={wordings.flight.returnDateLabel}
                        modify="true"
                        placeholder={wordings.flight.returnDatePlaceHolder}
                        maxDate={maxDate}
                        minDate={today}
                        defaultDate={returnDate}
                        ref={returnDateOfJourney}
                        onSelect={handleReturnDateOfJourney}
                    />
                }
                <FlightTraveller
                    showTravellerDropdown={showTravellerDropdown}
                    modify="true"
                    travellerData={travellerData}
                    setTravellerData={setTravellerData}
                    setShowTravellerDropdown={setShowTravellerDropdown}
                />
                <div>
                    <PrimaryButton outlined onClick={() => handleSearchFlight()}>
                        <p className="font-poppinsRegular">{wordings.flight.modifySearch}</p>
                    </PrimaryButton>
                </div>
            </div>
            {/* <div>
                <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} modify="true" />
            </div> */}
        </div>
    )
}

export default FlightModifySearchComponent;