import React, { useState } from "react";
import RadioButton from "./Insurance";
function AddressForm() {
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [saveBillingDetails, setSaveBillingDetails] = useState(false);

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleSaveBillingDetailsChange = (event) => {
    setSaveBillingDetails(event.target.checked);
  };
  const saveBillingDetailsToProfile = () => {
    // Here you can implement the logic to save billing details to the user's profile
    console.log("Saving billing details to profile...");
    console.log("Pincode:", pincode);
    console.log("Address:", address);
    console.log("Country:", country);
    console.log("Save Billing Details:", saveBillingDetails);
  };

  const images = {
    image1: require("../../../assets/icons/Leo-white.svg"),
    image2: require("../../../assets/icons/Leo-white.svg"),
    image3: require("../../../assets/icons/Leo-white.svg"),
  };
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <>
      <div className="px-5 py-10">
        <div className="flex items-center">
          <h1 className="font-bold text-lg">your pin code and state</h1>{" "}
          <small className="font-bold">
            (Required for generating your invoice. You can edit this anytime
            later in your profile section.)
          </small>
        </div>
        <form>
          <div className="flex justify-around mt-4">
            <div>
              <div>PIN code:</div>
              <div className="border-2 border-gray-400 rounded-lg p-2">
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  required
                  placeholder="pincode"
                  className=""
                />
              </div>
            </div>

            <div>
              <div>State:</div>
              <div className="border-2 border-gray-400 rounded-lg p-2">
                <select
                  id="state"
                  name="state"
                  value={country}
                  onChange={handleCountryChange}
                  required
                  className="px-10"
                >
                  <option value="state">tamilnadu</option>
                  <option value="state">kerala</option>
                  <option value="state">karnataka</option>
                  <option value="state">andra</option>
                  <option value="state">behar</option>
                </select>
              </div>
            </div>
            <div>
              <div>Address:</div>
              <div className="border-2 border-gray-400 rounded-lg p-2">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={handleAddressChange}
                  required
                  placeholder="your Address (optional)"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              checked={saveBillingDetails}
              onChange={handleSaveBillingDetailsChange}
              className="h-5 w-5"
            />
            <label className="ms-3">
              confirm and Save billing details to your profile
            </label>
          </div>
        </form>
      </div>
      <div className="border">
        <div className="bg-int-dark-grey border p-3">
          <div className="flex flex-col">
            <RadioButton
              value="Yes, I want to secure my trip with insurance."
              selectedOption={selectedOption}
              onChange={handleOptionChange}
              label="Yes, I want to secure my trip with insurance."
            />
            <div className="flex justify-between items-center">
              <div className="bg-int-light-sandal ms-8 w-max my-4 items-center flex ">
                <span className="bg-int-sandal  w-1.5 h-8 inline-block"></span>
                <span className="text-int-wood px-2">
                  More than 36% of our customers choose to secure their trip.
                </span>
              </div>
              <div></div>
            </div>
            <RadioButton
              value="No, I do not want to insure my trip."
              selectedOption={selectedOption}
              onChange={handleOptionChange}
              label="No, I do not want to insure my trip."
            />
          </div>
        </div>
        <div>
          {/* <h2>Select an image:</h2>
                    <select value={selectedImage} onChange={handleImageChange}>
                        <option value="">Select an image</option>
                        {Object.keys(images).map((key) => (
                            <option key={key} value={key}>
                                <img src={images.image1} alt={selectedImage} />
                            </option>
                        ))}
                    </select> */}
        </div>
      </div>
    </>
  );
}

export default AddressForm;
