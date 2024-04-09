import React, { useState } from "react";
import review from 'assets/images/flightreview.png';
import arrow from "../../../../../assets/icons/Arrowtick.svg";
import AI from "../../../../../assets/images/AI.png";
import flight from '../../../../../assets/images/flight.svg';
import close from '../../../../../assets/icons/close.png';
import { Step, Stepper } from "@material-tailwind/react";

const jsonData = {
    "tableHeading": {
        "Baggage": "Baggage",
        "Check-in": "check-in",
        "Check-out": "Check-out",
    },
    "tableData": [
        {
            "Baggage": "Adult",
            "Check-in": "15 Kgs (1 piece only)",
            "Check-out": "7 Kgs (1 piece only)",
        },
        {
            "Baggage": "Child",
            "Check-in": "15 Kgs (1 piece only)",
            "Check-out": "7 Kgs (1 piece only)",
        },
        {
            "Baggage": "Infant",
            "Check-in": "15 Kgs (1 piece only)",
            "Check-out": "7 Kgs (1 piece only)",
        },

    ]
};
const FlightDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        console.log("isModalOpen", isModalOpen)
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log("isModalOpen", isModalOpen)
    };




    const [selectedContent, setSelectedContent] = useState("Cancellation Charges");

    const handleButtonClick = (content: any) => {
        setSelectedContent(content);
    };
    return (
        <>
            <div className='bg-white pb-5'>
                <div className="">
                    <div className="flex items-center bg-gradient-to-r from-bg-blue-start to-bg-blue-end">
                        <img src={review} alt="review" className="h-14 w-14" />
                        <h1 className="font-bold text-lg">Flight Details</h1>
                    </div>
                    <div className="mx-10 my-5 border py-5">
                        <div className="flex items-center  border-[#e3941e] border-l-2 p-1">
                            <div>
                                <div>
                                    <div className="flex items-center">
                                        <h1 className="text-lg">Chennai</h1>
                                        <img src={arrow} alt="arrow" className="h-3 px-5" />
                                        <h1 className="text-lg">Coimbature</h1>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <small className="bg-[#fddfb3]"> Friday, May 05</small>
                                    <small className="pl-3"> Non Stop · 1h 05m</small>
                                </div>
                            </div>

                            <div className="ml-auto me-5">
                                <p className="bg-gradient-to-l from-bg-blue-start to-bg-blue-end px-3">Cancellation Fees Apply</p>
                                <small><button className="text-primary" onClick={openModal}>View Fare Rules</button></small>
                            </div>

                        </div>

                        <div className="flex items-center justify-around mt-3">
                            <div className="flex items-center">
                                <img src={AI} alt="404" className="h-10 w-10" />
                                <div className="ml-2">
                                    <h1 className="font-bold">Air India</h1>
                                    <p className="text-light-black">UK-993</p>
                                    <p className="text-light-black">ECONOMY</p>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <h1 className="font-bold">05 : 00</h1>
                                    <p className="text-light-black">Chennai (MAA)</p>
                                    <p className="text-light-black">Fri 05 May 2023</p>
                                    <p className="text-light-black">Terminal - 3</p>
                                </div>
                            </div>
                            <div>
                                <small className="text-light-black px-16">01h 05m</small>
                                <Stepper className="">
                                    <Step className="w-5 h-5">
                                    </Step>
                                    <Step className="w-7 h-7 bg-cover" style={{ backgroundImage: `url(${flight})` }}>
                                    </Step>
                                    <Step className="w-5 h-5">
                                    </Step>
                                </Stepper>
                                <p className="border-dotted border-2 border-int-blue rounded-3xl px-1 text-int-blue text-xs text-center p-0">
                                    Retails fare
                                </p>
                            </div>
                            <div>
                                <div className="">
                                    <h1 className="font-bold">06 : 00</h1>
                                    <p className="text-light-black">Coimbatore (CJB)</p>
                                    <p className="text-light-black">Fri 05 May 2023</p>
                                    <p className="text-light-black">Terminal - 3</p>
                                </div>
                            </div>
                        </div>

                        <div className='mx-20 mt-10'>
                            <table className='w-full  mx-auto '>
                                <thead>
                                    <tr className=''>
                                        {Object.values(jsonData.tableHeading).map((heading, index) => (
                                            <th key={index} className='py-2 text-start font-normal'>{heading}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {jsonData.tableData.map((traveler, index) => (
                                        <tr key={index}>
                                            {Object.values(traveler).map((value, index) => (
                                                <td key={index} className='py-3 font-bold'>{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            {isModalOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50'>


                    <div className='bg-white rounded-md p-5 w-[50%]'>
                        <button className='text-red-500 text-end' onClick={closeModal}><img src={close} alt="c" /></button>
                        <h1 className="text-lg font-semibold">fare rules</h1>
                        <div className="flex justify-around">
                            <button className="text-lg border-b-2 border-transparent hover:border-blue-500 active" onClick={() => handleButtonClick("Cancellation Charges")}>Cancellation Charges</button>
                            <button className="text-lg border-b-2 border-transparent hover:border-blue-500" onClick={() => handleButtonClick("Date change charges")}>Date change charges</button>
                        </div>
                        <div className="">

                            {selectedContent === "Cancellation Charges" && (
                                <>
                                <div className="border border-gray-200 border-2">
                                    <div className="flex items-center bg-gray-100 p-2">
                                        <img src={AI} alt="ai" className="w-7 h-7" />
                                        <h1 className="font-semibold pl-2">Chennai </h1>
                                        <span>-</span>
                                        <h1 className="font-semibold"> Coimbatore</h1>
                                    </div>
                                    <div className="w-full border-gray-200 rounded-lg my-5">
                                        <table className="w-[93%] mx-5">
                                            <thead className="">
                                                <tr className="">
                                                    <th className="text-start p-2 border border-gray-200 border-2 me-10">Time Frame <p><small>(from scheduled departure)</small></p></th>
                                                    <th className="border border-gray-200 border-2 text-start p-2">Airline Fee+MMT Fee<p><small>(from scheduled departure)</small></p></th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr className="">
                                                    <td className="border border-gray-200 border-2 p-2 text-light-black">0 hours to 3 hours*</td>
                                                    <td className="border border-gray-200 border-2 p-2 font-semibold"><span className="text-light-black pe-2">ADULT:</span>Non Refundable</td>
                                                    
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 border-2 p-2 text-light-black">3 hours to 4 days*</td>
                                                    <td className="border border-gray-200 border-2 p-2 font-semibold"><span className="text-light-black pe-2">ADULT:</span>&#x20B9;3,500+&#x20B9;300</td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 border-2 p-2 text-light-black">4 days to 365 days*</td>
                                                    <td className="border border-gray-200 border-2 p-2 font-semibold"><span className="text-light-black pe-2">ADULT:</span>&#x20B9;3,000+&#x20B9;300</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="pl-5">*From the Date of Departure</p>
                                </div>
                                <div className="bg-[#fddfb3] p-2 mt-5">
                                    <h1 className="font-semibold text-base">*Important:</h1>
                                    <p className="text-justify pl-5">The airline fee is indicative. MakeMyTrip does not guarantee the accuracy of this information. All fees mentioned are per passenger.</p>
                                </div>
                                </>
                            )}
                        </div>
                        <div className="">
                            {selectedContent === "Date change charges" && (
                               <>
                               <div className="border border-gray-200 border-2">
                                   <div className="flex items-center bg-gray-100 p-2">
                                       <img src={AI} alt="ai" className="w-7 h-7" />
                                       <h1 className="font-semibold pl-2">Chennai </h1>
                                       <span>-</span>
                                       <h1 className="font-semibold"> Coimbatore</h1>
                                   </div>
                                   <div className="w-full border-gray-200 rounded-lg my-5">
                                       <table className="w-[93%] mx-5">
                                           <thead className="">
                                               <tr className="">
                                                   <th className="text-start p-2 border border-gray-200 border-2">Time Frame <p><small>(from scheduled departure)</small></p></th>
                                                   <th className="border border-gray-200 border-2 text-start p-2">Airline Fee+MMT Fee<p><small>(from scheduled departure)</small></p></th>
                                               </tr>
                                           </thead>
                                           <tbody className="">
                                               <tr className="">
                                                   <td className="border border-gray-200 border-2 p-2 text-light-black">0 hours to 3 hours*</td>
                                                   <td className="border border-gray-200 border-2 p-2 font-semibold"><span className="text-light-black pe-2">ADULT:</span>Non Refundable</td>
                                                   
                                               </tr>
                                               <tr className="">
                                                   <td className="border border-gray-200 border-2 p-2 text-light-black">3 hours to 4 days*</td>
                                                   <td className="border border-gray-200 border-2 p-2 font-semibold"><span className="text-light-black pe-2">ADULT:</span>&#x20B9;3,500+&#x20B9;300</td>
                                               </tr>
                                               <tr className="">
                                                   <td className="border border-gray-200 border-2 p-2 text-light-black">4 days to 365 days*</td>
                                                   <td className="border border-gray-200 border-2 p-2 font-semibold"><span className="text-light-black pe-2">ADULT:</span>&#x20B9;3,000+&#x20B9;300</td>
                                               </tr>
                                           </tbody>
                                       </table>
                                   </div>
                                   <p className="pl-5">*From the Date of Departure</p>
                               </div>
                               <div className="bg-[#fddfb3] p-2 mt-5">
                                   <h1 className="font-semibold text-base">*Important:</h1>
                                   <p className="text-justify pl-5"> The airline fee is indicative. MakeMyTrip does not guarantee the accuracy of this information. All fees mentioned are per passenger. Date change charges are applicable only on selecting the same airline on a new date. The difference in fares between the old and the new booking will also be payable by the user.</p>
                               </div>
                               </>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}
export default FlightDetails;