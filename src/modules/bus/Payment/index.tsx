import Navbar from "components/common/ListingNavbar";
import TicketDetails from "./TicketDetails";
import Summary from "./PriceSummary";

const BusPaymentDetails = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row bg-[#DEF2FF] h-full py-7">
        <div className="w-[70%] ">
          <TicketDetails />
        </div>
        <div className="w-[28%]  p-7 font-poppinsRegular">
          <Summary />
        </div>
      </div>
    </>
  );
};

export default BusPaymentDetails;
