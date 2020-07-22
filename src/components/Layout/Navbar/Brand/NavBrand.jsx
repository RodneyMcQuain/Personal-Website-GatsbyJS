import React, { useState } from 'react';
import BrandContents from './NavBrandContents';
import NavButton from '../../../Shared/NavButton';
import CloseOnOutsideClick from '../../../Shared/CloseOnOutsideClick';
import NameAndLogoLink from './NameAndLogoLink';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

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
                    openIcon={<FaCaretUp />}
                    closedIcon={<FaCaretDown />}
                    extraClasses="brand-dropdown-btn"
                    ariaLabel="Dropdown for Links of Home Page"
                />
            </CloseOnOutsideClick>
        </li>
    );
};

export default NavBrand;
