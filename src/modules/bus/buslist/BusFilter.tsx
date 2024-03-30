import { useState } from "react";
import Checkbox from "components/common/CheckBox";
import sunrise from "../../../assets/images/sunrise.png";
import sun from "../../../assets/images/sun.png";
import sunset from "../../../assets/images/sunset.png";
import moon from "../../../assets/images/moon.png";
import Search from "../../../assets/icons/icons-search.gif";
import RangeSlider from "components/common/RangeSlider";
const BusFilter = () => {
  const [bustype, setBusType] = useState(false);
  const busType = ["Seater", "Sleeper", "AC", "Non AC"];
  const sliderValueChanged = (value: number) => {
    console.log("Slider value changed:", value);
  };
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
      <div className=" w-[80%]  border border-gray-100  mx-auto rounded-xl px-4 bg-white">
        <div className="flex flex-row justify-between">
          <h1 className="my-3 font-medium font-poppinsRegular">Filters</h1>
          <button className=" my-3 font-medium font-poppinsRegular">
            Clear All
          </button>
        </div>

        <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div
          style={{ height: "50px" }}
          className="flex flex-row items-center justify-start my-auto"
        >
          <Checkbox color={"indigo"} name="filter" />
          <label
            htmlFor={"filter"}
            className="mx-2 font-medium font-poppinsRegular"
          >
            Premium Bus
          </label>
        </div>
        <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full " />
        <div className="mt-2">
          <span className="mt-2 font-medium font-poppinsRegular">
            Departure from Chennai
          </span>
          <div className="flex flex-row  mt-2">
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[35%] w-[40%] border border-1 border-white mt-1"
                src={sunrise}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sun}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sunset}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={moon}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
          </div>
        </div>
        <hr className="h-px bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div className="mt-2">
          <span className="font-medium font-poppinsRegular">
            Departure to Coimbatore
          </span>
          <div className="flex flex-row  mt-2">
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sunrise}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sun}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={sunset}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
            <div className="border-2 border-gray-300 border-1 w-1/4 flex justify-center items-center flex flex-col">
              <img
                className="h-[40%] w-[40%] border border-1 border-white mt-1"
                src={moon}
                alt="404"
              />
              <p className="text-xs">Before</p>
              <p className="text-xs">6 AM</p>
            </div>
          </div>
        </div>
        <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div className="mt-2 font-poppinsRegular">
          <span className="font-medium ">Bus Type</span>
          {busType.map((busty, index) => (
            <div className="flex flex-row text-md my-2 ms-4" key={index}>
              <Checkbox color={"indigo"} name="filter" className />
              <label htmlFor={"filter"} className="mx-2">
                {busty}
              </label>
            </div>
          ))}
        </div>
        <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full mt-3 " />
        <div className="mt-2 font-poppinsRegular">
          <span className="font-medium font-poppinsRegular">
            Boarding Point
          </span>
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
        <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full mt-3 " />
        <div className="mt-2">
          <span className="font-medium font-poppinsRegular">Droping Point</span>
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
                  placeholder="Enter Droping Point"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full mt-3 " />

        <div className="font-medium font-poppinsRegular ms-2 mt-2">
          Price Range
        </div>

        <div>
          <RangeSlider onChange={sliderValueChanged} />
        </div>
        <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full mt-5" />
        <div className="flex flex-col font-poppinsRegular">
          <span className="font-medium font-poppinsRegular">Amenities</span>
          {aminities.map((aminity, index) => (
            <div className="flex flex-row text-md my-2 ms-4">
              <Checkbox color={"indigo"} name="filter" className="" />
              <label htmlFor={"filter"} className="mx-2">
                {aminity}
              </label>
            </div>
          ))}
        </div>
        <div>
          <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full mt-2" />
          <div className="flex flex-row mt-2 align-middle ">
            <Checkbox color={"black"} name="filter" />
            <label
              htmlFor={"filter"}
              className="mx-2 font-medium font-poppinsRegular"
            >
              Live Tracking
            </label>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125311.61047967589!2d77.0572288!3d11.039539199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711104136406!5m2!1sen!2sin"
            className="w-[90%] h-[50%] mx-auto my-3 rounded-lg shadow-xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default BusFilter;
