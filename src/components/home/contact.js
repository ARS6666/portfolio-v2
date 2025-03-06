import React from 'react';
import "../../assets/css/contact.css";
import phone from "../../assets/media/phone.png";

function Contact() {
    return (
        <div className='footer-container fontr'>
            <div className="footer-title-container">
                <span className="footer-title" dir="rtl">اگر باهام کار داشتید ...</span>
            </div>
            <div className='footer-phone-container' dir="rtl">
                <div className='footer-phone-rotate'><img src={phone} className='footer-phone' /></div>
                <div className='footer-texts-container'>
                    <div className='footer-phone-text-container'>
                        <span className='footer-phone-text'>تلفن همراه:</span>
                        <span className='footer-phone-text'>09915910538</span>
                    </div>
                    <div className='footer-email-container'>
                        <span className='footer-email'>ایمیل:</span>
                        <span className='footer-email'>arsprogramming123@gmail.com</span>
                    </div>
                    <div className='footer-telegram-container'>
                        <span className='footer-telegram'>آیدی تلگرام:</span>
                        <span className='footer-telegram'>ARSARS66@</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
