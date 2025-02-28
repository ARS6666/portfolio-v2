import React from 'react';
import "../assets/css/navbar.css";
import "../assets/font/font.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar-container fontr" dir="rtl">
            <div className='navbar'>
                <div className='navbar-item'>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <div className='navbar-text1'>
                    <span>دربــــاره ی من</span>
                </div>
                <div className='navbar-text'>
                    <span>رزومـــــه</span>
                </div>
                <div className='navbar-text'>
                    <span>مهـــارت ها </span>
                </div>
                <div className='navbar-text'>
                    <span>نمونه کارها</span>
                </div>
                <div className='navbar-text'>
                    <span>ارتبــاط</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
