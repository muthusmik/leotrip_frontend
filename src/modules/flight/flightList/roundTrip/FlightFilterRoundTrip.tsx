import Checkbox from "components/common/CheckBox";
const FlightFilterRoundTrip = () => {
  const PopularFilter: string[] = [
    "Non Stop",
    "Morning Departure",
    "Spicejet",
    "Air India",
    "Indigo",
    "AirAsia",
  ];
  return (
    <div>
      <div>
        <div className=" w-[80%]  border border-gray-100  mx-auto rounded-xl px-4 bg-white sticky top-10">
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
            <Checkbox color={"indigo"} name="filter" className="" />
            <label
              htmlFor={"filter"}
              className="mx-2 font-medium font-poppinsRegular"
            >
              Premium Bus
            </label>
          </div>
          <hr className="h-0.5 bg-int-gray border-0 dark:bg-int-gray w-full " />
        </div>
      </div>
    </div>
  );
};
export default FlightFilterRoundTrip;
