import React from 'react';
import BlogIcon from './BlogIcon';
import { FaSitemap } from 'react-icons/fa';

interface ICategoryProps {
    category: string;
}

const Category = ({ category }: ICategoryProps) => (
    <BlogIcon icon={<FaSitemap />} displayText={category} altText={`Category: ${category}`} />
);

export default Category;