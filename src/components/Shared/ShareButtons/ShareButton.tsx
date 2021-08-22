import React from 'react';
import { AllChildren } from '../../../types/AllChildren';
import ExternalLinkButtonBase from '../ExternalLinkButtonBase';

interface ShareButtonProps {
    className: string;
    children: AllChildren;
    href: string;
    ariaLabel: string;
}

const ShareButton = ({ className, children, href, ariaLabel }: ShareButtonProps) => (
    <ExternalLinkButtonBase
        className={`-small-text ${className}`} 
        href={href}
        ariaLabel={ariaLabel}
    >
        {children}
    </ExternalLinkButtonBase>
);

export default ShareButton;