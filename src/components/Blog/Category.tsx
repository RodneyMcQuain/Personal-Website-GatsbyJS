import React from 'react';
import Icon from '../Icon';

interface ICategoryProps {
    category: string;
}

const Category = ({ category }: ICategoryProps) => (
    <div className="-small-text">
        <Icon icon="fa fa-sitemap" /> {category}
    </div>
);

export default Category;