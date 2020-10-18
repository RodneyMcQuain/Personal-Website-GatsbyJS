import React from 'react';
import BlogIcon from './BlogIcon';
import { FaTag } from '@meronex/icons/fa';

interface ITagsProps {
    tags: string[];
}

const Tags = ({ tags }: ITagsProps) => {
    const delimetedTags = tags.join(', ');
    
    return (
        <BlogIcon icon={<FaTag />} displayText={delimetedTags} altText={`Tags: ${delimetedTags}`}/>
    );
}

export default Tags;