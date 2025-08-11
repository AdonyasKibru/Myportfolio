import React from 'react';
import "./home.css";
import picture from '../images/myPic.jpg';

function Home() {
    return (
        <div className='fullpage'>

            <div className='spacer'></div> 

            <div className="box1">
                <h1> Head</h1>
            </div>

            <div className="box2">
                {/* Image with className directly */}
                <img src={picture} alt="Profile Picture" className="ProfilePicture" />

                <div className="PersonalStatement">
                    <h1 className='name'>ADONYAS KIBRU</h1>

                    <p className='p1'>
                      Originally from Ethiopia and now based in Kent, Washington, I graduated cum laude 
                      in June 2025 from the University of Washington Bothell with a Bachelor’s degree in
                      Computer Science and Software Engineering, earning a 3.94 GPA. During my studies, 
                      I built a strong foundation in software development and engineering principles, preparing
                      me to contribute effectively in fast-paced, innovative tech environments.
                    </p>

                    <p className='p2'>
                     I have solid experience in backend and full-stack development, working extensively with JavaScript,
                      Python, C++, and React. I’m comfortable designing and managing databases such as MySQL, Firebase,
                       and SQLite, and have applied these skills to build scalable, efficient applications. Through my 
                       coursework in Data Structures, Software Engineering, and User-Centered Design, I’ve developed a 
                       strong foundation in creating reliable, maintainable, and user-friendly software solutions that 
                       meet real-world needs.
                    </p>

                    <p className='p3'>
                       I continuously test and experiment with new tools and systems in my coding. Recently, I worked on 
                       integrating Google’s Speech-to-Text transcriber. Although real-time recording-to-text didn’t work 
                       as expected, I found a workaround by saving the recording, converting it into the appropriate format, 
                       and successfully transcribing the audio. This experience reinforced my problem-solving skills and adaptability 
                       when working with emerging technologies.
                    </p>

                    <p className='p4'>
                        Although most of my experience to date has been in backend and full-stack development, I’m eager to 
                        challenge myself by exploring new fields such as AI, machine learning, and other emerging technologies.
                        My goal is to grow as a software developer in environments where I can collaborate with experienced 
                        professionals, contribute meaningfully to impactful projects, and continue honing my skills.
                    </p>
                </div>
            </div>

            <div className="box3">

            </div>

            <div className="box4">

            </div>
        </div>
    );
}

export default Home;
