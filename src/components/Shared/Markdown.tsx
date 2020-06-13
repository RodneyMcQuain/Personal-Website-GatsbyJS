import React from 'react';
import '../styles/layout/_markdown.scss';

interface IMarkdownProps {
    html: string;
}

const Markdown = ({ html }: IMarkdownProps) => <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />;

export default Markdown;