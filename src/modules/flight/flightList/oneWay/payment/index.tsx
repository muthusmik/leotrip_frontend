import Navbar from "components/common/ListingNavbar";
import YourPageComponent from "components/common/Pages";
import FlightPriceSummary from "../traveller/FlightPriceSummary";
import mastercard from "../../../../../assets/images/mastercard.png";
import rupay from "../../../../../assets/images/RuPay.png";
import visa from "../../../../../assets/images/visacard.png";
import paypal from "../../../../../assets/images/paypal.png";
import FlightDetails from "../traveller/FlightDetails";
import Meals from "./Meals";
import PickupDrop from "./PickupAndDrop";
import TravellerInfo from "modules/bus/Payment/TravelerInfo";
import { Link } from "react-router-dom";
import restaurants from "../../../../../assets/images/restaurant.png";
import FlightTicketDetails from "./FlightTicketDetails";
import Baggage from "../../roundTrip/payment/Baggage";

const FlightPaymentDetails = () => {
  const handlepagechange = () => {
    <FlightTicketDetails />;
  };
  return (
    <>
      <div className="font-poppinsRegular">
        <div>
          <Navbar />
        </div>
        <div className="bg-[#DEF2FF] h-full">
          <div className="flex flex-row h-full py-2">
            <YourPageComponent />
          </div>
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="w-fit  md:w-7/12 lg:w-8/12 m-5 pb-3 text-sm">
              <FlightDetails />
              <div className="bg-white my-5">
                <Meals />
              </div>
              <div className="bg-white my-5">
                <Baggage />
              </div>
              <div className="bg-white my-5">
                <PickupDrop />
              </div>
              <div className=" my-5">
                <TravellerInfo />
              </div>
              <div className="border bg-white mt-5">
                <div className="flex items-center">
                  <img src={restaurants} alt="" className="w-[50px] h-[50px]" />
                  <h1 className="ml-2  text-sm">
                    You have to login to use your <b>wallet amount</b>
                  </h1>
                  <div className="ml-auto">
                    <Link to="">
                      <button className="border border-1 bg-[#2B93D4] text-white rounded-lg px-3 py-1 me-5">
                        LOGIN
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex justify-end m-5">
                <button
                  className="border border-1 bg-[#ec8e03] text-white rounded-lg px-10 py-2"
                  onClick={handlepagechange}
                >
                  <Link to="/flights/ticketdetails">Make Payment</Link>
                </button>
              </div>
            </div>

            <div className="w-fit md:w-5/12 lg:w-4/12 my-5 mx-auto md:mx-5">
              <FlightPriceSummary />
            </div>
          </div>
        </div>
        <div className="flex w-full bg-gray-300 pb-2 ">
          <img
            src={mastercard}
            alt="mastercard"
            className="w-10 h-6 mt-3 mr-3 lg:mr-10"
          />
          <img src={visa} alt="visa" className="w-10 h-6  mt-3 mr-3 lg:mr-10" />
          <img
            src={paypal}
            alt="paypal"
            className="w-10 h-6  mt-3 mr-3 lg:mr-10"
          />
          <img src={rupay} alt="rupay" className="w-10 h-6  mt-3 " />
        </div>
      </div>
    </>
  );
};
export default FlightPaymentDetails;
