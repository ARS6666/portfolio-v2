import React, { useState, useEffect, useRef } from 'react';
import "../../assets/css/one.css";
import ida1 from "../../assets/media/worksamples/ida1.PNG";
import ida2 from "../../assets/media/worksamples/ida2.PNG";
import ida3 from "../../assets/media/worksamples/ida3.PNG";
import ida4 from "../../assets/media/worksamples/ida4.PNG";
import ida5 from "../../assets/media/worksamples/ida5.PNG";
function Ltdida() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [ida1, ida2, ida3, ida4, ida5];
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

    return (<>
        <div className='worksample-text-container fontr'>
            <span className='worksample-header'>
                ida-ltd
            </span>
            <span className='worksample-description' dir='rtl'>
                <a href='https://github.com/ARS6666/ida-ltd-UI' target="_blank">(گیت هاب) </a>
                سایت شرکتی ida-ltd با استفاده از تکنولوژی‌های پیشرفته‌ای مانند React و CSS طراحی شده تا تجربه کاربری بی‌نظیری را فراهم کند. این سایت نه تنها زیبا و کاربرپسند است، بلکه با انیمیشن‌ها و افکت‌های جذاب، بازدیدکنندگان را به خود جذب می‌کند.
                در این پروژه، توجه ویژه‌ای به طراحی رابط کاربری (UI) و تجربه کاربری (UX) شده تا اطمینان حاصل شود که همه کاربران به راحتی به اطلاعات مورد نظرشان دسترسی پیدا کنند. همچنین، سرعت بارگذاری سایت بهینه‌سازی شده تا تجربه‌ای سریع و روان برای کاربران فراهم شود.
                این وب‌سایت به صورت رسپانسیو طراحی شده، یعنی روی همه دستگاه‌ها، از موبایل تا تبلت و دسکتاپ، به بهترین شکل نمایش داده می‌شود. با استفاده از تکنولوژی‌های به‌روز و استانداردهای بالا، وب‌سایتی امن و قابل اعتماد برای شرکت ida-ltd ایجاد شده است.            </span>
        </div>
        <div className="slider-container">
            <button onClick={goToPrevious} className="slider-button prev">
                &lt;
            </button>
            <div className="slider-wrapper" ref={sliderRef}>
                <img src={images[currentIndex]} alt="slider-img" className="slider-image active-slide" />
            </div>
            <button onClick={goToNext} className="slider-button next">
                &gt;
            </button>
        </div>
        <div className='image-row-container'>
            <div className='image-rows'>
                <img src={ida3} className='image-row' />
                <img src={ida2} className='image-row' />
                <img src={ida1} className='image-row' />
            </div>
        </div>
    </>);
};


export default Ltdida;
