import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Leo } from '../../assets/icons/LeoLogo.svg';
import BusNavIcon from '../../assets/icons/bus-nav.svg';
import FlightNavIcon from '../../assets/icons/flight-nav.svg';
import HotelNavIcon from '../../assets/icons/hotel-nav.svg';
import CarNavIcon from '../../assets/icons/car-nav.svg';

function Navbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navbarLinks = [
        { to: '/flights', label: 'Flights', icon: FlightNavIcon },
        { to: '/hotel', label: 'Hotel', icon: HotelNavIcon },
        { to: '/bus', label: 'Bus', icon: BusNavIcon },
        { to: '/car', label: 'Car', icon: CarNavIcon },
    ];

    return (
        <nav className={`navbar bg-white py-6 md:py-8 lg:py-10  shadow-bottom ${isScrolled ? 'shrink' : ''
            }`}>
            <div className="container border-int-dark-blue border-5 flex justify-between items-center ">
                <div className="flex  ml-5 items-center space-x-6 md:space-x-16  md:ml-0 lg:ml-[5%]">
                    <Link to="/">
                        <Leo className="w-20" />
                    </Link>
                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-4 md:space-x-16 py-5 md:py-0 mt-2">
                        {navbarLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`flex p-[1px] rounded-[2px] flex-col m-2 items-center text-int-black w-[70px] hover:bg-int-background hover:border-b-4  ${location.pathname === link.to
                                    ? 'border-b-4 border-int-yellow  hover:border-int-yellow'
                                    : 'hover:border-int-gray-20'
                                    }`}
                            >
                                <div className='h-[30px] mb-1'>
                                    <img src={link.icon} alt={''} className='w-10 h-auto' />
                                </div>
                                <span className="mt-2 font-poppinsRegular">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Hamburger Menu (for mobile) */}
                <div className="md:hidden mx-3">
                    Icon
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
