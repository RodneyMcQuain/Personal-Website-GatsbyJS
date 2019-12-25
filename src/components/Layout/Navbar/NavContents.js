import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from 'gatsby';

const NavContents = ({isOpen}) => (
    <Scrollspy 
        className={`nav-contents${isOpen ? " open-navbar" : ""}`}
        items={['about-me', 'education', 'projects', 'skills', 'contact']} 
        currentClassName='active'
    >
        <li><Link to={'/blog-posts'} getProps={isPartiallyActive}>
            <span className="fa fa-pencil"><span> Blog</span></span>
        </Link></li>
        <li><Link to={'#about-me'} getProps={isPartiallyActive}>About Me</Link></li>
        <li><Link to={'#education'}>Education</Link></li>
        <li><Link to={'#projects'}>Projects</Link></li>
        <li><Link to={'#skills'}>Skills</Link></li>
        <li><Link to={'/contact'} getProps={isPartiallyActive}>
            <span className="fa fa-envelope"><span> Contact</span></span>
        </Link></li>
        <li><Link to={'/resume'} getProps={isPartiallyActive}>
            <span className="fa fa-file-pdf-o"><span> Resume</span></span>
        </Link></li>
    </Scrollspy>
);

const isPartiallyActive = ({isPartiallyCurrent}) => (
    isPartiallyCurrent
    ? { className: "active" }
    : null
);

export default NavContents;