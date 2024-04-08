// import React, { useState } from 'react';
// import arrow from '../../assets/icons/Arrowright.svg';
// import { useNavigate } from 'react-router-dom';
// const RoomPage = () => {
//   const [activeContent, setActiveContent] = useState("View");
//   const nevigate=useNavigate();

//   const handleContentChange = (content: string) => {

//     setActiveContent(content);
//     if(content==='View')
//     {
//       nevigate('/hotel/viewRoom')
//     }
//     if(content==='Review')
//     {
//       nevigate('/hotel/hotelreview')
//     }
//     if(content==='Payment')
//     {
//       nevigate('/hotel/payment')
//     }

//   };

//   return (
//     <>
//       <div className="flex pagination-container py-5 pl-4">
//         <button className="flex" onClick={() => handleContentChange("View")}>
//           <div className={`${activeContent === "View" ? "active hover:text-[#5063ff] " : ""}`}>View</div><img src={arrow} alt="er" className='pl-2 pt-1'/>
//         </button>
//         <button className="flex" onClick={() => handleContentChange("Review")}>
//           <div className={`pl-2 ${activeContent === "Review" ? "active hover:text-[#5063ff] " : ""}`}>Review</div><img src={arrow} alt="er" className='pl-2 pt-1'/>
//         </button>
//         <button className="flex" onClick={() => handleContentChange("Payment")}>
//           <div className={`pl-2 ${activeContent === "Payment" ? "active hover:text-[#5063ff] " : ""}`}>Payment</div>
//         </button>
//       </div>
//     </>
//   );
// };

// const YourPageComponent = () => {
//   return (
//     <>
//         <div className='flex'>
//       {/* Pagination */}
//       <RoomPage />

//     </div>

//     </>
//   );
// };

// export default YourPageComponent;
import React, { useEffect, useState } from 'react';
import arrow from '../../assets/icons/Arrowright.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const RoomPage = ({ destinations ,routename}: any) => {
  console.log("routename",routename)
  const [activeContent, setActiveContent] = useState(routename === 'flight' ? 'Review' : 'View');
  const navigate = useNavigate();
  console.log("activeContent",activeContent)
  const handleContentChange = (content: any) => {
    console.log("funcont",content)
    setActiveContent(content);
    navigate(destinations[content]);
  };
  useEffect(()=>{
console.log("useE",activeContent)
  },[activeContent])
  let lastPropertyName = Object.keys(destinations)[Object.keys(destinations).length - 1];
  const lastValue = lastPropertyName;
  return (
    <div className="flex pagination-container py-5 pl-4">
      {Object.keys(destinations).map((content) => (
        <button className="flex" key={content} onClick={() => handleContentChange(content)}>
          <div className={`${activeContent === content ? "active text-[#5063ff] " : ""}`}>
            {content}
          </div>
          {content === lastValue ? " " :
          (<img src={arrow} alt="arrow" className='px-2 pt-1'/>)}
        </button>
      ))}
    </div>
  );
};

const YourPageComponent = () => {
  const location = useLocation();
  let destinations;
  const [routename, setRoutename] = useState('flight')
  useEffect(() => {
    const activeRoute = location.pathname;
    console.log("act", activeRoute);

    // Extract hotel ID or other relevant information from the pathname
    const segments = activeRoute.split('/');
    console.log("segment", segments);
    const routevalue = segments[1];
    console.log("routeVAlue"+routevalue);
    setRoutename(routevalue)
    console.log("Hotel ID:", routename);
  }, [location.pathname]);
  if (routename === 'flight') {
    destinations = {
      Review: '/flight/review',
      Traveller:'/flight/traveller'
    };
  } else {
    destinations = {
      View: '/hotel/viewRoom',
      Review: '/hotel/hotelreview',
      Payment: '/hotel/payment',

    };
  }
  return (
    <div className='flex'>
      {/* Pagination */}
      <RoomPage destinations={destinations} routename={routename}/>
    </div>
  );
};

export default YourPageComponent;
