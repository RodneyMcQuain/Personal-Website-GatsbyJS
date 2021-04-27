import React, { useState } from 'react';
import BrandContents from './NavBrandContents';
import NavButton from '../../../Shared/NavButton';
import CloseOnOutsideClick from '../../../Shared/CloseOnOutsideClick';
import NameAndLogoLink from './NameAndLogoLink';
import { FaCaretUp, FaCaretDown } from '@meronex/icons/fa';
import { brand, brandDropdownButton, onClickOutside } from '../../../../styles/layout/components/Layout/Navbar/Brand/NavBrand.module.scss';

const NavBrand = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={brand}>
            <NameAndLogoLink />
            <BrandContents isOpen={isOpen} />
            <CloseOnOutsideClick className={onClickOutside} setIsOpen={setIsOpen}>
                <NavButton 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    openIcon={<FaCaretUp />}
                    closedIcon={<FaCaretDown />}
                    extraClasses={brandDropdownButton}
                    ariaLabel="Dropdown for Links of Home Page"
                />
            </CloseOnOutsideClick>
        </li>
    );
};

export default NavBrand;
