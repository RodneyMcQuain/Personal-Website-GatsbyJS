import React from 'react';
import IconText from '../../Shared/IconText';
import { FaTimesCircle } from '@meronex/icons/fa';
import styles from '../../../styles/layout/components/Blog/Posts/TagPills.module.scss';

interface IPillsProps {
    tagFilters: string[];
    setTagFilters: (tagFilters: string[]) => void;
}

const TagPills = ({ tagFilters, setTagFilters }: IPillsProps) => (
    <ul className={styles.pills}>
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