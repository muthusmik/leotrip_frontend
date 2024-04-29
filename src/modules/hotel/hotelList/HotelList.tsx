import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hotel1 from '../../../assets/images/room3.jpg';
import hotel2 from '../../../assets/images/room1.jpg';
import hotel3 from '../../../assets/images/room2.jpg';
import hotel4 from '../../../assets/images/img(1).jpg';
import locationicon from '../../../assets/icons/locationicon.png';
import couple from '../../../assets/icons/couple.png';
import pool from '../../../assets/icons/pool.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RoomDetails from './RoomDetails';




const hotels = [{
    "rating": 4.5,
    "experience": "Good",
    "ratings": "(100rating)",
    "hotelname": "Ariyabavan, Chennai",
    "area": "thambaram",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4200,
    "offerfees": 3000,
    "tax": "+800 taxes & fees",
    "day": "per night"

},
{
    "rating": 4.2,
    "experience": "Very Good ",
    "ratings": "(300rating)",
    "hotelname": "GuruAmuthas, coimbatore",
    "area": "saravanapatty",
    "kilometer": "10 Km from coimbatore City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4500,
    "offerfees": 5000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
{
    "rating": 4.1,
    "experience": "Very Good",
    "ratings": "(200rating)",
    "hotelname": "Taj Wellington Mews, Chennai",
    "area": "Tharamani",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4700,
    "offerfees": 4000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
{
    "rating": 5.0,
    "experience": "Very Good",
    "ratings": "(200rating)",
    "hotelname": "Taj Wellington Mews, Chennai",
    "area": "Tharamani",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4700,
    "offerfees": 4000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
{
    "rating": 4.0,
    "experience": "Very Good",
    "ratings": "(200rating)",
    "hotelname": "Taj Wellington Mews, Chennai",
    "area": "Tharamani",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4700,
    "offerfees": 4000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
{
    "rating": 4.4,
    "experience": "Very Good",
    "ratings": "(200rating)",
    "hotelname": "Taj Wellington Mews, Chennai",
    "area": "Tharamani",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4700,
    "offerfees": 4000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
{
    "rating": 4.4,
    "experience": "Very Good",
    "ratings": "(200rating)",
    "hotelname": "Taj Wellington Mews, Chennai",
    "area": "Tharamani",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4700,
    "offerfees": 4000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
{
    "rating": 4.0,
    "experience": "Very Good",
    "ratings": "(200rating)",
    "hotelname": "Taj Wellington Mews, Chennai",
    "area": "Tharamani",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4700,
    "offerfees": 4000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
{
    "rating": 4.3,
    "experience": "Very Good",
    "ratings": "(200rating)",
    "hotelname": "Taj Wellington Mews, Chennai",
    "area": "Tharamani",
    "kilometer": "10 Km from Chennai City Center",
    "visitor": "Couple Friendly",
    "entertainment": "Pool",
    "fees": 4700,
    "offerfees": 4000,
    "tax": "+800 taxes & fees",
    "day": "per night"
},
]
const HotelDetails = () => {

    const [sortedHotels, setSortedHotels] = useState(hotels);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [hotelName, setHotelName] = useState('');
    const [activeButton, setActiveButton] = useState('');

    const sortByRating = () => {
        const sorted = [...sortedHotels].sort((a, b) => b.rating - a.rating);
        console.log("sortedHotels", sorted);
        setSortedHotels(sorted);
        setActiveButton('sortByRating');

    };

    const sortByPriceHighToLow = () => {
        const sorted = [...sortedHotels].sort((a, b) => b.offerfees - a.offerfees);
        console.log("sortByPriceHighToLow", sorted);
        setSortedHotels(sorted);
        setActiveButton('sortByPriceHighToLow');

    };

    const sortByPriceLowToHigh = () => {
        const sorted = [...sortedHotels].sort((a, b) => a.offerfees - b.offerfees);
        console.log("sortByPriceLowToHigh", sorted);

        setSortedHotels(sorted);
        setActiveButton('sortByPriceLowToHigh');

    };


    const filterByHotelName = () => {
        const filtered = hotels.filter(hotel => hotel.hotelname.toLowerCase().includes(hotelName.toLowerCase()));
        console.log("filterByLocality", filtered);
        setSortedHotels(filtered);
        setActiveButton('filterByHotelName');

    };
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <button className={`mr-2 mb-2 px-4 py-2 rounded focus:outline-none ${activeButton === 'sortByRating' ? 'bg-gradient-to-l from-bg-blue-start to-bg-blue-end text-white' : 'border-b-2 border-blue-400 text-gray-800'}`} onClick={sortByRating}>Sort by Rating (Highest First)</button>
                    <button className={`mr-2 mb-2 px-4 py-2 rounded focus:outline-none ${activeButton === 'sortByPriceHighToLow' ? 'bg-gradient-to-l from-bg-blue-start to-bg-blue-end text-white' : 'border-b-2 border-blue-400 text-gray-800'}`} onClick={sortByPriceHighToLow}>Sort by Price (Highest First)</button>
                    <button className={`mr-2 mb-2 px-4 py-2 rounded focus:outline-none ${activeButton === 'sortByPriceLowToHigh' ? 'bg-gradient-to-l from-bg-blue-start to-bg-blue-end text-white' : 'border-b-2 border-blue-400 text-gray-800'}`} onClick={sortByPriceLowToHigh}>Sort by Price (Lowest First)</button>
                    <input type="text" placeholder="Enter hotelName" onChange={e => setHotelName(e.target.value)} className="mr-2 mb-2 px-4 py-2 rounded focus:outline-none border border-gray-300" />
                    <button className="mr-2 mb-2 px-4 py-2 rounded focus:outline-none bg-gradient-to-r from-bg-blue-start to-bg-blue-end text-white" onClick={filterByHotelName}>Search by hotelName</button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl">Showing properties in Chennai</h1>
                <div className="text-sm">
                    {sortedHotels.map((hotel, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-white w-[100%]  h-full shadow-inner  rounded-md border-gray-400 my-5">
                            <div className="w-[100%] md:w-[30%]">
                                <div className="mx-3 py-2 ">
                                    <img src={hotel1} alt="error" className="w-[100%] h-[300px] md:h-[200px] rounded-tl-lg" onClick={openModal} />
                                    <RoomDetails showModal={showModal} closeModal={closeModal} />
                                </div>
                                <div className="w-[96%] hidden md:block">
                                    <Slider {...settings}>
                                        <div className="flex mx-3 py-2">
                                            <img src={hotel4} alt="error" className="w-[81%] h-[45px] rounded-bl-lg" />
                                        </div>
                                        <div className="flex mx-3 py-2">
                                            <img src={hotel1} alt="error" className="w-[81%] h-[45px] rounded-bl-lg " />
                                        </div>
                                        <div className="flex mx-3 py-2">
                                            <img src={hotel3} alt="error" className="w-[81%] h-[45px] rounded-bl-lg" />
                                        </div>
                                        <div className="flex mx-3 py-2">
                                            <img src={hotel2} alt="error" className="w-[81%] h-[45px] rounded-bl-lg" />
                                        </div>
                                    </Slider>
                                </div>

                            </div>
                            <div className=" w-[100%] md:w-[40%]">
                                <div className="my-5  border-int-gray-20 border-dashed border-r-2">
                                    <span className="w-10 bg-[#fddfb3] rounded-md content-fit px-2"><b>{hotel.rating}</b></span><span className="pl-2 text-sm font-bold">{hotel.experience}</span><span className="pl-2 text-sm">{hotel.ratings}</span>
                                    <h1 className="font-bold text-lg py-2">{hotel.hotelname}</h1>
                                    <h1 className="text-sm text-[#3649F4] py-2">{hotel.area}</h1>
                                    <span className="flex flex-row py-2"><img src={locationicon} alt="l" className="me-2" />{hotel.kilometer}</span>
                                    <span className="flex flex-row py-2 font-bold"><img src={couple} alt="l" className="me-2" />{hotel.visitor}</span>
                                    <span className="flex flex-row py-2 font-bold"><img src={pool} alt="l" className="me-2" />{hotel.entertainment}</span>
                                </div>

                            </div>
                            <div className=" w-[100%] md:w-[30%]">
                                <p className="w-[50%] bg-gradient-to-l from-bg-blue-start to-bg-blue-end text-white rounded-md text-center pb-1 ml-2 mt-4">free cancellation</p>
                                <div className="text-end pt-12 pe-5">
                                    <p className="text-sm line-through">&#x20B9; {hotel.fees}</p>
                                    <p className="text-sm py-1">&#x20B9; {hotel.offerfees}</p>
                                    <p className="text-sm py-1">&#x20B9; {hotel.tax}</p>
                                    <p className="text-sm py-1">{hotel.day}</p>
                                </div>
                                {/* <button className='flex uppercase bg-[#ec8e03] rounded-md items-center pl-2 text-white pr-5 py-2 font-poppinsRegular w-[80%] text-center justify-center ml-6 mt-8 mb-3'><Link to="/hotel/hotel-details">VIEW BOOK</Link></button> */}
                                <button className='flex uppercase bg-gradient-to-r from-bg-blue-start to-bg-blue-end rounded-md items-center pl-2 text-white pr-5 py-2 font-poppinsRegular w-[80%] text-center justify-center ml-6 mt-8 mb-3'><Link to='/hotel/viewRoom'>VIEW BOOK</Link></button>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
export default HotelDetails;
