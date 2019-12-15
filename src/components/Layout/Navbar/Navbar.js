import React, { useState } from 'react';
import NavContents from './NavContents';
import ScrollIndicator from './ScrollIndicator';
import NavButton from '../../NavButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="my-nav">
            <ScrollIndicator />
            <NavButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                extraClasses="toggle hidden-sm hidden-md hidden-lg"
                closedIcon="fa-bars"
                ariaLabel="Main Navigation"
            />
            <NavContents isOpen={isOpen} />
        </nav>
    );
};

export default Navbar;