import React from 'react';
import BlogIcon from './BlogIcon';
import { FaCalendarAlt } from 'react-icons/fa';

const PublishedOnDate = ({ date }) => (
    <BlogIcon icon={<FaCalendarAlt />} displayText={date} altText={`Published on: ${date}`} />
);

export default PublishedOnDate;