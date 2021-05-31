import React from 'react';
import { IBlogPost, Category, Tags } from '../BlogTypes';
import Card from './Card';

interface CardsProps {
    posts: IBlogPost[];
    categoryFilter: Category;
    tagFilters: Tags;
}

const Cards = ({ posts, categoryFilter, tagFilters }: CardsProps) => (
    <div className="row display-flex">
        {posts.map(p => <Card post={p} categoryFilter={categoryFilter} tagFilters={tagFilters} />)}
    </div>
);

export default Cards;