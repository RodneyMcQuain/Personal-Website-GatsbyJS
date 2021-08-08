import React from 'react';
import { AllChildren } from '../../../types/AllChildren';

interface ShareButtonProps {
    className: string;
    children: AllChildren;
    href: string;
    ariaLabel: string;
}

const ShareButton = ({ className, children, href, ariaLabel }: ShareButtonProps) => (
    <a 
        className={`btn-base -small-text ${className}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        href={href}
        aria-label={ariaLabel}
    >
        {children}
    </a>
);

export default ShareButton;