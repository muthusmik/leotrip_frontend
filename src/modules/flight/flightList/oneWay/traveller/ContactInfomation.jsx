import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ContactInformation = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
    // Check if the input value matches the email pattern
    setIsValid(event.target.checkValidity());
  };
  return (
    <>
      <div className="ms-5">
        <div className="flex items-center">
          <h1 className="font-bold text-lg">Contact Information</h1>
          <small className="text-light-black pl-2">
            Your ticket will be sent to this email address
          </small>
        </div>
        <div className="flex border-2 w-[60%] bg-white mt-2">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400 text-3xl p-2"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className={`py-2 pe-20 ${isValid ? "" : "invalid"}`} // Add invalid class if email is not valid
            value={email}
            onChange={handleChange}
            required // Makes the field required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Validates email pattern
          />
        </div>
        {!isValid && (
          <div className="error-msg text-red-400">
            Please enter a valid email address.
          </div>
        )}
      </div>
      <div className="flex my-5">
        <button className="bg-int-sandal mx-auto w-[200px] font-poppinsRegular text-white py-2 rounded-lg font-semibold">
          continue Booking
        </button>
      </div>
    </>
  );
};

export default ContactInformation;
