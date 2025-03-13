import React from 'react';
import { Helmet } from 'react-helmet';
import "../../assets/css/home/projects.css";
import meszanajn from "../../assets/media/worksamples/mh3.PNG";
import ida from "../../assets/media/worksamples/ida1.PNG";

function Projects() {
    return (
        <>
            <Helmet>
                <meta name="description" content="A showcase of projects I have worked on." />
                <meta name="keywords" content="projects, work samples, portfolio" />
            </Helmet>
            <div className="projects-title-container">
                <span className="projects-title fontr">... کار هایی که تا الان انجام دادم</span>
            </div>
            <div className="projects-card-container fontr">
                <a className="link-deco-black" href="/worksample1">
                    <div className="project-card">
                        <img className="project-image" src={meszanajn} alt="Mes Honar Zanjan project" />
                        <h3 className="project-name">مس هنر زنجان</h3>
                        <p className="project-type">سایت فروشگاهی</p>
                    </div>
                </a>
                <a className="link-deco-black" href="/worksample2">
                    <div className="project-card fontr">
                        <img className="project-image" src={ida} alt="IDA-LTD project" />
                        <h3 className="project-name">IDA-LTD</h3>
                        <p className="project-type">سایت شرکتی</p>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Projects;
