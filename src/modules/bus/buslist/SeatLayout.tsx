import React from "react";
import { useState } from "react";
import Sleeper from "../../../assets/images/sleeper.png";
import Seater from "../../../assets/images/seater.png";
import Engine from "../../../assets/icons/engine.png";

const SeatLayout = ({ setSelectedSeat }: any) => {
  const Seating = [
    <button key={1} onClick={() => setSelectedSeat(1)}>
      <img src={Seater} alt="404" className="h-6 w-6" />
    </button>,
    <button key={2} onClick={() => setSelectedSeat(2)}>
      <img src={Seater} alt="403" className="h-6 w-6" />
    </button>,
    <button key={3} onClick={() => setSelectedSeat(3)}>
      <img src={Seater} alt="402" className="h-6 w-6" />
    </button>,
    <button key={4} onClick={() => setSelectedSeat(4)}>
      <img src={Seater} alt="401" className="h-6 w-6" />
    </button>,
    <button key={5} onClick={() => setSelectedSeat(5)}>
      <img src={Seater} alt="400" className="h-6 w-6" />
    </button>,
    <button key={6} onClick={() => setSelectedSeat(6)}>
      <img src={Seater} alt="399" className="h-6 w-6" />
    </button>,
    <button key={7} onClick={() => setSelectedSeat(7)}>
      <img src={Seater} alt="398" className="h-6 w-6" />
    </button>,
    <button key={8} onClick={() => setSelectedSeat(8)}>
      <img src={Seater} alt="397" className="h-6 w-6" />
    </button>,
    <button key={9} onClick={() => setSelectedSeat(9)}>
      <img src={Seater} alt="396" className="h-6 w-6" />
    </button>,
  ];

  const Sleep = [
    <button key={1} onClick={() => setSelectedSeat(1)}>
      <img src={Sleeper} alt="395" className="h-11 w-12 " />
    </button>,
    <button key={2} onClick={() => setSelectedSeat(2)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={3} onClick={() => setSelectedSeat(3)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={4} onClick={() => setSelectedSeat(4)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={5} onClick={() => setSelectedSeat(5)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={6} onClick={() => setSelectedSeat(6)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
  ];

  const Sleeplower = [
    <button key={7} onClick={() => setSelectedSeat(7)}>
      <img src={Sleeper} alt="395" className="h-11 w-12 " />
    </button>,
    <button key={8} onClick={() => setSelectedSeat(8)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={9} onClick={() => setSelectedSeat(9)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={10} onClick={() => setSelectedSeat(10)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={11} onClick={() => setSelectedSeat(11)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={12} onClick={() => setSelectedSeat(12)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
  ];

  const Sleeplowerleft = [
    <button key={13} onClick={() => setSelectedSeat(13)}>
      <img src={Sleeper} alt="395" className="h-11 w-12 " />
    </button>,
    <button key={14} onClick={() => setSelectedSeat(14)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={15} onClick={() => setSelectedSeat(15)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={16} onClick={() => setSelectedSeat(16)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={17} onClick={() => setSelectedSeat(17)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={18} onClick={() => setSelectedSeat(18)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
  ];

  const Sleeplowerright = [
    <button key={19} onClick={() => setSelectedSeat(19)}>
      <img src={Sleeper} alt="395" className="h-11 w-12 " />
    </button>,
    <button key={20} onClick={() => setSelectedSeat(20)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={21} onClick={() => setSelectedSeat(21)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={22} onClick={() => setSelectedSeat(22)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={23} onClick={() => setSelectedSeat(23)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
    <button key={24} onClick={() => setSelectedSeat(24)}>
      <img src={Sleeper} alt="395" className="h-11 w-12" />
    </button>,
  ];
  return (
    <>
      <div className="flex flex-col space-y-4  border items-center font-poppinsRegular m-5">
        <div className="flex p-4">
          <div className="h-full my-auto py-5 ">
            <img src={Engine} alt="404" className="h-4 w-4" />
          </div>
          <div className="ms-5">
            <div className="my-4">
              <div className="space-x-4 flex justify-around">{Seating}</div>
            </div>
            <div className="space-y-4">
              <div className="space-x-4 flex justify-around">{Seating}</div>
            </div>
          </div>
        </div>
        <div className="flex p-4">
          <div className="transform -rotate-90 origin-center">Lower</div>
          <div className="flex flex-row space-x-4 ">{Sleep}</div>
        </div>
      </div>
      <div className="flex flex-col  border items-center font-poppinsRegular m-5">
        <div className="flex p-4">
          <div className="ms-5">
            <div className="">
              <div className="flex flex-row space-x-4 ">{Sleeplower}</div>
            </div>
            <div className="">
              <div className="flex flex-row space-x-4 ">{Sleeplowerleft}</div>
            </div>
          </div>
        </div>
        <div className="flex p-4">
          <div className="transform -rotate-90 origin-center">Upper</div>
          <div className="flex flex-row space-x-4 ">{Sleeplowerright}</div>
        </div>
      </div>
    </>
  );
};

export default SeatLayout;
