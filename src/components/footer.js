import React from 'react';
import "../assets/css/footer.css"
import phone from "../assets/media/phone.png"
function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-title-container">
                <span className="footer-title fontr">برقراری ارتباط</span>
            </div>
            <div className='footer-phone-container'>
                <img src={phone} className='footer-phone' />
            </div>

            <span className='footer-phone'></span>
            <span className='footer-email'></span>
            <span className='footer-telegram'></span>
        </div>
    );
}

export default Footer;
