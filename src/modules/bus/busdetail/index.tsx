import Navbar from "components/common/ListingNavbar";
import BusDetail from "./BusDetail";
import Coupon from "./Coupon";

const BusInfo = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row bg-[#DEF2FF] h-full py-7">
        <div className="w-[70%]">
          <BusDetail />
        </div>
        <div className="w-[28%] ">
          <Coupon />
        </div>
      </div>
    </>
  );
};

export default BusInfo;
