import React, { useState, useEffect, useRef } from "react";
import AutoSuggestionList from "components/AutoSuggestionList";
import locationSvg from "../../assets/icons/locationSymbol.svg";
import dateSvg from "../../assets/icons/datesvg.svg";
import CustomDatePicker from "components/common/CustomdatePicker";
import { PrimaryButton } from "styles/Button";
import RoomGuestCountComponent from "./RoomGuestCountComponent";
import { useNavigate } from "react-router-dom";

const autoCompleteData = [
  {
    hotelName: "Hotel A",
    city: "Delhi",
    country: "India",
    starRating: 4,
  },
  {
    hotelName: "Hotel B",
    city: "Mumbai",
    country: "India",
    starRating: 3,
  },
  {
    hotelName: "Hotel C",
    city: "Bangalore",
    country: "India",
    starRating: 5,
  },
  {
    hotelName: "Hotel D",
    city: "Chennai",
    country: "India",
    starRating: 2,
  },
  {
    hotelName: "Hotel E",
    city: "Kolkata",
    country: "India",
    starRating: 4,
  },
];

const HotelSearchComponent = () => {
  const navigate = useNavigate();
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 6);
  const dateOfRetrun = new Date();
  dateOfRetrun.setDate(today.getDate() + 1);

  const [errormsg, setErrormsg] = useState("");
  const [fromerrormsg, setFromerrormsg] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState(dateOfRetrun);
  const [roomGuestDropdown, showRoomGuestDropdown] = useState(false);
  const [roomGuestCount, setRoomGuestCount] = useState({
    roomCount: 1,
    adultCount: 1,
    childCount: 0,
  });

  const fromInputRef = useRef<any>(null);
  const checkInRef = useRef<any>(null);
  const checkOutRef = useRef<any>(null);

  useEffect(() => {
    if (fromValue && checkInRef.current) {
      checkInRef.current.focus();
    }
  }, [fromValue]);

  useEffect(() => {
    if (checkInDate && checkOutRef.current) {
      checkOutRef.current.focus();
    }
  }, [checkInDate]);

  const handleFromValueChange = (newValue: any) => {
    setFromValue(newValue);
    if (newValue && checkInRef.current) {
      checkInRef.current.focus();
    }
  };

  const handleCheckInDate = (newValue: any) => {
    setCheckInDate(newValue);
    if (newValue && checkOutRef.current) {
      checkOutRef.current.focus();
    }
  };

  const handleCheckOutDate = (newValue: any) => {
    setCheckOutDate(newValue);
    showRoomGuestDropdown(true);
  };

  const handleSearchHotel = () => {
    if (fromValue == "") {
      setFromerrormsg("Please Select the Valid Location !");
    } else {
      setErrormsg("");
      navigate("/hotel/hotelList");
    }
  };

  const handleRoomGuestDropdown = () => {
    showRoomGuestDropdown(false);
  };

  const [isLGHotel, setIsLGHotel] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLGHotel(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="w-full items-center justify-between gap-4 bg-white  rounded-lg  h-auto pt-10">
        <div className="px-10">
          <p className="text-xs text-center ftext-black font-bold mt-0 hidden">
            Unmatched luxury, unbeatable prices. Guaranteed!
          </p>
          {!isLGHotel ? (
            <>
              <div className="flex flex-col  w-full rounded-lg mt-2">
                <div className=" sm:flex sm:flex-row flex  flex-col w-full ">
                  <div className="sm:w-[50%] w-full border border-int-primary-blue mx-1 h-20 rounded-lg my-2 sm:my-0 p-2 hover:bg-int-secondary-blue">
                    <AutoSuggestionList
                      label={"Location"}
                      value={fromValue}
                      placeholder={"Where you want to stay"}
                      setValue={handleFromValueChange}
                      data={autoCompleteData}
                      img={locationSvg}
                      ref={fromInputRef}
                    />
                  </div>
                  <div className="sm:w-[50%] my-2 sm:my-0 w-full border border-int-primary-blue mx-1 hover:bg-int-secondary-blue  h-20 rounded-lg flex flex-col  items-start p-3">
                    <div className="flex flex-row items-start">
                      <p className="font-poppinsRegular text-sm">
                        Guests &amp; Rooms
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
                    <div className="flex justify-center w-full h-full relative bottom-2">
                      <button
                        className="flex flex-row w-full h-full justify-center"
                        onClick={() => showRoomGuestDropdown(true)}
                        disabled={roomGuestDropdown}
                      >
                        <div className="flex flex-row mt-2 ">
                          <p className="flex text-center  font-poppinsRegular text-pretty justify-center items-center  h-full  px-1">
                            <span className="text-2xl font-bold">
                              {roomGuestCount.roomCount}
                            </span>
                            <span className="ms-2 text-sm">Rooms</span>
                            <span className=" text-2xl font-bold  ms-0.5 md:ms-2">
                              {roomGuestCount.adultCount}
                            </span>
                            <span className="ms-2 text-sm">Adults</span>
                            {roomGuestCount.childCount > 0
                              ? ` Child: ${roomGuestCount.childCount}`
                              : null}
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                  {roomGuestDropdown && (
                    <RoomGuestCountComponent
                      roomGuestCount={roomGuestCount}
                      setRoomGuestCount={setRoomGuestCount}
                      showRoomGuestDropdown={showRoomGuestDropdown}
                    />
                  )}
                </div>
                <div className="w-full flex flex-col sm:flex sm:flex-row b">
                  <div className="w-full sm:w-[50%] h-20 rounded-lg border-int-primary-blue border hover:bg-int-secondary-blue  p-3 mx-1 my-2">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          {/* Wrapper for text and icon */}
                          <p className="font-poppinsRegular text-sm">
                            Check In
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
                            onSelect={(e) => handleCheckInDate(e)}
                            ref={checkInRef}
                            minDate={today}
                            maxDate={maxDate}
                            placeholder={"Select Check-In Date"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-[50%] h-20 border-int-primary-blue rounded-lg my-2  border mx-1 hover:bg-int-secondary-blue  p-3">
                    <div className="bg-transparent h-20">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start">
                          {/* Wrapper for text and icon */}
                          <p className="font-poppinsRegular text-sm">
                            Check-Out
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
                            onSelect={(e) => handleCheckOutDate(e)}
                            ref={checkOutRef}
                            minDate={dateOfRetrun}
                            maxDate={maxDate}
                            placeholder={"Select Check-Out Date"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-row border w-full rounded-lg mt-2">
              <div className="w-[27%] p-2 hover:bg-int-secondary-blue lg:border-r">
                <AutoSuggestionList
                  label={"Location"}
                  value={fromValue}
                  placeholder={"Where you want to stay"}
                  // setValue={setFromValue}
                  setValue={handleFromValueChange} // Call the new handler
                  data={autoCompleteData}
                  img={locationSvg}
                  ref={fromInputRef}
                />
              </div>
              <div className="w-[23%] h-24 border-r hover:bg-int-secondary-blue  p-3">
                <div className="bg-transparent h-20">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start">
                      {/* Wrapper for text and icon */}
                      <p className="font-poppinsRegular text-sm"> Check-In</p>

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
                        onSelect={(e) => handleCheckInDate(e)}
                        ref={checkInRef}
                        minDate={today}
                        maxDate={maxDate}
                        placeholder={"Select Check-In Date"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[23%] h-24 border-r hover:bg-int-secondary-blue  p-3">
                <div className="bg-transparent h-20">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start">
                      {/* Wrapper for text and icon */}
                      <p className="font-poppinsRegular text-sm"> Check-Out</p>

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
                        onSelect={(e) => handleCheckOutDate(e)}
                        ref={checkOutRef}
                        minDate={dateOfRetrun}
                        maxDate={maxDate}
                        placeholder={"Select Check-Out Date"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[27%]  hover:bg-int-secondary-blue  h-auto flex flex-col  items-start p-3">
                <div className="flex flex-row items-start">
                  <p className="font-poppinsRegular text-sm">
                    Guests &amp; Rooms
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
                <div className="flex justify-center w-full h-full relative bottom-2">
                  <button
                    className="flex flex-row w-full h-full justify-center"
                    onClick={() => showRoomGuestDropdown(true)}
                    disabled={roomGuestDropdown}
                  >
                    <div className="flex flex-row mx-auto mt-2">
                      <p className="flex text-center w-[90%] font-poppinsRegular text-lg justify-center items-end  h-full rounded-[5px] px-1">
                        <span className=" text-2xl font-bold">
                          {roomGuestCount.roomCount}
                        </span>
                        <p className="ms-2 text-md">Rooms</p>
                        <span className=" text-2xl font-bold ms-2">
                          {roomGuestCount.adultCount}
                        </span>
                        <p className="ms-2 text-md">Adults</p>
                        {roomGuestCount.childCount > 0
                          ? ` Child: ${roomGuestCount.childCount}`
                          : null}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              {roomGuestDropdown && (
                <RoomGuestCountComponent
                  roomGuestCount={roomGuestCount}
                  setRoomGuestCount={setRoomGuestCount}
                  showRoomGuestDropdown={showRoomGuestDropdown}
                />
              )}
            </div>
          )}

          <div className="flex justify-center">
            <p
              className="rounded-full py-2 mt-3 "
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,140,255,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
                marginBottom: "-25px",
              }}
            >
              <button
                className="rounded w-[20%]"
                onClick={() => handleSearchHotel()}
              >
                <p className="w-[200px] font-poppinsRegular font-bold text-white rounded text-center">
                  SEARCH HOTEL
                </p>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelSearchComponent;
