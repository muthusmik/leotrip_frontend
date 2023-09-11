import React from "react";
import { wordings, tableTitle, flightList } from "components/utils/constants/stringconstants/common";
import AirAsia from '../../../assets/icons/airAsiaSvg.svg';
import FlightArrow from '../../../assets/icons/ArrowFlightList.svg';
import { PrimaryButton } from "styles/Button";
import moment from 'moment';
import ToggleButton from "components/common/ToggleComponent";

const FlightOneTripListing = () => {

    const handleFlight = (value: any) => {
        console.log("Value Selected...........", value);
    }

    return (
        <div className="w-[80%] font-poppinsRegular">
            <div className="flex flex-row bg-white border-2 border-black/50 rounded-md py-2 text-lg">
                {tableTitle.map((item) => {
                    return (
                        <div className={`flex flex-row w-[20%] justify-center items-center ${item === 'Recommended' ? 'px-0' : null}`}>
                            <p className="uppercase text-center">{item}</p>
                            {item === "Recommended" ? <ToggleButton /> : null}
                        </div>
                    )
                })}
            </div>
            <div>
                {flightList.map((item, index) => {
                    return (
                        <div key={item.id} className="border-2 pt-4 border-black/50 bg-white rounded-md hover:bg-slate-300">
                            {/* <button className="w-full"> */}
                            <div className='flex flex-row w-full'>
                                <div className="w-[20%] flex justify-center gap-2">
                                    <div className="w-[24%] h-[3rem]">
                                        <img src={AirAsia} alt="error" className="bg-transparent w-full h-full object-fit" />
                                    </div>
                                    <div className="w-[60%] items-center">
                                        <p>{item.airLineName}</p>
                                        <p className="text-sm text-black/30">{item.flightNo}</p>
                                    </div>
                                </div>
                                <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                                    <p className="">{moment(item.departureTime).format("HH:MM")}</p>
                                    <p>{item.departureFrom}</p>
                                </div>
                                <div className="w-[20%] gap-2 text-black/30">
                                    <p className="w-full text-center">1h 05m</p>
                                    <img src={FlightArrow} alt="error" className="bg-transparent w-full" />
                                    <p className="w-full text-center">{item.stop}-stop</p>
                                </div>
                                <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                                    <p className="">{moment(item.arrivingTime).format("HH:MM")}</p>
                                    <p>{item.destinationTo}</p>
                                </div>
                                <div className="w-[20%] flex justify-center gap-2">
                                    <p className="text-xl text-red-600">₹{item.price}</p>
                                </div>
                                <div className="w-[20%] flex justify-center gap-2">
                                    <PrimaryButton rounded onClick={() => handleFlight(item)}>
                                        <p>Book Now</p>
                                    </PrimaryButton>
                                </div>
                            </div>
                            <div className="w-full ps-10 mt-3">
                                <p className="border-l-4 border-orange-600 bg-orange-300 py-1 ps-4 w-[72%] text-lg">Use Promo Code: BOOK NOW to get flat Rs.300 OFF on this flight</p>
                            </div>
                            <div className="w-full bg-slate-100 flex justify-start mt-3 rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-sky-500 ps-6">Flight Detail</p>
                            </div>
                            {/* </button> */}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default FlightOneTripListing;