import React from 'react';
import AriaText from '../../Shared/AriaText';
import IconText from '../../Shared/IconText';
import { FaSitemap } from 'react-icons/fa';

interface ICategoryProps {
    category: string;
}

const Category = ({ category }: ICategoryProps) => (
    <AriaText altText={`Category: ${category}`} className="-small-text">
        <IconText icon={<FaSitemap />} text={category} />
    </AriaText>
);

export default Category;