import React, { useState } from 'react';
import { Link } from 'gatsby';
import { ACTIVE_CLASS_NAME } from './NavContents';
import NavBrandContents from './NavBrandContents';
import NavButton from '../../NavButton';
import CloseOnOutsideClick from '../../CloseOnOutsideClick';

const NavBrand = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="brand">
            <Link to="/" getProps={isActive}>
                <span className="logo">Rodney McQuain</span> 
            </Link>
            <NavBrandContents isOpen={isOpen} />
            <CloseOnOutsideClick className="on-click-outside" setIsOpen={setIsOpen}>
                <NavButton 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    openIcon="fa-caret-up"
                    closedIcon="fa-caret-down"
                    extraClasses="brand-dropdown-btn"
                    ariaLabel="Dropdown for Links of Home Page"
                />
            </CloseOnOutsideClick>
        </li>
    );
};

const isActive = ({ isCurrent }) => (
    isCurrent
        ? { className: ACTIVE_CLASS_NAME }
        : null
);

export default NavBrand;
