import React from 'react';
import "../../assets/css/home/hero.css";
import "../../assets/font/font.css";
import img from "../../assets/media/7.png"

function Hero() {
    return (<>
        <div className='hero-container' dir="rtl">
            <div className='circle-blue'></div>
            <div className='circle-yellow'></div>
            <img src={img} className='hero-img'/>
        </div>
    </>);
}

export default Hero;
