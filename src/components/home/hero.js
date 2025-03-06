import React from 'react';
import "../../assets/css/home/hero.css";
import "../../assets/font/font.css";
import resume from "../../assets/resume.pdf"
import img from "../../assets/media/7.png"

function Hero() {
    return (<>
        <div className='hero-container' dir="rtl">
            <div className='circle-blue'></div>
            <div className='circle-yellow'></div>
            <img src={img} className='hero-img' />
            <span className='fontr hero-header'>طـــــــــــــــــــراح
                و برنامه‌نویس
                وب خــــــــــلاق</span>
            <span className='hero-description fontr'>توسعه و طراحی وب‌سایت‌های حرفه‌ای و زیبا با تمرکز بر عملکرد و تجربه کاربری عالی.</span>
            <a href={resume} target="_blank" className='link-deco-hero'>
                <button className='btn fontr'>
                    دانلود رزومه
                </button>
            </a>
        </div>
    </>);
}

export default Hero;
