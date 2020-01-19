import React from 'react';
import Icon from '../Icon';

interface ITagsProps {
    tags: string[];
}

const Tags = ({ tags }: ITagsProps) => (
    <div className="-small-text">
        <Icon icon="fa fa-tag" /> {tags.join(", ")}
    </div>
);

export default Tags;