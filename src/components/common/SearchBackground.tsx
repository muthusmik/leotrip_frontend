// import React, { useEffect, useState } from "react";
// import restaurantImage from "../../assets/images/miami_downtown_florida_cityscape_5k.jpg";
// import flightImage from "../../assets/images/flight_2.jpg";
// import cartImage from "../../assets/images/marine_algae_underwater_and_huts_and_coconut_trees_under_blue_cloudy_sky_4k_hd_beach.jpg";
// import bustImage from "../../assets/images/sunset_silhouette_4k_3.jpg";
// import "../../index.css";
// import Navbar from "./Navbar";
// import CommonNavbar from "./CommonNavbar";

// export function SearchBackground({ children, ...props }: any) {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 200);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const [imageIndex, setImageIndex] = useState(0);
//   const images = [restaurantImage, flightImage, cartImage, bustImage];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   const [isLGSearch, setIsLGSearch] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsLGSearch(window.innerWidth >= 1024);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {isLGSearch ? (
//         <div className="carousel-container flex overflow-hidden justify-center">
//           <img
//             src={images[imageIndex]}
//             className="carousel-item z-0 w-full h-[28rem] object-cover grayscale"
//             style={{ imageOrientation: "revert-layer" }}
//             alt="Background"
//           />

//           <div className="absolute fixed z-50 top-0 w-[70%]">
//             <CommonNavbar />
//           </div>
//           <div
//             className={` ${
//               isScrolled
//                 ? "fixed z-50 top-[0rem] w-full bg-white "
//                 : "flex absolute top-[5rem] mt-3"
//             }`}
//           >
//             <Navbar />
//           </div>
//           <div className="h-[200px] bg-white absolute w-[80%] flex self-center justify-center top-36 rounded-lg"></div>
//           <div className="z-10 absolute w-[80%] flex self-center justify-center top-48 ">
//             {children}
//           </div>
//         </div>
//       ) : (
//         <div className="carousel-container flex overflow-hidden justify-center">
//           <div className="absolute fixed z-50 top-0 w-[70%]">
//             <CommonNavbar />
//           </div>
//           <div
//             className={` ${
//               isScrolled
//                 ? "fixed z-50 top-[0rem] w-full bg-white "
//                 : "flex absolute top-[5rem] mt-3"
//             }`}
//           >
//             <Navbar />
//           </div>
//           <div
//             className="h-[200px] bg-white absolute w-[98%] flex self-center justify-center top-36 rounded-lg"
//             style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px 0px" }}
//           ></div>
//           <div
//             className="z-10 absolute w-[98%] flex self-center justify-center top-48 shadow-lg rounded-lg"
//             style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)" }}
//           >
//             {children}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default SearchBackground;


import React, { useEffect, useState } from "react";
import restaurantImage from "../../assets/images/miami_downtown_florida_cityscape_5k.jpg";
import flightImage from "../../assets/images/flight_2.jpg";
import cartImage from "../../assets/images/marine_algae_underwater_and_huts_and_coconut_trees_under_blue_cloudy_sky_4k_hd_beach.jpg";
import bustImage from "../../assets/images/sunset_silhouette_4k_3.jpg";
import "../../index.css";
import Navbar from "./Navbar";
import CommonNavbar from "./CommonNavbar";

function SearchBackground({ children, ...props }: any){
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isLGSearch, setIsLGSearch] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    const handleResize = () => {
      setIsLGSearch(window.innerWidth >= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const images = [restaurantImage, flightImage, cartImage, bustImage];

  return (
    <div className="carousel-container flex overflow-hidden justify-center relative">
      <img
        src={images[imageIndex]}
        className="carousel-item z-0 w-full md:h-[32rem] h-[52rem] object-cover grayscale"
        style={{ imageOrientation: "revert-layer" }}
        alt="Background"
      />

      <div className="absolute top-0 w-[70%] z-50">
        <CommonNavbar />
      </div>

      <div
        className={`${
          isScrolled
            ? "fixed z-50 top-0 w-full bg-white"
            : "absolute top-[5rem] mt-3"
        }`}
      >
        <Navbar />
      </div>

      <div className="absolute w-[80%] top-36 flex justify-center bg-white rounded-lg">
        <div className="z-10 w-full">{children}</div>
      </div>
    </div>
  );
}

export default SearchBackground;

