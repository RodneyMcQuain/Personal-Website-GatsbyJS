import React from 'react';
import PublishedOnDate from '../Icons/PublishedOnDate';
import UpdatedOnDate from '../Icons/UpdatedOnDate';
import Category from '../Icons/Category';
import Tags from '../Icons/Tags';
import ReadTime from '../Icons/ReadTime';
import Div from '../../Shared/UnstyledDiv';

interface IHeaderIconsProps {
    date: string;
    lastUpdatedDate: string;
    wordCount: number;
    category: string;
    tags: string[];
}

const HeaderIcons = ({ date, lastUpdatedDate, wordCount, category, tags } : IHeaderIconsProps) => (
    <div className="blog-header-icons -gray-text">
        <Div><PublishedOnDate date={date} /></Div>
        <Div><UpdatedOnDate date={lastUpdatedDate} /></Div>
        <Div><ReadTime wordCount={wordCount} /></Div>
        <Div><Category category={category} /></Div>
        <Div><Tags tags={tags} /></Div>
    </div>
);

export default HeaderIcons;