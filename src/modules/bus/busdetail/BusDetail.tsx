import React from "react";
import Bus from "../../../assets/images/icons-bus.png";
import { travelsdetails } from "../buslist/json";
import TravelerDetails from "./TravelerDetails";
import ContactDetails from "components/common/ContactDetails";
const BusDetail = () => {
  return (
    <div className="flex flex-col mx-7 font-poppinsRegular">
      <div className="flex justify-center w-full">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(118,171,243,1) 0%, rgba(141,214,238,1) 100%)",
          }}
          className="w-full  justify-center font-poppinsRegular flex items-center"
        >
          <div className="flex flex-row items-center w-full mx-5">
            <img src={Bus} alt="404" className="w-[60px]" />
            <div className="text-xl mx-4">Bus Detail</div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center font-poppinsRegular rounded-bl-lg rounded-br-lg">
        <div className="border-2 rounded-lg mx-5 my-4 w-full">
          <div className="flex flex-col">
            <div className="flex flex-row text-lg  justify-between px-7 mt-5">
              <div>
                <span>Chennai </span> <span> → </span>
                <span> Coimbatore </span>
              </div>
              <div className="flex flex-col items-end">
                <button
                  style={{
                    background:
                      "linear-gradient(90deg,#56CBF2 0%,  #3081ED 100%)",
                  }}
                  className="px-4 text-sm py-0.5"
                >
                  Cancellation Fees Apply
                </button>

                <button className="text-sm text-int-sky-blue-light mt-2">
                  View Fare Rules
                </button>
              </div>
            </div>
            <div>
              {travelsdetails.map((travel, index) => (
                <div key={index} className="flex flex-col bg-white  my-4 ">
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
                        ></hr>
                        <div className="text-base font-poppinsRegular">
                          {travel.travelHours}
                        </div>
                        <hr
                          className="w-[60px] bg-black dark:bg-black"
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

                    <div className=" w-[25%]">
                      <span className="text-int-dark-red text-xl">
                        {travel.price}
                      </span>
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

                        <div className="font-poppinsRegular text-sm">
                          {`${travel.totalRating} Ratings`}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm font-poppinsRegular mx-auto w-[30%]">
                      {`${travel.seatsLeft} Seats Left | ${travel.windowsSeatsLeft} Windows seats`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <TravelerDetails />
      </div>
    </div>
  );
};

export default BusDetail;
