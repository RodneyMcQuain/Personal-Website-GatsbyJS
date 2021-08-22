import React from 'react';
import LinkedInIcon from './Icons/LinkedInIcon';
import IconText from './IconText';
import ExternalLinkButtonBase from './ExternalLinkButtonBase';
import { linkedin } from '../../styles/layout/components/Shared/linkedInButtonStyle.module.scss';

interface LinkedInButtonProps {
    children: string;
    href: string;
    ariaLabel: string;
    className?: string;
}

const LinkedInButton = ({ children, href, ariaLabel, className = '' }: LinkedInButtonProps) => (
    <ExternalLinkButtonBase
        className={`${linkedin} ${className}`}
        href={href}
        ariaLabel={ariaLabel}
    >
        <IconText icon={<LinkedInIcon />} text={children} />
    </ExternalLinkButtonBase>
);

export default LinkedInButton;