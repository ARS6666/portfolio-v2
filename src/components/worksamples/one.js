import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import "../../assets/css/one.css";
import mh1 from "../../assets/media/worksamples/mh1.PNG";
import mh2 from "../../assets/media/worksamples/mh2.PNG";
import mh3 from "../../assets/media/worksamples/mh3.PNG";
import mh4 from "../../assets/media/worksamples/mh4.PNG";
import mh5 from "../../assets/media/worksamples/mh5.PNG";

function MesZanajn() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [mh1, mh2, mh3, mh4, mh5];
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.classList.add("active-slide");
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                sliderRef.current.classList.remove("active-slide");
            }, 1000);
        }
    };

    const goToPrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.classList.add("active-slide");
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                sliderRef.current.classList.remove("active-slide");
            }, 1000);
        }
    };

    return (
        <>
            <Helmet>
                <title>Mes Honar Zanjan</title>
                <meta name="description" content="A project showcasing the use of React and CSS to build a beautiful and user-friendly website." />
                <meta name="keywords" content="React, CSS, web development, project" />
            </Helmet>
            <div className='worksample-text-container fontr'>
                <span className='worksample-header'>مس هنر زنجان</span>
                <p className='worksample-description' dir='rtl'>
                    <a href='https://github.com/ARS6666/Copper-Shop' target="_blank" rel="noopener noreferrer">(گیت هاب) </a>
                    تو این پروژه از تکنولوژی‌هایی مثل React و CSS استفاده کردم تا سایتی زیبا و کاربرپسند بسازم که بازدیدکننده‌ها ازش لذت ببرند. انیمیشن‌ها و افکت‌های جذابی هم دارم که تجربه کاربری لذت‌بخشی فراهم می‌کنند. در این پروژه، به طراحی رابط کاربری و تجربه کاربری توجه ویژه‌ای داشتم تا مطمئن بشم همه به راحتی به اطلاعات مورد نظرشون دسترسی پیدا کنند. همچنین، سرعت بارگذاری سایت رو بهینه‌سازی کردم تا کاربران تجربه‌ای سریع و روان داشته باشند. این سایت رسپانسیو طراحی شده، یعنی روی همه دستگاه‌ها، از موبایل گرفته تا تبلت، عالی نمایش داده میشه. در کل، با استفاده از تکنولوژی‌های به‌روز و استانداردهای بالا، یه وب‌سایت امن و قابل اعتماد برای "مس هنر زنجان" ایجاد کردم.
                </p>
            </div>
            <div className="slider-container">
                <button onClick={goToPrevious} className="slider-button prev">&lt;</button>
                <div className="slider-wrapper" ref={sliderRef}>
                    <img src={images[currentIndex]} alt="Mes Honar Zanjan project" className="slider-image active-slide" />
                </div>
                <button onClick={goToNext} className="slider-button next">&gt;</button>
            </div>
            <div className='image-row-container'>
                <div className='image-rows'>
                    <img src={mh3} alt="Sample 3" className='image-row' />
                    <img src={mh2} alt="Sample 2" className='image-row' />
                    <img src={mh1} alt="Sample 1" className='image-row' />
                </div>
            </div>
        </>
    );
}

export default MesZanajn;
