import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe';
import Education from './Education/Education';
import WorkTimeline from './Work/Timeline';
import Skills from './Skills/Skills';
import Testimonials from './Testimonials/TestimonialsSection';
import ContactMe from '../Shared/ContactMe';

const HomePage = () => {
    useEffect(scrollToCurrentHash, []);

    return (
        <>
            <Banner />
            <AboutMe />
            <Education />
            <WorkTimeline />
            <Skills />
            <Testimonials />
            <div className="container">
                <ContactMe />
            </div>
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

export default HomePage;