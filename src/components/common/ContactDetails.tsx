import CustomInput from "modules/bus/CustomInput";
import CountrySelector from "./CountrySeelctor";

import { useState } from "react";
const ContactDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e: any) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <>
      <div>
        <div>Booking details will be sent to</div>

        <div className="flex flex-row justify-around p-7">
          <div>
            <div>Country Code</div>
            <CountrySelector
              value={selectedCountry}
              onChange={handleCountryChange}
            />
          </div>
          <div className="">
            <div>Mobile No</div>
            <CustomInput
              label="Custom Input"
              value={""}
              setValue={() => {}}
              placeholder="Mobile No"
            />
          </div>
          <div>
            <div>Email</div>
            <CustomInput
              label="Custom Input"
              value={""}
              setValue={() => {}}
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
