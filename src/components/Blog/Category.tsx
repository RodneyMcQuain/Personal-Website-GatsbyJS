import React from 'react';
import Icon from '../Icon';
import AriaText from '../AriaText';

interface ICategoryProps {
    category: string;
}

const Category = ({ category }: ICategoryProps) => (
    <AriaText altText={`Category: ${category}`} className="-small-text">
        <Icon icon="fa fa-sitemap" /> {category}
    </AriaText>
);

export default Category;