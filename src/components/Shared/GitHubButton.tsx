import React from 'react';
import IconText from './IconText';
import ExternalLinkButtonBase from './ExternalLinkButtonBase';
import GitHubIcon from './Icons/GitHubIcon';
import { github } from '../../styles/layout/components/Shared/GitHubButton.module.scss';

interface LinkedInButtonProps {
    children: string;
    href: string;
    ariaLabel: string;
    className?: string;
}

const LinkedInButton = ({ children, href, ariaLabel, className = '' }: LinkedInButtonProps) => (
    <ExternalLinkButtonBase
        className={`${github} ${className}`}
        href={href}
        ariaLabel={ariaLabel}
    >
        <IconText icon={<GitHubIcon />} text={children} />
    </ExternalLinkButtonBase>
);

export default LinkedInButton;