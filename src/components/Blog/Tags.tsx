import React from 'react';
import Icon from '../Icon';
import AriaText from '../AriaText';

interface ITagsProps {
    tags: string[];
}

const Tags = ({ tags }: ITagsProps) => {
    const delimetedTags = tags.join(', ');
    
    return (
        <AriaText altText={`Tags: ${delimetedTags}`} className="-small-text">
            <Icon icon="fa fa-tag" /> {delimetedTags}
        </AriaText>
    );
}

export default Tags;