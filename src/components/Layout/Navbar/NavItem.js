import React from 'react';
import { Link } from 'gatsby';
import { ACTIVE_CLASS_NAME } from './NavContents';

const NavItem = ({text, url, icon, isSeparatePage}) => (
    <li>
        <Link to={url} getProps={isSeparatePage ? isPartiallyActive : undefined}>
            {icon 
                ? <span className={icon}><span>&nbsp;{text}</span></span>  
                : text
            }
        </Link>
    </li>
);

const isPartiallyActive = ({ isPartiallyCurrent }) => (
    isPartiallyCurrent
    ? { className: ACTIVE_CLASS_NAME }
    : null
);

export default NavItem;