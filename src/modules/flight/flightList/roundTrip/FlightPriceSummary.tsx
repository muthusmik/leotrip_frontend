import { useState } from "react";
import adults from "../../../../assets/icons/adult.svg";
import child from "../../../../assets/icons/child.png";
import baby from "../../../../assets/icons/icons8-crawling-baby-skin-type-3-48.png";

const PriceSummary = () => {
  const [showCharity, setShowCharity] = useState(true);

  const handleToggleCharity = () => {
    setShowCharity(!showCharity);
  };

  return (
    <div className="border text-sm bg-white">
      <div className="flex justify-between bg-gradient-to-r from-cyan-400 to-blue-400 p-3">
        <p className="text-xl">Price Summary</p>
        <div className="flex items-center me-5">
          <div className="flex items-center">
            <img src={adults} alt="Adults" className="w-8 h-7" />
            <span className="">1</span>
          </div>
          <div className="flex items-center">
            <img src={child} alt="Child" className="w-5 h-5 ml-2" />

            <span className="">0</span>
          </div>
          <div className="flex items-center">
            <img src={baby} alt="Child" className="w-5 h-5  ml-3" />
            <span className="">0</span>
          </div>
        </div>
      </div>
      <div className="border-b-2 flex  p-3">
        <p className="w-20">Adult x 1</p>
        <div className="font-bold flex items-center space-x-52">
          <span className=""></span>
          <span className="pl-2"> &#x20B9; 4020</span>
        </div>
      </div>
      <div className="border-b-2 flex  p-3">
        <p className="w-20">Child x 0</p>
        <div className="font-bold flex items-center space-x-52">
          <span className=""></span>
          <span className="pl-2">&#x20B9; 0</span>
        </div>
      </div>
      <div className="border-b-2 flex  p-3">
        <p className="w-20">Infants x 0</p>
        <div className="font-bold flex items-center space-x-52">
          <span className=""></span>
          <span className="pl-2">&#x20B9; 0</span>
        </div>
      </div>
      <div>
        <button
          className="w-5 h-5 rounded-full border border-black mt-1 ml-3"
          onClick={handleToggleCharity}
        >
          {showCharity ? "-" : "+"}
        </button>
        {showCharity && (
          <div className="border-b-2  pt-2 pl-7 pb-5">
            <div className="flex ">
              <p className="w-26">Other Services</p>
              <div className="font-bold space-x-44">
                <span className=""></span>
                <span className="pl-1">&#x20B9; 300</span>
              </div>
            </div>
            <div className="flex  pt-2">
              <p className="w-26">Total Tax</p>
              <small className="space-x-52">
                <span className=""></span>
                <span className="pl-3 text-sm text-light-black">
                  &#x20B9; 290
                </span>
              </small>
            </div>
            <div className=" flex ">
              <p className="w-26">
                Charity
                <button className="text-blue-500" onClick={handleToggleCharity}>
                  <span className="text-xxs">Remove</span>
                </button>
              </p>
              <small className="space-x-48">
                <span className=""></span>
                <span className="pl-2 text-sm text-light-black">
                  &#x20B9; 10
                </span>
              </small>
            </div>
          </div>
        )}
      </div>
      <div className="flex  p-3">
        <h1 className="text-[#ef9d25] text-lg w-26">Grand Total</h1>
        <div className="text-[#c61e1e] font-bold text-lg space-x-40">
          <span className=""></span>
          <span className="pl-8">&#x20B9; 4320</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
