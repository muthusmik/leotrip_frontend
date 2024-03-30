import { SetStateAction, useEffect, useState } from "react";
import { ButtonListing } from "styles/Button";
import AI from "../../../assets/images/colorful_houses_buildings_road_hd_travel.jpg";
import AIGenerated from "../../../assets/images/ai-generated.png";
import Archi from "../../../assets/images/architecture.jpg";
import Pixmo from "../../../assets/images/pixmo.jpg";
import doubletaker from "../../../assets/images/double-taker.jpg";
import Sos from "../../../assets/icons/sos.png";
import Pillow from "../../../assets/icons/pillows.png";
import Cctv from "../../../assets/icons/security-camera.png";
import Usb from "../../../assets/icons/usb.png";
import Lamp from "../../../assets/icons/table-lamp.png";

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

import Checkbox from "components/common/CheckBox";
import { ReviewButton } from "styles/Button";
import { Modal } from "styles/ModalFullHeight";
import { button } from "@material-tailwind/react";
import Search from "../../../assets/icons/icons-search.gif";
import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";

const BusList = () => {
  const [drop, setOpenDrop] = useState(false);
  const [dropphotos, setOpenDropPhotos] = useState(false);
  const [isShown, setShown] = useState(false);
  const [dropBoarding, setOpenDropBoarding] = useState(false);
  const [isChildOpen, setChildOpen] = useState(false);
  const [isLuggageOpen, setLuggageOpen] = useState(false);
  const [isPetsOpen, setPetsdOpen] = useState(false);
  const [isLiquiorOpen, setLiquiorOpen] = useState(false);
  const [isPickupOpen, setPickupOpen] = useState(false);
  const [isReview, setOpenReview] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPickupPoint, setPickUpOpen] = useState(true);
  const [isDropPoint, setDroppOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePickOpen = () => {
    setPickUpOpen(!isPickupPoint);
    setDroppOpen(!isDropPoint);
  };
  const handleDropOpen = () => {
    setDroppOpen(!isDropPoint);
    setPickUpOpen(!isPickupPoint);
  };
  return (
    <div>
      {travels.map((travel, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border border-4 rounded-2xl  my-8 hover:border-sky-700 hover:border-2 "
        >
          <div className="flex flex-row  text-center mt-10">
            <div className="flex flex-row justify-around w-[75%] ">
              <div className="font-poppinsRegular text-1xl">
                {travel.name} <br />
                <span className="text-sm font-poppinsRegular">
                  {travel.sleeperDetails}
                </span>
              </div>
              <div className="font-poppinsRegular text-xl">
                {travel.departureTime}
                <br />
                <span className=" font-poppinsRegular text-base">
                  {travel.departureDate}

                  <br />
                  {travel.departureCity}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <hr
                  className="w-[60px]  bg-black  dark:bg-black"
                  style={{ height: "2px" }}
                ></hr>
                <div className="text-base font-poppinsRegular">
                  {travel.travelHours}
                </div>
                <hr
                  className="w-[60px]  bg-black   dark:bg-black"
                  style={{ height: "2px" }}
                ></hr>
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
              <span className="line-through decoration-red-500  text-gray-400 text-base">
                {travel.offerPrice}
              </span>
            </div>
          </div>

          <div className="flex flex-row  justify-between mt-4 ">
            <div className="flex w-[60%]">
              <div className="flex  items-center mx-10">
                <div className="flex items-center bg-int-green-dark text-white rounded-xl  px-2 py-1 me-10 align-middle">
                  <div className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M12.5 0L14.5066 6.49342H21L15.7467 10.5066L17.7533 17L12.5 12.9868L7.24671 17L9.25329 10.5066L4 6.49342H10.4934L12.5 0Z"
                        fill="#fff"
                      />
                    </svg>
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
                  onClick={() => setOpenDrop(!drop)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1 ">
                      Booking policies
                    </div>
                    <div className="cursor-pointer mt-1">
                      {drop ? (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 17c.265 0 .52-.106.707-.293l7-7a1 1 0 0 0-1.414-1.414L10 14.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l7 7c.187.187.442.293.707.293z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3c.265 0 .52.106.707.293l7 7a1 1 0 0 1-1.414 1.414L10 5.414 3.707 11.707a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 10 3z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  onClick={() => setOpenDropPhotos(!dropphotos)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1 ">
                      Amenities & Photos
                    </div>
                    <div className="cursor-pointer mt-1">
                      {dropphotos ? (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 17c.265 0 .52-.106.707-.293l7-7a1 1 0 0 0-1.414-1.414L10 14.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l7 7c.187.187.442.293.707.293z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3c.265 0 .52.106.707.293l7 7a1 1 0 0 1-1.414 1.414L10 5.414 3.707 11.707a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 10 3z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  onClick={() => setOpenDropBoarding(!dropBoarding)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1 ">
                      Boarding & Dropping
                    </div>
                    <div className="cursor-pointer mt-1">
                      {dropBoarding ? (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 17c.265 0 .52-.106.707-.293l7-7a1 1 0 0 0-1.414-1.414L10 14.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l7 7c.187.187.442.293.707.293z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3c.265 0 .52.106.707.293l7 7a1 1 0 0 1-1.414 1.414L10 5.414 3.707 11.707a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 10 3z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  onClick={() => setOpenReview(!isReview)}
                  className="cursor-pointer "
                >
                  <div className="flex flex-row items-center">
                    <div className="text-base font-poppinsRegular mx-1">
                      Reviews
                    </div>
                    <div className="cursor-pointer mt-1">
                      {isReview ? (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 17c.265 0 .52-.106.707-.293l7-7a1 1 0 0 0-1.414-1.414L10 14.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l7 7c.187.187.442.293.707.293z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3c.265 0 .52.106.707.293l7 7a1 1 0 0 1-1.414 1.414L10 5.414 3.707 11.707a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 10 3z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%] flex ">
              <button className="mx-auto bg-int-sandal px-12 py-3 text-center text-white  font-semibold rounded-xl text-lg">
                <span className="font-poppinsRegular">
                  <Link to="/bus/busdetail">View Seats</Link>
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col ">
            {drop && (
              <div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5" />
                <div className="flex flex-row justify-stretch my-3 ">
                  <ButtonListing
                    onMouseEnter={() => setShown(true)}
                    onMouseLeave={() => setShown(false)}
                  >
                    CANCELLATION
                  </ButtonListing>

                  <ButtonListing
                    onMouseEnter={() => setChildOpen(true)}
                    onMouseLeave={() => setChildOpen(false)}
                  >
                    CHILD PASSENGER
                  </ButtonListing>

                  <ButtonListing
                    onMouseEnter={() => setLuggageOpen(true)}
                    onMouseLeave={() => setLuggageOpen(false)}
                  >
                    LUGGAGE
                  </ButtonListing>

                  <ButtonListing
                    onMouseEnter={() => setPetsdOpen(true)}
                    onMouseLeave={() => setPetsdOpen(false)}
                  >
                    PETS
                  </ButtonListing>

                  <ButtonListing
                    onMouseEnter={() => setLiquiorOpen(true)}
                    onMouseLeave={() => setLiquiorOpen(false)}
                  >
                    LIQOUR
                  </ButtonListing>

                  <ButtonListing
                    onMouseEnter={() => setPickupOpen(true)}
                    onMouseLeave={() => setPickupOpen(false)}
                  >
                    PICKUP TIME
                  </ButtonListing>
                </div>
              </div>
            )}
          </div>
          {dropBoarding && (
            <div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5 " />

              <div className="flex flex-row justify-around">
                <div className="  rounded-xl my-5 h-[300px] border-2 w-[50%]  overflow-y-auto">
                  <div className="flex flex-row justify-around my-2 p-0">
                    <button
                      onClick={handlePickOpen}
                      className={`${
                        isPickupPoint
                          ? "bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent font-poppinsRegular font-semibold text-base"
                          : "text-base"
                      } `}
                    >
                      BOARDING POINT
                    </button>

                    <button
                      onClick={handleDropOpen}
                      className={`${
                        isDropPoint
                          ? "bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent font-poppinsRegular font-semibold underline text-base"
                          : "text-base"
                      }`}
                    >
                      DROPING POINT
                    </button>
                  </div>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-2" />
                  {isPickupPoint && (
                    <div className="overflow-y-auto border">
                      <div className=" w-full">
                        <form className="max-w-md mx-auto w-[90%] rounded-full shadow-xl my-3">
                          <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                          >
                            Search
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <div>
                                <img
                                  src={Search}
                                  alt="Search"
                                  className="w-6 h-6 mr-2"
                                />
                              </div>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              className="  block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppinsRegular"
                              placeholder="Enter Boarding Point"
                              required
                            />
                          </div>
                        </form>
                      </div>
                      {pickup.map((pick, index) => (
                        <div key={index} className="flex flex-row mx-2">
                          <Checkbox color={"black"} className="mx-2" />
                          <div className="ps-2 font-poppinsRegular text-sm">
                            {pick}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {isDropPoint && (
                    <div className="overflow-y-auto border">
                      <div className=" w-full">
                        <form className="max-w-md mx-auto w-[90%] rounded-full shadow-xl my-3">
                          <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                          >
                            Search
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <div>
                                <img
                                  src={Search}
                                  alt="Search"
                                  className="w-6 h-6 mr-2"
                                />
                              </div>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              className="  block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppinsRegular"
                              placeholder="Enter Droping Point"
                              required
                            />
                          </div>
                        </form>
                      </div>
                      {droppoint.map((dr, index) => (
                        <div key={index} className="flex flex-row mx-2">
                          <Checkbox color={"indigo"} className="mx-2" />
                          <div className="ps-2 font-poppinsRegular text-sm">
                            {dr}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {isShown && (
            <div>
              <div className="my-5">
                <table className=" mx-auto p-3">
                  <thead>
                    <tr>
                      <th className=" w-[30%] text-center font-normal">
                        <span className="text-base font-poppinsRegular">
                          Cancellation Time <br />
                        </span>
                        <span className="font-poppinsRegular font-medium  text-xs">
                          (before departure)
                        </span>
                      </th>
                      <th className=" w-[20%] text-center font-normal text-base font-poppinsRegular">
                        Penalty %
                      </th>
                      <th className=" w-[50%] text-center  font-normal text-base font-poppinsRegular">
                        Information
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-PoppinsRegular py-5">
                    <tr className=" text-center">
                      <td className=" row-span-2"></td>
                      <td className=""></td>
                      <td className=" text-center  text-xs font-poppinsRegular">
                        * The penalty is calculated based on total seat worth
                        1300
                      </td>
                    </tr>
                    <tr className="font-normal">
                      <td className=" text-center text-xs font-poppinsRegular">
                        more than 24 hrs before travel
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        10 %
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        * Penalty is calculated basis the bus service scheduled
                        start time at: 31-10-2023 21:00 (subject to change).
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-center text-xs font-poppinsRegular">
                        12 to 24 hr(s) before travel
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        10 %
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        * Partial cancellation is not allowed for this ticket.
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-center text-xs font-poppinsRegular">
                        6 to 12 hr(s) before travel
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        50 %
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        * Please note : the ticket cannot be cancelled after the
                        bus departs from the first boarding point.
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-center text-xs font-poppinsRegular">
                        3 to 6 hr(s) before travel
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        100 %
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular"></td>
                    </tr>
                    <tr className="">
                      <td className=" text-center text-xs font-poppinsRegular">
                        0 to 3 hr(s) before travel
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        100 %
                      </td>
                      <td className=" text-center text-xs font-poppinsRegular">
                        * Cancellation amount shown above may also vary basis
                        the non-refundable components of the ticket defined by
                        the bus operator
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {isChildOpen && (
            <ul className=" flex justify-center my-5 ">
              <li className="font-poppinsRegular text-sm text-center">
                Children above the age of 5 will need a ticket
              </li>
            </ul>
          )}

          {isLuggageOpen && (
            <ul className=" flex justify-center my-5">
              <li className="font-poppinsRegular text-sm text-center">
                Excess baggage over 10 kgs per passenger will be chargeable
              </li>
            </ul>
          )}

          {isPetsOpen && (
            <ul className=" flex justify-center my-5">
              <li className="font-poppinsRegular text-sm text-center">
                Pets are not allowed
              </li>
            </ul>
          )}
          {isLiquiorOpen && (
            <ul className=" flex justify-center my-5">
              <li className="font-poppinsRegular text-sm text-center">
                Carrying or consuming liquor inside the bus is prohibited. Bus
                operator reserves the right to deboard drunk passengers.
              </li>
            </ul>
          )}
          {isPickupOpen && (
            <ul className=" flex justify-center my-5 ">
              <li className="font-poppinsRegular text-sm text-wrap text-center px-5">
                Bus operator is not obligated to wait beyond the scheduled
                departure time of the bus. No refund request will be entertained
                for late arriving passengers.
              </li>
            </ul>
          )}
          {dropphotos && (
            <div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5" />
              <div className="font-poppinsRegular">
                <span className="ms-4 mt-2">Amenities</span>
                <div className="flex flex-wrap justify-around mt-5 ">
                  <div className="flex flex-row items-center">
                    <img
                      src={Sos}
                      alt="Emergency Contact"
                      className="h-8 w-8 mx-3"
                    />
                    Emergency Contact Number
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={Usb} alt="Usb" className="h-8 w-8 mx-3" />
                    Charging Point
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={Lamp} alt="Lamp" className="h-8 w-8 mx-3" />
                    Reading Light
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={Pillow} alt="Pillow" className="h-8 w-8 mx-3" />
                    Pillow
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={Cctv} alt="Cctv" className="h-8 w-8 mx-3" />
                    CCTV
                  </div>
                </div>
              </div>
              <div className="font-poppinsRegular">
                <span className="ms-4 mt-5">Photos</span>
                <div className="flex flex-row px-5 py-3">
                  <div className="justify-stretch mt-3 p-2">
                    <img
                      src={Pixmo}
                      alt="404"
                      className="w-[100%] h-[100%] rounded-lg"
                    />
                  </div>
                  <div className=" justify-stretch mt-3 p-2">
                    <img
                      src={AIGenerated}
                      alt="404"
                      className="w-[100%] h-[100%] rounded-lg"
                    />
                  </div>
                  <div className=" justify-stretch mt-3 p-2">
                    <img
                      src={Archi}
                      alt="404"
                      className="w-[100%] h-[100%] rounded-lg"
                    />
                  </div>
                  <div className=" justify-stretch mt-3 p-2">
                    <img
                      src={doubletaker}
                      alt="404"
                      className="w-[100%] h-[100%] rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {isReview && (
            <div>
              <div className="border border-black max-w-[90%] flex flex-row my-4 mx-auto">
                <div className="w-[33.3%] border border-black p-4 ">
                  <p className="text-sm font-poppinsRegular  text-center my-1">
                    <span className="text-dark-green text-lg font-poppinsBold">
                      3.7
                    </span>
                    <span className="font-poppinsRegular text-base">
                      from 216 Rating | 54 Reviews
                    </span>
                  </p>
                  {reviews.map((review, index) => (
                    <div
                      className="flex items-center justify-center mt-4"
                      key={index}
                    >
                      <a
                        href="#"
                        className="text-base font-poppinsBold text-black"
                      >
                        {review.stars}
                      </a>
                      <div className="w-2/4 h-1 mx-4 bg-gray-50 rounded dark:bg-gray-50">
                        <div
                          className="h-1 bg-int-blue-rev rounded"
                          style={{ width: `${review.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-base font-poppinsBold text-black ">
                        {review.percentage}%
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-[33.3%] border border-black p-4">
                  <p className="font-poppinsRegular text-base">
                    People Reviews
                  </p>
                  <div className="flex flex-wrap ">
                    {reviewButton.map(({ label, count, color }) => (
                      <div className="">
                        <ReviewButton
                          key={label}
                          color={color}
                          count={count}
                          spanClassName="border border-dark-green font-poppinsRegular inline-flex items-center align-end justify-center w-6 h-6 ms-2 text-xs align-end font-semibold bg-dark-green rounded-full text-white"
                        >
                          {label}
                        </ReviewButton>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-[33.4%] border border-black p-4">
                  <p className="font-poppinsRegular text-base">
                    Could Be Better
                  </p>
                  <div className="flex flex-wrap">
                    {badReview.map(({ label, count, color }) => (
                      <ReviewButton
                        key={label}
                        color={color}
                        count={count}
                        spanClassName="inline-flex items-center align-end justify-center w-6 h-6 ms-2 text-xs align-end font-poppinsRegular bg-red-600 rounded-full"
                      >
                        {label}
                      </ReviewButton>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-row font-poppinsRegular">
                {comment.map((item, index) => (
                  <div key={index} className=" flex flex-col w-[50%] ">
                    <div className=" flex flex-row w-full rounded-full  ring-offset-2 justify-between mt-5">
                      <div className="flex flex-row">
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="rounded-full mx-3 w-12"
                        />
                        <span className="mx-3 font-PoppinsSemiBold drop-shadow-2xl flex  items-center">
                          {item.name}
                        </span>

                        <span className="mx-3 font-PoppinsBold drop-shadow-2xl flex  items-center">
                          |
                        </span>
                        <span className="mx-3 font-PoppinsSemiBold drop-shadow-2xl flex  items-center">
                          {item.date}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center bg-int-green-dark text-white rounded-lg p-1 me-10">
                          <svg
                            className="w-4 h-4 text-white-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <div className="text-xs font-poppinsRegular">
                            {travel.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">{item.status}</div>
                  </div>
                ))}
              </div>
              <div className="my-2 ">
                <hr className="border "></hr>
                <div className="flex flex-row border-gray-700 text-center">
                  <button
                    className="text-center w-full my-2 text-blue-600 cursor-pointer btn-modal"
                    onClick={toggleModal}
                  >
                    <span className="font-poppinsRegular font-semibold text-base">
                      SEE ALL REVIEWS (count)
                    </span>
                  </button>
                </div>

                <Modal isOpen={isModalOpen} onClose={toggleModal} data={data} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BusList;
