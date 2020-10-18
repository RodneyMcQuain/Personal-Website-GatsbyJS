import React from 'react';
import Scrollspy from 'react-scrollspy';
import NavItem from './NavItem';
import NavBrand from './Brand/NavBrand';
import { PROJECTS_ROUTE, BLOG_ROUTE, RESUME_ROUTE, CONTACT_ROUTE } from '../../../services/routes';
import { ABOUT_ME_HASH, EDUCATION_HASH, SKILLS_HASH, WORK_HASH } from '../../../services/homePageHashes';
import { FaBriefcase, FaPencilAlt, FaFilePdf, FaEnvelope} from '@meronex/icons/fa';

export const ACTIVE_CLASS_NAME = 'active';

const NavContents = ({ isOpen }) => (
    <Scrollspy 
        className={`nav-contents${isOpen ? " open" : ""}`}
        items={[ABOUT_ME_HASH, EDUCATION_HASH, WORK_HASH, SKILLS_HASH]} 
        currentClassName={ACTIVE_CLASS_NAME}
    >
        <NavBrand />
        <NavItem text="Projects" url={`/${PROJECTS_ROUTE}`} icon={<FaBriefcase />} isSeparatePage={true} />
        <NavItem text="Blog" url={`/${BLOG_ROUTE}`} icon={<FaPencilAlt />} isSeparatePage={true} />
        <NavItem text="Resume" url={`/${RESUME_ROUTE}`} icon={<FaFilePdf />} isSeparatePage={true} />
        <NavItem text="Contact" url={`/${CONTACT_ROUTE}`} icon={<FaEnvelope />} isSeparatePage={true} />
    </Scrollspy>
);

export default NavContents;