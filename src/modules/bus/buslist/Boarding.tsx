import { useState } from "react";
import Checkbox from "components/common/CheckBox";
import Search from "../../../assets/icons/icons-search.gif";
import { pickup } from "./json";
import { droppoint } from "./json";
const Boarding = () => {
  const [isDropPoint, setDroppOpen] = useState(false);
  const [isPickupPoint, setPickUpOpen] = useState(true);
  const handlePickOpen = () => {
    setPickUpOpen(!isPickupPoint);
    setDroppOpen(!isDropPoint);
  };
  const handleDropOpen = () => {
    setDroppOpen(!isDropPoint);
    setPickUpOpen(!isPickupPoint);
  };
  return (
    <>
      <div className="flex flex-row justify-around my-2 p-0 font-poppinsRegular">
        <button
          onClick={handlePickOpen}
          className={`${
            isPickupPoint
              ? "bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent font-poppinsRegular font-semibold text-base"
              : "text-base"
          } `}
        >
          BOARDING POINT
        </button>

        <button
          onClick={handleDropOpen}
          className={`${
            isDropPoint
              ? "bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent font-poppinsRegular font-semibold underline text-base"
              : "text-base"
          }`}
        >
          DROPING POINT
        </button>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-2" />
      {isPickupPoint && (
        <div className="overflow-y-auto border">
          <div className=" w-full">
            <form className="max-w-md mx-auto w-[90%] rounded-full shadow-xl my-3">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <div>
                    <img src={Search} alt="Search" className="w-6 h-6 mr-2" />
                  </div>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="  block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppinsRegular"
                  placeholder="Enter Boarding Point"
                  required
                />
              </div>
            </form>
          </div>
          {pickup.map((pick, index) => (
            <div key={index} className="flex flex-row mx-2">
              <Checkbox color={"black"} className="mx-2" />
              <div className="ps-2 font-poppinsRegular text-sm">{pick}</div>
            </div>
          ))}
        </div>
      )}

      {isDropPoint && (
        <div className="overflow-y-auto border">
          <div className=" w-full">
            <form className="max-w-md mx-auto w-[90%] rounded-full shadow-xl my-3">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <div>
                    <img src={Search} alt="Search" className="w-6 h-6 mr-2" />
                  </div>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="  block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppinsRegular"
                  placeholder="Enter Droping Point"
                  required
                />
              </div>
            </form>
          </div>
          {droppoint.map((dr, index) => (
            <div key={index} className="flex flex-row mx-2">
              <Checkbox color={"indigo"} className="mx-2" />
              <div className="ps-2 font-poppinsRegular text-sm">{dr}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Boarding;
