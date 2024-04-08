import { useState } from "react";
import { booking } from "../buslist/json";

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

const BookingDetails = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowAll = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white shadow-xl rounded-xl border-2">
        <div className="m-10">
          <p className="text-1xl font-semibold">BOOKING DETAILS</p>
          <p className="my-5">Your Ticket and Bus details</p>
          <div>
            {booking.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row space-x-14">
                  <div>
                    <p>Pick-Up</p>
                    <p>
                      {item.pickday}
                      <b>{item.pickdate}</b>
                    </p>
                    <p>{item.pickUpTime}</p>
                  </div>
                  <div>
                    <p>Drop</p>
                    <p>
                      {item.dropday}
                      <b>{item.dropdate}</b>
                    </p>
                    <p>{item.dropoffTime}</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-14 mt-10">
                  <div>
                    <p>TOTAL TRAVELER(S)</p>
                    <p>
                      <b>{item.passengers}</b>
                    </p>
                  </div>
                  <div>
                    <p>PRIMARY TRAVELER</p>
                    <p>
                      <b>{item.guestName}</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>{item.busType}</b>
                    </p>
                    <div>
                      {Object.values(amenities)
                        .slice(0, 3)
                        .map((amenity, index) => (
                          <span key={index}>{amenity} | </span>
                        ))}
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={handleShowAll}
                      >
                        +20 Amenities
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      </div>
    </>
  );
};

export default BookingDetails;
