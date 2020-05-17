import React from 'react';
import IconText from '../../../IconText';

const NavBrandItem = ({ text, url, icon }) => (
    <li>
        <a href={`#${url}`} role="menuitem">
            <IconText text={text} icon={icon} />
        </a>
    </li>
);

export default NavBrandItem;