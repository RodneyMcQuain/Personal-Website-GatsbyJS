import React from 'react';
import AriaText from '../../Shared/AriaText';
import IconText from '../../Shared/IconText';
import { FaTag } from 'react-icons/fa';

interface ITagsProps {
    tags: string[];
}

const Tags = ({ tags }: ITagsProps) => {
    const delimetedTags = tags.join(', ');
    
    return (
        <AriaText altText={`Tags: ${delimetedTags}`} className="-small-text">
            <IconText icon={<FaTag />} text={delimetedTags} />
        </AriaText>
    );
}

export default Tags;