import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({text, url, icon, isSeparatePage}) => (
    <li>
        <Link to={url} getProps={isSeparatePage ? isPartiallyActive : undefined}>
            {icon 
                ? <span className={icon}><span> {text}</span></span>  
                : text
            }
        </Link>
    </li>
);

const isPartiallyActive = ({isPartiallyCurrent}) => (
    isPartiallyCurrent
    ? { className: "active" }
    : null
);

export default NavItem;