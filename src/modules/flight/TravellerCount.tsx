import React, { useEffect, useState, useRef } from "react";
import { PrimaryButton } from "styles/Button";
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";
import RadioGroup from "components/common/RadioGroup";
import useOutsideAlerter from "hooks/useOutside";

type RoomGuestCountComponentProps = {
  travellerData: any;
  setTravellerData: (travellerData: any) => void;
  setShowTravellerDropdown: (showTravellerDropdown: boolean) => void;
};

const options = [
  { value: "Economy", label: "Economy" },
  { value: "Premium Economy", label: "Premium Economy" },
  { value: "Business", label: "Business" },
];

const TravellerCountComponent = ({
  travellerData,
  setTravellerData,
  setShowTravellerDropdown,
}: RoomGuestCountComponentProps) => {
  const [currentAdultCount, setCurrentAdultCount] = useState(
    travellerData.adultCount
  );
  const [currentChildCount, setCurrentChildCount] = useState(
    travellerData.childCount
  );
  const [currentInfantCount, setCurrentInfantCount] = useState(
    travellerData.infantCount
  );

  const [selectedOption, setSelectedOption] = useState<string>(
    travellerData.class
  );

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
      } else {
        alert("Not allowed");
      }
    } else if (type === "INC") {
      if (currentChildCount < 6) {
        setCurrentChildCount(currentChildCount + 1);
      } else {
        alert("Maximum 6 children are allowed");
      }
    }
  };

  const handleInfantCount = (type: string) => {
    if (type === "DEC") {
      if (currentInfantCount > 0) {
        setCurrentInfantCount(currentInfantCount - 1);
      } else {
        alert("Not allowed");
      }
    } else if (type === "INC") {
      if (currentInfantCount < 6) {
        setCurrentInfantCount(currentInfantCount + 1);
      } else {
        alert("You have reached the maximum room count of 6.");
      }
    }
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleApply = () => {
    setTravellerData({
      adultCount: currentAdultCount,
      childCount: currentChildCount,
      infantCount: currentInfantCount,
      class: selectedOption,
    });
    setShowTravellerDropdown(false);
  };

  const handleClose = () => {};

  const wrapperRef = useRef(null);
  useOutsideAlerter({
    ref: wrapperRef,
    callback: () => setShowTravellerDropdown(false),
  });

  const mainContainerStyle =
    "flex flex-col items-center  mx-auto sm:justify-around  py-2 w-[33%]";
  const subContainerStyle =
    "flex flex-row items-center justify-center  border-slate-400  rounded-lg w-[100px] h-[35px] my-3";
  const imgContainerStyle =
    "w-[40%] h-full flex items-center justify-center self-center cursor-pointer rounded  bg-int-grey-50";
  const imgContainerStyle1 =
    "w-[40%] h-full flex items-center justify-center self-center cursor-pointer rounded   bg-int-grey-50";
  const imgStyle = "w-[50%] h-[50%] ";
  const countContainerStyle =
    " h-full border-slate-400 items-center justify-center";
  const countTag =
    "w-[30px] h-full text-center flex items-center text-lg justify-center font-poppinsRegular ";

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-x-auto md:right-10 w-auto  shadow-2xl bg-white rounded-[10px]  z-50 px-10 py-5 "
    >
      <div className="flex flex-col sm:flex sm:flex-row w-full mt-5">
        <div className={mainContainerStyle}>
          <hr />
          <h2
            className="text-center font-poppinsRegular text-lg font-bold "
            style={{ lineHeight: "15px" }}
          >
            Adults <br />
            <span className="text-xs font-normal">Aged (12+ yrs)</span>
          </h2>
          <div className={subContainerStyle}>
            <div
              className={imgContainerStyle1}
              onClick={() => handleAdultCount("DEC")}
            >
              <img src={Minus} alt="error in minus svg" className={imgStyle} />
            </div>
            <div className={countContainerStyle}>
              <p className={countTag}>{currentAdultCount}</p>
            </div>
            <div
              className={imgContainerStyle}
              onClick={() => handleAdultCount("INC")}
            >
              <img src={Plus} alt="error in plus svg" className={imgStyle} />
            </div>
          </div>
        </div>

        <div className={mainContainerStyle}>
          <h2
            className="text-center font-poppinsRegular text-lg font-bold"
            style={{ lineHeight: "15px" }}
          >
            Children
            <br />
            <span className="text-xs font-normal">Aged (2-12 yrs)</span>
          </h2>
          <div className={subContainerStyle}>
            <div
              className={imgContainerStyle}
              onClick={() => handleChildCount("DEC")}
            >
              <img src={Minus} alt="error in minus svg" className={imgStyle} />
            </div>
            <div className={countContainerStyle}>
              <p className={countTag}>{currentChildCount}</p>
            </div>
            <div
              className={imgContainerStyle}
              onClick={() => handleChildCount("INC")}
            >
              <img src={Plus} alt="error in plus svg" className={imgStyle} />
            </div>
          </div>
        </div>

        <div className={mainContainerStyle}>
          <h2
            className="text-center font-poppinsRegular text-lg font-bold"
            style={{ lineHeight: "15px" }}
          >
            Infant <br />
            <span className="text-xs font-normal">Aged (below 2 yrs)</span>
          </h2>
          <div className={subContainerStyle}>
            <div
              className={imgContainerStyle}
              onClick={() => handleInfantCount("DEC")}
            >
              <img src={Minus} alt="error in minus svg" className={imgStyle} />
            </div>
            <div className={countContainerStyle}>
              <p className={countTag}>{currentInfantCount}</p>
            </div>
            <div
              className={imgContainerStyle}
              onClick={() => handleInfantCount("INC")}
            >
              <img src={Plus} alt="error in plus svg" className={imgStyle} />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-int-grey-20 h-1" />
      <div className="flex flex-col  items-center justify-between py-2 bg-white rounded-xl mx-4 ">
        <h2 className="text-center font-poppinsRegular text-base font-semibold">
          Travel Class
        </h2>
        <div className="flex flex-row">
          <div className="w-full">
            <RadioGroup
              type={"home"}
              options={options}
              selected={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
        </div>
      </div>
      <hr className="border-int-grey-20 h-1" />
      <div className=" justify-around my-1 flex flex-row">
        <div
          className=" rounded-full py-2"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,140,255,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
          }}
        >
          <button
            className="rounded"
            onClick={() => setShowTravellerDropdown(false)}
          >
            <p className="px-8 font-poppinsRegular font-bold text-white rounded">
              Back
            </p>
          </button>
        </div>
        <div
          className=" rounded-full py-2"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,140,255,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
          }}
        >
          <button className="rounded" onClick={() => handleApply()}>
            <p className="px-8 font-poppinsRegular font-bold text-white rounded">
              Apply
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravellerCountComponent;
