import React, { useEffect, useState } from "react";
import Arrowright from '../../assets/icons/Arrowright.svg';
import Arrowleft from '../../assets/icons/Arrowleft.svg';


export default function Slidercomponent({ offers, Box ,goToPrevious1,goToNext1}: any) {

    const boxesPerPage = 1;
    const numberOfBoxes = Math.ceil(offers.length / boxesPerPage);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerWidth = 400; // Width of each box + gap
    const [isPrevious, setPrevious] = useState(false);
    const [isNext, setNext] = useState(true);
    useEffect(()=>{
        console.log("call child.")
        goToPrevious()
    },[goToPrevious1])
    useEffect(()=>{
        console.log("call child.")
        goToNext()
    },[goToNext1])
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

    const sliderWidth = containerWidth * boxesPerPage;

    return (
        <>
            <div className="flex justify-center">
                {/* {isPrevious &&
                    <button
                        onClick={goToPrevious}
                        className="rounded-l px-2"
                    >
                        <img src={Arrowleft} alt="arrow" className="absolute h-10 hover:h-12 ml-[-40px] hover:mt-[-4px]" />
                    </button>
                } */}
                <div className="h-[full] overflow-hidden w-full">
                    <div
                        className="slide-container"
                        style={{ transform: `translateX(-${currentIndex * sliderWidth}px)` }}
                    >
                        {offers.map((offer: any, index: number) => (
                            <Box key={index} offer={offer} />
                        ))}
                    </div>
                </div>
                {/* {isNext &&
                    <button
                        onClick={goToNext}
                        className="bg-transparent px-2 rounded-r"
                    >
                        <img src={Arrowright} alt="arrow" className="absolute h-10 hover:h-12 mx-4 hover:mt-[-4px]" />
                    </button>
                } */}
            </div>
        </>
    );
}