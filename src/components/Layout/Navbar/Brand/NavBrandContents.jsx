import React from 'react';
import NavBrandItem from './NavBrandItem';
import { SKILLS_HASH, WORK_HASH, EDUCATION_HASH, ABOUT_ME_HASH, TESTIMONIALS_HASH } from '../../../../services/homePageHashes';
import { FaUser, FaUniversity, FaBuilding, FaList, FaComments } from '@meronex/icons/fa';
import { brandDropdown, openDropdown } from '../../../../styles/layout/components/Layout/Navbar/Brand/NavBrandContents.module.scss';

const NavBrandContents = ({ isOpen }) => (
    <ul className={`${brandDropdown} -layered-box-shadow ${isOpen ? openDropdown : ''}`}>
        <NavBrandItem text="About Me" url={ABOUT_ME_HASH} icon={<FaUser />} />
        <NavBrandItem text="Testimonials" url={TESTIMONIALS_HASH} icon={<FaComments />} />
        <NavBrandItem text="Work" url={WORK_HASH} icon={<FaBuilding />} />
        <NavBrandItem text="Skills" url={SKILLS_HASH} icon={<FaList />} />
        <NavBrandItem text="Education" url={EDUCATION_HASH} icon={<FaUniversity />} />
    </ul>
);

export default NavBrandContents;