import React, { useState } from 'react';
import Filters from './Filters';
import Cards from './Cards';
import { IBlogPost, Category, Tags } from '../BlogTypes';
import { isBrowser } from '../../../services/browser';
import { ALL_FILTER } from '../ALL_FILTER';

interface ContentContainerProps {
    posts: IBlogPost[];
    categories: Category[];
    tags: Tags;
}

const ContentContainer = ({ posts, categories, tags }: ContentContainerProps) => {
    const [currentCategory, setCurrentCategory] = useState(getInitialCategoryFilter());
    const [currentTags, setCurrentTags] = useState([]);

    return (
        <>
            <Filters
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                tags={tags}
                currentTags={currentTags}
                setCurrentTags={setCurrentTags}
            />

            <Cards
                posts={posts}
                categoryFilter={currentCategory}
                tagFilters={currentTags}
            />
        </>
    );
}

const getInitialCategoryFilter = () => {
    const locationSearch = isBrowser() && window.location.search;
    const queryStringCategoryOrAll = new URLSearchParams(locationSearch).get('category') || ALL_FILTER;
    return queryStringCategoryOrAll;
};

export default ContentContainer;