import React from 'react';
import { ALL_FILTER } from './ALL_FILTER';

type SetFilter = (filter: string) => void;

interface IBlogCategoryDropdownProps {
    categories: string[];
    filter: string;
    setFilter: SetFilter;
}

const ACTIVE_CLASS = 'active';

const BlogCategoryDropdown = ({ categories, filter, setFilter }: IBlogCategoryDropdownProps) => (
    <ul title="Categories" className="category-dropdown">
        <DropdownItem
            category={ALL_FILTER}
            filter={filter}    
            setFilter={setFilter}
        />
        {categories.map(category => (
            <DropdownItem
                category={category}
                filter={filter}    
                setFilter={setFilter}
            />
        ))}
    </ul>
);

interface IDropdownItemProps {
    category: string;
    filter: string;
    setFilter: SetFilter;
}

const DropdownItem = ({ category, filter, setFilter }: IDropdownItemProps) => (
    <li 
        className={getIsActive(category, filter)} 
        onClick={() => {
            setFilter(category);
            setCategoryFilterQueryString(category);
        }} 
        key={category}
    >
        {category}
    </li>
);

const getIsActive = (category: string, filter: string): string => (
    filter === category ? ACTIVE_CLASS : ''
);

const setCategoryFilterQueryString = (category: string) => {
    const categoryQueryString = new URLSearchParams(window.location.search);
    categoryQueryString.set('category', category)
    window.history.pushState(null, document.title, window.location.pathname + '?' + categoryQueryString.toString());
}

export default BlogCategoryDropdown;