import React from 'react';
import { SetIsOpen } from '../types/SetIsOpen';

interface INavButtonProps {
    isOpen: boolean;
    setIsOpen: SetIsOpen;
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
        className={`nav-btn ${extraClasses}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Show ${ariaLabel}`}
        aria-expanded={isOpen}
    >
        <span className={`
            fa ${isOpen ? openIcon : closedIcon}
            ${isOpen ? 'clicked' : ''}
        `}></span>
    </button>
);

export default NavButton;