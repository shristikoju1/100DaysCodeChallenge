import React from "react";
import './Navbar.css';
import logo from '../../img/logo.jpg'; // Adjust the path based on your project structure
import contactimg from '../../img/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <div className="desktopMenu">
                    <Link className="desktopMenuListItem">Home</Link>
                    <Link className="desktopMenuListItem">About</Link>
                    <Link className="desktopMenuListItem">Portfolio</Link>
                    <Link className="desktopMenuListItem">Clients</Link>
                    <Link className="desktopMenuListItem">Projects</Link>
                </div>
                <button className="desktopMenuBtn">
                    <img src={contactimg} alt="contact" className="desktopMenuImg" />Contact Me
                </button>
            </nav>
        </div>
    );
}

export default Navbar;
