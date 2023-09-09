import React, { useEffect, useState, useRef } from 'react';
import { PrimaryButton } from 'styles/Button';
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";
import useOutsideAlerter from 'hooks/useOutside';
import { wordings } from 'components/utils/constants/stringconstants/common';

type RoomGuestCountComponentProps = {
    modify: string,
    roomGuestCount: any,
    setRoomGuestCount: (roomGuestCount: any) => void,
    showRoomGuestDropdown: (roomGuestDropdown: boolean) => void
}

const RoomGuestCountComponent = ({ modify, roomGuestCount, setRoomGuestCount, showRoomGuestDropdown }: RoomGuestCountComponentProps) => {
    const [currentRoomCount, setCurrentRoomCount] = useState(roomGuestCount.roomCount);
    const [currentAdultCount, setCurrentAdultCount] = useState(roomGuestCount.adultCount);
    const [currentChildCount, setCurrentChildCount] = useState(roomGuestCount.childCount);
    const [childAges, setChildAges] = useState<Array<number>>([0]);

    const wrapperRef = useRef(null);
    useOutsideAlerter({ ref: wrapperRef, callback: () => showRoomGuestDropdown(false) });

    const handleRoomCount = (type: string) => {
        if (type === "DEC") {
            if (currentRoomCount > 1) {
                setCurrentRoomCount(currentRoomCount - 1);
                // setRoomGuestCount({ ...roomGuestCount, roomCount: currentRoomCount - 1 });
            }
            else {
                alert("Minimum 1 is required")
            }
        } else if (type === "INC") {
            if (currentRoomCount < 8) {
                setCurrentRoomCount(currentRoomCount + 1);
                // setRoomGuestCount({ ...roomGuestCount, roomCount: currentRoomCount + 1 });
            } else {
                alert("You have reached the maximum room count of 8.");
            }
        }
    }
    const handleAdultCount = (type: string) => {
        if (type === "DEC") {
            if (currentAdultCount > 1) {
                setCurrentAdultCount(currentAdultCount - 1);
                // setRoomGuestCount({ ...roomGuestCount, adultCount: currentAdultCount - 1 });
            } else {
                alert("Minimum 1 adult is required");
            }
        } else if (type === "INC") {
            if (currentAdultCount < 16) {
                setCurrentAdultCount(currentAdultCount + 1);
                // setRoomGuestCount({ ...roomGuestCount, adultCount: currentAdultCount + 1 });
            } else {
                alert("You have reached the maximum adult count of 16.");
            }
        }
    };

    const handleChildCount = (type: string) => {
        if (type === "DEC") {
            if (currentChildCount > 0) {
                setCurrentChildCount(currentChildCount - 1);
                // setRoomGuestCount({ ...roomGuestCount, childCount: currentChildCount - 1 });
            }
            else {
                alert("Not allowed")
            }
        } else if (type === "INC") {
            if (currentChildCount < currentRoomCount * 4) {
                setCurrentChildCount(currentChildCount + 1);
                // setRoomGuestCount({ ...roomGuestCount, childCount: currentChildCount + 1 });
            }
            else {
                alert("Maximum 4 children per room are allowed")
            }
        }
    };

    const handleChildAgeChange = (index: number, age: number) => {
        const updatedAges = [...childAges];
        updatedAges[index] = age;
        setChildAges(updatedAges);
    };

    useEffect(() => {
        const childAgeArray = childAges.slice(0, currentChildCount); // Get ages only for the current child count
        // Use childAgeArray for whatever you need to do with child ages
        console.log("Child Age array...........", childAgeArray);

    }, [currentChildCount, childAges]);

    const renderChildAgesInput = () => {
        const inputs = [];
        for (let i = 0; i < currentChildCount; i++) {
            inputs.push(
                <div className='flex items-center justify-center w-[48%] mb-2'>
                    <p className='w-[30%] text-sm font-bold text-center'>{`Child ${i + 1} age`}</p>
                    <div className='flex items-center justify-center border-2 border-slate-400 rounded-lg w-[60%] p-2'>
                        <input
                            key={i}
                            type="number"
                            value={childAges[i]}
                            onChange={(e) => {
                                const inputValue = parseInt(e.target.value);
                                const validValue = Math.min(Math.max(inputValue, 0), 17);
                                handleChildAgeChange(i, validValue);
                            }}
                            placeholder={`Child ${i + 1} age`}
                            className='outline-none w-full font-poppinsRegular '
                            min={0}
                            max={17}
                        />
                    </div>
                </div>
            );
        }
        return inputs;
    };

    const isChildAgeValid = () => {
        if (currentChildCount > 0) {
            for (let i = 0; i < currentChildCount; i++) {
                if (!childAges[i]) {
                    return false;
                }
            }
        }
        return true;
    };

    const handleApply = () => {
        console.log("Count.................", currentChildCount, currentAdultCount, currentRoomCount);
        setRoomGuestCount({
            roomCount: currentRoomCount,
            adultCount: currentAdultCount,
            childCount: currentChildCount
        })
        showRoomGuestDropdown(false)
    }
    const mainContainerStyle = 'flex flex-row items-center justify-between px-8 py-2 w-full'
    const subContainerStyle = "flex flex-row items-center justify-center border-2 border-slate-400 rounded-lg w-[100px] h-[40px]"
    const imgContainerStyle = 'w-[40%] h-full flex items-center justify-center self-center cursor-pointer'
    const imgStyle = 'w-[70%] h-[72%]'
    const countContainerStyle = 'border-l-2 border-r-2 h-full border-slate-400 items-center justify-center'
    const countTag = 'w-[30px] h-full text-center flex items-center justify-center font-poppinsRegular'

    return (
        <div ref={wrapperRef} className={`absolute ${modify === 'true' ? "top-[4rem]" : "top-[8rem] right-[-2rem]"} bg-white text-black border-4 rounded-[10px] w-[36%] z-10`}>
            <p className='text-center font-bold text-2xl font-poppinsRegular my-4'>{wordings.hotel.rooms} & {wordings.hotel.guests}</p>
            <hr />
            <div className={mainContainerStyle}>
                <h2 className="text-center font-poppinsRegular text-lg">{wordings.hotel.rooms}<span className='text-sm'> (Max 8)</span></h2>
                <div className={subContainerStyle}>
                    <div className={imgContainerStyle} onClick={() => handleRoomCount("DEC")}>
                        <img src={Minus} alt='error in minus svg' className={imgStyle} />
                    </div>
                    <div className={countContainerStyle}>
                        <p className={countTag}>{currentRoomCount}{/* {roomGuestCount.roomCount} */}</p>
                    </div>
                    <div className={imgContainerStyle} onClick={() => handleRoomCount("INC")}>
                        <img src={Plus} alt='error in plus svg' className={imgStyle} />
                    </div>
                </div>
            </div>
            <hr className='pb-2' />
            <h2 className="text-center font-poppinsRegular text-xl">{wordings.hotel.guests}</h2>
            <div className={mainContainerStyle}>
                <h2 className="text-center font-poppinsRegular text-lg">{wordings.hotel.adults}</h2>
                <div className={subContainerStyle}>
                    <div className={imgContainerStyle} onClick={() => handleAdultCount("DEC")}>
                        <img src={Minus} alt='error in minus svg' className={imgStyle} />
                    </div>
                    <div className={countContainerStyle}>
                        <p className={countTag}>{currentAdultCount}{/* {roomGuestCount.adultCount} */}</p>
                    </div>
                    <div className={imgContainerStyle} onClick={() => handleAdultCount("INC")}>
                        <img src={Plus} alt='error in plus svg' className={imgStyle} />
                    </div>
                </div>
            </div>
            <hr />
            <div className={mainContainerStyle}>
                <h2 className="text-center font-poppinsRegular text-lg">{wordings.hotel.children}<span className='text-sm'> (0-17 yrs)</span></h2>
                <div className={subContainerStyle}>
                    <div className={imgContainerStyle} onClick={() => handleChildCount("DEC")}>
                        <img src={Minus} alt='error in minus svg' className={imgStyle} />
                    </div>
                    <div className={countContainerStyle}>
                        <p className={countTag}>{currentChildCount}{/* {roomGuestCount.childCount} */}</p>
                    </div>
                    <div className={imgContainerStyle} onClick={() => handleChildCount("INC")}>
                        <img src={Plus} alt='error in plus svg' className={imgStyle} />
                    </div>
                </div>
            </div>
            <div className='w-full px-2'>
                <h6 className='text-center font-poppinsRegular text-sm mb-2'>{wordings.hotel.notes}</h6>
                <div className='flex w-full justify-between flex-wrap'>
                    {renderChildAgesInput()}
                </div>
                {currentChildCount > 0 && !isChildAgeValid() && (
                    <p className='text-center text-red-700 font-poppinsRegular mt-2'>{wordings.hotel.errorNoteForChildAge}</p>
                )}
            </div>
            <hr />
            {isChildAgeValid() ?
                <div className='flex justify-center my-1'>
                    <PrimaryButton rounded onClick={() => handleApply()}>
                        <p className="w-[100px] font-poppinsRegular">{wordings.hotel.apply}</p>
                    </PrimaryButton>
                </div> : null
            }
        </div>
    )
}

export default RoomGuestCountComponent;