import React from 'react';
import { Category, Tags } from '../BlogTypes';
import CategoryDropdown from './CategoryDropdown';
import TagDropdown from './TagDropdown';
import TagPills from './TagPills';
import { blogFilters } from '../../../styles/layout/components/Blog/Posts/Filters.module.scss';

interface FiltersProps {
    categories: Category[];
    currentCategory: Category;
    setCurrentCategory: (currentCategory: Category) => void;
    tags: Tags;
    currentTags: Tags; 
    setCurrentTags: (currentCategory: Tags) => void;
}

const Filters = ({ categories, currentCategory, setCurrentCategory, tags, currentTags, setCurrentTags }: FiltersProps) => (
    <div className={blogFilters}>
        <CategoryDropdown
            categories={categories}
            filter={currentCategory}
            setFilter={setCurrentCategory}
        />

        <TagDropdown
            tags={tags}
            tagFilters={currentTags}
            setTagFilters={setCurrentTags}
        />

        <TagPills tagFilters={currentTags} setTagFilters={setCurrentTags} />
    </div>
);

export default Filters;