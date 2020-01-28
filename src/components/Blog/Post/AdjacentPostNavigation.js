import React from 'react';
import Link from 'gatsby-link';
import Icon from '../../Icon';

const AdjacentPostNavigation = ({ previous, next }) => (
    <div className="adjacent-navigation-container">
        {next ? <Link to={next.path}><Icon icon="fa fa-long-arrow-left" /> {next.title}</Link> : <EmptyDiv />}
        {previous ? <Link to={previous.path}>{previous.title} <Icon icon="fa fa-long-arrow-right" /></Link> : <EmptyDiv />}
    </div>
);

const EmptyDiv = () => <div aria-hidden="true"></div>;

export default AdjacentPostNavigation;