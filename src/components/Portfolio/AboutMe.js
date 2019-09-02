import React from 'react';
import InViewAnimation from '../InViewAnimation';

const AboutMe = () => (
    <InViewAnimation>
        <div className="container">
            <div className="page-header">
                <h1><span id="about-me"></span>About Me</h1>
            </div>
            <img src="me.jpg" className="img-rounded" id="me-img" alt="Rodney McQuain" />
            <p id="about-me-text">
                &nbsp;&nbsp;&nbsp;&nbsp;I recently received my AS in software development from Ivy Tech Community College and I currently attend
                Purdue University Fort Wayne, looking to get my BS in computer science with a software engineering focus.
                Countless hours of my time are dedicated to furthering my knowledge of programming and becoming the best
                I can be.  I am highly self-motivated and eager to get employed in a position where I can test my skills
                and further my growth as a software engineer.
                <br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Aside from programming I put my time into competitive video games.  Just like programming it requires and improves
                my critical thinking and problem solving skills.  I am currently ranked top 5 in Indiana for
                Super Smash Bros. Melee.  Further, it is something I am very passionate about and is a testament
                to my dedication of being the best that I can be at whatever I put my mind to.
            </p>
        </div>
    </InViewAnimation>
);

export default AboutMe;