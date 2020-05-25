import React from 'react';
import NavBrandItem from './NavBrandItem';
import { SKILLS_HASH, WORK_HASH, EDUCATION_HASH, ABOUT_ME_HASH } from '../../../../services/homePageHashes';

const NavBrandContents = ({ isOpen }) => (
    <ul className={`brand-dropdown -layered-box-shadow${isOpen ? ' open-dropdown' : ''}`}>
        <NavBrandItem text="About Me" url={ABOUT_ME_HASH} icon="fa fa-user" />
        <NavBrandItem text="Education" url={EDUCATION_HASH} icon="fa fa-graduation-cap" />
        <NavBrandItem text="Work" url={WORK_HASH} icon="fa fa-building" />
        <NavBrandItem text="Skills" url={SKILLS_HASH} icon="fa fa-list-alt" />
    </ul>
);

export default NavBrandContents;