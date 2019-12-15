import React, { useState } from 'react';
import NavContents from './NavContents';
import ScrollIndicator from './ScrollIndicator';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="my-nav">
            <ScrollIndicator />
            <button 
                className="btn toggle hidden-sm hidden-md hidden-lg" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Show Navbar"
            >
                <span className={"fa fa-bars"} />
            </button>
            <NavContents isOpen={isOpen} />
        </nav>
    );
};

export default Navbar;