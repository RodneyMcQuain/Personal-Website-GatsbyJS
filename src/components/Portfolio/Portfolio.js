import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Portfolio = () => (
    <>
        <Banner />
        <AboutMe />
        <Education />
        <Projects />
        <Skills />
    </>
);

export default Portfolio;