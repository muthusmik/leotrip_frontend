import hotel from "../../../assets/images/icons8-hotel-100.png";
import guest from "../../../assets/icons/icons8-user-48.png";
import coin from "../../../assets/icons/coin.png";
import room from "../../../assets/images/2713743-removebg-preview.png";
import removebg from "../../../assets/images/flat-lay-yellow-luggage-with-copy-space-removebg-preview.png";
const bookingData = {
  bookingId: "BOOK00001861",
  grandTotal: "14,020",
};
const hotelData = {
  HotelName: "SRM Hotel",
  City: "chennai",
  Nationality: "INDIA",
  checkin: "5-may-2023",
  checkout: "5-may-2023",
};
const jsonData = {
  tableHeading: {
    "Traveler Name": "Traveler Name",
    "Date Of Birth": "Date Of Birth",
    "Email Id": "Email Id",
    "Mobile No": "Mobile No",
  },
  tableData: [
    {
      "Traveler Name": "Gowtham Velusamy",
      "Date Of Birth": "01-March-2023",
      "Email Id": "gowtham.vsamy@gmail.com",
      "Mobile No": "9944847140",
    },
    {
      "Traveler Name": "Gowtham Velusamy",
      "Date Of Birth": "01-March-2023",
      "Email Id": "gowtham.vsamy@gmail.com",
      "Mobile No": "9944847140",
    },
    {
      "Traveler Name": "Gowtham Velusamy",
      "Date Of Birth": "01-March-2023",
      "Email Id": "gowtham.vsamy@gmail.com",
      "Mobile No": "9944847140",
    },
    {
      "Traveler Name": "Gowtham Velusamy",
      "Date Of Birth": "01-March-2023",
      "Email Id": "gowtham.vsamy@gmail.com",
      "Mobile No": "9944847140",
    },
    {
      "Traveler Name": "Gowtham Velusamy",
      "Date Of Birth": "01-March-2023",
      "Email Id": "gowtham.vsamy@gmail.com",
      "Mobile No": "9944847140",
    },
    {
      "Traveler Name": "Gowtham Velusamy",
      "Date Of Birth": "01-March-2023",
      "Email Id": "gowtham.vsamy@gmail.com",
      "Mobile No": "9944847140",
    },
  ],
};

const priceData = {
  "Room x 1": 11020,
  Breakfast: 0,
  Dinner: 0,
  "Other services": 3000,
  Discount: 300,
  "Airport pick and drop": 0,
  "Total Tax": 300,
};

const instructionData = {
  instructions: [
    "All Guests, including children and infants, must present valid identification at check-in.",
    "Guest holds the hotel voucher with the correct reservation details",
    "Guest needs to make the remaining payment before moving to the room",
    "Cancellation Charges shall be as per rules.",
    "For any queries please contact SRM Hotel at18001803838/9910383838 for all MTNL/BSNLphones",
  ],
};
const BookingDetails = () => {
  return (
    <>
      <div className="w-[80%] mx-auto ">
        <div className="border my-5 absolute z-50">
          {/* BoookingDetails */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-3">
            <p className="text-lg text-white text-center font-bold">
              Booking Details
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start">
            <div className="w-full lg:w-1/2 p-2">
              {Object.entries(bookingData)
                .slice(0, 1)
                .map(([label, value]) => (
                  <div key={label} className="flex my-5 pl-5">
                    <div className="font-bold lg:w-1/3">{label}:</div>
                    <div className="">{value}</div>
                  </div>
                ))}
            </div>
            <div className="w-full lg:w-1/2 p-2">
              {Object.entries(bookingData)
                .slice(1, 2)
                .map(([label, value]) => (
                  <div key={label} className="flex my-5 pl-5">
                    <div className="font-bold lg:w-1/3">{label}:</div>
                    <div className="">{value}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* Hotel Details */}
          <div className="flex items-center bg-gradient-to-r from-cyan-400 to-blue-400 p-2 rounded-md">
            <img src={hotel} alt="Hotel Icon" className="h-10 w-10" />
            <p className="pl-2 text-lg text-white font-bold">Hotel Details</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start p-2">
            <div className="w-full lg:w-1/2 p-2">
              {Object.entries(hotelData)
                .map(([label, value], index) => (
                  <div key={index} className="flex my-5 pl-5">
                    <div className="font-bold lg:w-1/3">{label}:</div>
                    <div className="">{value}</div>
                  </div>
                ))
                .slice(0, 3)}
            </div>
            <div className="w-full lg:w-1/2 p-2">
              {Object.entries(hotelData)
                .map(([label, value], index) => (
                  <div key={index} className="flex my-5 pl-5">
                    <div className="font-bold lg:w-1/3">{label}:</div>
                    <div className="">{value}</div>
                  </div>
                ))
                .slice(3, 6)}
            </div>
          </div>

          {/* Guest Details */}
          <div className="flex items-center bg-gradient-to-r from-cyan-400 to-blue-400 p-2 rounded-md">
            <img src={guest} alt="er" className="h-10 w-10" />
            <p className="pl-2 text-lg text-white font-bold">Guest Details</p>
          </div>
          <div className="mx-10">
            <table className="w-full">
              <thead>
                <tr className="border-black border-b-2">
                  {Object.values(jsonData.tableHeading).map(
                    (heading, index) => (
                      <th key={index} className="py-2 text-start">
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {jsonData.tableData.map((traveler, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-400" : "bg-white"}
                  >
                    {Object.values(traveler).map((value, index) => (
                      <td key={index} className="py-3">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* price Details */}
          <div className="flex items-center bg-gradient-to-r from-cyan-400 to-blue-400 p-2 rounded-md">
            <img src={coin} alt="Coin Icon" className="h-10 w-10" />
            <p className="pl-2 text-lg text-white font-bold">Price Details</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start p-2">
            <div className="w-full lg:w-1/2">
              <div className="w-full p-2 border-black border-b-2">
                {Object.entries(priceData).map(([label, value]) => (
                  <div key={label} className="flex my-5 pl-5">
                    <div className="font-bold w-1/3">{label}:</div>
                    <div className="">&#x20B9;{value}</div>
                  </div>
                ))}
              </div>
              <div className="flex text-[#c00000] text-lg font-bold">
                <h1 className="p-5 lg:w-1/3">Grand Total</h1>
                <p className="p-5">&#x20B9;14020</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <h1 className="font-bold pt-2 text-lg">Terms and conditions:</h1>
              <ul>
                {instructionData.instructions.map((instruction, index) => (
                  <li key={index} className="py-2">
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="bg-cover lg:w-1/2 md:w-4/5 sm:w-full h-[400px] opacity-20"
            style={{ backgroundImage: `url(${room})` }}
          ></div>
          <div
            className="bg-cover w-[80%] h-[380px] opacity-20"
            style={{
              backgroundImage: `url(${removebg})`,
              marginTop: "480px",
              marginLeft: "172px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default BookingDetails;
