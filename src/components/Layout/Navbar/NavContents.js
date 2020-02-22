import React from 'react';
import Scrollspy from 'react-scrollspy';
import NavItem from './NavItem';
import NavBrand from './NavBrand';

export const ACTIVE_CLASS_NAME = 'active';

const NavContents = ({ isOpen }) => (
    <Scrollspy 
        className={`nav-contents${isOpen ? " open" : ""}`}
        items={['about-me', 'education', 'projects', 'skills', 'contact']} 
        currentClassName={ACTIVE_CLASS_NAME}
    >
        <NavBrand />
        <NavItem text="Projects" url="/projects" icon="fa fa-briefcase" isSeparatePage={true} />
        <NavItem text="Blog" url="/blog-posts" icon="fa fa-pencil" isSeparatePage={true} />
        <NavItem text="Resume" url="/resume" icon="fa fa-file-pdf-o" isSeparatePage={true} />
        <NavItem text="Contact" url="/contact" icon="fa fa-envelope" isSeparatePage={true} />
    </Scrollspy>
);

export default NavContents;