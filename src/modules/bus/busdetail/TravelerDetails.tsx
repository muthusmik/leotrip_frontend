import React, { useState } from "react";
import AddPassenger from "components/common/AddPassenger";
import Lock from "../../../assets/images/icons-lock.png";
import ContactDetails from "components/common/ContactDetails";
import Bussiness from "./Bussiness";
import AdultDetails from "components/common/AdultDetails";
const TravelerDetails = () => {
  const [activeButton, setActiveButton] = useState("personal");
  const [showGST, setShowGST] = useState(false);
  const handleButtonClick = (button: any) => {
    setActiveButton(button);
    if (showGST) {
      setShowGST(false);
    } else {
      setShowGST(true);
    }
  };
  return (
    <>
      <div className=" rounded-xl  font-poppinsRegular ">
        <div className=" rounded font-poppinsRegular py-5 px-7">
          <div className="text-1xl">Traveller Details</div>
          <div className="flex justify-center mt-5">
            <div className="border bg-int-sandal-light w-[90%] ">
              <div className="flex items-center">
                <img src={Lock} alt="" className="w-[50px] h-[50px]" />
                <h1 className="ml-2  text-sm">
                  Log in to view your
                  <b>saved traveller list, unlock amazing deals</b> & much more!
                </h1>

                <h1 className="ml-auto mr-8 text-int-dark-sky-blue text-xl">
                  LOGIN NOW
                </h1>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-black h-0.5 mb-5"></hr>
        <div className="px-12">
          <div className="flex flex-row justify-center">
            <div className="border rounded-full">
              <button
                className={`${
                  activeButton === "personal" ? "bg-int-sandal" : "text-black"
                } rounded-full text-xl px-7 text-${
                  activeButton === "personal" ? "white" : "black"
                } py-1`}
                onClick={() => handleButtonClick("personal")}
              >
                Personal
              </button>
              <button
                className={`${
                  activeButton === "business" ? "bg-int-sandal" : " text-black"
                } rounded-full text-xl px-7 text-${
                  activeButton === "business" ? "white" : "black"
                } py-1`}
                onClick={() => handleButtonClick("business")}
              >
                Business
              </button>
            </div>
          </div>
          <div className="mt-5 ">
            <AdultDetails />
          </div>
          {showGST && (
            <div>
              <Bussiness />
            </div>
          )}
          <div className="mt-5">
            <ContactDetails />
          </div>
        </div>
        <hr className="h-3.5 border-light-black pl-0"></hr>
        <div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-green-500"
              onChange={(e) => {
                if (e.target.checked) {
                  // Checkbox is checked
                  // Perform actions for checked state
                } else {
                  // Checkbox is unchecked
                  // Perform actions for unchecked state
                }
              }}
            />
            <label htmlFor="checkbox" className="ml-2 font-medium">
              I have a GST number (optional)
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default TravelerDetails;
