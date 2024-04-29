import React from "react";
import { ticket } from "../buslist/json";
import Bus from "../../../assets/images/bgbus.svg";
import Information from "./Terms";
import Wallet from "../../../assets/images/wallet.png";
import { Link } from "react-router-dom";
import Cancellation from "./Cancellation";
import TravellerInfo from "./TravelerInfo";
import Arrow from "../../../assets/icons/Arrowtick.svg";
import BookingDetails from "./BookingDetails";
import { useState } from "react";
import AIGenerated from "../../../assets/images/ai-generated.png";
import Archi from "../../../assets/images/architecture.jpg";
import Pixmo from "../../../assets/images/pixmo.jpg";
import doubletaker from "../../../assets/images/double-taker.jpg";

const amenities = {
  wifi: "Wi-Fi",
  ac: "AC",
  tv: "TV",
  charging: "Charging Point",
  pool: "Swimming Pool",
  gym: "Gym",
  spa: "Spa",
  restaurant: "Restaurant",
  bar: "Bar",
  parking: "Parking",
  shuttle: "Shuttle Service",
  laundry: "Laundry Service",
  roomService: "Room Service",
  petFriendly: "Pet Friendly",
  conferenceRoom: "Conference Room",
  businessCenter: "Business Center",
};
const TicketDetails = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBus, setShowAllBus] = useState(false);

  const handleShowAll = () => {
    setShowModal(true);
  };

  const handlebus = () => {
    setShowAllBus(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setShowAllBus(false);
  };
  return (
    <>
      <div className="p-5 font-poppinsRegular">
        <div className="flex flex-row bg-primary rounded-tl-2xl rounded-tr-2xl">
          <div className="w-[70%]  ">
            <div className="ms-10 py-2 ">
              <p className="text-white font-bold text-xl">Sri KRS Travels</p>
              <p className="text-white text-sm ">
                Non A/C Seat / Sleeper (2+1)
              </p>
            </div>
          </div>
          <div className="w-[30%] border-l-8 border-int-dark-grey border-dotted"></div>
        </div>

        <div className="flex flex-row bg-white rounded-bl-2xl rounded-br-2xl shadow-xl pt-1">
          <div className="w-[70%] ">
            <div
              className=" ms-3 py-8 opacity-80 bg-cover"
              style={{
                backgroundImage: `url(${Bus})`,
                height: "100%",
                width: "100%",
              }}
            >
              {ticket.map((ticketInfo, index) => (
                <div key={index}>
                  <div className="flex flex-row justify-around">
                    <p className="text-2xl">{ticketInfo.departureCity} </p>
                    <img src={Arrow} alt="404" />
                    <p className="text-2xl">{ticketInfo.arrivalCity}</p>
                  </div>
                  <div>
                    <div className="flex flex-row justify-between my-5 mx-32">
                      <p className="text-lg">{ticketInfo.departureStop} </p>

                      <p className="text-lg">{ticketInfo.arrivalStop}</p>
                    </div>

                    <div className="flex flex-row  justify-between my-5 mx-32">
                      <p className="text-lg">{ticketInfo.departureTime} </p>

                      <p className="text-lg">{ticketInfo.arrivalTime}</p>
                    </div>
                    <div>
                      <p className=" justify-between my-5 mx-32">
                        Duration: {ticketInfo.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[30%] border-l-8 border-int-dark-grey border-dotted">
            <div className="py-5 px-6">
              <p className="ms-8 my-3">Ticket No : </p>
              <p className="ms-16">TSD48722428DC</p>
              <p className="ms-8 my-3">Passenger Name : </p>

              <p className="ms-16">Harry Poter </p>
              <p className="ms-8 my-3">Seat No :</p>
              <p className="ms-16">UL 4 </p>
              <p className="ms-8 my-3">Amount :</p>
              <p className="ms-16">₹ 1,350</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Information />
        </div>
        <div className="mt-5">
          <BookingDetails />
        </div>
        <div>
          <Cancellation />
        </div>
        <div className="mt-5">
          <div className="bg-white shadow-xl rounded-xl border-2">
            <div className="mx-10 mt-5 mb-3">
              <p className="text-1xl font-semibold">CANCELLATION</p>
              <p className="my-5 text-base">
                Amenities and photographs of KRS travels.
              </p>
              <div className="flex flex-row ">
                <div className="w-[60%]  flex">
                  <div className="grid grid-cols-3  list-disc">
                    {Object.values(amenities)
                      .slice(0, 9)
                      .map((amenity, index) => (
                        <li key={index} className="px-5">
                          {amenity}
                        </li>
                      ))}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={handleShowAll}
                    >
                      +20 Amenities
                    </button>
                  </div>
                </div>
                <div className="w-[40%] flex items-center mx-2">
                  <img src={Bus} alt="404" className="h-32" />
                  <button
                    className="bg-[#3081ED] text-white h-28"
                    onClick={handlebus}
                  >
                    +8 Bus Photo(s)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <TravellerInfo />
        </div>
        <div>
          <div className="border bg-white mt-5 rounded-3xl">
            <div className="flex items-center justify-around">
              <img src={Wallet} alt="" className="w-auto h-auto" />
              <h1 className="ml-2  text-1xl">
                You have to login to use your <b>wallet amount</b>
              </h1>
              <div className="">
                <Link to="">
                  <button className="border border-1 bg-[#2B93D4] text-white text-xl rounded-lg px-5 py-1 me-5">
                    LOGIN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex m-10">
          <button className="mx-auto bg-int-sandal px-16 py-2 text-center text-white  font-semibold rounded-xl text-1xl">
            <span className="font-poppinsRegular">Make Payment</span>
          </button>
        </div>
        {showModal && (
          <div>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
              <div className="bg-white shadow-xl rounded-xl p-6 z-10 flex flex-wrap justify-center gap-4 w-[70%]">
                <h2 className="text-lg font-semibold mb-4 w-full text-center">
                  All Amenities
                </h2>
                {Object.values(amenities).map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-full px-4 py-2"
                  >
                    {amenity}
                  </div>
                ))}
                <div className="w-full flex justify-center ">
                  <button
                    className="text-white hover:text-blue-700 mt-4 bg-blue-500 px-2 py-1 rounded"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showBus && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
            <div className="bg-white shadow-xl rounded-xl p-6 z-10 flex flex-wrap justify-center gap-4 w-[70%] overflow-y-auto">
              <img src={AIGenerated} alt="404" className="h-32 rounded-xl" />
              <img src={Archi} alt="404" className="h-32 rounded-xl" />
              <img src={doubletaker} alt="404" className="h-32 rounded-xl" />
              <img src={Pixmo} alt="404" className="h-32 rounded-xl" />
              <img src={Archi} alt="404" className="h-32 rounded-xl" />
              <img src={doubletaker} alt="404" className="h-32 rounded-xl" />
              <img src={Archi} alt="404" className="h-32 rounded-xl" />
              <img src={Pixmo} alt="404" className="h-32 rounded-xl" />
              <img src={AIGenerated} alt="404" className="h-32 rounded-xl" />
              <div className="w-full flex justify-center ">
                <button
                  className="text-white hover:text-blue-700 mt-4 bg-blue-500 px-2 py-1 rounded"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default TicketDetails;
