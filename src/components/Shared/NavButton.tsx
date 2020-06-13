import React from 'react';
import { SetIsOpen } from '../../types/SetIsOpen';
import '../styles/layout/_nav-button.scss';

interface INavButtonProps {
    isOpen: boolean;
    setIsOpen: SetIsOpen;
    openIcon?: string;
    closedIcon: string;
    text: string;
    extraClasses: string;
    ariaLabel: string;
}

const NavButton = ({
    isOpen, 
    setIsOpen, 
    openIcon = "fa-times", 
    closedIcon,
    text,
    extraClasses, 
    ariaLabel
}: INavButtonProps) => (
    <button 
        className={`nav-btn ${extraClasses}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Show ${ariaLabel}`}
        aria-expanded={isOpen}
    >
        {text}
        <span 
            className={`
                fa ${isOpen ? openIcon : closedIcon}
                ${isOpen ? 'clicked' : ''}
            `}
            aria-hidden='true'
        />
    </button>
);

export default NavButton;