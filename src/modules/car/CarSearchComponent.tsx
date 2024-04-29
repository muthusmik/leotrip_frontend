import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import getInCarSvg from "../../assets/icons/getInCar.svg";
import getOutCarSvg from "../../assets/icons/getOutCar.svg";
import fromFlightSvg from "../../assets/icons/fromflight.svg";
import toFlightSvg from "../../assets/icons/Toflight.svg";
import dateSvg from "../../../assets/icons/datesvg.svg";
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RadioGroup from "components/common/RadioGroup";
import CustomSelect from "./CarSelectTripType";
import moment from "moment";
import BasicTimePicker from "components/common/CustomeTimePicker";
import TimePicker from "components/common/CustomeTimePicker";
import CustomeTimePicker from "components/common/CustomeTimePicker";
import CustomTimePicker from "components/common/CustomeTimePicker";
import { useNavigate } from "react-router-dom";

const autoCompleteData = [
  {
    carName: "Car A",
    brand: "Toyota",
    model: "Corolla",
    cityState: "Delhi, Delhi",
    country: "India",
    price: 1200000,
  },
  {
    carName: "Car B",
    brand: "Honda",
    model: "City",
    cityState: "Mumbai, Maharashtra",
    country: "India",
    price: 1300000,
  },
  {
    carName: "Car C",
    brand: "Maruti Suzuki",
    model: "Swift",
    cityState: "Bangalore, Karnataka",
    country: "India",
    price: 800000,
  },
  {
    carName: "Car D",
    brand: "Hyundai",
    model: "i20",
    cityState: "Chennai, Tamil Nadu",
    country: "India",
    price: 1000000,
  },
  {
    carName: "Car E",
    brand: "Ford",
    model: "EcoSport",
    cityState: "Kolkata, West Bengal",
    country: "India",
    price: 1500000,
  },
];

const options = [
  { value: "oneWay", label: "One Way" },
  { value: "roundTrip", label: "Round Trip" },
  { value: "airportTransfer", label: "Airport transfer" },
  { value: "hourlyRental", label: "Hourly Rental" },
];

const selectTripType = [
  { value: "fromAirport", label: "From Airport" },
  { value: "toAirport", label: "To Airport" },
];

