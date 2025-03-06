import React from 'react';
import "../../assets/css/home/projects.css"
import productimg from "../../assets/media/8.png"

function Projects() {
    return (
        <>
            <div class="projects-title-container">
                <span class="projects-title fontr">کار هایی که تا الان انجام دادم</span>
            </div>
            <div className='projects-card-container fontr'>
                <div className='project-card'>
                    <img className='project-image' src={productimg}/>
                    <span className='project-name'>مس هنر زنجان</span>
                    <span className='project-type'>سایت فروشگاهی</span>
                </div>
                <div className='project-card fontr'>
                    <img className='project-image' src={productimg}/>
                    <span className='project-name'>IDA-LTD</span>
                    <span className='project-type'>سایت شرکتی</span>
                </div>
            </div>

        </>
    );
}

export default Projects;
