import React from 'react';
import styles from '../../styles/layout/ExternalLink.module.scss';
import { AllChildren } from '../../types/AllChildren';
import ExternalLinkInNewTab from './ExternalLinkInNewTab';

interface ILinkProps {
    children: AllChildren;
    href: string;
    shouldOpenInNewTab?: boolean;
}

const ExternalLink = ({ children, href, shouldOpenInNewTab = false }: ILinkProps) => (
    shouldOpenInNewTab
        ? <ExternalLinkInNewTab href={href} className={styles.link}>{children}</ExternalLinkInNewTab>
        : <a href={href} className={styles.link}>{children}</a>
);

export default ExternalLink;