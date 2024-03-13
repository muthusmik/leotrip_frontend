import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import fromBusSvg from "../../assets/icons/frombus.svg";
import toBusSvg from "../../assets/icons/tobus.svg";
import dateSvg from "../../assets/icons/datesvg.svg";
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
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 6);

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [date, setDate] = useState(today);
  const fromInputRef = useRef<any>(null);
  const toInputRef = useRef<any>(null);
  const dateOfJourney = useRef<any>(null);
  const handleSearchBus = () => {
    console.log("WERWEEFWWEFWEfew................", fromValue, toValue, date);
  };
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
  };

  return (
    <>
      <div className="flex flex-col w-full items-center justify-between gap-6 bg-white px-10  rounded-[20px] shadow-lg  py-2.5 sm:flex-col  sm:py-2.5 md:h-[140px] md:flex-row">
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
          setValue={handleToValueChange}
          placeholder={"Enter To city"}
          data={autoCompleteData}
          img={toBusSvg}
          ref={toInputRef}
        />
        <div className="rounded-[10px] border-2 bg-white border-black hover:bg-slate-100 max-w-[80%] sm:w-[55%] md:w-[60%] lg:max-w-[30%]">
          <div className="flex flex-row rounded-[16px] h-[70px] px-2">
            <div className="w-[20%]">
              <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-full text-xs sm:text-sm md:text-md">
                Date
              </p>
              <img
                src={dateSvg}
                alt="error"
                className="w-[90px] h-[43px] relative bottom-3"
              />
            </div>
            <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black ">
              <div className="flex items-center">
                <CustomDatePicker
                  onSelect={(e) => handleDateValue(e)}
                  ref={dateOfJourney}
                  minDate={today}
                  maxDate={maxDate}
                  placeholder={"Select your Date"}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="absolute   top-[17rem] sm:top-[17rem] md:top-[7rem] inset-x-auto ">
        <PrimaryButton rounded onClick={() => handleSearchBus()}>
          <p className="w-[200px] font-poppinsBold">Search Bus</p>
        </PrimaryButton>
      </div>
    </>
  );
};

export default BusSearchComponent;
