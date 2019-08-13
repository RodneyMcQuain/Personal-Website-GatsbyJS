import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from './Contact/Contact';

const Portfolio = () => (
    <>
        <Banner />
        <AboutMe />
        <Education />
        <Projects />
        <Skills />
        <Contact />
    </>
);

export default Portfolio;