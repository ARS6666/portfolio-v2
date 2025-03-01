import React from 'react';
import "../../assets/css/home/skills.css"
import img1 from "../../assets/media/1.png"
import img2 from "../../assets/media/2.png"
import img3 from "../../assets/media/3.png"
import img4 from "../../assets/media/4.png"
import img5 from "../../assets/media/5.png"
import img6 from "../../assets/media/6.png"

function Skills() {
    return (
        <>
            <div class="skills-title-container">
                <span class="skills-title fontr">مهارت ها</span>
            </div>
            <div className='slider' style={{
                '--width': '100px',
                '--height': '150px',
                '--quantity': '6'
            }}>
                <div className='list'>
                    <div className='item' style={{ '--position': '1' }}><img className='skill-image' src={img1} alt="Sample 1" /></div>
                    <div className='item' style={{ '--position': '2' }}><img className='skill-image' src={img2} alt="Sample 2" /></div>
                    <div className='item' style={{ '--position': '3' }}><img className='skill-image' src={img3} alt="Sample 3" /></div>
                    <div className='item' style={{ '--position': '4' }}><img className='skill-image' src={img4} alt="Sample 4" /></div>
                    <div className='item' style={{ '--position': '5' }}><img className='skill-image' src={img5} alt="Sample 5" /></div>
                    <div className='item' style={{ '--position': '6' }}><img className='skill-image' src={img6} alt="Sample 6" /></div>
                </div>
            </div>
        </>
    );
}

export default Skills;
