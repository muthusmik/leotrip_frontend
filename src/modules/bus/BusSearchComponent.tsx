import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import fromBusSvg from "../../assets/icons/frombus.svg";
import toBusSvg from "../../assets/icons/tobus.svg";
import dateSvg from "../../assets/icons/datesvg.svg";
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";

const autoCompleteData = [
  {
    busName: "Bus A",
    origin: "Delhi",
    destination: "Mumbai",
    cityState: "Delhi, Delhi",
    country: "India",
    fare: 1500,
  },
  {
    busName: "Bus B",
    origin: "Mumbai",
    destination: "Bangalore",
    cityState: "Mumbai, Maharashtra",
    country: "India",
    fare: 2000,
  },
  {
    busName: "Bus C",
    origin: "Bangalore",
    destination: "Chennai",
    cityState: "Bangalore, Karnataka",
    country: "India",
    fare: 1800,
  },
  {
    busName: "Bus D",
    origin: "Chennai",
    destination: "Kolkata",
    cityState: "Chennai, Tamil Nadu",
    country: "India",
    fare: 2200,
  },
  {
    busName: "Bus E",
    origin: "Kolkata",
    destination: "Delhi",
    cityState: "Kolkata, West Bengal",
    country: "India",
    fare: 2500,
  },
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

  const [isLGBus, setIsLGBus] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLGBus(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="w-full my-5 bg-white px-4 pt-6 pb-5 rounded-lg shadow-lg font-poppinsRegular h-auto">
        <p className="text-xs text-center ftext-black font-bold">
          Millions of cheap Bus?
          <span className="text-[#0085f8] font-bold text-sm ps-2">
            One simple search.
          </span>
        </p>
        {!isLGBus ? (
          <div className="flex flex-col w-full md:flex md:flex-row">
            <div className="flex flex-row w-full">
              <div className="w-full sm:w-[50%] md:w-auto p-2 border mx-1 rounded-lg border-int-primary-blue my-2">
                <AutoSuggestionList
                  label={"From"}
                  value={"ja"}
                  placeholder={"Enter From city"}
                  // setValue={setFromValue}
                  setValue={handleFromValueChange}
                  data={autoCompleteData}
                  img={fromBusSvg}
                  ref={fromInputRef}
                />
              </div>
              <div className="w-full sm:w-[50%]  md:w-auto p-2 border mx-1 rounded-lg border-int-primary-blue my-2">
                <AutoSuggestionList
                  label={"To"}
                  value={toValue}
                  setValue={handleToValueChange}
                  placeholder={"Enter To city"}
                  data={autoCompleteData}
                  img={toBusSvg}
                  ref={toInputRef}
                />
              </div>
            </div>
            <div className="w-full sm:w-[100%] md:w-[30%] h-full border border-int-primary-blue rounded-lg my-2 hover:bg-int-secondary-blue  p-3">
              <div className="bg-transparent h-auto">
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
                      onSelect={(e) => handleDateValue(e)}
                      ref={dateOfJourney}
                      minDate={today}
                      maxDate={maxDate}
                      placeholder={"Select Date"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ) : (
          <div className=" border w-full flex flex-row rounded-lg ">
            <div className="w-[40%] p-2 hover:bg-int-secondary-blue lg:border-r">
              <AutoSuggestionList
                label={"From"}
                value={"ja"}
                placeholder={"Enter From city"}
                // setValue={setFromValue}
                setValue={handleFromValueChange}
                data={autoCompleteData}
                img={fromBusSvg}
                ref={fromInputRef}
              />
            </div>
            <div className="w-[40%] p-2 hover:bg-int-secondary-blue lg:border-r">
              <AutoSuggestionList
                label={"To"}
                value={toValue}
                setValue={handleToValueChange}
                placeholder={"Enter To city"}
                data={autoCompleteData}
                img={toBusSvg}
                ref={toInputRef}
              />
            </div>
            <div className="w-[30%] h-24 border-r hover:bg-int-secondary-blue  p-3">
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
                      onSelect={(e) => handleDateValue(e)}
                      ref={dateOfJourney}
                      minDate={today}
                      maxDate={maxDate}
                      placeholder={"Select Date"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        )}
        <div className="flex justify-center">
          <p
            className="rounded-full py-2 mt-3 "
            style={{
              background:
                "linear-gradient(90deg, rgba(0,140,255,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
              marginBottom: "-32px",
            }}
          >
            <button
              className="rounded w-[20%]"
              onClick={() => handleSearchBus()}
            >
              <p className="w-[200px] font-poppinsRegular font-bold text-white rounded text-center">
                SEARCH BUS
              </p>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default BusSearchComponent;
