import { useState } from "react";
import { couponData } from "../buslist/json";
import Adult from "../../../assets/icons/adult.png";

const Coupon = () => {
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [offerMessage, setOfferMessage] = useState("");
  const [showCharity, setShowCharity] = useState(true);

  const handleClear = () => {
    setSelectedCoupon("");
    setCouponCode("");
    setOfferMessage("");
  };

  const handleToggleCharity = () => {
    setShowCharity(!showCharity);
  };

  const handleCheckboxChange = (event: any) => {
    const { value } = event.target;
    setCouponCode(value);
    setOfferMessage("");
  };

  const handleApplyCoupon = () => {
    const selectedCoupon = couponData.find(
      (coupon) => coupon.code === couponCode
    );

    if (selectedCoupon) {
      setOfferMessage(selectedCoupon.offer);
      console.log("x", selectedCoupon.offer);
    } else {
      setOfferMessage("Invalid coupon code.");
    }
  };

  return (
    <div>
      <div className="border text-sm bg-white font-poppinsRegular">
        <div className="flex justify-between bg-gradient-to-r from-cyan-400 to-blue-400 p-3">
          <p className="text-lg">Price Summary</p>
          <div className="flex items-center me-5">
            <img src={Adult} alt="Adults" className="w-8 h-7" />
            <span className="pl-2 font-semibold">1</span>
          </div>
        </div>
        <div className=" border-b-2 flex justify-between p-3">
          <p>Adult x 1</p>
          <h1 className="font-medium text-base">
            &#x20B9;<span className="pr-14">4020</span>
          </h1>
        </div>

        <div>
          <button
            className="w-5 h-5 rounded-full border border-black mt-1 ml-3"
            onClick={handleToggleCharity}
          >
            {showCharity ? "-" : "+"}
          </button>
          <div>
            {showCharity && (
              <div className="border-b-2  pt-2 p-7 pb-5">
                <div className="flex justify-between">
                  <p>Other Services</p>
                  <h1 className="font-medium pe-2 text-lg">
                    &#x20B9;<span className="p-7 ">300</span>
                  </h1>
                </div>
                <div className="flex justify-between pt-2">
                  <p>Total Tax</p>
                  <small className="pe-2">
                    &#x20B9;
                    <span className="p-7 text-light-black text-base">290</span>
                  </small>
                </div>
                <div className=" flex justify-between">
                  <p className="flex flex-row ">
                    Charity
                    <button
                      className="text-blue-500 text-sm items-end"
                      onClick={handleToggleCharity}
                    >
                      <span className="text-xxs font-semibold ms-1">
                        REMOVE
                      </span>
                    </button>
                  </p>
                  <small className="pe-2">
                    &#x20B9;
                    <span className="p-7 text-light-black text-base">10</span>
                  </small>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between p-3">
          <h1 className="text-[#EF9D25] text-lg">Grand Total</h1>
          <h1 className="text-[#C61E1E] font-bold text-lg">
            &#x20B9;<span className="p-7">4320</span>
          </h1>
        </div>
      </div>
      <hr />
      <hr />
      <div className="border text-sm bg-white mt-5 font-poppinsRegular">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-3 ">
          <p className="text-lg">Have a coupon code</p>
        </div>
        <div className="border-b-2">
          <div>
            <div className="mx-4 my-5 border-b-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
                className="border-b-2 border-black text-[#ee9c22] text-center text-lg"
              />

              <button
                onClick={handleClear}
                className=" px-5 py-1 ml-2 text-md rounded-lg border"
              >
                <span className="text-light-black">CLEAR x</span>
              </button>
              {
                <div
                  className={selectedCoupon ? "text-green-500" : "text-red-500"}
                >
                  {offerMessage}
                </div>
              }
              <button
                onClick={handleApplyCoupon}
                className="border px-5 py-1 mx-2 my-2 text-md rounded-lg bg-[#ee9c22]"
              >
                Apply
              </button>
            </div>
            <div className="border mx-5 mb-3">
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {couponData.map((coupon) => (
                  <div key={coupon.code}>
                    <label>
                      <div className="flex border-b-2">
                        <input
                          type="checkbox"
                          value={coupon.code}
                          checked={couponCode === coupon.code}
                          onChange={handleCheckboxChange}
                          className="h-6 w-6 m-3"
                        />
                        <div className="pt-2">
                          <h1 className="font-medium text-lg">{coupon.code}</h1>
                          <small>{coupon.offer}</small>
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coupon;
