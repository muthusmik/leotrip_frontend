import { useState } from "react";
import { ButtonListing } from "styles/Button";

const BookingPolicies = () => {
  const [isShown, setShown] = useState(false);
  const [isChildOpen, setChildOpen] = useState(false);
  const [isLuggageOpen, setLuggageOpen] = useState(false);
  const [isPetsOpen, setPetsdOpen] = useState(false);
  const [isLiquiorOpen, setLiquiorOpen] = useState(false);
  const [isPickupOpen, setPickupOpen] = useState(false);
  return (
    <>
      <div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-5" />
        <div className="flex flex-row justify-stretch my-3 ">
          <ButtonListing
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
          >
            CANCELLATION
          </ButtonListing>

          <ButtonListing
            onMouseEnter={() => setChildOpen(true)}
            onMouseLeave={() => setChildOpen(false)}
          >
            CHILD PASSENGER
          </ButtonListing>

          <ButtonListing
            onMouseEnter={() => setLuggageOpen(true)}
            onMouseLeave={() => setLuggageOpen(false)}
          >
            LUGGAGE
          </ButtonListing>

          <ButtonListing
            onMouseEnter={() => setPetsdOpen(true)}
            onMouseLeave={() => setPetsdOpen(false)}
          >
            PETS
          </ButtonListing>

          <ButtonListing
            onMouseEnter={() => setLiquiorOpen(true)}
            onMouseLeave={() => setLiquiorOpen(false)}
          >
            LIQOUR
          </ButtonListing>

          <ButtonListing
            onMouseEnter={() => setPickupOpen(true)}
            onMouseLeave={() => setPickupOpen(false)}
          >
            PICKUP TIME
          </ButtonListing>
        </div>
      </div>

      {isShown && (
        <div>
          <div className="my-5">
            <table className=" mx-auto p-3">
              <thead>
                <tr>
                  <th className=" w-[30%] text-center font-normal">
                    <span className="text-base font-poppinsRegular">
                      Cancellation Time <br />
                    </span>
                    <span className="font-poppinsRegular font-medium  text-xs">
                      (before departure)
                    </span>
                  </th>
                  <th className=" w-[20%] text-center font-normal text-base font-poppinsRegular">
                    Penalty %
                  </th>
                  <th className=" w-[50%] text-center  font-normal text-base font-poppinsRegular">
                    Information
                  </th>
                </tr>
              </thead>
              <tbody className="font-PoppinsRegular py-5">
                <tr className=" text-center">
                  <td className=" row-span-2"></td>
                  <td className=""></td>
                  <td className=" text-center  text-xs font-poppinsRegular">
                    * The penalty is calculated based on total seat worth 1300
                  </td>
                </tr>
                <tr className="font-normal">
                  <td className=" text-center text-xs font-poppinsRegular">
                    more than 24 hrs before travel
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    10 %
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    * Penalty is calculated basis the bus service scheduled
                    start time at: 31-10-2023 21:00 (subject to change).
                  </td>
                </tr>
                <tr className="">
                  <td className=" text-center text-xs font-poppinsRegular">
                    12 to 24 hr(s) before travel
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    10 %
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    * Partial cancellation is not allowed for this ticket.
                  </td>
                </tr>
                <tr className="">
                  <td className=" text-center text-xs font-poppinsRegular">
                    6 to 12 hr(s) before travel
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    50 %
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    * Please note : the ticket cannot be cancelled after the bus
                    departs from the first boarding point.
                  </td>
                </tr>
                <tr className="">
                  <td className=" text-center text-xs font-poppinsRegular">
                    3 to 6 hr(s) before travel
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    100 %
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular"></td>
                </tr>
                <tr className="">
                  <td className=" text-center text-xs font-poppinsRegular">
                    0 to 3 hr(s) before travel
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    100 %
                  </td>
                  <td className=" text-center text-xs font-poppinsRegular">
                    * Cancellation amount shown above may also vary basis the
                    non-refundable components of the ticket defined by the bus
                    operator
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isChildOpen && (
        <ul className=" flex justify-center my-5 ">
          <li className="font-poppinsRegular text-sm text-center">
            Children above the age of 5 will need a ticket
          </li>
        </ul>
      )}

      {isLuggageOpen && (
        <ul className=" flex justify-center my-5">
          <li className="font-poppinsRegular text-sm text-center">
            Excess baggage over 10 kgs per passenger will be chargeable
          </li>
        </ul>
      )}

      {isPetsOpen && (
        <ul className=" flex justify-center my-5">
          <li className="font-poppinsRegular text-sm text-center">
            Pets are not allowed
          </li>
        </ul>
      )}

      {isLiquiorOpen && (
        <ul className=" flex justify-center my-5">
          <li className="font-poppinsRegular text-sm text-center">
            Carrying or consuming liquor inside the bus is prohibited. Bus
            operator reserves the right to deboard drunk passengers.
          </li>
        </ul>
      )}

      {isPickupOpen && (
        <ul className=" flex justify-center my-5 ">
          <li className="font-poppinsRegular text-sm text-wrap text-center px-5">
            Bus operator is not obligated to wait beyond the scheduled departure
            time of the bus. No refund request will be entertained for late
            arriving passengers.
          </li>
        </ul>
      )}
    </>
  );
};
export default BookingPolicies;
