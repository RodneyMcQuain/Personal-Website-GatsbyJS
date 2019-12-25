import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Portfolio = () => {
    useEffect(scrollToCurrentHash, []);

    return (
        <>
            <Banner />
            <AboutMe />
            <Education />
            <Projects />
            <Skills />
        </>
    );
};

const scrollToCurrentHash = () => {
    const hash = window.location.hash;
    if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        element.scrollIntoView();
    }
};

export default Portfolio;