import React from 'react';
import IconText from '../../../Shared/IconText';
import { HOME_ROUTE } from '../../../../services/routes';

interface INavBrandItemProps {
    text: string;
    url: string;
    icon: JSX.Element;
}

const NavBrandItem = ({ text, url, icon }: INavBrandItemProps) => (
    <li>
        <a href={`/${HOME_ROUTE}#${url}`} role="menuitem">
            <IconText text={text} icon={icon} />
        </a>
    </li>
);

export default NavBrandItem;