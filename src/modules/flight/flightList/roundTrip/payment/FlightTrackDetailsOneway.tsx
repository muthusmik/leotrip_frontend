import { Step, Stepper } from "@material-tailwind/react";
import flight from "../../../../../assets/images/flight.svg";
import AI from "../../../../../assets/images/AI.png";
import arrow from "../../../../../assets/icons/Arrowtick.svg";
const FlightTrackDetails = () => {
  const jsonData = {
    tableHeading: {
      Baggage: "Baggage",
      "Check-in": "check-in",
      "Check-out": "Check-out",
    },
    tableData: [
      {
        Baggage: "Adult",
        "Check-in": "15 Kgs (1 piece only)",
        "Check-out": "7 Kgs (1 piece only)",
      },
      {
        Baggage: "Child",
        "Check-in": "15 Kgs (1 piece only)",
        "Check-out": "7 Kgs (1 piece only)",
      },
      {
        Baggage: "Infant",
        "Check-in": "15 Kgs (1 piece only)",
        "Check-out": "7 Kgs (1 piece only)",
      },
    ],
  };

  const flights = [
    {
      airline: "Air India",
      flightNumber: "UK-993",
      class: "ECONOMY",
      arrivalCity: "Coimbatore",
      departureCity: "Chennai",

      date: "Friday, May 05",
      duration: "1 Stop · 1h 05m",
      departureTime: "05:00",
      departureAirport: "Chennai (MAA)",
      departureDate: "Fri 05 May 2023",
      departureTerminal: "Terminal - 3",
      ConnectingTime: "05 : 25",
      ConnectingAirport: "Madurai (IXM)",
      ConnectingDate: "Fri 05 May 2023",
      ConnectingTerminal: "Terminal - 3",
      arrivalTime: "06:00",
      arrivalAirport: "Coimbatore (CJB)",
      arrivalDate: "Fri 05 May 2023",
      arrivalTerminal: "Terminal - 3",
      layover: "1h : 5m Layover in Madurai (IXM)",
    },
  ];

  const retrunTracking = [
    {
      departureCity: "Chennai",
      arrivalCity: "Coimbatore",
      date: "Friday, May 05",
      duration: "1 Stop · 1h 05m",
      layover: "1h : 5m Layover in Madurai (IXM)",
      airline: "Air India",
      flightNumber: "UK-993",
      class: "ECONOMY",
      departureTime: "05:00",
      departureAirport: "Chennai (MAA)",
      departureDate: "Fri 05 May 2023",
      departureTerminal: "Terminal - 3",
      arrivalTime: "06:00",
      arrivalAirport: "Coimbatore (CJB)",
    },
  ];
  return (
    <>
      <div className="font-poppinsRegular">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="mx-10 my-5 border-2 rounded border-black py-5"
          >
            <div className="flex items-center justify-between border-[#E3941E] border-l-4 p-1">
              <div className="ms-3">
                <div>
                  <div className="flex items-center">
                    <h1 className="text-xl">{flight.departureCity}</h1>
                    <img src={arrow} alt="arrow" className="h-3 px-5" />
                    <h1 className="text-xl">{flight.arrivalCity}</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <small className="bg-[#FDDFB3] px-1">{flight.date}</small>
                  <small className="pl-3">{flight.duration}</small>
                </div>
              </div>
              <div className="flex flex-col items-end me-10">
                <p className="bg-gradient-to-l from-bg-blue-start to-bg-blue-end px-3">
                  <span className="text-xs">Cancellation Fees Apply</span>
                </p>
                <small>
                  <button className="text-primary mt-4">View Fare Rules</button>
                </small>
              </div>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center ">
                <img src={AI} alt="404" className="h-10 w-10" />
                <div className="ml-5 text-light-black">
                  <h1 className="text-black text-base">{flight.airline}</h1>
                  <p className="text-sm">{flight.flightNumber}</p>
                  <p className="text-sm">{flight.class}</p>
                </div>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-lg">{flight.departureTime}</h1>
                  <p className="text-light-black text-sm">
                    {flight.departureAirport}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.departureDate}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.departureTerminal}
                  </p>
                </div>
              </div>
              <div>
                <small className="text-light-black px-16">01h 05m</small>
                <Stepper className="flex items-center">
                  <Step className="w-3 h-3"></Step>
                  <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                  <Step
                    className="w-7 h-7 bg-cover"
                    style={{ backgroundImage: `url(${flight})` }}
                  ></Step>
                  <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                  <Step className="w-3 h-3"></Step>
                </Stepper>
                <p className=" px-1 text-int-blue text-sm text-center p-0 my-2">
                  <span className="border-dotted border-2 border-int-blue rounded-3xl px-2 py-1">
                    Retails Fare
                  </span>
                </p>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-lg">{flight.ConnectingTime}</h1>
                  <p className="text-light-black text-sm">
                    {flight.ConnectingAirport}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.ConnectingDate}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.ConnectingTerminal}
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center w-full relative my-10">
              <hr className="w-8/12 h-px my-8 bg-black border-0 rounded dark:bg-bg-black" />
              <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-[#EAE9E9] rounded-full py-2">
                {flight.layover}
              </div>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center ">
                <img src={AI} alt="404" className="h-10 w-10" />
                <div className="ml-5 text-light-black">
                  <h1 className="text-black text-base">{flight.airline}</h1>
                  <p className="text-sm">{flight.flightNumber}</p>
                  <p className="text-sm">{flight.class}</p>
                </div>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-lg">{flight.ConnectingTime}</h1>
                  <p className="text-light-black text-sm">
                    {flight.ConnectingAirport}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.ConnectingDate}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.ConnectingTerminal}
                  </p>
                </div>
              </div>
              <div>
                <small className="text-light-black px-16">01h 05m</small>
                <Stepper className="flex items-center">
                  <Step className="w-3 h-3"></Step>
                  <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                  <Step
                    className="w-7 h-7 bg-cover"
                    style={{ backgroundImage: `url(${flight})` }}
                  ></Step>
                  <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                  <Step className="w-3 h-3"></Step>
                </Stepper>
                <p className=" px-1 text-int-blue text-sm text-center p-0 my-2">
                  <span className="border-dotted border-2 border-int-blue rounded-3xl px-2 py-1">
                    Retails Fare
                  </span>
                </p>
              </div>
              <div>
                <div className="text-center ">
                  <h1 className="text-lg">{flight.arrivalTime}</h1>
                  <p className="text-light-black text-sm">
                    {flight.arrivalAirport}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.arrivalDate}
                  </p>
                  <p className="text-light-black text-sm">
                    {flight.arrivalTerminal}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-20 mt-10">
              <table className="w-full  mx-auto ">
                <thead>
                  <tr className="">
                    {Object.values(jsonData.tableHeading).map(
                      (heading, index) => (
                        <th
                          key={index}
                          className="py-2 text-start font-normal text-base"
                        >
                          {heading}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {jsonData.tableData.map((traveler, index) => (
                    <tr key={index}>
                      {Object.values(traveler).map((value, index) => (
                        <td key={index} className="py-3 text-sm font-bold">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FlightTrackDetails;
