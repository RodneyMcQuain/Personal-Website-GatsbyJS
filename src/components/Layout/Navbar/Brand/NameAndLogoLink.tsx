import React, { useState } from 'react';
import { Link } from 'gatsby';
import NameAndLogo from './NameAndLogo';
import { HOME_ROUTE } from '../../../../services/routes';
import { ACTIVE_ITEM_CLASS_NAME } from '../activeItem';

const NameLink = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            to={`/${HOME_ROUTE}`} 
            getProps={isActive}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <NameAndLogo isHovered={isHovered} />
        </Link>
    );
};

const isActive = ({ isCurrent }) => (
    isCurrent
        ? { className: ACTIVE_ITEM_CLASS_NAME }
        : null
);

export default NameLink;