import React from 'react';
import { Link } from 'gatsby';
import { link as linkStyle } from '../../styles/layout/components/Shared/ExternalLink.module.scss';
import { AllChildren } from '../../types/AllChildren';

interface InternalLinkProps {
    children: AllChildren;
    link: string;
    className: string;
}

const InternalLinkWrapper = ({ link, className, children }: InternalLinkProps) => (
    <Link to={link} className={className}>{children}</Link>
);

export default InternalLinkWrapper;