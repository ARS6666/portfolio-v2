import React from 'react';
import { Helmet } from 'react-helmet';
import "../../assets/css/home/skills.css";
import img1 from "../../assets/media/1.png";
import img2 from "../../assets/media/2.png";
import img3 from "../../assets/media/3.png";
import img4 from "../../assets/media/4.png";
import img5 from "../../assets/media/5.png";
import img6 from "../../assets/media/6.png";
import img7 from "../../assets/media/9.png";
import img8 from "../../assets/media/10.png";

function Skills() {
    return (
        <>
            <Helmet>
                <meta name="description" content="A showcase of the technologies I am skilled in." />
                <meta name="keywords" content="skills, technologies, expertise, portfolio" />
            </Helmet>
            <div className="skills-title-container">
                <span className="skills-title fontr" dir="rtl">توی این تکنولوژی ها مهارت دارم ...</span>
            </div>
            <div className='slider' style={{
                '--width': '100px',
                '--height': '150px',
                '--quantity': '8'
            }}>
                <div className='list'>
                    <div className='item' style={{ '--position': '1' }}><img className='skill-image' src={img1} alt="Skill 1" /></div>
                    <div className='item' style={{ '--position': '2' }}><img className='skill-image' src={img2} alt="Skill 2" /></div>
                    <div className='item' style={{ '--position': '3' }}><img className='skill-image' src={img3} alt="Skill 3" /></div>
                    <div className='item' style={{ '--position': '4' }}><img className='skill-image' src={img4} alt="Skill 4" /></div>
                    <div className='item' style={{ '--position': '5' }}><img className='skill-image' src={img5} alt="Skill 5" /></div>
                    <div className='item' style={{ '--position': '6' }}><img className='skill-image' src={img6} alt="Skill 6" /></div>
                    <div className='item' style={{ '--position': '7' }}><img className='skill-image' src={img7} alt="Skill 7" /></div>
                    <div className='item' style={{ '--position': '8' }}><img className='skill-image' src={img8} alt="Skill 8" /></div>
                </div>
            </div>
        </>
    );
}

export default Skills;
