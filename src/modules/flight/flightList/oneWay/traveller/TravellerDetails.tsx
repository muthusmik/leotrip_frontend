import { SetStateAction, useState } from "react";
import Lock from "../../../../../assets/images/icons-lock.png";
import ChildDetails from "components/common/ChildDetails";
import InfantDetails from "components/common/InfantDetails";
import AdultDetails from "components/common/AdultDetails";
import ContactDetails from "components/common/ContactDetails";


const TravellerDetails = () => {
    const [activeButton, setActiveButton] = useState("personal");
    const handleButtonClick = (button: any) => {
        setActiveButton(button);
    };

   


// const [selectedImage, setSelectedImage] = useState('');

//   // Handle change event when user selects an image
//   const handleImageChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setSelectedImage(event.target.value);
//   };
    return (
        <>

            <div className="bg-white my-5">
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
                                className={`${activeButton === "personal" ? "bg-int-sandal" : "text-black"
                                    } rounded-full text-xl px-7 text-${activeButton === "personal" ? "white" : "black"
                                    } py-1`}
                                onClick={() => handleButtonClick("personal")}
                            >
                                Personal
                            </button>
                            <button
                                className={`${activeButton === "business" ? "bg-int-sandal" : " text-black"
                                    } rounded-full text-xl px-7 text-${activeButton === "business" ? "white" : "black"
                                    } py-1`}
                                onClick={() => handleButtonClick("business")}
                            >
                                Business
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-12">
                    <AdultDetails />
                </div>
                <div className="mx-12">
                    <ChildDetails />
                </div>
                <div className="mx-12">
                    <InfantDetails />
                </div>
                <div className="border border-t-1 border-b-1  mt-10">
                    <div className="py-3 mx-12">
                        <ContactDetails />
                    </div>

                </div>
                <div className="pl-12 py-5">
                    <div className="flex items-center">
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
    )
}
export default TravellerDetails