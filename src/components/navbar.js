import React from 'react';
import "../assets/css/navbar.css";
import "../assets/font/font.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar-container fontr" dir="rtl">
            <div className='navbar'>
                <div className='navbar-item navbar-item-hover'>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <div className='navbar-text1 navbar-item-hover'>
                    <span>دربــــاره ی من</span>
                </div>
                <div className='navbar-text navbar-item-hover'>
                    <span>رزومـــــه</span>
                </div>
                <div className='navbar-text navbar-item-hover'>
                    <span>مهـــارت ها </span>
                </div>
                <div className='navbar-text navbar-item-hover'>
                    <span>تجربیات کاری</span>
                </div>
                <div className='navbar-text navbar-item-hover'>
                    <span>ارتبــاط</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
