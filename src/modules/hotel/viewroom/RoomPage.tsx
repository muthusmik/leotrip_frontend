import room2 from '../../../assets/images/room2.jpg';
import men from '../../../assets/icons/adult.png';
import AddressMap from 'components/common/Iframe';
import lock from '../../../assets/images/lock.png';
import location from '../../../assets/icons/locationSymbol.svg'
import restaurant from '../../../assets/images/restaurant.png';
import bar from '../../../assets/images/bar.png';
import removebg from '../../../assets/images/removebg.png';
import bathtub from '../../../assets/images/bathtub.png';
import anti from '../../../assets/images/anti.png';
import checkin1 from '../../../assets/images/checkin1.png';
import protect from '../../../assets/images/protect.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const rooms = [
    {
        price: "5200",
        taxesAndFees: "254",

    },

]
const initialAmenitiesData = [
    { name: 'Restaurant', icon: restaurant },
    { name: 'Bar', icon: bar },
    { name: 'Kid’s meals', icon: removebg },
    { name: 'Tick', icon: removebg },
    { name: 'bathtub', icon: bathtub },
    { name: 'Tick', icon: removebg },
    { name: 'bathtub', icon: bathtub },
    { name: 'bathtub', icon: bathtub },
    { name: 'Tick', icon: removebg },
    { name: 'bathtub', icon: bathtub },
    { name: 'bathtub', icon: bathtub },
    { name: 'Tick', icon: removebg },
    { name: 'bathtub', icon: bathtub },
    { name: 'bathtub', icon: bathtub },
    { name: 'Tick', icon: removebg },
    { name: 'bathtub', icon: bathtub },
    { name: 'bathtub', icon: bathtub },
    { name: 'Tick', icon: removebg },
    { name: 'bathtub', icon: bathtub },
    { name: 'bathtub', icon: bathtub },
    { name: 'Tick', icon: removebg },
    { name: 'bathtub', icon: bathtub },

];
const RoomPage = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);
    const [amenitiesData, setAmenitiesData] = useState(initialAmenitiesData.slice(0, 5));

    const handleShowMore = () => {
        if (!showAll) {
            setAmenitiesData(initialAmenitiesData);
        }
        setShowAll(!showAll);
    };


    // navbar
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };



    // dropdown
    const [selectedRoomType, setSelectedRoomType] = useState('');

    // Function to handle room type change
    
    return (
        <div className='bg-[#DEF2FF] font-poppinsRegular'>
            <div className=" mx-5 flex gap-2 ">
                <div className='w-[40%]'>
                    <img src={room2} alt='room2' className='w-full h-5/6' />
                </div>
                <div className='w-[25%]'>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" ></iframe>
                    </div>
                    <img src={room2} alt='room2' className='w-[95%]  mt-3' />
                </div>
                <div className='w-[35%] mx-3'>
                    <div className='bg-white rounded-2xl border border-[#808080] border-2'>
                        <h1 className='font-bold text-lg pl-5'>Standard Twin Room</h1>
                        <div className='flex pl-5'>
                            <img src={men} alt='er' className='w-6 h-6' /> <span className='pl-2'>For 2 Adults</span>
                        </div>
                        <div className='border-b-4 border-[#808080]'>
                            {rooms.map((room, index) => (
                                <div key={index} className=''>
                                    <div className='text-end pe-5'>
                                        <small className='text-[#AF0303] font-bold text-lg'>per night</small>
                                        <p><small className='text-[#AF0303] font-bold text-lg'>&#x20B9;{room.price}</small></p>
                                        <p className='text-gray-400'>+{room.taxesAndFees} taxes & fees</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-around'>
                            <button className='text-[#1E79F1] font-bold text-sm'>VIEW THE ROOM</button>
                            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-1 m-2 text-white text-sm'>BOOK THIS NOW</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-[60%] my-3'>
                            <AddressMap />
                        </div>
                        <div className='bg-white w-[40%] my-3 mx-3 rounded-md'>
                            <div className='w-10 h-10 bg-[#fddfb3] mx-3 rounded-md'><p className='p-2 pl-2.5'>4.6</p></div>
                            <h1 className='font-bold text-sm text-[#1E79F1] pl-3'>Very Good</h1>
                            <p className='text-gray-400 text-sm'>Based on 360 Ratings</p>
                            <button className='font-bold text-sm text-[#1E79F1] pt-10 pl-4'>READ ALL REVIEW</button>
                        </div>
                    </div>
                    <div className='bg-white w-[80%] my-3 mx-3 rounded-md'>
                        <div className='flex'>
                            <img src={lock} alt='lock' className='w-10 h-10' />
                            <span className='pl-2 text-sm'>Login  now !<button className='font-bold text-[#1E79F1]'>Login</button> to unlock best deals and offers</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* location */}
            <div className='mx-5'>
                <h1 className='font-bold text-md'>Taj Wellington Mews</h1>
                <span className="flex flex-row text-[#1E79F1]"><img src={location} alt="l" className="" />Tharamani, Chennai</span>

            </div>
            {/* Popular Amenities */}
            <div className='mx-5 my-2'>
                <h1 className='font-bold text-md'>Popular Amenities</h1>
                <div className='flex justify-around bg-white p-3 border-2 border-[#e0e4e7]'>
                    {amenitiesData.map((amenity, index) => (
                        <div key={index} className='text-center'>
                            <img src={amenity.icon} alt="err" className=' w-12 h-12' />
                            <h1 className='font-bold text-md'>{amenity.name}</h1>
                        </div>
                    ))}
                    {!showAll && (
                        <div className='text-center pt-10'>
                            <button onClick={handleShowMore} className='font-bold text-md text-blue-500 focus:outline-none'>+{initialAmenitiesData.length - 4} More Amenities</button>
                        </div>
                    )}
                </div>
            </div>



            <div className='mx-5 my-2'>
                <div className='justify-start gap-10 bg-white p-3 border-2 border-[#e0e4e7]'>
                    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-5 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start " data-twe-navbar-ref>
                        <div className="flex w-full flex-wrap items-center justify-between px-3">

                            {/* Hamburger button for mobile view */}
                            <button
                                className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                                type="button"
                                onClick={toggleNav}
                                aria-controls="navbarSupportedContent3"
                                aria-expanded={isNavOpen ? "true" : "false"}
                                aria-label="Toggle navigation"
                            >
                                {/* Hamburger icon */}
                                <span className="[&gt;svg]:w-7 [&gt;svg]:stroke-black/50 dark:[&gt;svg]:stroke-neutral-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>

                            {/* Collapsible navbar container */}
                            <div className={`!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto ${isNavOpen ? '' : 'hidden'}`} id="navbarSupportedContent3" data-twe-collapse-item>
                                {/* Left links */}
                                <div className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row" data-twe-navbar-nav-ref>
                                    {/* Highlights */}
                                    <div className="ms-2">
                                        <a className="p-0 text-black transition duration-200 hover:text-[#1E79F1] hover:ease-in-out focus:text-[#1E79F1] active:underline motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" href="#highlights">Highlights</a>
                                    </div>
                                    {/* Rooms */}
                                    <div className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
                                        <a className="p-0 text-black transition duration-200 hover:text-[#1E79F1] hover:ease-in-out focus:text-[#1E79F1] active:underline motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" aria-current="page" href="#rooms" data-twe-nav-link-ref>Rooms</a>
                                    </div>
                                    {/* Locations */}
                                    <div className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                                        <a className="p-0 text-black transition duration-200 hover:[#1E79F1] hover:ease-in-out focus:text-[#1E79F1] active:underline motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" href="#locations" data-twe-nav-link-ref>Locations</a>
                                    </div>
                                    {/* Guest Rating */}
                                    <div className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                                        <a className="p-0 text-black transition duration-200 hover:text-[#1E79F1] hover:ease-in-out focus:text-[#1E79F1] active:underline motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" href="#guest-rating" data-twe-nav-link-ref>Guest Rating</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
            <div className='mx-5 my-2' id="highlights">
                <div className='bg-white p-3 border-2 border-[#e0e4e7]'>
                    <div className='flex justify-around'>
                        <img src={anti} alt="err" className=' w-12 h-12' />
                        <div>
                            <h1 className='font-bold'>Hygiene Plus</h1>
                            <p className='text-gray-400 text-sm'>This property has self-selected and self-certified</p>
                        </div>
                        <img src={checkin1} alt="err" className=' w-12 h-12' />
                        <div>
                            <h1 className='font-bold'>Check-in/out</h1>
                            <p className='text-gray-400 text-sm'>Hassle-free check in</p>
                        </div>
                        <img src={protect} alt="err" className=' w-12 h-12' />
                        <div>
                            <h1 className='font-bold'>Cancellation Charges</h1>
                            <p className='text-gray-400 text-sm'>Free Cancellation</p>
                        </div>
                    </div>
                    <hr className='border-1 mt-10' />

                    <h1 className='font-bold text-md pt-5'>Taj Wellington Mews</h1>
                    <span className="flex flex-row text-gray-400"><img src={location} alt="l" className="" />49, Raja Muthiah Rd, Tharamani, Periyamedu Park Town, Chennai, Tamil Nadu</span>
                    <div className='flex justify-start gap-5 mt-5'>
                        <span className="flex flex-row "><img src={removebg} alt="l" className="w-5 h-5" />Front desk 24 x 7</span>
                        <span className="flex flex-row "><img src={removebg} alt="l" className="w-5 h-5" />Excellent breakfast</span>
                        <span className="flex flex-row "><img src={removebg} alt="l" className="w-5 h-5" />Excellent food & dining</span>
                    </div>

                    <h1 className='font-bold text-md pt-5'>Hotel Description</h1>
                    <p className='text-justify pl-10'>Central Residency can be reached from Koyambedu Bus Stand (11 km). Internet connection is free for guests of this Chennai hotel. Guests can visit Kapaleeswarar
                        Temple (8 km) during their stay in the hotel. There are 3 floors in this hotel that comprise 19 rooms. In-room amenities include heaters, cooking facilities, balconies,
                        bottled drinking water, and bathrooms with hot/cold water and toothbrushes/razors (on request).</p>
                </div>
            </div>



          
        </div>
    )
}
export default RoomPage;


