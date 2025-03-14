import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import "../../assets/css/home/hero.css";
import "../../assets/font/font.css";
import resume from "../../assets/resume.pdf";
import img from "../../assets/media/7.png";

function Hero() {
    return (
        <>
            <Helmet>
                <meta name="description" content="Professional web development and design with a focus on performance and user experience." />
                <meta name="keywords" content="web development, web design, creative developer, resume" />
            </Helmet>
            <div className='hero-container' dir="rtl">
                <div className='circle-blue'></div>
                <div className='circle-yellow'></div>
                <img src={img} alt="Hero visual" className='hero-img' />
                <span className='fontr hero-header'>طـــــــــــــــــــراح و برنامه‌نویس وب خــــــــــلاق</span>
                <p className='hero-description fontr'>توسعه و طراحی وب‌سایت‌های حرفه‌ای و زیبا با تمرکز بر عملکرد و تجربه کاربری عالی.</p>
                <a href={resume} target="_blank" className='link-deco-hero'>
                    <button className='btn fontr'>دانلود رزومه</button>
                </a>
            </div>
        </>
    );
}

export default Hero;
