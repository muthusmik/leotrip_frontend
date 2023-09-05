import React, { useEffect, useState, useRef } from 'react';
import { PrimaryButton } from 'styles/Button';
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";
import RadioGroup from 'components/common/RadioGroup';
import useOutsideAlerter from 'hooks/useOutside';

type RoomGuestCountComponentProps = {
    travellerData: any,
    setTravellerData: (travellerData: any) => void,
    setShowTravellerDropdown: (showTravellerDropdown: boolean) => void
}

const options = [
    { value: 'economy', label: 'Economy' },
    { value: 'premiumEconomy', label: "Premium Economy" },
    { value: "business", label: 'Business' }
];

const TravellerCountComponent = ({ travellerData, setTravellerData, setShowTravellerDropdown }: RoomGuestCountComponentProps) => {
    const [currentAdultCount, setCurrentAdultCount] = useState(travellerData.adultCount);
    const [currentChildCount, setCurrentChildCount] = useState(travellerData.childCount);
    const [currentInfantCount, setCurrentInfantCount] = useState(travellerData.infantCount);

    const [selectedOption, setSelectedOption] = useState<string>(travellerData.class);

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

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    const handleApply = () => {
        setTravellerData({
            adultCount: currentAdultCount,
            childCount: currentChildCount,
            infantCount: currentInfantCount,
            class: selectedOption
        })
        setShowTravellerDropdown(false)
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter({ ref: wrapperRef, callback: () => setShowTravellerDropdown(false) });

    const mainContainerStyle = 'flex flex-row items-center justify-between px-8 py-2 w-full'
    const subContainerStyle = "flex flex-row items-center justify-center border-2 border-slate-400 rounded-lg w-[100px] h-[40px]"
    const imgContainerStyle = 'w-[40%] h-full flex items-center justify-center self-center cursor-pointer'
    const imgStyle = 'w-[70%] h-[72%]'
    const countContainerStyle = 'border-l-2 border-r-2 h-full border-slate-400 items-center justify-center'
    const countTag = 'w-[30px] h-full text-center flex items-center justify-center font-poppinsRegular'

    return (
        <div ref={wrapperRef} className="absolute top-[11rem] right-[-2rem] bg-white border-4 rounded-[10px] w-[36%] z-10">
            <p className='text-center font-bold text-2xl font-poppinsRegular my-4'>Travellers and Class</p>
            <hr />
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
            <hr />
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
            <hr />
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
            <hr />
            <div className="flex items-center justify-between py-2 bg-white rounded-xl my-2 mx-4 border">
                <h2 className="text-center font-poppinsRegular text-xl w-[20%]">Class</h2>
                <div className='w-[68%]'>
                    <RadioGroup options={options} selected={selectedOption} onChange={handleOptionChange} />
                </div>
            </div>
            <hr />
            <div className='flex justify-center my-1'>
                <PrimaryButton rounded onClick={() => handleApply()}>
                    <p className="w-[100px] font-poppinsRegular">Apply</p>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default TravellerCountComponent;