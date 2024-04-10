import { Step, Stepper } from "@material-tailwind/react";
import flight from "../../../../../assets/images/flight.svg";
import arrow from "../../../../../assets/icons/Arrowtick.svg";
import AI from "../../../../../assets/images/AI.png";
import review from "../../../../../assets/images/flightreview.png";
import TravelSuitcase from "../../../../../assets/icons/travelsuitcase.png";
import AA from "../../../../../assets/images/AA.png";
import BlueBag from "../../../../../assets/icons/travelbluebag.png";
import RedBag from "../../../../../assets/icons/travelred.png";
import TravelBag from "../../../../../assets/icons/travelbag.png";
import FlightTrackDetailsOneway from "./FlightTrackDetailsOneway";
import FlightTrackDetailsReturn from "./FlightTrackDetailsReturn";
import Baggage from "./Baggage";
import Meals from "../../oneWay/payment/Meals";
import PickupDrop from "../../oneWay/payment/PickupAndDrop";
import TravellerInfo from "modules/bus/Payment/TravelerInfo";
import restaurants from "../../../../../assets/images/restaurant.png";
import Wallet from "../../../../../assets/images/wallet.png";
import { Link } from "react-router-dom";
const FlightDetail = () => {
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

  return (
    <>
      <div className="font-poppinsRegular p-8">
        <div className="bg-white border">
          <div
            className="flex items-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(118,171,243,1) 0%, rgba(141,214,238,1) 100%)",
            }}
          >
            <img src={review} alt="review" className="h-14 w-14" />
            <h1 className="font-bold text-lg">Flight Details</h1>
          </div>

          <div>
            <FlightTrackDetailsOneway />
          </div>
          <div className="mb-5">
            <FlightTrackDetailsReturn />
          </div>
        </div>
        <div className="bg-white my-5">
          <Meals />
        </div>
        <div className="my-5">
          <Baggage />
        </div>
        <div className="bg-white my-5">
          <PickupDrop />
        </div>
        <div className="my-5">
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
        <div className="flex justify-end m-5">
          <button className="mx-auto bg-int-sandal px-12 py-3 text-center text-white  font-semibold rounded-xl text-lg">
            <Link to="/flights/ticketdetails">
              <span className="font-poppinsRegular">Make Payment</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default FlightDetail;
