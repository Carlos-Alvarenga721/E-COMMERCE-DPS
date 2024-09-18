import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Exclusive</div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
            <input type="text" placeholder="What are you looking for?" className="search-bar" />
        </nav>
    );
};

export default Navbar;
