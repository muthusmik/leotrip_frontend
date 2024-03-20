import { useState } from "react";
import { ButtonListing } from "styles/Button";
import AI from "../../../assets/images/colorful_houses_buildings_road_hd_travel.jpg";
import AIGenerated from "../../../assets/images/ai-generated.png";
import Archi from "../../../assets/images/architecture.jpg";
import Pixmo from "../../../assets/images/pixmo.jpg";
import doubletaker from "../../../assets/images/double-taker.jpg";
import { travels } from "./json";
import Checkbox from "components/common/CheckBox";
import { pickup } from "./json";
import { droppoint } from "./json";
import { reviews } from "./json";

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

  return (
    <div className="mx-5">
      {travels.map((travel, index) => (
        <div
          key={index}
          className="flex flex-col bg-white  rounded-2xl p-8 my-8 hover:border-sky-700 shadow-2xl"
        >
          <div className="flex flex-row justify-between text-center">
            <div>
              {travel.name} <br />
              {travel.sleeperDetails}
            </div>
            <div>
              {travel.departureTime}
              <br />
              {travel.departureDate}
              <br />
              {travel.departureCity}
            </div>
            <div className="flex items-center space-x-4">
              <hr className="w-[70px] h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div>{travel.travelHours}</div>
              <hr className="w-[70px] h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            <div>
              {travel.arrivalTime} <br />
              {travel.arrivalDate}
              <br />
              {travel.arrivalCity}
            </div>
            <div className="">
              <span className="text-int-red">{travel.price}</span>
              <br />
              <span className="line-through decoration-red-500">
                {travel.offerPrice}
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex items-center ">
              <div className="flex items-center bg-int-green-dark text-white rounded-3 p-3 me-10">
                <svg
                  className="w-4 h-4 text-white-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <div className="text-sm font-bold">{travel.rating}</div>
              </div>
              <div>{`${travel.totalRating} Ratings`}</div>
            </div>

            <div className="flex items-center">
              {`${travel.seatsLeft} Seats Left | ${travel.windowsSeatsLeft} Windows seats`}
            </div>
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5" />
          <div className="flex flex-row justify-between mt-3">
            <div className="relative ">
              <div
                onClick={() => setOpenDrop(!drop)}
                className="cursor-pointer"
              >
                Bus policies
                <div className="cursor-pointer absolute inset-y-0 left-20 flex items-center px-2 text-gray-700">
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
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                onClick={() => setOpenDropPhotos(!dropphotos)}
                className="cursor-pointer"
              >
                Bus Photos
                <div className="cursor-pointer absolute inset-y-0 left-20 flex items-center px-2 text-gray-700">
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
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                onClick={() => setOpenDropBoarding(!dropBoarding)}
                className="cursor-pointer"
              >
                Boarding & Dropping
                <div className="cursor-pointer absolute inset-y-0 left-40 flex items-center px-2 text-gray-700">
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
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                onClick={() => setOpenReview(!isReview)}
                className="cursor-pointer"
              >
                Reviews
                <div className="cursor-pointer absolute inset-y-0 left-14 flex items-center px-2 text-gray-700">
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
                </div>
              </div>
            </div>
            <button>View Seats</button>
          </div>
          <div className="flex flex-col ">
            {drop && (
              <div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5" />
                <div className="flex flex-row justify-stretch mt-3 ">
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
                <div className=" border-2 rounded-xl mt-3 h-[300px] w-[45%] px-2 py-3 overflow-y-auto">
                  <div>
                    <div>
                      {pickup.map((pick, index) => (
                        <div key={index} className="flex flex-row">
                          <Checkbox color={"black"} />
                          <div className="ps-2">{pick}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className=" border-2 rounded-xl mt-3 h-[300px] w-[45%] px-2 py-3 overflow-y-auto">
                  <div>
                    <div>
                      {droppoint.map((dr, index) => (
                        <div key={index} className="flex flex-row">
                          <Checkbox color={"black"} />
                          <div className="ps-2">{dr}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isShown && (
            <div>
              <div className="mt-5">
                <table className=" mx-auto">
                  <thead>
                    <tr>
                      <th className=" w-[30%] text-center">
                        Cancellation Time <br />
                        (before departure)
                      </th>
                      <th className=" w-[20%] text-center">Penalty %</th>
                      <th className=" w-[50%] text-center">Information :</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" text-center">
                      <td className=" row-span-2"></td>
                      <td className=""></td>
                      <td className=" text-center">
                        * The penalty is calculated based on total seat worth
                        1300
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-center">
                        more than 24 hrs before travel
                      </td>
                      <td className=" text-center">10 %</td>
                      <td className=" text-center">
                        * Penalty is calculated basis the bus service scheduled
                        start time at: 31-10-2023 21:00 (subject to change).
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-center">
                        12 to 24 hr(s) before travel
                      </td>
                      <td className=" text-center">10 %</td>
                      <td className=" text-center">
                        * Partial cancellation is not allowed for this ticket.
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-center">
                        6 to 12 hr(s) before travel
                      </td>
                      <td className=" text-center">50 %</td>
                      <td className=" text-center">
                        * Please note : the ticket cannot be cancelled after the
                        bus departs from the first boarding point.
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-center">
                        3 to 6 hr(s) before travel
                      </td>
                      <td className=" text-center">100 %</td>
                      <td className=" text-center"></td>
                    </tr>
                    <tr className="">
                      <td className=" text-center">
                        0 to 3 hr(s) before travel
                      </td>
                      <td className=" text-center">100 %</td>
                      <td className=" text-center">
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
            <ul className="list-disc flex justify-center mt-5">
              <li>Children above the age of 5 will need a ticket</li>
            </ul>
          )}

          {isLuggageOpen && (
            <ul className="list-disc flex justify-center mt-5">
              <li>
                Excess baggage over 10 kgs per passenger will be chargeable
              </li>
            </ul>
          )}

          {isPetsOpen && (
            <ul className="list-disc flex justify-center mt-5">
              <li>Pets are not allowed</li>
            </ul>
          )}

          {isLiquiorOpen && (
            <ul className="list-disc flex justify-center mt-5">
              <li>
                Carrying or consuming liquor inside the bus is prohibited. Bus
                operator reserves the right to deboard drunk passengers.
              </li>
            </ul>
          )}

          {isPickupOpen && (
            <ul className="list-disc flex justify-center mt-5">
              <li>
                Bus operator is not obligated to wait beyond the scheduled
                departure time of the bus. No refund request will be entertained
                for late arriving passengers.
              </li>
            </ul>
          )}

          {dropphotos && (
            <div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5" />
              <div className="flex flex-row">
                <div className="justify-stretch mt-3 ">
                  <img src={Pixmo} alt="404" className="w-[100%] h-[100%]" />
                </div>
                <div className=" justify-stretch mt-3 ">
                  <img
                    src={AIGenerated}
                    alt="404"
                    className="w-[100%] h-[100%]"
                  />
                </div>
                <div className=" justify-stretch mt-3 ">
                  <img src={Archi} alt="404" className="w-[100%] h-[100%]" />
                </div>
                <div className=" justify-stretch mt-3 ">
                  <img
                    src={doubletaker}
                    alt="404"
                    className="w-[100%] h-[100%]"
                  />
                </div>
              </div>
            </div>
          )}

          {isReview && (
            <div>
              <div className="border-2 border-int-grey-700 max-w-[100%] flex flex-row my-4">
                <div className="w-[33.3%] border-2 border-int-grey-700">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
                    <span className="text-green-600 ">3.7</span> from 216 Rating
                    | 54 Reviews
                  </p>
                  {reviews.map((review, index) => (
                    <div
                      className="flex items-center justify-center mt-4"
                      key={index}
                    >
                      <a
                        href="#"
                        className="text-sm font-medium text-int-black dark:text-int-black"
                      >
                        {review.stars}
                      </a>
                      <div className="w-2/4 h-1 mx-4 bg-gray-400 rounded dark:bg-gray-400">
                        <div
                          className="h-1 bg-int-blue rounded"
                          style={{ width: `${review.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {review.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-[33.3%] border-2 border-int-grey-700">
                  People Reviews
                  <div className="flex align-middle flex-wrap ">
                    <button
                      type="button"
                      className="inline-flex items-center  bg-white text-sm border-green-600 border-2 font-medium text-center text-black  rounded-lg  "
                    >
                      Cleanliness
                      <span className="inline-flex items-end align-end justify-center w-5 h-5 ms-2 text-xs align-end font-semibold  bg-green-600 rounded-full">
                        2
                      </span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center  bg-white text-sm border-green-600 border-2 font-medium text-center text-black  rounded-lg  "
                    >
                      Staff behavior
                      <span className="inline-flex items-end align-end justify-center w-5 h-5 ms-2 text-xs align-end font-semibold  bg-green-600 rounded-full">
                        2
                      </span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center  bg-white text-sm border-green-600 border-2 font-medium text-center text-black  rounded-lg  "
                    >
                      Rest stop hygiene
                      <span className="inline-flex items-end align-end justify-center w-5 h-5 ms-2 text-xs align-end font-semibold  bg-green-600 rounded-full">
                        2
                      </span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center  bg-white text-sm border-green-600 border-2 font-medium text-center text-black  rounded-lg  "
                    >
                      Driving
                      <span className="inline-flex items-end align-end justify-center w-5 h-5 ms-2 text-xs align-end font-semibold  bg-green-600 rounded-full">
                        2
                      </span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center  bg-white text-sm border-green-600 border-2 font-medium text-center text-black  rounded-lg  "
                    >
                      Live tracking
                      <span className="inline-flex items-end align-end justify-center w-5 h-5 ms-2 text-xs align-end font-semibold  bg-green-600 rounded-full">
                        2
                      </span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center  bg-white text-sm border-green-600 border-2 font-medium text-center text-black  rounded-lg  "
                    >
                      Seat comfort
                      <span className="inline-flex items-end align-end justify-center w-5 h-5 ms-2 text-xs align-end font-semibold  bg-green-600 rounded-full">
                        2
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-[33.4%] border-2 border-int-grey-700">1</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BusList;
