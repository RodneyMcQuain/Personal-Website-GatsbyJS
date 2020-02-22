import React, { useState } from 'react';
import NavContents from './NavContents';
import ScrollIndicator from './ScrollIndicator';
import NavButton from '../../NavButton';
import CloseOnOutsideClick from '../../CloseOnOutsideClick';

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
                    closedIcon="fa-bars"
                    ariaLabel="Main Navigation"
                />
                <NavContents isOpen={isOpen} />
            </CloseOnOutsideClick>
        </nav>
    );
};

export default Navbar;