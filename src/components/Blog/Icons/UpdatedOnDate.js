import React from 'react';
import BlogIcon from './BlogIcon';
import { FaUserEdit } from 'react-icons/fa';

const UpdatedOnDate = ({ date }) => (
    date 
        ? <BlogIcon icon={<FaUserEdit />} displayText={date} altText={`Updated on: ${date}`} />
        : null
);

export default UpdatedOnDate;