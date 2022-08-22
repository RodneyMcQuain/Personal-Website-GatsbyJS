import React from 'react';
import { link as linkStyle } from '../../styles/layout/components/Shared/underlineLink.module.scss';
import { AllChildren } from '../../types/AllChildren';
import InternalLinkWrapper from './InternalLinkWrapper';

interface InternalLinkProps {
    children: AllChildren;
    link: string;
    className?: string;
}

const InternalLink = ({ link, className = '', children }: InternalLinkProps) => (
    <InternalLinkWrapper link={link} className={`${linkStyle} ${className}`}>{children}</InternalLinkWrapper>
);

export default InternalLink;