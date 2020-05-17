import React from 'react';
import NavBrandItem from './NavBrandItem';

const NavBrandContents = ({ isOpen }) => (
    <ul className={`brand-dropdown -layered-box-shadow${isOpen ? ' open-dropdown' : ''}`}>
        <NavBrandItem text="About Me" url="about-me" icon="fa fa-user" />
        <NavBrandItem text="Education" url="education" icon="fa fa-graduation-cap" />
        <NavBrandItem text="Skills" url="skills" icon="fa fa-list-alt" />
    </ul>
);

export default NavBrandContents;