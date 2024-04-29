import { Link } from "react-router-dom";
const TravellerInfo = () => {
  return (
    <>
      <div className="bg-white border-2 rounded-xl shadow-xl mt-5 p-5 font-poppinsRegular">
        <div className="flex flex-row justify-between ms-5">
          <h1 className="text-xl">Traveller Details</h1>
          <div className="">
            <button className="border border-1 bg-[#2B93D4] text-white text-xl rounded-lg px-5  me-12">
              Edit
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between my-12">
          <div className="flex flex-col ms-7 ">
            <h1 className="mb-4 text-lg text-start">E-mail</h1>
            <h1 className="text-light-black text-base text-center">
              gowtham@gmail.com
            </h1>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="mb-4 text-lg">Contact No.</h1>
            <h1 className="text-light-black text-base">9876543210</h1>
          </div>
          <div className="flex flex-col me-44 text-center">
            <h1 className="mb-4 text-lg">Address</h1>
            <h1 className="text-light-black text-base">Coimbatore</h1>
            <h1 className="text-light-black text-base">Saravanampatti</h1>
          </div>
        </div>

        <div className="flex flex-col text-start mt-3">
          <h1 className="ms-7 text-start">Adult (1)</h1>
          <h1 className="ms-10 text-light-black">Harry Poter</h1>
          <h1 className="ms-10 text-light-black">01-01-1990</h1>
        </div>
      </div>
    </>
  );
};

export default TravellerInfo;
