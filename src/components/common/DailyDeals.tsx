import React, { useState } from "react";
import Arrowright from '../../assets/icons/Arrowright.svg';
import Arrowleft from '../../assets/icons/Arrowleft.svg';
import logo from '../../assets/icons/LeoLogo.svg';
import Mapicon from '../../assets/icons/mapicon.gif';
import { offers } from "./Offers";
import '../../index.css';
import { Box } from "./Sliderbox";
import { Slidebutton } from "styles/Button";
export function Dailydeals() {

    const boxesPerPage = 1;
    const numberOfBoxes = Math.ceil(offers.length / boxesPerPage);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerWidth = 400; // Width of each box + gap
    const [isPrevious, setPrevious] = useState(false);
    const [isNext, setNext] = useState(true);


    const goToPrevious = () => {

        setCurrentIndex(prevIndex => (prevIndex - 1 + numberOfBoxes) % numberOfBoxes);
        // setNext(false);
        setNext(true);
        if (currentIndex === 1) {
            setPrevious(false);
        }
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % numberOfBoxes);

        if (currentIndex === offers.length - 1) {
            setPrevious(false)
            console.log("currentIndex2", currentIndex)
        } else {
            setPrevious(true);
            console.log("currentIndex", currentIndex)
        }
        if (currentIndex === offers.length - 4) {
            setNext(false)
        }

    };
    console.log("dfghj", isPrevious);

    const sliderWidth = containerWidth * boxesPerPage;

    return (
        <div className="h-80 w-[80%] mx-[10%] border-white rounded-3xl shadow-card mb-[4%]">
            <div className="grid grid-flow-row-1 grid-flow-col h-[18%] rounded-t-3xl linear text-center font-poppinsRegular text-3xl pt-3 bg-primary">
                <div className="font-PoppinsSemiBold ml-5 text-left">DAILY DEALS</div>
                <div className="ml-10 mt-5"><Slidebutton /></div>
                <div className="w-full flex justify-end"><img src={logo} alt='leoLogo' className="h-10 pr-5" /></div>
            </div>
            <div className="flex mt-7 ml-10">
                <div className="h-10 w-10 bg-white border border-r-0">
                    <img src={Mapicon}/>
                </div>
                <div className="h-10 w-40 bg-gray-100 rounded-r-full border pt-1 pl-2">Deal Near {"chennai"}</div>
            </div>
            <div className="flex justify-center">
                {isPrevious &&
                    <button
                        onClick={goToPrevious}
                        className="rounded-l px-2"
                    >
                        <img src={Arrowleft} alt="arrow" className="absolute h-10 hover:h-12 ml-[-40px] hover:mt-[-4px]" />
                    </button>
                }
                <div className="h-[82%] overflow-hidden w-full">
                    <div
                        className="slide-container"
                        style={{ transform: `translateX(-${currentIndex * sliderWidth}px)` }}
                    >
                        {offers.map((offer: any, index: number) => (
                            <Box key={index} offer={offer} className="" />
                        ))}
                    </div>
                </div>
                {isNext &&
                    <button
                        onClick={goToNext}
                        className="bg-transparent px-2 rounded-r"
                    >
                        <img src={Arrowright} alt="arrow" className="absolute h-10 hover:h-12 mx-4 hover:mt-[-4px]" />
                    </button>
                }
            </div>
        </div>
    );
}