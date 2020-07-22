import React from 'react';
import IconText from '../../Shared/IconText';
import { FaTimesCircle } from 'react-icons/fa';
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
                    <IconText text={thisTag} icon={<FaTimesCircle />} iconPosition="after" />
                </span>
            </li>
        ))}
    </ul>
);

export default TagPills;