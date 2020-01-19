import React from 'react';

interface ITagsProps {
    tags: string[];
}

const Tags = ({ tags }: ITagsProps) => (
    <div className="-small-text">
        <span className="fa fa-tag" /> {tags.join(", ")}
    </div>
);

export default Tags;