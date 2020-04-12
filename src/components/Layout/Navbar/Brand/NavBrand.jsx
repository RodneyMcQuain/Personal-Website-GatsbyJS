import React, { useState } from 'react';
import BrandContents from './NavBrandContents';
import NavButton from '../../../NavButton';
import CloseOnOutsideClick from '../../../CloseOnOutsideClick';
import NameAndLogoLink from './NameAndLogoLink';

const NavBrand = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="brand">
            <NameAndLogoLink />
            <BrandContents isOpen={isOpen} />
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

export default NavBrand;
