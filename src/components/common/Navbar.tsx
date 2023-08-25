import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Leo } from '../../assets/icons/LeoLogo.svg';
import BusNavIcon from '../../assets/icons/bus-nav.svg';
import FlightNavIcon from '../../assets/icons/flight-nav.svg';
import HotelNavIcon from '../../assets/icons/hotel-nav.svg';
import CarNavIcon from '../../assets/icons/car-nav.svg';
import BusShrinkIcon from '../../assets/icons/bus-bgless.svg';
import FlightShrinkIcon from '../../assets/icons/flight-bgless.svg';
import HotelShrinkIcon from '../../assets/icons/hotel-bgless.svg';
import CarShrinkIcon from '../../assets/icons/car-bgless.svg';
import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar.svg';
import { Avatar } from './Avatar';




type AnyFunction = (...args: any[]) => any;

function debounce<F extends AnyFunction>(func: F, delay: number): (...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (...args: Parameters<F>): void {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
}

function Navbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 200) {
            setIsScrolled(true);
        } else if (window.scrollY > 190 && window.scrollY < 200) {
            // Scroll to 190
            window.scrollTo(0, 180);
        } else if (window.scrollY > 201 && window.scrollY < 220) {
            // Scroll to 220
            window.scrollTo(0, 220);
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
        { to: '/flights', label: 'Flights', icon: isScrolled ? FlightShrinkIcon : FlightNavIcon },
        { to: '/hotel', label: 'Hotel', icon: isScrolled ? HotelShrinkIcon : HotelNavIcon },
        { to: '/bus', label: 'Bus', icon: isScrolled ? BusShrinkIcon : BusNavIcon },
        { to: '/car', label: 'Car', icon: isScrolled ? CarShrinkIcon : CarNavIcon },
    ];

    return (
        <>
            <nav className={`navbar bg-white py-1 md:py-1 lg:py-2 shadow-bottom sticky top-0 ${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300 z-10 `}>
                <div className={`container  border-int-dark-blue border-5 flex justify-between items-center ${isScrolled ? 'h-12' : 'h-16'} transition-all duration-300 `}>
                    <div className="flex ml-3 items-center space-x-6 md:space-x-16 md:ml-0 lg:ml-[5%] w-full">
                        <Link to="/" className='w-[10%]'>
                            <Leo className={`${isScrolled ? 'w-10' : 'w-20'} h-auto`} />
                        </Link>
                        <div className="hidden md:flex space-x-2 md:space-x-16 py-5 md:py-0 mt-1 w-[60%]">
                            {navbarLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`flex p-[1px] rounded-[2px] flex-col m-2 items-center text-int-black w-[70px] hover:bg-int-background hover:border-b-4 ${location.pathname === link.to
                                        ? 'border-b-4 border-int-yellow hover:border-int-yellow'
                                        : 'hover:border-int-gray-20'
                                        }`}
                                >
                                    <div className={`${isScrolled ? "h-20px]" : "h-[30px"} mb-1 ${isScrolled ? 'scale-90' : ''} transition-all duration-300`}>
                                        <img src={link.icon} alt={''} className={`${isScrolled ? 'w-8' : 'w-10'} h-auto`} />
                                    </div>
                                    <span className={` font-poppinsRegular ${isScrolled ? 'text-sm' : 'mt-2'} transition-all duration-300`}>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                        <div className=' ml-auto  min-w-[15%]'>
                            <Avatar />
                        </div>
                    </div>
                    <div className="md:hidden mx-3">
                        {/* Hamburger Menu Icon */}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
