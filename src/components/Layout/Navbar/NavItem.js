import React from 'react';
import Icon from '../../Icon';
import { Link } from 'gatsby';
import { ACTIVE_CLASS_NAME } from './NavContents';

const NavItem = ({ text, url, icon, isSeparatePage }) => (
    <li>
        <Link to={url} role="menuitem" getProps={isSeparatePage ? isPartiallyActive : undefined}>
            {icon 
                ? <span><Icon icon={icon} />&nbsp;{text}</span>  
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