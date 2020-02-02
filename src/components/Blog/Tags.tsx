import React from 'react';
import Icon from '../Icon';

interface ITagsProps {
    tags: string[];
}

const Tags = ({ tags }: ITagsProps) => {
    const delimetedTags = tags.join(', ');
    
    return (
        <div data-title={`Tags: ${delimetedTags}`} className="-small-text">
                <Icon icon="fa fa-tag" /> {delimetedTags}
        </div>
    );
}

export default Tags;