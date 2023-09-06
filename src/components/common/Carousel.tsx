import React, { useEffect, useState } from 'react';
import flight from '../../assets/images/flight_2.jpg';
import hotel from '../../assets/images/lake_scandinavia_blue_sky_pier_during_sunset_4k_5k_hd_travel.jpg';
import bus from '../../assets/images/marine_algae_underwater_and_huts_and_coconut_trees_under_blue_cloudy_sky_4k_hd_beach.jpg';
import car from '../../assets/images/sunset_silhouette_4k_3.jpg';
import '../../index.css';

export function Carousel({ children, ...props }: any) {

  const date = [
    {
      id: "0",
      alt: "imag1",
      image: flight,
    },
    {
      id: "1",
      alt: "imag2",
      image: hotel,
    },
    {
      id: "2",
      alt: "imag3",
      image: bus,
    },
    {
      id: "3",
      alt: "imag4",
      image: car,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isReversed, setIsReversed] = useState(false)

  const CarouselInfiniteScroll = () => {
    if (currentIndex === date.length - 2) {
      setIsReversed(true);
    } else if (currentIndex === 1) {
      setIsReversed(false);
    }
    if (isReversed) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => { CarouselInfiniteScroll() }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className='flex w-full justify-center bg-gradient-to-t from-white to-[#85a5b9] py-10'>
      <div className='carousel-container flex overflow-hidden rounded-[20px] w-[94%] self-center'>
        {date.map((item) => {
          return (
            <>
              <img src={item.image} className='carousel-item z-0 w-full h-[30rem] object-cover' style={{ transform: `translate(-${currentIndex * 100}%)`, imageOrientation: "revert-layer" }} key={item.id} />
              <div className='z-10 absolute w-[92%] flex self-center justify-center ms-[6rem]'>{children}</div>
            </>)
        })}
      </div>
    </div>
  )
}

export default Carousel;

// import React, { useEffect, useState } from 'react';
// import flight from '../../assets/images/flight_2.jpg';
// import hotel from '../../assets/images/lake_scandinavia_blue_sky_pier_during_sunset_4k_5k_hd_travel.jpg';
// import bus from '../../assets/images/marine_algae_underwater_and_huts_and_coconut_trees_under_blue_cloudy_sky_4k_hd_beach.jpg';
// import car from '../../assets/images/sunset_silhouette_4k_3.jpg';
// import '../../index.css';

// export function Carousel({ children, ...props }: any) {
//   const date = [
//     {
//       id: "0",
//       alt: "imag1",
//       image: flight,
//     },
//     {
//       id: "1",
//       alt: "imag2",
//       image: hotel,
//     },
//     {
//       id: "2",
//       alt: "imag3",
//       image: bus,
//     },
//     {
//       id: "3",
//       alt: "imag4",
//       image: car,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % date.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='flex w-full justify-center bg-gradient-to-t from-white to-[#85a5b9] py-10'>
//       <div className='carousel-container flex overflow-hidden rounded-[20px] w-[94%] self-center relative'>
//         {date.map((item, index) => (
//           <div
//             key={item.id}
//             className={`carousel-item ${index === currentIndex ? 'current' : ''
//               }`}
//             style={{
//               transform: `translate(-${(currentIndex) * 100}%)`,
//               transition: 'transform 1s ease-in-out',
//             }}
//           >
//             <img
//               src={item.image}
//               className={`carousel-item z-0 w-full h-[30rem] object-cover ${index === currentIndex ? 'current-image' : ''
//                 }`}
//               alt={item.alt}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

