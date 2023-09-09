import RoomGuestCountComponent from "modules/hotel/RoomGuestCountComponent"
import { wordings } from "components/utils/constants/stringconstants/common"

type HotelGuestRoomCountComponentProps = {
    roomGuestCount: any,
    setRoomGuestCount: (value: any) => void,
    roomGuestDropdown: boolean,
    showRoomGuestDropdown: (value: any) => void,
    modify: string
}

const HotelGuestRoomCountComponent = ({ roomGuestCount, setRoomGuestCount, roomGuestDropdown, showRoomGuestDropdown, modify }: HotelGuestRoomCountComponentProps) => {
    return (
        <div className={`w-[20%] h-[70px] flex flex-col justify-center items-center ${modify === 'true' ? "" : "bg-white rounded-[10px] border-2 border-black  hover:border-orange-600"} `}>
            <p className={`font-poppinsRegular relative bottom-3 ${modify === 'true' ? "right-[4rem]" : 'bg-white  right-[2.5rem]'} text-center w-[9rem]`}>
                {wordings.hotel.guests} &amp; {wordings.hotel.rooms}
            </p>
            <div className={`flex justify-center w-full h-full relative bottom-2 ${modify === "true" ? "bg-white/30" : ""}`}>
                <button className="flex flex-row w-full h-full justify-center" onClick={() => showRoomGuestDropdown(true)} disabled={roomGuestDropdown}>
                    <p className="flex text-center w-[90%] font-poppinsRegular text-lg justify-center items-center h-full rounded-[5px] px-1">
                        {wordings.hotel.rooms}: {roomGuestCount.roomCount}, {wordings.hotel.adults}: {roomGuestCount.adultCount}
                        {roomGuestCount.childCount > 0 ? `, ${wordings.hotel.child}: ${roomGuestCount.childCount}` : null}
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
            {roomGuestDropdown &&
                <RoomGuestCountComponent
                    modify={modify}
                    roomGuestCount={roomGuestCount}
                    setRoomGuestCount={setRoomGuestCount}
                    showRoomGuestDropdown={showRoomGuestDropdown}
                />
            }
        </div>
    )
}

export default HotelGuestRoomCountComponent;