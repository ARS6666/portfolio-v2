import React from 'react';
import { Helmet } from 'react-helmet';
import "../assets/css/about.css";
import about from "../assets/media/about.png";

function Aboutme() {
    return (
        <>
            <Helmet>
                <title>About Me</title>
                <meta name="description" content="Learn more about me, a passionate 17-year-old programmer and UI designer." />
                <meta name="keywords" content="about me, programmer, UI designer, web development" />
            </Helmet>
            <div className='about-container fontr'>
                <div className='about-image-container'>
                    <img src={about} alt="About me" className='about-image' />
                </div>
                <div className='about-text-container' dir="rtl">
                    <span className='about-header'>درباره ی من</span>
                    <span className='about-title'>من یک برنامه نویس و UI کار 17 ساله هستم!</span>
                    <p className='about-text'>سلام! من عرشیا قاسم زاده هستم و عاشق دنیای طراحی و برنامه‌نویسی وب. از تبدیل ایده‌های پیچیده به پروژه‌های قابل اجرا لذت می‌برم و همیشه به دنبال روش‌های خلاقانه برای حل مسائلم.</p>
                    <span className='about-text'>در کنار برنامه‌نویسی، به ورزش علاقه‌مندم و زمانی که مشغول کار نیستم، احتمالاً در حال درس خوندن یا فوتسال بازی کردنم. به سه زبان فارسی، انگلیسی و ترکی هستم.</span>
                    <p className='about-text'>به دنیای من خوش آمدید!</p>
                </div>
            </div>
        </>
    );
}

export default Aboutme;