const CarSearchComponent = () => {
  const navigate = useNavigate();
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 6);

  const dateOfRetrun = new Date();
  dateOfRetrun.setDate(today.getDate() + 1);

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("oneWay");
  const [tripType, setTripType] = useState<string>("fromAirport");
  const [fromerrormsg, setFromerrormsg] = useState("");
  const [toerrormsg, setToErrormsg] = useState("");
  const [date, setDate] = useState(today);
  const [returnDate, setReturnDate] = useState(dateOfRetrun);

  const fromInputRef = useRef<any>(null);
  const toInputRef = useRef<any>(null);
  const dateOfJourney = useRef<any>(null);
  const returnDateOfJourney = useRef<any>(null);
  const selectRef = useRef<any>(null);

  useEffect(() => {
    console.log("selecteddd======", selectedOption);
  }, [selectedOption]);
  const handleSearchCar = () => {
    if (fromValue == "") {
      setFromerrormsg("Please Select the Valid Location !");
    } else if (toValue == "") {
      setToErrormsg("Please Select the Valid Location !");
    } else {
      setToErrormsg("");
      if (selectedOption === "oneWay") {
        navigate("/flight/flight-oneway", { state: options });
      } else {
        navigate("/flights/roundtripSearch", { state: options });
      }
    }
    console.log(
      "WERWEEFWWEFWEfew................",
      fromValue,
      toValue,
      moment(date).format("DD/MM/YYYY"),
      returnDate
    );
    
  };
  useEffect(() => {
    if (tripType && fromInputRef.current) {
      fromInputRef.current.focus();
    }
  }, [tripType]);

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
    if (toValue && returnDateOfJourney.current) {
      returnDateOfJourney.current.focus();
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
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    if (value !== "airportTransfer") setTripType("");
    else setTripType("fromAirport");
  };

  const handleSelectValue = (value: string) => {
    setTripType(value);
  };

  const [showRadioGroup, setShowRadioGroup] = useState(false);

  const handleToggleRadioGroup = () => {
    setShowRadioGroup(!showRadioGroup);
  };

  useEffect(() => {
    console.log("triptype=", selectedOption);
  }, [selectedOption]);

  const handlSelectRoundTrip = () => {
    setSelectedOption("roundTrip");
  };

  const [isLGCar, setIsLGCar] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLGCar(window.innerWidth >= 1024); // Set the breakpoint for LG screens
    };

    handleResize(); // Call the function to set initial state

    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);
  return (
    <>
      <div className=" relative w-full items-center justify-between gap-6 bg-white px-2 rounded-lg  shadow-lg h-auto font-poppinsRegular mt-10">
        <div className="px-4 mt-4 flex w-full">
          <RadioGroup
            type={"home"}
            options={options}
            selected={selectedOption}
            onChange={handleOptionChange}
          />
        </div>

        <div>
          {!isLGCar ? (
            <div className="flex flex-col w-full items-center  px-4 h-auto my-2 ">
              {selectedOption === "airportTransfer" && (
                <div className="w-full  border border-int-primary-blue mx-1 my-2  p-2 rounded-lg hover:bg-int-secondary-blue">
                  <div className="w-[100%] flex flex-col justify-center px-2">
                    <p className="pt-0 mt-0">Trip Type</p>
                    <div className="flex items-center bg-transparent">
                      <select
                        name=""
                        id=""
                        className="w-full h-full outline-none font-poppinsRegular font-bold cursor-pointer text-2xl xs:text-sm sm:text-md pb-6 pt-2 bg-transparent"
                        onChange={(e) => handleSelectValue(e.target.value)}
                        ref={selectRef}
                      >
                        <option
                          value="fromAirport"
                          defaultValue={tripType}
                          className="text-xs sm:text-sm md:text-md"
                        >
                          From Airport
                        </option>
                        <option value="toAirport">To Airport</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex sm:flex-row w-full ">
                <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2  p-2 rounded-lg">
                  <div className="bg-transparent h-20">
                    <AutoSuggestionList
                      label={"From"}
                      value={fromValue}
                      placeholder={
                        selectedOption === "airportTransfer" &&
                        tripType === "fromAirport"
                          ? "Airport Name"
                          : "Pickup Location"
                      }
                      setValue={handleFromValueChange}
                      data={autoCompleteData}
                      img={
                        selectedOption === "airportTransfer" &&
                        tripType === "fromAirport"
                          ? fromFlightSvg
                          : getInCarSvg
                      }
                      ref={fromInputRef}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2  p-2 rounded-lg">
                  <div className="bg-transparent h-20">
                    <AutoSuggestionList
                      label={"To"}
                      value={toValue}
                      setValue={handleToValueChange}
                      placeholder={
                        selectedOption === "airportTransfer" &&
                        tripType === "toAirport"
                          ? "Airport Name"
                          : "Drop Location"
                      }
                      data={autoCompleteData}
                      img={
                        tripType === "toAirport" ? toFlightSvg : getOutCarSvg
                      }
                      ref={toInputRef}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex sm:flex-row w-full">
                <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2 rounded-lg hover:bg-int-secondary-blue  p-2">
                  <div className="bg-transparent h-20">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-row items-start">
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
                  <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2 rounded-lg  hover:bg-int-secondary-blue p-2">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
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
                ) : (
                  <div className="w-full sm:w-[50%] border border-int-primary-blue mx-1 my-2  rounded-lg  hover:bg-int-secondary-blue  p-2">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
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
              {selectedOption === "roundTrip" ? (
                <div className="flex flex-row w-full ">
                  <div className="hover:bg-int-secondary-blue border border-int-primary-blue rounded-lg lg:w-[20%] w-full h-full p-2 my-2 mx-1">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          <p className="font-poppinsRegular text-sm">
                            Pickup-Time
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
                      <CustomTimePicker />
                    </div>
                  </div>
                  <div className="hover:bg-int-secondary-blue border border-int-primary-blue rounded-lg lg:w-[20%] w-full h-full p-2 my-2 mx-1">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          <p className="font-poppinsRegular text-sm">
                            Pickup-Time
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
                      <CustomTimePicker />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <div className="flex flex-row border w-full rounded-lg mt-2">
                {selectedOption === "airportTransfer" && (
                  <div className="bg-white rounded-lg  w-full  p-2 hover:bg-int-secondary-blue lg:border-r">
                    <div className="flex flex-col rounded-[16px] h-[70px] px-2 w-full">
                      <div className="w-[100%] flex flex-col justify-center px-2">
                        <p className="pt-0 mt-0">Trip Type</p>
                        <div className="flex items-center ">
                          <select
                            name=""
                            id=""
                            className="w-full h-full outline-none font-poppinsRegular font-bold cursor-pointer text-2xl xs:text-sm sm:text-md pb-6 pt-2 bg-transparent"
                            onChange={(e) => handleSelectValue(e.target.value)}
                            ref={selectRef}
                          >
                            <option
                              value="fromAirport"
                              defaultValue={tripType}
                              className="text-xs sm:text-sm md:text-md"
                            >
                              From Airport
                            </option>
                            <option value="toAirport">To Airport</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="w-full p-2 hover:bg-int-secondary-blue lg:border-r">
                  <AutoSuggestionList
                    label={"From"}
                    value={fromValue}
                    placeholder={
                      selectedOption === "airportTransfer" &&
                      tripType === "fromAirport"
                        ? "Airport Name"
                        : "Pickup Location"
                    }
                    setValue={handleFromValueChange}
                    data={autoCompleteData}
                    img={
                      selectedOption === "airportTransfer" &&
                      tripType === "fromAirport"
                        ? fromFlightSvg
                        : getInCarSvg
                    }
                    ref={fromInputRef}
                  />
                </div>
                {selectedOption !== "hourlyRental" && (
                  <div className="w-full p-2 hover:bg-int-secondary-blue lg:border-r">
                    <AutoSuggestionList
                      label={"To"}
                      value={toValue}
                      setValue={handleToValueChange}
                      placeholder={
                        selectedOption === "airportTransfer" &&
                        tripType === "toAirport"
                          ? "Airport Name"
                          : "Drop Location"
                      }
                      data={autoCompleteData}
                      img={
                        tripType === "toAirport" ? toFlightSvg : getOutCarSvg
                      }
                      ref={toInputRef}
                    />
                  </div>
                )}

                <div className="w-full">
                  <div className=" h-24 border-r hover:bg-int-secondary-blue  p-3">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          <p className="font-poppinsRegular text-sm">
                            Departure
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
                </div>
                {selectedOption === "roundTrip" ? (
                  <div className="w-full">
                    <div className="h-24  hover:bg-int-secondary-blue  p-2 border-r">
                      <div className="bg-transparent h-20">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start">
                            <p className="font-poppinsRegular text-sm">
                              Return
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
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center w-full h-full justify-center"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedOption !== "airportTransfer" &&
                  selectedOption === "oneWay" ? (
                  <div className="w-full h-24  hover:bg-int-secondary-blue  p-2 border-r">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
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
                        className="text-xs font-poppinsRegular text-int-grey-60 font-bold px-5 rounded-xl"
                        onClick={handlSelectRoundTrip}
                      >
                        Tap return to unlock exclusive discounts!
                      </button>
                    </div>
                  </div>
                ) : null}
                {selectedOption === "roundTrip" ? (
                  <>
                    <div className="w-full h-24   hover:bg-int-secondary-blue  p-2 border-r">
                      <div className="bg-transparent h-20">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start">
                            <p className="font-poppinsRegular text-sm">
                              Pickup-Time
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
                        <CustomTimePicker />
                      </div>
                    </div>
                    <div className="w-full h-24   hover:bg-int-secondary-blue  p-2 ">
                      <div className="bg-transparent h-20">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start">
                            <p className="font-poppinsRegular text-sm">
                              Drop-Time
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
                        <CustomTimePicker />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-24   hover:bg-int-secondary-blue  p-3">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          <p className="font-poppinsRegular text-sm">
                            Pickup-Time
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
                      <CustomTimePicker />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="flex justify-center">
            <p
              className="rounded-full py-2 mt-3 "
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,140,255,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
                marginBottom: "-20px",
              }}
            >
              <button className="rounded " onClick={() => handleSearchCar()}>
                <p className="w-[200px] font-poppinsRegular font-bold text-white rounded">
                  SEARCH CAR
                </p>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarSearchComponent;
