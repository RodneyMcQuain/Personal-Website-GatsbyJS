import React from 'react';
import Scrollspy from 'react-scrollspy';
import NavItem from './NavItem';
import NavBrand from './NavBrand';

export const ACTIVE_CLASS_NAME = 'active';

const NavContents = ({isOpen}) => (
    <Scrollspy 
        className={`nav-contents${isOpen ? " open-navbar" : ""}`}
        items={['about-me', 'education', 'projects', 'skills', 'contact']} 
        currentClassName={ACTIVE_CLASS_NAME}
    >
        <NavBrand />
        <NavItem text="About Me" url="#about-me" />
        <NavItem text="Education" url="#education" />
        <NavItem text="Projects" url="#projects" />
        <NavItem text="Skills" url="#skills" />
        <NavItem text="Blog" url="/blog-posts" icon="fa fa-pencil" isSeparatePage={true} />
        <NavItem text="Resume" url="/resume" icon="fa fa-file-pdf-o" isSeparatePage={true} />
        <NavItem text="Contact" url="/contact" icon="fa fa-envelope" isSeparatePage={true} />
    </Scrollspy>
);

export default NavContents;