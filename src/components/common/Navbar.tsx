import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const navbarLinks = [
        { to: '/', label: 'Home' },
        { to: '/hotel', label: 'Hotel' },
        { to: '/flights', label: 'Flights' },
        { to: '/bus', label: 'Bus' },
        { to: '/car', label: 'Car' },
    ];

    return (
        <nav className="navbar">
            {navbarLinks.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-item ${location.pathname === link.to ? 'active' : ''}`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

export default Navbar;
