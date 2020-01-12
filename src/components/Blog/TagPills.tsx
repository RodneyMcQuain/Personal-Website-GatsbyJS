import React from 'react';

interface IPillsProps {
    tagFilters: string[];
    setTagFilters: (tagFilters: string[]) => void;
}

const TagPills = ({ tagFilters, setTagFilters }: IPillsProps) => (
    <ul className="pills">
        {tagFilters.map(thisTag => (            
            <li onClick={() => setTagFilters(tagFilters.filter(tagFilter => thisTag !== tagFilter))}>
                <span className="btn" aria-label={`Remove ${thisTag} tag filter`}>
                    {thisTag} <span className="fa fa-times-circle"></span>
                </span>
            </li>
        ))}
    </ul>
);

export default TagPills;