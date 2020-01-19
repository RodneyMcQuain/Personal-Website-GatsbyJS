import React from 'react';
import Icon from '../Icon';

const Category = ({ category }) => (
    <div className="-small-text">
        <Icon icon="fa fa-list-alt" /> {category}
    </div>
);

export default Category;