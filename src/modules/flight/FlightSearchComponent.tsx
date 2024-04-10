import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import fromFlightSvg from "../../assets/icons/fromflight.svg";
import toFlightSvg from "../../assets/icons/Toflight.svg";
import dateSvg from "../../assets/icons/datesvg.svg";
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import TravellerCountComponent from "./TravellerCount";
import { useNavigate } from "react-router-dom";

// const autoCompleteData = [
//     "Asparagus",
//     "Beetroot",
//     "Broccoli",
//     "Cabbage",
//     "Carrot",
//     "Cauliflower",
//     "Celery",
//     "Corn",
//     "Eggplant",
//     "Lettuce",
//     "Mushroom",
//     "Onion",
//     "Parsnip",
//     "Pea",
//     "Potato",
//     "Pumpkin",
//     "Radish",
//     "Spinach",
//     "Tomato",
//     "Turnip",
// ];
const autoCompleteData = [
  {
    airportName: "Indira Gandhi International Airport",
    city: "Chennai",
    countryCode: "IN",
    countryFlag: "IN",
  },
  {
    airportName: "Chhatrapati Shivaji Maharaj International Airport",
    city: "Andhra",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Kempegowda International Airport",
    city: "Andhra",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Chennai International Airport",
    city: "Chennai",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Netaji Subhas Chandra Bose International Airport",
    city: "Tirupati",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
];

const options = [
  { value: "oneWay", label: "One-way" },
  { value: "roundTrip", label: "Round-trip" },
];

const FlightSearchComponent = () => {
  const navigate = useNavigate();
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

  const [travellerData, setTravellerData] = useState({
    adultCount: 1,
    childCount: 0,
    infantCount: 0,
    class: "economy",
  });
  const fromInputRef = useRef<any>(null);
  const toInputRef = useRef<any>(null);
  const dateOfJourney = useRef<any>(null);
  const returnDateOfJourney = useRef<any>(null);

  const handleSearchFlight = () => {
    if (fromValue == "") {
      setFromerrormsg("Please Select the Valid Location !");
    } else if (toValue == "") {
      setToErrormsg("Please Select the Valid Location !");
    }
    // else if ((fromValue.suggestion.airport_code).localeCompare(toValue.suggestion.airport_code) === 0) {
    //     setErrormsg('Source and Destination cannot be same');
    // }
    else {
      setErrormsg("");
      if (selectedOption === "oneWay") {
        navigate("/flight/flight-oneway", { state: options });
      } else {
        navigate("/flights/roundtripSearch", { state: options });
      }
    }
    console.log(
      "handleSearchFlight................",
      fromValue,
      toValue,
      travellerData,
      returnDate
    );
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
    } else if (selectedOption !== "roundTrip") {
      setShowTravellerDropdown(true);
    }
  };

  const handleReturnDateOfJourney = (newValue: any) => {
    setReturnDate(newValue);
    setShowTravellerDropdown(true);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="w-full items-center justify-between gap-6 bg-white px-2 rounded-[20px] shadow-lg">
      <div className="px-4 mt-4 flex">
        <RadioGroup
          type={"home"}
          options={options}
          selected={selectedOption}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-row w-full items-center justify-between gap-2 px-4 h-[140px]">
        <div className="flex flex-col w-auto">
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
          {fromValue === "" ? (
            <h6 className="flex flex-wrap text-int-red w-full">
              {fromerrormsg}
            </h6>
          ) : null}
        </div>
        <div className="flex flex-col">
          <AutoSuggestionList
            label={"To"}
            value={toValue}
            setValue={handleToValueChange}
            placeholder={"Enter To city"}
            data={autoCompleteData}
            img={toFlightSvg}
            ref={toInputRef}
          />
          {toValue === "" ? (
            <h6 className="flex flex-wrap text-int-red w-full">{toerrormsg}</h6>
          ) : null}
        </div>
        <div className="bg-white rounded-[10px] border-2 border-black w-[20%] h-[70px]  hover:bg-slate-100">
          <div className="flex flex-row rounded-[16px] h-full px-2 w-full">
            <div className="w-[20%]">
              <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[5.4rem]">
                Departure
              </p>
              <img
                src={dateSvg}
                alt="error"
                className="w-[90px] h-[43px] relative bottom-3"
              />
            </div>
            <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black ">
              <div className="flex items-center w-full h-full">
                <CustomDatePicker
                  onSelect={(e) => handleDateOfJourney(e)}
                  ref={dateOfJourney}
                  minDate={today}
                  maxDate={maxDate}
                  placeholder={"Select Date"}
                />
              </div>
            </div>
          </div>
        </div>
        {selectedOption === "roundTrip" && (
          <div className="bg-white rounded-[10px] border-2 border-black w-[20%] h-[70px]  hover:bg-slate-100">
            <div className="flex flex-row rounded-[16px] h-full px-2 w-full">
              <div className="w-[20%]">
                <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[3.5rem]">
                  Return
                </p>
                <img
                  src={dateSvg}
                  alt="error"
                  className="w-[90px] h-[43px] relative bottom-3"
                />
              </div>
              <div className="w-[80%] flex flex-col justify-center ps-4 border-l-2 border-black ">
                <div className="flex items-center w-full h-full">
                  <CustomDatePicker
                    onSelect={(e) => handleReturnDateOfJourney(e)}
                    ref={returnDateOfJourney}
                    minDate={today}
                    maxDate={maxDate}
                    placeholder={"Select Return Date"}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="bg-white rounded-[10px] border-2 border-black  hover:bg-slate-100 w-[20%] h-[70px] flex flex-col justify-center items-center">
          <p className="font-poppinsRegular relative bottom-3 bg-white text-center w-[9rem] right-[1.5rem]">
            Travellers &amp; Class
          </p>
          <div className="flex flex-row justify-center w-full h-full relative bottom-3">
            <button
              className="flex flex-row w-full h-full"
              onClick={() => setShowTravellerDropdown(true)}
              disabled={showTravellerDropdown}
            >
              <p className="flex text-center font-poppinsRegular w-[90%] h-full text-[16px] rounded-[5px] px-1">
                Travellers:{" "}
                {travellerData.adultCount +
                  travellerData.childCount +
                  travellerData.infantCount}
                <br />
                {/* {travellerData.childCount > 0 ? `, Child: ${travellerData.childCount}` : null}
                            {travellerData.infantCount > 0 ? `, Infant: ${travellerData.infantCount}` : null} */}
                Class: {travellerData.class}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-8 text-gray-700"
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
          {showTravellerDropdown && (
            <TravellerCountComponent
              travellerData={travellerData}
              setTravellerData={setTravellerData}
              setShowTravellerDropdown={setShowTravellerDropdown}
            />
          )}
        </div>
      </div>
      <div className="absolute top-[10.8rem] right-[40%]">
        <PrimaryButton rounded onClick={() => handleSearchFlight()}>
          <p className="w-[200px] font-poppinsRegular">Search Flight</p>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default FlightSearchComponent;
