import React from 'react';
import BlogIcon from './BlogIcon';
import CalendarIcon from '../../Shared/CalendarIcon';

const PublishedOnDate = ({ date }) => (
    <BlogIcon icon={<CalendarIcon />} displayText={date} altText={`Published on: ${date}`} />
);

export default PublishedOnDate;