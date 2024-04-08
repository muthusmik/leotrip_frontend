import React from "react";
import review from "../../../../assets/images/flightreview.png";
import arrow from "../../../../assets/icons/Arrowtick.svg";
import AI from "../../../../assets/images/AI.png";
import flight from "../../../../assets/images/flight.svg";
import { Step, Stepper } from "@material-tailwind/react";
import CouponCode from "modules/hotel/hotelreview/CouponCode";
import PriceSummary from "./FlightPriceSummary";
import TravellerDetails from "modules/flight/traveller/TravellerDetails";
import AddressForm from "modules/flight/traveller/AddressForm";
import ContactInformation from "modules/flight/traveller/ContactInfomation";
import mastercard from "../../../../assets/images/mastercard.png";
import rupay from "../../../../assets/images/RuPay.png";
import visa from "../../../../assets/images/visacard.png";
import paypal from "../../../../assets/images/paypal.png";
const jsonData = {
  tableHeading: {
    Baggage: "Baggage",
    "Check-in": "check-in",
    "Check-out": "Check-out",
  },
  tableData: [
    {
      Baggage: "Adult",
      "Check-in": "15 Kgs (1 piece only)",
      "Check-out": "7 Kgs (1 piece only)",
    },
    {
      Baggage: "Child",
      "Check-in": "15 Kgs (1 piece only)",
      "Check-out": "7 Kgs (1 piece only)",
    },
    {
      Baggage: "Infant",
      "Check-in": "15 Kgs (1 piece only)",
      "Check-out": "7 Kgs (1 piece only)",
    },
  ],
};
const FlightReviewDetails = () => {
  return (
    <>
      <div className="bg-[#def2ff] px-10 font-poppinsRegular py-5 flex">
        <div className="w-[70%]  ">
          <div className="bg-white border">
            <div
              className="flex items-center"
              style={{
                background:
                  "linear-gradient(90deg, rgba(118,171,243,1) 0%, rgba(141,214,238,1) 100%)",
              }}
            >
              <img src={review} alt="review" className="h-14 w-14" />
              <h1 className="font-bold text-lg">Flight Details</h1>
            </div>
            <div className="mx-10 my-5 border-2 rounded border-black py-5">
              <div className="flex items-center justify-between border-[#E3941E] border-l-4 p-1">
                <div className="ms-3">
                  <div>
                    <div className="flex items-center">
                      <h1 className="text-xl">Chennai</h1>
                      <img src={arrow} alt="arrow" className="h-3 px-5" />
                      <h1 className="text-xl">Coimbatore</h1>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <small className="bg-[#FDDFB3] px-1"> Friday, May 05</small>
                    <small className="pl-3"> 1 Stop · 1h 05m</small>
                  </div>
                </div>
                <div className="flex flex-col items-end me-10">
                  <p className="bg-gradient-to-l from-bg-blue-start to-bg-blue-end px-3">
                    <span className="text-xs">Cancellation Fees Apply</span>
                  </p>
                  <small>
                    <button className="text-primary mt-4">
                      View Fare Rules
                    </button>
                  </small>
                </div>
              </div>
              <div className="flex items-center justify-around mt-3 ">
                <div className="flex items-center ">
                  <img src={AI} alt="404" className="h-10 w-10" />
                  <div className="ml-5 text-light-black">
                    <h1 className="text-black text-base">Air India</h1>
                    <p className="text-sm">UK-993</p>
                    <p className="text-sm">ECONOMY</p>
                  </div>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">05 : 00</h1>
                    <p className="text-light-black text-sm">Chennai (MAA)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
                <div>
                  <small className="text-light-black px-16">01h 05m</small>
                  <Stepper className="flex items-center">
                    <Step className="w-3 h-3"></Step>
                    <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                    <Step
                      className="w-7 h-7 bg-cover"
                      style={{ backgroundImage: `url(${flight})` }}
                    ></Step>
                    <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                    <Step className="w-3 h-3"></Step>
                  </Stepper>
                  <p className=" px-1 text-int-blue text-sm text-center p-0 my-2">
                    <span className="border-dotted border-2 border-int-blue rounded-3xl px-2 py-1">
                      Retails Fare
                    </span>
                  </p>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">06 : 00</h1>
                    <p className="text-light-black text-sm">Coimbatore (CJB)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-center w-full relative my-10">
                <hr className="w-8/12 h-px my-8 bg-black border-0 rounded dark:bg-bg-black" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-[#EAE9E9] rounded-full py-2">
                  1h : 5m Layover in Madurai (IXM)
                </div>
              </div>
              <div className="flex items-center justify-around mt-3 ">
                <div className="flex items-center ">
                  <img src={AI} alt="404" className="h-10 w-10" />
                  <div className="ml-5 text-light-black">
                    <h1 className="text-black text-base">Air India</h1>
                    <p className="text-sm">UK-993</p>
                    <p className="text-sm">ECONOMY</p>
                  </div>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">05 : 00</h1>
                    <p className="text-light-black text-sm">Chennai (MAA)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
                <div>
                  <small className="text-light-black px-16">01h 05m</small>
                  <Stepper className="flex items-center">
                    <Step className="w-3 h-3"></Step>
                    <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                    <Step
                      className="w-7 h-7 bg-cover"
                      style={{ backgroundImage: `url(${flight})` }}
                    ></Step>
                    <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                    <Step className="w-3 h-3"></Step>
                  </Stepper>
                  <p className=" px-1 text-int-blue text-sm text-center p-0 my-2">
                    <span className="border-dotted border-2 border-int-blue rounded-3xl px-2 py-1">
                      Retails Fare
                    </span>
                  </p>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">06 : 00</h1>
                    <p className="text-light-black text-sm">Coimbatore (CJB)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
              </div>
              <div className="mx-20 mt-10">
                <table className="w-full  mx-auto ">
                  <thead>
                    <tr className="">
                      {Object.values(jsonData.tableHeading).map(
                        (heading, index) => (
                          <th
                            key={index}
                            className="py-2 text-start font-normal text-base"
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {jsonData.tableData.map((traveler, index) => (
                      <tr key={index}>
                        {Object.values(traveler).map((value, index) => (
                          <td key={index} className="py-3 text-sm font-bold">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mx-10 my-5 border-2 rounded border-black py-5">
              <div className="flex items-center justify-between border-[#E3941E] border-l-4 p-1">
                <div className="ms-3">
                  <div>
                    <div className="flex items-center">
                      <h1 className="text-xl">Coimbatore</h1>
                      <img src={arrow} alt="arrow" className="h-3 px-5" />
                      <h1 className="text-xl">Chennai</h1>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <small className="bg-[#FDDFB3] px-1"> Sunday, May 05</small>
                    <small className="pl-3"> 1 Stop · 1h 05m</small>
                  </div>
                </div>
                <div className="flex flex-col items-end me-10">
                  <p className="bg-gradient-to-l from-bg-blue-start to-bg-blue-end px-3">
                    <span className="text-xs">Cancellation Fees Apply</span>
                  </p>
                  <small>
                    <button className="text-primary mt-4">
                      View Fare Rules
                    </button>
                  </small>
                </div>
              </div>
              <div className="flex items-center justify-around mt-3 ">
                <div className="flex items-center ">
                  <img src={AI} alt="404" className="h-10 w-10" />
                  <div className="ml-5 text-light-black">
                    <h1 className="text-black text-base">Air India</h1>
                    <p className="text-sm">UK-993</p>
                    <p className="text-sm">ECONOMY</p>
                  </div>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">05 : 00</h1>
                    <p className="text-light-black text-sm">Chennai (MAA)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
                <div>
                  <small className="text-light-black px-16">01h 05m</small>
                  <Stepper className="flex items-center">
                    <Step className="w-3 h-3"></Step>
                    <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                    <Step
                      className="w-7 h-7 bg-cover"
                      style={{ backgroundImage: `url(${flight})` }}
                    ></Step>
                    <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                    <Step className="w-3 h-3"></Step>
                  </Stepper>
                  <p className=" px-1 text-int-blue text-sm text-center p-0 my-2">
                    <span className="border-dotted border-2 border-int-blue rounded-3xl px-2 py-1">
                      Retails Fare
                    </span>
                  </p>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">06 : 00</h1>
                    <p className="text-light-black text-sm">Coimbatore (CJB)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-center w-full relative my-10">
                <hr className="w-8/12 h-px my-8 bg-black border-0 rounded dark:bg-bg-black" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-[#EAE9E9] rounded-full py-2">
                  1h : 5m Layover in Madurai (IXM)
                </div>
              </div>
              <div className="flex items-center justify-around mt-3 ">
                <div className="flex items-center ">
                  <img src={AI} alt="404" className="h-10 w-10" />
                  <div className="ml-5 text-light-black">
                    <h1 className="text-black text-base">Air India</h1>
                    <p className="text-sm">UK-993</p>
                    <p className="text-sm">ECONOMY</p>
                  </div>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">05 : 00</h1>
                    <p className="text-light-black text-sm">Chennai (MAA)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
                <div>
                  <small className="text-light-black px-16">01h 05m</small>
                  <Stepper className="flex items-center">
                    <Step className="w-3 h-3"></Step>
                    <div className="flex-1 border-2 border-dotted border-gray-400"></div>
                    <Step
                      className="w-7 h-7 bg-cover"
                      style={{ backgroundImage: `url(${flight})` }}
                    ></Step>
                    <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                    <Step className="w-3 h-3"></Step>
                  </Stepper>
                  <p className=" px-1 text-int-blue text-sm text-center p-0 my-2">
                    <span className="border-dotted border-2 border-int-blue rounded-3xl px-2 py-1">
                      Retails Fare
                    </span>
                  </p>
                </div>
                <div>
                  <div className="text-center ">
                    <h1 className="text-lg">06 : 00</h1>
                    <p className="text-light-black text-sm">Coimbatore (CJB)</p>
                    <p className="text-light-black text-sm">Fri 05 May 2023</p>
                    <p className="text-light-black text-sm">Terminal - 3</p>
                  </div>
                </div>
              </div>
              <div className="mx-20 mt-10">
                <table className="w-full  mx-auto ">
                  <thead>
                    <tr className="">
                      {Object.values(jsonData.tableHeading).map(
                        (heading, index) => (
                          <th
                            key={index}
                            className="py-2 text-start font-normal text-base"
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {jsonData.tableData.map((traveler, index) => (
                      <tr key={index}>
                        {Object.values(traveler).map((value, index) => (
                          <td key={index} className="py-3 text-sm font-bold">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <TravellerDetails />
          </div>
          <div className="bg-white my-5">
            <AddressForm />
          </div>
          <div className="my-5">
            <ContactInformation />
          </div>
        </div>
        <div className="w-[30%] border p-5">
          <div>
            <PriceSummary />
          </div>
          <div>
            <CouponCode />
          </div>
        </div>
      </div>
      <div className="flex w-full bg-gray-300 pb-2 ">
        <img
          src={mastercard}
          alt="mastercard"
          className="w-10 h-6 mt-3 mr-3 lg:mr-10"
        />
        <img src={visa} alt="visa" className="w-10 h-6  mt-3 mr-3 lg:mr-10" />
        <img
          src={paypal}
          alt="paypal"
          className="w-10 h-6  mt-3 mr-3 lg:mr-10"
        />
        <img src={rupay} alt="rupay" className="w-10 h-6  mt-3 " />
      </div>
    </>
  );
};
export default FlightReviewDetails;
