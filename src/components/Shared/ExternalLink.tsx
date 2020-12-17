import React from 'react';
import styles from '../../styles/layout/ExternalLink.module.scss';

interface ILinkProps {
    children: JSX.Element | JSX.Element[] | string;
    href: string;
    shouldOpenInNewTab: boolean;
}

const ExternalLink = ({ children, href, shouldOpenInNewTab }: ILinkProps) => (
    shouldOpenInNewTab
        ? <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>{children}</a>
        : <a href={href} className={styles.link}>{children}</a>
);

export default ExternalLink;