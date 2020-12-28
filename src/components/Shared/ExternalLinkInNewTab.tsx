import React from 'react';

interface UnstyledExternalLinkProps {
    children: string | JSX.Element | JSX.Element[];
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