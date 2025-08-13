import "./home.css";
import React, { useState } from 'react';
import profile from '../images/myPic.jpg';
import uwb from '../images/uwb.jpg';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Home() {
    return (
        <div className='fullpage'>

            <div className="introduction">
                <div className="intro-text">
                    <h2 className="intro-h2">Hi There,</h2>
                    <h1 className="intro-name">I’m <span>Adonyas Kibru</span></h1>
                    <h2 className="intro-h2">Software Engineer</h2>
                    <h2 className="intro-h2p">
                        Backend | Frontend | Web application | Databases
                    </h2>
                </div>

                <div className="intro-image">
                    <img src={profile} alt="Adonyas Kibru" className="profile-pic" />
                </div>
            </div>


            <div className="education">
                <div>
                    <img src={uwb} alt='UWB LOGO' />
                </div>
                <p className='p1'><i>
                    <span className='uniName'>University of Washington Bothell </span><br />
                    <span className='degree'>Bachelor of Science in Computer Science and Software Engineering</span><br />
                    <span className="honors"><i>Cum Laude</i> | June 2025</span>
                </i>
                </p>
            </div>

            <div className="experience-box">
                <h2 className="section-title">Work Experience</h2>

                <div className="exp">
                    <div className="timeline-dot"></div>
                    <div className="exp-content">
                        <div className="title-row">
                            <h3 className="worktitle">Software Developer <span>| Capstone Project</span></h3>
                            <span className="workPeriod">Jun 2024 – Dec 2024</span>
                        </div>
                        <p className="workPlace">University of Washington Bothell</p>
                        <ul className="workDetail">
                            <li>Developed a role-based Feedback Management System for the MeTILDA research project.</li>
                            <li>Designed database schemas and built secure API endpoints for CRUD operations.</li>
                            <li>Created an intuitive front-end interface and conducted extensive integration testing.</li>
                            <li><b>Technologies:</b> JavaScript, React, Flask, Firebase, CSS, HTML</li>
                        </ul>
                    </div>
                </div>

                <div className="exp">
                    <div className="timeline-dot"></div>
                    <div className="exp-content">
                        <div className="title-row">
                            <h3 className="worktitle">Undergraduate Research Assistant</h3>
                            <span className="workPeriod">Oct 2023 – Jun 2024</span>
                        </div>
                        <p className="workPlace">University of Washington Bothell</p>
                        <p className="researchTitle">Non-Invasive Fetal ECG Signal Extraction</p>
                        <ul className="workDetail">
                            <li>Developed MATLAB scripts for signal extraction and QRS peak detection.</li>
                            <li>Implemented adaptive filtering algorithms and time-scale approaches.</li>
                            <li>Created visual tools to aid research analysis and findings.</li>
                        </ul>
                    </div>
                </div>

                <div className="exp">
                    <div className="timeline-dot"></div>
                    <div className="exp-content">
                        <div className="title-row">
                            <h3 className="worktitle">Math & Computer Science Tutor</h3>
                            <span className="workPeriod">Oct 2022 – Mar 2023</span>
                        </div>
                        <p className="workPlace">North Seattle College</p>
                        <ul className="workDetail">
                            <li>Guided students through Java and Python projects and assignments.</li>
                            <li>Fostered problem-solving skills and programming proficiency.</li>
                            <li>Communicated complex concepts clearly to ensure student success.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="skills">
                <CircularProgressbar
                    value={100}
                    text={`c++`}
                    styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#7A2FFF",
                    trailColor: "#271d4f",
                    })}
                />
            </div>
        </div>
    );
}

export default Home;
