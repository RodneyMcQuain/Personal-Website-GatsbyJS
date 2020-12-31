import React from 'react';
import { AllChildren } from '../../types/AllChildren';
import ExternalLinkInNewTab from './ExternalLinkInNewTab';

interface ExternalLinkButtonProps {
    children: AllChildren;
    href: string;
    ariaLabel: string;
}

const ExternalLinkButton = ({ children, href, ariaLabel }: ExternalLinkButtonProps) => (
    <ExternalLinkInNewTab href={href} ariaLabel={ariaLabel} className="btn">{children}</ExternalLinkInNewTab>
);

export default ExternalLinkButton;