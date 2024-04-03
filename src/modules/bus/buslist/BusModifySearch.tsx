import AutoSuggestionList from "components/AutoSuggestionListingPage";
import RadioGroup from "components/common/RadioGroup";
import React, { useRef, useState } from "react";
import CustomDatePicker from "../../../components/CustomdatePickerlistpage";
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
  const [errormsg, setErrormsg] = useState("");
  const [fromerrormsg, setFromerrormsg] = useState("");
  const [toerrormsg, setToErrormsg] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [date, setDate] = useState(today);
  const [returnDate, setReturnDate] = useState(dateOfRetrun);
  const [selectedOption, setSelectedOption] = useState<string>("oneWay");
  const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);
  const fromInputRef = useRef<any>(null);
  const toInputRef = useRef<any>(null);
  const dateOfJourney = useRef<any>(null);
  const returnDateOfJourney = useRef<any>(null);
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleFromValueChange = (newValue: any) => {
    setFromValue(newValue);
    if (newValue && toInputRef.current) {
      toInputRef.current.focus();
    }
  };

  const handleDateOfJourney = (newValue: any) => {
    setDate(newValue);
    if (newValue && returnDateOfJourney.current) {
      returnDateOfJourney.current.focus();
    } else if (selectedOption !== "roundTrip") {
      setShowTravellerDropdown(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-bg-blue-start to-bg-blue-end p-5  md:max-w-[100%] w-full">
      <div className="flex flex-col mdlg:flex-row my-3  align-center justify-center md:max-w-[85%] mx-auto">
        <div className="my-1 w-[60%] mx-auto">
          <AutoSuggestionList
            label={"From"}
            value={fromValue}
            placeholder={"Enter From city"}
            setValue={handleFromValueChange}
            data={autoCompleteData}
            ref={fromInputRef}
          />
        </div>
        <div className="my-1  w-[60%] mx-auto">
          <AutoSuggestionList
            label={"To"}
            value={fromValue}
            placeholder={"Enter To city"}
            setValue={handleFromValueChange}
            data={autoCompleteData}
            ref={fromInputRef}
          />
        </div>
        <div className="my-1  w-[60%] mx-auto">
          <CustomDatePicker
            onSelect={(e) => handleDateOfJourney(e)}
            ref={dateOfJourney}
            minDate={today}
            maxDate={maxDate}
            placeholder={"Departure Date"}
          />
        </div>

        <div className="my-auto  flex justify-center items-center mb-0 pb-0 mx-5 mt-5   mx-auto">
          <ButtonListOutlined>search</ButtonListOutlined>
        </div>
      </div>
    </div>
  );
};
export default FlightModifySearch;
