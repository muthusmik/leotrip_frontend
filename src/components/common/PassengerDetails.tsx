import DateOfBirthInput from "./Calender";
import { useState } from "react";
import CustomInput from "modules/bus/CustomInput";
import Male from "../../assets/icons/male_gender.avif";
import Female from "../../assets/icons/female_gender.avif";
const PassengerDetails = () => {
  const [selectedGender, setSelectedGender] = useState("male");

  const handleClick = (gender: any) => {
    setSelectedGender(gender);
  };
  return (
    <>
      <div className="flex justify-around items-center">
        <CustomInput
          label="Custom Input"
          value={""}
          setValue={() => {}}
          placeholder="First & Middle Name"
        />

        <CustomInput
          label="Custom Input"
          value={""}
          setValue={() => {}}
          placeholder="Last Name"
        />
        <div className="flex items-center flex-wrap">
          <button
            className={` flex p-2 rounded ${
              selectedGender === "male"
                ? "bg-white shadow-md text-black"
                : "bg-[#f7f7f7]"
            }`}
            onClick={() => handleClick("male")}
          >
            <img src={Male} alt="Male image" className="h-6" />
            Male
          </button>
          <button
            className={` rounded flex p-2 ${
              selectedGender === "female"
                ? "bg-white shadow-md text-black"
                : "bg-[#f7f7f7]"
            }`}
            onClick={() => handleClick("female")}
          >
            <img src={Female} alt="Female image" className="h-6" />
            Female
          </button>
        </div>
      </div>
      <div className="mt-10">
        <span className="border-0">Date Of Birth</span>
        <div className="">
          <DateOfBirthInput />
        </div>
      </div>
    </>
  );
};

export default PassengerDetails;
