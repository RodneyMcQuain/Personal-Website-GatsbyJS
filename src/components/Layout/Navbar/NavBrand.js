import React from 'react';
import { Link } from 'gatsby';
import { ACTIVE_CLASS_NAME } from './NavContents';

const NavBrand = () => (
    <li>
        <Link to="/" getProps={isActive}>
            <span className="logo">Rodney McQuain</span> 
        </Link>
    </li>
);

const isActive = ({ isCurrent }) => (
    isCurrent
        ? { className: ACTIVE_CLASS_NAME }
        : null
);

export default NavBrand;
