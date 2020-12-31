import React from 'react';
import { AllChildren } from '../../types/AllChildren';

interface UnstyledExternalLinkProps {
    children: AllChildren;
    href: string;
    className?: string;
    ariaLabel?: string;
}

const ExternalLinkInNewTab = ({ children, href, className, ariaLabel }: UnstyledExternalLinkProps) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={ariaLabel}
        className={className}
    >
        {children}
    </a>
);

export default ExternalLinkInNewTab;