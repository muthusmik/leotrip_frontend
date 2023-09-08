import React from "react";
import TravellerCountComponent from "modules/flight/TravellerCount";
import { wordings } from "components/utils/constants/stringconstants/common";

type FlightTravellerProps = {
    showTravellerDropdown: boolean,
    modify: string,
    travellerData: any,
    setTravellerData: (value: any) => void,
    setShowTravellerDropdown: (value: any) => void
}

const FlightTraveller = ({ showTravellerDropdown, modify, travellerData, setTravellerData, setShowTravellerDropdown }: FlightTravellerProps) => {
    return (
        <div className={`w-[20%] h-[70px] flex flex-col ${modify === 'true' ? "" : 'border-2 border-black bg-white rounded-[10px] hover:border-orange-600 justify-center items-center'} `}>
            <p className={`font-poppinsRegular relative bottom-3 ${modify === 'true' ? "" : 'bg-white'} text-center w-[9rem] right-[2.2rem]`}>
                {wordings.flight.travellers} & {wordings.flight.class}
            </p>
            <div className={`flex flex-row justify-center w-full h-full relative bottom-3 ${modify === "true" ? "bg-white/30" : ""}`}>
                <button className="flex flex-row w-full h-full" onClick={() => setShowTravellerDropdown(true)} disabled={showTravellerDropdown}>
                    <p className="flex text-center font-poppinsRegular w-[90%] h-full text-[16px] rounded-[5px] px-1">
                        {wordings.flight.travellers}: {travellerData.adultCount + travellerData.childCount + travellerData.infantCount}<br />
                        {/* {travellerData.childCount > 0 ? `, Child: ${travellerData.childCount}` : null}
                            {travellerData.infantCount > 0 ? `, Infant: ${travellerData.infantCount}` : null} */}
                        {wordings.flight.class}: {travellerData.class}
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-8 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {showTravellerDropdown &&
                <TravellerCountComponent
                    modify={modify}
                    travellerData={travellerData}
                    setTravellerData={setTravellerData}
                    setShowTravellerDropdown={setShowTravellerDropdown}
                />
            }
        </div>
    )
}

export default FlightTraveller;