import React from 'react';
import { link } from '../../styles/layout/components/Shared/ExternalLink.module.scss';
import { AllChildren } from '../../types/AllChildren';
import ExternalLinkInNewTab from './ExternalLinkInNewTab';

interface ILinkProps {
    children: AllChildren;
    href: string;
    shouldOpenInNewTab?: boolean;
}

const ExternalLink = ({ children, href, shouldOpenInNewTab = false }: ILinkProps) => (
    shouldOpenInNewTab
        ? <ExternalLinkInNewTab href={href} className={link}>{children}</ExternalLinkInNewTab>
        : <a href={href} className={link}>{children}</a>
);

export default ExternalLink;