import React from 'react';
import IconText from '../../../IconText';
import { HOME_ROUTE } from '../../../../services/routes';

const NavBrandItem = ({ text, url, icon }) => (
    <li>
        <a href={`/${HOME_ROUTE}#${url}`} role="menuitem">
            <IconText text={text} icon={icon} />
        </a>
    </li>
);

export default NavBrandItem;