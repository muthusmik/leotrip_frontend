import React, { useEffect, useState } from 'react';
import { PrimaryButton } from 'styles/Button';
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";

type RoomGuestCountComponentProps = {
    travellerData: any,
    setTravellerData: (travellerData: any) => void,
    setShowTravellerDropdown: (showTravellerDropdown: boolean) => void
}

const TravellerCountComponent = ({ travellerData, setTravellerData, setShowTravellerDropdown }: RoomGuestCountComponentProps) => {
    const [currentAdultCount, setCurrentAdultCount] = useState(travellerData.adultCount);
    const [currentChildCount, setCurrentChildCount] = useState(travellerData.childCount);
    const [currentInfantCount, setCurrentInfantCount] = useState(travellerData.infantCount);
    const [childAges, setChildAges] = useState<Array<number>>([0]);

    const handleAdultCount = (type: string) => {
        if (type === "DEC") {
            if (currentAdultCount > 1) {
                setCurrentAdultCount(currentAdultCount - 1);
            } else {
                alert("Minimum 1 adult is required");
            }
        } else if (type === "INC") {
            if (currentAdultCount < 9) {
                setCurrentAdultCount(currentAdultCount + 1);
            } else {
                alert("You have reached the maximum adult count of 9.");
            }
        }
    };

    const handleChildCount = (type: string) => {
        if (type === "DEC") {
            if (currentChildCount > 0) {
                setCurrentChildCount(currentChildCount - 1);
            }
            else {
                alert("Not allowed")
            }
        } else if (type === "INC") {
            if (currentChildCount < 6) {
                setCurrentChildCount(currentChildCount + 1);
            }
            else {
                alert("Maximum 6 children are allowed")
            }
        }
    };

    const handleInfantCount = (type: string) => {
        if (type === "DEC") {
            if (currentInfantCount > 0) {
                setCurrentInfantCount(currentInfantCount - 1);
            }
            else {
                alert("Not allowed")
            }
        } else if (type === "INC") {
            if (currentInfantCount < 6) {
                setCurrentInfantCount(currentInfantCount + 1);
            } else {
                alert("You have reached the maximum room count of 6.");
            }
        }
    }

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
                    <p className='w-[30%] text-sm'>{`Child ${i + 1} age`}</p>
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
        console.log("Count.................", currentChildCount, currentAdultCount, currentInfantCount);
        setTravellerData({
            adultCount: currentAdultCount,
            childCount: currentChildCount,
            infantCount: currentInfantCount
        })
        setShowTravellerDropdown(false)
    }
    const mainContainerStyle = 'flex flex-row items-center justify-between px-8 py-2 w-full'
    const subContainerStyle = "flex flex-row items-center justify-center border-2 border-slate-400 rounded-lg w-[100px] h-[40px]"
    const imgContainerStyle = 'w-[40%] h-full flex items-center justify-center self-center cursor-pointer'
    const imgStyle = 'w-[72%] h-[80%]'
    const countContainerStyle = 'border-l-2 border-r-2 h-full border-slate-400 items-center justify-center'
    const countTag = 'w-[30px] h-full text-center flex items-center justify-center font-poppinsRegular'

    return (
        <div className="absolute top-[8rem] right-[-80px] bg-white border-4 rounded-[10px] w-[36%] z-10">
            <div className={mainContainerStyle}>
                <h2 className="text-center font-poppinsRegular text-xl">Adults<span className='text-sm'> (12y +)</span></h2>
                <div className={subContainerStyle}>
                    <div className={imgContainerStyle} onClick={() => handleAdultCount("DEC")}>
                        <img src={Minus} alt='error in minus svg' className={imgStyle} />
                    </div>
                    <div className={countContainerStyle}>
                        <p className={countTag}>{currentAdultCount}</p>
                    </div>
                    <div className={imgContainerStyle} onClick={() => handleAdultCount("INC")}>
                        <img src={Plus} alt='error in plus svg' className={imgStyle} />
                    </div>
                </div>
            </div>
            <div className={mainContainerStyle}>
                <h2 className="text-center font-poppinsRegular text-xl">Children<span className='text-sm'> (2y - 12y)</span></h2>
                <div className={subContainerStyle}>
                    <div className={imgContainerStyle} onClick={() => handleChildCount("DEC")}>
                        <img src={Minus} alt='error in minus svg' className={imgStyle} />
                    </div>
                    <div className={countContainerStyle}>
                        <p className={countTag}>{currentChildCount}</p>
                    </div>
                    <div className={imgContainerStyle} onClick={() => handleChildCount("INC")}>
                        <img src={Plus} alt='error in plus svg' className={imgStyle} />
                    </div>
                </div>
            </div>
            <div className={mainContainerStyle}>
                <h2 className="text-center font-poppinsRegular text-xl">Infant<span className='text-sm'> (below 2y)</span></h2>
                <div className={subContainerStyle}>
                    <div className={imgContainerStyle} onClick={() => handleInfantCount("DEC")}>
                        <img src={Minus} alt='error in minus svg' className={imgStyle} />
                    </div>
                    <div className={countContainerStyle}>
                        <p className={countTag}>{currentInfantCount}</p>
                    </div>
                    <div className={imgContainerStyle} onClick={() => handleInfantCount("INC")}>
                        <img src={Plus} alt='error in plus svg' className={imgStyle} />
                    </div>
                </div>
            </div>
            {/* <div className='w-full px-2'>
                <h6 className='text-center font-poppinsRegular text-sm mb-2'>Please provide right number of children along with their right age for best options and prices.</h6>
                <div className='flex w-full justify-between flex-wrap'>
                    {renderChildAgesInput()}
                </div>
                {currentChildCount > 0 && !isChildAgeValid() && (
                    <p className='text-center text-red-700 font-poppinsRegular mt-2'>Please provide ages for all children.</p>
                )}
            </div>
            <hr />
            {isChildAgeValid() ?
                <div className='flex justify-center my-2'>
                    <PrimaryButton rounded onClick={() => handleApply()}>
                        <p className="w-[100px] font-poppinsRegular">Apply</p>
                    </PrimaryButton>
                </div> : null
            } */}
        </div>
    )
}

export default TravellerCountComponent;