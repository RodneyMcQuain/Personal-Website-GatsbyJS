import React from 'react';
import Icon from '../../Shared/Icon';
import '../../../styles/layout/blog/posts/_pills.scss';

interface IPillsProps {
    tagFilters: string[];
    setTagFilters: (tagFilters: string[]) => void;
}

const TagPills = ({ tagFilters, setTagFilters }: IPillsProps) => (
    <ul className="pills">
        {tagFilters.map(thisTag => (            
            <li onClick={() => setTagFilters(tagFilters.filter(tagFilter => thisTag !== tagFilter))}>
                <span className="btn" aria-label={`Remove ${thisTag} tag filter`}>
                    {thisTag} <Icon icon="fa fa-times-circle" />
                </span>
            </li>
        ))}
    </ul>
);

export default TagPills;