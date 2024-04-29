import { useEffect, useState } from "react";
import user from "../../assets/images/user.png";
import CustomInput from "modules/bus/CustomInput";
import Male from "../../assets/icons/male_gender.avif";
import Female from "../../assets/icons/female_gender.avif";
import DateOfBirthInput from "./Calender";
import ContactDetails from "./ContactDetails";

const ChildDetails = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [nextId, setNextId] = useState(1);

  const [passengers, setPassengers] = useState<
    { id: number; gender: string }[]
  >([{ id: nextId, gender: selectedGender }]);
  const [passengerCount, setPassengerCount] = useState(0);

  const handleClick = (gender: any) => {
    setNextId(nextId + 1);
    setPassengers([...passengers, { id: nextId + 1, gender }]);
    setPassengerCount(passengerCount + 1);
  };

  useEffect(() => {
    console.log("selectedGender", [passengers]);
  }, [passengers]);

  const handleClickGender = (id: number) => {
    setPassengers(
      passengers.map((passenger) =>
        passenger.id === id
          ? {
            ...passenger,
            gender: passenger.gender === "male" ? "female" : "male",
          }
          : passenger
      )
    );
  };

  const removePassenger = (id: any) => {
    setPassengers(passengers.filter((passenger) => passenger.id !== id));
    setPassengerCount(passengerCount - 1);
  };

  return (
    <>
      <div className="font-poppinsRegular ">
        <div className="bg-white">
          <div
            className=" mt-2 flex justify-between px-5 py-3 items-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(118,171,243,1) 0%, rgba(141,214,238,1) 100%)",
            }}
          >
            <div className="flex items-center ">
              <img src={user} alt="User Icon" className="h-6 w-6" />
              <h1 className="text-white font-semibold  ms-3">CHILD <small>(1-12yrs)</small></h1>
            </div>
            <div className="text-white font-semibold text-sm">
              {passengers.length} / {passengers.length} added
            </div>
          </div>
          <div className="border-2 border-light-black border-t-0 p-7 ">
            {passengers.map((passenger, index) => (
              <div
                key={passenger.id}
                className="border-2 border-light-black  rounded-t-lg mt-4"
              >
                <div className=" ">
                  <div className="flex flex-row justify-between px-4 border-b-2 border-light-black">
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-green-500"
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
                        CHILD {index + 1}
                      </label>
                    </div>
                    <div>
                      <button
                        className="bg-red-500 text-white px-4 py-1 my-2 rounded ml-2"
                        onClick={() => removePassenger(passenger.id)}
                      >
                        <span className="font-bold">X</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-int-sandal-light py-1">
                    <div className="ms-4 flex flex-row items-center">
                      <h1 className="text-base">important :</h1>
                      <span className="text-xs ms-3">
                        Enter name as mentioned on your passport or Government
                        approved IDs.
                      </span>
                    </div>
                  </div>
                  <div className="border-t-2 border-light-black   items-center p-7">
                    <div className="flex  justify-around items-center">
                      <CustomInput
                        label="Custom Input"
                        value={""}
                        setValue={() => { }}
                        placeholder="First & Middle Name"
                      />

                      <CustomInput
                        label="Custom Input"
                        value={""}
                        setValue={() => { }}
                        placeholder="Last Name"
                      />
                      <div className="flex items-center h-full w-wrap ">
                        <button
                          className={` flex p-2 rounded ${passenger.gender === "male"
                              ? "bg-white shadow-md text-black"
                              : "bg-[#f7f7f7]"
                            }`}
                          onClick={() => handleClickGender(passenger.id)}
                        >
                          <img src={Male} alt="Male image" className="h-6" />
                          Male
                        </button>
                        <button
                          className={` rounded flex p-2 ${passenger.gender === "female"
                              ? "bg-white shadow-md text-black"
                              : "bg-[#f7f7f7]"
                            }`}
                          onClick={() => handleClickGender(passenger.id)}
                        >
                          <img
                            src={Female}
                            alt="Female image"
                            className="h-6"
                          />
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
                  </div>
                </div>
              </div>
            ))}
            <div className="border-2 rounded-b-lg border-t-0 border-light-black">
              <button
                className=" text-int-dark-sea-blue px-4 py-2"
                onClick={() => handleClick(selectedGender)}
              >
                + ADD NEW CHILD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildDetails;
