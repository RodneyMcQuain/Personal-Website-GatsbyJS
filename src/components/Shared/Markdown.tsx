import React from 'react';
import styles from '../../styles/layout/components/Shared/Markdown.module.scss';

interface IMarkdownProps {
    html: string;
}

const Markdown = ({ html }: IMarkdownProps) => <div className={styles.markdownBody} dangerouslySetInnerHTML={{ __html: html }} />;

export default Markdown;