import React, { useState } from "react";
import Checkbox from "components/common/CheckBox";
import { Label } from "@headlessui/react/dist/components/label/label";
import { label } from "@material-tailwind/react/types/components/checkbox";
import sunrise from "../../../assets/images/sunrise.png";
import sun from "../../../assets/images/sun.png";
import sunset from "../../../assets/images/sunset.png";
import moon from "../../../assets/images/moon.png";
import airindia from "../../../assets/images/AI.png";
import indigo from "../../../../assets/images/igo.png";
import airasia from "../../../../assets/images/AA.png";
import spicejet from "../../../../assets/images/SG.png";
import Vistara from "../../../../assets/images/UK.png";
import Search from "../../../assets/icons/icons-search.gif";
const BusFilter = () => {
  const [bustype, setBusType] = useState(false);
  const busType = ["Seater", "Sleeper", "AC", "Non AC"];
  const aminities = [
    "WIFI",
    "Water Bottle",
    "Blankets",
    "Charging point",
    "Movie",
    "Emergency Contact",
    "Toilet",
    "Bed sheet",
    "Reading Light",
    "CCTV",
    "Pillow",
    "Headsets",
    "Snacks",
    "Personal TV",
  ];
  return (
    <>
      <div className=" w-[80%]  border border-gray-100 border-4 mx-auto rounded-xl px-4 bg-white    ">
        <h1 className="text-center">Bus Filter</h1>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div className="flex flex-row">
          <Checkbox color={"indigo"} name="filter" />
          <label htmlFor={"filter"} className="mx-2">
            Live Tracking
          </label>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125311.61047967589!2d77.03429120000001!3d11.039539199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710739998380!5m2!1sen!2sin"
          className="w-[80%] h-[50%] mx-auto py-5"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div>Price Range</div>
        <div>
          <div className="w-full mt-4">
            <input
              type="range"
              min="20"
              max="200"
              className="w-full appearance-none bg-gray-200 h-2 rounded-full outline-none"
              id="rangeInput"
            />
          </div>
          <div className="flex justify-between items-center">
            <span id="minValue" className="mr-2">
              20
            </span>
            <span id="maxValue" className="mx-end">
              200
            </span>
          </div>
        </div>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div
          style={{ height: "50px" }}
          className="flex flex-row items-center  justify-start my-auto"
        >
          <Checkbox color={"indigo"} name="filter" />
          <label htmlFor={"filter"} className="mx-2">
            Premium Bus
          </label>
        </div>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full " />
        <div>
          Departure from Chennai
          <div className="flex flex-row  mt-2">
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sunrise}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sun}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sunset}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={moon}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
          </div>
        </div>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div className="">
          <h1>Departure to Coimbatore</h1>
          <div className="flex flex-row  mt-2">
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sunrise}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sun}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sunset}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
            <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={moon}
                alt="404"
              />
              <p className="text-sm">Before</p>
              <p className="text-sm">6 AM</p>
            </div>
          </div>
        </div>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div>
          Bus Type
          {busType.map((busty, index) => (
            <div className="flex flex-row" key={index}>
              <Checkbox color={"indigo"} name="filter" />
              <label htmlFor={"filter"} className="mx-2">
                {busty}
              </label>
            </div>
          ))}
        </div>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-3 " />
        <div className="flex flex-col ">
          {aminities.map((aminity, index) => (
            <div className="flex flex-row my-2">
              <Checkbox color={"indigo"} name="filter" />
              <label htmlFor={"filter"} className="mx-2">
                {aminity}
              </label>
            </div>
          ))}
        </div>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-3 " />
        <div>
          Boarding Point
          <div className="">
            <form className="max-w-md mx-auto p-4 ">
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
                  className=" max-w-[80%] block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Boarding Point"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusFilter;
