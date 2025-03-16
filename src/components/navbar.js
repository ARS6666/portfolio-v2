import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import "../assets/css/navbar.css";
import "../assets/font/font.css";
import resume from "../assets/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Helmet>
                <meta name="description" content="Navigate through the website using the navbar. Find links to home, about me, resume, work samples, GitHub, and contact." />
                <meta name="keywords" content="navbar, navigation, links, home, about me, resume, work samples, GitHub, contact" />
            </Helmet>
            <div className="navbar-container fontr" dir="rtl">
                <div className='navbar'>
                    <button className="burger-menu" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>
                    <div className='navbar-item navbar-item-hover'>
                        <Link to="/" className='link-deco'><FontAwesomeIcon icon={faHouse} /></Link>
                    </div>
                    <div className='navbar-text1 navbar-item-hover'>
                        <Link to="/aboutme" className='link-deco'>دربــــاره ی من</Link>
                    </div>
                    <div className='navbar-text navbar-item-hover'>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className='link-deco'>رزومـــــه</a>
                    </div>
                    <div className='navbar-text navbar-item-hover'>
                        <Link to="/worksamples" className='link-deco'>تجربیات کاری</Link>
                    </div>
                    <div className='navbar-text navbar-item-hover'>
                        <a href="https://github.com/ARS6666" target="_blank" rel="noopener noreferrer" className='link-deco'>گیـت هاب </a>
                    </div>
                    <div className='navbar-text1 navbar-item-hover'>
                        <Link to="/contact" className='link-deco'>ارتبــاط</Link>
                    </div>
                </div>
                <div className={`menu-cover ${isOpen ? "open" : ""}`}>
                    <div className="menu-items">
                        <Link to="/" className="menu-item link-deco" onClick={toggleMenu}>خانه</Link>
                        <Link to="/aboutme" className="menu-item link-deco" onClick={toggleMenu}>دربــــاره ی من</Link>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="menu-item link-deco" onClick={toggleMenu}>رزومـــــه</a>
                        <Link to="/worksamples" className="menu-item link-deco" onClick={toggleMenu}>تجربیات کاری</Link>
                        <a href="https://github.com/ARS6666" target="_blank" className="menu-item link-deco" onClick={toggleMenu}>گیـت هاب</a>
                        <Link to="/contact" className="menu-item link-deco" onClick={toggleMenu}>ارتبــاط</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
