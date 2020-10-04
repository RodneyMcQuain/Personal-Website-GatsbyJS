import React from 'react';
import NavBrandItem from './NavBrandItem';
import { SKILLS_HASH, WORK_HASH, EDUCATION_HASH, ABOUT_ME_HASH } from '../../../../services/homePageHashes';
import { FaUser, FaUniversity, FaBuilding, FaList } from 'react-icons/fa';

const NavBrandContents = ({ isOpen }) => (
    <ul className={`brand-dropdown -layered-box-shadow${isOpen ? ' open-dropdown' : ''}`}>
        <NavBrandItem text="About Me" url={ABOUT_ME_HASH} icon={<FaUser />} />
        <NavBrandItem text="Education" url={EDUCATION_HASH} icon={<FaUniversity />} />
        <NavBrandItem text="Work" url={WORK_HASH} icon={<FaBuilding />} />
        <NavBrandItem text="Skills" url={SKILLS_HASH} icon={<FaList />} />
    </ul>
);

export default NavBrandContents;