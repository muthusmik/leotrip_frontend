import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BGTraveler from "../../assets/images/traveler.svg";
import BGMap from "../../assets/images/bgCameraMap.svg";
import BGMountain from "../../assets/images/BGMountainEve.svg";
import "../../index.css";
import { SlideFirst, SlideSecond, SlideThird } from "components/utils/constants/HTML/AuthSliders";

export function IndicateSlider() {
    const slideData = [
        { image: BGMap, text: <SlideFirst /> },
        { image: BGTraveler, text: <SlideSecond /> },
        { image: BGMountain, text: <SlideThird /> },
    ];

    return (
        <Carousel
            showArrows={false}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            centerMode={true}
            centerSlidePercentage={100}
            infiniteLoop={false}
            autoPlay={true}
            interval={2000}
            dynamicHeight={false}
            renderArrowPrev={(clickHandler, hasPrev, label) =>
                hasPrev && (
                    <button onClick={clickHandler} className="arrow-prev">
                        {label}
                    </button>
                )
            }
            renderArrowNext={(clickHandler, hasNext, label) =>
                hasNext && (
                    <button onClick={clickHandler} className="arrow-next">
                        {label}
                    </button>
                )
            }
        >
            {slideData.map((slide, index) => (
                <div key={index} className="h-[520px] rounded-l-lg" style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)' /* Adjust the opacity value here */
                }}>
                    <>
                        {slide.text}
                    </>
                </div>
            ))}
        </Carousel>
    );
}
