import React from 'react';

interface INavButtonProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    openIcon?: string;
    closedIcon: string;
    extraClasses: string;
    ariaLabel: string;
}

const NavButton = ({
    isOpen, 
    setIsOpen, 
    openIcon = "fa-times", 
    closedIcon, 
    extraClasses, 
    ariaLabel
}: INavButtonProps) => (
    <button 
        className={`btn ${extraClasses}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Show ${ariaLabel}`}
        aria-expanded={isOpen}
    >
        <span className={`fa ${isOpen ? openIcon : closedIcon}`}></span>
    </button>
);

export default NavButton;