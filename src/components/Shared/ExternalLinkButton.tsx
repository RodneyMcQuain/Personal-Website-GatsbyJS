import React from 'react';
import ExternalLinkInNewTab from './ExternalLinkInNewTab';

interface ExternalLinkButtonProps {
    children: string | JSX.Element | JSX.Element[];
    href: string;
    ariaLabel: string;
}

const ExternalLinkButton = ({ children, href, ariaLabel }: ExternalLinkButtonProps) => (
    <ExternalLinkInNewTab href={href} ariaLabel={ariaLabel} className="btn">{children}</ExternalLinkInNewTab>
);

export default ExternalLinkButton;