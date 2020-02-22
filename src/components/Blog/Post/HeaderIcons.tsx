import React from 'react';
import PublishedOnDate from '../Icons/PublishedOnDate';
import UpdatedOnDate from '../Icons/UpdatedOnDate';
import Category from '../Icons/Category';
import Tags from '../Icons/Tags';
import ReadTime from '../Icons/ReadTime';

interface IHeaderIconsProps {
    date: string;
    lastUpdatedDate: string;
    wordCount: number;
    category: string;
    tags: string[];
}

const HeaderIcons = ({ date, lastUpdatedDate, wordCount, category, tags } : IHeaderIconsProps) => (
    <div className="blog-header-icons -gray-text">
        <PublishedOnDate date={date} />
        <UpdatedOnDate date={lastUpdatedDate} />
        <ReadTime wordCount={wordCount} />
        <Category category={category} />
        <Tags tags={tags} />
    </div>
);

export default HeaderIcons;