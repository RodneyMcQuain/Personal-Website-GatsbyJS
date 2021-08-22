import React from 'react';
import { AllChildren } from '../../types/AllChildren';
import ExternalLinkInNewTab from './ExternalLinkInNewTab';

interface ExternalLinkButtonBaseProps {
    children: AllChildren;
    href: string;
    ariaLabel: string;
    className?: string
}

const ExternalLinkButtonBase = ({ children, href, ariaLabel, className = '' }: ExternalLinkButtonBaseProps) => (
    <ExternalLinkInNewTab href={href} ariaLabel={ariaLabel} className={`btn-base ${className}`}>{children}</ExternalLinkInNewTab>
);

export default ExternalLinkButtonBase;