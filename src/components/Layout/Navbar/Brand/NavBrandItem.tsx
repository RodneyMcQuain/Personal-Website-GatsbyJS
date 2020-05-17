import React from 'react';
import IconText from '../../../IconText';

const NavBrandItem = ({ text, url, icon }) => (
    <a href={`#${url}`}>
        <IconText text={text} icon={icon} />
    </a>
);

export default NavBrandItem;