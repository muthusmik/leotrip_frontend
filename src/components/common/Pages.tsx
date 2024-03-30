import React, { useState } from 'react';
import arrow from '../../assets/icons/Arrowright.svg';
import { useNavigate } from 'react-router-dom';
const RoomPage = () => {
  const [activeContent, setActiveContent] = useState("View");
  const nevigate=useNavigate();

  const handleContentChange = (content: string) => {

    setActiveContent(content);
    if(content==='View')
    {
      nevigate('/hotel/viewRoom')
    }
    if(content==='Review')
    {
      nevigate('/hotel/hotelreview')
    }
  };

  return (
    <>
      <div className="flex pagination-container py-5 pl-4">
        <button className="flex" onClick={() => handleContentChange("View")}>
          <div className={`${activeContent === "View" ? "active hover:text-[#5063ff] " : ""}`}>1.View</div><img src={arrow} alt="er" className='pl-2 pt-1'/>
        </button>
        <button className="flex" onClick={() => handleContentChange("Review")}>
          <div className={`pl-2 ${activeContent === "Review" ? "active hover:text-[#5063ff] " : ""}`}>2.Review</div><img src={arrow} alt="er" className='pl-2 pt-1'/>
        </button>
        <button className="flex" onClick={() => handleContentChange("Payment")}>
          <div className={`pl-2 ${activeContent === "Payment" ? "active hover:text-[#5063ff] " : ""}`}>3.Payment</div>
        </button>
      </div>
    </>
  );
};

const YourPageComponent = () => {
  return (
    <>
        <div className='flex'>
      {/* Pagination */}
      <RoomPage />
      
    </div>
    
    </>
  );
};

export default YourPageComponent;
