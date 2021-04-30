import React from 'react';
import { markdownBody } from '../../styles/layout/components/Shared/Markdown.module.scss';

interface IMarkdownProps {
    html: string;
}

const Markdown = ({ html }: IMarkdownProps) => <div className={markdownBody} dangerouslySetInnerHTML={{ __html: html }} />;

export default Markdown;