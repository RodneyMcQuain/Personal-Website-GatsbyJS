import React from 'react';
import NavItem from '../NavItem';

const NavBrandContents = ({ isOpen }) => (
    <ul className={`brand-dropdown -layered-box-shadow${isOpen ? ' open-dropdown' : ''}`}>
        <NavItem text="About Me" url="#about-me" icon="fa fa-user" />
        <NavItem text="Education" url="#education" icon="fa fa-graduation-cap" />
        <NavItem text="Skills" url="#skills" icon="fa fa-list-alt" />
    </ul>
);

export default NavBrandContents;