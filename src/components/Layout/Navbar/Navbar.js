import React, { useState } from 'react';
import NavContents from './NavContents';
import ScrollIndicator from './ScrollIndicator';
import NavButton from '../../Shared/NavButton';
import CloseOnOutsideClick from '../../Shared/CloseOnOutsideClick';
import { FaBars } from 'react-icons/fa';
import '../../../styles/layout/_nav.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="my-nav">
            <ScrollIndicator />
            <CloseOnOutsideClick className="-layered-box-shadow" setIsOpen={setIsOpen}>
                <NavButton
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    extraClasses="btn toggle hidden-sm hidden-md hidden-lg"
                    closedIcon={<FaBars />}
                    ariaLabel="Main Navigation"
                />
                <NavContents isOpen={isOpen} />
            </CloseOnOutsideClick>
        </nav>
    );
};

export default Navbar;