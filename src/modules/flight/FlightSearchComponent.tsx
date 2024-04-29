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
import Swap from "../../assets/icons/swap.png";

const autoCompleteData = [
  {
    airportName: "Indira Gandhi International Airport",
    city: "New Delhi",
    airportCode: "DEL",
    countryCode: "IN",
    countryFlag: "IN",
  },
  {
    airportName: "Chhatrapati Shivaji Maharaj International Airport",
    city: "Mumbai",
    airportCode: "BOM",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Bengaluru International Airport India",
    city: "Andhra",
    airportCode: "BLR",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Chennai International Airport",
    city: "Chennai",
    airportCode: "MAA",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Chennai International Airport",
    city: "Chennai",
    airportCode: "MAA",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Chennai International Airport",
    city: "Chennai",
    airportCode: "MAA",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
  {
    airportName: "Netaji Subhas Chandra Bose International Airport",
    city: "Kolkata",
    airportCode: "CCU",
    countryCode: "IN",
    countryFlag: ":flag-in:",
  },
];

const options = [
  { value: "oneWay", label: "One Way" },
  { value: "roundTrip", label: "Round Trip" },
];

const optionsFares = [
  { value: "Regular", label: "Regular", fares: "Regular fares" },
  { value: "Student", label: "Student", fares: "Extra discounts/baggage" },
  { value: "Doctor", label: "Doctor", fares: "up to ₹600 off" },
  { value: "Senior Citizen", label: "Senior Citizen", fares: "up to ₹600 off" },
  { value: "Armed Forces", label: "Armed Forces", fares: "up to ₹600 off" },
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
  const [selectedFare, setSelectedFare] = useState<string | null>(null);

  const handleOptionChangeValue = (value: string) => {
    setSelectedFare(value);
  };

  const [travellerData, setTravellerData] = useState({
    adultCount: 1,
    childCount: 0,
    infantCount: 0,
    class: "Economy",
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
    } else {
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
    console.log("from vlu", fromValue);
    console.log("to value=", toValue);
  }, [fromValue, toValue]);

  const handleChangeValue = () => {
    if (fromValue && toValue) {
      const temp = fromValue;
      setFromValue(toValue);
      setToValue(temp);

      fromInputRef.current.value = toValue;
      toInputRef.current.value = fromValue;
      fromInputRef.current.focus();
      toInputRef.current.focus();
    }
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
    if (fromValue && toValue) {
      fromInputRef.current.value = fromValue;
      toInputRef.current.value = toValue;
    }
  }, [fromValue, toValue]);

  useEffect(() => {
    if (selectedOption === "roundTrip") {
      if (date && returnDateOfJourney.current) {
        returnDateOfJourney.current.focus();
      }
    }
  }, [date]);
  useEffect(() => {
    console.log("fromval=====", fromValue);
  }, [fromValue]);

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

  const handlSelectRoundTrip = () => {
    setSelectedOption("roundTrip");
  };

  const [isLG, setIsLG] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLG(window.innerWidth >= 1024); // Set the breakpoint for LG screens
    };

    handleResize(); // Call the function to set initial state

    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);
  return (
    <div className="relative w-full items-center border border-white  justify-between gap-6 bg-white rounded-lg shadow-lg h-auto font-poppinsRegular pt-10">
      <div className="px-5">
        <div className="flex items-end justify-between">
          <div className="px-4 flex">
            <RadioGroup
              type={"home"}
              options={options}
              selected={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
          <p className="text-end text-xs hidden md:block">
            Book International and Domestic Flights
          </p>
        </div>
        {/*<div>
                <button
                  className="absolute  top-24 bg-white h-7  w-7 rounded-full shadow-xl border z-50"
                  onClick={handleChangeValue}
                  style={{ left: "269px" }}
                >
                  <img src={Swap} alt="swap" className="" />
                </button>
            </div>*/}
        <div className="py-3">
          {!isLG ? (
            <>
              <div className="flex flex-col sm:flex sm:flex-row w-full ">
                <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2  p-2 rounded-lg">
                  <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={"Enter From city"}
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={fromFlightSvg}
                    ref={fromInputRef}
                  />

                  {fromValue === "" && (
                    <h6 className="flex flex-wrap text-int-red w-full">
                      {fromerrormsg}
                    </h6>
                  )}
                </div>

                <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 p-2 rounded-lg my-2">
                  <AutoSuggestionList
                    label={"To"}
                    value={toValue}
                    setValue={handleToValueChange}
                    placeholder={"Enter To city"}
                    data={autoCompleteData}
                    img={toFlightSvg}
                    ref={toInputRef}
                  />

                  {toValue === "" && (
                    <h6 className="flex flex-wrap text-int-red w-full">
                      {toerrormsg}
                    </h6>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex sm:flex-row w-full">
                <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2 rounded-lg hover:bg-int-secondary-blue  p-2">
                  <div className="bg-transparent h-20">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-row items-start">
                        {/* Wrapper for text and icon */}
                        <p className="font-poppinsRegular text-sm">Departure</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#008cff]"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 9l4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center w-full h-full justify-center text-sm">
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
                {selectedOption === "roundTrip" ? (
                  <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2 rounded-lg  hover:bg-int-secondary-blue p-2">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          {/* Wrapper for text and icon */}
                          <p className="font-poppinsRegular text-sm">Return</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#008cff]"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6 9l4 4 4-4" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center w-full h-full justify-center">
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
                ) : (
                  <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2  rounded-lg  hover:bg-int-secondary-blue  p-2">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          {/* Wrapper for text and icon */}
                          <p className="font-poppinsRegular text-sm">Return</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#008cff]"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6 9l4 4 4-4" />
                          </svg>
                        </div>
                      </div>

                      <button
                        className="text-xxs sm:text-xs font-poppinsRegular text-int-grey-60 font-bold px-0 xl:px-3 rounded-xl"
                        onClick={handlSelectRoundTrip}
                      >
                        <span className="text-center mx-auto">
                          Tap return to unlock exclusive discounts!
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="hover:bg-int-secondary-blue border border-int-primary-blue rounded-lg lg:w-[20%] h-full p-2 my-2">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start">
                    {/* Wrapper for text and icon */}
                    <p className="font-poppinsRegular text-sm">
                      Travellers &amp; Class
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#008cff]"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l4 4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row  w-full">
                  <button
                    className="flex flex-col w-full h-full"
                    onClick={() => setShowTravellerDropdown(true)}
                    disabled={showTravellerDropdown}
                  >
                    <div className="flex flex-row mx-auto">
                      <p className="flex font-poppinsRegular  text-2xl font-bold rounded-[5px] text-center items-center mx-auto px-1">
                        {travellerData.adultCount +
                          travellerData.childCount +
                          travellerData.infantCount}
                      </p>
                      <p className="text-xl font-normal align-baseline">
                        Travellers
                      </p>
                    </div>

                    <div className="flex flex-row items-center justify-center    mx-auto align-middle space-x-6">
                      <div className="text-xs align-middle font-poppinsRegular">
                        {travellerData.class}
                      </div>
                    </div>
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
            </>
          ) : (
            <div className="flex flex-row border w-full rounded-lg mt-2">
              <div className="w-[25%] p-2 hover:bg-int-secondary-blue lg:border-r">
                <AutoSuggestionList
                  label={"From"}
                  value={fromValue}
                  placeholder={"Enter From city"}
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

              <div className="w-[25%] p-2 hover:bg-int-secondary-blue lg:border-r ">
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
                  <h6 className="flex flex-wrap text-int-red w-full">
                    {toerrormsg}
                  </h6>
                ) : null}
              </div>

              <div className="w-[15%] h-full border-r hover:bg-int-secondary-blue  p-3">
                <div className="bg-transparent h-20">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start">
                      {/* Wrapper for text and icon */}
                      <p className="font-poppinsRegular text-sm">Departure</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#008cff]"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l4 4 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center w-full h-full justify-center">
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
              {selectedOption === "roundTrip" ? (
                <div className="w-[15%] h-full over:bg-int-secondary-blue border-r p-3">
                  <div className="bg-transparent h-20">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-row items-start">
                        {/* Wrapper for text and icon */}
                        <p className="font-poppinsRegular text-sm">Return</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#008cff]"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 9l4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center w-full h-full justify-center">
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
              ) : (
                <div className="w-[15%] h-full border-r  hover:bg-int-secondary-blue  p-3">
                  <div className="bg-transparent h-20">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-row items-start">
                        {/* Wrapper for text and icon */}
                        <p className="font-poppinsRegular text-sm">Return</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#008cff]"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 9l4 4 4-4" />
                        </svg>
                      </div>
                    </div>

                    <button
                      className="text-xxs font-poppinsRegular text-int-grey-60 font-bold  rounded-xl"
                      onClick={handlSelectRoundTrip}
                    >
                      Tap return to unlock exclusive discounts!
                    </button>
                  </div>
                </div>
              )}
              <div className="hover:bg-int-secondary-blue border lg:border-0 lg:w-[20%] h-full p-3">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start">
                    {/* Wrapper for text and icon */}
                    <p className="font-poppinsRegular text-sm">
                      Travellers &amp; Class
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#008cff]"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l4 4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row  w-full">
                  <button
                    className="flex flex-col w-full h-full"
                    onClick={() => setShowTravellerDropdown(true)}
                    disabled={showTravellerDropdown}
                  >
                    <div className="flex flex-row mx-auto">
                      <p className="flex font-poppinsRegular  text-2xl font-bold rounded-[5px] text-center items-center mx-auto px-1">
                        {travellerData.adultCount +
                          travellerData.childCount +
                          travellerData.infantCount}
                      </p>
                      <p className="text-xl font-normal align-baseline">
                        Travellers
                      </p>
                    </div>

                    <div className="flex flex-row items-center justify-center    mx-auto align-middle space-x-6">
                      <div className="text-xs align-middle font-poppinsRegular">
                        {travellerData.class}
                      </div>
                    </div>
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
          )}
        </div>
        {/*!isLG ? (
            <div>
              <div className="flex cursor-pointer items-start flex flex-col mt-3">
                <div className="me-3 flex flex-row">
                  <h1 className="font-bold text-   text-int-grey-60 ">
                    SELECT A SPECIAL FARE
                  </h1>
                  <p
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,140,255,1) 0%, rgba(9,9,121,1) 0%)",
                    }}
                    className="text-center text-wrap rounded text-xs px-0.5 text-white font-bold mx-2"
                  >
                    EXTRA SAVINGS
                  </p>
                </div>
                <div className="flex flex-row overflow-y-auto">
                  {optionsFares.map((option) => (
                    <div
                      key={option.value}
                      className={`p-3 mt-4 mr-4 border rounded-lg ${
                        selectedFare === option.value
                          ? "border-int-primary-blue bg-int-secondary-blue text-int-primary-blue"
                          : "bg-white"
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={option.value}
                          value={option.value}
                          checked={selectedFare === option.value}
                          onChange={() => handleOptionChangeValue(option.value)}
                          className="mr-2 h-4 w-4 bg-int-primary-blue"
                        />
                        <label htmlFor={option.value}>{option.label}</label>
                      </div>
                      <div>
                        <p className="text-xs ms-5 text-black">
                          {option.fares}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null*/}

        <div className="flex justify-center">
          <p
            className="rounded-full py-2 mt-3 "
            style={{
              background:
                "linear-gradient(90deg, rgba(0,140,255,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
              marginBottom: "-20px",
            }}
          >
            <button
              className="rounded w-[20%]"
              onClick={() => handleSearchFlight()}
            >
              <p className="w-[200px] font-poppinsRegular font-bold text-white rounded">
                SEARCH FLIGHT
              </p>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchComponent;
