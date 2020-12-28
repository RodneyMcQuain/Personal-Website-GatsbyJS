import React from 'react';
import styles from '../../styles/layout/ExternalLink.module.scss';
import ExternalLinkInNewTab from './ExternalLinkInNewTab';

interface ILinkProps {
    children: JSX.Element | JSX.Element[] | string;
    href: string;
    shouldOpenInNewTab?: boolean;
}

const ExternalLink = ({ children, href, shouldOpenInNewTab = false }: ILinkProps) => (
    shouldOpenInNewTab
        ? <ExternalLinkInNewTab href={href} className={styles.link}>{children}</ExternalLinkInNewTab>
        : <a href={href} className={styles.link}>{children}</a>
);

export default ExternalLink;