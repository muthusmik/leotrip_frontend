import React, { useEffect, useState } from "react";
import { ButtonListing } from "styles/Button";
import { ReviewButton } from "styles/Button";
import { Modal } from "styles/ModalFullHeight";
import Checkbox from "components/common/CheckBox";
import SeatLayout from "./SeatLayout";
import { Link } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import BusAmenities from "./Amenities";

import {
  travels,
  reviewButton,
  pickup,
  droppoint,
  comment,
  reviews,
  data,
  badReview,
} from "./json";

import AI from "../../../assets/images/colorful_houses_buildings_road_hd_travel.jpg";
import RatingStar from "../../../assets/icons/ratingstar.svg";
import Arrowup from "../../../assets/icons/arrow-up.svg";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import Search from "../../../assets/icons/icons-search.gif";
import BookingPolicies from "./BookingPolicies";
import Boarding from "./Boarding";
import Review from "./Review";

const BusList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSeat, setSelectedSeat] = useState(0);
  const [showFareDetails, setShowFareDetails] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [visibleAmenities, setVisibleAmenities] = useState<boolean[]>([]);
  const [VisibleBoarding, setVisibleBoarding] = useState<boolean[]>([]);
  const [VisibleReview, setVisibleReview] = useState<boolean[]>([]);
  const [VisibleSeat, setVisibleSeat] = useState<boolean[]>([]);
  useEffect(() => {
    const initialVisibility = travels.map(() => false);
    setVisibleItems(initialVisibility);
  }, []);

  const toggleVisibility = (index: number) => {
    const updatedVisibility = [...visibleItems];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleItems(updatedVisibility);
  };

  useEffect(() => {
    const initialAmenities = travels.map(() => false);
    setVisibleAmenities(initialAmenities);
  }, []);

  const toggleAmenities = (index: number) => {
    const updatedAmenities = [...visibleAmenities];
    updatedAmenities[index] = !updatedAmenities[index];
    console.log();
    setVisibleAmenities(updatedAmenities);
  };

  useEffect(() => {
    const initialBoarding = travels.map(() => false);
    setVisibleBoarding(initialBoarding);
  }, []);

  const toggleBoarding = (index: number) => {
    const updatedBoarding = [...VisibleBoarding];
    updatedBoarding[index] = !updatedBoarding[index];
    console.log();
    setVisibleBoarding(updatedBoarding);
  };

  useEffect(() => {
    const initialReview = travels.map(() => false);
    setVisibleReview(initialReview);
  }, []);

  const toggleReview = (index: number) => {
    const updatedReview = [...VisibleReview];
    updatedReview[index] = !updatedReview[index];
    setVisibleReview(updatedReview);
  };

  useEffect(() => {
    const initialSeat = travels.map(() => false);
    setVisibleSeat(initialSeat);
  }, []);

  const toggleSeat = (index: number) => {
    const updatedSeat = [...VisibleSeat];
    updatedSeat[index] = !updatedSeat[index];
    setVisibleSeat(updatedSeat);
  };

  useEffect(() => {
    console.log("visibleItems", VisibleSeat);
  }, [VisibleSeat]);

  const handleClickFare = () => {
    setShowFareDetails(true);
  };

  const handleCloseFare = () => {
    setShowFareDetails(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {travels.map((travel, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border border-4 font-poppinsRegular rounded-2xl my-8 hover:border-sky-700 hover:border-2"
        >
          <div className="flex flex-row text-center mt-10">
            <div className="flex flex-row justify-around w-[75%]">
              <div className="font-poppinsRegular text-1xl">
                {travel.name} <br />
                <span className="text-sm font-poppinsRegular">
                  {travel.sleeperDetails}
                </span>
              </div>
              <div className="font-poppinsRegular text-xl">
                {travel.departureTime}
                <br />
                <span className="font-poppinsRegular text-base">
                  {travel.departureDate}
                  <br />
                  {travel.departureCity}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <hr
                  className="w-[60px] bg-black dark:bg-black"
                  style={{ height: "2px" }}
                />
                <div className="text-base font-poppinsRegular">
                  {travel.travelHours}
                </div>
                <hr
                  className="w-[60px] bg-black dark:bg-black"
                  style={{ height: "2px" }}
                />
              </div>
              <div className="font-poppinsRegular text-xl">
                {travel.arrivalTime}
                <br />
                <span className="text-base font-poppinsRegular">
                  {travel.arrivalDate}
                  <br />
                  {travel.arrivalCity}
                </span>
              </div>
            </div>
            <div className="font-semibold w-[25%]">
              <span className="text-int-dark-red text-xl">{travel.price}</span>
              <br />
              <span className="line-through decoration-red-500 text-gray-400 text-base">
                {travel.offerPrice}
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex w-[60%]">
              <div className="flex items-center mx-10">
                <div className="flex items-center bg-int-green-dark text-white rounded-xl px-2 py-1 me-10 align-middle">
                  <div className="flex items-center ">
                    <img
                      src={RatingStar}
                      alt="Rating Star"
                      className="h-4 w-4"
                    />
                    <span className="text-lg font-poppinsRegular">
                      {travel.rating}
                    </span>
                  </div>
                </div>
                <div className="font-poppinsRegular text-sm">{`${travel.totalRating} Ratings`}</div>
              </div>
            </div>
            <div className="flex items-center text-sm font-poppinsRegular mx-auto w-[30%]">
              {`${travel.seatsLeft} Seats Left | ${travel.windowsSeatsLeft} Windows seats`}
            </div>
          </div>
          <hr className="h-0.5 bg-black border-0 w-full mt-4" />

          <div className="flex flex-row  mt-3  my-5 items-center">
            <div className="flex flex-row justify-around w-[75%]">
              <div className="relative">
                <div
                  onClick={() => toggleVisibility(index)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1 ">
                      Booking policies
                    </div>
                    <div className="cursor-pointer mt-1">
                      {visibleItems[index] ? (
                        <img
                          src={ArrowDown}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleVisibility(index)}
                        />
                      ) : (
                        <img
                          src={Arrowup}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleVisibility(index)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  onClick={() => toggleAmenities(index)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1 ">
                      Amenities & Photos
                    </div>
                    <div className="cursor-pointer mt-1">
                      {visibleAmenities[index] ? (
                        <img
                          src={ArrowDown}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleAmenities(index)}
                        />
                      ) : (
                        <img
                          src={Arrowup}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleAmenities(index)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  onClick={() => toggleBoarding(index)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1 ">
                      Boarding & Dropping
                    </div>
                    <div className="cursor-pointer mt-1">
                      {VisibleBoarding[index] ? (
                        <img
                          src={ArrowDown}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleBoarding(index)}
                        />
                      ) : (
                        <img
                          src={Arrowup}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleBoarding(index)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  onClick={() => toggleReview(index)}
                  className="cursor-pointer "
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1">
                      Reviews
                    </div>
                    <div className="cursor-pointer mt-1">
                      {VisibleReview[index] ? (
                        <img
                          src={ArrowDown}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleReview(index)}
                        />
                      ) : (
                        <img
                          src={Arrowup}
                          alt="404"
                          className="fill-current h-4 w-4"
                          onClick={() => toggleReview(index)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%] flex ">
              <button
                className="mx-auto bg-int-sandal px-12 py-3 text-center text-white  font-semibold rounded-xl text-lg"
                onClick={() => toggleSeat(index)}
              >
                <span className="font-poppinsRegular">
                  {VisibleSeat[index] ? "Hide Seats" : "View Seats"}
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col ">
            {visibleItems[index] && <BookingPolicies />}
          </div>

          <div className="flex flex-col ">
            {visibleAmenities[index] && <BusAmenities />}
          </div>

          <div className="flex flex-col ">
            {VisibleBoarding[index] && (
              <div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5 " />

                <div className="flex flex-row justify-around">
                  <div className="  rounded-xl my-5 h-[300px] border-2 w-[50%]  overflow-y-auto">
                    <div className="border ">
                      <Boarding />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col ">
            {VisibleReview[index] && <Review />}
          </div>

          <div className="flex flex-col">
            {VisibleSeat[index] && (
              <div>
                <div className="flex flex-row  w-[60%] ">
                  <h1 className=" ms-7">(8) Seats available</h1>
                  <button className="shadow-xl text-sm bg-white border rounded px-4 py-1 ms-20 me-3">
                    All (8)
                  </button>
                  <button className="shadow-xl text-sm bg-white border rounded px-4 py-1 mx-3">
                    ₹ 900 (4)
                  </button>
                  <button className="shadow-xl text-sm bg-white border rounded px-4 py-1 mx-3 bg-gradient-to-r from-blue-700 to-sky-400">
                    ₹1100 (4)
                  </button>
                </div>
                <div className="flex flex-row justify-around">
                  <div className="max-w-[47%]  m-2">
                    <SeatLayout setSelectedSeat={setSelectedSeat} />
                    <div className="">
                      <div className="flex flex-row justify-between">
                        <div className="ms-10">
                          <Checkbox color={"black"} className="mx-2" />
                          <label
                            htmlFor={"filter"}
                            className="mx-2 font-medium font-poppinsRegular"
                          >
                            Available seats
                          </label>
                        </div>
                        <div className="me-10">
                          <Checkbox color={"red"} className="mx-2" />
                          <label
                            htmlFor={"filter"}
                            className="mx-2 font-medium font-poppinsRegular"
                          >
                            Booked seats
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between mt-2">
                        <div className="ms-10">
                          <Checkbox color={"grey"} className="mx-2" />
                          <label
                            htmlFor={"filter"}
                            className="mx-2 font-medium font-poppinsRegular"
                          >
                            Available for Female
                          </label>
                        </div>
                        <div className="me-8">
                          <Checkbox color={"green"} className="mx-2" />
                          <label
                            htmlFor={"filter"}
                            className="mx-2 font-medium font-poppinsRegular"
                          >
                            Selected seats
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[47%]  m-6">
                    <div className=" h-[400px] overflow-y-auto border-2  border-[#B1B1B1] rounded-tl rounded-tr">
                      <Boarding />
                    </div>
                    <div className="border-2 border-t-0 border-[#B1B1B1] flex justify-between px-10 rounded-bl rounded-br">
                      <div>
                        Seleted Seats
                        <p>UL - {selectedSeat > 0 ? selectedSeat : "0"}</p>
                      </div>
                      <div>
                        <p className="font-semibold"> ₹ 1200</p>
                        <button
                          className="text-int-blue-dark"
                          onClick={handleClickFare}
                        >
                          <span className="text-int-blue-dark text-sm me-10">
                            Fare Details
                          </span>
                        </button>
                      </div>
                    </div>
                    <div>
                      {showFareDetails && (
                        <div className="  mt-5">
                          <div className="bg-white border-2 border-[#B1B1B1]  w-[60%] mx-auto  shadow-xl rounded-lg p-5">
                            <div className="flex justify-between">
                              <p>Base Fare</p>
                              <p>₹ 1000</p>
                            </div>
                            <hr className=" h-0.5 mx-auto  bg-light-black my-2"></hr>
                            <div className="flex justify-between">
                              <p>Operater GST</p>
                              <p>₹ 100</p>
                            </div>
                            <hr className=" h-0.5 mx-auto  bg-light-black my-2"></hr>
                            <div className="flex justify-between">
                              <p>Total Fare</p>
                              <p>₹ 1100</p>
                            </div>

                            <button
                              onClick={handleCloseFare}
                              className="bg-[#51b9f1] px-2 text-white font-poppinsRegular rounded-lg mx-auto flex mt-3"
                            >
                              close
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <button className="mx-auto bg-int-sandal px-12 py-3 text-center text-white  font-semibold rounded-xl text-lg mx-auto my-3 flex">
                      <span className="font-poppinsRegular ">
                        <Link to="/bus/busdetail">Continue</Link>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusList;
